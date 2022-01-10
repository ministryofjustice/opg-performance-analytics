const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  target: ["web", "es5"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "lib"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
