(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{69:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"排序算法"}},[t._v("排序算法")]),a("ul",[a("li",[a("p",[t._v("交换排序")]),a("ol",[a("li",[t._v("冒泡排序：从第一个到最后一个，相邻元素依次循环比较，j与j+1比较；内循环为len-1-i时结束；以下为改进该算法：")]),a("li",[t._v("定义一个标志，该趟未进行一次交换，则排序结束。")]),a("li",[t._v("改进：记录最后一次进行交换的位置，为下次i循环做准备")]),a("li",[t._v("同时进行正向与反向比较，移位")]),a("li",[t._v("快速排序：left<---\x3eright，以下为具体步骤：")]),a("li",[t._v("取第一个为基数，从右边开始，找比基数小的数；从左边第二个找比基数大的数")]),a("li",[t._v("最后将基数与最后一个位置进行交换，基数归位；最后一个位置变成了基数，原来的基数变为另一组的基数")]),a("li",[t._v("再对上面分的两个区块进行比较排序")])])]),a("li",[a("p",[t._v("插入排序")]),a("ol",[a("li",[t._v("直接插入：从左到右，第一个元素为已排序元素，取下一个元素与其比较，根据大小存入相应位置；内层倒序循环已排好的序列，满足条件时移位。")]),a("li",[t._v("希尔排序：对插入排序的改进，缩小增量排序，")])])]),a("li",[a("p",[t._v("选择排序")]),a("ol",[a("li",[t._v("直接选择：循环0~n，选最小与0交换；1~n依次交换")]),a("li",[t._v("堆排序：i结点的父结点(i-1)/2，左右子节点：2"),a("em",[t._v("i+1 或 2")]),t._v("i+2；堆(是完全二叉树或近似完全二叉树)：父节点的键值总是大于或等于(小于或等于)任何一个子节点的键值；每个结点的左子树和右子树都是一个二叉树。一般用数组表示堆")]),a("li",[t._v("将R1~Rn建成一个大根堆，堆为无序区(从len/2开始调整，直到第一个节点，找出节点与两个子节点，选出最大(最小)，再进行交换，再调用调整过的堆)")]),a("li",[t._v("R1与Rn交换，此时无序区：R1~Rn-1，有序区：Rn；满足R1~Rn-1 <= Rn的值。。。。")]),a("li",[t._v("过程时间复杂度与堆的深度有关，是lgn操作")])])]),a("li",[a("p",[t._v("归并排序：")]),a("ol",[a("li",[t._v("使子序列有序，再使子序列段间有序，将已有序的子序合并成一个有序表。二路归并。")]),a("li",[t._v("i<=j, i&k, j&k; 其中一个有序表取完，则闭再将另一个有序表中剩余的元素复制到r中, 下标k到下标t的单元")])])]),a("li",[a("p",[t._v("基数排序：")])])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 冒泡, 如果j=i+1呢？")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buble")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v("  j "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" len "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        temp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 插入排序")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("insert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("len"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 与左边相比，遇到需要插入的元素")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      temp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 找插入位置")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" temp "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 位置向后移")]),t._v("\n        nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 堆排序")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("main")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lastIndex "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" startIndex "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastIndex "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 最后一个节点的父节点开始")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" startIndex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("swap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastIndex"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 末位与头交换")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastIndex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    temp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("swap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("swap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 希尔排序")]),t._v("\n\n")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 快速")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("quick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  left "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  right "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" len"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" high "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" right"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" high"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base"),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("high"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      high"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base"),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      low"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" high"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      t"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("high"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("high"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 基数的位置")]),t._v("\n  nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  nums"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" base"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("quick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("quick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("macrotasks，microtasks，batchedtasks, boundaries， effects等列队。\nmacrotasks，宏列队，主进程，一个页面只有一个， ReactDOM.render就会将第一个参数丢进去。")]),a("p",[t._v("microtasks，微列队，子进程，每棵虚拟DOM树都有一个，放在根节点中。当组件执行setState后，它会找到根节点的microtasks，然后放进去。然后在下次唤起performWork时，会从所有根节点中收集它们。\nbatchedtasks，批量处理的任务，它们不能被合并。microtasks中的任务，都是由setState产生的，我们知道对某个组件进行多次setState，React在一次生命周期中会执行一次更新。batchedtasks则不一样，它们是延后到下次生命周期，因此不能在这次生命周期中就被执行了。\nboundaries，放着边界组件，边界组件会有很高的优先级，确保它们下次在performWork中，加入macrotasks的最前面。\neffects，它是commit阶段执行的macrotasks 列队。\nworkLoop有两个DFS遍历，reconcileDFS与commitDFS。reconcileDFS负责更新虚拟DOM，commitDFS负责更新真实DOM。为什么强调使用DFS，因为这东西对我们存取context, container非常方便。\n注意：")])])}],!1,null,null,null);s.default=o.exports}}]);