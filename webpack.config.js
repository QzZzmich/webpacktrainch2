"use strict";

var NODE_ENV = process.env.NODE_ENV || 'development',
  webpack = require('webpack');

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js"
  },

  watch: true,

  devtool: "cheap-module-source-map",

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015'
    }]
  }
};