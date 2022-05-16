# UDP

### dgram 创建数据报sockets, 通过一个流发磅数据报到UDP服务器

+ Socket类
    1. 事件 close, error, listening, message
    2. 方法: close(), bind()绑定端口, address(), send(msg), ref(), unref()
+ createSocket(options/type[,cb])

### 创建服务端

```js
var dgram = require('dgram')
var server = dgram.createSocket('udp4')
server.on('error',(err)=>{
    console.log(`服务器异常:\n ${err.stack`)
    server.close()
})
server.on('message',(msg, rinfo)=>{
    console.log(`${msg}来自${rinfo.address}:${rinfo.port}`)
})
server.on('listening',()=>{
    console.log(`服务器监听开始`)
})
server.bind(41234)
```

### 客户端

```js
// 创建客户端与创建服务端相同
var stream = require('stream')
var dgram = require('dgram')
var socket = dgram.createSocket('udp4')
var defaultSize = 16

function client(remoteIp){
    var inStream = fs.createReadStream(fileName)
    inStream.on('readable', ()=>{
        sendData();
    })
    function sendData(){
        var msg = inStream.read(defaultSize)
        if(!msg){
            return socket.unref()
        }
        socket.send(msg, 0, msg.length, 41234, remoteIp,(err, bytes)=>{
            sendData()
        })
    }
}
```
