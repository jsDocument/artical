# Koa

## 分为 3 个模块

+ Application：Http server 封装
  + .listen 处理请求及响应，并监听接口
  + .use 收集中间件，并用 compose 函数串联起来
+ Context：Koa 上下文
+ Middleware：洋葱模型
+ 解析请求体：body-parser
+ 发送请求，http.get()


## 中间件流程控制---- 本质上是Promise.resolve()的递归

- 认识：await next()的时候就会暂停当前程序，进入下一个中间件，处理完之后才会仔回过头来继续处理

```javascript
const Koa = require('koa');

const app = new Koa();
const PORT = 3000;

// #1
app.use(async (ctx, next)=>{
    console.log(1)
    await next();
    console.log(1)
});
// #2
app.use(async (ctx, next) => {
    console.log(2)
    await next();
    console.log(2)
})

app.use(async (ctx, next) => {
    console.log(3)
})

app.listen(PORT);
console.log(`http://localhost:${PORT}`);
// listen 生成的 node 的 httpServer(this.callback())
listen(...args) {
  debug('listen');
  const server = http.createServer(this.callback());
  return server.listen(...args);
}
```

## 中间件管理 ---- context 的保存和传递，中间件的管理和 next 的实现

- use 方法负责收集中间件
  - compose(middleware) 方法负责包装中间件的参数与实现内部的 dispatch 方法

```javascript
callback() {
  const fn = compose(this.middleware); // 核心：中间件的管理和next的实现

  if (!this.listeners('error').length) this.on('error', this.onerror);

  const handleRequest = (req, res) => {
    const ctx = this.createContext(req, res); // 创建ctx
    return this.handleRequest(ctx, fn);
  };

  return handleRequest;
}

// app.use 收集中间件
use(fn) {
    this.middleware.push(fn);
    return this;
}

function compose (middleware) {
  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)

    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
          // 核心代码：返回Promise
          // next时，交给下一个dispatch（下一个中间件方法）
          // 同时，当前同步代码挂起，直到中间件全部完成后继续
        return Promise.resolve(fn(context, function next () {
          return dispatch(i + 1)
        }))
        // ********
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
// 等同于
Promise.resolve(middleware1(context, async() => { // 注意async关键字不能省略
  return Promise.resolve(middleware2(context, async() => {
    return Promise.resolve(middleware3(context, async() => {
      return Promise.resolve();
    }));
  }));
}))
.then(() => {
    console.log('end');
});
```
