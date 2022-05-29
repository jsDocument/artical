(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{248:function(v,_,e){"use strict";e.r(_);var i=e(0),t=Object(i.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"http-code常用状态码-与-header-字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-code常用状态码-与-header-字段"}},[v._v("#")]),v._v(" HTTP Code常用状态码 与 Header 字段")]),v._v(" "),e("ul",[e("li",[v._v("1XX 表示消息")]),v._v(" "),e("li",[v._v("2XX 表示成功\n"),e("ul",[e("li",[v._v("200 请求成功")]),v._v(" "),e("li",[v._v("201 资源创建成功，多用于 POST 请求")]),v._v(" "),e("li",[v._v("204 No Content，一般由于：与 Options/Delete 请求搭配 或 打点类")]),v._v(" "),e("li",[v._v("206 Partial Content----Content-Range")])])]),v._v(" "),e("li",[v._v("3XX 表示重定向\n"),e("ul",[e("li",[v._v("301 永久重定向：如果设置了 301，但是一段时间后又想取消，但是浏览器中已经有了缓存，还是会重定向")]),v._v(" "),e("li",[v._v("302 临时重定向：会在重定向的时候改变 method: 把 POST 改成 GET")]),v._v(" "),e("li",[v._v("304 自上次请求，未修改的文件，走缓存，ETag/If-None-Match 或 last-modified/if-modified-since 精确到秒")]),v._v(" "),e("li",[v._v("307 Temporary Redirect：临时重定向，在重定向时不会改变 method----HSTS严格传输安全，只能使用安全链接的访问方法")]),v._v(" "),e("li",[v._v("如果一个网站声明了 HSTS 策略，浏览器必须拒绝所有的 HTTP 连接并阻止用户接受不安全的 SSL 证书")])])]),v._v(" "),e("li",[v._v("4XX 表示客户端错误\n"),e("ul",[e("li",[v._v("400 错误的请求")]),v._v(" "),e("li",[v._v("401 未授权，需要身份认证；没有权限的用户请求需要带有权限的资源")]),v._v(" "),e("li",[v._v("403 请求被拒绝")]),v._v(" "),e("li",[v._v("404 资源未找到")]),v._v(" "),e("li",[v._v("405 Method Not Allowed")]),v._v(" "),e("li",[v._v("413 Body 过大")]),v._v(" "),e("li",[v._v("429 请求过多")])])]),v._v(" "),e("li",[v._v("5XX 表示服务端错误\n"),e("ul",[e("li",[v._v("500 服务器未知错误")]),v._v(" "),e("li",[v._v("502 应用层错误：收到了上游响应但无法解析")]),v._v(" "),e("li",[v._v("503 服务暂时无法使用")]),v._v(" "),e("li",[v._v("504 网关超时：上游响应超时")])])])]),v._v(" "),e("h4",{attrs:{id:"代理与反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理与反向代理"}},[v._v("#")]),v._v(" 代理与反向代理")]),v._v(" "),e("ol",[e("li",[v._v("正向：间接访问服务器，"),e("code",[v._v("隐匿了客户端信息")]),v._v("；如访问google, 做缓存？对客户端访问授权，记录用户访问记录")]),v._v(" "),e("li",[v._v("反向：代理的是服务端，集群分布式部署的情况下，反向代理隐藏了服务器信息；如 内网安全，负载均衡\n"),e("ol",[e("li",[v._v("如：用户要访问一个集群，但不知道访问哪一个，需要反向代理，分配一个服务")])])])]),v._v(" "),e("h4",{attrs:{id:"响应头-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应头-缓存"}},[v._v("#")]),v._v(" 响应头---缓存")]),v._v(" "),e("ul",[e("li",[v._v("Expire 使用绝对时间 且 格式固定")]),v._v(" "),e("li",[v._v("Cache-Control 常用 no-cache, max-age")])]),v._v(" "),e("h4",{attrs:{id:"gzip-的原理，核心是deflate，用了-lz77-算法与-huffman-编码来压缩文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip-的原理，核心是deflate，用了-lz77-算法与-huffman-编码来压缩文件"}},[v._v("#")]),v._v(" Gzip 的原理，核心是Deflate，用了 LZ77 算法与 Huffman 编码来压缩文件")]),v._v(" "),e("ul",[e("li",[v._v("gzip 用于 HTTP 文件传输中，比如 JS、CSS")]),v._v(" "),e("li",[v._v("Content-Encoding 指明使用 gzip 压缩")])]),v._v(" "),e("h4",{attrs:{id:"常见请求字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见请求字段"}},[v._v("#")]),v._v(" 常见请求字段")]),v._v(" "),e("ul",[e("li",[v._v("Host 是必须的吗？必须，因为不知道会不会途径代理")]),v._v(" "),e("li",[v._v("Accept-Encoding 通知服务器可接受的编码(如："),e("code",[v._v("gzip")]),v._v(", compress, deflate, identity不进行编码)；")]),v._v(" "),e("li",[v._v("Transfer-Encoding 传送报文实体时采用的编码")]),v._v(" "),e("li",[v._v("Accept-Language 语言；Accept-Charset 优先字符集；")]),v._v(" "),e("li",[v._v("Authorization 告诉服务器用户代理的认证信息, Proxy-Authorization 代理服务器认证所需要的信息")]),v._v(" "),e("li",[v._v("Range 部分资源的范围请求")]),v._v(" "),e("li",[v._v("Accept-Range: bytes 接受字节范围")]),v._v(" "),e("li",[v._v("Connection: keep-Alive")]),v._v(" "),e("li",[v._v("Max-Forward 最大转发次数")]),v._v(" "),e("li",[e("code",[v._v("X-Forward-For")]),v._v(" 被反向代理生成")]),v._v(" "),e("li",[v._v("Last-Modified 资源最后修改日期")]),v._v(" "),e("li",[v._v("Expires 实体主体过期的日期时间")]),v._v(" "),e("li",[v._v("ETag 资源的匹配信息")]),v._v(" "),e("li",[v._v("If-Match 匹配实体资源标记值(ETag)")]),v._v(" "),e("li",[v._v("Pragma: no-cache")]),v._v(" "),e("li",[v._v("Location 令客户端重定向到指定URI")]),v._v(" "),e("li",[e("code",[v._v("Vary")]),v._v(": Accept-Encoding 缓存管理信息")]),v._v(" "),e("li",[v._v("Content-Type: application/octet-stream 二进制流\n"),e("ul",[e("li",[v._v("application/x-www-form-urlencoded，data应该是 URL/URI 编码的")]),v._v(" "),e("li",[v._v("application/json，data应该是 JSON 格式")]),v._v(" "),e("li",[v._v("text/plain")])])]),v._v(" "),e("li",[v._v("Content-Length，Content-Range,")]),v._v(" "),e("li",[v._v("Content-Encoding: "),e("code",[v._v("gzip")]),v._v(" 确保开启了")]),v._v(" "),e("li",[v._v("Content-Language")]),v._v(" "),e("li",[e("code",[v._v("Connection")]),v._v(" 连接状态(keep-alive，close) 管理持久链接，不再转发给代理服务器的首部字段。")]),v._v(" "),e("li",[v._v("Date HTTP创建报文的日期和时间")]),v._v(" "),e("li",[v._v("Via 代理服务器相关信息")]),v._v(" "),e("li",[v._v("X-Powered-By 与 Server 可知道对方的技术栈")]),v._v(" "),e("li",[e("code",[v._v("referer")]),v._v(" 用于打点 或 防盗链")]),v._v(" "),e("li",[v._v("response-type\n"),e("ul",[e("li",[v._v("stream")]),v._v(" "),e("li",[v._v("blob")]),v._v(" "),e("li",[v._v("document")]),v._v(" "),e("li",[v._v("arraybuffer 或 buffer")]),v._v(" "),e("li",[v._v("json")]),v._v(" "),e("li",[v._v("text")])])])])])}],!1,null,null,null);_.default=t.exports}}]);