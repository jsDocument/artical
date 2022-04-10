## promise 实现需要解决的相关问题

- Promise 三个状态：pending、fulfilled 和 rejected
- value 和 reason 也是不可变的，它们包含原始值或对象的不可修改的引用，默认值为 undefined。
- Then 方法
  - then 方法接受两个函数作为参数，且参数可选。
  - 如果可选参数不为函数时会被忽略。
  - `两个函数都是异步执行，会放入事件队列等待下一轮 tick`。
  - 当调用 onFulfilled 函数时，会将当前 Promise 的 value 值作为参数传入。
  - 当调用 onRejected 函数时，会将当前 Promise 的 reason 失败原因作为参数传入。
  - then 函数的返回值为 Promise。
  - then 可以被同一个 Promise 多次调用。
- Promise 解决过程，接收一个 Promise 和一个值 X。
  - 针对 X 的不同值，进行几种处理：
  - 1. X 等于 Promise---抛出 TypeError 错误，拒绝 Promise
  - 2. X 是 Promise 的实例，如果 X 处于待定状态，Promise 继续等待直到 X 兑现或拒绝，根据 X 的状态兑现或拒绝 Promise
  - 3. X是对象或函数，取出 X.then 并调用，调用时将 this 指向 X，将 then 回调函数中的结果 y 传入 Promise 的解决过程中，递归调用。如果报错，以对应的失败原因拒绝 Promise----thenable
  - 4. X 不是对象或函数，已 X 作为值执行 Promize

```javascript
// Promise 实现，遵循 Promise/A+规范
// Promise 类，执行类时会传入一个执行器，执行器会立即执行
// 状态：pending, fulfilled, rejected
// Promise 中使用 resolve和 reject两个函数来更改状态
// then, catch, finally
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class Promise {
  constructor(executor){
    try{
        executor(this.resolve, this.reject)
    }catch(e){
        this.reject(e)
    }
  }
  status = PENDING;
  value = undefined;
  reason = undefined;
  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];
  resolve = (value) => {
    if(this.status === PENDING){
      this.status = FULFILLED;
      this.value = value;
      // 多个 then 回调
      while(this.onFulfilledCallbacks.length){
        this.onFulfilledCallbacks.shift()(value);
      }
    }
  }
  reject = (reason) => {
    if(this.status === PENDING){
      this.status = REJECTED;
      this.reason = reason;
      while(this.onRejectedCallbacks.length){
        this.onRejectedCallbacks.shift()(reason);
      }
    }
  }
//  链式调用
  then(onFulfilled, onRejected){
    const promise2 = new Promise((resolve, reject)=>{
        const fulfilledMicrotask =  () => {
            // 参数可选
            onFulfilled = isFunction(onFulfilled) ? onFulfilled : function(x){return x};
            queueMicrotask(()=>{
              try{
                  const x = onFulfilled(this.value);
                  resolvePromise(promise2, x, resolve, reject)
              }catch(e){
                  reject(e);
              }
            })
        }
        const rejectedMicrotask = () => {
            onRejected = isFunction(onRejected) ? onRejected : function(e){throw e};
            queueMicrotask(()=>{
              try{
                  const x = onRejected(this.reason);
                  resolvePromise(promise2, x, resolve, reject);
              }catch(e){
                  reject(e);
              }
            })
        }
        if(this.status === FULFILLED){
          fulfilledMicrotask();
        }else if(this.status === REJECTED){
          rejectedMicrotask();
        // 收集依赖
        }else if(this.status === PENDING){
          // 缓存状态变换后的回调
          this.onFulfilledCallbacks.push(fulfilledMicrotask);
          this.onRejectedCallbacks.push(rejectedMicrotask);
        }
    })
    return promise2
  }
  static resolve(value){
    if (parameter instanceof Promise) {
      return parameter;
    }

    // 转成常规方式
    return new MyPromise(resolve =>  {
      resolve(value);
    });
  }
  static reject(reason){
    return new MyPromise((resolve, reject) =>  {
      reject(reason);
    });
  }
}
function resolvePromise(promise2, x, resolve, reject){
    if(x  === promise2){
        return reject(new TypeError('Chaining cycle detected for promise \#<Promise>'))
    }
    if (typeof x === 'object' || typeof x === 'function') {
        // x 为 null 直接返回，走后面的逻辑会报错
        if (x === null) {
            return resolve(x);
        }

        let then;
        try {
            then = x.then;
        } catch (error) {
            return reject(error);
        }

        // 如果 then 是函数
        if (typeof then === 'function') {
            let called = false;
            try {
                then.call(
                x, // this 指向 x
                // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                y => {
                    // 如果 resolvePromise 和 rejectPromise 均被调用，
                    // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                    // 实现这条需要前面加一个变量 called
                    if (called) return;
                    called = true;
                    resolvePromise(promise, y, resolve, reject);
                },
                // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                r => {
                    if (called) return;
                    called = true;
                    reject(r);
                });
            } catch (error) {
                // 如果调用 then 方法抛出了异常 error：
                // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
                if (called) return;

                // 否则以 error 为据因拒绝 promise
                reject(error);
            }
        } else {
            resolve(x);
        }
    } else {
      resolve(x);
    }
}
```

