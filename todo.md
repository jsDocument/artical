
1. 添加mousedown事件，isDragging时，返回；doucment.onselectstart与document.ondragstart时返回false
2. 添加mousemove、mouseup事件及回调；move回调中调用drag函数，up回调中移除mousemove、mouseup事件，doucment.onselectstart与document.ondragstart为null
3. isDragging = true;
4. event.preventDefault()；options.start调用
5. option.start：取消动画；this.animationFrameId = null; dragState对象
6. option.drag：this.dragging = true; dragState.left, dragState.top更新；计算start时与当前元素的pageY的差，进行动画；
7. this.dragging = false，
8. 运行时---virtual DOM (检查是否为原生)---->其实编译时就可以确定
9. 直接在编译时分析其模板，做好数据分析留下提示
10. slot也与scope-slot一样，生成一个函数
11. 更新与检查---组件优化
12. 生成子组件函数的cache
13. proxy----setter/getter
14. javascript的原型与原型链
15. 几种类型的值？栈， 堆
16. 3位添加逗号：/(\d)(?=(\d{3})+\.)/g
17. javascript继承的实现
18. 作用域链
19. serviceWorker, webWorker, PWA
20. this： 指向函数的直接调用者\|
21. eval, new Function(), with
22. 事件的捕获与冒泡



<!-- 文档地址 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5 -->

tip
warning
danger
details
