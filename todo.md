8. 缓存

9. 同步请求与异步请求的区别

10. ajax请求有几种数据格式, 如何设备数据格式

### webpack编译性能优化

# es6

1. async/await 的实现原理

2. symbol的理解及应用


### 从输入url, 浏览器都做了些什么
1. DNS解析
2.

### SPA


### node异步模型

### node的性能优缺点


### koa和express的不同？koa解决了什么问题？koa1的异步代码风格原理


### 对异步模型的理解？




1. 添加mousedown事件，isDragging时，返回；doucment.onselectstart与document.ondragstart时返回false
2. 添加mousemove、mouseup事件及回调；move回调中调用drag函数，up回调中移除mousemove、mouseup事件，doucment.onselectstart与document.ondragstart为null
3. isDragging = true;
4. event.preventDefault()；options.start调用
5. option.start：取消动画；this.animationFrameId = null; dragState对象
6. option.drag：this.dragging = true; dragState.left, dragState.top更新；计算start时与当前元素的pageY的差，进行动画；
7. this.dragging = false，



1. 运行时---virtual DOM (检查是否为原生)---->其实编译时就可以确定
2. 直接在编译时分析其模板，做好数据分析留下提示
3. slot也与scope-slot一样，生成一个函数
4. 更新与检查---组件优化
5. 生成子组件函数的cache
6. proxy----setter/getter

## Promise的兼容实现
1. 实现Promise函数，接收函数参数，并调用该函数，传入两个回调函数作为参数；两个回调函数即`resolve`与`reject`，负责更新状态信息；
2. 状态改变，再调用实例then方法，根据状态调用调用`then`的回调函数。[如果Promise本身不存在异步，但then还是异步执行是如何实现的？]


1. javascript的原型与原型链
2. 几种类型的值？栈， 堆
3. 3位添加逗号：/(\d)(?=(\d{3})+\.)/g
4. javascript继承的实现
5. 作用域链
6. serviceWorker, webWorker, PWA
7. this： 指向函数的直接调用者\|
8. eval, new Function(), with
8. 事件的捕获与冒泡
