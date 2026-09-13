import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const directory = fileURLToPath(new URL("./", import.meta.url));
const digest = (value) => createHash("sha256").update(value).digest("hex");

// This hook is never called by `astro build` or `astro preview`.
export default {
  name: "local-resume",
  hooks: {
    "astro:server:setup": ({ server, logger }) => {
      let attemptedRevision;
      let pdf;
      let pdfVersion;
      let error = "";
      let warnings = "";
      let queue = Promise.resolve();

      async function compile(source, revision, reason) {
        const started = performance.now();
        logger.info(`Compiling resume.typ (${reason}, ${revision.slice(0, 8)})`);
        attemptedRevision = revision;
        error = "";
        warnings = "";
        await mkdir(`${directory}.cache`, { recursive: true });
        try {
          warnings = await new Promise((resolve, reject) => {
            const child = execFile(
              "typst",
              [
                "compile",
                "--root",
                directory,
                "--font-path",
                `${directory}fonts`,
                "--ignore-system-fonts",
                "--creation-timestamp",
                "0",
                "-",
                `${directory}.cache/next.pdf`,
              ],
              { cwd: directory, timeout: 15_000, maxBuffer: 1024 * 1024 },
              (failure, _stdout, stderr) => {
                if (failure) {
                  reject(
                    new Error(
                      failure.code === "ENOENT"
                        ? "Typst is not on PATH. Install Typst 0.15.1 (`brew install typst`), then restart the dev server."
                        : stderr || failure.message,
                    ),
                  );
                } else resolve(stderr);
              },
            );
            // Compile the exact saved snapshot, even if an external editor changes it mid-build.
            child.stdin.on("error", () => {}); // execFile reports spawn/exit failures above.
            child.stdin.end(source);
          });
        } catch (failure) {
          error = failure.message;
          logger.error(
            `Compilation failed after ${Math.round(performance.now() - started)} ms\n${error}`,
          );
          return; // A Typst error keeps the last successful preview intact.
        }
        await rename(`${directory}.cache/next.pdf`, `${directory}.cache/resume.pdf`);
        pdf = await readFile(`${directory}.cache/resume.pdf`);
        pdfVersion = digest(pdf);
        if (warnings) logger.warn(warnings.trim());
        logger.info(
          `Compiled in ${Math.round(performance.now() - started)} ms → resume/.cache/resume.pdf (${pdf.length} bytes)`,
        );
      }

      async function state() {
        const source = await readFile(`${directory}resume.typ`, "utf8");
        const revision = digest(source);
        if (revision !== attemptedRevision) {
          await compile(source, revision, attemptedRevision ? "disk change" : "initial preview");
        }
        return { source, revision, pdfVersion, error, warnings };
      }

      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, "http://localhost");
        if (url.pathname !== "/__resume" && url.pathname !== "/__resume/") return next();

        const reply = (status, type, body) => {
          res.writeHead(status, {
            "Content-Type": type,
            "Cache-Control": "no-store",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
          });
          res.end(body);
        };
        const json = (status, body) => reply(status, "application/json", JSON.stringify(body));

        async function handle() {
          const host = new URL(`http://${req.headers.host}`);
          if (
            !["localhost", "127.0.0.1", "[::1]"].includes(host.hostname) ||
            !["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(req.socket.remoteAddress) ||
            req.headers["sec-fetch-site"] === "cross-site"
          )
            return json(403, { error: "The resume editor is available only on localhost." });

          if (req.method === "POST") {
            if (
              req.headers.origin !== host.origin ||
              req.headers["content-type"] !== "application/json"
            ) {
              return json(403, { error: "Saving requires a same-origin JSON request." });
            }
            const chunks = [];
            let bytes = 0;
            for await (const chunk of req) {
              chunks.push(chunk);
              bytes += chunk.length;
              if (bytes > 256 * 1024) return json(413, { error: "Source exceeds 256 KB." });
            }
            let input;
            try {
              input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            } catch {
              return json(400, { error: "Invalid JSON." });
            }
            if (typeof input?.source !== "string" || typeof input?.revision !== "string") {
              return json(400, { error: "Source and revision are required." });
            }

            // Serialize the revision check, disk write, and compilation across all tabs.
            const operation = queue.then(async () => {
              const current = await readFile(`${directory}resume.typ`, "utf8");
              if (digest(current) !== input.revision) {
                logger.warn(
                  "Save rejected: resume.typ changed on disk; browser revision is stale.",
                );
                return json(409, {
                  error: "resume.typ changed on disk. Load the disk version before saving.",
                });
              }
              await mkdir(`${directory}.cache`, { recursive: true });
              await writeFile(`${directory}.cache/source.typ`, input.source);
              await rename(`${directory}.cache/source.typ`, `${directory}resume.typ`);
              await compile(input.source, digest(input.source), "save");
              json(200, {
                source: input.source,
                revision: digest(input.source),
                pdfVersion,
                error,
                warnings,
              });
            });
            queue = operation.catch(() => {}); // Release the queue; handle() reports the failure.
            await operation;
            return;
          }

          if (req.method !== "GET") return json(405, { error: "Use GET or POST." });
          switch (url.searchParams.get("asset")) {
            case "state": {
              const operation = queue.then(async () => json(200, await state()));
              queue = operation.catch(() => {});
              await operation;
              return;
            }
            case "pdf":
              if (!pdf) return json(404, { error: "No successful compilation yet." });
              logger.info(`Serving PDF (${pdf.length} bytes, ${pdfVersion.slice(0, 8)})`);
              res.setHeader("Content-Disposition", 'inline; filename="Anik-Das-Resume.pdf"');
              return reply(200, "application/pdf", pdf);
            case "editor.js":
              return reply(
                200,
                "text/javascript; charset=utf-8",
                await readFile(`${directory}editor.js`),
              );
            case "editor.css":
              return reply(
                200,
                "text/css; charset=utf-8",
                await readFile(`${directory}editor.css`),
              );
            case null:
              return reply(
                200,
                "text/html; charset=utf-8",
                await readFile(`${directory}editor.html`),
              );
            default:
              return json(404, { error: "Unknown editor asset." });
          }
        }

        handle().catch((failure) => {
          logger.error(failure.message);
          json(500, { error: failure.message });
        });
      });
    },
  },
};
