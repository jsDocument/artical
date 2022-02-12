1. Array 也是在 getter 中做依赖收集
2. Array 数据检测，何时被读取了，何时更改了？不会触发 getter, setter，所以提供了一套操作数组的方法
   1. 数组拦截器：数组实例操作数组方法时，不再使用 Array.prototype 上的原生方法
   2. 把它挂载到数组实例与Array.prototype之间
   3. 不但对数组自身进行了变化侦测，还对数组中的每一个元素以及新增的元素都进行了变化侦测
   4. 新增元素的方法：push, unshift, splice，对新增的元素转化成响应式的

```javascript
const arrayProto = Array.prototype
// 创建一个对象作为拦截器
export const arrayMethods = Object.create(arrayProto)

// 改变数组自身内容的7个方法
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // 缓存原生方法
  const original = arrayProto[method]
  def(arrayMethods, method, {
    enumerable: false,
    configurable: true,
    writable: true,
    value:function mutator(...args){
      const result = original.apply(this, args)
      const ob = this.__ob__
      let inserted
      switch (method) {
        case 'push':
          inserted = args
          break
        case 'unshift':
          inserted = args
          break
        case 'splice':
          inserted = args.slice(2)
          break
      }
      if (inserted) ob.observeArray(inserted) // 调用observe函数将新增的元素转化成响应式
      // notify change
      ob.dep.notify()
      return result
    }
  })
})
// 尝试为 value 创建一个 Observer 实例，创建成功直接返回，如果已经存在，就直接返回
export function observe (value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  var ob
  // 已经存在，已经转化成响应式的
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
  if (ob && vm) {
    ob.addVm(vm)
  }
  return ob
}
```
