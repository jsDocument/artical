(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,n,a){t.exports=a.p+"assets/img/PastedGraphic.b60d3942.png"},168:function(t,n,a){t.exports=a.p+"assets/img/PastedGraphic_1.de2e5b21.png"},169:function(t,n,a){t.exports=a.p+"assets/img/PastedGraphic_2.10e7a6e2.png"},230:function(t,n,a){"use strict";a.r(n);var s=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"关于硬件加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于硬件加速"}},[t._v("#")]),t._v(" 关于硬件加速")]),t._v(" "),s("h2",{attrs:{id:"各个角色在渲染过程中的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各个角色在渲染过程中的作用"}},[t._v("#")]),t._v(" 各个角色在渲染过程中的作用")]),t._v(" "),s("ul",[s("li",[t._v("JavaScript：JavaScript 实现动画效果，DOM 元素操作等。")]),t._v(" "),s("li",[t._v("Style（计算样式）：确定每个 DOM 元素应该应用什么 CSS 规则。")]),t._v(" "),s("li",[t._v("Layout（布局）：计算每个 DOM 元素在最终屏幕上显示的大小和位置。由于 web 页面的元素布局是相对的，所以其中任意一个元素的位置发生变化，都会联动的引起其他元素发生变化，这个过程叫 reflow。元素的规模尺寸，布局，隐藏")]),t._v(" "),s("li",[t._v("Paint（绘制）：在多个层上绘制 DOM 元素的的文字、颜色、图像、边框和阴影等。")]),t._v(" "),s("li",[t._v("Composite（渲染层合并）：按照合理的顺序合并图层然后显示到屏幕上。")])]),t._v(" "),s("blockquote",[s("p",[t._v("硬件渲染 WebKit 会依据指定条件决定将那些 RenderLayer 对象组合在一起形成一个新层并缓存在 GPU，这些新层我们统称为合成层（Compositing Layer）。\n这些合成层提升成独立的层，被独立出来之后，便不会再影响其他 dom 的布局。\n如果发生 偏移、透明度等等变换 GPU 要做的只是把更新的合成层进行相应的变换并送入 Compositor 重新合成即可，利用这个优点我们可以把页面中一些布局经常变换的 dom 提升到独立的层。\n一个页面是由多个图层最后形成一个完整的合成层才被渲染出来。")])]),t._v(" "),s("h2",{attrs:{id:"如何触发合成层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何触发合成层"}},[t._v("#")]),t._v(" 如何触发合成层")]),t._v(" "),s("ul",[s("li",[t._v("根节点 document")]),t._v(" "),s("li",[t._v("HTML5 Video或者Canvas元素")]),t._v(" "),s("li",[t._v("元素有一个 z-index 较低且包含一个复合层的兄弟元素")]),t._v(" "),s("li",[t._v("3D 或透视变换(perspective，transform) CSS 属性 比如常用的 （设置translateZ()、backface-visibility为hidden）")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果有一个元素，它的兄弟元素在复合层中渲染，而这个兄弟元素的z-index比较小，那么这个元素（不管是不是应用了硬件加速样式）也会被放到复合层中。\n使用 3D 硬件加速提升动画性能时，最好给元素增加一个 z-index 属性，人为干扰复合层的排序，可以有效减少 chrome 创建不必要的复合层，提升渲染性能，移动端优化效果尤为明显。")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 关键字值 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scroll-position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" contents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* <custom-ident>示例 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* <custom-ident>示例 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 两个<animateable-feature>示例 */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 全局值 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inherit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" initial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"会继承的属性-line-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#会继承的属性-line-height"}},[t._v("#")]),t._v(" 会继承的属性: line-height")]),t._v(" "),s("p",[t._v("css: line-height, vertical-align")]),t._v(" "),s("ol",[s("li",[t._v("line-height的数字值与font-size有关")]),t._v(" "),s("li",[t._v("vertical-align的百分比值 和line-height值有关")]),t._v(" "),s("li",[t._v("inline元素的vertical-align默认值是什么？baseline，但为什么图片与其他行内元素不在同一个水平线上？因为img默认表现与inline-block表现一样,  所以表现为元素margin底边缘; baseline指的是x的低边缘")]),t._v(" "),s("li",[t._v("父元素的基线，中线。。。是怎么决定的？每个字体在定义的时候, 就有基线？")]),t._v(" "),s("li",[t._v("line元素的高度是由line-height决定的,")]),t._v(" "),s("li",[t._v("BFC, IFC")])]),t._v(" "),s("p",[t._v("每个字体都会绘出自己的容器em-square")]),t._v(" "),s("p",[t._v("font-size\n1em 与 字体大小相同, em-box高度即为字体大小")]),t._v(" "),s("p",[s("img",{attrs:{src:a(167),alt:'"行高"'}}),t._v("\n￼\ncontent-area 高度是 line-height")]),t._v(" "),s("p",[t._v("vertical-align: middle是与x-height的一半对齐")]),t._v(" "),s("p",[t._v("font-size:0 可以让line-height变为0, 决定line-height的缝隙问题")]),t._v(" "),s("p",[t._v("line-height: 默认normal(1或1.2) 无单位时相对于font-size")]),t._v(" "),s("p",[s("img",{attrs:{src:a(168),alt:'"盒模型"'}}),t._v("\n￼\n每一行都有一个line-box, line-box的高度基本由其中最大的内联盒子决定, 但爱vertical-align的影响")]),t._v(" "),s("p",[t._v("containing-box外层盒子")]),t._v(" "),s("p",[t._v("struct 宽度为0的支柱, 但其有自己的line-height")]),t._v(" "),s("p",[s("img",{attrs:{src:a(169),alt:'"行高"'}}),t._v("\n￼\n内联元素之间本来就是有间隙的, 但底部的间隙是由于struct的行高造成的，内联元素的基线与其基线不同造成行高会撑起一部分")]),t._v(" "),s("p",[t._v("vertical-align接受值：提高或降低合子的基线, 值相对于line-height计算的")]),t._v(" "),s("p",[t._v("vertical-align: baseline;\nvertical-align: sub;\nvertical-align: super;\nvertical-align: text-top;\nvertical-align: text-bottom;\nvertical-align: middle;\nvertical-align: top;\nvertical-align: bottom;")]),t._v(" "),s("p",[t._v("/* <长度> 值 */\nvertical-align: 10em;\nvertical-align: 4px;")]),t._v(" "),s("p",[t._v("/* <百分比> 值 */\nvertical-align: 10%;")]),t._v(" "),s("p",[t._v("/* 全局值 */\nvertical-align: inherit;\nvertical-align: initial;\nvertical-align: unset;")])])}],e=a(0),i=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),s,!1,null,null,null);n.default=i.exports}}]);