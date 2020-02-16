# React 学习

`react` 官网： https://reactjs.org/ ，可以选择中文版；

快速搭建项目工具：[create-react-app](https://www.npmjs.com/package/create-react-app) ;

## **·** cra

cra: create-creat-app

> 描述：
>
> This package includes the global command for [Create React App](https://github.com/facebook/create-react-app).
> Please refer to its documentation:
>
> - [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
> - [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

### 1. 快速开始

示例：my-app

```shell
npx create-react-app my-app
cd my-app
npm start
```

使用 `npm start` 命令启动项目，成功。

### 2. 编写第一个 react 

示例：my-app-01

使用 `快速开始` 的方式，创建一个名为 `my-app-01` 的 `react` 项目。

删除项目中 `src` 文件夹下面的所有文件，自己来写（我觉得这里很有必要自己跟着视频写一下）。

> 第一步：新建 `index.js` 文件
>
> 因为要使用 `react`，所以首先引入 `react`；
>
> 因为要操作 `DOM`，所以引入 `react-dom`（`react-dom`里面的 `render()` 方法）；
>
> ```js
> import React from 'react';        // 引入 react 
> 
> import ReactDOM from 'react-dom'; // 引入 reactDom
> 
> // render() 前两个参数，第一个 react 元素，第二个 DOM 元素
> // 第一个参数使用 jsx 来
> ReactDOM.render(
>   <h1>Hello world !!!</h1>,
>   document.querySelector('#root')
> );
> ```
>
> 此时，运行项目，浏览器显示 `Hello world !!!`。
>
> 第二步：将 `render` 第一个参数提取出来，用函数表示，主要代码如下：
>
> ```js
> const createApp = () => {
>   return (
>     <div>
>       <h1>Hello world !!!</h1>
>     </div>
>   )
> }
> 
> const app = createApp();
> 
> ReactDOM.render(
>   app,
>   document.querySelector('#root')
> );
> ```
>
> 若果需要传参，主要代码如下：
>
> ```js
> const createApp = props => {
>   const { title, reactVersion } = props;
>   return (
>     <div>
>       {/** 在 jsx 中需要插入 js 部分，就需要一层 { }，注释也是 js 注释 */}
>       <h1 title= {title} >Hello world !!! </h1>
>       <div>React 的版本是 {reactVersion}</div>
>     </div>
>   )
> }
> 
> const app = createApp({
>   title: 'Hello world',
>   reactVersion: '^16.12.0'
> });
> ```
>
> 第三步，转为使用箭头函数的方式创建 `react` 组件

## **·** 组件

### 1. 创建组件

#### 方式一：使用箭头函数方式

主要代码

```js
// 创建组件的第一种方式：使用箭头函数，但是这个名字要大写开始。调用原理（过程），就是上述过程。
const App = props => {
  const { title, reactVersion } = props;
  return (
    <div>
      {/** 在 jsx 中需要插入 js 部分，就需要一层 { }，注释也是 js 注释 */}
      <h1 title= {title} >Hello world !!! </h1>
      <div>React 的版本是 {reactVersion}</div>
    </div>
  )
}

ReactDOM.render(
  <App title= 'Hello world' reactVersion= '^16.12.0' />,
  document.querySelector('#root')
);
```

#### 方式二：使用 JavaScript 类

示例：my-app-02

首先使用 `cra` 快速生成一个项目（`my-app-02`），删除 `src` 文件夹下的所有文件。类组件的核心代码如下：

```js
import React from 'react';

import { render } from 'react-dom';

// 定义组件的第二种方式，使用类继承 React.Component
class App extends React.Component {
  render () {
    const { desc } = this.props;
    return (
      <div>
        <h1>这是类组件</h1>
        <p>{ desc }</p>
      </div>
    )
  }
}

// 类组件渲染的原理
// const app = new App( {
//   desc: '类组件是一个类继承 React.Compoment'
// }).render();

render(
  <App desc= "类组件是一个类继承 React.Compoment" />,
  document.querySelector('#root')
);
```

> 注意：
>
> 在 `react16` 以前，使用如下方式创建一个类组件
>
> ```js
> React.creatClass({
>   render () {
>     return <h1>这是类组件</h1>
>   }
> })
> ```

### 2. jsx 的原理

示例：my-app-03

react 在真正渲染的时候会把 `jsx` 代码编译为js代码来运行。具体参考如下：

```js
import React from 'react';

import { render } from 'react-dom';

// 第一步：使用类创建组件
// 这里是使用类的形式创建的组件，使用 jsx 语法（非 js 代码）
// class App extends React.Component {
//   render () {
//     return (
//       <div className = 'desc' id = 'desc'>
//         <h1 className = 'desc-title'>jsx 的原理</h1>
//         <p>将 jsx 编译为 js 后再执行</p>
//       </div>
//     )
//   }
// }

// 第二步，上述 jsx 中的虚拟 DOM 树（vDOM）
// const appVDom = {
//   tag: 'div',
//   attrs: {
//     className: 'desc',
//     id: 'desc',
//   },
//   children: [
//     {
//       tag: 'h1',
//       attrs: {
//         className: 'desc-title',
//       },
//       children: [ 'jsx 的原理' ]
//     },
//     {
//       tag: 'p',
//       attrs: null,
//       children: [ '将 jsx 编译为 js 后再执行' ]
//     }
//   ]
// }

// 第三步，将 jsx 转义为 js
// 所以，react 在真正渲染的时候会把上面得代码编译为下面这个样子来运行（js代码）
class App extends React.Component {
  render () {
    return (
      // React.createElement 是一个方法，用于创建元素，可以有很多个参数，但是前两个参数是固定的
      // 第一个可以理解为标签名
      // 第二个可以理解为标签的属性
      // 剩下的，就是剩余的子元素（展开的 children）
      // React.createElement( type, [props], [...children])
      React.createElement(
        'div',
        {
          className: 'desc',
          id: 'desc',
        },
        React.createElement(
          'h1',
          {
            className: 'desc-title',
          },
          'jsx 的原理'
        ),
        React.createElement(
          'p',
          { },
          '将 jsx 编译为 js 后再执行'
        )
      )
    )
  }
}

render (
  <App />,
  document.querySelector('#root')
);
```

### 3. 组件中的样式

示例：my-app-04

#### 方式一：使用 style 内联

在标签行内直接写 style 样式；

#### 方式二：使用 class 方式

在标签行内加入 className 属性；

#### 方式三：classNames 插件

描述： A simple JavaScript utility for conditionally joining classNames together.

用法参考：https://www.npmjs.com/package/classnames

安装

```shell
npm install classnames --save
```

#### 方式四：styled-components 插件

用法参考：https://www.npmjs.com/package/styled-components

安装

```shell
npm install styled-components --save
```

> 注意：
>
> a) 名字首字母大写；
>
> b) 内部属性使用 `;` 分隔。

```js
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
          <li style = { styleOne } >方式一，style 内联方式</li>
          <li className = 'comp-style-two' >方式二，class 方式</li>
          <li className = { classNames('test01', { 'test02': true, 'test03': false, 'test04': true}) }>方式三：使用 classnames 插件</li>
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
```

`index.css` 的文件内容如下：

```css
.comp-style-two {
  color: #00ff00
}
```

### 4. 组件化结构

`react` 组件化项目的目录结构组织方式。

示例：my-app-05

> 参考 `my-app-05` 项目时，需要注意几个点：
>
> - `components` 结构目录方式；
>
> - `<></>` 和 `<Fragment></Fragment>` 两个标签的使用；
>
> - export 的两种方式：
>
>   ```js
>   // 方式一
>   import TodoHeader from './TodoHeader';
>   export {
>     TodoHeader,
>   }
>   
>   // 方式二
>   export { default as TodoHeader } from './TodoHeader';
>   ```

### 5. 组件的数据挂载 props 及 prop-types

#### props

示例：my-app-06

主要代码

```js
// 父组件中
class App extends Component {
  render () {
    return (
      <Fragment>
        <TodoHeader title= '代办事项'>
          <p>今日事，今日毕</p>
        </TodoHeader>
        <TodoInput btnText= '添加'></TodoInput>
      </Fragment>
    )
  }
}

// 子组件 TodoHeader 中，props ( props.chilrend 是指子元素 )
// 使用 类组件方式
import React, { Component } from 'react';
export default class TodoHeader extends Component {
  render () {
    const { title, children } = this.props;
    return (
      <h1 title= {title}>{children}</h1>
    )
  }
}

// 子组件 TodoInput 中，props ( props.chilrend 是指子元素 )
// 使用函数式创建组件
import React from 'react';
export default function TodoInput ( props ) {
  return (
    <div>
      <input type= 'text' /><button>{props.btnText}</button>
    </div>
  )
}

```

> 注意：
>
> - 传递 number、boolean 等非 string 类型的数据，需要使用 `{ }`；
> - props.chilrend 是指子元素

#### prop-types 类型检测

props 的类型检测

( `prop-types` 好像不需要额外安装了 )

描述： Runtime type checking for React props and similar objects.

用法参考：https://www.npmjs.com/package/prop-types

安装

```shell
npm install --save prop-types
```

使用

```js
import React from 'react';
import PropTypes from 'prop-types';
 
class MyComponent extends React.Component {
  // 方式二：只有 类组件 才可以使用这种方式
  static propTypes = {
  	optionalNumber: PropTypes.number,
  	optionalString: PropTypes.string.isRequired,                
  }

  render() {
    // ... do things with the props
  }
}

// 方式一：函数组件 和 类组件 都可以使用这种方式
MyComponent.propTypes = {
  optionalNumber: PropTypes.number,
  optionalString: PropTypes.string.isRequired,
}

```

#### porps 默认值

```js
import React from 'react';
import PropTypes from 'prop-types';
 
class MyComponent extends React.Component {
  // 方式二：只有 类组件 才可以使用这种方式
  static defaultProps = {
  	optionalNumber: 1,
  	optionalString: '',                
  }

  render() {
    // ... do things with the props
  }
}

// 方式一：函数组件 和 类组件 都可以使用这种方式
MyComponent.defaultProps = {
  optionalNumber: 1,
  optionalString: '',
}
```

### 6. state

示例：my-app-07

官网原话 `state 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。`

#### 声明两种方式

```js
// 使用 类组件方式
import React, { Component } from 'react';

export default class TodoHeader extends Component {
  // state 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
  // state 定义方式一: 
  state= {
    desc: '这是 state 中的状态'
  }

  // state 定义方式二，constructor:
  constructor ( props ) {
    super( props );
    this.state = {
      desc: '这是 state 中的状态'
    }
  }

  render () {
    return (
      <h1 >
        <div>{ this.state.desc }</div>
      </h1>
    )
  }
}
```

> 注意：
>
> 函数式组件没有 state。

#### 模板渲染语法

- 渲染数组时，常使用 `map`遍历

  ```jsx
    (
      <ol>
        {
          props.todos.map ( item => {
            return (
              <TodoItem key= {item.id}
                        { ...item } /> {/** 这里传递 props 使用了特殊技巧 */}
            )
          })
        }
      </ol>
    )
  ```

- 渲染富文本是，使用 `dangerouslySetInnerHTML`

  > `dangerouslySetInnerHTML` 是 React 为浏览器 DOM 提供 `innerHTML` 的替换方案 ( `__html` )。
  >
  > ```js
  > function createMarkup() {
  >   return {__html: 'First &middot; Second'};
  > }
  > 
  > function MyComponent() {
  >   return <div dangerouslySetInnerHTML={createMarkup()} />;
  > }
  > ```
  >
  > 参考地址： https://zh-hans.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

#### setState

`react` 中修改 `state` 需要使用 `setState`:

```js
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
    // ...
  }
```

使用 `setState` 方法修改数据，页面会重新渲染(我们想要的，直接使用 `=` 则不会)。

`setState` 方法是一个异步函数。如果要获取最新的 `state`，则可以在`setState`的第二个参数中获取。

> 补充:
>
> 表情字符串(如：`❤️、😱` 等 )：[https://emojipedia.org](https://emojipedia.org/)







## **·** 推荐 VSCode 插件

```shell
# ES7 React/Redux/GraphQL/React-Native snippets
```

