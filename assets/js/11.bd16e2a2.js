(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{190:function(t,l,h){"use strict";h.r(l);var c=h(0),i=Object(c.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,l=t.$createElement,h=t._self._c||l;return h("div",{staticClass:"content"},[h("h1",{attrs:{id:"钩子函数的初始化与实现"}},[t._v("钩子函数的初始化与实现")]),h("h2",{attrs:{id:"initdomhooks"}},[t._v("_initDOMHooks")]),h("ul",[h("li",[t._v("为当前实例添加hook:attached 与 hook:detached钩子")])]),h("h2",{attrs:{id:"callhook"}},[t._v("_callHook")]),h("ul",[h("li",[t._v("触发'pre-hook:hook' 事件")]),h("li",[t._v("循环options[hook]中的函数队列")]),h("li",[t._v("触发'hook:hook' 事件")])]),h("h2",{attrs:{id:"onattached"}},[t._v("onAttached")]),h("ul",[h("li",[t._v("判断 !this._isAttached状态, 更新其状态为true, 并循环this.$children执行其callAttach")])]),h("h2",{attrs:{id:"callattach-child"}},[t._v("callAttach(child)")]),h("ul",[h("li",[t._v("判断!child._isAttached 且 child.$el在文档中, 执行child._callHook('attached')")])]),h("h2",{attrs:{id:"ondetached"}},[t._v("onDetached")]),h("ul",[h("li",[t._v("判断 !this._isAttached状态, 更新其状态为false, 并循环this.$children执行其callDetach")])]),h("h2",{attrs:{id:"calldetach-child"}},[t._v("callDetach(child)")]),h("ul",[h("li",[t._v("判断child._isAttached 且 child.$el不在文档中, 执行child._callHook('detached')")])])])}],!1,null,null,null);l.default=i.exports}}]);