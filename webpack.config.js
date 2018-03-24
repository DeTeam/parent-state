const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.jsx",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  output: {
    path: join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.jsx?$/, use: "babel-loader" }]
  },
  plugins: [new HtmlWebpackPlugin()]
};
