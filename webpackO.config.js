//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './src/js/index.js',
 output: {
  path: path.join(__dirname, 'dist'),
  filename: 'build.js'
 },
 module: {
  rules: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   query: {
    presets: ['env', 'react', 'es2015', 'stage-2']
   }
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  },
  {
    test: /\.json$/, // To load the json files
    loader: 'json-loader'
   }]
 }
}
