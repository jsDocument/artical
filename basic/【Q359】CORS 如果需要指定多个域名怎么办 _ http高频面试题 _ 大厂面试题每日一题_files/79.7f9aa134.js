(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{501:function(t,e,a){"use strict";a.r(e);var s=a(54),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-状态码-502-和-504-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码-502-和-504-有什么区别"}},[t._v("#")]),t._v(" http 状态码 502 和 504 有什么区别")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Issue")]),t._v(" "),a("p",[t._v("欢迎在 Gtihub Issue 中回答此问题: "),a("a",{attrs:{href:"https://github.com/shfshanyue/Daily-Question/issues/51",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issue 51"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Author")]),t._v(" "),a("p",[t._v("回答者: "),a("a",{attrs:{href:"https://github.com/sjfkai",target:"_blank",rel:"noopener noreferrer"}},[t._v("sjfkai"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("502 Bad Gateway\nThe server was acting as a gateway or proxy and received an invalid response from the upstream server.\n收到了上游响应但无法解析")])]),t._v(" "),a("li",[a("p",[t._v("504 Gateway Timeout\nThe server was acting as a gateway or proxy and did not receive a timely response from the upstream server.\n上游响应超时")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Author")]),t._v(" "),a("p",[t._v("回答者: "),a("a",{attrs:{href:"https://github.com/shfshanyue",target:"_blank",rel:"noopener noreferrer"}},[t._v("shfshanyue"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("这两种异常状态码都与网关 Gateway 有关，首先明确两个概念")]),t._v(" "),a("ul",[a("li",[t._v("Proxy (Gateway)，反向代理层或者网关层。在公司级应用中一般使用 Nginx 扮演这个角色")]),t._v(" "),a("li",[t._v("Application (upstream serrver)，应用层服务，作为 Proxy 层的上游服务。在公司中一般为各种语言编写的服务器应用，如 Go/Java/Python/PHP/Node 等")])]),t._v(" "),a("p",[t._v("此时关于 502 与 504 的区别就很显而易见")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("502 Bad Gateway")]),t._v("。一般表现为你自己写的应用层服务(Java/Go/PHP)挂了，网关层无法接收到响应")]),t._v(" "),a("li",[a("code",[t._v("504 Gateway Timeout")]),t._v("。一般表现为应用层服务 (upstream) 超时，如查库操作耗时十分钟，超过了 Nginx 配置的超时时间")])])])}),[],!1,null,null,null);e.default=r.exports}}]);