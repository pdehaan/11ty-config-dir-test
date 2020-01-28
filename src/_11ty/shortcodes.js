const lib = require("./_lib");

module.exports = config => {
  config.addShortcode("time", (date, dateStyle) => {
    const isoDate = lib.isoString(date);
    const localeDate = lib.localeDateString(date, dateStyle);
    return `<time datetime="${isoDate}">${localeDate}</time>`;
  });
};
