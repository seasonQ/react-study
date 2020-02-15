import React from 'react';

import { render } from 'react-dom';

import './index.css';

import classNames from 'classnames';

import styled from 'styled-components';

const CompStyleFour = styled.li`
  font-size: 20px;
  color: #a6a7a8;
`;

class App extends React.Component {
  render () {
    
    const styleOne = {
      color: '#ff0000'
    };

    return (
      <div>
        <h1>组件样式控制的几种方式</h1>
        <ol>
          {/* 方式一：style 内联方式 */}
          <li style = { styleOne } >方式一，style 内联方式</li>
          {/* 方式二：class 方式 */}
          <li className = 'comp-style-two' >方式二，class 方式</li>
          {/* 方式三：使用 classnames 插件，下面例子中，class 应该是 'test01 test02 test04' */}
          <li className = { classNames('test01', { 'test02': true, 'test03': false, 'test04': true}) }>方式三：使用 classnames 插件</li>
          {/* 方式四：使用 styled-components 插件 */}
          <CompStyleFour>方式四，使用 styled-components 插件</CompStyleFour>
        </ol>
      </div>
    )
  }
}
render(
  <App />,
  document.querySelector('#root')
)