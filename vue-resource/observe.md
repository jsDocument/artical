### Observe 观察数据变化

# 变化侦测：追踪状态

数据驱动视图

1. Object.definedProperty 劫持读写对象属性
2. 依赖收集：getter中收集依赖，setter中通知依赖更新
3. 依赖收集，收集到依赖管理器Dep
   - subs数组，存放依赖，添加addSub、删除removeSub、 getter-->depend添加一个依赖、notify 通知依赖更新
   - depend添加的是Dep.target，watcher实例
   - 数组
4. 依赖是谁：谁用到了数据----watcher，所以通知依赖更新，通知的是 watcher 实例，由 watcher 实例通知真正的视图
   - 构造函数
     - vm
     - cb
     - getter---根据路径分析，path.split('.')，再循环取值
     - value---this.get()
   - this.get(): 获取时更新 Dep.target, value = this.getter(vm, vm)触发依赖收集, 再释放 Dep.target, 并返回 value
   - update(): 更新 实例value并执行实例 cb

总结：

1. Watcher 把自己设置到全局唯一的指定位置
2. 再读取数据，触发这个数据的 getter
3. getter 在全局唯一的位置获得正在读取数据的 Watcher实例，并把 Watcher 实例收集到 Dep，收集好后，当数据发生变化，会向Dep 中的每个 Watcher 发送通知更新

存在的问题与解决办法

1. 对对象已有的属性提供了检测，对后增加和删除的无法观测到，所以提供了 Vue.set 和 Vue.delete

大致流程：

1. Data通过observer转换成了getter/setter的形式来追踪变化。
2. 当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。
3. 当数据发生了变化时，会触发setter，从而向Dep中的依赖（即Watcher）发送通知。
4. Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等。


1. 2.0版本之前使用 Object.defineProperty 监听数据属性变化，数组通过提供数组修改方法实现，再通过def(value,'__ob__',this)为value打上标记

```js {12}
export function Observer (value) {
  this.value = value
  this.dep = new Dep()
  def(value, '__ob__', this)
  if (isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment
    augment(value, arrayMethods, arrayKeys)
    this.observeArray(value)
  } else {
    this.walk(value)
  }
}
```

```js {4,8}
Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj)
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]])
  }
}
Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val)
}
```

+ 在getter中收集依赖，在setter中通知依赖更新

```js {13,46}
export function defineReactive (obj, key, val) {
  var dep = new Dep()

  var property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get
  var setter = property && property.set

  var childOb = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val
      if (Dep.target) {
        // 访问属性时依赖收集
        dep.depend()
        if (childOb) {
          // 依赖收集
          childOb.dep.depend()
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i]
            // 依赖收集
            e && e.__ob__ && e.__ob__.dep.depend()
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val
      if (newVal === value) {
        return
      }
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = observe(newVal)
      // 通知更新
      dep.notify()
    }
  })
}
```

+ 已经监听，就直接返回；否则就构建新的监听对象

```js
export function observe (value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  var ob
  if (
    hasOwn(value, '__ob__') &&
    value.__ob__ instanceof Observer
  ) {
    ob = value.__ob__
  } else if (
    shouldConvert &&
    (isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value)
  }
  // TODO
  if (ob && vm) {
    ob.addVm(vm)
  }
  return ob
}
```

+ 依赖收集到哪里？

```js{10}
let uid = 0

export default function Dep () {
  this.id = uid++
  this.subs = []
}

// 我存的是当前订阅者
Dep.target = null

// this.subs管理对应的 watcher 实例
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub)
}
// watcher管理 Dep 实例
Dep.prototype.depend = function () {
  Dep.target.addDep(this)
}
// 我来通知更新
Dep.prototype.notify = function () {
  var subs = toArray(this.subs)
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update()
  }
}
```

+ watcher用到的表达式解析方法

```js
/**
 * Parse simple path.
 * 把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
 * 例如：
 * data = {a:{b:{c:2}}}
 * parsePath('a.b.c')(data)  // 2
 */
const bailRE = /[^\w.$]/
export function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}
```

+ watcher观察者队列

```js
/*将一个观察者对象push进观察者队列，在队列中已经存在相同的id则该观察者对象将被跳过，除非它是在队列被刷新时推送*/
export function queueWatcher (watcher: Watcher) {
  /*获取watcher的id*/
  const id = watcher.id
  /*检验id是否存在，已经存在则直接跳过，不存在则标记哈希表has，用于下次检验*/
  if (has[id] == null) {
    has[id] = true
    // flushing 在哪里控制？
    if (!flushing) {
      /*如果没有flush掉，直接push到队列中即可*/
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1
      while (i >= 0 && queue[i].id > watcher.id) {
        i--
      }
      // index ？
      queue.splice(Math.max(i, index) + 1, 0, watcher)
    }
    // queue the flush
    if (!waiting) {
      waiting = true
      // flushSchedulerQueue ?
      nextTick(flushSchedulerQueue)
    }
  }
}
```

+ 来围观一下订阅者吧

