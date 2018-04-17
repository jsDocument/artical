## HTTP
### 方法
- http.Server  基于事件的HTTP服务器
- http.createServer((req, res)=>{})  在http.Server对象上添加了一个request事件监听
  - 事件 request、connection、close、error、connect
  - 方法 close()、listen()
  - res方法 writeHead(200, {})、write()、end()、setEncoding()、resume()
  - res属性 statusCode、headers
- http.request(options, (req, res)=>{})  HTTP客户端工具，向服务器发送数据，客户端向服务器发起请求
- http.get(options/url, (req, res)=>{})  客户端向服务器发起请求
- http.Agent
- http.ClientRequest   由http.request或者是http.get返回产生的对象，已经产生而且正在进行的HTTP请求
- http.ServerResponse   返回给客户端的信息，一般为http.Server的request事件发送
- http.IncomingMessage  HTTP请求的信息，一般为http.Server的request事件发送
- http.globalAgent
- http.METHODS
- http.STATUS_CODES
[^ http使用了agent代理，如果http启动了keep-alive，那么这个代理相当于一个连接池，代理维护一定数量的socket链接，http发起所请求所用的socket都是通过代理获取的，省去了每次发起http请求创建套接字的时间]

### 相关事件
- connection 建TCP连接时触发，提供socket参数，为net.socket的实例
- close 服务关闭时触发
- checkContinue、upgrade、clientError

## HTTPS
- https.Agent
- https.Server
- https.createServer((req, res)=>{})
- https.get(options/url, (res)=>{})
- https.globalAgent
- https.request(options, (res)=>{})