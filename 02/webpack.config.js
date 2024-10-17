const path = require('path');
const webpackMerge = require('webpack-merge').default;
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    'index' : path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {  
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      { 
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), 
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),  
  ],
  externals: {
    'vue': 'window.Vue'
  }
}

if (process.env.NODE_ENV === 'development') {
  config = webpackMerge(baseConfig, {
    devtool: 'inline-cheap-module-source-map', // 断点到源码指定位置的内容
    devServer: {
      static: {
        directory: path.join(__dirname), // 服务器将从项目的根目录提供静态文件
      },
      compress: true,
      port: 6001,
      hot: false, // hot 被禁用，代码变更将导致整个页面刷新，而不是局部更新
      compress: false, //  Gzip 压缩
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hello Vue',
        filename: 'index.html', // 输出 HTML 文件的名称
        template:'./index.html', // 模板文件路径
        minify: false, // 压缩
        inject: false, // 自动注入资源文件
        templateParameters: { // 模板参数
          publicPath: path.join(__dirname),
          js: [
            './node_modules/vue/dist/vue.global.js',
            './index.js'
          ],
          css: [
            './index.css'
          ],
        },
      })
    ]
  })
} else {
  config = webpackMerge(baseConfig, {
    optimization: {
      minimizer: [
        new TerserPlugin({}),
        new CssMinimizerPlugin({}),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hello Vue',
        filename: 'index.html',
        template:'./index.html',
        minify: false,
        inject: false,
        templateParameters: {
          publicPath: path.join(__dirname),
          js: [
            'https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js',
            './index.js'
          ],
          css: [
            './index.css'
          ],
        },
      })
    ]
  })
}

module.exports = config;