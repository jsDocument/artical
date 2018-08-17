
# http 篇

1. get和post的区别
    + get请求参数是放在url中
    + get请求可以被保存在书签和浏览器历史中, 但post不能
    + get请求可以被浏览器缓存, post不能
    + get请求受到URL长度限制, 所以数据长度也受限制, post不会
    + get请求只能传输ASCII, 面post不受限制, 还可以传输二进制数据
    + get代表获取指定获取服务器上的资源, post代表向指定的资源提交要处理的数据
    + get产生一个TCP数据包, 把header与data一起发过去, 等待服务器响应
    + post时, 浏览器先发送header, 服务器响应100 continue, 浏览器再发送data, 等待服务器响应(非FF), 网络环境差的时候, 两次包的TCP在验证数据完整性上有非常大的优势

2. websocket 客户端与服务端的全双工通信, 用途
    + http是客户端发起, websocket为全双工方式
    + websocket相对于http数据包更小, 没有同源限制, 可以跨域共享资源
    + 用于离线缓存

3. http2比http1的优点
    + 多路复用
    + 二进制分帧
    + 首部压缩
4. jQ的ajax返回值
    + 一个延迟对象$.Deferred

5. HTTP状态码及304缓存的执行过程
6. jsonp原理, 跨域的请求资源解决方法有哪些, 优缺点
7. XML与JSON的区别
    + XML多余数据比较多, 数据量大, 传输更占用空间, 解析比较烦琐
    + json数据量小, 利用网络传输, 客户端与服务端都有基础的解析方法

8. 如何避免浏览器缓存get请求, 以达到每次get请求都获取最新数据
    + 给请求添加时间戳

9. 头Accept, Accept-Language, Content-Language, Last-Event-ID, Content-Type; 简单与非简单请求

10. 后端设置Access-Control-Allow-Methods跨域请求的方法, ..-Headers服务器支持的所有头信息字段, ..-Credentials, 前端withCredentials: true

11. 跨域共享资源jsonp
    + 利用script的url跨域特性, 发一个特殊的请求, 将函数名发送给后端, 后端返回相应的函数体
    + jsonp【只能发送get请求, 无法更好的错误处理, 处理恶意攻击】， 反向代理, 图像ping【容易被缓存, 无法接到服务端的回复】, websocket【全双工】, CORS【需要后端配合】
