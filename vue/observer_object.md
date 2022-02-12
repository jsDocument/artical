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

```javascript
// Observer
export class Observer {
  constructor (value) {
    this.value = value
    this.dep = new Dep()
    // 给value新增一个__ob__属性，值为该value的Observer实例
    // 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
    def(value, '__ob__', this)
    if (isArray(value)) {
      // 数组检测，拦截器
      var augment = hasProto
        ? protoAugment
        : copyAugment
      augment(value, arrayMethods, arrayKeys)
      this.observeArray(value) // 深度检测
    } else {
      this.walk(value)
    }
  }

  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }

  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}

// 能力检测：判断__proto__是否可用，因为有的浏览器不支持该属性
export const hasProto = '__proto__' in {}

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

function protoAugment (target, src: Object, keys: any) {
  target.__proto__ = src
}
// 不支持__proto__，把新增的方法循环加到 value 上
function copyAugment (target: Object, src: Object, keys: Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}
/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive (obj,key,val) {
  var dep = new Dep()

  var property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }
  var getter = property && property.get
  var setter = property && property.set
  // 获取数据对应的 Observer 实例
  var childOb = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val
      // 依赖收集
      if (Dep.target) {
        dep.depend()
        // 调用 Observer 实例上的依赖收集
        if (childOb) {
          childOb.dep.depend()
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i]
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
      dep.notify()
    }
  })
}
// Dep
export default class Dep {
  constructor () {
    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }
  // 删除一个依赖
  removeSub (sub) {
    remove(this.subs, sub)
  }
  // 添加一个依赖
  depend () {
    if (Dep.target) {
      this.addSub(Dep.target)
    }
  }
  // 通知所有依赖更新
  notify () {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

/**
 * Remove an item from an array
 */
export function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
// Watcher
export default class Watcher {
  constructor (vm,expOrFn,cb) {
    this.vm = vm;
    this.cb = cb;
    this.getter = parsePath(expOrFn)
    this.value = this.get()
  }
  get () {
    Dep.target = this;
    const vm = this.vm
    let value = this.getter.call(vm, vm)
    Dep.target = undefined;
    return value
  }
  update () {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}

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
