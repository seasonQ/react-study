const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

  // 单入口
  entry: './src/index.js',

  // 多入口
  // entry: {
  //   home: './src/home.js',
  //   about: './src/about.js'
  // },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[chunkHash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [ 
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: 'public/index.html',  // 模板 HTML 位置
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[chunkHash:8].css',
      chunkFilename: '[id].css',
    }),
  ],

  devServer: {
    port: 3000,   // 端口
    open: true,   // 项目运行时，在浏览器自动打开
  }
}