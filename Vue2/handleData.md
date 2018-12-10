# 数据处理

## Observer 递归监听对象上的所有属性，在属性值改变是触相应的watcher

```javascript
export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // 把该对象作为root $data的vm个数

  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    // 添加__ob__来标示value有对应的Observer
    def(value, '__ob__', this)
    // 对数组的处理
    if (Array.isArray(value)) {
      const augment = hasProto
        ? protoAugment
        : copyAugment
      augment(value, arrayMethods, arrayKeys)
      this.observeArray(value)
    // 处理对象
    } else {
      this.walk(value)
    }
  }

  // 给每个属性添加getter/setters
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }

  // 观察数组的每一项
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }
}
```

```javascript
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: Function
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  const getter = property && property.get
  const setter = property && property.set

  let childOb = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
        if (Array.isArray(value)) {
          dependArray(value)
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
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
```

1. 递归为obj的每个属性添加getter和setter, getter中把watcher添加到dep；setter中触发watcher执行回调

## Watcher 观察者，当监听的数据发生修改时，执行回应的回调函数

```javascript
function Watcher(fn){
    this.update = function(){
        Dep.target = this;
        fn();
        Dep.target = null;
    }
    this.update();
}

```

## Dep 连接Observer和Watcher的桥梁，每一个Observer实例对应一个Dep，内部维护一个数据，保存与该Observer相关的Watcher

存放watcher的数据subs，notify是触发watcher更新，render

```javascript
function Dep(){
    this.subs = [];

    this.addSub = function (watcher) {
        this.subs.push(watcher);
    }

    this.notify = function(){
        this.subs.forEach(function(watcher){
            watcher.update();
        });
    }
}
```


