'use strict';

var webpack = require('webpack');
var ETP = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?includePaths[]=' +
                 __dirname + '/src'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};
