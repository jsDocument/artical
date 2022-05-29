## debounce: 频繁触发一个事件，只能每隔一段时间触发一次；你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行

```javascript
const debounce = function(func, delay){
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this, args)
    }, delay)
  }
}
```

## throtern：频繁触发一个事件，只触发最后一次的，已最后一次为准，如：电脑息屏时间，每动一次电脑就重新计算时间、input 框变化触发事件、频繁点击按钮提交

```javascript
const throttle = function(func, delay){
  let timer = Date.now()
  return function(...args){
    let lastTime = Date.now()
    if(lastTime - startTime > delay){
      func.apply(this, args)
      startTime = Date.now()
    }
  }
}
// 持续触发事件，每隔一段时间，只执行一次事件
function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        // 时间标识 - 当前时间，也可以用 setTimeout 实现，判断 !timer 加入宏任务，回调里回收 timer
        if (now - previous > wait) {
            func.apply(context, args);
            // 更新时间标识
            previous = now;
        }
    }
}
```

- inherit 实现继承（es5 es6）
- 数组去重
- 数组扁平化
- 深浅拷贝（广度优先，深度优先）
- 解析 URL 参数为对象
- 字符串模板
- 图片懒加载
- 事件总线（发布订阅模式）
- 节流、防抖区别与实现
- 函数柯里化
- 手写 JSONP 实现
- 手写 ajax
- 实现数组原型方法
  - forEach
  - map
  - filter
  - some
  - reduce
- 实现函数原型方法 call,apply,bind 方法
- 实现 new 关键字
- 实现 instanceof 关键字
- 实现 Object.create
- 实现 Object.assign
- 实现 JSON.stringify
- 实现 JSON.parse
- 实现 Promise


为什么这么写？可以有更好的实现吗？性能如何优化？代码可以更精简吗？代码可以更优雅吗？

- typeOf：Object.prototype.toString.call(obj).split(' ')[1] jQuery 中的方法
- 原型链继承的问题：借用构造函数实现
  - 原型中的引用类型属性会被所以实例共享
  - 子类在实例化是不能给父类构造函数参数传参
  - 组合继承，会使`父类构造函数调用两次`，一次为子类构造函数内，一次为原型引用时
  - 寄生式组合，空函数一边牵手 parent.prototype，空函数实例的构造函数的指向 child，child.prototype与空函数实例牵手
  - 子类原型 = Object.create(父类原型)，更正子类原型的 constructor 的指向
  - class 实现继承
- 数组去重：filter((item, index, array)=>{ return array.indexOf(item) === index}) 或 [...new Set(arr)]
- 数组扁平化 flatten：concat
- 浅拷贝：排除基本类型数据，创建新的数组或对象，for in 循环，判断 hasOwnProperty(key)，更新到新的数组或对象上
- 深拷贝：判断属性为对象时，再递归
- 发布订阅：this.cache = {name: [fn]}, on、off、emit
- URL 参数解析为对象
- 字符串模板
- 图片懒加载





arr.some, arr.find
