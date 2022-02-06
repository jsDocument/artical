## promise 相关问题

- 执行时序
- 自己实现
- 手动维护 HTTP 请求队列
- Promise 实例与 Promise.resolve()实例维护

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
