(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{269:function(t,e,v){"use strict";v.r(e);var _=v(0),l=Object(_.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"http-篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-篇"}},[t._v("#")]),t._v(" http 篇")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("get和post的区别")]),t._v(" "),v("ul",[v("li",[t._v("get请求参数是放在url中")]),t._v(" "),v("li",[t._v("get请求可以被保存在书签和浏览器历史中, 但post不能")]),t._v(" "),v("li",[t._v("get请求可以被浏览器缓存, post不能")]),t._v(" "),v("li",[t._v("get请求受到URL长度限制, 所以数据长度也受限制, post不会")]),t._v(" "),v("li",[t._v("get请求只能传输ASCII, 面post不受限制, 还可以传输二进制数据")]),t._v(" "),v("li",[t._v("get代表获取指定获取服务器上的资源, post代表向指定的资源提交要处理的数据")]),t._v(" "),v("li",[t._v("get产生一个TCP数据包, 把header与data一起发过去, 等待服务器响应")]),t._v(" "),v("li",[t._v("post时, 浏览器先发送header, 服务器响应100 continue, 浏览器再发送data, 等待服务器响应(非FF), 网络环境差的时候, 两次包的TCP在验证数据完整性上有非常大的优势")])])]),t._v(" "),v("li",[v("p",[t._v("websocket 客户端与服务端的全双工通信, 用途")]),t._v(" "),v("ul",[v("li",[t._v("http是客户端发起, websocket为全双工方式")]),t._v(" "),v("li",[t._v("websocket相对于http数据包更小, 没有同源限制, 可以跨域共享资源")]),t._v(" "),v("li",[t._v("用于离线缓存")])])]),t._v(" "),v("li",[v("p",[t._v("jQ的ajax返回值")]),t._v(" "),v("ul",[v("li",[t._v("一个延迟对象$.Deferred")])])]),t._v(" "),v("li",[v("p",[t._v("HTTP状态码及304缓存的执行过程")])]),t._v(" "),v("li",[v("p",[t._v("jsonp原理, 跨域的请求资源解决方法有哪些, 优缺点")])]),t._v(" "),v("li",[v("p",[t._v("XML与JSON的区别")]),t._v(" "),v("ul",[v("li",[t._v("XML多余数据比较多, 数据量大, 传输更占用空间, 解析比较烦琐")]),t._v(" "),v("li",[t._v("json数据量小, 利用网络传输, 客户端与服务端都有基础的解析方法")])])]),t._v(" "),v("li",[v("p",[t._v("如何避免浏览器缓存get请求, 以达到每次get请求都获取最新数据")]),t._v(" "),v("ul",[v("li",[t._v("给请求添加时间戳")])])]),t._v(" "),v("li",[v("p",[t._v("头Accept, Accept-Language, Content-Language, Last-Event-ID, Content-Type; 简单与非简单请求")])]),t._v(" "),v("li",[v("p",[t._v("后端设置Access-Control-Allow-Methods跨域请求的方法, ..-Headers服务器支持的所有头信息字段, ..-Credentials, 前端withCredentials: true")])]),t._v(" "),v("li",[v("p",[t._v("跨域共享资源jsonp")]),t._v(" "),v("ul",[v("li",[t._v("利用script的url跨域特性, 发一个特殊的请求, 将函数名发送给后端, 后端返回相应的函数体")]),t._v(" "),v("li",[t._v("jsonp【只能发送get请求, 无法更好的错误处理, 处理恶意攻击】， 反向代理, 图像ping【容易被缓存, 无法接到服务端的回复】, websocket【全双工】, CORS【需要后端配合】")])])])])])}],!1,null,null,null);e.default=l.exports}}]);