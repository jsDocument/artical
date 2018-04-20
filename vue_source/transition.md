### transition 被指令transition所使用
在指令update(id, oldId)时, 获取options中配置的transitions钩子方法, el.\_\_v\_trans为其Transition实例, oldId存在时移除el上的class: oldId = '-transition'; 否则添加class: id+ '-transition'
+ applyTransition(el, direction, op, vm, cb)
    1. el.transition不存在时, 执行op(append, before, remove), cb存在则执行
    2. 否则执行transion相应的enter或leave方法
+ appendWithTransition(el, target, vm, cb)
+ beforeWithTransition(el, target, vm, cb)
+ removeWithTransition(el, target, vm, cb)

### Transition(el, id, hooks, vm)类
+ 初始化实例属性: id, el, enterClass/leaveClass, hooks, type, pendingCssEvent, pendingCssCb, cancle, pendingJsCb为动作结束回调与取消操作, op, cb, justEntered, entered, left, typeCache
+ 定义enterNextTick, enterDone, leaveNextTick, leaveDone属性方法绑定上下文为当前实例

+ cancelPending 取消正在执行的动画, css动画则解绑事件, 置空事件与回调, js动画则调用回调的取消方法与置空回调; 去除el的相应class, 执行this.cancel方法
    1. 实例属性op, cb = null; hasPending = false
    2. this.pendingCssCb, 解绑this.pendingCssEvent事件的this.pendingCssCb 并将其置为null, hasPending = true;
    3. this.pendingJsCb, 将其取消this.pendingJsCb.cancel(), 并置为null, hasPending = true;
    4. hasPending时， 移除el相应的this.enterClass与this.leaveClass
    5. this.cancel存在, 执行并置为null
+ enter(op, cb) 动作进入
    1. cancelPending(),  取消正在执行的动画
    2. 调用beforeEnter钩子函数
    3. 更新this.cb = cb, el元素上添加this.enterClass
    4. 执行op(), 即执行相应的DOM操作
    5. this.entered = false, 
    6. 执行钩子callHookWithCb('enter'), 判断transitions.hooks中是否定义了该类开的js回调, 定义了则执行
    7. this.cancel更新为this.hooks.enterCancelled
    8. 将this.enterNextTick 更新到队列: pushJob()

+ getCssTransitionType(className)  获取动画类型
    1. 'transitionEnd' 事件不存在 或 document.hidden 或 this.hooks.css 等于false, this.el为hidden时, 返回
    2. 根据this.el.style 或 window.getComputedStyle(this.el) 获取行内样式与计算样式的transition属性
    3. 如果transitionDuration不为0时, 更新type = 'transition'
    4. 如果animationDuration不为0时, 更新type = 'animation'
    5. 根据className缓存类型并返回

+ setupCssCb(event, cb) 定义动画事件回调, 绑定动画事件回调
    1. this.pendingCssEvent = event, 
    2. 定义onEnd = this.pendingCssCb 为 e.target === self.el时, 解绑event的onEnd, self.pendingCssEvent与self.pendingCsscb = null, !self.pendingJsCb 且 cb存在则执行cb
    3. 绑定el, event事件, onEnd回调

+ enterNextTick 添加动作结束的事件监听或执行结束动画
    1. this.justEntered = true, 定时更新该属性为false
    2. 获取动画类型type
    3. 如果不存在this.pendingJsCb 如果类型为为transition动画, 则移除this.enterClass, 安装动作结束事件的回调enterDone, 如果animation动画类型时, 安装动画结束的事件回调enterDone, 否则调用enterDone()
    4. 类型为transition时, 移除this.enterClass

+ enterDone 动画结束的操作
    1. this.entered = true
    2. this.cancel = this.pendingJsCb = null
    3. 移除this.enterClass
    4. 执行afterEnter钩子, this.cb存在则执行this.cb()

+ leave(op, cb)
    1. this.cancelPending(), 执行beforeLeave钩子函数,  this.op = op, this.cb = cb
    2. 添加this.leaveClass, this.left = false
    3. 执行this.callHookWithCb('leave')
    4. 取this.calcel
    5. 如果this.op与!this.pendingJsCb时, 如果this.justEntered则执行this.leaveDone(), 即enter未执行即事时触发leave, 则让leave结束; 更新this.leaveNextTick队列 pushJob()

+ leaveNextTick
    1. 获取动画类型
    2. 执行安装动画结束事件回调 或 this.leaveDone()

+ leaveDone
    1. this.left = true, this.canel = this.pendingJsCb = null
    2. this.op() 相应的dom操作
    3. 移除this.leaveClass
    4. 执行afterLeave钩子函数
    5. this.cb存在则执行this.cb()
    6. this.op = null

+ callHookWithCb(type)
    1. 取this.hooks[type]钩子hook, hook长度大于1, 更新this.pendingJsCb = cancellable(this[type = 'Done']) 即定义动画结束与取消的方法
    2. 执行hook.call(this.vm, this.el, this.pendingJsCb)
+ callHook(type)
    1. 取this.hooks[type]钩子存在则执行。

+ isHidden 判断元素el.offsetWidth, el.offsetHight, el.getClientRects().length
+ cancellable(fn) 定义cb函数, 判断!cb.cancelled 以当前上下文与参数执行fn; 再定义cb.cancel方法, 更新cb.cancelled = true。

+ pushJob(job)
    1. job更新到queue数组
    2. !queued, queued = true, nextTick(flush)

+ flush
    1. 循环queue并执行
    2. queue = [], queued = false
    3. 返回document.documentElement.offsetHeight