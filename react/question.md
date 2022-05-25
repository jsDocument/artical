### 常见的 react 面试题目

#### React 的生命周期有哪些？

1. 初始化阶段：组件的初始化工作，如定义 this.state 的初始内容
2. 挂载阶段：
   + componentWillMount：发生在 render 函数之前，还没有挂载 Dom
   + render：根据组件的 props 和 state，return 一个React元素
   + componentDidMount：发生在 render 函数之后，已经挂载 Dom，且只会被调用一次
3. 更新阶段：父组件重新 render 引起子组件重新渲染
   1. props 更新时
      + componentWillReceiveProps(nextProps,nextState)：这个生命周期主要为我们提供对 `props 发生改变的监听`，如果你需要在 props 发生改变后，相应改变组件的一些 state。在这个方法中改变 state 不会二次渲染，而是直接合并 state。
      + shouldComponentUpdate(nextProps,nextState)：这个生命周期需要返回一个 Boolean 类型的值，判断是否需要更新渲染组件，优化 react 应用的主要手段之一，当返回 false 就不会再向下执行生命周期了，在这个阶段不可以 setState()，会导致循环调用。
      + componentWillUpdate(nextProps,nextState)：这个生命周期主要是给我们一个时机能够处理一些在 Dom 发生更新之前的事情，如获得 Dom 更新前某些元素的坐标、大小等，在这个阶段不可以 setState()，会导致循环调用。**一直到这里 this.props 和 this.state 都还未发生更新**
      + render
      + componentDidUpdate(prevProps, prevState)：在此时已经完成渲染，Dom 已经发生变化，state 已经发生更新，prevProps、prevState 均为上一个状态的值。
   2. state 更新时
      + shouldComponentUpdate
      + componentWillUpdate
      + render
      + componentDidUpdate
4. 卸载阶段。
   + componentWillUnmount：在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount  中创建的订阅等。componentWillUnmount 中不应调用 setState，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。


```javascript
const babel = require('@babel-/core')
const sourceCode = ``
const result = babel.transform(sourceCOde, {
  plugins: [
    ['@babel/plugin-transform-react-jsx', {runtime: 'classic/automatic'}]
  ]
})
console.log(result.code)
```

#### react 性能优化

+ React.lazy + import()动态路由 和 React.Suspense----fallback


#### ErrorBoundary 错误收集



