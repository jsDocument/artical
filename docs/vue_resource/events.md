# 内部事件初始始化与事件的实现

## 初始化系统事件__initEvents
+ 如果options.\_asComponent「该属性会在指令绑定时添加」, 则对options.el注册组件事件
`registerComponentEvents(vm, el)`
    1. 处理元素上的事件绑定属性, handler = 为作用域下调用$eval(attrs[i].value, true)
    2. 如果handler为函数, 添加属性 handler.\_fromParent = true
    3. 调用$on进行事件绑定

+ 对options.events 注册事件回调 registerCallbacks(this, '$on', options.events)
+ 对options.watch 注册watch回调 registerCallbacks(this, '$watch', options.watch)

`registerCallbacks(vm, action, hash)`

    1. 循环hash
    2. 取出对应的handlers, 如果handlers是数组, 则循环对其进行注册; 否则直接对其进行注册register

`register(vm, action, key, handler, options)`

    1. 判断handler的类型为function, 则调用相应的动作
    2. handler为string, 则在vm.$options.methods中找相应的方法, 再调用相应的动作
    3. handler为对象时, register(vm, action, key, handler.handler, handler),



## API event部分「自定义事件」: $on, $once, $off, $emit, $broadcast, $dispatch
+ $on(event, fn)
    1. 将event和fn更新到this.\_events 数组
    2. 更新this的父实例 parent.\_eventCount[event] 的个数 + 1

+ $once(event, fn)
    1. 定义on方法, 为解绑事件与执行fn; on.fn = fn。
    2. 调用this.$on

+ $off(event, fn)
    1. 无参数时, 有父实例, 循环this.\_events, 取出其回调, 父实例parent.\_eventCount[event]的个数 - cbs.length
    2. 有1个参数, 取this.\_events[event]对应的回调, 并更新parent.\_eventCount[event]的个数 - cbs.length; this.\_events[event] = null
    3. 2个参数, 取出this.\_events[event]对应的回调, 并更新parent.\_eventCount[event]的个数 -1; 并将该fn从cbs中删除

+ $emit(event)
    1. isSource 为判断参数为字符串类型
    2. event 为不字符串类型时，取event.name
    3. shouldPropagate 取值为判断 isSource 或 事件回调队列cbs不存在
    4. 事件回调队列cbs存在
    5. hasParentCbs 取值为 isSource 且 cbs的cb存在有_fromParent属性
    6. hasParentCbs时, shouldPropagate = false
    7. 循环cbs执行，如果执行返回结果为 true, 且 !hasParentCbs 或 cb.\_fromParent属性存在, shouldPropagate = true
    8. 返回 shouldPropagate。

`shouldPropagate 为 字符串事件, 且回调不存在 或 回调执行结果为 真 且 `

+ $broadcast(event)
    1. isSource 为判断参数为字符串类型
    2. event 为不字符串类型时，取event.name
    3. this.\_eventsCount[event]不存在时, 直接返回
    4. isSource时, 将参数第一项处理成 {name: event, source: this}
    5. 循环this.$children， 触发子实例的该事件, 根据返回值shouldPropagate, 判断是否再对其子实例调用broadcast。

+ $dispatch(event)
    1. 触发该事件, 返回值shouldPropagate为false时, 直接返回
    2. 将参数第一项处理成 {name: event, source: this}
    3. 循环其父实例, 如果父实例触发该事件的返回结果 shouldPropagate为真, 更新parent为parent.$parent, 否则更新为null。

## DOM事件
+ on(el, event, cb, useCapture)
    1. addEventListener
+ off(el, event, cb)
    1. removeEventListener

## on指令的实现
+ bind()
    1. this.el为iframe 且 this.arg不为'load', 定义this.iframeBind方法, 调用on方法对this.el.contentWindow进行绑定
    2. 调用当前实例[指令]属性的on方法 this.on('load', this.iframeBind)
+ update(handler)
    1. 根据限定定义不同的事件回调handler
    2. 调用rest() 进行事件原来的回调this.handler进行解绑
    3. 更新this.handler = handler, 进行事件绑定: 调用iframeBind() 或 普通的on进行事件绑定
+ reset()
    1. el = this.el.contentWindow(this.iframeBind) 或 this.el, 对事件回调进行off
+ unbind() 执行this.reset()

