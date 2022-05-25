### vue 实例初始化的过程


1. 从/src/core/index文件开始
   1. `引入构建 Vue 的实例方法`
   2. 定义了 Vue 的原型方法 $isServer，$ssrContext
   3. 定义了 Vue 的静态方法 FunctionalRenderContext

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 定义了 Vue 原型方法_init；
stateMixin(Vue) // 定义了 Vue 原型方法 $data, $props, $set, $delete, $watch； 该文件里包含initState, initProps, initData, initComputed, initMethods, initWatch 的定义
eventsMixin(Vue)// 定义了 Vue 原型方法 $on, $once, $off, $emit
lifecycleMixin(Vue) // 定义了 Vue 原型方法 _update, $forceUpdate；该文件里包含 initLifecycle 的定义
renderMixin(Vue) // 定义了 Vue 原型方法 $nextTick, _render;该文件里包含 initRender 的定义
```

2. 初始化完成了哪些工作？

```js
Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    vm._uid = uid++
    vm._isVue = true
    if (options && options._isComponent) {
        // 内部组件
        initInternalComponent(vm, options)
    } else {
        // 合并配置
        vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
        )
    }
    // TODO
    if (process.env.NODE_ENV !== 'production') {
        initProxy(vm)
    } else {
        vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    initLifecycle(vm) // 完成 vm 实例的初始化属性「$children, $refs, _watcher, _inactive...」，并把 vm 放入到合适的 $children 节点 或 $root节点
    initEvents(vm) // 初始化实例的_event对象，_hasHookEvent属性，更新父组件的事件监听updateListeners
    initRender(vm) // 初始化实例的_vnode, $slots, $scopeSlots, _c, $createElement, 追踪了$attrs, $listeners
    callHook(vm, 'beforeCreate')
    initInjections(vm) // 根据 Inject 的 key，获取到vm实例的_provided 或 inject[key].defalut 所对应的数据，进行追踪----resolve injections before data/props
    initState(vm) // 初始化实例属性：_watchers，并执行：initProps， initMethods，有配置data时initData，否则追踪空数据，initComputed，initWatch
    initProvide(vm) // 初始化实例属性：_provided----resolve provide after data/props
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false)
        mark(endTag)
        measure(`vue ${vm._name} init`, startTag, endTag)
    }
    // 挂载实例
    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
    }
```

3. callHook的实现

```js
export function callHook (vm: Component, hook: string) {
 //   将 vm 更新到 targetStack 栈中，并更新 Dep.target
  pushTarget()
  const handlers = vm.$options[hook]
  const info = `${hook} hook`
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
        // 执行生命周期回调函数
      invokeWithErrorHandling(handlers[i], vm, null, vm, info)
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  //   将 vm 从 targetStack 栈中移除，并更新 Dep.target 为targetStack的栈顶元素
  popTarget()
}
```

4. initState

::: tip toggleObserving
该方法提供了控制开始与结束`创建追踪`的机制
:::

```js
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props) // 追踪vm.$options.propsOptions数据，并更新vm.$options._propKeys
  if (opts.methods) initMethods(vm, opts.methods) // 将方法挂到 vm 实例上，并绑定执行上下文对象为vm
  if (opts.data) {
    initData(vm) // 初始化了 vm._data；先检查了methods, props是否有同名数据，再对 data 进行数据追踪
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed) // 初始化了vm._computedWatchers，不是服务端渲染则对其getter创建watcher进行监听，并把 computed 方法绑定到 vm 上，并定义 commputedGetter 方法
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch) // 创建vm.$watch监听
  }
}
```

5. 挂载

+ 创建组件是有子组件挂载：child.$mount
+ 根据不同的平台提供了web、webRuntime、weexRuntime 的挂载方法
+ webRuntime版本需要处理模板编译 compileToFunctions 返回render 与 staticRenderFns方法，再调用 Web 的$mount方法
+ Vue.compile = compileToFunctions
+ 其他两个版本的 $mount 都是调用 mountComponent，其定义了updateComponent方法

```js{8,12,17}
// 非生成环境
updateComponent = () => {
  const name = vm._name
  const id = vm._uid
  const startTag = `vue-perf-start:${id}`
  const endTag = `vue-perf-end:${id}`

  mark(startTag)
  const vnode = vm._render()
  mark(endTag)
  measure(`vue ${name} render`, startTag, endTag)

  mark(startTag)
  vm._update(vnode, hydrating)
  mark(endTag)
  measure(`vue ${name} patch`, startTag, endTag)
}
updateComponent = () => {
  vm._update(vm._render(), hydrating)
}
```
