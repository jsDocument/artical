## 缓存

- cache-control: max-age, public, private, no-cache, no-store
- expries
- last-modify

## 跨域解决方案

- 由于浏览器的同源策略限制



## ajax, fetch, axios 「关注分离」

- ActiveXObject('Microsoft.XMLHTTP')
- XMLHTTPRequest
  - open（method, url, boolean）启动一个请求
  - send(null/data)
  - xhr对象的事件 onreqdystatechange, progress, abort, error, load, timeout
    - xhr对象的属性readyState 0 未打开, 1已打开, 2已发送, 3正接收, 4完成
    - xhr状态 200
    - responseText, responseXML
    - statusText
    - 取消请求 abort()
- ajax 基于 XML 开发的，增加了对 JSONP 的支持
  - post 默认的 contentType 格式为 'application/x-www-form-urlencoded;charset=UTF-8'
- Axios 也是基于 XML 开发，不过是结合 promise 实现的，符合最新的 ES 规范
  - 执行多个并发请求 axios.all(request1, request2)
  - instance = axios.create(config) 或 axios.create() 对其修改默认配置 instance.defaults.timeout = 2500 或在请求时用参数的形式覆盖默认配置
  - 对 node 与浏览器分别做了适配、支持
  - 拦截请求和响应，myInterceptor = axios.interceptors.request.use()、axios.interceptors.response.use(then, catch); 移除：axios.interceptors.eject(myInterceptor) 或对实例添加拦截器：instance.interceptors.request.use()
  - 取消请求
  - 转换请求和响应数据，自动转换 JSON 数据
  - 客户端支持XSRF
- **Fetch API**提供了一个 javascript 接口，用于访问 HTTP 管道部分，还提供了全局的 fetch()方法，返回一个 Promise 对象。是底层次的 API很容易被其他技术使用。已简单合理的方式来支持跨域。
  - fetch不支持同步请求
  - 只对网络请求报错，对 400、500都当做成功的请求，需要封装去处理。
  - 默认不会带 cookie, 不支持 abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
  - 没有办法原生检测请求的进度
  - Response 限制了响应内容的重复读取和转换，因为数据流只能读取一次

```javascript
// 请求参数
{
    body?: any;
    cache?: RequestCache;
    credentials?: RequestCredentials; // 设置了才会带 cookie
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    window?: any;
}
window.fetch(url)
    .then(response => {
        // 通过 response.ok 判断 fetch 请求是否成功
        // 请求结果是 response.body 是一个 ReadableStream
        if (response.ok) {
        //通过 response 原型上的 json 方法将 response.body 转换为 JS 对象，再返回出去
            return response.json();
        }
    }
).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})
```

## 请求并发控制----维护一个队列

实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出


# HTTP 简介
请求的资源有统一资源标识符来标识。
- 请求头(请求行、实体头)
    - Accept 通知服务器，用户代理可处理的媒体类型及媒体类型的相对优先级
    - Accept-Encoding 通知服务器可接受的编码(如：gzip, compress, deflate, identity不进行编码)；Accept-Language 语言；Accept-Charset 优先字符集；
    - Authorization 告诉服务器用户代理的认证信息, Proxy-Authorization 代理服务器认证所需要的信息
    - Expact 期待服务器的特定行为
    - If-Match 匹配实体资源标记值(ETag), If-None-Match, If-Range, If-Modified-Since, If-Unmodified-Since服务器判断符合条件才会执行请求
    - Cookie
    - Range 部分资源的范围请求
    - Max-Forward 最大转发次数
    - 其他：Host, User-Agent, Referer通过哪个页面到当前页面的， TE客户端能够处理响应的传输编码
- 请求体(头部结束标志)
- 响应头(响应行、实体头)
    - Last-MOdified 资源最后修改日期
    - Expires 实体主体过期的日期时间
    - Accept-Range 接受字节范围
    - ETag 资源的匹配信息，强ETag, 弱ETag 只有发生了根本改变，才改变ETag值
    - Location 令客户端重定向到指定URI
    - Proxy-AUthenticate 代理服务器对客户端的认证信息
    - WWW-AUthenticate 服务器对客户端的认证信息
    - Server HTTP服务器的安装信息
    - Vary 代理服务器的缓存管理信息
    - Content-Type 实体主体的媒体类型(text/html, 不同数据：对象集合MIME multipart/form-data表单, ~/byteranges部分内容)
    - Content-Length，Content-Range, Content-Location 替代对应资源的URI, Content-Encoding, Content-Language
    - Retry-After
    - Set-Cookie: expires, path, domain, secure(Https时才发送cookie), HttpOnly(使javascript无法获取cookie)
