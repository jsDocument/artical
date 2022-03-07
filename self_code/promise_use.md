+ AbortController
  + AbortController[3] 接口表示一个控制器对象，可以根据需要终止一个或多个Web请求。
  + AbortController()：AbortController()构造函数创建一个新的 AbortController 对象实例
  + signal：signal 属性返回一个 AbortSignal 对象实例，它可以用来 with/about 一个Web(网络)请求
  + abort()：终止一个尚未完成的Web(网络)请求，它能够终止 fetch 请求，任何响应Body的消费者和流

+ 过程：
  + 首先使用 AbortController() 构造函数创建一个控制器
  + 然后使用 AbortController.signal 属性获取其关联 AbortSignal 对象的引用。
  + 当一个 fetch request 初始化时，我们把 AbortSignal 作为一个选项传递到请求对象 (如下：{signal}) 。
  + 这将`信号和控制器与获取请求相关联`，然后允许我们通过调用 AbortController.abort() 中止请求。
+ 实际上await是一个让出线程的标志。await后面的表达式会先执行一遍，将await后面的代码加入到microtask中，然后就会跳出整个async函数来执行后面的代码
+ script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)
+ Promise.then、MutaionObserver、process.nextTick


```javascript
// 一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。使得排序后数组中球的顺序为:黄、红、蓝。
// 红绿灯:3秒后亮一次红灯，再过2秒亮一次绿灯，再过1秒亮一次黄灯，如此循环一直交替下去
const LIGHTS = [
    {
        color: 'red',
        time: 3000
    },
    {
        color: 'green',
        time: 2000
    },
    {
        color: 'yellow',
        time: 1000
    }
];
function light(color, time){
  return new Promise((resolve, reject)=>{
    try{
      setTimeout(()=>{
        console.log(new Date().getSeconds(), color);
        resolve();
      }, time)
    }catch(e){
      reject(e);
    }
  })
}
function main(){
  let p = Promise.resolve();
  LIGHTS.forEach(x=>{
    p = p.then(()=>{light(x)})
  });
  p.then(()=>main());
}

// 并发数量控制？？？？
function asyncPool(promiseFNs, limit){
  const len = promiseFNs.length;
  let ret = new Array(len).fill(false);
  let count = 0;
  return new Promise((resolve, reject)=>{
    while(count < limit){
      next();
    }
    function next(){
      let current = count++;
      // 加入的完成
      if(current >= len){
        !ret.include(false) && resolve(ret);
        return;
      }
      const fn = promiseFNs[current];
      fn().then((res)=>{
        ret[current] = res;
        if(current < len){
          next();
        }
      }).catch((err)=>{
        ret[current] = err;
        if(current < len){
          next();
        }
      })
    }
  })

}
// cancelToken 终止请求的流程
// CancelToken.source().cancel('xxxx');
// 手动取消
const controller = new AbortController();
let signal = controller.signal;
 console.log('signal 的初始状态: ', signal);

const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
 console.log('signal 的中止状态: ', signal);
});

function fetchVideo() {
  //...
  fetch(url, {signal}).then(function(response) {
    //...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
// 手动取消
function promise_cancel_wrap(promiseFN){
  let options = {
    aborted: false;
  }
  const p = new Promise(async(resolve, reject)=>{
    try{
      const ret = await promiseFN();
      if(options.aborted){
        reject('canceled');
      }else{
        resolve(ret);
      }
    }catch(err){
      reject(err);
    }
  })

  p.cancel = ()=> {
    options.aborted = true;
  }

  return p;
}

const p = promise_cancel_wrap(promiseFn)
p.cancel();

// 超时取消
function promise_cancel(fetchRequest, timeLimit){
  const timer =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject('timeout');
    }, timeLimit)
  });
  return Promise.race([fetchRequest, timer])
}
// 失败重试
function promise_retry(fn, limit){
  return new Promise(async(resolve, reject)=>{
    while(limit--){
      try{
        const ret = await fn();
        resolve(ret);
        break;
      }catch(err){
        if(!time) reject(err);
      }
    }
  })
}
```

