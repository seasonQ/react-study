import React, { Component, Fragment } from 'react';

import { TodoHeader, TodoInput, TodoList } from './components';

export default class App extends Component {
  render () {
    return (
      <Fragment>
        {/* <TodoHeader title= '代办事项'> */}
        <TodoHeader >
          <p>今日事，今日毕</p>
        </TodoHeader>
        {/* <TodoInput btnText= '添加'></TodoInput> */}
        <TodoInput btnText= '添加'></TodoInput>
        <TodoList />
      </Fragment>
    )
  }
}