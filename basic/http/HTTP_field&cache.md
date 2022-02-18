## HTTP 请求过程

+ 这个请求指的是 http 请求，当一个请求从客户端发出去之后，服务器端收到请求后，一个请求过程就结束了，这时就算是客户端abort这个请求，服务器端仍会做出完整的响应，只是这个响应客户端不会接收。所以实质上，后端还是处理了请求，但是前端不对该方法进行处理。
+ cacheables：优雅、支持不同缓存策略、没有依赖、体积小、适用xx、辅助函数来构建缓存 key
  + cache.cacheable(() => fetch("https://some-url.com/api"), "key");
  + delete, clear
  + keys
  + isCached
  + cacheables.key

```javascript
// 实例
const cache = new Cacheables({
  logTiming: true,
  log: true,
});
```


+ HTTP 缓存分类：
  + 按缓存位置：service worker, memory cache, disk cache(HTTP cache), 网络请求
    + memory cache: 关闭 Tab 则缓存清除, preloader请求的资源会被放入 memory cache 中; preload 显式的预加载资源也会被放入 memory cache 中
    + memory cache 可以保证相同的资源地址多次请求，只请求最多一次
    + disk cache: 持久缓存，会严格根据 HTTP 头信息中的各类字段判定资源状态，是否是可用缓存，是否过时，命中从磁盘缓存读取资源
  + 按失效策略：属于 disk cache；cache-control, ETag
+ cache-control: max-age, public, private代理服务器不能缓存, no-cache 客户端缓存了内容，是否使用内容由后续的对比决定, no-store
+ max-age:0, must-revalidate 和 no-cache 大致上是一致的
+ 强制缓存：直接减少请求数，提升最大的缓存策略；字段 Cache-control和 Expirs-----配合文件 Hash 使用
  + Expirs, HTTP1.0字段，缓存到期时间(绝对时间)，用户在客户端本地的时间进行修改，会造成浏览器缓存失效，时差和误差也会导致缓存失效；写法也复杂
  + Cache-control，max-age 最大缓存时间(相对时间)，must-revalidate 超过时间，浏览器必须向服务器发送请求，验证资源是否还有效
+ 协商缓存：
  + 流程：浏览器请求缓存数据库，返回一个`缓存标识`；之后浏览器用这个标识和服务器通信，如果缓存未失效，返回 304表示继续使用，客户端继续使用缓存（使用什么缓存？），如果失效，则返回新数据和规则，浏览器响应后再把规则写入缓存数据库。
  + 强制缓存失效(超出规定时间)时，需要使用对比缓存，由服务器决定是否使用缓存内容，协商缓存和没有缓存在请求数上是一样的，但仅返回状态码304，在响应体积上优化了
  + last-modifed: 服务器通过改自动告知客户端，资源最后一次被修改的时间，浏览器将这个值和内容一起记录在缓存数据库中，下次请求相同资源时，将 If-Modified-Since: last-modified的值写入到请求头，和服务器中文件的最后修改时间进行对比。(只能精确到秒，不适合短时间内频繁改动的资源，也可能出现资源内容没有改变，而 Last-Modified 改变的情况)
  + If-Modified-Since 缓存校验字段，值为资源最后一次修改的时间
  + ETag：唯一标识请求资源的字符串(hash)，更加 ETag 的值缓存数据
  + If-Match：缓存校验字段，值为唯一标识请求资源的字符串，即 ETag 的值；If-None-Match
+ ETag 生成条件
  + 文件更改时，ETag 值必须改版
  + 必须横向扩展，分布式部署时多个服务器节点上生成的 ETag 值保持一致
  + 尽量便于计算，不会特别耗 CPU
  + Nginx 的 ETag: Last-Modified + Content-Length<mtime, ctime>
    1. 如果1s 内修改了文件并且保持文件大小不变，就存在问题
    2. 如果 http 响应头中 ETag 值改变了，是否意味着文件内容一定已经更改？不一定，有服务器 ETag生成算法决定
    3. Last-Modified 变了，但是 Content-Length 没变（文件内容不变），是否意味着 etag 的缓存失效？

1. webpack-runtime
2. react-chunk
3. vender
4. echarts
5. page
6. 用的的配置：
   1. splitChunk
   2. runtimeChunk

总结：

---------------------------

1. 调用 Service Worker 的 fetch 事件响应
2. 查看 memory cache
3. 查看 disk cache。这里又细分：
    1. 如果有强制缓存且未失效，则使用强制缓存，不请求服务器。这时的状态码全部是 200
    2. 如果有强制缓存但已失效，使用对比缓存，比较后确定 304 还是 200
