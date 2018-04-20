(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{54:function(l,i,e){"use strict";e.r(i);var t=e(0),v=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var l=this,i=l.$createElement,e=l._self._c||i;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"其他"}},[l._v("其他")]),e("h3",{attrs:{id:"客户端存储"}},[l._v("客户端存储")]),e("ol",[e("li",[l._v("客户端存储有哪些方式\n"),e("ul",[e("li",[l._v("cookie, sessionStorage, loacalStorage 及非关系数据库")])])]),e("li",[l._v("cookie, sessionStorage和localStorage的区别\n"),e("ul",[e("li",[l._v("cookie可以手动设置失效时间, 默认为会话级")]),e("li",[l._v("sessionStorage的存储时长是会话级")]),e("li",[l._v("localStorage的存储时长为永久, 除非用户手动用浏览器工具删除")])])]),e("li",[l._v("cookie由哪些部分组成\n"),e("ul",[e("li",[l._v("Expires 最长有效期")]),e("li",[l._v("Max-Age 失效之前需要经过的秒数")]),e("li",[l._v("Domain 指定cookie可以送达的主机名")]),e("li",[l._v("Path 指定一个URL路径, 这个路径必须出现在要请求资源的路径中才可以发送cookie首部")]),e("li",[l._v("Secure 一个带有安全属性的cookie, 请求在使用SSH和HTTPS时才会被发送到服务器")]),e("li",[l._v("HttpOnly 不能通过javascript.cookie、XMLHttpRequest、Request的API进行访问")])])]),e("li",[l._v("Hybrid环境下, 使用客户端存储有哪些需要注意")])]),e("h3",{attrs:{id:"数据类型"}},[l._v("数据类型")]),e("ol",[e("li",[e("p",[l._v("javascript的基础数据类型有哪些？")]),e("ul",[e("li",[l._v("undefined, null, Number, String, Boolean, Symbol")])])]),e("li",[e("p",[l._v("javascript的引用数据类型有哪些? 区别是？")]),e("ul",[e("li",[l._v("Array, Data, String, Function, Regexp, Object")])])]),e("li",[e("p",[l._v("如何判断一个变量为数组？")]),e("ul",[e("li",[l._v("Object.prototype.toString.call()")]),e("li",[l._v("isArray()")])])]),e("li",[e("p",[l._v("undefined 与 null的区别")]),e("ul",[e("li",[l._v("两个数据类型都只有一个值")]),e("li",[l._v("都没有方法")]),e("li",[l._v("转换为布尔值都为false")]),e("li",[l._v("null是关键字, 而undefined不是")]),e("li",[l._v("null是一个空对象, 进行数字类型转换时为0, typeof运算返回object")]),e("li",[l._v("undefined 是一个window属性, 进行数字类型转换时为NaN, typeof运算返回undefined")])])]),e("li",[e("p",[l._v("隐式类型转换, javascript底层都做了哪些?")]),e("ul",[e("li",[l._v("对象转换为原始数据时, 先调用对象的valueOf方法, 如果返回结果不是原始数据类型的值, 再调用其toString方法")]),e("li",[l._v("原始数据类型之间转换, 直接调用对应的构造函数进行转换")]),e("li",[l._v("转换为布尔后为false的有: 0, -0, undefined, null, 空字符串, NaN")])])]),e("li",[e("p",[l._v("ES6中的Symbol")]),e("ul",[e("li",[e("p",[l._v("是Es6新增的数据类型, 它的每个值都是唯一的, 即使两个完全相同的变量构造出来的Symbol也不相等")])]),e("li",[e("p",[l._v("用来消除魔法字符串")])])])]),e("li",[e("p",[l._v("ES6中的Map 与 Set, 类数组")])]),e("li",[e("p",[l._v("ES6中的iterator")])]),e("li",[e("p",[l._v("async的实现")])]),e("li",[e("p",[l._v("如何把字符串转换成数组？")]),e("ul",[e("li",[l._v("join方法")]),e("li",[l._v("Array.from(data, fn)")]),e("li",[l._v("Array.prototype.slice.call")])])]),e("li",[e("p",[l._v("如何把类数据转换为数组, 如argument与selector返回的DOM列表")])])]),e("h3",{attrs:{id:"数字相关题目"}},[l._v("数字相关题目")]),e("ol",[e("li",[l._v("判断一个题目为NaN？\n"),e("ul",[e("li",[l._v("先判断是否为number类型 再isNaN()")]),e("li",[l._v("利用唯一一个不等于他本身的值的特性, n !== n")]),e("li",[l._v("Object.is()")])])]),e("li",[l._v("判断两个浮点数相等\n"),e("ul",[e("li",[l._v("计算误差范围值, Math.pow(2, -52), Es6中的Number.EPSILON")]),e("li",[l._v("两个值相减, 误差小于这个范围")])])])]),e("blockquote",[e("p",[l._v("Number.MAX_VALUE, Number.MIN_VALUE 最大浮点数与最小浮点数")])]),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[l._v("检查一个数值是否为整数")]),e("ul",[e("li",[l._v("Number.isInterger()")]),e("li",[l._v("判断类型为number且对1求余等于0")])])]),e("li",[e("p",[l._v("当一个变量显式类型转换时, 遵循的规则是什么")])]),e("li",[e("p",[l._v("Number([])和Number([1,2,3])的值分别是？说明其原理")])]),e("li",[e("p",[l._v("parseInt()方法遵循的运算规则")])]),e("li",[e("p",[l._v("对一个值进行取整的方法有多少种, 分别是？")]),e("ul",[e("li",[l._v("parseInt")]),e("li",[l._v("n|0, ~~n, n>>0 只能对32位的数字进行转换, 能处理的为2^(+/-)31的范围")]),e("li",[l._v("ceil, floor, round")])])])]),e("h3",{attrs:{id:"promise相关知识点"}},[l._v("Promise相关知识点")]),e("ol",[e("li",[l._v("then方法的参数(fn,fn)与返回值")]),e("li",[l._v("缺省返回值会认识返回的为undefined,")])]),e("h3",{attrs:{id:"日期"}},[l._v("日期")]),e("ol",[e("li",[l._v("date接受几种形式的参数")]),e("li",[l._v("优雅的给出今天星期几\n"),e("ul",[e("li",[l._v("'日一二三四五六'.charAt(new Date().getDay())")])])]),e("li",[l._v("将日期输出成指定格式")]),e("li",[l._v("计算两个时间点的时间差")]),e("li",[l._v("获取几天后的时间点对应的时间对象")])]),e("h3",{attrs:{id:"闭包"}},[l._v("闭包")]),e("ol",[e("li",[l._v("闭包是有权限访问其他函数作用域内变量的一个函数")]),e("li",[l._v("JS的作用域是属于函数作用域, 而函数执行后作用域会被清理、内存也随之被回收, 由于是闭包建立在一个函数内部的子函数, 因为可以访问上级作用域的原因, 即使上级函数执行完成, 作用域内的值也不会被销毁")]),e("li",[l._v("将函数的内部与外部连接起来, 因为闭包可以缓存上级作用域, 故打破了函数作用域的限制, 可以访问函数内的变量")]),e("li",[l._v("闭包应用随处可见, ajax成功回调, 事件绑定的回调, setTimeout的延时回调, 一个函数内部返回一个匿名函数")])]),e("h3",{attrs:{id:"前后端分离的意义"}},[l._v("前后端分离的意义")]),e("ol",[e("li",[l._v("后端只需负责数据层")]),e("li",[l._v("node来处理数据、路由、渲染、数据格式转换")]),e("li",[l._v("提高工作效率, 前后端同步开发")])]),e("h3",{attrs:{id:"页面性能优化的思路和方案"}},[l._v("页面性能优化的思路和方案")]),e("ol",[e("li",[l._v("减少HTTP请求, 静态文件大小, 开启Gzip压缩, 使用CDN加速, 合适的文件缓存, 合理控制cookie大小")]),e("li",[l._v("避免不必要的DOM操作, 避免不必要的重排与重绘, 优化css选择器,")]),e("li")]),e("h3",{attrs:{id:"写代码用到过的设计与思想"}},[l._v("写代码用到过的设计与思想")]),e("h3",{attrs:{id:"spa"}},[l._v("SPA")]),e("h3",{attrs:{id:"页面生成过程"}},[l._v("页面生成过程")]),e("ol",[e("li",[l._v("HTML代码转化成DOM")]),e("li",[l._v("CSS代码转化成CSSOM")]),e("li",[l._v("结合DOM与CSSOM生成一棵渲染树")]),e("li",[l._v("生成布局, 即将所有渲染树的所有节点进行平面合成")]),e("li",[l._v("将布局绘制(paint)到屏幕上")])])])}],!1,null,null,null);i.default=v.exports}}]);