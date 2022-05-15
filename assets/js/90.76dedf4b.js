(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{281:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正则"}},[t._v("正则")]),t._v(" "),a("h2",{attrs:{id:"引擎-dfa-nfa-posix-nfa"}},[t._v("引擎：DFA, NFA, POSIX NFA")]),t._v(" "),a("p",[t._v("DFA: 文本主导引擎")]),t._v(" "),a("p",[t._v("NFA: 表达式主导引擎")]),t._v(" "),a("p",[t._v("POSIX NFA: 它们可以确保已找到了可能的最长的匹配之前，它们将继续回溯。")]),t._v(" "),a("p",[t._v("因此，POSIX NFA 引擎的速度慢于传统的 NFA 引擎；")]),t._v(" "),a("h2",{attrs:{id:"正则原理"}},[t._v("正则原理")]),t._v(" "),a("ul",[a("li",[t._v("源字符串，都有字符和位置【从0开始逐个匹配】")]),t._v(" "),a("li",[t._v("横向匹配----长度不固定；纵向模糊匹配----不确定的字符[xxxx]")]),t._v(" "),a("li",[t._v("占有字符：子表达式匹配到的是字符内容，而非位置，且在最终结果中；互斥的，即一个字符同一时间只能由一个子表达式匹配")]),t._v(" "),a("li",[t._v("零宽度：子表达式匹配到的是仅仅是位置，或者匹配的内容并不保存到最终结果中；非互斥，即可以同时由多个零宽度的子表达式匹配。如：^,")]),t._v(" "),a("li",[t._v("?= 正向环视 匹配当前位置，右边是否有相应限定的字符出现。")]),t._v(" "),a("li",[t._v("?< 反向环视")]),t._v(" "),a("li",[t._v("如 "),a("code",[t._v("/^(?=D)[E-F]+$/")]),t._v(" "),a("ol",[a("li",[t._v("位置开始位置0；")]),t._v(" "),a("li",[t._v("零宽度子表达式之间不互斥，即同一个位置可以由多个零宽度子表达式匹配，所以环视从位置0开始尝试匹配，右侧为字符D；才为匹配成功；")]),t._v(" "),a("li",[t._v("因为上个匹配只进行匹配位置，结果不保存到最终结果，如果上个匹配成功的位置为0，那么下面也是从0位置开始匹配。")])])])]),t._v(" "),a("h2",{attrs:{id:"性能提升"}},[t._v("性能提升")]),t._v(" "),a("ul",[a("li",[t._v("优化尝试（比较）次数与回溯次数")]),t._v(" "),a("li",[t._v("减少回溯次数【减少循环查找同一个字符次数】")]),t._v(" "),a("li",[t._v("测试与优化工具：regexbuddy")]),t._v(" "),a("li",[t._v("使用正确的边界匹配器（^、$、\\b、\\B等），限定搜索字符串位置")]),t._v(" "),a("li",[t._v("使用具体的元字符、字符类（\\d、\\w、\\s等） ，[^]少用”.”字符")]),t._v(" "),a("li",[t._v("使用正确的量词（+、*、?、{n,m}），如果能够限定长度，匹配最佳")]),t._v(" "),a("li",[t._v("使用非捕获组、原子组，减少没有必要的字匹配捕获用(?😃")]),t._v(" "),a("li",[t._v("进行分组匹配 | + g模式")])]),t._v(" "),a("h2",{attrs:{id:"正则特殊表示"}},[t._v("正则特殊表示")]),t._v(" "),a("ul",[a("li",[t._v("\\b 单词边界 \\f 换页符  \\n换行符  \\r 回车符 \\t 制表符 \\v 垂直制表符  \\x20 空白符  \\x0A(16)  \\011(8)  posix字符类")]),t._v(" "),a("li",[t._v("\\b: 单词与空格之间，一边为\\w，一边为非\\w")]),t._v(" "),a("li",[t._v("\\B: 左右两边都为\\w与\\W之间的位置，\\w与^之间的位置，\\w与$之间的位置")]),t._v(" "),a("li",[t._v("(?=p) p是子模式，即p前面的位置；(?!p) 不是p前面的位置")]),t._v(" "),a("li",[t._v("(?<p) p后面的位置；(?!<p) 不是p后面的位置")]),t._v(" "),a("li",[t._v("字符组与排查字符组及量词")]),t._v(" "),a("li",[t._v("贪婪与惰性模式----?")]),t._v(" "),a("li",[t._v("正向预查(?=p)与(?!p)、反向预查(?<=)与(?<!):更多的是作为"),a("code",[t._v("限制条件使用")]),t._v(" "),a("ul",[a("li",[t._v("不消耗字符。也就是说，在一个匹配发生后，匹配字符之后立即开始下一次匹配的搜索，而"),a("code",[t._v("不是从包含预查的字符之后")]),t._v("开始")])])]),t._v(" "),a("li",[t._v("匹配位置----^、$、\\b、\\B，正向预查(?=p)与(?!p)、反向预查(?<=)；\n"),a("ul",[a("li",[t._v("\\b 单词边界，即\\W与\\w 直接的位置，包括\\w 和^，\\w 和$直接的位置，剩下的都是\\B")]),t._v(" "),a("li",[t._v("p 为一个子模式，(?=p)匹配的是 p 前面的位置；")]),t._v(" "),a("li",[t._v("p 为一个子模式，(?!p)匹配的是前面不是 p 的位置")])])]),t._v(" "),a("li",[t._v("括号----分组捕获与非捕获----$1, $2...----反向引用\\1...\\10；\n"),a("ul",[a("li",[t._v("表示\\和 0时，使用(?:\\1)0或\\1(?:0)")]),t._v(" "),a("li",[t._v("引用不存在的分组：如\\2，即是对 2的转义")]),t._v(" "),a("li",[t._v('分组后面有量词时，则捕获的是最后一次的匹配，如：/(\\d)+ \\1/.test("12345 5")')])])]),t._v(" "),a("li",[t._v("分支----|")]),t._v(" "),a("li",[t._v("回溯\n"),a("ul",[a("li",[t._v("贪婪模式下：模糊度过高，直接匹配到比较考结束位置了，下一个匹配项无法匹配，则需要向前回溯，如下面横向对比的例子-----使字符组匹配尽量精确，不要范围过大")]),t._v(" "),a("li",[t._v("惰性模式下：匹配过少，后面的匹配不了，前一个匹配要再想后匹配，直到后一个匹配成功或者整体匹配失败")]),t._v(" "),a("li",[t._v("分支结构：多条匹配道路，第一个使整体匹配成功的道路，匹配不成功也要进行多次回溯")])])]),t._v(" "),a("li",[t._v("修饰符---g, i, m多行匹配，只影响^和$，二者变成行的概念，即行开头和行结尾")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 好的正则例子:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\*[^/]\\*\\*\\/$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多行注释")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\/[^\\n]\\*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单行注释")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\\x20\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\/[^0-9\\n]\\*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不以a开始")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\\da"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g\n")])])]),a("h3",{attrs:{id:"获取匹配的子捕获-regexp-2-express"}},[t._v("获取匹配的子捕获: RegExp.$2 != express")]),t._v(" "),a("h3",{attrs:{id:"反向引用-1-2"}},[t._v("反向引用："),a("code",[t._v("\\1 \\2")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("and"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\\1jerry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(?=(.+.+))\\1+X")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n")])])]),a("h3",{attrs:{id:"分组-零宽度断言-搜索与反向搜索及特殊表达"}},[t._v("分组, 零宽度断言, 搜索与反向搜索及特殊表达")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("reg?<name>exp")]),t._v(" 匹配exp, 并将捕获文本放到名称为name的组里")]),t._v(" "),a("li",[a("code",[t._v("(?:exp)")]),t._v(" 不捕获")]),t._v(" "),a("li",[a("code",[t._v("?=exP")]),t._v(" 正向肯定环视, 匹配exp前面的位置；如 "),a("code",[t._v("/^(?:\\/(?=$))?$/i, /^\\/dialog(?:\\/(?=$))?$/i")]),t._v(",")]),t._v(" "),a("li",[a("code",[t._v("?!exp")]),t._v(" 正向否定环视, 匹配后面跟的不是exp的位置；如 "),a("code",[t._v("/\\((?!\\?)/g")])]),t._v(" "),a("li",[a("code",[t._v("?<=exp")]),t._v(" 逆向肯定，匹配exp后面的位置")]),t._v(" "),a("li",[a("code",[t._v("?<\\!epx")]),t._v(" 逆向否定，匹配前面不是exp的位置")]),t._v(" "),a("li",[a("code",[t._v("(?#comment)")]),t._v(" 阅读注释")]),t._v(" "),a("li",[a("code",[t._v("$&")]),t._v(" 全文本")]),t._v(" "),a("li",[t._v("$` 匹配字符串的左边文本")]),t._v(" "),a("li",[t._v("$' 匹配字符串的右边文本")]),t._v(" "),a("li",[t._v("$$  $转移")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例子")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$&,'")]),t._v("\n")])])]),a("h3",{attrs:{id:"特殊属性的意义"}},[t._v("特殊属性的意义")]),t._v(" "),a("ul",[a("li",[t._v("input, "),a("code",[t._v("RegExp.$_")]),t._v(" 整个待匹配字符串")]),t._v(" "),a("li",[t._v("leftContext, RegExp['$`'] 上次匹配之前的子字符串")]),t._v(" "),a("li",[t._v("lastMatch, "),a("code",[t._v("RegExp['$&']")]),t._v(" 最后匹配的字符串")]),t._v(" "),a("li",[t._v("multiline, "),a("code",[t._v("RegExp['$\\*']")]),t._v(" 是否所有表达式都使用多行模式的布尔值")]),t._v(" "),a("li",[t._v("lastParen, "),a("code",[t._v("RegExp['$+']")]),t._v(" 最后匹配的分组")])]),t._v(" "),a("h3",{attrs:{id:"汉字范围-u4e00-u9fff"}},[t._v("汉字范围: "),a("code",[t._v("[\\u4e00-\\u9fff]")])]),t._v(" "),a("h3",{attrs:{id:"回溯与优先匹配"}},[t._v("回溯与优先匹配")]),t._v(" "),a("p",[t._v("回溯：正则表达式的强大功能中心，它使得表达式强大、灵活、可以匹配非常复杂的模式。同时这种强大需要付出一定的代码；回溯是影响表达式引擎性能的单个最重要的因素。\n优先匹配：如果匹配到一个位置，需要做「尝试匹配或者跳过匹配」这样的选择的时候，对于量词匹配，引擎会优先作出进行尝试行为，而忽略量词优先的时候则进行跳过尝试匹配。如ab?c 匹配abc时，b存在备选状态，如果匹配成功则放弃备选状态；如果匹配的ac则先进行匹配尝试，另一种状态放入到备选状态，如果尝试匹配失败，则进行回溯；")]),t._v(" "),a("p",[t._v("放弃量词优先：ab??c，这时先放弃量词优先，跳过了的匹配，先匹配后面的。")]),t._v(" "),a("ol",[a("li",[t._v("线性比较, 非可先限定符不会进行回溯, 如{2}, 如果不包含可选限定符或替换构造，则正则能近线性时间运行。")]),t._v(" "),a("li",[t._v("使用可选限定或替换构造的回溯")]),t._v(" "),a("li",[t._v("嵌套的可靠限定符的回溯")]),t._v(" "),a("li",[t._v("控制回溯：非回溯子表达式，后行断言， 先行断言")]),t._v(" "),a("li",[t._v("多选结构，尽量让匹配成功可能性大的情况放在前边，多选状态在每个位置多出多个备选状态，以便回溯  a|b|c|d")])]),t._v(" "),a("p",[t._v("优化策略")]),t._v(" "),a("ol",[a("li",[t._v("不需要捕获的地方使用(?:expression) 。")]),t._v(" "),a("li",[t._v("如果括号是非必须的，请不要加括号。")]),t._v(" "),a("li",[t._v("不要滥用字符数组，比如[.],请直接用. 。")]),t._v(" "),a("li",[t._v("使用合适的位置匹配，如^ $ ，这会加速定位。")]),t._v(" "),a("li",[t._v("从两次中提取必须元素，如:x+写成xx*，a{2,4}写成aa{0,2}。")]),t._v(" "),a("li",[t._v("提取多选结构开头的相同字符，如the|this 改成th(?:e|is)。（如果你的正则引擎不支持这么使用就改成th(e|is)）；尤其是锚点，一定要独立出来，这样很多正则编译器会根据锚点进行特别的优化: ^123|^abc 改成^(?:123|abc)。同样的$也尽量独立出来。")]),t._v(" "),a("li",[t._v("多选结构后边的一个表达式放入多选结构内，这样能够在匹配任何一个多选结构的时候在不退出多选结构的状态下查看后一匹配，匹配失败的更快。这种优化需要谨慎使用。")]),t._v(" "),a("li",[t._v("忽略优先匹配和优先匹配需要你视情况而定。如果你不确定，请使用匹配优先，它的速度是比忽略优先快的。")]),t._v(" "),a("li",[t._v("拆分较大正则表达式成一个个小的正则表达式，这是非常有利于提高效率的。")]),t._v(" "),a("li",[t._v("模拟锚点，使用合适的环视结构来预测合适的开始匹配位置，如匹配十二个月份，可以先预查首字符是否匹配：(?=JFMASOND)(?:Jan|Feb|...|Dec)。这种优化请根据实际情况使用，有时候环视结构开销可能更大。")]),t._v(" "),a("li",[t._v("很多情况下使用固化分组和占有优先量词能够极大提高速度。")]),t._v(" "),a("li",[t._v("避免像(this|that)*这样的几乎无尽的匹配。上边提到的 (...+)*也类似。")]),t._v(" "),a("li",[t._v("如果能简单的匹配大幅缩短目标字符串，可以进行多次正则匹配，经过实践十分有效。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);