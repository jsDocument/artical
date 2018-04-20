# Vue之旅开始

```js
// 初始化实例属性
options = options || {}

this.$el = null
this.$parent = options.parent  // 用于处理事件广播....
this.$root = this.$parent
  ? this.$parent.$root
  : this
this.$children = []  // 用于触发attached与detached及其钩子及销毁
this.$refs = {}       // child vm references
this.$els = {}        // element references
this._watchers = []   // all watchers as an array
this._directives = [] // all directives

// a uid
this._uid = uid++

// a flag to avoid this being observed
this._isVue = true

// events bookkeeping
this._events = {}            // 注册事件回调
this._eventsCount = {}       // 用于广播

// 编译的元素el为文档片断, this.$el为el的第一个子元素, 处理DOM时会将第一个与最后一个添加上相应的文本或注释节点
this._isFragment = false
this._fragment =         // @type {DocumentFragment}
this._fragmentStart =    // @type {Text|Comment}  第一个子元素
this._fragmentEnd = null // @type {Text|Comment}  最后一个子元素

// lifecycle state
this._isCompiled =
this._isDestroyed =
this._isReady =
this._isAttached =
this._isBeingDestroyed =
this._vForRemoving = false  // for指令中dom元素正在移除
this._unlinkFn = null

/**
  * 包含组件时, _context为其公共的父实例和群集
  */
this._context = options._context || this.$parent

/**
  * _scope 为v-for等行内作用域, 用于连接props与指令
  */
this._scope = options._scope

/**
  * 如果当前实例被编译到一个fragment中, 需要注册自己作为一个子元素为attach或detach作准备工作
  */
this._frag = options._frag
if (this._frag) {
  this._frag.children.push(this)
}

if (this.$parent) {
  this.$parent.$children.push(this)
}

/**
  * 保存未经过合并的data
  */
if (process.env.NODE_ENV !== 'production') {
  this._runtimeData = options.data
}

/**
  * mergeOptions(parent, child, vm)
  * 将实例构造函数的配置
  * 传入的参数配置
  *
  */
options = this.$options = mergeOptions(
  this.constructor.options,
  options,
  this
)
/**
  * 根据this.$options_ref 更新其父类上的$refs, 将其加入父类上或从父类上移除
  */
this._updateRef()

// initialize data as empty object.
// it will be filled up in _initScope().
this._data = {}

// 调用钩子函数init
this._callHook('init')

/**
  * 初始化数据监听与作用域继承
  */
this._initState()

// setup event system and option events.安装系统事件
this._initEvents()

// 调用钩子函数created
this._callHook('created')

// 挂载
if (options.el) {
  this.$mount(options.el)
}
```

### 挂载
+ 编译与更新el
+ 初始化DOM hook
+ 如果this.$el已在文档中, 则执行attached钩子, 执行ready方法
+ 否则绑定一次hook:attached事件, 回调执行ready

```js
Vue.prototype.$mount = function (el) {
  if (this._isCompiled) {
    process.env.NODE_ENV !== 'production' && warn(
      '$mount() should be called only once.'
    )
    return
  }
  el = query(el)
  if (!el) {
    el = document.createElement('div')
  }
  this._compile(el)
  this._initDOMHooks()
  if (inDoc(this.$el)) {
    this._callHook('attached')
    ready.call(this)
  } else {
    this.$once('hook:attached', ready)
  }
  return this
}

function ready () {
  this._isAttached = true
  this._isReady = true
  this._callHook('ready')
}
```