- 能用首部字段
    - Cache-Control 缓存请求指令
        1. no-cache 强制向服务器再次验证
        2. no-store 不缓存请求和响应的任何内容
        3. no-transform 代理不可更改媒体类型
        4. only-if-cached 从缓存获取资源
        5. cache-extension 新指令标记(token)
        6. max-age 响应的最大Age值
        7. max-stale 接收已过期的响应
        8. min-fresh 在指定时间内的响应仍有效
    - Cache-Control 缓存响应指令
        1. no-cache 缓存前必须确认其有效性
        2. no-store 不缓存请求和响应的任何内容
        3. no-transform 代理不可更改媒体类型
        4. only-if-cached 从缓存获取资源
        5. cache-extension 新指令标记(token)
        6. s-maxage 公共缓存服务器响应的最大Age值
        7. must-revalidate 可缓存，但必须向资源服务器确认
        8. proxy-revalidate 要求中间缓存服务器对缓存的响应有效性进行确认
        8. min-fresh 在指定时间内的响应仍有效
        9. public 可向任意方提供响应的缓存
        10. private 向特定用户返回响应
    - Connection 连接状态(keep-alive，close) 管理持久链接，不再转发给代理服务器的首部字段。
    - Date HTTP创建报文的日期和时间
    - Via 代理服务器相关信息
    - Transfer-Encoding 传送报文实体时采用的编码
    - Upgrade 是否可使用更高版本进行通信
    - Warning
- 响应体(头部结束标志)
- TCP 传输层
    1. 对数据进行分割，打上标记序号及端口号，发送给网络层；
    2. (IP)网络层增加MAC地址后转发给链路层
    3. 三次握手策略：数据发送出去后，会向对应确认是否已送达，过程中使用的TCP的flag---SYN和ACK
        - 发送端发送一个带SYN标志(建立联机)的数据包给对方
        - 接收端收到后回传一个SYN/ACK标志(确认：原SYN+1)的数据包以示传达确认信息
        - 最后发送端再回传一个带ACK+1标志的数据包；以示结束。
    4. 四次挥手
        - 客户端发送一个FIN标记(结束)的数据包到服务端
        - 服务端收到后再返回一个ACK标志的数据包回来
        - 服务器端关闭与客户端的连接，再发送一个FIN给到客户端
        - 客户端再发回ACK的数据包确认

- UDP与TCP基本区别
    1. TCP要求系统资源较多，面UDP较少
    2. TCP采用流模式，UDP采用数据报模式
    3. TCP保证数据的正确性，UDP可能丢包
    4. TCP保证数据顺序，UDP不保证
    5. 使用时socket()参数不同
- 过程
    1. 应用层(HTTP数据)【发送端】
    2. 传输层(TCP首部 + HTTP数据)
    3. 网络层(IP首部 + TCP首部 + HTTP数据)
    4. 链路层(以太网首部 + IP首部 + TCP首部 + HTTP数据)
    5. 接受端再一层层把对应的首部消去
- DNS
    - 客户端向DNS进行域名查询请求，DNS服务器告知客户端Web服务器的IP地址，客户端与服务器进行通信
    - 如果域名正好被服务器缓存，那么直接返回，否则要根据是几级域名，进行查找。

- GET 与 POST
    1. GET请求的数据会附在URL之后，而POST提交的数据 是在HTTP包的包体中
    2. 传输数据大小不同
    3. 安全性不同，通过GET提交的数据，会明文出现在URL上
    4. GET请求是幂等性的，所以不能用GET请求做数据的增删改有副作用的操作；因为是幂等的，在网络不好的隧道中会尝试重试，用GET请求可能会造成重复操作。

- 状态：
    1. 已被接收，继续处理
    2. 请求成功(204 不包含实体的主体部分，206 响应部分报文----Range)
    3. 重定向(301永久重定向，302临时重定向)
    4. 客户端发生的错误(400 报文中存在语法错误，401 未授权， 403收到请求但拒绝服务，404资源不存在)
    5. 服务端错误(503 服务器当前不能处理该请求，一段时间后可能恢复)

- ARP 解析地址的协议，可以通过IP地址反查出对应的MAC地址
- CONNECT 使用隧道协议进行TCP通信，主要使用SSL(安全套接层)和TLS(传输层安全)协议把通信内容加密后以过网络隧道传输
- 持久链接：keep-alive, 管线化
- HTTP是无状态协议：通过Cookie
- HTTP的缺点
    1. 通信使用明文，可能会被窃听
    2. 不验证通信方的身份，可能遭遇伪装----查证书
    3. 无法证明报文的完整性，可能被篡改----数字签名校验

- 可通过SSL或TLS的组合使用，加密HTTP的通信内容，即HTTPS
- 一般用Cookie来管理Session
- HTTP 2.0
    1. 多路复用，赋予请求优先级，压缩HTTP首部----SPDY(以会话层的形式加入，控制对数据的流动，通信使用SSL)
    2. TLS义务化
    3. 协商
    4. 客户端拉拽/服务器端推送
    5. 流量控制
    6. Websocket 全双工通信

