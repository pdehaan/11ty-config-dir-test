module.exports = config => {
  const aliases = ["default", "page", "post"];
  for (const alias of aliases) {
    config.addLayoutAlias(alias, `${alias}.html`);
  }
};
