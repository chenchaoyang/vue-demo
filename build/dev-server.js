const webpack = require("webpack");
const path = require('path');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.config.js');
const open = require('open');

const port = 3058;
const host = 'localhost';
const serverAddr = `http://${host}:${port}`;

const options = {
  contentBase: path.join(__dirname, "dist"),
  hot: true,
  host: host,
  inline: true // 实时刷新
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(port, 'localhost', () => {
  console.log('dev server listening on port 3058');
  open(serverAddr);
});
