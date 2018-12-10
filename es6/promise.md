# Promise
是一种容器，里面保存着未来才会结束的事件的结束；也可以说Promise是一个对象，可以获取异步操作的消息。

- 状态：Pending, fulfilled, rejected；异步操作的结果决定了当前是哪种状态。
- 一旦状态改变，就不会再变。如果改变已经发生了，再对Promise添加回调函数也会立即得到这个结果。
- 基本用法：构造函数接受函数作为参数，函数有两个参数：`resolve`, `reject`; resolve的作用是将状态从`pending`改为resolved, reject则是改为rejected
```javascript
const p = new Promise(function(resolve, reject){
    // resolve(val) 或 reject(err)
  })
```
- then方法，指定resolved与rejected时的回调函数
- catch是.then(null, rejection) 指定错误时的回调函数。
- finally指定Promise对象最后执行的回调函数
- Promise.all([p1, p2, p3]) 将多个Promise包装成一个新Promise实例；只有所有实例都fulfilled，新实例才会fulfilled。
- Promise.race([p1, p2, p3]) 只要有一个实例状态率先改变，新实例就跟着改变。
- Promise.resolve()将对象转为Promise对象；参数可以是：
  1. Promise实例：原封不动的返回；
  2. 具有then方法的对象`{then:function(){resolve, reject}}`：将这个对象转为Promise对象，然后立即执行对象的then方法。
  3. 参数不是对象时，返回一个新的Promise对象，状态为resolved.
  4. 不带参数时，直接返回一个状态为resolved的Promise对象
- Promise.reject('reason') 返回一个新的Promise实例，状态为rejected

## 弊端
1. 开发中我们希望同步函数，同步执行，异步操作再用Promise来处理，但又不想去区分。而Promise会将所有操作变为异步，此时可以用async函数来处理。


### promise的相关题目

```js
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})
promise.then(() => {
  console.log(3)
})
console.log(4)
```

> Promise构造函数是同步执行, promise.then是异步执行的

```js
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
```

> resolve或reject只有第一次执行有效, promise状态一旦改变, 则不能再变

```js
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })
```

> Promise链式调用, 每次调用then或catch会返回一个新的Promise

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('once')
    resolve('success')
  }, 1000)
})

const start = Date.now()
promise.then((res) => {
  console.log(res, Date.now() - start)
})
promise.then((res) => {
  console.log(res, Date.now() - start)
})
```

> Promise的then与catch可以被多次调用

```js
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```

> then与catch的参数期望传入函数, 非函数时发生值穿透?

```js
Promise.resolve()
  .then(function success (res) {
    throw new Error('error')
  }, function fail1 (e) {
    console.error('fail1: ', e)
  })
  .catch(function fail2 (e) {
    console.error('fail2: ', e)
  })
```

> catch是then第二个参数的简便写法, 但第二个参数处理不了第一个参数回调抛出的错误, 而后续的catch可以, 或后面的then中的第二个参数回调也可以捕获前面then回调中抛出的错误

```js
process.nextTick(() => {
  console.log('nextTick')
})
Promise.resolve()
  .then(() => {
    console.log('then')
  })
setImmediate(() => {
  console.log('setImmediate')
})
console.log('end')
```

> nextTick与promise.then属于microtask, setImmediate属于macrotask, 在事件循环的check阶段执行, 事件循环的每个阶段(macrotask)之间都会执行microtask

```js
Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })
  // 需要改成下面的才可被捕获
  // return Promise.reject(new Error('error!!!'))
  // throw new Error('error!!!')
```
> then 或者 catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 catch 捕获, 返回一个非promise的值都会包裹成promise对象, 即 return new Error('error!!!') 等价于 return Promise.resolve(new Error('error!!!'))

```js
new Promise(resolve => {
    console.log(1);
    resolve(3);
}).then(num => {
    console.log(num)
});
console.log(2)
//1 2 3

new Promise(resolve => {
    console.log(1);
    resolve(3);
    Promise.resolve().then(()=> console.log(4))
}).then(num => {
    console.log(num)
});
console.log(2)

```

1. 构造函数是同步执行的, then是异步执行的
2. 链式调用每次返回新的Promise对象

很多Promise的实现库, jQuery的Deferred和很多polyfill, 要知道执行顺序, 必须理解Promise是怎么实现的


1. 有catch, 也有reject回调时, 执行哪个
2. resolve与reject是负责构造Promise对象与状态更新吗? then是负责执行回调并返回新的Promise对象
