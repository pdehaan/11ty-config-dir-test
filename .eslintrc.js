module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ["eslint:recommended"],
  root: true,
  rules: {
    "eqeqeq": "error",
    "quotes": ["error", "double"],
    "prefer-const": "error",
    "no-var": "error"
  }
};
