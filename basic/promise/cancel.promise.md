## 失败重试

```javascript
Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        var ret = await promiseFn();
        resolve(ret);
        break;
      } catch (error) {
        if (!times) reject(error);
      }
    }
  });
};
function getProm() {
    const n = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() =>  n > 0.9 ? resolve(n) : reject(n), 1000);
    });
}
Promise.retry(getProm);
```

+ 取消Promise

```javascript
// axios 版本---cancelToken 参数
// 构造函数 axios.CancelToken(执行器函数)
// 工厂方法 cancelToken.source().token
// isCancel
// 拦截器 + source.cancel()
// config.cancelToken.promise.then 里面进行取消执行
// cancelToken(executor)---定义 this.promise，将 resolvePromise 暴露出来，executor里执行并执行Cancel
// 在 xhr 中发现
// token, message
if (config.cancelToken) {
//这里当promise变成成功后，调用了then执行request.abort()这样就取消了这个请求；
  config.cancelToken.promise.then(function onCanceled(cancel) {
    if (!request) {
      return;
    }
    //取消请求
    request.abort();
    reject(cancel);
    // Clean up request
    request = null;
  });
}
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

// 定义一个promise属性，把resolve拿出来备用
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // 把控制状态的方法cancel传给回调函数
  // 这样外部就可以控制改变CancelToken的状态了
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
// axios：request + Promise 链式调用
// 常用的功能，拦截器，数据修改器，http请求，就是在这个Promise链式调用中逐步被执行。request方法返回Promise链。我们用的就是这个返回的Promise，执行结果就在这个Promise中的状态值中。

// 连接器需要注册 axios.interceptors.request.use(fulfilled, rejected)
// 终止请求：config.cancelToken.throwIfRequested
// axios.spread?

// 未验证
async function updateUser(token) {
  let cancelled = false;

  // 我们不调用 reject，因为我们无法访问
  // 返回的 Promise
  // 我们不调用其它函数
  // 在结束时调用 reject
  token.cancel = () => {
    cancelled = true;
  };

  const data = await wrapWithCancel(fetchData)();
  const userData = await wrapWithCancel(updateUserData)(data);
  const userAddress = await wrapWithCancel(updateUserAddress)(userData);
  const marketingData = await wrapWithCancel(updateMarketingData)(userAddress);

  // 因为我们已经包装了所有的函数，以防取消
  // 不需要调用任何实际函数来达到这一点
  // 我们也不能调用 reject 方法
  // 因为我们无法控制返回的 Promise
  if (cancelled) {
    throw { reason: 'cancelled' };
  }

  return marketingData;

  function wrapWithCancel(fn) {
    return data => {
      if (!cancelled) {
        return fn(data);
      }
    }
  }
}

const token = {};
const promise = updateUser(token);
// 等一会...
token.cancel(); // 用户还是会被更新
```
