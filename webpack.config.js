"use strict";

var NODE_ENV = process.env.NODE_ENV || 'development',
  webpack = require('webpack');

module.exports = {
  entry: "./home",
  output: {
    filename: "build.js"
  },

  watch: true,

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=es2015'
    }]
  }
};