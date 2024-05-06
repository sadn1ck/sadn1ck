const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

/** @type {import('shiki').BundledTheme} */
const DARK_THEME = "vitesse-dark";
/** @type {import('shiki').BundledTheme} */
const LIGHT_THEME = "vitesse-light";

/**
 * @param { import('@11ty/eleventy').UserConfig } eleventyConfig
 * */
module.exports = (eleventyConfig, options) => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./styles/");
  eleventyConfig.addWatchTarget("./images/");
  eleventyConfig.addWatchTarget("./partials/");
  eleventyConfig.addPassthroughCopy("./images/");
  eleventyConfig.addPassthroughCopy("./styles/");

  eleventyConfig.amendLibrary("md", () => {});
  eleventyConfig.on("eleventy.before", async () => {
    const shiki = await import("shiki");
    const highlighter = await shiki.getHighlighter({
      ...options,
      langs: [
        "js",
        "ts",
        "tsx",
        "jsx",
        "go",
        "elixir",
        "json",
        "json5",
        "jsonc",
        "yaml",
        "css",
        "postcss",
        "html",
        "plaintext",
      ],
    });
    await highlighter.loadTheme(LIGHT_THEME);
    await highlighter.loadTheme(DARK_THEME);
    eleventyConfig.amendLibrary("md", (mdLib) =>
      mdLib.set({
        highlight: (code, lang) =>
          highlighter.codeToHtml(code, {
            lang,
            themes: {
              dark: DARK_THEME,
              light: LIGHT_THEME,
            },
          }),
      })
    );
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://anikd.com",
    },
  });

  eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
    var theDate = new Date(dateVal);
    return theDate.toLocaleDateString(locale, {
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
