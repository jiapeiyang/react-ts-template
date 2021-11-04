const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const variable = require('./webpackUtils/variable');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { DIST_PATH } = variable;

const config = {
  mode: 'development',
  cache: { type: 'memory' },
  devtool: 'eval-cheap-module-source-map',
  stats: 'errors-only',
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    port: 3000,
    hot: true,
  },
};

const mergedConfig = webpackMerge.merge(baseConfig, config);
module.exports = mergedConfig;
