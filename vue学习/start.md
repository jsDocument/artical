`    
    
    // 初始化实例属性
    options = options || {}

    this.$el = null
    this.$parent = options.parent
    this.$root = this.$parent
      ? this.$parent.$root
      : this
    this.$children = []
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

    // fragment instance properties
    this._isFragment = false
    this._fragment =         // @type {DocumentFragment}
    this._fragmentStart =    // @type {Text|Comment}
    this._fragmentEnd = null // @type {Text|Comment}

    // lifecycle state
    this._isCompiled =
    this._isDestroyed =
    this._isReady =
    this._isAttached =
    this._isBeingDestroyed =
    this._vForRemoving = false
    this._unlinkFn = null

    /**
     * 包含组件时, _context为其公共的父实例和群集
     */
    this._context = options._context || this.$parent

    /**
     * _scope 为v-for等行内作用域, 用于连接props与指令
     */
    this._scope = options._scope

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to reigster itself as a child of that fragment
    // for attach/detach to work properly.
    /**
     * 如果当前实例被编译成文档片断, 需要将自己注册作为文档片断的子元素
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
`

