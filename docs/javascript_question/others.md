# 其他

### 客户端存储

1. 客户端存储有哪些方式
    + cookie, sessionStorage, loacalStorage 及非关系数据库
2. cookie, sessionStorage和localStorage的区别
    + cookie可以手动设置失效时间, 默认为会话级, cookie可以设置path、domain属性, 不同二级域名共享cookie, 存储少量数据。
    + sessionStorage的存储时长是会话级, 访问限制为文档源级别,
    + localStorage的存储时长为永久, 除非用户手动用浏览器工具删除
3. cookie由哪些部分组成
    + Expires 最长有效期
    + Max-Age 失效之前需要经过的秒数
    + Domain 指定cookie可以送达的主机名
    + Path 指定一个URL路径, 这个路径必须出现在要请求资源的路径中才可以发送cookie首部
    + Secure 一个带有安全属性的cookie, 请求在使用SSH和HTTPS时才会被发送到服务器
    + HttpOnly 不能通过javascript.cookie、XMLHttpRequest、Request的API进行访问
4. Hybrid环境下, 使用客户端存储有哪些需要注意
    + 因为混合应用中的webview从一个页面跳转的另一个页面时，会话并没有像浏览器中那样是继承延续的，也就是说，当在A页面中设置的了sessionStorage值后跳转的下一个页面时，这是sessionStorage是全新的，根本获取不到A页面中设置的任何sessionStorage。
    + 所以如果你们的app开发者还没有解决这个问题的话，建议这时使用session级别的cookie来代替sessionStorage，因为cookie是可以跨标签访问的，不要会话连续。
5. session级存储中, session cookie与sessionStorage的区别
    + sessionStorage的会话基于标签, 标签关闭则传话终止, 而cookie是基于浏览器进程; sessionStorage只能在当前标签下或当前标签下打开的标签才可以访问, 而cookie是可以跨浏览器访问的。

### 数据类型

1. javascript的基础数据类型有哪些？
    + undefined, null, Number, String, Boolean, Symbol
2. javascript的引用数据类型有哪些? 区别是？
    + Array, Data, String, Function, Regexp, Object
3. 如何判断一个变量为数组？
    + Object.prototype.toString.call()
    + isArray()

4. undefined 与 null的区别
    + 两个数据类型都只有一个值
    + 都没有方法
    + 转换为布尔值都为false
    + null是关键字, 而undefined不是
    + null是一个空对象, 进行数字类型转换时为0, typeof运算返回object
    + undefined 是一个window属性, 进行数字类型转换时为NaN, typeof运算返回undefined

5. 隐式类型转换, javascript底层都做了哪些?
    + 对象转换为原始数据时, 先调用对象的valueOf方法, 如果返回结果不是原始数据类型的值, 再调用其toString方法
    + 原始数据类型之间转换, 直接调用对应的构造函数进行转换
    + 转换为布尔后为false的有: 0, -0, undefined, null, 空字符串, NaN

6. ES6中的Symbol
    + 是Es6新增的数据类型, 它的每个值都是唯一的, 即使两个完全相同的变量构造出来的Symbol也不相等
    + 原始类型传入Symbol方法时, 会转成字符串再转成Symbol类型, 如果是对象会先调用对象的toString方法再转成成Symbol值
    + 用来消除魔法字符串
7. ES6中的Map 与 Set, 类数组

8. ES6中的iterator

9. async的实现

10. 如何把字符串转换成数组？
    + join方法
    + Array.from(data, fn)
    + Array.prototype.slice.call
11. 如何把类数据转换为数组, 如argument与selector返回的DOM列表
    + Array.from()
    + Array.slice()

12. 如何判断一个变量为数组
    `不可用typeof, 因Array继承于Object, 所以会返回object, 亦不可用instanceOf, 因为Array实际是一个引用, 用instance方法和constructor方法都是用引用地址进行比较的方法, 在frame嵌套的情况下, 每个Array的引用地址是不同的, 比较起来结果也是不确定的`
    + Object.prototype.toString
    + isArray()
