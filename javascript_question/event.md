# 事件

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
  + 由于click事件延迟300ms触发, 那么如果300ms内页面显示变化, 会出现
6. 事件委托
7. 事件循环
8. css3哪些属性影响Js中的事件: pointer-events, touch-action并讲解一下
