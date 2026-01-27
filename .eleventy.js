module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("app-ads.txt");
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    const date =
      value === "now" || value === undefined || value === null
        ? new Date()
        : new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    if (format === "yyyy") {
      return String(date.getFullYear());
    }

    return date.toLocaleDateString("ja-JP");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
    templateFormats: ["md", "njk", "html"]
  };
};
