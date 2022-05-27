### 虚拟节点

+ react 在组件初始化时即挂载容器时，会调用 render 函数，生成旧的虚拟 DOM 和真实的 DOM
+ 新的虚拟 DOM，是调用 setState 时，重新调用 render 函数重新生成的虚拟 DOM

1. vnode来描述DOM 节点，根据 VNode操作实际 DOM 节点，渲染出 DOM 树
2. vNode 与 fiber 的关系，与真实 DOM 的关系
3. vnode 的 3 个属性： 通过createElement生成对应的 vnode
   + nodeName：为 html标签，直接操作 dom; 为组件时，通过递归操作组件执行 render 返回对应的 vnode，
   + props
   + children


### DOMDiff

+ DOM Diff 过程
  + 同一类型进行比较，否则放弃比较，直接删掉旧的添加新的
  + 父节点---静态节点？`父节点变动`，子节点不再比对，直接新建
  + 文本节点比对
  + 节点类型type相同---再比较属性，节点类型 type 不同---replace
  + 循环渲染里有插入、移动和删除操作；对于每一个列表指定key，先将所有列表遍历一遍，确定要新增和删除的，再确定需要移动的。
    + 具体：第一遍比较，新节点 与 老节点比对先确定类型-----NoFlags2, Placement4, Update6, PlacementAndUpdate8-----相同复用、没有则新增
    + lastPlacedIndex = 0：定义 老 `可用复用的 Fiber 节点位置`，当前找到的可复用的位置比 lastPlacedIndex 大，更新 lastIndex，在 `lastPlacedIndex 位置前`找到的元素标记为移动

