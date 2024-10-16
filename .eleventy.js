const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

/** @type {import('shiki').BundledTheme} */
const DARK_THEME = "vitesse-dark";
/** @type {import('shiki').BundledTheme} */
const LIGHT_THEME = "vitesse-light";

/**
 * @param { import('@11ty/eleventy').UserConfig } eleventyConfig
 * */
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addWatchTarget("./styles/");
  eleventyConfig.addWatchTarget("./images/");
  eleventyConfig.addWatchTarget("./partials/");
  eleventyConfig.addPassthroughCopy("./images/");
  eleventyConfig.addPassthroughCopy("./styles/");
  eleventyConfig.ignores?.add("**/*.draft.md");

  eleventyConfig.amendLibrary("md", () => {});
  eleventyConfig.on("eleventy.before", async () => {
    const shiki = await import("shiki");
    const highlighter = await shiki.getSingletonHighlighter({
      themes: [LIGHT_THEME, DARK_THEME],
      langs: ["ts", "tsx", "go", "json5", "jsonc", "css", "html"],
    });
    await highlighter.loadTheme(LIGHT_THEME);
    await highlighter.loadTheme(DARK_THEME);

    eleventyConfig.amendLibrary("md", (mdLib) =>
      mdLib.set({
        highlight: (code, lang) => {
          return highlighter.codeToHtml(code, {
            lang,
            themes: {
              dark: DARK_THEME,
              light: LIGHT_THEME,
            },
          });
        },
      })
    );
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://anikd.com",
    },
  });

  eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
    return new Date(dateVal).toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
  eleventyConfig.addFilter("isBlog", function (content) {
    const split = content.split("blogs/");
    if (split[0] === "/" && split[1] && split[1]?.length > 0) {
      return true;
    }
    return false;
  });

  function isValidDimension(value) {
    return typeof value === "number" || typeof value === "string";
  }

  eleventyConfig.addLiquidShortcode(
    "image",
    async function (src, alt = "", width, height) {
      if (
        typeof this.page?.inputPath === "string" &&
        this.page.inputPath.startsWith("./blogs")
      ) {
        width = isValidDimension(width) ? width : "100%";
        height = isValidDimension(height) ? height : "auto";
        const blogSlug = this.page.fileSlug;
        const external = src?.startsWith?.("http") ?? false;
        const blogImageSrc = external
          ? src
          : `/images/blogs/${blogSlug}/${src}`;
        return `<div class="img-wrapper" data-state="closed" data-img-alt="${alt}"><img loading="lazy" class="blog-img" src="${blogImageSrc}" width="${width}" height="${height}" alt="${alt}" loading="lazy" /></div>`;
      }
      return "";
    }
  );

  return {
    dir: {
      output: "dist",
    },
  };
};
