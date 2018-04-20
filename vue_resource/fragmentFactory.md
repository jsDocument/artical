# 工厂

### FragmentFactory(vm, el) 根据vm与el编译, 得到linker
+ 更新this.vm = vm
+ el为字符串, 或 tempalte标签, template = parseTemplate(el, true)
+ 否则template为创建文档片断, 将el追加到template
+ this.template = template
+ linker = compile(template, vm.$options, true)
+ this.linker = linker

+ create(host, scope, parentFrag) 创建fragment实例
    1. frag为this.template的副本
    2. 返回 new Fragment(this.linker, this.vm, frag, host, scope, parentFrag)

### Fragment(linker, vm, frag, host, scope, parentFrag)  调用linker, 进行数据监听
+ this.inserted frag是否在文档中
+ 更新this到parentFrag.childFrags队列
+ frag.childNodes长度为1 且其第一个子节点为__vue_anchor, 更新 __this.node = frag.childNodes[0], this.before = singleBefore, this.remove = singleRemove__
+ 否则 this.node = 创建的fragment-start的注释节点, this.end = 创建的fragment-end的注释节点; __this.frag = frag__; this.node添加到frag第一个子元素, this.end追加到frag, this.before = mutiBefore, this.remove = mutiRemove
+ this.node.\__vfrag__ 指向当前实例this

+ callHook 为循环this.childFrag, 执行其钩子函数, 循环其this.children执行其钩子

+ singleBefore(target, withTransition)
    1. this.inserted = true
    2. (以动画方式)添加target到this.node前
    3. 如果this.node已经在文档中, 则执行attach钩子, !child.\_isAttached时, 执行child的attached钩子

+ singleRemove
    1. this.inserted = false
    2. 判断this.node在文档中 shouldCallRemove,
    3. 执行this.beforeRemove()
    4. 移除DOM之后的回调执行: 如果shouldCallRemove 则触发detach钩子, 执行self.destory()


+ beforeRemove

    1. 循环this.childFrag进行beforeRemove(false)
    2. 循环this.children进行$destory(false, true)
    3. 循环this.unlink.dirs 进行监听订阅取消

+ destory
    1. 移除this.parentFrag.childFrags当中的当前实例
    2. this.node__vfrag__ = null
    3. this.unlink()

+ multiBefore DOM操作处理一个范围, 其他与singleBefore相同
+ multiRemove DOM操作处理一个范围, 其他与singleRemove相同

