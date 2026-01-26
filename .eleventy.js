module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("add-ads.txt");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
    templateFormats: ["md", "njk", "html"]
  };
};
