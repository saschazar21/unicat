const { parse } = require('react-docgen-typescript');
const webpackConfig = require('react-scripts/config/webpack.config.dev');

module.exports = {
  propsParser: parse,
  webpackConfig,
}