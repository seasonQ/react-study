# React 学习

`react` 官网： https://reactjs.org/ ，可以选择中文版；

快速搭建项目工具：[create-react-app](https://www.npmjs.com/package/create-react-app) ;

## **·** cra

cra: create-creat-app

> 描述：
>
> This package includes the global command for [Create React App](https://github.com/facebook/create-react-app).
> Please refer to its documentation:
>
> - [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
> - [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

### 1. 快速开始

```shell
npx create-react-app my-app
cd my-app
npm start
```

使用 `npm start` 命令启动项目，成功。

### 2. 编写第一个 react 

使用 `快速开始` 的方式，创建一个名为 `my-app-01` 的 `react` 项目。

删除项目中 `src` 文件夹下面的所有文件，自己来写（我觉得这里很有必要自己跟着视频写一下）。

> 第一步：新建 `index.js` 文件
>
> 因为要使用 `react`，所以首先引入 `react`；
>
> 因为要操作 `DOM`，所以引入 `react-dom`（`react-dom`里面的 `render()` 方法）；
>
> ```js
> import React from 'react';        // 引入 react 
> 
> import ReactDOM from 'react-dom'; // 引入 reactDom
> 
> // render() 前两个参数，第一个 react 元素，第二个 DOM 元素
> // 第一个参数使用 jsx 来
> ReactDOM.render(
>   <h1>Hello world !!!</h1>,
>   document.querySelector('#root')
> );
> ```
>
> 此时，运行项目，浏览器显示 `Hello world !!!`。
>
> 第二步：将 `render` 第一个参数提取出来，用函数表示，主要代码如下：
>
> ```js
> const createApp = () => {
>   return (
>     <div>
>       <h1>Hello world !!!</h1>
>     </div>
>   )
> }
> 
> const app = createApp();
> 
> ReactDOM.render(
>   app,
>   document.querySelector('#root')
> );
> ```
>
> 若果需要传参，主要代码如下：
>
> ```js
> const createApp = props => {
>   const { title, reactVersion } = props;
>   return (
>     <div>
>       {/** 在 jsx 中需要插入 js 部分，就需要一层 { }，注释也是 js 注释 */}
>       <h1 title= {title} >Hello world !!! </h1>
>       <div>React 的版本是 {reactVersion}</div>
>     </div>
>   )
> }
> 
> const app = createApp({
>   title: 'Hello world',
>   reactVersion: '^16.12.0'
> });
> ```
>
> 第三步，转为使用箭头函数的方式创建 `react` 组件

## **·** 组件

### 1. 创建组件

#### 方式一：使用箭头函数方式

主要代码

```js
// 创建组件的第一种方式：使用箭头函数，但是这个名字要大写开始。调用原理（过程），就是上述过程。
const App = props => {
  const { title, reactVersion } = props;
  return (
    <div>
      {/** 在 jsx 中需要插入 js 部分，就需要一层 { }，注释也是 js 注释 */}
      <h1 title= {title} >Hello world !!! </h1>
      <div>React 的版本是 {reactVersion}</div>
    </div>
  )
}

ReactDOM.render(
  <App title= 'Hello world' reactVersion= '^16.12.0' />,
  document.querySelector('#root')
);
```

#### 方式二：使用 JavaScript 类

首先使用 `cra` 快速生成一个项目（`my-app-02`），删除 `src` 文件夹下的所有文件。类组件的核心代码如下：

```js
import React from 'react';

import { render } from 'react-dom';

// 定义组件的第二种方式，使用类继承 React.Component
class App extends React.Component {
  render () {
    const { desc } = this.props;
    return (
      <div>
        <h1>这是类组件</h1>
        <p>{ desc }</p>
      </div>
    )
  }
}

// 类组件渲染的原理
// const app = new App( {
//   desc: '类组件是一个类继承 React.Compoment'
// }).render();

render(
  <App desc= "类组件是一个类继承 React.Compoment" />,
  document.querySelector('#root')
);
```

> 注意：
>
> 在 `react16` 以前，使用如下方式创建一个类组件
>
> ```js
> React.creatClass({
>   render () {
>     return <h1>这是类组件</h1>
>   }
> })
> ```
>
> 

























## **·** 推荐 VSCode 插件

```shell
# ES7 React/Redux/GraphQL/React-Native snippets
```

