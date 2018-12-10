# 疑问及待更新部分

1. _asComponent 是什么时候更新的？判断完指令区别时？
2. _fromParent
3. mergeOptions的返回结果
4. attach detach, hook的事件添加是什么时候？
5. shouldPropagate
6. 循环第一个子元素, 最后一个子元素？
7. cloneNode
8. \_checkStatement
9. watcher set
10. \_setData
11. evaluate
12. filters文件夹的文件
13. path 不同模式的意义, transition[2]
14. filter定义与transition如何运用的？
15. global
16. 表达式运算 与 设置与更新的监听
17. 解析过程与运算过程 图
18. 监听过程图
19. debounce一段时间等待, 回调为一直更新timeout, 直到time结束执行func, 返回result,
20. nextTick 返回函数更新cb到队列, 状态可以则立即执行, 定时执行，执行开始先更新状态再执行队列的副本
21. toArray(list, start), i = list.length - start 倒序更新到ret[i] = list[i+start]
22. bind 返回一个函数, 再返回对函数的apply或call调用
23. 触发flush事件与init事件？？？ FragmentFactory
+ __vue__的作用，__vue_anchor的作用

+ \_callhook, attach, detach
24. use(plugin) 调用plugin 或 plugin.install, 更新plugin.installed的状态
25. createClass(name) ，返回创建匿名函数, 参数为options, 内容为调用this.\_init(options)
26. extend(extendOptions),
    + 创建子类
    + Super.prototype创建子类原型
    + 更新子类原型的构造函数, 子类cid
    + 将父类options与参数合并添加到子类options,
    + 添加子类指令、组件 ...的定义指向父类的,
    + Sub.options.component[name] = Sub
    + 是第一次扩展extendOptions.\_Ctor = Sub
    + 返回Sub

