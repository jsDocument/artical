1. 初始化实例属性

```javascript
Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++

    let startTag, endTag
    // 性能统计相关
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-init:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // 内部使用Vnode部分使用
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    // 性能相关
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
 }
 ```

 2. initLifecycle(vm)

 ```javascript
     export function initLifecycle (vm: Component) {
      const options = vm.$options

      // locate first non-abstract parent
      let parent = options.parent
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent
        }
        parent.$children.push(vm)
      }

      vm.$parent = parent
      vm.$root = parent ? parent.$root : vm

      vm.$children = []
      vm.$refs = {}

      vm._watcher = null
      vm._inactive = null
      vm._directInactive = false
      vm._isMounted = false
      vm._isDestroyed = false
      vm._isBeingDestroyed = false
    }
```

 3. initEvents(vm)

 ```javascript
 export function initEvents (vm: Component) {
  vm._events = Object.create(null)
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners
  if (listeners) {
    updateComponentListeners(vm, listeners)
  }
}
 ```

 4. initRender(vm) 给vm添加一些虚拟dom、slot等相关属性和方法，然后调用beforeCreate钩子

 ```javascript
 export function initRender (vm: Component) {
  vm.$vnode = null 
  vm._vnode = null 
  vm._staticTrees = null
  const parentVnode = vm.$options._parentVnode
  const renderContext = parentVnode && parentVnode.context
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext)
  vm.$scopedSlots = emptyObject

  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)

  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}
 ```
5. initInjections(vm)和initProvide(vm) 将父组件_provided中定义的值，通过inject注入到子组件

```javascript
export function initProvide (vm: Component) {
  const provide = vm.$options.provide
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide
  }
}

export function initInjections (vm: Component) {
  const inject: any = vm.$options.inject
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    const isArray = Array.isArray(inject)
    const keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const provideKey = isArray ? key : inject[key]
      let source = vm
      while (source) {
        if (source._provided && provideKey in source._provided) {
          if (process.env.NODE_ENV !== 'production') {
            defineReactive(vm, key, source._provided[provideKey], () => {
              warn(
                `Avoid mutating an injected value directly since the changes will be ` +
                `overwritten whenever the provided component re-renders. ` +
                `injection being mutated: "${key}"`,
                vm
              )
            })
          } else {
            defineReactive(vm, key, source._provided[provideKey])
          }
          break
        }
        source = source.$parent
      }
    }
  }
}
```

6. initState(vm)主要是操作数据了，props、methods、data、computed、watch，从这里开始就涉及到了Observer、Dep和Watcher

```javascript
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch) initWatch(vm, opts.watch)
}
```

然后，就会调用我们的created钩子函数；该阶段基本就是对传入数据的格式化、数据的双向绑定、以及一些属性的初始化。

7. $mount
src/entries/web-runtime-with-compiler.js

```javascript
const idToTemplate = cached(id => {
  const el = query(id)
  return el && el.innerHTML
})

// 保存之前定义的$mount方法
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)
  const options = this.$options
  // 不存在render，处理更新template
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            )
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      //根据template对生成的模板进行解析，创建render及staticRenderFns函数，staticRenderFns用来保存template中静态内容的render
      const { render, staticRenderFns } = compileToFunctions(template, {
        shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
  // 进行挂载
  return mount.call(this, el, hydrating)
}

function getOuterHTML (el: Element): string {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    const container = document.createElement('div')
    container.appendChild(el.cloneNode(true))
    return container.innerHTML
  }
}
```

8. mountComponent 
第7步中mount方法的作用，返回mountComponent的执行结果；mountComponent主要是执行beforeMount钩子函数，定义组件更新方法，监听当前实例，执行mounted钩子函数

```javascript
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
// src/entries/web-runtime.js。
```
`mount-->watcher-->updateComponent-->vm._update(vm.render)-->vm.__patch__`

```javascript
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  ...
  callHook(vm, 'beforeMount')

  // _update与_render方法
  let updateComponent = () => {
    vm._update(vm._render(), hydrating)
  }

  vm._watcher = new Watcher(vm, updateComponent, noop)
  hydrating = false

  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```

9. vm.\_render主要调用了vm.$options.render方法，即上面生成的方法

```javascript
Vue.prototype._render = function (): VNode {
    const vm: Component = this
    const {
      render,
      staticRenderFns,
      _parentVnode
    } = vm.$options

    ...
    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = []
    }

    vm.$vnode = _parentVnode
    // render self
    let vnode
    // _c即是$createElement方法，_v是createTextVNode，_s是toString  
    vnode = render.call(vm._renderProxy, vm.$createElement)
    ...

    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        )
      }
      vnode = createEmptyVNode()
    }
    // set parent
    vnode.parent = _parentVnode
    return vnode
}

// 生成的render方法，this是vm._renderProxy，是一个proxy代理对象或vm本身
render = function () {
    // with(this)，所以message就是Vue实例data中的定义
    with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',[_v(_s(message))])])}
}
```

10. vm.\_update

```javascript
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
    const vm: Component = this
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate')
    }
    const prevEl = vm.$el
    const prevVnode = vm._vnode
    const prevActiveInstance = activeInstance
    activeInstance = vm
    vm._vnode = vnode
    
    if (!prevVnode) {
      // initial render
      // 该方法包括真实dom的创建、虚拟dom的diff修改、dom的销毁等
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      )
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
    activeInstance = prevActiveInstance
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
}
```



