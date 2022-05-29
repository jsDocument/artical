(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{220:function(e,i,v){"use strict";v.r(i);var a=v(0),t=Object(a.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,i=e.$createElement,v=e._self._c||i;return v("div",{staticClass:"content"},[v("p",[e._v("Native 向 WEB 发消息：在 WebView 容器中动态地执行一段 JS 脚本，通常情况下是调用一个挂载在全局上下文的方法")]),e._v(" "),v("ul",[v("li",[e._v("Android：webview.loadUr，webview.evaluateJavascript")]),e._v(" "),v("li",[e._v("IOS：UIWebView.stringByEvaluateJavascriptFromString, WKWebView.evaluateJavascript")])]),e._v(" "),v("p",[e._v("Web 向 Native 发消息：某段 JS 代码的执行端上是可感知的，方式是拦截与注入")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("webView 发出的所有请求都是可以被 native 容器感知的，因此 native 可以拦截 web 发出的请求")]),e._v(" "),v("ul",[v("li",[e._v("符合 JSB 约定，进行 JSB 进行相应的处理")]),e._v(" "),v("li",[e._v("普通的请求，这直接转发")])])]),e._v(" "),v("li",[v("p",[e._v("通过何种方式发出请求？")])]),e._v(" "),v("li",[v("p",[e._v("拦截式：")]),e._v(" "),v("ul",[v("li",[e._v("a 、iframe.src、location.href、ajax 等，但 a 需要用户手动触发，location.href 可能会导致页面跳转，安卓端拦截 ajax 的能力有所欠缺，因此绝大多数拦截式实现方案均采用iframe 来发送请求。")]),e._v(" "),v("li",[e._v("JSB 的请求格式：<scheme>://<host>:<port><path>")]),e._v(" "),v("li",[e._v("如何回调？在请求的 URL 上拼接回调方法的事件名，将该事件挂载在全局 window 上，由于 Native 端可以轻松执行 JS 代码，因此在完成端逻辑后直接执行该事件名对应的回调方法即可")]),e._v(" "),v("li",[e._v("缺点：\n"),v("ul",[v("li",[e._v("连续发送时可能会造成消息丢失（可以使用消息队列解决该问题）")]),e._v(" "),v("li",[e._v("URL  字符串长度有限制")]),e._v(" "),v("li",[e._v("性能一般，URL request 创建请求有一定的耗时（Android 端 200-400ms）")])])])])]),e._v(" "),v("li",[v("p",[e._v("注入式：通过 WebView 提供的接口向 JS 全局上下文对象（window）中注入对象或者方法，当 JS 调用时，可直接执行相应的 Native 代码逻辑，从而达到 Web 调用 Native 的目的。")])]),e._v(" "),v("li",[v("p",[e._v("SchemaURL")])]),e._v(" "),v("li",[v("p",[e._v("postMessage")])])])])}],!1,null,null,null);i.default=t.exports}}]);