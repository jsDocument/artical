# EventEmitter

node的事件是订阅/发布的一种模式

## 事件的类EventEmitter

+ 创建一个基础EventEmitter的自定义类

```js
var util = require('util');
var events = require('events');
function MusicPlayer(){
    this.playing = false;
    events.EventEmitter.call(this);
}
var AudioDevice = {
    play: function(track){

    },
    stop: function(){}
}

util.inherits(MuiscPlayer, events.EventEmitter)
var musicPlayer = new MusicPlayer();
musicPlayer.on('play', function(track){
    this.playing = true;
    AudioDevice.play(track);
})
musicPlayer.on('stop', function(){
    this.playing = false;
    AudioDevice.stop();
})
musicPlayer.emit('play', 'The Roots - The Fire')
setTimeout(function(){
    musicPlayer.emit('stop');
})
```

+ express是以mixin(app, EventEmitter.prototype, false);方式创建基于事件的自定义类
+ inherits是通过封装ES5r Object.create来实现的, 通过从一个原型到另一个原型继承属性的方式来实现。
+ 移除musicPlayer.removeListener('play', play)
+ 如果已经有自己的类, 不想简单的继承 EventEmitter时, 可以将原型方法拷贝到另一个原型对象上。
+ 异常处理: 在异常发生时阻止异常抛出。默认没有监听error时会打印一个堆栈并退出程序。

```js
musicPlayer.on('error', function(err){
    console.log('Error', err);
})
```

+ 通过domain管理异常, 处理多个事件实例异常, domain能集中的处理多个异步操作
+ 反射, 通过监听newListener事件来获取新添加的事件与监听器的方法。

## Event loop

js执行环境中存在「主线程 」和「任务队列」,所有同步任务都在主线程中, 形成一个执行栈, 异步任务都在任务队列中。

+ 主线程执行同步任务, 执行过程中, 不断形成堆栈, 并执行出栈入栈的操作
+ 主线程执行完毕, 则进入下一步, 否则继续
+ 系统读取任务队列里的任务, 进入执行栈, 开始执行; 不断的读取任务, 执行。

1. timers 执行到期的setTimeout 与 setInterval回调   (node没有绝对意义的0ms)
2. I/O callbacks 上一轮少数的I/O会被延迟到这一阶段执行
3. idle, prepare : 队列的移动
4. poll：执行I/O callbak阶段，可能会造成阻塞
5. check: setImmediate的callback
7. close callback：close事件的callback
    process.nextTick()与Promsie.then()会在每个阶段执行完成后, 都执行一次，Process.next()优先于Promise.then()
    1. 每个阶段都有一个__FIFO__的回调队列要执行, 当进入某个阶段后, 会执行该阶段特定的操作, 才会执行这个阶段的队列里的回调, 当队列被执行完或回调数量达到上限, event loop进入下一阶段
    2. poll的功能: A、执行下限时间已经达到的timers的回调; B、处理poll队列里的事件回调

```javascript
   setTimeout(function () {
       console.log(1);
   },0);
   console.log(2);
   process.nextTick(() => {
       console.log(3);
   });
   new Promise(function (resolve, rejected) {
       console.log(4);
       resolve()
   }).then(res=>{
       console.log(5);
   })
   setImmediate(function () {
       console.log(6)
   })
   console.log('end');

Node输出：
2 4 end 3 5 1 6
```
