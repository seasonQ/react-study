import React from 'react';

import { render } from 'react-dom';

// 定义组件的第二种方式，使用类
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