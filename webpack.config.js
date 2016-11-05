/*
* @Author: taochen
* @Date:   2016-11-02 11:59:17
* @Last Modified by:   taochen
* @Last Modified time: 2016-11-05 12:00:54
*/

var path = require("path")
var webpack = require("webpack")

var env = process.env.NODE_ENV || "dev"

var devPlugins = []
var productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  })
]

module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel",
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: "style!css!stylus",
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.svg$/,
        loader: "url",
      },
    ],
  },
  plugins: env === "dev" ? devPlugins : productionPlugins,
}
