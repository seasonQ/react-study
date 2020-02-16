import React from 'react';

export default props => {
  console.log( 'props', props);
  return (
    <li>{props.title} - { props.isCompleted ? '已完成': '未完成'}</li>
  )
}