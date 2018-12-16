# async的实现原理

1. 同步与异步代码一起时，是什么样的执行结果？
2. 如下代码，会被兼容成什么呢？
  - 一个generator函数可以对promise进行yield


```javascript
async function foo(){
  await bar();
  await test();
}

function* foo(){
  const res1 = yield bar();
  const res2 = yield test(res1);
  console.log(res2);
}

// 再有一个控制generator函数迭代器的函数，它能够停止并等待每一个yield promise的执行结果
function runner(genFn){
 const it = genFn();
//  负责调用迭代器的next方法，再根据迭代器获得的返回值，不断的调用Promise的then方法执行run
 function run(arg){
   const result = it.next(arg);
   if(result.done){
     return result.value;
   }else{
     return Promise.resolve(result.value).then(run);
   }
 }
 return run();
}

runner(foo);

```
