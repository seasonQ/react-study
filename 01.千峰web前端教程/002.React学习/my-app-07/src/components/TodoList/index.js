import React from 'react';

import TodoItem from './TodoItem';
export default ( props ) => {
  return (
    <ol>
      {/* <TodoItem /> */}

      {
        props.todos.map ( item => {
          return (
            <TodoItem key= {item.id}
                      { ...item } />
          )
        })
      }
    </ol>
  )
}