(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{375:function(e,l,t){"use strict";t.r(l);var v=t(6),i=Object(v.a)({},(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"编译的大致流程"}},[e._v("编译的大致流程")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("$mount")]),e._v(" "),t("ul",[t("li",[e._v("先尝试获取内部模板，获取不到在获取外部模板")]),e._v(" "),t("li",[e._v("根据模板，获取生成的 render函数---compileToFunctions----{ compile, compileToFunctions }")]),e._v(" "),t("li",[e._v("createCompilerCreator(baseCompile)返回createCompiler{ast, render, staticRenderFns}")])])]),e._v(" "),t("li",[t("p",[e._v("解析模板 parse---AST")]),e._v(" "),t("ul",[t("li",[e._v("Tag 分类：pre, mustUseProp, namespace, ReservedTag, component, transform、preTransform, postTransform, delimiters")]),e._v(" "),t("li",[e._v("parseHTML(游标、栈顶元素、<位置): 标签、属性---parseText、注释、DOctype、文本---parseText\n"),t("ul",[t("li",[e._v("标签：非自闭合---入栈，自闭合 start 钩子，非自闭合---出栈执行 end 钩子-----key, ref, slot, component, closeElement, processElement 处理属性")]),e._v(" "),t("li",[e._v("文本：chars 钩子----parseText")]),e._v(" "),t("li",[e._v("注释：comment 钩子")])])]),e._v(" "),t("li",[e._v("parseText： 解析变量")]),e._v(" "),t("li",[e._v("parseFilter：解析变量中的表达式")])])]),e._v(" "),t("li",[t("p",[e._v("优化 optimize ，并标识出静态节点、静态根节点")]),e._v(" "),t("ul",[t("li",[e._v("循环标记node.ifConditions[i].block 与 node.children")]),e._v(" "),t("li",[e._v("type取值, 对应的AST节点类型\n"),t("ol",[t("li",[e._v("元素节点")]),e._v(" "),t("li",[e._v("包含变量的动态文本节点")]),e._v(" "),t("li",[e._v("不包含变量的纯文本节点")])])]),e._v(" "),t("li",[e._v("type 为 1 时，进一步判断\n"),t("ul",[t("li",[e._v("使用了v-pre指令，那就断定它是静态节点")]),e._v(" "),t("li",[e._v("没有使用v-pre指令，不能使用动态绑定语法，即标签上不能有v-、@、:开头的属性")]),e._v(" "),t("li",[e._v("不能使用v-if、v-else、v-for指令")]),e._v(" "),t("li",[e._v("不能是内置组件，即标签名不能是slot和component")]),e._v(" "),t("li",[e._v("标签名必须是平台保留标签，即不能是组件")]),e._v(" "),t("li",[e._v("当前节点的父节点不能是带有 v-for 的 template 标签")]),e._v(" "),t("li",[e._v("节点的所有属性的 key 都必须是静态节点才有的 key，注：静态节点的key是有限的，它只能是type,tag,attrsList,attrsMap,plain,parent,children,attrs之一")])])])])]),e._v(" "),t("li",[t("p",[e._v("generate生成 code: {render, staticRenderFns}")])]),e._v(" "),t("li",[t("p",[e._v("静态根节点需满足：")]),e._v(" "),t("ul",[t("li",[e._v("节点本身必须是静态节点")]),e._v(" "),t("li",[e._v("必须拥有子节点 children")]),e._v(" "),t("li",[e._v("子节点不能只是只有一个文本节点")]),e._v(" "),t("li",[e._v("如果当前节点不是静态根节点，那就继续递归遍历它的子节点node.children和node.ifConditions")])])])])])}),[],!1,null,null,null);l.default=i.exports}}]);