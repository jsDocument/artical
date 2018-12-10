(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{80:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"编译的整个过程与相关方法讲解"}},[t._v("编译的整个过程与相关方法讲解")]),t._m(0),s("h2",{attrs:{id:"挂载更新处理options-el-将toptions-template处理更新到el"}},[t._v("挂载更新处理options.el, 将toptions.template处理更新到el")]),s("ul",[s("li",[s("p",[t._v("transclude(el, options)")]),s("ol",[s("li",[t._v("options._containerAttrs 为el元素上的属性")]),s("li",[t._v("el为template时, 更新el = 解析__parseTemplate(el)__")]),s("li",[t._v("options参数存在\n"),s("ul",[s("li",[t._v("options._asComponent 且 !options.template, 添加options.template = '"),t._t("default"),t._v("'")],2),t._m(1)])]),s("li",[t._v("el为文档片断时, 在el的前后加v-start与v-end的注释节点")]),s("li",[t._v("返回el")])])]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)])])},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("_compile")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" options "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 缓存原来的el")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" original "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 把template转换成DOM并更新到el")]),t._v("\n    el "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("transclude")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 判断el为Fragment时, 更新相应的实例属性this._fragmentEnd = el.lastChild,")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// this._fragmentStart = el.firstChild, 如果是文本节点则把节点内容清空(text anchors)")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// this._fragment = el, 调用钩子beforeCompile")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("_initElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// handle v-pre on root node (#2026)")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("getAttr")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'v-pre'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 编译根节点")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// root is always compiled per-instance, because")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// container attrs and props can be different every time.")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contextOptions "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_context "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_context"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rootLinker "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("compileRoot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contextOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 编译并进行连接")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contentLinkFn\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctor "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// component compilation can be cached")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// as long as it's not using inline-template")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 如果有缓存, 从构造函数的linker属性上获取")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_linkerCachable"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        contentLinkFn "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linker\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("contentLinkFn"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 编译其他节点")]),t._v("\n        contentLinkFn "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctor"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linker "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("compile")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 调用rootLinker")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rootUnlinkFn "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("rootLinker")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_scope"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 调用contentLinker")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contentUnlinkFn "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentLinkFn\n        "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("contentLinkFn")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("compile")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 定义unLinker")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("_unlinkFn")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("rootUnlinkFn")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("contentUnlinkFn")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("replace")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("original"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isCompiled "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("_callHook")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'compiled'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[this._v("options.template存在, 更新options._content = "),n("strong",[this._v("extractContent(el)")]),this._v(", el = "),n("strong",[this._v("transcludeTemplate(el, options)")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("transcludeTemplate(el, options)")]),n("ol",[n("li",[this._v("frag = parseTemplate(options.template, true)")]),n("li",[this._v("replacer = frag.firstChild, tag为replacer的tagName")]),n("li",[this._v("如果options.replace为真")]),n("li",[this._v("frag多个子节点 或 replacer不是Element 或 tag为component 或 tag为定义的组件 或 tag为元素指令 或 replacer有is绑定属性 或 有v-for属性  或有 v-if属性, 直接返回frag; 否则更新options._replacerAttrs, 合并 replacer属性到el, 返回replacer")]),n("li",[this._v("否则frag追加到el, 返回el。")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("li",[s("p",[t._v("parseTemplate(template, shouldClone, raw)")]),s("ol",[s("li",[t._v("template为文档片断时, 却空节点--trimeNode(template), shouldClone为真时, 返回template的复本, 否则返回template")]),s("li",[t._v("template为字符串时, !raw 且 为Id选择器时, 先从缓存中取frag\n"),s("ul",[s("li",[t._v("frag不存在时, 根据id选择器获取DOM节点node")]),s("li",[t._v("node存在时, frag = "),s("strong",[t._v("nodeToFragment(node)")]),t._v(", 再存入缓存")])])]),s("li",[t._v("frag = "),s("strong",[t._v("stringToFragment(template, raw)")])]),s("li",[t._v("template.nodeType存在时, frag = "),s("strong",[t._v("nodeToFragment(template)")])]),s("li",[t._v("返回frag 或 shouldClone为真, 返回其副本")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("nodeToFragment(node)")]),n("ol",[n("li",[this._v("判断为template标签且node.content为fragment, 去除node.content的空白节点并返回")]),n("li",[this._v("node为script, 返回 "),n("strong",[this._v("stringToFragment(node.textContent)")])]),n("li",[this._v("cloneNode为node的副本, frag为新建的Fragment")]),n("li",[this._v("循环cloneNode的第一个子元素, 将其追加到frag中")]),n("li",[this._v("去除frag中空白节点并返回")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("li",[s("p",[t._v("stringToFragment(templateString, raw)")]),s("ol",[s("li",[t._v("raw存在时, templateString作为key取缓存, 否则templateString去除前后空白符后作为key取缓存")]),s("li",[t._v("缓存不存在时, 创建文本片断frag, tagMatch为匹配templateString的标签, entityMatch为匹配实体字符")]),s("li",[t._v("!tagMatch 且 !entityMatch时, 将templateString创建文本节点, 追加到frag")]),s("li",[t._v("创建div的元素--node")]),s("li",[t._v("根据匹配到的tag, 如果需要补全, 则在其前后添加补全的标签, 如tr需要在前后被'"),s("table",[s("tbody",[t._v("'与'")])]),t._v("'补全;")]),s("li",[t._v("将补全的html更新到node.innerHTML")]),s("li",[t._v("递减补全的深度值, 更新node为node.lastChild")]),s("li",[t._v("循环node.firstChild, 追加到frag")]),s("li",[t._v("!raw时, 去除frag的空白节点, 存入缓存并返回。")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("extractContent(el, asFragment)")]),n("ol",[n("li",[this._v("el为template标签且el.content为文本片断时, 更新el = el.content")]),n("li",[this._v("如果el有子元素, 去除el空白节点, asFragment为真时, rawContent = 创建的fragment, 否则 rawContent = 创建的div")]),n("li",[this._v("循环el的firstChild， 追加到rawContent")]),n("li",[this._v("返回rawContent")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("trimNode(node)")]),n("ol",[n("li",[this._v("循环node的firstChild, 子节点为空白文本节点或注释节点时, 删除该子节点")]),n("li",[this._v("循环node的lastChild, 子节点为空白文本节点或注释节点时, 删除该子节点")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("li",[s("p",[t._v("cloneNode(node)")]),s("ol",[s("li",[t._v("原生支持node.cloneNode(), 但需要做兼容, 对于参数true的兼容")]),s("li",[t._v("res = node.cloneNode(true)")]),s("li",[t._v("副本中包含template元素, 查找不到template的内容的---hasBrokenTemplate\n"),s("ol",[s("li",[t._v("如果node是realTemplate, 更新node = node.content, tempClone = res.content")]),s("li",[t._v("获取 node中所有的template元素列表--\x3eoriginal 及 tempClone中的template元素列表 --\x3e cloned")]),s("li",[t._v("循环cloned, 用original中元素的副本替换cloned")])])]),s("li",[t._v("副本textarea的placeholder内容变成了其value值---hasTextareaCloneBug\n"),s("ol",[s("li",[t._v("node为textarea时, 更新res.value = node.value")]),s("li",[t._v("取node中的textarea元素列表--\x3eoriginal, 副本当中的textarea元素列表--\x3ecloned")]),s("li",[t._v("循环cloned, 更新cloned[i].value = original[i].value")])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("isRealTemplate(node) node为template元素且node.content为fragment")])])}],!1,null,null,null);n.default=e.exports}}]);