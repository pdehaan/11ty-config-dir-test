module.exports = config => {
  config.addCollection("pages", collection =>
    collection.getFilteredByGlob("src/pages/*.njk")
  );
  config.addCollection("posts", collection =>
    collection.getFilteredByGlob("src/posts/*.njk")
  );
};
