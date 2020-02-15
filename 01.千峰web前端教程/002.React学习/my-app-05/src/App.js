import React, { Component, Fragment } from 'react';

import { 
  TodoHeader,
  TodoInput,
  TodoList,
} from './components';

export default class App extends Component {
  render () {
    return (
      
      // <div>
      //   <TodoHeader />
      //   <TodoInput />
      //   <TodoList />
      // </div>
      
      // 多了一层 div，如何将其消除？

      // 方式一: <></>
      // <>
      //   <TodoHeader />
      //   <TodoInput />
      //   <TodoList />
      // </>

      // 方式二: <Fragment></Fragment>
      <Fragment>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </Fragment>
    )
  }
}