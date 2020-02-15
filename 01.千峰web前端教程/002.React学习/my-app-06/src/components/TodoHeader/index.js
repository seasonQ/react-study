// 使用 类组件方式
import React, { Component } from 'react';

import PropTypes from 'prop-types'; // ES6

export default class TodoHeader extends Component {
  // 方式二：只有 类组件 才可以使用这种方式
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
      <h1 title= {title}>{children}</h1>
    )
  }
}

// 方式一：函数组件 和 类组件 都可以使用这种方式

// TodoHeader.propTypes = {
//   title: PropTypes.string
// }

// TodoHeader.defaultProps = {
//   title: '这是默认Title'
// }