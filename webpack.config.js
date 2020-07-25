const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    filename: '[name].[contenthash].js',//filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
        moduleIds: 'hashed',
         runtimeChunk: 'single',
         splitChunks: {
                 cacheGroups: {
                   vendor: {
                     test: /[\\/]node_modules[\\/]/,
                     name: 'vendors',
                     chunks: 'all',
                   },
                 },
               },
       },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    host:"0.0.0.0"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching',
      filename: 'index.html',
      template: "public/index.html"
    })
  ],

};