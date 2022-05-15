(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{265:function(s,e,i){"use strict";i.r(e);var o=i(6),n=Object(o.a)({},(function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[i("ul",[i("li",[s._v("Cookie, redis, JWT 解决 HTTP 的无状态\n"),i("ul",[i("li",[s._v("Session Cookie会话期---不含到期日期，存于内存")]),s._v(" "),i("li",[s._v("Persistent Cookie持久性----含到期日期，存于磁盘")]),s._v(" "),i("li",[s._v("用于---会话状态管理、自定义设置、浏览器行为跟踪")])])]),s._v(" "),i("li",[s._v("session：代表着服务器和客户端一次会话的过程\n"),i("ul",[i("li",[s._v("Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。")])])]),s._v(" "),i("li",[s._v("JWT是开放的 JSON 格式 token 存储标准，它定义了一种安全、紧凑的方式来保存数据，通过签名的方式来校验 token 的合法性，主要支持的签名算法如 HMAC、RSA、ECDSA\n"),i("ul",[i("li",[s._v("通常使用它来保存登录信息，相比传统的 session 方案，它的优点在于服务端无需维护登录态，不再需要依赖第三方存储（如 redis、memcached），所以说 JWT 是无状态的。")]),s._v(" "),i("li",[s._v("但它也存在缺点。由于它只在客户端维护，因此服务端无法方便的清除登录态，相比传统的 session 方案，只需要将 session 清除即可。你可能会说，可以直接将这个 token 删除就算退出登录了。但实际上这只是一种假注销，若该用户再次拿到相同的 token 还是会被认为是登录的。")]),s._v(" "),i("li",[s._v("2.1.2 数据结构---实际上JWT是由header（头部）、payload（负载）、signature（签名）这三个部分组成的，中间用.来分隔开，写成一行就是这个样子的：Header.Payload.Signature。")])])])]),s._v(" "),i("p",[s._v("常见误区：Session 不是关闭浏览器就消失了。对 Session 来说，除非程序通知服务器删除一个 Session，否则服务器会在Session失效前一直保留。大多数情况下浏览器是不会在关闭网页之前通知服务器的，所以服务器根本不知道浏览器已经关闭。之所以会有这种错觉，是大部分 session 机制都使用会话 cookie 来保存 session id，而关闭浏览器后这个 session id 就消失了，再次连接服务器时也就无法找到原来的 session。如果服务器设置的 cookie 被保存在硬盘上，或者使用某种手段改写浏览器发出的 HTTP 请求头，把原来的 session id 发送给服务器，则再次打开浏览器仍然能够打开原来的 session。")])])}),[],!1,null,null,null);e.default=n.exports}}]);