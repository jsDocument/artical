(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{303:function(t,e,n){"use strict";n.r(e);var l=n(0),i=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("ul",[n("li",[t._v("服务端渲染优化点\n"),n("ul",[n("li",[t._v("将 vue 渲染成 html 是 cpu 密集型的操作，node 又是单线程的，所以性能不是很好，想要提高并发，就得做缓存。")]),t._v(" "),n("li",[t._v("在 node 渲染服务器中做三层的缓存：页面级别的缓存、组件级别的缓存、api 级别的缓存。")]),t._v(" "),n("li",[t._v("由于搜索引擎的爬虫不会携带用户信息，还可以区分用户登录和非登录的情况，针对非登录用户做服务端渲染 ssr ，对登录用户做客户端渲染 spa。")]),t._v(" "),n("li",[t._v("也不是所有页面都需要服务端渲染，可以仅针对特定的路由做服务端渲染，还要控制首屏的大小，非必要的组件使用懒加载的方式在客户端渲染，再加上多层的集群处理。")])])])])])}],!1,null,null,null);e.default=i.exports}}]);