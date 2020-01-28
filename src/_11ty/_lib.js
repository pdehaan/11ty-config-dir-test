module.exports = {
  isoString(date) {
    return new Date(date).toISOString();
  },
  localeDateString(date, dateStyle = "long") {
    return new Date(date).toLocaleDateString([], { dateStyle });
  }
};