## ECMAScript实现

- 构造函数：没有 new 或者 没有函数类型的参数 executor都会抛出类型错误：ThrowTypeError
  - 构造一个 Promise 对象，从 Promise 对象上获取其 resolve 和 reject 函数，executor 被同步调用，并把 resolve 和 reject 作为其参数
- PromiseProtypeThen 函数创建了一个新的 Promise对象，获取两个回调函数 onFulfilled 和 onRejected参数，用于处理 fulfilled 和 rejected 态，执行 PerformPromiseThenImpl完成大部分工作，返回这个新的 Promise
- PerformPromiseThenImpl的三个分支：
  - pending：将本次绑定的处理函数存起来，调用 NewPromiseReaction 生成 reaction 链表，更新对象已绑定了处理函数的标识 has_handler，reactions_or_result 存的是当前生成的 PromiseReaction
  - fulfilled：生成 microtask并放入微任务队列，更新对象已绑定了处理函数的标识 has_handler
  - rejected：与 fulfilled 大致相同
- resolve 获取 Promise 处理函数到 reactions，设置 promise 的 reactions_or_result 为 value，value 就是 resolve 的参数，更新状态为 fulfilled，将 reactions 中的处理函数加入到微任务中
- TriggerPromiseReactions 是反转链表，将每个元素放入微任务队列中，因为 promise 在使用 then 收集依赖时是将最新的依赖存放到链表头部，所以还需要先对链表进行反转，然后将其挨个放入 microtask 队列中等待执行



- 链式调用：jQuery 返回的是对象本身，而 Promise 返回的是一个新的 Promise，Promise 实例的 then, catch, finally 添加完回调方法后，会返回一个 pending 状态的 promise 实例对象，后续状态取决于回调的执行情况。
- 多个 then 与 then内部 Promise 实例的多个 then的执行顺序，then 内部返回新的 Promise 实例与不返回的区别？
- Promise 实例与 Promise.resolve()实例维护

-----------
再来回顾一下 reactions_or_result 的3个值状态（空、链表、promise的值）:
当 promise 刚刚被创建时，reactions_or_result的值的空，
当promise的状态改变为 fulfilled/rejected 时，其值是调用对应 resolve(value)/reject(value) 函数传入的参数 value，也就是 promise 的值。
当 promise 为 pending 状态且被调用 then 后，reactions_or_result 为一个链表，链表的每一项存储的是调用 then 时传入的处理函数。
-----------



```javascript
// 全局 Promise
var P = Promise.resolve();
a.onclick  = function(){
    //将事件过程包装成一个promise并通过then链连接到
    //全局的Promise实例上，并更新全局变量，这样其他点击
    //就可以拿到最新的Promies执行链
    P = P.then(function(){
        //then链里面的函数返回一个新的promise实例
        return new Promise(function(resolve,reject){
          // 异步请求
            setTimeout(function(){
                resolve()
                i.value = "a";
            },1000)
        })
    })
}
b.onclick  = function(){
    P = P.then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
                console.log("b")
                i.value = "b"
            },2000)
        })
    })
}
```

## Promise 对象，thenable 对象

- thenable 对象是具有 then 方法的对象; thenable: {then:()=>{}}
- p1 = Promise.resolve(thenable), p1.then(...) 将这个对象转为 Promise 对象，并立即执行 thenable 对象的then方法
- Promise.resolve('thenable')不是对象，就返回新的 Promise 对象，状态为 resolved.
- Promise.resolve()不带参数，直接返回 resolved 的 Promise 对象

实现Promise.finally
