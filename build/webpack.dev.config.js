const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    contentBase: './dist',
    port: 3058,
    hot: true
  }
});
