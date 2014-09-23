'use strict';

var webpack = require('webpack');
var ETP = require('extract-text-webpack-plugin');
var LIB_NAME = 'react-matrix';

module.exports = {
  entry: './src/Matrix.jsx',
  output: {
    path: __dirname + '/dist',
    filename: LIB_NAME + '.js',
    libraryTarget: "umd",
    library: 'Matrix'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ETP.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ETP.extract('style-loader',
                            'css-loader!sass-loader?includePaths[]=' +
                            __dirname + '/src')
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }
    }),
    new ETP(LIB_NAME + '.css', {
      allChunks: true
    })
  ]
};