4. 发送网络请求，等待网络响应
5. 把响应内容存入 disk cache (如果 HTTP 头信息配置可以存的话)
6. 把响应内容 的引用 存入 memory cache (无视 HTTP 头信息的配置)
7. 把响应内容存入 Service Worker 的 Cache Storage (如果 Service Worker 的脚本调用了 cache.put())


+ 请求字段
  + Host 是必须的吗？必须，因为不知道会不会途径代理
  + Accept-Encoding 通知服务器可接受的编码(如：`gzip`, compress, deflate, identity不进行编码)；
  + Transfer-Encoding 传送报文实体时采用的编码
  + Accept-Language 语言；Accept-Charset 优先字符集；
  + Authorization 告诉服务器用户代理的认证信息, Proxy-Authorization 代理服务器认证所需要的信息
  + Range 部分资源的范围请求
  + Accept-Range: bytes 接受字节范围
  + Connection: keep-Alive
  + Max-Forward 最大转发次数
  + `X-Forward-For` 被反向代理生成
  + Last-Modified 资源最后修改日期
  + Expires 实体主体过期的日期时间
  + ETag 资源的匹配信息
  + If-Match 匹配实体资源标记值(ETag)
  + Pragma: no-cache
  + Location 令客户端重定向到指定URI
  + `Vary`: Accept-Encoding 缓存管理信息
  + Content-Type: application/octet-stream 二进制流
  + Content-Length，Content-Range,
  + Content-Encoding: `gzip` 确保开启了
  + Content-Language
  + `Connection` 连接状态(keep-alive，close) 管理持久链接，不再转发给代理服务器的首部字段。
  + Date HTTP创建报文的日期和时间
  + Via 代理服务器相关信息
  + X-Powered-By 与 Server 可知道对方的技术栈
  + `referer` 用于打点 或 防盗链



+ UDP与TCP基本区别
  1. TCP要求系统资源较多，面UDP较少
  2. TCP采用`流模式`，UDP采用`数据报模式`
  3. TCP保证数据的正确性，UDP可能丢包
  4. TCP保证数据顺序，UDP不保证
  5. 使用时socket()参数不同
+ 过程
  1. 应用层(HTTP数据)【发送端】
  2. 传输层(TCP首部 + HTTP数据)
  3. 网络层(IP首部 + TCP首部 + HTTP数据)
  4. 链路层(以太网首部 + IP首部 + TCP首部 + HTTP数据)
  5. 接受端再一层层把对应的首部消去
+ DNS
  + 客户端向DNS进行域名查询请求，DNS服务器告知客户端Web服务器的IP地址，客户端与服务器进行通信
  + 如果域名正好被服务器缓存，那么直接返回，否则要根据是几级域名，进行查找。

+ GET 与 POST
  1. 浏览器返回，是否会再次请求？是否会被浏览器主动 cache? 是否只支持 url 编码？请求参数是否会被完整的保存在浏览器历史记录里？请求参数长度限制？参数类型只支持 ASCII？
  2. 产生几个数据包？
  3. GET请求的数据会附在URL之后，而POST提交的数据 是在HTTP包的包体中
  4. 传输数据大小不同
  5. 安全性不同，通过GET提交的数据，会明文出现在URL上
  6. GET请求是幂等性的，所以不能用GET请求做数据的增删改有副作用的操作；因为是幂等的，在网络不好的隧道中会尝试重试，用GET请求可能会造成重复操作。

+ ARP 解析地址的协议，可以通过IP地址反查出对应的MAC地址
+ CONNECT 使用隧道协议进行TCP通信，主要使用SSL(安全套接层)和TLS(传输层安全)协议把通信内容加密后以过网络隧道传输
+ 持久链接：keep-alive, 管线化



GET 在浏览器回退时是无害的，而 POST 会再次提交请求。

GET 产生的 URL 地址可以被 Bookmark，而 POST 不可以。

GET 请求会被浏览器主动 cache，而 POST 不会，除非手动设置。

GET 请求只能进行 url 编码，而 POST 支持多种编码方式。

GET 请求参数会被完整保留在浏览器历史记录里，而 POST 中的参数不会被保留。

GET 请求在 URL 中传送的参数是有长度限制的，而 POST 么有。

对参数的数据类型，GET 只接受 ASCII 字符，而 POST 没有限制。

GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息。

GET 参数通过 URL 传递，POST 放在 Request body 中。

GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包。

