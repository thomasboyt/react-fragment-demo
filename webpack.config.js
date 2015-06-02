var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: "./app.js"
  },

  output: {
    path: 'build/',
    filename: '[name].bundle.js'
  },

  resolve: {
    root: path.resolve('./node_modules')
  },

  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
