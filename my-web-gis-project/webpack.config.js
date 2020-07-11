const path = require('path');

const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {
  entry: './src/index.js',
  plugins: [new ArcGISPlugin()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};