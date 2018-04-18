### net---TCP
+ net.Server类
    1. 事件: close, connect, error, listening
    2. 方法: listen(), getConnections(cb), close(cb), ref(), unref(), address()
    3. 属性: listening, maxConnections
+ net.Socket类
    1. 事件: close, connect, error, data, end, drain, lookup, timeout
    
+ net.crateServer() 创建服务, 是net.Server的一个实例
+ net.connect()
+ net.createConnection()
+ isIP(input)
+ isIPv4(input)
+ isIPv6(input)

`

    var net = require('net');
    var assert = require('assert')
    var clients = 0;
    // 参数clinet实际上是一个socket, 故write方法写入数据将通过网络发送
    // 添加到socket的任何事件监听回调将共享相同的作用域, 它会创建回调内的作用域
    var server = net.createServer((client)=>{
            clients++;
            console.log(clients);
            client.on('end',()=>{
                console.log('end')    
            })
            client.write(clients)
            // 把客户端的数据返回到客户端
            client.pipe(client)
        })
    server.listen(8000,()=>{})

    //使用命令行工具创建一个线程内的客户端连接事件 telnet
    telnet localhost 8000
    //或
    runTest(exceptedId, done){
        var clinet = net.connect(8000);
        // 获取服务端发送的数据
        client.on('data',(data){
            assert.equal(data.toString, exceptedId)
            client.end();
        })
        client.on('end', done)
    }
`

### socket
+ 一个端口加上一个地址构成一个socket
+ 同时使用TCP与UDP的有DNS协议

### dgram---UDP


### HTTP
+ 基于net, stream, buffer, event模块作为底层
+ 使用时还会用到crypto, tls(OpenSSL公钥加密)支持加密

### 线程封装实现异步
+ 非阻塞I/O, 线程池, 异步APIs
+ 文件操作底层实现不是异步, 而是线程池