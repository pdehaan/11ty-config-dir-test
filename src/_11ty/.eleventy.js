const collections = require("./collections");
const filters = require("./filters");
const layoutAliases = require("./layoutaliases");
const shortcodes = require("./shortcodes");

module.exports = eleventyConfig => {
  collections(eleventyConfig);
  filters(eleventyConfig);
  layoutAliases(eleventyConfig);
  shortcodes(eleventyConfig);

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->"
  });

  return {
    dir: {
      input: "src",
      output: "www",
      includes: "_includes",
      layouts: "_layouts"
    },
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"]
  };
};
