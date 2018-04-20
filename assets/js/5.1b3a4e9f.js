(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{88:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"表达式解析的相关实现"}},[t._v("表达式解析的相关实现")]),n("h3",{attrs:{id:"parsetext-text-解析-expression-的字符串表达式"}},[t._v("parseText(text) 解析"+t._s(t.expression)+"的字符串表达式")]),t._m(0),n("h3",{attrs:{id:"parsedirective"}},[t._v("parseDirective")]),t._m(1),n("h3",{attrs:{id:"parseexpression"}},[t._v("parseExpression")]),t._m(2),n("h3",{attrs:{id:"parsepath"}},[t._v("parsePath")]),t._m(3),t._m(4)])},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[n("code",[t._v("tagRE = /\\{\\{\\{(.+?)\\}\\}\\} \\| \\{\\{(.+?)\\}\\}/")])]),n("li",[t._v("lastIndex = tagRE.lastIndex = 0")]),n("li",[t._v("循环match = tagRE.exec(text),\n"),n("ul",[n("li",[t._v("index = match.index 开始匹配到的位置")]),n("li",[t._v("index > lastIndex时, 更新token [{value: text.slice(lastIndex, index)}]; lastIndex为上一轮匹配结束的位置")]),n("li",[t._v("更新tokens[{tag: true, value为match[1或2], html, oneTime其中value包含*时}]")]),n("li",[t._v("更新lastIndex = index + match[0].length, 更新结束位置")])])]),n("li",[t._v("lastIndex < text.length时, 更新tokens[{value: text.slice(lastIndex)}]匹配上次匹配结束到最后内容")]),n("li",[t._v("缓存token并返回")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("循环表达式字符str\n"),s("ol",[s("li",[this._v("判断是否为| 且前后字符不为|,\n"),s("ol",[s("li",[this._v("如果dir.expression不存在, 则更新下次开始的位置lastFilterIndex = i+1, 更新dir.expression = str.slice(0, i)")]),s("li",[this._v("否则更新filters为 lastFIlterIndex,i; lastFilterIndex = i + 1")])])])])]),s("li",[this._v("循环结束 dir.expression不存在, 则dir.expression = str.slice(0, i)")]),s("li",[this._v("否则如果lastFilterIndex != 0 , 将剩余字符更新为 filter")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v("定义get")]),n("ol",[n("li",[t._v("简单的路径表达式(包含变量 | [字符串] | [number] | new | typeof | void) 且不包含 [时, 直接为'scope.'+表达式构造匿名函数")]),n("li",[t._v("对表达式(body)进行改造\n"),n("ol",[n("li",[t._v("对包含「{ 变量 :」 或 「, 变量:」或 字符串 或 new 或 typeof 或 void 匹配中包含\\n的替换成\\n, 再存入到saved数组")]),n("li",[t._v('将匹配项替换成 "i", i当前匹配项在saved的下标')]),n("li",[t._v("去掉表达式中所有的空格")]),n("li",[t._v("body = ' ' + body")]),n("li",[t._v("将 「非.特殊符 + 变量」的 包含下标的替换回saved数组项的内容 返回 特殊符 + 'scope.' + 变量")]),n("li",[t._v("将表达式中的下标替换回saved数组当中的内容")])])]),n("li",[t._v("再对改造过的表达式创建匿名函数")])])]),n("li",[n("p",[t._v("定义set(exp)")]),n("ol",[n("li",[t._v("解析exp到path")]),n("li",[t._v("返回匿名函数(scope, val){ setPath(scope, path, value)}")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("p",[t._v("comipleSetter(exp)")]),n("ol",[n("li",[t._v("根据exp字符, 分为以下几种类型")])]),n("blockquote",[n("ol",[n("li",[t._v("ws: 空格符\n2. ident: 字母_ $\n3. 本来的字符: [ ] . \" ' 0\n4. number: 1-9\n5. else\n6. eof: 字符等于undefined")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("定义动作push: 增加keys; append: 定义或更新key, 用newChar来更新; inc_sub_path_depth: append 然后更新深度subPathDepth[开始一个子路径]; push_sub_path: subPathDepth>0说明在子路径内, 更新mode = IN_SUB_PATH, append, 否则 将子路径key处理, 根据key值返回false 或执行 push")]),n("li",[t._v("定义不同模式下, 针对不同「类型」所对应的模式及动作: pathStateMachine为数组, [{type: [0], type: [1, 0]}] type所对应的为[状态, 动作]")]),n("li",[t._v("path状态: 0 beforePath(默认), 1 inPath, 2 beforeIdent, 3 inIdent, 4 inSubPath, 5 inSingleQuote, 6 inDoubleQuote, 7 afterPath, 8 error")]),n("li",[t._v("循环路径每个字符c, 取出字符对滴的type, 根据当前模式mode取出一组[不同type下的对应的模式与动作]typeMap, 再根据type取出相应的「新模式、动作」transition, 更新mode, 取出动作函数")]),n("li",[t._v("如果是是对「'」或「\"」进行转义的字符, 更新index 与 newChar, 如果error直接返回")]),n("li",[t._v("transition有动作时, 执行动作为false时, 直接返回")]),n("li",[t._v("将keys返回")])])]),n("li",[n("p",[t._v("setPath(obj, path, val)")]),n("ol",[n("li",[t._v("path为string, 解析path")]),n("li",[t._v("循环path, last为obj的副本,")]),n("li",[t._v("如果不是数组的最后一项 且 obj[key]不为对象, set(last, key, obj[key])")]),n("li",[t._v("否则如果obj为数组obj.$set(key, val) 来更新, 如果key in obj, obj[key] = val; 否则set(obj, key, val)")]),n("li",[t._v("返回true")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pathStateMachine "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 模式下的模式或动作")]),t._v("\npathStateMachine"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("BEFORE_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'ws'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("BEFORE_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'ident'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'['")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'eof'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("AFTER_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npathStateMachine"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'ws'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("BEFORE_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'['")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'eof'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("AFTER_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npathStateMachine"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("BEFORE_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'ws'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("BEFORE_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'ident'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npathStateMachine"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'ident'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'0'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'number'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'ws'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("PUSH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'.'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("BEFORE_IDENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("PUSH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'['")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("PUSH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'eof'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("AFTER_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("PUSH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npathStateMachine"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"\'"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SINGLE_QUOTE")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'\"'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_DOUBLE_QUOTE")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'['")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("INC_SUB_PATH_DEPTH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("']'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("PUSH_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'eof'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ERROR")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'else'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npathStateMachine"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SINGLE_QUOTE")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"\'"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'eof'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ERROR")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'else'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SINGLE_QUOTE")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npathStateMachine"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_DOUBLE_QUOTE")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'\"'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_SUB_PATH")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'eof'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ERROR")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'else'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token constant"}},[t._v("IN_DOUBLE_QUOTE")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("APPEND")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])}],!1,null,null,null);s.default=o.exports}}]);