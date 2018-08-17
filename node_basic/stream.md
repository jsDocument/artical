# Stream

### 流: 用于管理和处理数据, 借助事件与非阻塞I/O库, 允许在其可用的时候动态处理, 不需要的时候释放掉。
+ 流所使用的场景: API接口, 内置fs, http, 解析器, 数据库, 网络协议
+ fs.createReadStream(file).pipe(process.stdout)
  1. 连接了源头(上游, 文件)和消耗(下游, 标准输出)
  2. 流会逐次调用fs.read, 将文件内容分批取出并传给下游
  3. 上游数据被分块地连续取走, 下游收到的是一个先后到达的数据序列

### 缓冲: 流将数据存储到内部的缓冲器(buffer)中

1. 缓冲器通过writable.\_writableState.getBuffer()或readable.\_readableState.buffer来获取
2. 缓冲器大小通过highWaterMark选项指定, 普通流指定的总共的字节数; 对象模式的流指定的对象的总数
3. 可读流通过stream.push(chunk)将数据放到缓冲器中, 如果没有消费都调用stream.read(), 数据就会始终在内部队列中, 走到被消费
4. 如果大小达到highWaterMark指定的阈值时, 流会「暂停从底层资源读取数据」, 直到缓冲器的数据被消费
5. 可写流通过反复调用Writable.write(chunk), 将数据放到缓冲器， 当内部大小小于highWaterMark指定的阈值时, 调用writable.write()将返回true, 否则该方法返回false

### 流的可用类

+ stream.Readable: I/O上获取数据, 定制类需要自己实现\_read(size)
  1. 事件:
    1. readable：数据块可以从流中读取时发生
    2. data：有数据可读时发生
    3. end：数据读完时发生
    4. close：底层资源关闭时
    5. error：接收数据中出现错误时发生
  2. 方法:
    1. read([size])
      - 无参，返回内部缓冲区里的所有数据，无数据返回null
      - 有参，返回指定数量的数据，如果数据不足，会返回null
    2. setEncoding(encoding) 解码读到的数据
    3. pause()  暂停，不再发生data事件
    4. resume() 恢复可读流，继续发生data事件
    5. pipe(destination)
      - 把可读流输出传递给「destination指定的Writable流」,两个流组成一个管道；
      - options是一个js对象，end属性为true, 表示Readable结束时自动结束Writable;
      - 可把一个Readable与多个Writable连在一起，组成多个管道，每个Writable都能到同样的数据，方法返回destination; 如果destination本身双是一个Readable，可级联调用pipe
    6. unpipe(destination) 端口与指定destination管道，无参时，断开一这个可读流连在一起的管道。

  3. 模式: 流动模式state.flowing=true、暂停模式「可读流创建时都是暂停模式」
  4. 流动模式下, 数据会通过data事件输出, 不需要消耗方反复调用read(n)方法
  5. 初始状态下, 监听“data”事件, 会使流进入流动模式, 暂停模式下, data事件不会进入流动模式, 要消耗流, 需要显示的调用read()方法
  6. 从暂停到流动的方法有:
    1. 显式的调用read()方法, 触发data事件
    2. 显式调用resume()
  7. 调用pipe()将可读流桥接到一个可写流上
  8. 从流动到暂停的方式有:
    1. 如果不存在管道目标，直接调用pause()
    2. 如果存在管道目标，需要移除与“data”事件关联的所有处理器，并且调用unpipe()方法断开所有管道。

> 1. 取消'data'事件监听并不会自动将流暂停, 同时如果管道目标存在且状态为可以接收数据, 调用pause()方法也不能保证流会一直保持暂停状态
  2. 如果切换到flowing模式, 且没有消费都处理数据, 这些数据将会丢失, 比如调用了resume()方法, 却没有'data'事件监听或取消了事件监听

```js
var http = require('http');
var fs = require('fs');
http.createServer((req, res)=>{
  fs.createReadStream('filePath').pipe(res);
})
```

## 实现一个可读流接口

```js
const Readable = require('stream').Readable
class myReadable extends Readable{
  constructor(iterator){
    super()
    this.iterator = iterator
  }
  _readable(){
    const res = this.iterator.next()
    if(res.done){
      return this.push(null)
    }
    // 同步
    // this.push(res.value)
    // 异步
    setTimeout(()=>{
      this.push(`${res.value}\n`)
    },0)
  }
}
const iterator = (function(limit){
  return {
    next: function(){
      if(limit--){
        return {done: false, value: limit}
      }
      return {done: true}
    }
  }
})(10)
const readable = new myReadable(iterator)
readable.on('data', data=> process.stdout.write(data))
radable.on('end', ()=> process.stdout.write('done'))
```
>  1. 重写_read()方法, 当流开始读取时会调用该方法, 去获取数据
2. this.push()会将数据源推入到可读流中的缓存队列中, 输出时再从缓存队列中取出流的chunk
3. this.push()是一个异步调用的方法, 因为将数据推入缓存队列并输出的过程加入事件循环队列中, 使得事件循环队列不会阻塞