13. 改变自身的方法
    + copyWithin() 在数组内部将一段元素序列拷贝到另一段元素序列上, 覆盖原有的值
    + fill() 将数组中指定区间的所有元素的值, 都替换成某个固定的值
    + pop() shift() push() unshift()
    + reverse() sort() splice()
14. 不改变自身
    + concat() 返回合并后的新数组
    + includes()
    + join() 数组元素组成一个字符串
    + slice() 新数组
    + toSource() 表示当前数组字面量的字符串
    + toString() 返回一个由所有数组组合而成的字符串
    + indexOf() lastIndexOf()
15. 遍历
    + every(), some(), filter() find(), findIndex(), keys(), map() reduce(), reduceRight(), values(), forEach()
    + entries() 数组迭代器对象, 包含所有数组元素的键值对
16. Array.prototype为一个长度为0的数组, flatten一个数组: Array.prototype.join; [该方法会让所有的数组元素转换成字符串, 再用分隔符将这些字符串连接起来, undefined或null会转换成空字符串]
17. 克隆数组可以用concat() 与slice(); 数组也是Object, 直接将引用赋值给另一个变量, 会导致被赋值的变量会随着原数组的变化面变化。


### 数字相关题目

1. 判断一个题目为NaN？
    + 先判断是否为number类型 再isNaN()
    + 利用唯一一个不等于他本身的值的特性, n !== n
    + Object.is()
2. 判断两个浮点数相等
    + 计算误差范围值, Math.pow(2, -52), Es6中的Number.EPSILON
    + 两个值相减, 误差小于这个范围

> Number.MAX_VALUE, Number.MIN_VALUE 最大浮点数与最小浮点数

3. 检查一个数值是否为整数
    + Number.isInterger()
    + 判断类型为number且对1求余等于0
4. 当一个变量显式类型转换时, 遵循的规则是什么
5. Number([])和Number([1,2,3])的值分别是？说明其原理
6. parseInt()方法遵循的运算规则
7. 对一个值进行取整的方法有多少种, 分别是？
    + parseInt
    + n|0, ~~n, n>>0 只能对32位的数字进行转换, 能处理的为2^(+/-)31的范围
    + ceil, floor, round


### Promise相关知识点

1. then方法的参数(fn,fn)与返回值
2. 缺省返回值会认识返回的为undefined,


### 日期
1. date接受几种形式的参数
2. 优雅的给出今天星期几
    + '日一二三四五六'.charAt(new Date().getDay())
3. 将日期输出成指定格式
4. 计算两个时间点的时间差
5. 获取几天后的时间点对应的时间对象

### 闭包
1. 闭包是有权限访问其他函数作用域内变量的一个函数
2. JS的作用域是属于函数作用域, 而函数执行后作用域会被清理、内存也随之被回收, 由于是闭包建立在一个函数内部的子函数, 因为可以访问上级作用域的原因, 即使上级函数执行完成, 作用域内的值也不会被销毁
3. 将函数的内部与外部连接起来, 因为闭包可以缓存上级作用域, 故打破了函数作用域的限制, 可以访问函数内的变量
4. 闭包应用随处可见, ajax成功回调, 事件绑定的回调, setTimeout的延时回调, 一个函数内部返回一个匿名函数

### 前后端分离的意义
1. 后端只需负责数据层
2. node来处理数据、路由、渲染、数据格式转换
3. 提高工作效率, 前后端同步开发

### 页面性能优化的思路和方案
1. 减少HTTP请求, 静态文件大小, 开启Gzip压缩, 使用CDN加速, 合适的文件缓存, 合理控制cookie大小
2. 避免不必要的DOM操作与更新, 避免不必要的重排与重绘, 优化css选择器,
3. 开启serviceWork提升首页速度


### webpack都做了些什么

+ 输出md5文件名
+ 增量发布
+ 避免客户端、cdn缓存问题
+ 提取manifest 稳定模块id



### 页面生成过程
1. HTML代码转化成DOM
2. CSS代码转化成CSSOM
3. 结合DOM与CSSOM生成一棵渲染树
4. 生成布局, 即将所有渲染树的所有节点进行平面合成
5. 将布局绘制(paint)到屏幕上

