import React, { Component } from 'react';

export default class Like extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      isLike: false,
    }
  }

  doClickLike = () => {
    // 方法一：setState 参数，传入 对象
    // this.setState({
    //   isLike: !this.state.isLike
    // })

    // 方法二：setState 参数，传入 方法
    // this.setState(()=> {
    //   return {
    //     isLike: !this.state.isLike
    //   }
    // })

    // 方法二的改良版
    this.setState( ( preState, preProps ) => {
      // console.log(">>>>>>>>>>>>>>>preState", preState);
      // console.log(">>>>>>>>>>>>>>>preProps", preProps);
      return {
        isLike: !preState.isLike
      }
    }, () => {
      // 由于 setState 是异步的，如果要获取到最新的 state，应该在这个回调里来获取
      // console.log(">>>>>>>>>>>>>>>>>newState", this.state);
    })
  }

  render () {
    const { isLike } = this.state;
    return (
      <div>
        <span onClick = { this.doClickLike } >
          { isLike ? '❤️': '🤍'}
        </span>
      </div>
    )
  }
}