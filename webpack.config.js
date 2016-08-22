var webpack = require('webpack');

var path = require("path");
module.exports = {
  entry: {
    app: ["./js/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
