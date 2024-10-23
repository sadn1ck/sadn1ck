const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

/**
 * @param { import('@11ty/eleventy').UserConfig } eleventyConfig
 * */
module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./styles/");
  eleventyConfig.addWatchTarget("./images/");
  eleventyConfig.addWatchTarget("./partials/");
  eleventyConfig.addPassthroughCopy("./images/");
  eleventyConfig.addPassthroughCopy("./styles/");
  eleventyConfig.ignores?.add("**/*.draft.md");

  eleventyConfig.addPlugin(syntaxHighlight, {
    preAttributes: {
      class: "highlight",
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

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://anikd.com",
    },
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/atom.xml",
    collection: {
      name: "blogs", // iterate over `collections.blogs`
      limit: 0, // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Anik Das",
      subtitle: "rss feed for blogs @ anikd.com",
      base: "https://anikd.com/",
      author: {
        name: "Anik Das",
      },
    },
  });

  return {
    dir: {
      output: "dist",
    },
  };
};
