import React from 'react';        // 引入 react 

import ReactDOM from 'react-dom'; // 引入 reactDom

// const createApp = props => {
//   const { title, reactVersion } = props;
//   return (
//     <div>
//       {/** 在 jsx 中需要插入 js 部分，就需要一层 { }，注释也是 js 注释 */}
//       <h1 title= {title} >Hello world !!! </h1>
//       <div>React 的版本是 {reactVersion}</div>
//     </div>
//   )
// }

// const app = createApp({
//   title: 'Hello world',
//   reactVersion: '^16.12.0'
// });

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

// render() 前两个参数，第一个 react 元素，第二个 DOM 元素
// 第一个参数使用 jsx 来
ReactDOM.render(
  <App title= 'Hello world' reactVersion= '^16.12.0' />,
  document.querySelector('#root')
);