(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{281:function(e,s,n){"use strict";n.r(s);var c=n(0),t=Object(c.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"content"},[n("ol",[n("li",[e._v("客户端使用用户名、密码进行认证")]),e._v(" "),n("li",[e._v("服务端生成有效时间较短的 Access Token（例如 10 分钟），和有效时间较长的 Refresh Token（例如 7 天）")]),e._v(" "),n("li",[e._v("客户端访问需要认证的接口时，携带 Access Token")]),e._v(" "),n("li",[e._v("如果 Access Token 没有过期，服务端鉴权后返回给客户端需要的数据")]),e._v(" "),n("li",[e._v("如果携带 Access Token 访问需要认证的接口时鉴权失败（例如返回 401 错误），则客户端使用 Refresh Token 向刷新接口申请新的 Access Token")]),e._v(" "),n("li",[e._v("如果 Refresh Token 没有过期，服务端向客户端下发新的 Access Token")]),e._v(" "),n("li",[e._v("客户端使用新的 Access Token 访问需要认证的接口")])])])}],!1,null,null,null);s.default=t.exports}}]);