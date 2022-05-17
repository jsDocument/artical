+ DOM Diff 过程
  + 父节点---静态节点？父节点变动，子节点不在比对，直接新建？
  + 文本节点
  + 节点类型type相同---属性，type 不同---replace
  + key, type都相同
    + 新节点 与 老节点比对-----NoFlags2, Placement4, Update6, PlacementAndUpdate8
    + 第一轮只比较更新的-----相同复用、更新
    + lastPlacedIndex = 0 老 Fiber可用复用的节点位置，当前找到位置比lastPlacedIndex大，更新lastIndex，在lastPlacedIndex位置前找到的元素标记为移动

+ react 行呢优化：React.lazy + import()动态路由 和 React.Suspense----fallback
