const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: __dirname
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.ejs',
      filename: '../static/index.html',
      inject: true,
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};
