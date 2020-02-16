// 使用函数式创建组件
import React from 'react';

import PropTypes from 'prop-types';

export default function TodoInput ( props ) {
  return (
    <div>
      <input type= 'text' /><button>{props.btnText}</button>
    </div>
  )
}

TodoInput.propTypes = {
  btnText: PropTypes.string,
}

TodoInput.defaultProps = {
  btnText: 'AddBtn',
}