```js{100}
let uid = 0
// 参数：实例，表达式，回调函数，其他配置
export default function Watcher (vm, expOrFn, cb, options) {
  // 合并配置
  if (options) {
    extend(this, options)
  }
  var isFn = typeof expOrFn === 'function'
  this.vm = vm
  // 订阅者集合
  vm._watchers.push(this)
  this.expression = expOrFn
  this.cb = cb
  this.id = ++uid // uid for batching
  this.active = true
  this.dirty = this.lazy // for lazy watchers
  this.deps = []
  this.newDeps = []
  this.depIds = new Set()
  this.newDepIds = new Set()
  this.prevError = null // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn
    this.setter = undefined
  } else {
    // 解析表达式
    var res = parseExpression(expOrFn, this.twoWay)
    this.getter = res.get
    this.setter = res.set
  }
  // 获取 value，触发依赖收集
  this.value = this.lazy
    ? undefined
    : this.get()
  this.queued = this.shallow = false
}
Watcher.prototype.get = function () {
  // 更新 Dep.target
  this.beforeGet()
  var scope = this.scope || this.vm
  var value
  try {
    value = this.getter.call(scope, scope)
  } catch (e) {
    // xxx
  }
  if (this.deep) {
    traverse(value)
  }
  if (this.preProcess) {
    value = this.preProcess(value)
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false)
  }
  if (this.postProcess) {
    value = this.postProcess(value)
  }
  // 置空 Dep.target
  this.afterGet()
  return value
}

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm
  if (this.filters) {
    value = scope._applyFilters(
      value, this.value, this.filters, true)
  }
  try {
    this.setter.call(scope, scope, value)
  } catch (e) {
    // ...
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      // ...
      return
    }
    forContext._withLock(function () {
      if (scope.$key) { // original is an object
        forContext.rawValue[scope.$key] = value
      } else {
        forContext.rawValue.$set(scope.$index, value)
      }
    })
  }
}

Watcher.prototype.beforeGet = function () {
  Dep.target = this
}
// watcher 与 Dep 的相互关联
Watcher.prototype.addDep = function (dep) {
  var id = dep.id
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id)
    this.newDeps.push(dep)
    if (!this.depIds.has(id)) {
      dep.addSub(this)
    }
  }
}

Watcher.prototype.afterGet = function () {
  Dep.target = null
  var i = this.deps.length
  // 移除关联
  while (i--) {
    var dep = this.deps[i]
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this)
    }
  }
  var tmp = this.depIds
  this.depIds = this.newDepIds
  this.newDepIds = tmp
  this.newDepIds.clear()
  tmp = this.deps
  this.deps = this.newDeps
  this.newDeps = tmp
  this.newDeps.length = 0
}

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true
  } else if (this.sync || !config.async) {
    // 执行
    this.run()
  } else {
    this.shallow = this.queued
      ? shallow
        ? this.shallow
        : false
      : !!shallow
    this.queued = true
    // 异步推送到观察者队列中，下一个tick时调用
    pushWatcher(this)
  }
}
// 更新值并执行回调
Watcher.prototype.run = function () {
  if (this.active) {
    // 获取值
    var value = this.get()
    if (
      value !== this.value ||
      ((isObject(value) || this.deep) && !this.shallow)
    ) {
      var oldValue = this.value
      this.value = value
      var prevError = this.prevError
      if (process.env.NODE_ENV !== 'production' &&
          config.debug && prevError) {
        this.prevError = null
        try {
          // 执行回调
          this.cb.call(this.vm, value, oldValue)
        } catch (e) {
          // TODO
          nextTick(function () {
            throw prevError
          }, 0)
          throw e
        }
      } else {
        // 执行回调
        this.cb.call(this.vm, value, oldValue)
      }
    }
    this.queued = this.shallow = false
  }
}

Watcher.prototype.evaluate = function () {
  var current = Dep.target
  this.value = this.get()
  this.dirty = false
  Dep.target = current
}

// TODO
Watcher.prototype.depend = function () {
  var i = this.deps.length
  while (i--) {
    this.deps[i].depend()
  }
}
// TODO
Watcher.prototype.teardown = function () {
  if (this.active) {
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this)
    }
    var i = this.deps.length
    while (i--) {
      this.deps[i].removeSub(this)
    }
    this.active = false
    this.vm = this.cb = this.value = null
  }
}

const seenObjects = new Set()
function traverse (val, seen) {
  let i, keys, isA, isO
  if (!seen) {
    seen = seenObjects
    seen.clear()
  }
  isA = isArray(val)
  isO = isObject(val)
  if (isA || isO) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id
      if (seen.has(depId)) {
        return
      } else {
        seen.add(depId)
      }
    }
    if (isA) {
      i = val.length
      while (i--) traverse(val[i], seen)
    } else if (isO) {
      keys = Object.keys(val)
      i = keys.length
      while (i--) traverse(val[keys[i]], seen)
    }
  }
}
```

+ 2.0 用 Observer 类实现

<<< @/vue-resource/observer.js{19, 26, 93}


