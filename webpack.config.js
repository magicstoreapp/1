const currentTask = process.env.npm_lifecycle_event;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fse= require('fs-extra');
const postCSSPlugins=[
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
];

class RunAfterCompile {
  apply(compiler){
    compiler.hooks.done.tap("Copy images", function(){
      fse.copySync("./public/locales", "./dist/locales");
    });
  }
}
let pages=fse.readdirSync("./public").filter(function(file){
  return file.endsWith(".html");
}).map(function(page){
  return new HtmlWebpackPlugin({
    filename:page,
    template:`./pubic/${page}`
  })
});

let config = {
  entry:   './src/index.js',  
}

//----------Development server -------------------------------
if (currentTask == "dev") {

  config.mode = "development",

  config.output = {
    filename: '[name].[contenthash].js',//filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  config.devServer= {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    host: "0.0.0.0"
  },


  config.optimization = {
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
  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",{loader:"postcss-loader",options:{plugins:postCSSPlugins}}]
      }
    ]
  },
  config.devtool= 'cheap-module-eval-source-map',
  
  config.plugins =[
        new HtmlWebpackPlugin({
      filename:"index.html",
      template:"./public/index.html"
    })
  ]
}


//----------Development server -------------------------------

if (currentTask == "build") {

  config.mode = "production",
  postCSSPlugins.push(require("cssnano"));
  config.output = {
    filename: '[name].[contenthash].js',//filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  
  config.optimization = {
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
  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader",
      {loader:"postcss-loader",options:{plugins:postCSSPlugins}}]
      }
    ]
  },
  config.devtool= 'cheap-module-eval-source-map',
  config.plugins = [
    new MiniCssExtractPlugin({filename:"styles.[chunkhash].css"}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"./public/index.html"
    }),
    new RunAfterCompile()
  ]
}

module.exports = config;
