## js 有两种模式，同步模式与异步模式，异步模式分为：宏任务与微任务

+ 宏任务Task，由浏览器或 Node 发起，包括：setTimeout, setInterval, MessageChannel, I/O 事件队列，setImmediate(Node 环境), Script 整体代码块
+ 微任务 Jobs，有 JS 自身发起，包括：requestAnimationFrame, `MutationObserver(浏览器环境)`, Promise.[then, catch, finally], `process.nextTick(Node 环境)`, `queueMicrotask`
+ requestAnimationFrame 会在下一次重绘之前执行
+ 假设有两个代码块：执行第一个代码块的同步代码，创建并排入了微任务、宏任务队列---->同步代码执行完成----->清空其微任务队列


## promise 与 async/await 执行时序

+ 两个Promise 实例的 then 链微任务交替执行是按就近原则

```javascript
// 1
new Promise((resolve, reject) => {
    console.log("1"); // 1. Promise构造函数接受的参数是一个需要立即执行的函数, 是一个同步任务
    resolve();
  })
.then(() => { // 2. 注册then方法，把它加到微任务队列
    // 3. 没有同步代码，开始执行该微任务
    console.log("2");
    new Promise((resolve, reject) => { // 4. 继续执行Promise构造函数
        console.log("3");
        resolve();
    })
    .then(() => { // 5. 注册其then方法，将其加到微任务队列
        console.log("4"); // 7. 执行
    })
    .then(() => { // 8. 注册
        console.log("5"); // 10. 执行
    });
})
.then(() => { // 6. 没有同步代码，第一个then执行完毕，继续注册外层 Promise 的第二个 then
    console.log("6"); // 9. 执行
});
// 2
new Promise((resolve, reject) => {
    console.log("1"); // 1. 构造函数的参数，先执行
    resolve();
  })
.then(() => { // 2. 注册第一个then
    console.log("2"); // 3. 执行第一个 then
    // 看到return ，需要将表达式执行完毕，才能执行外层第二个then
    return new Promise((resolve, reject) => {
        console.log("3"); // 4. 构造函数执行
        resolve();
    })
    .then(() => { // 5. 注册
        console.log("4"); // 6. 执行
    })
    .then(() => { // 7. 注册
        console.log("5"); // 8. 执行
    });
})
.then(() => { // 9. 注册
    console.log("6"); // 10. 执行
});
// 3
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})


// https://github.com/sisterAn/blog/issues/21
// 今日头条面试题，
// 同步任务：主线程执行，形成一个执行栈
// 异步任务：异步任务有了运行结果，就在任务队列之中放置一个事件
// 宏任务：每次执行栈执行的代码，就是一个宏任务
// 宏任务----渲染-----宏任务，微任务是当前task 执行结束立即执行的任务(渲染之前)
// microtask: Promise.then, MutationObserver, process.nextTick
// macro: script 整体, setTimeout, setInterval, I/O, UI 交互事件, postMessage, MessageChannel, setImmediate
async function async1() {
    console.log('async1 start') // 2 宏任务--同步任务
    await async2() //返回 Promise 或其他值，让出线程的标志，后面的代码会先执行一遍，将后面的代码加入到微任务中
    console.log('async1 end') // 5 微任务
}
// 等价于
// async function async1() {
// console.log('async1 start');
// Promise.resolve(async2()).then(() => {
//         console.log('async1 end');
//     })
// }
async function async2() {
    console.log('async2') // 3 同步任务
}
console.log('script start') // 1 宏任务--同步任务
setTimeout(function () {
    console.log('settimeout') // 8 另一个宏任务
})
async1() // 宏任务--同步任务
new Promise(function (resolve) {
    console.log('promise1') // 4 宏任务
    resolve() // 执行结束，放置事件
}).then(function () {
    console.log('promise2') // 7 微任务
})
console.log('script end') // 6 宏任务
// 运行机制
// 执行一个宏任务（栈中没有就从事件队列中获取）
// 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
// 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
// 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
// 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7
// 变式 1
async function async1() {
    console.log('async1 start'); //2
    await async2();
    console.log('async1 end'); // 注册 2   7
}
async function async2() {
    //async2做出如下更改：
    new Promise(function(resolve) {
        console.log('promise1'); // 3
    resolve();
}).then(function() {
    console.log('promise2'); // 注册 1   6
    });
}
console.log('script start'); //1

setTimeout(function() {
    console.log('setTimeout');  // 9
}, 0)
async1();

new Promise(function(resolve) {
    console.log('promise3'); //4
    resolve();
}).then(function() {
    console.log('promise4'); // 注册 3   8
});

console.log('script end'); // 5



// 变式 2
async function async1() {
    console.log('async1 start'); // 2
    await async2();
    //更改如下：
    setTimeout(function() {
        console.log('setTimeout1')  // 加入时机？？ 3    8
    },0)
}
async function async2() {
    //更改如下：
    setTimeout(function() {  // 加入 2   7
        console.log('setTimeout2')
    },0)
}
console.log('script start'); // 1

setTimeout(function() {
    console.log('setTimeout3'); // 加入 1    6
}, 0)
async1();

new Promise(function(resolve) {
    console.log('promise1');  // 3
    resolve();
}).then(function() {
    console.log('promise2'); // 注册 1    5
});
console.log('script end');  // 4



// 变式 3
async function a1 () {
  console.log('a1 start') // 2
  await a2()
  console.log('a1 end') // 注册 2    7
}
async function a2 () {
  console.log('a2') // 3
}

console.log('script start') // 1

setTimeout(() => {
  console.log('setTimeout') // 加入 1    10
}, 0)

Promise.resolve().then(() => {
  console.log('promise1') // 注册 1    6
})

a1()

let promise2 = new Promise((resolve) => {
  resolve('promise2.then')
  console.log('promise2') // 4
})

promise2.then((res) => { // 注册 3
  console.log(res)   // 8
  Promise.resolve().then(() => {  // 注册  4     9
      console.log('promise3')
  })
})
console.log('script end') // 5

// 变体 4----实现来源于 ECMAScript规范，PromiseReaction 底层是一个链表，每一个节点都存着 onFulfilled 和 onRejected 函数
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4) // 返回对象是 thenable，所以又有异常微任务
}).then(res => {
    console.log(res);
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
})
// 0 1 2 3 4 5 6


new Promise((resolve, reject) => {
    Promise.resolve().then(() => {
        resolve({
            then: (resolve, reject) => resolve(1)
        });
        Promise.resolve().then(() => console.log(2));
    });
}).then(v => console.log(v));
// 2 1
// 其他

const p = Promise.resolve();
(async () => {
    await p;
    console.log('await end');
})();
p.then(() => {
    console.log('then 1');
}).then(() => {
    console.log('then 2');
});



setTimeout(function(){
  console.log(2);
},0);
new Promise(function(resolve){
  console.log(3);
  resolve();
  console.log(4);
}).then(function(){
  console.log(5);
});
console.log(6);
```

+ Promise状态不可逆
+ async/awaait 是 generator + Promise 的语法糖

## promise 考察点

+ then 执行顺序
+ 值穿透：前面的 then 没有添加回调，后面 then 的回调拿到 resolve 的参数值
+ Promise.resolve('param') 直接从 pending 到 resolved，后面加 then回调会直接执行？then 回调本身也会返回一个新的 promise 对象，
+ 所以也可以根据需要给 then 回调返回包含逻辑的 promise 对象，其 resolve(val)值可以作为后续的 then的参数，前一个状态有后一个状态决定
+ then、catch注册时机、顺序？
+ 把逻辑放在 Promise 构造函数？then 队列？

```javascript
new MutationObserver(function () {
  console.log('mutate');
}).observe(DOM, {
  attributes: true,
});
```
