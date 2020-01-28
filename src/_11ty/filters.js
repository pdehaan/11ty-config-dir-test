const util = require("util");
const lib = require("./_lib");
const pkg = require("../../package.json");

module.exports = config => {
  config.addFilter("absurl", url => new URL(url, pkg.homepage).href);
  config.addFilter("isoString", lib.isoString);
  config.addFilter("localeDateString", lib.localeDateString);

  config.addFilter("inspect", obj => util.inspect(obj));
};
