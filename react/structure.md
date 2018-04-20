# 目录结构

+ addons——一些比较常用的插件、工具
+ isomorphic
    - React.js 暴露对外的API
    - modern 定义的ReactComponent与PureReactComponent
    - hooks
    - classic
    - children
+ shared——公共方法
+ test——测试方法
+ umd
+ renderers——React核心代码, 渲染部分
    + art
    + dom
    + stack/client
    + stack/server
    + stack/reconciler 协调器
    + shared
    + shared/event  事件处理
    + fiber  重写了React核心算法, 架构进行了升级, 未来可能会用到
    + native 跨平台实现Android和IOS

## 实现中重要的点

+ 元素和组件的创建
    1. ReactElement元素是一个数据类, 包含props, refs, key 等变量
    2. ReactComponent是一个控制类, 包含组件状态, 操作方法等, 是React对内的一个很得要的类。
+ createClass() 创建组件类对象
+ createElement() 创建组件实例对象, JSX经过babel调用的createElement()创建实例对象
+ React组件插入DOM流程: 创建了ReactElement和ReactComponent后, 还需要将virtual DOM插入真实的DOM中, React利用virtual DOM生成HMTL, 将HTML插入父组件中, 面root组件正好是我们ReactDOM.render()方法中传入的DOM原生对象。
+ React生命周期
+ setState 数据绑定, 利用队列和transaction来管理setState， 避免无谓的界面更新

## fbjs 工具函数集
