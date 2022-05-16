# promise

## 1.常见的几种异步编程方案

- 回调函数----如$.ajax(url, (data)=>{})
- 事件监听
- 发布/订阅
- Promise对象

## 2. promise的构造函数

- Promise是一个构造函数
- 接收一个excutor函数作为参数，excutor有两个函数作为参数--resolve,reject
- 返回一个promise对象

## 3. Promise的实例方法

promise 的三种状态：`pending` 初始化状态,`fulfilled` 成功, `rejected`失败

- then(onFulfilled, onRejected), 每次都返回一个新的Promise对象；可以被一个promise对象调用多次。
- catch(onRejected) 捕获该方法之前的then方法中发送的异常

## 4. Promise的静态方法

- resolve
- reject
- all
- race

## 5. Promise的实现
- 内部变量：state 当前promise状态； value `fufilled`时的值； queue内部的回调队列
```javascript
let promise = new Promise((resolve, reject)=>{
  if(resolve){
    resolve('test');
  }
})
let b = promise.then((v)=>{

}, (err)=>{

})
let a = promise.catch((err)=>{

})
console.dir(promise, {depth: 10})
```
打印出
```javascript
Promise{
  state: 0,
  value: undefined,
  queue: [
    QueueItem{
      promise: Promise{...},
      callFulfilled: [Function],
      callRejected: [Function],
    },
    QueueItem{
      promise: Promise{...},
      callFulfilled: [Function],
      callRejected: [Function],
    }
  ]
}
```

- 一个promise多次调用then后情况，每个`then`将它生成的`promise`放到调用它的promise队列里，形成层调用关系，当外层的`promise`状改变时，遍历`queue`数组调用对应的回调；设置子promise的state和value并遍历它的queue数组调用对应的回调。

```javascript
Promise{
  state: 0,
  value: undefined,
  queue: [
    QueueItem: {
      promise: Promise{ state, value, queue[QueueItem: {...}]},
      callFulfilled: [Function],
      callRejected: [Function],
    }
  ]
}
```

- 处理Promise构造函数参数--回调函数excutor，使其安全的执行，需要做三件事情：
  1. 捕获执行excutor即此处的then时的异常；
  2. called控制只执行一次
  3. 没有错误时执行doResolove，否则执行doReject

```javascript
function safelyResolveThen(self, then) {
  var called = false;
  try {
    then(function (value) {
      if (called) {
        return;
      }
      called = true;
      doResolve(self, value);
    }, function (error) {
      if (called) {
        return;
      }
      called = true;
      doReject(self, error);
    });
  } catch (error) {
    if (called) {
      return;
    }
    called = true;
    doReject(self, error);
  }
}
```
- doResolve
  1. `getThen` 即then的resolve的参数为对象且包含then属性，且then属性为函数，则返回函数----调用then方法。
  2. 如果then方法存在，则安全的执行该方法，即不断角色promise；走到返回非promise对象后更新其状态与值 ，并通知其子promise。
  3. 否则doReject

```javascript
function getThen(obj) {
  var then = obj && obj.then;
  if (obj && (isObject(obj) || isFunction(obj)) && isFunction(then)) {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}
function doResolve(self, value) {
  try {
    var then = getThen(value);
    if (then) {
      safelyResolveThen(self, then);
    } else {
      self.state = FULFILLED;
      self.value = value;
      self.queue.forEach(function (queueItem) {
        queueItem.callFulfilled(value);
      });
    }
    return self;
  } catch (error) {
    return doReject(self, error);
  }
}
```

- 实例方法then与catch
  1. return this 实现值穿透；即非函数参数时，会将该参数传递到下一个then作为参数
  2. 生成一个新的promise对象，这个新产生的 promise 可以认为是内部的 promise，需要根据外部的 promise 的状态和值产生自身的状态和值，不需要传入回调函数，而外部 Promise 需要传入回调函数决定它的状态和值。所以之前 Promise 的构造函数里做了判断区分外部调用还是内部调用。
  3. 状态改变了则调用unwrap
  4. 否则将生成的promise加入到队列。
  5. 返回promise

```javascript
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (!isFunction(onFulfilled) && this.state === FULFILLED ||
    !isFunction(onRejected) && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.value);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }
  return promise;
};

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
```


```javascript
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
- unwrap讲解
  1. 参数：子promise, 父promise的then回调,  父promise的值
  2. immediate 将同步变异步执行，then的回调函数，也在该异步方法中执行。
  3. try...catch用来捕获then/catch内抛出的异常，并调用doReject

```javascript
function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (error) {
      return doReject(promise, error);
    }
    if (returnValue === promise) {
      doReject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      doResolve(promise, returnValue);
    }
  });
}
```

- QueueItem方法

```javascript
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  this.callFulfilled = function (value) {
    doResolve(this.promise, value);
  };
  this.callRejected = function (error) {
    doReject(this.promise, error);
  };
  if (isFunction(onFulfilled)) {
    this.callFulfilled = function (value) {
      unwrap(this.promise, onFulfilled, value);
    };
  }
  if (isFunction(onRejected)) {
    this.callRejected = function (error) {
      unwrap(this.promise, onRejected, error);
    };
  }
}
```

故：整片过程大致如下
- 将Promise构造函数的参数excutor进行安全的执行，并传入两个回调函数，在回调函数里判断是否已经调用过了，如果没有调用过，则更新成已调用并执行doResolve/doReject
- doResolve

```javascript
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

```javascript
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

```javascript
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

```javascript
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```

> then与catch的参数期望传入函数, 非函数时发生值穿透?

```javascript
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

```javascript
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

```javascript
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

```javascript
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
