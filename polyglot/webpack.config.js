const path = require("path");

const port = 3000;
const openBrowser = true;

console.log("path", path.resolve(__dirname, "public"));

module.exports = {
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: port,
    open: openBrowser,
    historyApiFallback: {
      index: "index.html",
    },
    static: "public",
  },
};
