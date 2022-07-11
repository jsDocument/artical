(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{343:function(e,v,l){"use strict";l.r(v);var _=l(0),t=Object(_.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,v=e.$createElement,l=e._self._c||v;return l("div",{staticClass:"content"},[l("h3",{attrs:{id:"virtual-dom-的优势"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-的优势"}},[e._v("#")]),e._v(" Virtual DOM 的优势")]),e._v(" "),l("ol",[l("li",[e._v("DOM 引擎 与 JS 引擎相互独立，但又工作在同一线程")]),e._v(" "),l("li",[e._v("JS 调用 DOM API，必须挂起 JS 引擎，转换传入的参数数据，激活 DOM 引擎，DOM 重绘后再转换可能有的返回值，最后激活 JS 引擎并继续执行。")]),e._v(" "),l("li",[e._v("如果频繁的 DOM API 调用，且浏览器厂商不做“批量处理”优化，引擎间切换的代价将迅速累计。")]),e._v(" "),l("li",[e._v("若有强制重绘的 DOM API 调用，重新计算布局、重新绘制图像会引起更大的性能消耗")])]),e._v(" "),l("p",[e._v("所以")]),e._v(" "),l("ol",[l("li",[e._v("虚拟 DOM 不会立马进行排版与重绘操作")]),e._v(" "),l("li",[e._v("虚拟 DOM 进行频繁修改，然后进行比较后再修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多DOM节点排版与重绘损耗")])]),e._v(" "),l("h3",{attrs:{id:"虚拟节点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚拟节点"}},[e._v("#")]),e._v(" 虚拟节点")]),e._v(" "),l("ul",[l("li",[e._v("react 在组件初始化时即挂载容器时，会调用 render 函数，生成旧的虚拟 DOM 和真实的 DOM")]),e._v(" "),l("li",[e._v("新的虚拟 DOM，是调用 setState 时，重新调用 render 函数重新生成的虚拟 DOM")])]),e._v(" "),l("ol",[l("li",[e._v("vnode来描述DOM 节点，根据 VNode操作实际 DOM 节点，渲染出 DOM 树")]),e._v(" "),l("li",[e._v("vNode 与 fiber 的关系，与真实 DOM 的关系")]),e._v(" "),l("li",[e._v("vnode 的 3 个属性： 通过createElement生成对应的 vnode\n"),l("ul",[l("li",[e._v("nodeName：为 html标签，直接操作 dom; 为组件时，通过递归操作组件执行 render 返回对应的 vnode，")]),e._v(" "),l("li",[e._v("props")]),e._v(" "),l("li",[e._v("children")])])])]),e._v(" "),l("h3",{attrs:{id:"domdiff"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#domdiff"}},[e._v("#")]),e._v(" DOMDiff")]),e._v(" "),l("ul",[l("li",[e._v("DOM Diff 过程\n"),l("ul",[l("li",[e._v("同一类型进行比较，否则放弃比较，直接删掉旧的添加新的")]),e._v(" "),l("li",[e._v("父节点---静态节点？"),l("code",[e._v("父节点变动")]),e._v("，子节点不再比对，直接新建")]),e._v(" "),l("li",[e._v("文本节点比对")]),e._v(" "),l("li",[e._v("节点类型type相同---再比较属性，节点类型 type 不同---replace")]),e._v(" "),l("li",[e._v("循环渲染里有插入、移动和删除操作；对于每一个列表指定key，先将所有列表遍历一遍，确定要新增和删除的，再确定需要移动的。\n"),l("ul",[l("li",[e._v("具体：第一遍比较，新节点 与 老节点比对先确定类型-----NoFlags2, Placement4, Update6, PlacementAndUpdate8-----相同复用、没有则新增")]),e._v(" "),l("li",[e._v("lastPlacedIndex = 0：定义 老 "),l("code",[e._v("可用复用的 Fiber 节点位置")]),e._v("，当前找到的可复用的位置比 lastPlacedIndex 大，更新 lastIndex，在 "),l("code",[e._v("lastPlacedIndex 位置前")]),e._v("找到的元素标记为移动")])])])])])])])}],!1,null,null,null);v.default=t.exports}}]);