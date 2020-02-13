## 基础搭建



### 1. webpack构建项目

**第一步，安装 webpack**

```shell
# 创建并进入文件夹
mkdir basic-config
cd .\basic-config\

# npm 初始化
npm init
# 安装 webpack 依赖
npm install webpack webpack-cli --save-dev
```

**第二步，修改 package.json** 

> 首先，在 scripts 中，添加 "build"命令： ' "build": "webpack --mode production", ';
>
> 在 basic-config 文件夹下，创建 src/index.js 文件（文件内容随意）；
>
> 运行 npm run build 命令，会在 basic-config 文件夹下，生成 dist/main.js。

**第三步，编写配置文件 webpack.config.js**

首先，编写 配置文件，

```txt
# 在 basic-config 文件夹下，创建 webpack.config.js 文件
```

> webpack.config.js 文件内容：
>
> ```js
> const path = require('path');
> 
> module.exports = {
> 
>   // 单入口
>   entry: './src/index.js',
> 
>   // 多入口
>   // entry: {
>   //   home: './src/home.js',
>   //   about: './src/about.js'
>   // },
> 
>   output: {
>     path: path.resolve(__dirname, 'dist'),
>     filename: '[name].[chunkHash:8].js'
>   }
> }
> ```
>
> package.json 中 build 命令如下：
>
> ```js
> "webpack --mode production --config webpack.config.js"
> ```

然后，提取 配置文件到 scripts 文件夹中（basic-config/scripts）

> 1. 新建 srcipts 文件夹，并将 webpack.config.js 文件移入到该目录下；
> 2. 修改 build 命令："webpack --mode production --config scripts/webpack.config.js"；
> 3. 修改 webpack.config.js 中 output 的path, path.resolve( process.cwd(), "dist" )。
>

（可以使用 `npm run build` 命令校验一下）



### 2. webpack 生成 HTML 

#### **·** html-webpack-plugin

描述： Plugin that simplifies creation of HTML files to serve your bundles。

用法参考： https://www.npmjs.com/package/html-webpack-plugin

**第一步，引入 html-webpack-plugin**

目的： 创建 html，并且自动引入 打包生成的 js 文件。

安装

```shell
npm i --save-dev html-webpack-plugin
# 或者 yarn add --dev html-webpack-plugin
```

```js
// 使用方式, webpack.config.js 
// plugins: [new HtmlWebpackPlugin()]
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
```

**第二步，html 模板文件**

首先，创建 `basic-config/public/index.html` 文件，具体内容见下文引用；

然后，修改 `webpack.config.js` 文件中的 `new HtmlWebpackPlugin()` 处，具体改动如下:

```js
new HtmlWebpackPlugin({
	title: 'webpack',
	template: 'public/index.html',  // 模板 HTML 位置
})
```

> 附件：public/index.html 文件
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
> <meta charset="UTF-8">
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> <title>这是模板文件</title>
> </head>
> <body>
> <div id="root"></div>
> </body>
> </html>
> ```

（可以使用 `npm run build` 命令校验一下，此时应该正确打包，并以 `public/index.html` 为模板生成了 index.html 文件，而且 html 文件中自动引入了打包生成的 js 文件）



### 3. webpack 处理样式

首先，在 src 文件夹下，新建 index.css文件，内容如下

```css
body {
  background-color: blue;
  display: flex;
}

::placeholder {
  color: #ffffff;
}
```

然后，在 src 文件夹下的 index.js 文件中引入 index.css 文件，

```js
import './index.css';
```

执行打包命令时发现，报错，需要 css-loader 处理（`You may need an appropriate loader to handle this file type`）。

#### **·** css-loader

描述： The `css-loader` interprets `@import` and `url()` like `import/require()` and will resolve them。

用法参考： https://www.npmjs.com/package/css-loader

第一步，安装

```shell
npm install --save-dev css-loader
```

第二步，更改 webpack.config.js 文件（与output同级，新增 `module: { rules: []}` 键）

```json
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
```

#### **·** style-loader

第三步，由于，需要 style-loader，所以，安装 style-loader,

```shell
npm install --save-dev style-loader
```

此时，打包后，样式成功被写入 js 文件中（打包结果没有 css 文件）。将 css 样式写入js中不符合习惯，此时需要提取 css 文件，webpack 3 及之前使用 [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)，webpack 4 及之后，使用 [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)。

#### **·** mini-css-extract-plugin

用法参考： https://www.npmjs.com/package/mini-css-extract-plugin

安装

```shell
npm install --save-dev mini-css-extract-plugin
```

使用参考

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          'css-loader',
        ],
      },
    ],
  },
};
```

