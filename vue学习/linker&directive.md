### linker(vm, el, host, scope, frag)

### linker复合链接函数
+ 调用_bindDir进行创建更新
+ 对指令集进行排序并对指令进行_bind

### linker内容进行_bindDir(directive/descriptor, el, host, scope, frag)
+ bindDir为创建指令并更新到this.\_directives; `new Directive(descriptor, this, node, host, scope, frag)`
