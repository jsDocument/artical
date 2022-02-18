+ react 的理解
  + 用于构建用户界面的 javascript 库
  + 组件化的方式构建 web 应用程序
  + JSX声明式的方式定义用户界面
    + 命令式渲染命令，让程序一步步执行
  + 组件化
  + 复用性，通用性，跨平台
  + JSX --- 不引入新的语法 且 结构清晰、可读性强、样式、事件高内聚、低耦合
+ AST 先进行词法分析--parse-->tokens、再语法分析---解析成 JSON对象来描述、语义分析
+ 小顶堆-----方便找到优先级最高的任务
+ lane 模型----添加任务优先级

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

## React 渲染流程

+ 性能瓶颈
+ 设计理念---异步可中断、增量更新
+ 渲染分为 3 个阶段
  + scheduler 选择优先级高的任务进入 reconciler
  + reconciler 计算变更内容
  + react-dom 把变更的内容渲染到页面上
  + fiber 是一个执行单元，也是一种数据结构；把一个任务拆分成多个小任务，每个任务向浏览器申请时间片，requestIdleCallback「异步可中断」
+ ReactDOM.unstable_createRoot(dom).render(<App/>)，但把整个执行时间变成了
+ 屏幕刷新率 1s 60帧, 1000/60, js 执行与渲染的间隔是16.6ms，不让一帧的工作量超过16 ms
+ 帧 javascript 执行引擎和渲染引擎在同一个线程，两者互斥；每帧开头包括样式计算、布局和绘制

+ render 的全过程：调度、调和、提交