具体使用方法

**第一步，**

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkHash:8].css',
      chunkFilename: '[id].css',
    }),
  ]
```

**第二步，**
将 `module` 中的 `rules` 中的 `['style-loader', 'css-loader']` 改为 `[MiniCssExtractPlugin.loader, 'css-loader']`。

打包验证：打包项目，会在 dist 文件夹下面生成 main.css 文件，并且被自动引入到 index.html 文件中。



### 4. webpack 本地服务

#### **·** webpack-dev-server

作用： 提供本地服务，并且是热加载。

用法参考： https://www.npmjs.com/package/webpack-dev-server

第一步，安装

```shell
npm install webpack-dev-server --save-dev
```

第二步，修改 package.json 文件

在 package.json 文件的 scripts 中，新增 
    `"dev": "webpack-dev-server --mode development --config scripts/webpack.config.js",`。

运行命令，`npm run dev` 启动项目环境。

#### **·** 本地服务相关配置

`scripts/webpack.config.js` 文件中，和 `plugins` 同级，配置 `devServer`，这里仅仅稍微配置一下，具体可参考 [devServer](https://www.webpackjs.com/configuration/dev-server/#devserver)。

```js
  devServer: {
    port: 3000,   // 端口
    open: true,   // 项目运行时，在浏览器自动打开
  }
```

运行验证：执行 `npm run dev` 命令后，会在浏览器中，自动打开项目，并且端口为 `3000`。



### 5.  配置 css 预处理 autoprefixer

#### **·** 处理 less，less-loader

描述： A Less loader for webpack. Compiles Less to CSS。

用法参考： https://www.npmjs.com/package/less-loader

首先，安装

```shell
npm install less less-loader --save-dev

# 如果有 less，则：npm install less-loader --save-dev
```

然后，配置 webpack.config.js

```js
// 参考
rules: [
  {
      test: /\.less$/,
      loader: 'less-loader', // compiles Less to CSS
  },
],
```

在 `webpack.config.js` 中 `module` 的 `rules` 中，加入

```js
      {
        test: /\.less$/i,
        use: [ 
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'less-loader',
        ],
      },
```

验证： 在 `src` 文件夹下新建 `app.less` 文件，并在 `index.js` 引用（`import './index.css'`）。

> `app.less` 文件如下：
>
> ```less
> div {
>   color: yellow;
>   
>   span {
>     font-size: 12px;
>   }
> }
> ```

执行打包命令，打包成功后，发现 `dist` 文件夹下的 `css` 文件中有如下样式：

```css
div {
  color: yellow;
}
div span {
  font-size: 12px;
}

```

`less` 文件被转为 `css` 文件成功。

#### **·** autoprefixer

用来自动添加样式属性头（::-webkit-、::-moz- 等）

用法参考：https://www.npmjs.com/package/autoprefixer3

首先，安装 autoprefixer

```shell
npm i -D autoprefixer
```

接着，配置 webpack.config.js

```js
rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
```

官方文档中，告知需要配置 `postcss-loader`，所以安装 `postcss-loader`。

#### **·** postcss-loader

可参考：https://www.npmjs.com/package/postcss-loader

```shell
npm i -D postcss-loader
```

教程中，需要 `postcss.config.js`，因此，在主目录下，新建 postcss.config.js 文件

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

执行打包命令后，验证， `dist` 问价夹下的 `css` 文件中，`::placeholder` 属性被添加前缀

```css
body ::-webkit-input-placeholder {
  color: #ffffff;
}
body ::-moz-placeholder {
  color: #ffffff;
}
body :-ms-input-placeholder {
  color: #ffffff;
}
body ::-ms-input-placeholder {
  color: #ffffff;
}
body ::placeholder {
  color: #ffffff;
}
```

但是，像这类的 `body{ display: flex;}`，没有加前缀。这是就需要配置 `browserslist`。

#### **·** browserslist

参考： https://www.npmjs.com/package/browserslist

修改 `package.json` 文件，新增 "`browserslis`t" 键值：

```json
"browserslist": [
    "last 8 version"
  ]
```

打包验证，发现，

```txt
	display: flex;
=>
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
```

**成功！！！**



