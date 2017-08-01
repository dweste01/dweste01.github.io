const webpack = require('webpack');

module.exports = {
  entry: './browser/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    publicPath: '/public/'

  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0'] // if you aren't using 'babel-preset-es2015', then omit the 'es2015'
        }
      },
      {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
      }
    ]
  },
  node: {
    fs: "empty",
    module: "empty",
    net: "empty",
    tls: "empty"
  }
};
