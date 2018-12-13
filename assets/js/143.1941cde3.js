(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{143:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"正则相关的题目"}},[t._v("正则相关的题目")]),a("ol",[a("li",[t._v("给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配；匹配应该覆盖整个字符串 (s) ，而不是部分字符串。")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("'.' 匹配任意单个字符。\n'*' 匹配零个或多个前面的元素。")]),a("p",[t._v("说明:")]),a("ul",[a("li",[t._v("s 可能为空，且只包含从 a-z 的小写字母。")]),a("li",[t._v("p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。")])])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("isMatch")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" p "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\./g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("all"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[a-z]"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"^"')]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("p"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token string"}},[t._v('"$"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配；两个字符串完全匹配才算匹配成功。")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("'?' 可以匹配任何单个字符。\n'*' 可以匹配任意字符串（包括空字符串）。")]),a("p",[t._v("说明:")]),a("ul",[a("li",[t._v("s 可能为空，且只包含从 a-z 的小写字母。")]),a("li",[t._v("p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。")])])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("isMatch")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" p "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sLen "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pLen "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index_s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index_p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mark_s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 匹配进行则更新下标，否则则匹配失败")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_s"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("sLen"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// s与p都为非模式字符或 ?，更新其循环下标")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index_s"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v("p"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index_p"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index_p"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token string"}},[t._v("'?'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            index_s"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index_p"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 模式为*时，s 和 p记录*的位置，只更新p循环的下标")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index_p"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("===")]),a("span",{attrs:{class:"token string"}},[t._v("'*'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            mark_s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" index_s"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            start_p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" index_p"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index_p"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// s和p循环下标不一致时且为非模式时，更新s和p循环的下标及 * 的位置")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start_p "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            index_s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mark_s "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index_p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" start_p "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            mark_s"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// s循环结束，但p模式还没循环，如果直至结束都是都是*，则更新下标，否则则匹配失败")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_p "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" pLen"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index_p"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'*'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            index_p"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n")])])])}],!1,null,null,null);s.default=o.exports}}]);