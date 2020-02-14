const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyPlugin = require('copy-webpack-plugin');


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
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'static/images/[name].[ext]',
          publicPath: '/',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
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

    new CopyPlugin([
      { 
        from: path.resolve( process.cwd(), 'src/statics/'), 
        to: path.resolve( process.cwd(), 'dist/statics/') 
      },
    ]),
  ],

  devServer: {
    port: 3000,   // 端口
    open: true,   // 项目运行时，在浏览器自动打开
  }
}