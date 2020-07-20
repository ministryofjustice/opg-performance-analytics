const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "lib"),
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: require.resolve("perfume.js"),
        use: [
          {
            loader: "expose-loader",
          },
        ],
      },
    ],
  },
};
