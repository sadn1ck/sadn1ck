const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);
  /*
  eleventyConfig.addPlugin(syntaxHighlight, {
    init: function ({ Prism }) {
      console.log('Prism')
    },
  });
  */
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.mp4");
  const options = {
    html: true,
    breaks: true,
    linkify: false,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    // Use liquid in html templates
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist",
    },
  };
};
