# 其他

### 客户端存储
1. 客户端存储有哪些方式
    + cookie, sessionStorage, loacalStorage 及非关系数据库
2. cookie, sessionStorage和localStorage的区别
    + cookie可以手动设置失效时间, 默认为会话级
    + sessionStorage的存储时长是会话级
    + localStorage的存储时长为永久, 除非用户手动用浏览器工具删除
3. cookie由哪些部分组成
    + Expires 最长有效期
    + Max-Age 失效之前需要经过的秒数
    + Domain 指定cookie可以送达的主机名
    + Path 指定一个URL路径, 这个路径必须出现在要请求资源的路径中才可以发送cookie首部
    + Secure 一个带有安全属性的cookie, 请求在使用SSH和HTTPS时才会被发送到服务器
    + HttpOnly 不能通过javascript.cookie、XMLHttpRequest、Request的API进行访问
4. Hybrid环境下, 使用客户端存储有哪些需要注意
5.

### 数据类型
1. javascript的基础数据类型有哪些？
    + undefined, null, Number, String, Boolean, Symbol
2. javascript的引用数据类型有哪些? 区别是？
    + Array, Data, String, Function, Regexp, Object
3. 如何判断一个变量为数组？
    + Object.prototype.toString.call()
    + isArray()

4. undefined与null的区别
    + 两个数据类型都只有一个值
    + 都没有方法
    + 转换为布尔值都为false
    + null是关键字, 而undefined不是
    + null是一个空对象, 进行数字类型转换时为0, typeof运算返回object
    + undefined是一个window属性, 进行数字类型转换时为NaN, typeof运算返回undefined

5. 隐式类型转换, javascript底层都做了哪些?
    + 对象转换为原始数据时, 先调用对象的valueOf方法, 如果返回结果不是原始数据类型的值, 再调用其toString方法
    + 原始数据类型之间转换, 直接调用对应的构造函数进行转换
    + 转换为布尔后为false的有: 0, -0, undefined, null, 空字符串, NaN

6. ES6中的Symbol
    + 是Es6新增的数据类型, 它的每个值都是唯一的, 即使两个完全相同的变量构造出来的Symbol也不相等

    + 用来消除魔法字符串
7. ES6中的Map 与 Set, 类数组
8. ES6中的iterator
9. async的实现
10. 如何把字符串转换成数组？
    + join方法
    + Array.from(data, fn)
    + Array.prototype.slice.call
11. 如何把类数据转换为数组, 如argument与selector返回的DOM列表

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

### SPA
