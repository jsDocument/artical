### 异步渲染

#### nextTick 的行为通过Promise.then 或者 MutationObserver

+ 用法 Vue.nextTick( [callback, context] )
+ UIWebView IOS >= 9.3.3 支持 MutationObserver
+ 如果支持元素 Promise，就用 Promise.then
+ 在异步渲染这里，是把 flushSchedulerQueue 放入异步任务队列了

```js{6-7,16,21-24,29,34,39,48,53}
let timerFunc
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  // Promise
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // MutationObserver
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  // setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      // TODO
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      // TODO
      _resolve = resolve
    })
  }
}
```
