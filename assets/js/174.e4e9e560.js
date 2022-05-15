(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{367:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("做过的性能优化，首页加速是否达到预期，如何衡量？")]),t._v(" "),s("ul",[s("li",[t._v("静态加载体积、个数，加载速度，加载的合理规划\n"),s("ul",[s("li",[t._v("静态资源体积与个数：\n"),s("ul",[s("li",[t._v("js 的代码 Tree Shaking：基于 ES6 模块的静态分析，移除的用不到的函数，从而减少体积，也可以对 JSON 进行优化")]),t._v(" "),s("li",[t._v("js 代码压缩 optimize->minimizer->[new terserPlugin({include: /.min.js/})]")]),t._v(" "),s("li",[t._v("css 的代码 Tree Shaking---purgecss-webpack-plugin")]),t._v(" "),s("li",[t._v("CSS 压缩 optimizeCSSAssetsPlugin, cssProcessor: cssnano")]),t._v(" "),s("li",[t._v("HTML 压缩")]),t._v(" "),s("li",[t._v("合理的代码分包---split-Chunks, external, dll")]),t._v(" "),s("li",[t._v("请求的 gzip压缩，br 压缩")]),t._v(" "),s("li",[t._v("图片格式优化：webp, svg, base64")]),t._v(" "),s("li",[t._v("图片裁剪---picture media")])])]),t._v(" "),s("li",[t._v("加载的合理规划：\n"),s("ul",[s("li",[t._v("路由懒加载")]),t._v(" "),s("li",[t._v("懒加载：图片懒加载")])])]),t._v(" "),s("li",[t._v("加载速度：\n"),s("ul",[s("li",[t._v("HTTP 缓存")]),t._v(" "),s("li",[t._v("CDN 加速")]),t._v(" "),s("li",[t._v("DNS 预解析")]),t._v(" "),s("li",[t._v("HTTP2 收敛域名")]),t._v(" "),s("li",[t._v("HTTP1.1 keep+alive 使用资源域名")]),t._v(" "),s("li",[t._v("预加载 preload、预解析 prerender、prefetch\n"),s("ul",[s("li",[t._v("详细参见下文 "),s("a",{attrs:{href:"#%E5%85%B3%E4%BA%8E-link-%E7%B1%BB%E5%9E%8B"}},[t._v("关于 link 类型")])])])]),t._v(" "),s("li",[t._v("提高服务器带宽")])])])])]),t._v(" "),s("li",[t._v("感官优化\n"),s("ul",[s("li",[t._v("骨架屏")]),t._v(" "),s("li",[t._v("loading")]),t._v(" "),s("li",[t._v("转场动画")])])]),t._v(" "),s("li",[t._v("代码性能优化\n"),s("ul",[s("li",[t._v("js代码优化----多次 DOM 操作合并")]),t._v(" "),s("li",[t._v("css 代码优化----减少层级、减少重排、重绘---图片设置width, height，不使用 import")]),t._v(" "),s("li",[t._v("减少 DOM 的深度")]),t._v(" "),s("li",[t._v("不使用阻塞渲染的 Script")]),t._v(" "),s("li",[t._v("接口优化")]),t._v(" "),s("li",[t._v("提升容器的启动速度\n"),s("ul",[s("li",[t._v("离线包方案")])])])])]),t._v(" "),s("li",[t._v("接口方面优化")]),t._v(" "),s("li",[t._v("渲染速度---ssr")])]),t._v(" "),s("h2",{attrs:{id:"关于-link-类型"}},[t._v("关于 link 类型")]),t._v(" "),s("ul",[s("li",[t._v("preconnect  向浏览器提供提示，建议浏览器提前打开与链接网站的连接")]),t._v(" "),s("li",[t._v("dns-prefetch  提示浏览器该资源需要在用户点击链接之前进行 DNS 查询和协议握手。")]),t._v(" "),s("li",[t._v("prefetch    建议浏览器提前获取链接的资源，因为它很可能会被用户请求")]),t._v(" "),s("li",[t._v("preload     告诉浏览器下载资源，因为在当前导航期间稍后将需要该资源")]),t._v(" "),s("li",[t._v("prerender   建议浏览器事先获取链接的资源，并建议将预取的内容显示在屏幕外")])]),t._v(" "),s("p",[t._v("详细参见MDN https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types")]),t._v(" "),s("p",[t._v("预解析预下载，都是告诉浏览器提前做这个事儿，具体是否使用，还是看是否有引用的。示例如下")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- preconnect 提示最好仅用于最关键的连接 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preconnect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://fonts.googleapis.com/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://fonts.googleapis.com/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("JS and CSS preload example"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- preload 仅仅是告诉浏览器要下载，具体使用哪些还是要自己写引用的 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("anonymous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prerender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://example.com/content/to/prerender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nextpage.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("anonymous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("bouncing balls"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("优化点细节讲解：")]),t._v(" "),s("ul",[s("li",[t._v("DNS解析优化，浏览器访问DNS的时间就可以缩短-----DNS 预解析\n"),s("ul",[s("li",[t._v("第一次的域名DNS解析查找流程依次为：浏览器缓存 ->系统缓存 ->路由器缓存 ->ISP DNS缓存 ->递归搜索")]),t._v(" "),s("li",[t._v("用meta信息来告知浏览器, 当前页面要做DNS预解析:"),s("meta",{attrs:{"http-equiv":"x-dns-prefetch-control",content:"on"}})]),t._v(" "),s("li",[t._v("在页面header中使用link标签来强制对DNS预解析:"),s("link",{attrs:{rel:"dns-prefetch",href:"http://bdimg.share.baidu.com"}})]),t._v(" "),s("li",[t._v("注意：dns-prefetch需慎用，多页面重复DNS预解析会增加重复DNS查询次数")])])]),t._v(" "),s("li",[t._v("使用HTTP2\n"),s("ul",[s("li",[s("code",[t._v("解析速度快")]),t._v("：因为 HTTP2 是基于帧的协议，每个帧都有表示帧长度的字段；服务器解析 HTTP1.1 的请求时，必须不断地读入字节，直到遇到分隔符 CRLF 为止")]),t._v(" "),s("li",[s("code",[t._v("多路复用")]),t._v("：多个请求可以共用一个 TCP 连接，先响应就先处理谁，这样就充分的压榨了TCP这个全双工管道的性能，当然多路复用是建立在加载的资源在同一域名下。")]),t._v(" "),s("li",[s("code",[t._v("HTTP1.1的Pipelining技术")]),t._v("：HTTP1.1有一个可选的Pipelining技术，即当一个HTTP连接在等待接收响应时可以通过这个连接发送其他请求，但处理响应是按照顺序的，也就是后发的请求有可能"),s("code",[t._v("被先发的阻塞住")]),t._v("，也正因此很多浏览器默认是不开启Pipelining")]),t._v(" "),s("li",[s("code",[t._v("首部压缩")]),t._v("：HTTP/2对消息头采用 HPACK 进行压缩传输")]),t._v(" "),s("li",[s("code",[t._v("服务器推送")]),t._v("：服务端可以在发送页面HTML时主动推送其它资源，而不用等到浏览器解析到相应位置，发起请求再响应。")])])])]),t._v(" "),s("p",[t._v("使用的优化指标？秒开率？")]),t._v(" "),s("ul",[s("li",[t._v("FP（首次绘制）")]),t._v(" "),s("li",[t._v("FCP（首次内容绘制 First contentful paint）")]),t._v(" "),s("li",[t._v("LCP（最大内容绘制时间 Largest contentful paint）")]),t._v(" "),s("li",[t._v("FPS（每秒传输帧数）")]),t._v(" "),s("li",[t._v("TTI（页面可交互时间 Time to Interactive）")]),t._v(" "),s("li",[t._v("HTTP 请求响应时间")]),t._v(" "),s("li",[t._v("DNS 解析时间")]),t._v(" "),s("li",[t._v("TCP 连接时间")])]),t._v(" "),s("p",[t._v("收集优化数据 window.performance.timing，找出性能瓶颈--chrome performance devtool？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("重定向耗时 redirectStart, ~End")])]),t._v(" "),s("li",[s("p",[t._v("dns 查询耗时 domainLookupStart, ~End")])]),t._v(" "),s("li",[s("p",[t._v("读取页面第一个字节的时间 responseStart, ~End")])]),t._v(" "),s("li",[s("p",[t._v("DNS 缓存时间 domainLookupStart, fetchStart")])]),t._v(" "),s("li",[s("p",[t._v("卸载页面时间 unloadEventStart, ~End")])]),t._v(" "),s("li",[s("p",[t._v("TCP 链接耗时 connectStart, ~End")])]),t._v(" "),s("li",[s("p",[t._v("request 请求耗时 responseStart, ~End")])]),t._v(" "),s("li",[s("p",[t._v("解析 DOM 树耗时 domComplete, domInteractive")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("白屏时间")]),t._v(" navigationStart - domInteractive")])]),t._v(" "),s("li",[s("p",[t._v("DOM Ready 时间 domContentLoadedEventEnd, fetchStart")])]),t._v(" "),s("li",[s("p",[t._v("navigationStart 加载页面的起始时间")])]),t._v(" "),s("li",[s("p",[t._v("fetchStart 开始查询缓存或开始获取资源的时间")])]),t._v(" "),s("li",[s("p",[t._v("secureConnectionStart ssl 握手时间")])]),t._v(" "),s("li",[s("p",[t._v("domLoading 还未开始解析(current document readiness 设置为 loading)")])]),t._v(" "),s("li",[s("p",[t._v("domInteractive 文档解析结束时间")])]),t._v(" "),s("li",[s("p",[t._v("domContentLoadedEventStart DOMContentLoaded 时间开始，还有对应的结束属性")])]),t._v(" "),s("li",[s("p",[t._v("domComplete(current document readiness 设置为 complete)")])]),t._v(" "),s("li",[s("p",[t._v("loadEventStart, loadEventEnd onload 时间")])])]),t._v(" "),s("p",[t._v("打包速度优化？")]),t._v(" "),s("ul",[s("li",[t._v("分析：webpack-plugin-analizyer")]),t._v(" "),s("li",[t._v("speed-measure-webpack-plugin 评估每个 loader/plugin 的执行耗时。")]),t._v(" "),s("li",[t._v("友好错误提示：friendly-errors-webpack-plugin")]),t._v(" "),s("li",[t._v("Swc-loader： swc(采用 rust 语言编写)-----负责 AST 转换的")]),t._v(" "),s("li",[t._v("加快 webpack 打包速度：\n"),s("ul",[s("li",[t._v("thread-loader 开启多线程")]),t._v(" "),s("li",[t._v("开启本地缓存babel-loader，hardSourceWebpackPlugin")]),t._v(" "),s("li",[t._v("DLLPlugin 提前打包、分包")]),t._v(" "),s("li",[t._v("external 配合 CDN 域名：html-webpack-extenals-plugin 不打入 bundle")])])])]),t._v(" "),s("p",[t._v("打包结果里面出现重复包的情况，怎么解决?")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("CDN 加速原理是什么？它和外链引入js这种有什么区别？【描述】")]),t._v(" "),s("ul",[s("li",[t._v("CDN 即内容分发网络。CDN 的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或网络中，在用户访问网站时，利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应用户请求。")]),t._v(" "),s("li",[t._v("CDN 的适用场景： 解决因分布、带宽、服务器性能带来的访问延迟问题,适用于网站站点/应用加速、点播、直播、视音频点播、大文件下载分发加速、移动应用加速等场景")])])]),t._v(" "),s("li",[s("p",[t._v("开发 Plugin 的思路：")]),t._v(" "),s("ul",[s("li",[t._v("plugin 是通过钩子机制实现的，可以在不同的事件节点上挂载不同的任务，就可以扩展一个插件")]),t._v(" "),s("li",[t._v("插件必须是一个包含了 apply 方法的类")]),t._v(" "),s("li",[t._v("apply 方法接收一个 compiler 参数，包含了这次构建的所有配置信息，通过这个对象注册钩子函数通过 compiler.hooks.emit.tap 注册钩子函数（emit也可以为其他事件）")]),t._v(" "),s("li",[t._v("钩子函数第一个参数为插件名称，第二个参数 compilation 为此次打包的上下文，根据 compilation.assets 就可以拿到此次打包的资源，做一些相应的逻辑处理")])])]),t._v(" "),s("li",[s("p",[t._v("loader 与 plugin 的区别：loader 是转换器，plugin 是扩展器")])]),t._v(" "),s("li",[s("p",[t._v("babel 的步骤：分词(根据最小有效语法单元，对字符串进行切割)---\x3e词法分析(涉及到读取、暂存、回溯、暂存点销毁等操作)----\x3eAST(语法分析)----\x3e输出目标代码")])])]),t._v(" "),s("p",[t._v("实现首屏300ms 打开---CSR，BSR, SSG, SSR，ISR？")]),t._v(" "),s("ul",[s("li",[t._v("SSR---需要一个服务器承载页面的 实时 请求、渲染和响应，这无疑会增大 服务端开发和运维 的成本")]),t._v(" "),s("li",[t._v("SSG--- 静态站点生成（SSG，也叫构建时预渲染）。在应用编译构建时"),s("code",[t._v("预先渲染页面，并生成静态的 HTML")]),t._v("。把生成的 HTML 静态资源部署到服务器后，浏览器不仅首次能请求到带页面内容的 HTML ，而且"),s("code",[t._v("不需要服务器实时渲染和响应")]),t._v("，大大节约了服务器运维成本和资源。(静态数据的场景)")]),t._v(" "),s("li",[t._v("预渲染：\n"),s("ul",[s("li",[t._v("getStaticProps 异步函数，收集该页面组件所需要的数据返回，getStaticProps 函数执行完成后，页面组件就能在 props 中拿到这些数据并执行静态渲染---返回一个 revalidate，开启 ISR即多久重新生成一次 HTML；fallback: 'blocking'/true")]),t._v(" "),s("li",[t._v("getStaticPaths 异步函数返回的 paths，包含动态路由在构建时需要预渲染的页面数据")])])]),t._v(" "),s("li",[t._v("ISR：运行时重新生成每个页面 HTML，而不需要重新构建整个应用")]),t._v(" "),s("li",[t._v("路由预加载")]),t._v(" "),s("li",[t._v("Next.js 提供 getServerSideProps 异步函数")])]),t._v(" "),s("p",[t._v("如何判断 webview 是否加载完成？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("webvie.isLoading？")])]),t._v(" "),s("li",[s("p",[t._v("uninitialized : 还没开始加载")])]),t._v(" "),s("li",[s("p",[t._v("loading : 加载中")])]),t._v(" "),s("li",[s("p",[t._v("loaded : 加载完成")])]),t._v(" "),s("li",[s("p",[t._v("interactive : 结束渲染，用户已经可以与网页进行交互。但内嵌资源还在加载中")])]),t._v(" "),s("li",[s("p",[t._v("complete : 完全加载完成")])]),t._v(" "),s("li",[s("p",[t._v("JS 事件失效处理-----事件委托")])]),t._v(" "),s("li",[s("p",[t._v("webpack Plugin 原理")])]),t._v(" "),s("li",[s("p",[t._v("先渲染 react 的一部分")]),t._v(" "),s("ul",[s("li",[t._v("suspense--fallback 和 React.lazy 懒加载组件 + import()")]),t._v(" "),s("li",[t._v("ErrorBoundary")]),t._v(" "),s("li",[t._v("COncurrent UI Patterns：当用户按下另一个按键时，React 不需要阻塞浏览器更新文本输入。相反，它可以让浏览器绘制输入的更新，然后 在内存中 渲染更新后的列表。当渲染完成后，React 更新 DOM，并且变化会反映在屏幕上。")])])])]),t._v(" "),s("p",[t._v("如何实现错误上报？")]),t._v(" "),s("ul",[s("li",[t._v("unhandledrejection事件: 当Promise 被 reject 且没有 reject 处理器的时候")]),t._v(" "),s("li",[t._v("onerror：运行时错误")]),t._v(" "),s("li",[t._v("error：监听资源类错误")])]),t._v(" "),s("p",[t._v("CI/CD 产生的发展历程")]),t._v(" "),s("ul",[s("li",[t._v("最开始：资源直接 ftp 上传服务器---这种方式不安全")]),t._v(" "),s("li",[t._v("SSH 脚本部署")]),t._v(" "),s("li",[t._v("构建服务器(脚本的一致性)----\x3e服务器")]),t._v(" "),s("li",[t._v("docker（多构建）+ 管理 k8s + 自动构建发布平台 + 检查(持续构建、持续交付)")])]),t._v(" "),s("p",[t._v("本地代码检查")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("eslint编辑时检查 或 prettier")])]),t._v(" "),s("li",[s("p",[t._v("pre-commit时检查通过才可提交-----huskey, lint-stage")])]),t._v(" "),s("li",[s("p",[t._v("git hooks 常用的: precommit, prepush，")])]),t._v(" "),s("li",[s("p",[t._v("eslint-loader 构建部署检查")])]),t._v(" "),s("li",[s("p",[t._v("husky原理")]),t._v(" "),s("ul",[s("li",[t._v("在~/.git/hooks目录，是一些可执行文件")]),t._v(" "),s("li",[t._v("可以自定义脚本的位置，git config 'core.hooksPath' .husky")]),t._v(" "),s("li",[t._v("在~/.husky 目录下手动创建 hook 脚本")])])]),t._v(" "),s("li",[s("p",[t._v("gitHooks配置，yorkie fork 的 husky")])]),t._v(" "),s("li",[s("p",[t._v("lint-staged 变动部分检查，对暂存文件列表运行脚本")])]),t._v(" "),s("li",[s("p",[t._v("CI 持续集成")]),t._v(" "),s("ul",[s("li",[t._v("借助 git hooks对当前代码在构建服务器中进行自动构建、测试及部署\n"),s("ul",[s("li",[t._v("实现自动化语法检查、测试，如果没有通过无法进行代码合并")]),t._v(" "),s("li",[t._v("检查 "),s("code",[t._v("npm 库")]),t._v("、"),s("code",[t._v("构建镜像容器")]),t._v("的风险----synk, audit")]),t._v(" "),s("li",[t._v("对当前分支代码构建"),s("code",[t._v("独立镜像")]),t._v("并"),s("code",[t._v("生成独立的分支环境地址")]),t._v("进行测试")]),t._v(" "),s("li",[t._v("合并到主分支，自动构建镜像并部署到生成环境")])])])])]),t._v(" "),s("li",[s("p",[t._v("CD 持续部署----免费 CICD 服务github actions")]),t._v(" "),s("ul",[s("li",[t._v("jenkens----发布流程")]),t._v(" "),s("li",[t._v("docker----容器，镜像-----Dockerfile")]),t._v(" "),s("li",[t._v("wayne----可视化发布平台")]),t._v(" "),s("li",[t._v("k8s----管理 docker 容器")])])]),t._v(" "),s("li",[s("p",[t._v("提交时代码检查")])]),t._v(" "),s("li",[s("p",[t._v("分支合并自动构建(dev)")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);