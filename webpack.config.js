'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/Matrix.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'Matrix.js'
  },
  module: {
    loaders: [
      // {test: /\.css$/, loader: 'style!css'},
      // {test: /\.scss$/, loader: 'style!css!sass?' +
      //                           'includePaths[]=' +
      //                           __dirname + '/src'},
      {test: /\.(js|jsx)$/, loader: 'jsx-loader?harmony'}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }
    })
  ]
};
