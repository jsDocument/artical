#### DOM操作的几个方法实现

##### replace(target, el)

+ 用target.parentNode 父元素parent, parent.replaceChild(el, target)用el替换target

##### before(el, target)

+ target的父元素进行insertBefore

##### after(el, target)

+ target有nextSibling， 调用before(el, target.nextSibling)
+ 否则追加到子元素到target的父节点

##### prePend(el, target)

+ target为第一个元素时用before(el, target.firstChild)
+ 否则el追加到target


##### inDoc(node)

+ doc = document.documentElement, parent= node.parentNode
+ doc === node 或 doc 等于parent 或 parent的节点类型为1 且 doc.contains(parent)

##### extractContent(el, asFragment)

+ el为template元素, 且el.content为文档片断, el = el.content
+ el有子元素, 则去除空白节点与注释节点, 循环el.firstChild将其追加到一个新的frag或div节点并返回

##### trimNode(node)

+ 循环node.firstChild, 移除空白节点
+ 循环node.lastChild, 移除空白节点

##### mapNodeRange(node, end, op)

+ 循环node !==end, next = node.nextsibling, 对node进行op(), node = next
+ op(end)

##### removeNodeRange(start, end, vm, frag, cb)

+ done 完成状态
+ removed 要移除的数量
+ nodes 要移除的节点
+ mapNodeRange(start, end, cb), 更新node到nodes, 更新完成后done = true; 移除回调将nodes追加到frag, 并执行cb()
