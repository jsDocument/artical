(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{327:function(e,t,l){"use strict";l.r(t);var v=l(0),_=Object(v.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"content"},[l("h3",{attrs:{id:"虚拟节点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚拟节点"}},[e._v("#")]),e._v(" 虚拟节点")]),e._v(" "),l("ul",[l("li",[e._v("react 在组件初始化时即挂载容器时，会调用 render 函数，生成旧的虚拟 DOM 和真实的 DOM")]),e._v(" "),l("li",[e._v("新的虚拟 DOM，是调用 setState 时，重新调用 render 函数重新生成的虚拟 DOM")])]),e._v(" "),l("ol",[l("li",[e._v("vnode来描述DOM 节点，根据 VNode操作实际 DOM 节点，渲染出 DOM 树")]),e._v(" "),l("li",[e._v("vNode 与 fiber 的关系，与真实 DOM 的关系")]),e._v(" "),l("li",[e._v("vnode 的 3 个属性： 通过createElement生成对应的 vnode\n"),l("ul",[l("li",[e._v("nodeName：为 html标签，直接操作 dom; 为组件时，通过递归操作组件执行 render 返回对应的 vnode，")]),e._v(" "),l("li",[e._v("props")]),e._v(" "),l("li",[e._v("children")])])])]),e._v(" "),l("h3",{attrs:{id:"domdiff"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#domdiff"}},[e._v("#")]),e._v(" DOMDiff")]),e._v(" "),l("ul",[l("li",[e._v("DOM Diff 过程\n"),l("ul",[l("li",[e._v("同一类型进行比较，否则放弃比较，直接删掉旧的添加新的")]),e._v(" "),l("li",[e._v("父节点---静态节点？"),l("code",[e._v("父节点变动")]),e._v("，子节点不再比对，直接新建")]),e._v(" "),l("li",[e._v("文本节点比对")]),e._v(" "),l("li",[e._v("节点类型type相同---再比较属性，节点类型 type 不同---replace")]),e._v(" "),l("li",[e._v("循环渲染里有插入、移动和删除操作；对于每一个列表指定key，先将所有列表遍历一遍，确定要新增和删除的，再确定需要移动的。\n"),l("ul",[l("li",[e._v("具体：第一遍比较，新节点 与 老节点比对先确定类型-----NoFlags2, Placement4, Update6, PlacementAndUpdate8-----相同复用、没有则新增")]),e._v(" "),l("li",[e._v("lastPlacedIndex = 0：定义 老 "),l("code",[e._v("可用复用的 Fiber 节点位置")]),e._v("，当前找到的可复用的位置比 lastPlacedIndex 大，更新 lastIndex，在 "),l("code",[e._v("lastPlacedIndex 位置前")]),e._v("找到的元素标记为移动")])])])])])])])}],!1,null,null,null);t.default=_.exports}}]);