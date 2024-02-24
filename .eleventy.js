const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownItAnchor = require("markdown-it-anchor");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

/**
 * @param { import('@11ty/eleventy/src/UserConfig') } eleventyConfig
 * */
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./styles/");
  eleventyConfig.addWatchTarget("./images/");
  eleventyConfig.addPassthroughCopy("./images/");
  eleventyConfig.addPassthroughCopy("./styles/");
  // Customize Markdown library settings:
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink({
        class: "header-anchor link-underline",
        safariReaderFix: true,
      }),
      level: [1, 2, 3, 4],
    });
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
