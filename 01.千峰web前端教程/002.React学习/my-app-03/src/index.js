import React from 'react';

import { render } from 'react-dom';

// 第一步：使用类创建组件
// 这里是使用类的形式创建的组件，使用 jsx 语法（非 js 代码）
// class App extends React.Component {
//   render () {
//     return (
//       <div className = 'desc' id = 'desc'>
//         <h1 className = 'desc-title'>jsx 的原理</h1>
//         <p>将 jsx 编译为 js 后再执行</p>
//       </div>
//     )
//   }
// }

// 第二步，上述 jsx 中的虚拟 DOM 树（vDOM）
// const appVDom = {
//   tag: 'div',
//   attrs: {
//     className: 'desc',
//     id: 'desc',
//   },
//   children: [
//     {
//       tag: 'h1',
//       attrs: {
//         className: 'desc-title',
//       },
//       children: [ 'jsx 的原理' ]
//     },
//     {
//       tag: 'p',
//       attrs: null,
//       children: [ '将 jsx 编译为 js 后再执行' ]
//     }
//   ]
// }

// 第三步，将 jsx 转义为 js
// 所以，react 在真正渲染的时候会把上面得代码编译为下面这个样子来运行（js代码）
class App extends React.Component {
  render () {
    return (
      // React.createElement 是一个方法，用于创建元素，可以有很多个参数，但是前两个参数是固定的
      // 第一个可以理解为标签名
      // 第二个可以理解为标签的属性
      // 剩下的，就是剩余的子元素（展开的 children）
      // React.createElement( type, [props], [...children])
      React.createElement(
        'div',
        {
          className: 'desc',
          id: 'desc',
        },
        React.createElement(
          'h1',
          {
            className: 'desc-title',
          },
          'jsx 的原理'
        ),
        React.createElement(
          'p',
          { },
          '将 jsx 编译为 js 后再执行'
        )
      )
    )
  }
}

render (
  <App />,
  document.querySelector('#root')
);