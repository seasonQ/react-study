import React, { Component, Fragment } from 'react';

import { TodoHeader, TodoInput, TodoList, Like } from './components';

export default class App extends Component {
  constructor ( props ) {
    super ( props );
    this.state = {
      todos: [
        {
          id: 1,
          title: '吃饭',
          article: '<span>fdsfsd<b>dfsf</b></span>',
          isCompleted: true,
        },
        {
          id: 2,
          title: '睡觉',
          isCompleted: false,
        },
        {
          id: 3,
          title: '打豆豆',
          isCompleted: true,
        },
      ]
    }
  }

  render () {
    return (
      <Fragment>
        {/* <TodoHeader title= '代办事项'> */}
        <TodoHeader >
          <p>今日事，今日毕</p>
        </TodoHeader>
        {/* <TodoInput btnText= '添加'></TodoInput> */}
        <TodoInput btnText= '添加'></TodoInput>
        <TodoList todos = { this.state.todos } />

        {/* 富文本 */}
        <div dangerouslySetInnerHTML={ {__html: this.state.todos[0].article} } />

        {/* 点赞组件 */}
        <Like />
      </Fragment>
    )
  }
}