const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/client/index.js',
  module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,  //excludes files/directories to be used in a loader
            loader: "babel-loader"
                }
              ]
         }
}
