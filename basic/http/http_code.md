# HTTP Code

## 常见状态码

+ 1XX 表示消息
+ 2XX 表示成功
  + 200 请求成功
  + 201 资源创建成功，多用于 POST 请求
  + 204 No Content，一般由于：与 Options/Delete 请求搭配 或 打点类
  + 206 Partial Content----Content-Range
+ 3XX 表示重定向
  + 301 永久重定向：如果设置了 301，但是一段时间后又想取消，但是浏览器中已经有了缓存，还是会重定向
  + 302 临时重定向：会在重定向的时候改变 method: 把 POST 改成 GET
  + 304 自上次请求，未修改的文件，走缓存，ETag/If-None-Match 或 last-modified/if-modified-since 精确到秒
  + 307 Temporary Redirect：临时重定向，在重定向时不会改变 method----HSTS严格传输安全，只能使用安全链接的访问方法
  + 如果一个网站声明了 HSTS 策略，浏览器必须拒绝所有的 HTTP 连接并阻止用户接受不安全的 SSL 证书
+ 4XX 表示客户端错误
  + 400 错误的请求
  + 401 未授权，需要身份认证；没有权限的用户请求需要带有权限的资源
  + 403 请求被拒绝
  + 404 资源未找到
  + 405 Method Not Allowed
  + 413 Body 过大
  + 429 请求过多
+ 5XX 表示服务端错误
  + 500 服务器未知错误
  + 502 应用层错误：收到了上游响应但无法解析
  + 503 服务暂时无法使用
  + 504 网关超时：上游响应超时

## 反向代理：用户要访问一个集群，但不知道访问哪一个，需要反向代理，分配一个服务

## 响应头---缓存

+ Expire 使用绝对时间 且 格式固定
+ Cache-Control 常用 no-cache, max-age

## Gzip 的原理，核心是Deflate，用了 LZ77 算法与 Huffman 编码来压缩文件

+ gzip 用于 HTTP 文件传输中，比如 JS、CSS
+ Content-Encoding 指明使用 gzip 压缩


## 跨域-----浏览器的同源策略

+ jsonp---只支持 get
+ CROS
  + Access-Control-Allow-Origin: 指定特定域名，跨域请求头就要带 Orign，否则没有；由于 CDN 缓存响应头Access-Control-Allow-Origin: xxx 已被缓存，另一个域请求就回出问题；此时需要 Vary:Origin 缓存不同的资源
  + Access-Control-Allow-Methods
  + Access-Control-Allow-Headers
  + Access-Control-Allow-Credentials
  + Access-Control-Expose-Headers
  + Access-Control-Max-Age
  + withCredentials
+ Options 请求：不是简单请求，就回发送 OPTIONS 请求，项目中常见的 `Content-Type: application/json` 及 Authorization: <token> 为典型的非简单请求，在发送请求时往往会带上 Options

