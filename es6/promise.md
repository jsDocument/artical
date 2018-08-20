# promise的相关题目

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
