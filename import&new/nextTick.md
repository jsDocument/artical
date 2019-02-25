## 调用栈 与 事件循环

- 每次事件循环都包含一个microtask队列，循环结束后会，依次执行队列中的microtask并移除，再执行下一次事件循环；执行microtask过程中加入的microtask队列的微任务，会在下一次事件循环之前执行。

## 异步任务队列

1. macro-task（task）包括：，setTimeout/setInterval，setImmediate，I/O操作，UI rendering   遇到调用则分发出去一个任务
2. micro-task（job）包括：process.nextTick，Promise，Object.observe(已废弃)，MutationObserver(html5新特性)  遇到调用则分发出去一个任务
3. 调用栈：全局—>job—>循环task(借助函数栈来完成，回到主线程)，如果task里再分发job，则不再执行其他task，而是执行job。
4. 执行顺序：全局任务、微任务、宏任务，每次任务执行后，都会有一个UI render，宏任务执行一个任务间隙，如果发现有微任务，先执行微任务，执行完微任务再执行宏任务。

1. DOM树事件(已被抛弃)
  - DOMSubTreeModified DOM树的变化
  - DOMAttrModifyed

## MutationObserver

- MutationObserver的监听参数{ childList, attributes, characterData, subtree, attributeOldValue, characterOldValue,  attributeFilter}
- Vue中使用了：
  1. macroTimerFunc-->setImmediate，MessageChannel，setTimeout
  2. microTimerFunc-->Promise，
  1. 使用更新文本节点控制回调的执行？即控制队列？如果数据修改-->通知watcher-->更新DOM；即将该任务放入task尾部

```javascript
let observer = new MutationObserver((records)=>{
  console.log('成功回调');
})
observer.observe(dom, options)

// vue的nextTick 中
export  const  nextTick = (function(){
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    // 拷贝后，再清空执行的原因？为什么是一个队列一个队列的执行？为什么不是同一时间内多个nextTick，启用多个异步任务，而是一个callbacks将异步任务压成一个同步任务？
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // timerFunc 将任务加入队列
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // 在部分 iOS 系统下的 UIWebViews 中，Promise.then 可能并不会被清空，因此我们需要添加额外操作以触发
      if (isIOS) { setTimeout(noop); }
    };
  }else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    var counter = 1
    var observer = new MutationObserver(nextTickHandler)
    var textNode = document.createTextNode(String(counter))
    observer.observe(textNode, {
        characterData: true
    })
    // 用文本节点的变动来触发监听，dom渲染完成后执行回调函数队列。
    timerFunc = () => {
      counter = (counter + 1) % 2
      textNode.data = String(counter)
    }
  }else {
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    // push进一个匿名函数，用于处理cb及ctx，resolve的作用？
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx)
        } catch (e) {
          err
        }
      } else if (_resolve) {
        _resolve(ctx)
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})()

```

- 新版本vue实现

```javascript

const callbacks = []
let pending = false

function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

let microTimerFunc
let macroTimerFunc
let useMacroTask = false

// 定义宏方法
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) || MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  const channel = new MessageChannel()
  const port = channel.port2
  channel.port1.onmessage = flushCallbacks
  macroTimerFunc = () => {
    port.postMessage(1)
  }
} else {
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

// 定义微方法
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  microTimerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
} else {
  microTimerFunc = macroTimerFunc
}

// 函数执行的过程中，对数据任意修改，触发变化执行nextTick时走macroTimerFunc
export function withMacroTask (fn: Function): Function {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true
    const res = fn.apply(null, arguments)
    useMacroTask = false
    return res
  })
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
      // 此处的作用？没有cb时的promise化调用？nextTick().then()
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    if (useMacroTask) {
      macroTimerFunc()
    } else {
      microTimerFunc()
    }
  }

  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}

```

- Process.nextTick(()=>{ 成功的回调})
- setImmediate(()=>{ 成功的回调}) 【IE与nodejs】
- setTimeout
- MessageChannel

```javascript
const channel = new MessageChannel()
const port = channel.port2
channel.port1.onmessage = flushCallbacks
macroTimerFunc = () => {
  port.postMessage(1)
}
```

