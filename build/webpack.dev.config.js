const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      chunks: ['app'],
      chunksSortMode: 'manual',
      title: 'list'
    }),

    new ExtractTextPlugin({
      filename: 'src/css/style.[name].css'
    })

  ],
  devServer: {
    port: 3058,
    hot: true,
    contentBase: "./dist",
    stats: {
      colors: true
    },
    historyApiFallback: true,
    inline: true
  }
});
