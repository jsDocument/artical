## 常见状态码

1. 1XX   正在处理
2. 2XX   正常处理完毕, 如200成功，204无资源可返回，206返回部分资源
3. 3XX   重定向, 301永久重定向，302临时重定向，303指定用GET的临时重定向，304未满足条件时返回该状态(不包含响应的主体部分)，307临时重定向
4. 4XX   客户端错误，400请求报文发生错误，401 HTTP认证用户，403服务器拒绝，404服务器上没有请求的资源
5. 5XX   服务器错误，500服务器异常，503服务器超负载或正在停机维护

## 通信数据转发

1. 代理：缓存代理，会修改报文的代理
2. 网关：可以提高非HTTP协议服务
3. 隧道：会用SSL等加密方式进行通信

## 缓存是指代理服务器或本地保存了一份资源副本

1. 代理服务器在转发从服务器返回的资源时，会保存一份资源副本
2. 客户端缓存：临时网络文件，缓存有效则直接从本地文件读取

## 哪些配置决定了返回的状态？不同的配置是怎么去设置的？

## HTTP首部

1. 通用首部
  1. 缓存控制：cache-control
  2. 连接管理：connection   ***
  3. 日期： Date
  4. 报文：pragma, Trailer   ***, Tansfer-Encoding   ***
  5. 升级：upgrade   ***
  6. 代理服务器信息：Via
  7. Warning
2. 请求首部
  1. 处理的媒体类型：Accept, 字符集Accept-charset, 编码Accept-Encoding，语言Accept-Language
  2. Web认证信息：Authorization, Proxy-Authorization   ***
  3. 比较实体标记：if-Match, if-None-Match--响应实体：Etag 资源的匹配信息
  4. 资源的更新时间：if-Modified-Since，if-Unmodified-Since
  5. 实体的字节范围：Range, if-Range--响应实体：Accept-Range
  5. 其他：Expect, From, Host, Max-Forwards, Referer, TE   ***, User-Agent
3. 响应首部
  1. 资源创建经过时间：Age
  2. 使客户端重新定向到指定URI：Location
  3. 认证信息：Proxy-Authenticate    ***  WWW-
  4. 再次发送请求的时机要求：Retry-After
  5. 代理服务器的缓存管理信息：Vary
  6. HTTP服务器的安装信息：Server
  Keep-Alive   ***
4. 实体首部
  1. 支持的方法：Allow
  2. 资源最后修改日期：Last-Modified
  3. 实体的过期时间：Expires
  4. 实体：编码Content-Encoding, 语言Content-Language, 大小Content-Length, 类型Content-Type, 报文摘要Content-MD5, 位置范围Content-Range, 替代对应资源的URI Content-Location


