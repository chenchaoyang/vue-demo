var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //entry: __dirname + "/src/main.js", //入口文件
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: __dirname + "/dist", //打包后导出文件夹
    filename: "bundle.js" //导出的文件名
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: 'es2015'
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['app']
    })
  ],
  devServer: {
    port: 3058,
    // hot: true,
    contentBase: "./dist",
    stats: {
      colors: true
    },
    historyApiFallback: true,
    inline: true
  }
}
