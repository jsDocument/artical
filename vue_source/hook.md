### \_initDOMHooks
+ 为当前实例添加hook:attached 与 hook:detached钩子

### \_callHook
+ 触发'pre-hook:hook' 事件
+ 循环options[hook]中的函数队列
+ 触发'hook:hook' 事件

### onAttached
+ 判断 !this.\_isAttached状态, 更新其状态为true, 并循环this.$children执行其callAttach

### callAttach(child)
+ 判断!child.\_isAttached 且 child.$el在文档中, 执行child.\_callHook('attached')

### onDetached
+ 判断 !this.\_isAttached状态, 更新其状态为false, 并循环this.$children执行其callDetach

### callDetach(child)
+ 判断child.\_isAttached 且 child.$el不在文档中, 执行child.\_callHook('detached')