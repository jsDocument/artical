(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{325:function(e,l,t){"use strict";t.r(l);var n=t(0),v=Object(n.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"虚拟节点-与-domdiff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟节点-与-domdiff"}},[e._v("#")]),e._v(" 虚拟节点 与 DOMDiff")]),e._v(" "),t("ol",[t("li",[e._v("vnode来描述DOM 节点，根据 VNode操作实际 DOM 节点，渲染出 DOM 树")]),e._v(" "),t("li",[e._v("vNode 与 fiber 的关系，与真实 DOM 的关系")]),e._v(" "),t("li",[e._v("vnode 的 3 个属性： 通过createElement生成对应的 vnode\n"),t("ul",[t("li",[e._v("nodeName：为 html标签，直接操作 dom; 为组件时，通过递归操作组件执行 render 返回对应的 vnode，")]),e._v(" "),t("li",[e._v("props")]),e._v(" "),t("li",[e._v("children")])])])]),e._v(" "),t("ul",[t("li",[e._v("DOM Diff 过程\n"),t("ul",[t("li",[e._v("父节点---静态节点？父节点变动，子节点不在比对，直接新建？")]),e._v(" "),t("li",[e._v("文本节点")]),e._v(" "),t("li",[e._v("节点类型type相同---属性，type 不同---replace")]),e._v(" "),t("li",[e._v("key, type都相同\n"),t("ul",[t("li",[e._v("新节点 与 老节点比对-----NoFlags2, Placement4, Update6, PlacementAndUpdate8")]),e._v(" "),t("li",[e._v("第一轮只比较更新的-----相同复用、更新")]),e._v(" "),t("li",[e._v("lastPlacedIndex = 0 老 Fiber可用复用的节点位置，当前找到位置比lastPlacedIndex大，更新lastIndex，在lastPlacedIndex位置前找到的元素标记为移动")])])])])])])])}],!1,null,null,null);l.default=v.exports}}]);