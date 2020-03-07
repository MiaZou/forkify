const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'), // absolute path, buildin note package
    filename: 'bundle.js'
  },
  mode: 'development'
};