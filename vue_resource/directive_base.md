# 指令的创建与生成及更新

### Directive

+ 自定义指令的配置
    1. 钩子函数: bind, inserted, update, componentUpdated, unbind
    2. 钩子函数参数: el, binding:{name, value, oldValue, expression, arg, modifiers}
    3. 内部指令配置: deep, priority, params(for, partial), paramWatchers(partial), acceptStatement(on), \_preProcess, \_postProcess(for指令)
    4. 使用: &lt;input v-focus:arg.modifiers=value /&gt;

```js
// 定义
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

```js
/**
  * 初始化实例对象
  * @param {[Object]} descriptor 指令定义
  *                 - {String} name
  *                 - {Object} def
  *                 - {String} expression
  *                 - {Array<Object>} [filters]
  *                 - {Boolean} literal
  *                 - {String} attr
  *                 - {String} raw
  * @param {[type]} vm         当前Vue实例
  * @param {[type]} el         当前根节点
  * @param {[type]} host       组件
  * @param {[type]} scope      v-for作用域
  * @param {[type]} frag       [description]
  */
export default function Directive (descriptor, vm, el, host, scope, frag) {
  this.vm = vm
  this.el = el
  // copy descriptor properties
  this.descriptor = descriptor
  this.name = descriptor.name
  this.expression = descriptor.expression
  this.arg = descriptor.arg
  this.modifiers = descriptor.modifiers
  this.filters = descriptor.filters
  this.literal = this.modifiers && this.modifiers.literal
  // private
  this._locked = false
  this._bound = false
  this._listeners = null
  // link context
  this._host = host
  this._scope = scope
  this._frag = frag
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || []
    this.el._vue_directives.push(this)
  }
}

// linker中被调用
Directive.prototype._bind = function () {
  var name = this.name
  var descriptor = this.descriptor

  // remove attribute
  if (
    (name !== 'cloak' || this.vm._isCompiled) &&
    this.el && this.el.removeAttribute
  ) {
    var attr = descriptor.attr || ('v-' + name)
    this.el.removeAttribute(attr)
  }

  // 更新def属性到当前实例, 或def为update方法
  var def = descriptor.def
  if (typeof def === 'function') {
    this.update = def
  } else {
    extend(this, def)
  }

  // 安装参数, 动态时监听, 静态时更新实例参数的值
  this._setupParams()

  // 执行自定义指令的bind
  if (this.bind) {
    this.bind()
  }
  this._bound = true

  // 常量时, 执行自定义指定的update
  if (this.literal) {
    this.update && this.update(descriptor.raw)
  } else if (
    // 表达式 或 限定
    (this.expression || this.modifiers) &&
    // 更新方法 或双向绑定
    (this.update || this.twoWay) &&
    // 非特殊指令表达式
    !this._checkStatement()
  ) {
    // 定义_update, 不存在绑定时执行指令的update, 否则_update为空函数
    var dir = this
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal)
        }
      }
    } else {
      this._update = noop
    }
    // 自定义属性有该方法, 绑定其上下文, 否则定义为null
    var preProcess = this._preProcess
      ? bind(this._preProcess, this)
      : null
    var postProcess = this._postProcess
      ? bind(this._postProcess, this)
      : null

    // 监听表达式
    var watcher = this._watcher = new Watcher(
      this.vm,
      this.expression,
      this._update, // callback
      {
        filters: this.filters,
        twoWay: this.twoWay,
        deep: this.deep,
        preProcess: preProcess,
        postProcess: postProcess,
        scope: this._scope
      }
    )
    //
    if (this.afterBind) {
      this.afterBind()
    } else if (this.update) {
      this.update(watcher.value)
    }
  }
}

// 指定指令配置的params获取该元素属性的值, 动态指令则订阅监听, 否则将值更新到this.params 如partial指令
Directive.prototype._setupParams = function () {
  if (!this.params) {
    return
  }
  var params = this.params
  // 循环保留的params配置, 从当前DOM上获取该属性值
  this.params = Object.create(null)
  var i = params.length
  var key, val, mappedKey
  while (i--) {
    key = params[i]
    mappedKey = camelize(key)
    val = getBindAttr(this.el, key)
    if (val != null) {
      // 动态属性, 进行监听
      this._setupParamWatcher(mappedKey, val)
    } else {
      // 静态属性值, 更新this.params相应的值为布尔 或 不处理
      val = getAttr(this.el, key)
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val
      }
    }
  }
}
// 添加监听, 并更新到当前实例监听属性队列_paramUnwatchFns
Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this
  var called = false
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val
    // 因为是立即模式, 如果不是第一次更新参数发生改变时执行callback
    if (called) {
        // paramWatchers为单个指令自己的配置
      var cb = self.paramWatchers && self.paramWatchers[key]
      if (cb) {
        cb.call(self, val, oldVal)
      }
    } else {
      called = true
    }
  }, {
    immediate: true,
    user: false
  })
  ;(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch)
}


Directive.prototype._checkStatement = function () {
  var expression = this.expression
  // 特殊指令表达式, 获取表达式的双向绑定函数
  if (
    expression && this.acceptStatement &&
    !isSimplePath(expression)
  ) {
    var fn = parseExpression(expression).get
    var scope = this._scope || this.vm
    // 重新构造表达式执行的函数
    var handler = function (e) {
      scope.$event = e
      fn.call(scope, scope)
      scope.$event = null
    }
    // 存在filters时, 执行获取新的handler
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters)
    }
    // 更新执行handler
    this.update(handler)
    return true
  }
}

// 为每个指令定义提供方法, 锁定的更新当前watcher的值
Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value)
    })
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      'Directive.set() can only be used inside twoWay' +
      'directives.'
    )
  }
}

// 锁定、更新、解锁
Directive.prototype._withLock = function (fn) {
  var self = this
  self._locked = true
  fn.call(self)
  nextTick(function () {
    self._locked = false
  })
}

// 为每个指令提供DOM监听, 并更新this._listeners属性
Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture)
  ;(this._listeners || (this._listeners = []))
    .push([event, handler])
}

// 解绑, watcher删除, listener解绑, 参数监听取消, 从Vue的el元素的_vue_directives列表中移除当前实例
Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false
    if (this.unbind) {
      this.unbind()
    }
    if (this._watcher) {
      this._watcher.teardown()
    }
    var listeners = this._listeners
    var i
    if (listeners) {
      i = listeners.length
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1])
      }
    }
    var unwatchFns = this._paramUnwatchFns
    if (unwatchFns) {
      i = unwatchFns.length
      while (i--) {
        unwatchFns[i]()
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this)
    }
    this.vm = this.el = this._watcher = this._listeners = null
  }
}
```
