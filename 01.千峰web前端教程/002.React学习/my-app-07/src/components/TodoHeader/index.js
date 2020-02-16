// 使用 类组件方式
import React, { Component } from 'react';

import PropTypes from 'prop-types'; // ES6

export default class TodoHeader extends Component {
  // state 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
  // state 定义方式一: 
  // state= {
  //   desc: '这是 state 中的状态'
  // }

  // state 定义方式二，constructor 
  constructor ( props ) {
    super( props );
    this.state = {
      desc: '这是 state 中的状态'
    }
  }


  // 类型检测 方式二：只有 类组件 才可以使用这种方式
  // 类型检测
  static propTypes = {
    title: PropTypes.string
  }
  // 默认值
  static defaultProps = {
    title: '这是默认Title'
  }

  render () {
    const { title, children } = this.props;
    return (
      <h1 title= {title}>
        {children}
        <div>{ this.state.desc }</div>
      </h1>
    )
  }
}

// 类型检测 方式一：函数组件 和 类组件 都可以使用这种方式

// TodoHeader.propTypes = {
//   title: PropTypes.string
// }

// TodoHeader.defaultProps = {
//   title: '这是默认Title'
// }