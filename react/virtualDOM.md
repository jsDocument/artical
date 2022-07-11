### Virtual DOM 的优势

1. DOM 引擎 与 JS 引擎相互独立，但又工作在同一线程
2. JS 调用 DOM API，必须挂起 JS 引擎，转换传入的参数数据，激活 DOM 引擎，DOM 重绘后再转换可能有的返回值，最后激活 JS 引擎并继续执行。
3. 如果频繁的 DOM API 调用，且浏览器厂商不做“批量处理”优化，引擎间切换的代价将迅速累计。
4. 若有强制重绘的 DOM API 调用，重新计算布局、重新绘制图像会引起更大的性能消耗

所以

1. 虚拟 DOM 不会立马进行排版与重绘操作
2. 虚拟 DOM 进行频繁修改，然后进行比较后再修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多DOM节点排版与重绘损耗


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

