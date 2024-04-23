const path = require('path');
const DIR_ROOT = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stats: 'minimal',
  entry: path.resolve(DIR_ROOT, 'src/js/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'lib/index.template.html',
      inject: 'body',
      minify: true
    })
  ],
  output: {
    path: path.resolve(DIR_ROOT, 'dist/js'),
    filename: 'bundle.js',
    clean: true
  },
};