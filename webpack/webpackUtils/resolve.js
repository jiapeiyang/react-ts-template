const path = require('path');
const variable = require('./variable');
const { SRC_PATH, ROOT_PATH } = variable;

module.exports = {
  extensions: ['.tsx', '.ts', '.js', '.json'],
  modules: [path.resolve(ROOT_PATH, 'node_modules')],
  mainFields: ['main'],
  alias: {
    '@': SRC_PATH,
    '@images': path.resolve(SRC_PATH, 'assets/images'),
  },
};
