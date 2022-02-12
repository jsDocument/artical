1. vnode来描述DOM 节点，根据 VNode操作实际 DOM 节点，渲染出 DOM 树
2. vnode 的 3 个属性： 通过createElement生成对应的 vnode
   - nodeName：为 html标签，直接操作 dom; 为组件时，通过递归操作组件执行 render 返回对应的 vnode，
   - props
   - children
