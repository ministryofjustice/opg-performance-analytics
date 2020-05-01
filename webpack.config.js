const path = require("path");

module.exports = {
  entry: "./src/performanceAnalytics.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "lib"),
  },
};
