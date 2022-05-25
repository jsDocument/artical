# API

- provide父/inject子
- <keep-alive><component :is=""/></keep-alive> 动态组件
- 异步组件defineAsyncComponent与 suspense
- app.component() 也可以局部注册
- slot
- ref
- $forceUpdate
- 全局方法
  - Vue.createApp
- 实例方法
  - component
  - directive
  - use
  - mount
- 实例配置
  - data
    - 访问：vm.$data.key 或 vm.key
  - computed 基于它们的响应依赖关系缓存
  - watch 允许执行异步操作，也可以设置执行操作条件
  - method
  - template
  - components
  - props
  - hooks
    - [mount][init event & lifecycle]beforeCreate
    - [init injections & reactivity]created
    - [has Template--compile To Render Function/ el's innerHTML as Template]
    - beforeMount
    - [create app.$el and append] mounted
    - [data changes] beforeUpdate, updated
    - beforeUnmount
    - unmounted
- 插值 {{}}
- 绑定属性：指令
  - v-html
  - v-no:click 事件监视器---简写@click，支持多事件
  - v-bind:[动态参数]---简写:参数 或:[动态参数]
  - :class = 'obj'，值可以是一个对象，key 为 class 值，value 为计算表达式；也可以是数组['key1', 'key2']；特：组件的 class
  - :style 支持对象、数组、多重值
  - v-model
  - v-if
  - v-for
  - v-once
- 修饰符
  - .stop
  - .prevent
  - .capture
  - .self
  - .once
  - .passive
  - @click.prevent.self 会阻止元素本身及其子元素的点击的默认行为，而 @click.self.prevent 只会阻止对元素自身的点击的默认行为
  - 按键别名
  - .enter
  - .tab
  - .delete (捕获“删除”和“退格”键)
  - .esc
  - .space
  - .up
  - .down
  - .left
  - .right
  - .ctrl
  - 系统修饰键
  - .alt
  - .shift
  - .meta
  - .exact
  - 鼠标按钮修饰符
  - .left
  - .right
  - .middle
  - 输入
  - .lazy
  - .number
  - .trim
- 渲染函数 h() 创建 VNode 的函数

```js
render() {
  return h(
    'h' + this.level, // 标签名
    {}, // prop 或 attribute
    this.$slots.default() // 包含其子节点的数组
  )
},
```

- 组件与自定义元素的区别

mutiple
disabled

text 和 textarea 元素使用 value property 和 input 事件；
checkbox 和 radio 使用 checked property 和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。
