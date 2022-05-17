
1. mouseover与mouseenter事件的区别
  mouseover事件, 鼠标每次进入都会触发该事件, 事件进行冒泡; 而mouseenter只会触发一次, 事件不进行冒泡。
2. 移动端click事件行为与PC端有什么不同, 如何屏蔽掉这个不同
  移动端click会有300ms的延迟, 因为手机浏览器需要处理复杂的手势动作, 浏览器厂商为了识别其他手势动作, 所以加了300ms的延迟; 引入fastclick来检测到touchEnd事件时, 通过DOM自定义事件立即触发一个模拟click事件, 并把浏览器300ms后的真正的click事件阻止掉。
3. Event中, currentTarget与target之间的区别
  遍历DOM时currentTarget识别事件的当前目标, event.target识别事件发生的元素
4. 事件捕获、事件冒泡、与阻止事件冒泡与默认事件
  + 事件分为两个阶段: 事件捕获即从根节点查找当前事件发生的元素的过程; 事件冒泡即从事件发生的元素到根节点的过程。
  + e.stopPropagation()
  + e.preventDefault() 阻止默认事件

5. 移动端的点击穿透, 原因与解决方法
  + 由于click事件延迟300ms触发, 那么如果300ms内页面显示变化, 会出现实际点击元素触发了touch事件, 300ms后又触发了click事件的情况
6. 事件委托
  指利用事件冒泡, 通过指定一个事件处理来管理一种类型的所有事件, 即当些事件处理程序被触发时, 通过当前事件中的target来确定究竟是哪个元素触发了事件, 从面达到一次注册, 多个事件触发事件的目的。
7. 事件循环
  + javascript是单线程, 『主线程』负责执行所有的同步任务, 一旦所有的同步任务执行完成了, 则立即从任务队列中读取最优先的任务放到『主线程』中执行, 如些循环往复。
8. css3哪些属性影响Js中的事件: pointer-events, touch-action并讲解一下
  + pointer-events: 某个特定的图形元素可以成为鼠标事件的target, 当该属性值设定为none时表示鼠标事件『穿透』该元素并且指定该元素『下面』的任何东西, 其他值时鼠标事件可以指向后代元素, 这样鼠标在捕获或冒泡阶段触发父元素的事件侦听器。
  + touch-action: 指定某个给定的区域是否允许用户操作, 以及如何响应用户的操作。
6. undefined 与 null的区别
    + 两个数据类型都只有一个值
    + 都没有方法
    + 转换为布尔值都为false
    + null是关键字, 而undefined不是
    + null是一个空对象, 进行数字类型转换时为0, typeof运算返回object
    + undefined 是一个window属性, 进行数字类型转换时为NaN, typeof运算返回undefined


11. 判断一个题目为NaN？
    + 先判断是否为number类型 再isNaN()
    + 利用唯一一个不等于他本身的值的特性, n !== n
    + Object.is()
12. 判断两个浮点数相等
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

11. date接受几种形式的参数
12. 优雅的给出今天星期几
    + '日一二三四五六'.charAt(new Date().getDay())
13. 将日期输出成指定格式
14. 计算两个时间点的时间差
15. 获取几天后的时间点对应的时间对象
