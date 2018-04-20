# net

### net---TCP
+ net.Server类
    1. 事件:
        1. close 服务关闭时触发, 只有所有连接都结束才会触发该事件
        2. connection net.Socket的实例对象, 一个新的connection建立时触发
        3. error 错误出现时触发
        4. listening 服务被绑定后触发
    2. 方法:
        1. listen() 启动一个server监听, 根据参数不同可以是IPC 或 TCP服务; 方法可能被多次调用, 每个后续调用都使用其提供的选项重新打开服务器。backlog参数来指定待连接队列的最大长度。
        2. getConnections(cb) 异步获取服务器的当前并发连接数, 回调函数参数为err, count
        3. close(cb) 停止接受建立新的connection, 保持已存在connection, 功能为异步的, 当所有connections关闭时server响应close事件
        4. ref() 在已调用unref的server中调用ref, 如果server为仅存的server, 则程序不会默认退出 5. unref() 如果server在事件系统中唯一有效的, 对server调用unref将允许程序退出
        6. address()返回绑定的ip地址
    3. 属性: listening是否正在监听连接, maxConnections, connections
+ net.Socket({fd, allowHalfOpen, readable, writable})类
    1. 事件:
        1. close 完全关闭时触发该事件
        2. connect socket连接成功建立时触发
        3. error 错误发生时触发, close事件也会紧接着该事件被触发
        4. data 当接收到数据时触发
        5. end  socket的另一端发送一个FIN包时触发, 从而结束socket的可读端
        6. drain 当写入缓冲区变为空时触发
        7. lookup 在找到主机之后创建连接之前触发
        8. timeout socket超时触发
    2. 方法:
        1. __write(data[,encoding][,cb])发送数据, setEncoding(), resume(), pause(), end(),__ destory(), connect(), unref(), ref(), address(),
        2. setKeepAlive() 是否用长连接功能,
        3. setNoDelay(noDelay)默认是发送之前缓冲数据,
        4. setTimeout()多少时间不活跃设置为超时, 但连接不会被断开, 需手动调用socket.end()
    3. 属性:
        1. bufferSize 当前即将被写入的缓冲的字符数
        2. bytesread 接收的字符数量
        3. bytesWritten 发磅的字符数量
        4. connectiong
        5. destroyed 连接是否忆被销毁
        6. localAddress
        7. localPort
        8. remoteAddress
        9. remoteFamily 字符串表示远程IP协议族
        10. remotePort
+ net.crateServer() 创建服务, 是net.Server的一个实例
+ net.connect(port, host, connectListener) 下面方法的别名
+ net.createConnection() 调用net.Socket 和 socket.connect()
+ isIP(input)
+ isIPv4(input)
+ isIPv6(input)

`

    var net = require('net');
    var assert = require('assert')
    var clients = 0;
    // 参数clinet实际上是一个socket, 故write方法写入数据将通过网络发送
    // 添加到socket的任何事件监听回调将共享相同的作用域, 它会创建回调内的作用域
    var server = net.createServer((socket)=>{
            clients++;
            console.log(clients);
            socket.on('end',()=>{
                console.log('客户端开始关闭')
                // 所有客户端关闭跟本服务的联接后, 本服务将关闭
                server.unref()
            })
            socket.on('data',(data)=>{

            })
            socket.on('close'()=>{
                console.log('客户端关闭')
            })
            // 设置客户端的超时时间
            socket.setTimeout(3000)
            socket.on('timeout',()=>{
                console.log('超时了')
                socket.pipe()
            })
            socket.write(clients);
            // 把客户端的数据返回到客户端
            socket.pipe(client)
        })
    server.listen(8000,()=>{
        console.log(`服务器地址: ${server.address()}`)
    })
    server.on('error',(err)=>{
        console.log(err)
    })

    server.on('connection',(socket)=>{
        console.log(socket.remoteAddress)
    })

    //使用命令行工具创建一个线程内的客户端连接事件 telnet
    telnet localhost 8000
    //或
    runTest(exceptedId, done){
        var client = net.connect(8000, 'localhost');
        // 获取服务端发送的数据

        client.on('data',(data){
            assert.equal(data.toString, exceptedId)
            client.end();
        })
        client.on('end', done)
        client.on('close',()=>{

        })
    }
`


### Tcp聊天工作室
`

    var net = require('net')
    var server = net.createServer((socket)=>{
        socket.setEncoding('uft8')
        socket.getConnections((err, count)=>{
            socket.write(`你是第${count}位在线的, 请输入你的昵称\n\r`)
        })
        // 接收客户端发送的消息
        socket.on('data',(data)=>{

        })
    })
    server.on('error',(err)=>{
        console.log('服务出错了', err)
    })
    server.listen(8000, ()=>{
        console.log('聊天工作室已启动')
    })

`


### socket
+ 一个端口加上一个地址构成一个socket
+ 同时使用TCP与UDP的有DNS协议

### HTTP
+ 基于net, stream, buffer, event模块作为底层
+ 使用时还会用到crypto, tls(OpenSSL公钥加密)支持加密

### 线程封装实现异步
+ 非阻塞I/O, 线程池, 异步APIs
+ 文件操作底层实现不是异步, 而是线程池
