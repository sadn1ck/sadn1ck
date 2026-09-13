# Local resume workspace

Run `pnpm dev` and open [localhost:4321/__resume](http://localhost:4321/__resume).
The source is `resume/resume.typ`. Edit its content and layout directly, or use
the browser editor.

- Editing saves the file and compiles after 800 ms of inactivity.
- Cmd/Ctrl+S or **Save & compile** saves and compiles immediately, even without edits.
- Compiler diagnostics appear below the source. A failed compile preserves the last good PDF.
- External source edits are picked up within two seconds while this tab is visible.
- Conflicting saves from another tab or editor are rejected. Copy any browser edits
  you want to keep, then choose **Load disk version** to resume editing.
- Generated files stay in ignored `resume/.cache/`.

## Compilation logs

Run `pnpm resume:logs` in a terminal to follow the dev-server logs. The
`local-resume` entries include compile triggers, duration, output size, Typst
warnings/errors, stale-save conflicts, and PDF requests. Normal idle polling is
quiet. With a foreground dev server, these appear in its terminal directly.

## Typst and fonts

Install Typst on your PATH (`brew install typst` on macOS), then restart the dev
server. Tested with **Typst 0.15.1**. The normal website dev server and production
build do not need Typst; compilation starts only when opening the resume editor.

The upright and italic Inter variable fonts are vendored directly from
[rsms/inter, release 4.1](https://github.com/rsms/inter/releases/tag/v4.1)
([original archive](https://github.com/rsms/inter/releases/download/v4.1/Inter-4.1.zip)).
Their license is in `fonts/LICENSE.txt`. Compilation ignores system fonts.

To compile directly from the repository root:

```sh
typst compile --root resume --font-path resume/fonts --ignore-system-fonts resume/resume.typ /tmp/resume.pdf
```

## Scope

`dev.mjs` registers one pathname, `/__resume`, in Astro's `astro:server:setup`
hook. Its source, PDF, CSS, and JavaScript requests use query parameters on
that same pathname. Requests require a loopback connection and localhost Host;
saves also require a matching Origin and JSON content type. Source is passed
directly to the CLI without a shell, with the Typst root limited to this directory.

No route, editor assets, fonts, or PDF are emitted by `astro build`. The production
`/resume` link and existing redirect are unchanged. Publishing and CI are deferred.
