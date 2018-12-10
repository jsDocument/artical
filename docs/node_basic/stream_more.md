# through2是对stream.Transform的封装

## API基础回顾
1.  stream.Readable---\_read(size) `两种模式(flowing, paused)、三种状态、选择一种方法: 停止必调用read方法从流中读取数据片段、 读、恢复、包裹、头部增加`

    > 可读流都始于paused模式；通过data事件、resume方法，pipe方法发送数据到可定流；将paused模式切换到flowing模式，如果没有管道目标，可以通过pause方法切换回paused模式，有管道目标，则移除管道目标，或调用unpipe方法移除多个管道目标，回到paused模式

    - 事件：close, data, end, error, readable
    - 方法：destory(), isPaused(), paused(), pipe(), read(), resume(), setEncoding(), unpipe(), unshift(), wrap(), readable[Symbol.asynclterator]()
    - 属性：readableHighWaterMark, readableLength

2.  stream.Writable---\_write(chunk, encoding, callback)

    - 事件：close, drain「write方法返回false时」, error, finish, pipe「流到目标流时触发」, unpipe「可读流调用unpipe方法，从目标流中移除当前可写流时触发」
    - 方法：cork()「强制把所有写入的数据都缓存到内存中」, destory(), end()「被缓冲的数据输出」, setDefaultEncoding(), uncork()「cork缓冲的数据输出」, write()
    - 属性：writableHighWaterMark, writableLength

3.  stream.Duplex---\_read(size) 和 \_write(chunk, encoding, callback) 写与读无关联，两个缓冲区互不干扰

4.  stream.Transform---\_flush(size) 和 \_transform(chunk, encoding, callback)  输入与输出存在相互关联
    - destory()

5. 公共方法：finished(), pipeline()

> 缓冲区：每个缓冲区都有一个highWaterMark的阈值，超过后会停止读或写操作。

## stream 实现流的API

1. new stream.Writable([options]) 需要实现的方法
    - writable.\_write(chunk, encoding, callback)
    - writable.\_writev(chunks, callback)
    - writable.\_destroy(err, callback)
    - writable.\_final(callback)

2. new stream.Readable([options])
    - readable.\_read(size)
    - readable.\_destroy(err, callback)
    - readable.push(chunk[, encoding])

3. new stream.Duplex([options])

4. new stream.Transform([options])
    - 事件finish, end
    - transform.\_flush(callback)
    - transform.\_transform(chunk, encoding, callback)