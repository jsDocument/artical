(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{398:function(t,e,s){"use strict";s.r(e);var n=s(6),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"内部几个指令的实现讲解"}},[t._v("内部几个指令的实现讲解")]),t._v(" "),s("h2",{attrs:{id:"partial"}},[t._v("partial")]),t._v(" "),s("ul",[s("li",[t._v("有动态属性name及回调")]),t._v(" "),s("li",[t._v("bind: 创建注释节点替换this.el")]),t._v(" "),s("li",[t._v("然后查找options中配置的partials, 存在则创建FragmentFpactory实例this.factory并调用vIF指令的insert")]),t._v(" "),s("li",[t._v("unbind时销毁thisfrag")])]),t._v(" "),s("h2",{attrs:{id:"if"}},[t._v("if")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("bind")]),t._v(" "),s("ol",[s("li",[t._v("el = this.el,")]),t._v(" "),s("li",[t._v("!el._"),s("em",[t._v("vue")]),t._v("_\n"),s("ol",[s("li",[t._v("el的下一个兄弟元素「next」有v-else, 移除该节点")]),t._v(" "),s("li",[t._v("创建elseFactory = new FragmentFactory(this.vm, next)")]),t._v(" "),s("li",[t._v("创建v-if注释节点或空白符的文本节点--\x3ethis.anchor")]),t._v(" "),s("li",[t._v("用this.anchor替换this.el")])])]),t._v(" "),s("li",[t._v("否则this.invalid = true")])])]),t._v(" "),s("li",[s("p",[t._v("update(value)")]),t._v(" "),s("ol",[s("li",[t._v("this.invalid时直接返回")]),t._v(" "),s("li",[t._v("value存在, !this.frag时执行this.insert() 否则执行this.remove()")])])]),t._v(" "),s("li",[s("p",[t._v("remove")]),t._v(" "),s("ol",[s("li",[t._v("移除this.frag并this.frag.null")]),t._v(" "),s("li",[t._v("this.elseFactory存在且!this.elseFrag时， 创建this.slseFrag, 并添加到this.anchor之前")])]),t._v(" "),s("blockquote",[s("p",[t._v("this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag)\nthis.elseFrag.before(this.anchor)")])])]),t._v(" "),s("li",[s("p",[t._v("unbind() 销毁this.frag 与 this.elseFrag")])]),t._v(" "),s("li",[s("p",[t._v("insert")]),t._v(" "),s("ol",[s("li",[t._v("移除elseFrag 并将引用置为null")]),t._v(" "),s("li",[t._v("根据this.factory创建this.frag = this.factory.create(this._host, this._scoep, this._frag)")]),t._v(" "),s("li",[t._v("将this.ancor添加到this.frag之前")])])])]),t._v(" "),s("h2",{attrs:{id:"slot"}},[t._v("slot")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("bind:")]),t._v(" "),s("ol",[s("li",[t._v("host = this.vm, raw = host.$options._content, slotName = this.params.name, context = host._context")]),t._v(" "),s("li",[t._v("如果slotName不存在, 则编译this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host)")]),t._v(" "),s("li",[t._v('否则根据slot="slotName" 在raw中查找该节点nodes, nodes存在则编译this.tryCompile(extractFragment(nodes, raw), context, host); 否则this.fallback()')])])]),t._v(" "),s("li",[s("p",[t._v("fallback()")]),t._v(" "),s("ol",[s("li",[t._v("this.compile(extractContent(this.el, true), this.vm)")])])]),t._v(" "),s("li",[s("p",[t._v("tryCompile(content, context, host)")]),t._v(" "),s("ol",[s("li",[t._v("content存在子元素调用 this.compile(content, context, host)")]),t._v(" "),s("li",[t._v("否则this.fallback()")])])]),t._v(" "),s("li",[s("p",[t._v("compile(content, context, host) 创建else, Template DOM, 追加到content, 编译content, 替换this.el")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建template元素, 并添加v-else属性, 将this.el的html添加到else元素上，并追加到content")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elseBlock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'template'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nelseBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v-else'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nelseBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML\ncontent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elseBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. this.el有子元素 且content有一个子节点, 且子节点类型为1, 且子节点有if属性, 创建else部分;\n2. 更新scope为 host.\\_scope 或 this.\\_scope\n3. this.unlink = context.$compile(content, host, scope, this.\\_frag)\n4. content存在则content替换this.el; 否则移除this.el\n")])])]),s("ul",[s("li",[s("p",[t._v("unbind() 执行this.unlink()")])]),t._v(" "),s("li",[s("p",[t._v("nameSlot为slot的扩展, 权重+1, 增加动态name参数")])]),t._v(" "),s("li",[s("p",[t._v("extractFragment(nodes, parent, main) 解析node, 将其副本追加到frag")]),t._v(" "),s("ol",[s("li",[t._v("append(node)方法, 判断node为template标签 且 且没有if和for属性, node = parseTemplate(node); 将node的副本追加到frag")]),t._v(" "),s("li",[t._v("循环nodes项--node")]),t._v(" "),s("li",[t._v("如果main且!node.__v_selected时, append(node)")]),t._v(" "),s("li",[t._v("否则如果!main 且 node.parentNode等于parent, 更新node.__v_selected = true, append(node)")]),t._v(" "),s("li",[t._v("返回frag")])])]),t._v(" "),s("li",[s("p",[t._v("$compile(el, host, scope, frag) 返回 compile(el, this.$options, true)(this, el, host, scoep, frag)")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);