+ 使用同步读数据或写数据, 不管是否是流, 都会阻塞事件循环, 因些并不是使用流以后性能就好, 还要将流的读写加入到事件循环中, 形成了「绝对不阻塞事件循环」的作用。

1. 无论是异步或同步push, stream会维护一个缓存队列, 数据大小超过缓存队列的大小, 会被自动切分
2. 异步push能够加入事件循环, 不会导致进程阻塞, 但不会进入缓存, 而是直接输出到on('data')中
3. 同步push, 会阻塞线程, 但会加入缓存中

> 1. 调用完_read()后, read()会试着从缓存中取数据, 如果_read(n)是异步调用的push方法, 些时缓存中的数据量不会增多, 容易出现数据量不够的现象
  2. 如果read(n)返回的为null, 说明此次未能从缓存中取出所需要的数据, 些时消耗方等到数据到达后再次尝试调用read(n)方法
  3. 数据到达后是通过readable方法通知消耗方的
  4. push方法如果立即输出数据, 消耗方只要监听data事件; 否则数据被添加到缓存中, 需要触发readable事件, 消耗方需要监听这个事件并手动调用read()方法


+ stream.Writable: 输出数据到底层I/O;  \_write(chunk, encoding, cb)
  1. 事件:
    1. finish： end()被调用，且所有数据都已被写入
    2. pipe：  Readable调pipe()方法时, writable发射这个事件
    3. unpipe
    4. error
    5. drain 缓存的数据被排空了
  2. 方法:
    1. writable(chunk[,encoding][,callback])  写的内容大于缓存区大小时, 返回false, 表示停止写入, 需要read()完缓存区数据, 即缓存区被排空, 触发drain事件, 可以防止缓存区爆仓
    2. end(chunk[,encoding][,callback])  调用触发finish事件
    3. cork() 强制所有写入数据都存入到内存听缓冲区里
    4. uncork() 输出在cork()方法调用之后, 缓冲在内存中的所有数据
  3. 属性:
    1. writableHighWaterMark

## 可写流的实现

```js
const Writable = require('stream').Writable

const writable = Writable()
// 实现`_write`方法
// 这是将数据写入底层的逻辑
writable._write = function(data, enc, next) {

    // 将流中的数据写入底层
    process.stdout.write(data.toString().toUpperCase())
    // 写入完成时，调用`next()`方法通知流传入下一个数据
    process.nextTick(next)
}

// 所有的数据都写完了
writable.on('finish', () => process.stdout.write('DONE'))

//数据源
const data = [1, 2, 3, 4, 5, 6, 7]
while (true) {
    // 将一个数据写入流中
    writable.write(data.shift() + '\n')
    //数据空的时候退出
    if(data.length ===0)break;
}
// 再无数据写入流时，需要调用`end`方法
writable.end()
```

+ stream.Duplex: \_read(size), \_write(chunk, encoding, cb)
  1. 常见的实现有: TCP socket, zlib, crypto
  2. 读写是分裂开的

+ stream.Transform: \_flush(size), \_transform(chunk, encoding, cb)
  1. 可写端写入数据变化 后会自动添加到可读端
  2. 常见的实现有: zlib, crypto
  3. 以某种方式修改我们的双工流, 没有输入数据要匹配输出数据的限制
  4. 读写并不分裂开, _transform方法可以做到: 读数据->转变数据->输出数据

下面为类接口实现执行流程图

![流程 text](./stream.png "title")

#### Node内部实现的流：

- 客户端的HTTP响应
- 服务端的HTTP请求
- fs读取流: fs.createReadStream(source,{options})
- zlib流
- crypto（加密）流
- TCP套接字
- 子进程的stdout和stderr
- process.stdin

### 错误跟踪

+ console.trace() 能够生成完整的堆栈跟踪, 会将Node核心模块event.js实现庄浪功能的地方跟踪到。
+ console.error(err.stack)

### 流的使用

> 压缩

```js
gzip = zlib.createGzip();
inFile = fs.createReadStream(file);
outGzip = fs.createWriteStream('file.gz')
inFile.pipe(gzip).pipe(outGzip)
```

> 解压

```js
var gunzip = zlib.createUnzip({flush: zlib.Z_FULL_FLUSH});
var inGzip = fs.createReadStream('readable.gz');
var outFile = fs.createWriteStream('readable.unzipped');
inGzip.pipe(gunzip).pipe(outFile);
```

### 实现一个流类的基本步骤

1. 在定义的类的构造函数中调用stream.Readable类接口
2. 定义类的原型继承stream.Readable.prototype
3. 定义原型的_read方法, 实现从底层读取数据到缓存队列。

### 优化流的缓冲区大小

1. input = fs.createReadStream(file, {bufferSize： insize})
2. output = fs.createWriteStream(file,{bufferSize: insize})
3. gzip = zlib.createGzip({chunkSize: outsize})
4. input.pipe(gzip).pipe(output)
