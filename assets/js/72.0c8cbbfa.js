(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{263:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"ajax-fetch-axios-「关注分离」"}},[t._v("ajax, fetch, axios 「关注分离」")]),t._v(" "),a("ul",[a("li",[t._v("ActiveXObject('Microsoft.XMLHTTP')")]),t._v(" "),a("li",[t._v("XMLHTTPRequest\n"),a("ul",[a("li",[t._v("open（method, url, boolean）启动一个请求")]),t._v(" "),a("li",[t._v("send(null/data)")]),t._v(" "),a("li",[t._v("xhr对象的事件 onreqdystatechange, progress, abort, error, load, timeout\n"),a("ul",[a("li",[t._v("xhr对象的属性readyState 0 未打开, 1已打开, 2已发送, 3正接收, 4完成")]),t._v(" "),a("li",[t._v("xhr状态 200")]),t._v(" "),a("li",[t._v("responseText, responseXML")]),t._v(" "),a("li",[t._v("statusText")]),t._v(" "),a("li",[t._v("取消请求 abort()")])])])])]),t._v(" "),a("li",[t._v("ajax 基于 XML 开发的，增加了对 JSONP 的支持\n"),a("ul",[a("li",[t._v("post 默认的 contentType 格式为 'application/x-www-form-urlencoded;charset=UTF-8'")])])]),t._v(" "),a("li",[t._v("Axios 也是基于 XML 开发，不过是结合 promise 实现的，符合最新的 ES 规范\n"),a("ul",[a("li",[t._v("执行多个并发请求 axios.all(request1, request2)")]),t._v(" "),a("li",[t._v("instance = axios.create(config) 或 axios.create() 对其修改默认配置 instance.defaults.timeout = 2500 或在请求时用参数的形式覆盖默认配置")]),t._v(" "),a("li",[t._v("对 node 与浏览器分别做了适配、支持")]),t._v(" "),a("li",[t._v("拦截请求和响应，myInterceptor = axios.interceptors.request.use()、axios.interceptors.response.use(then, catch); 移除：axios.interceptors.eject(myInterceptor) 或对实例添加拦截器：instance.interceptors.request.use()")]),t._v(" "),a("li",[t._v("取消请求")]),t._v(" "),a("li",[t._v("转换请求和响应数据，自动转换 JSON 数据")]),t._v(" "),a("li",[t._v("客户端支持XSRF")])])]),t._v(" "),a("li",[a("strong",[t._v("Fetch API")]),t._v("提供了一个 javascript 接口，用于访问 HTTP 管道部分，还提供了全局的 fetch()方法，返回一个 Promise 对象。是底层次的 API很容易被其他技术使用。已简单合理的方式来支持跨域。\n"),a("ul",[a("li",[t._v("fetch不支持同步请求")]),t._v(" "),a("li",[t._v("只对网络请求报错，对 400、500都当做成功的请求，需要封装去处理。")]),t._v(" "),a("li",[t._v("默认不会带 cookie, 不支持 abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费")]),t._v(" "),a("li",[t._v("没有办法原生检测请求的进度")]),t._v(" "),a("li",[t._v("Response 限制了响应内容的重复读取和转换，因为数据流只能读取一次")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RequestCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    credentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RequestCredentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置了才会带 cookie")]),t._v("\n    headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HeadersInit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    integrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    keepalive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RequestMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    redirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RequestRedirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    referrer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    referrerPolicy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReferrerPolicy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 response.ok 判断 fetch 请求是否成功")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求结果是 response.body 是一个 ReadableStream")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过 response 原型上的 json 方法将 response.body 转换为 JS 对象，再返回出去")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"跨域的的方式"}},[t._v("跨域的的方式")]),t._v(" "),a("ul",[a("li",[t._v("postMessage\n"),a("ul",[a("li",[t._v("worker = new Worker(子线程jsPath) 主线程")]),t._v(" "),a("li",[t._v("worker.postMessage()")]),t._v(" "),a("li",[t._v("worker.onMessage")]),t._v(" "),a("li",[t._v("子线程：onmessage = ()=>{ postMessage()}")])])]),t._v(" "),a("li",[t._v("Nginx 代理")]),t._v(" "),a("li",[t._v("webSocket---connect, message, disconnect")]),t._v(" "),a("li",[t._v("jsonp")]),t._v(" "),a("li",[t._v("CROS\n"),a("ul",[a("li",[t._v("Access-Control-Allow-Origin: 指定特定域名，跨域请求头就要带 Orign，否则没有；由于 CDN 缓存响应头Access-Control-Allow-Origin: xxx 已被缓存，另一个域请求就回出问题；此时需要 Vary:Origin 缓存不同的资源")]),t._v(" "),a("li",[t._v("Access-Control-Allow-Methods")]),t._v(" "),a("li",[t._v("Access-Control-Allow-Headers")]),t._v(" "),a("li",[t._v("Access-Control-Allow-Credentials")]),t._v(" "),a("li",[t._v("Access-Control-Expose-Headers")]),t._v(" "),a("li",[t._v("Access-Control-Max-Age")]),t._v(" "),a("li",[t._v("withCredentials")])])]),t._v(" "),a("li",[t._v("Options 请求：不是简单请求，就回发送 OPTIONS 请求，项目中常见的 "),a("code",[t._v("Content-Type: application/json")]),t._v(" 及 Authorization: "),a("token",[t._v(" 为典型的非简单请求，在发送请求时往往会带上 Options")])],1)]),t._v(" "),a("p",[t._v("proxy中间件")]),t._v(" "),a("ol",[a("li",[t._v("正向：间接访问服务器，"),a("code",[t._v("隐匿了客户端信息")]),t._v("；如访问google, 做缓存？对客户端访问授权，记录用户访问记录")]),t._v(" "),a("li",[t._v("反向：代理的是服务端，集群分布式部署的情况下，反向代理隐藏了服务器信息；如 内网安全，负载均衡")])])])}),[],!1,null,null,null);s.default=e.exports}}]);