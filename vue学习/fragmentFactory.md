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
+ 
+
+ frag添加到this.node前面
+ this.node.\__vfrag__
