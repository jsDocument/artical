### 虚拟节点 与 DOMDiff

1. vnode来描述DOM 节点，根据 VNode操作实际 DOM 节点，渲染出 DOM 树
2. vNode 与 fiber 的关系，与真实 DOM 的关系
3. vnode 的 3 个属性： 通过createElement生成对应的 vnode
   + nodeName：为 html标签，直接操作 dom; 为组件时，通过递归操作组件执行 render 返回对应的 vnode，
   + props
   + children




+ DOM Diff 过程
  + 父节点---静态节点？父节点变动，子节点不在比对，直接新建？
  + 文本节点
  + 节点类型type相同---属性，type 不同---replace
  + key, type都相同
    + 新节点 与 老节点比对-----NoFlags2, Placement4, Update6, PlacementAndUpdate8
    + 第一轮只比较更新的-----相同复用、更新
    + lastPlacedIndex = 0 老 Fiber可用复用的节点位置，当前找到位置比lastPlacedIndex大，更新lastIndex，在lastPlacedIndex位置前找到的元素标记为移动

