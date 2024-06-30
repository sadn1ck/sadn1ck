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
  eleventyConfig.ignores.add("**/*.draft.md");

  eleventyConfig.amendLibrary("md", () => {});
  eleventyConfig.on("eleventy.before", async () => {
    const shiki = await import("shiki");
    const highlighter = await shiki.getHighlighter({
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
      }),
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
  return {
    dir: {
      output: "dist",
    },
  };
};
