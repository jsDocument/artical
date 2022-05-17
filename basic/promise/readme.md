### event loop 与 宏任务 与 微任务

#### 浏览器运行有两种模式，同步模式与异步模式

#### 异步模式分为：宏任务与微任务

+ 浏览器的宏任务：宏任务中可能会执行的代码包括“脚本 (script)”“模块（module）”和“函数体（function body）”
  + 函数体其实也是一个语句的列表，函数体中的语句列表中多了 return 语句可以用
+ 宏任务Task，由浏览器或 Node 发起，包括：setTimeout, setInterval, MessageChannel, I/O 事件队列，setImmediate(Node 环境), Script 整体代码块
+ 微任务 Jobs，有 JS 自身发起，包括：requestAnimationFrame, `MutationObserver(浏览器环境)`, Promise.[then, catch, finally], `process.nextTick(Node 环境)`, `queueMicrotask`
+ requestAnimationFrame 会在下一次重绘之前执行
+ 假设有两个代码块：执行第一个代码块的同步代码，创建并排入了微任务、宏任务队列---->同步代码执行完成----->清空其微任务队列

#### nodeJS 事件循环---来自 libuv

+ 事件驱动的异步 IO模型而设计：
+ timers
+ pending callbacks
+ idle, prepare
+ poll
+ check
+ close callbacks
