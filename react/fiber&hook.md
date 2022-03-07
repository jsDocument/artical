+ fiber 是模拟了 JS 的调用栈实现的
  + Fiber 在 React 生成的 Virtual Dom 基础上增加的一层链表数据结构，把递归遍历转成循环遍历。配合 requestIdleCallback API , 实现任务拆分、中断与恢复。
  + JavaScript 用一个栈来管理执行上下文，这个栈中的每一项又包含一个链表。
  + 当函数调用时，会入栈一个新的执行上下文，函数调用结束时，执行上下文被出栈。

```javascript
function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  // 作为静态数据结构的属性
  // Fiber 对应组件的类型 Function/Class/Host...
  this.tag = tag;
  this.key = key;
  // 大部分情况同 type，某些情况不同，比如 FunctionComponent 使用 React.memo 包裹
  this.elementType = null;
  // 对于 FunctionComponent，指函数本身，对于 ClassComponent，指 class，对于 HostComponent，指 DOM 节点 tagName
  this.type = null;
  // Fiber 对应的真实 DOM 节点
  this.stateNode = null;

  // 用于连接其他 Fiber 节点形成 Fiber 树
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  // 作为动态的工作单元的属性
  // 保存本次更新造成的状态改变相关信息
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;
  // 保存本次更新会造成的 DOM 操作
  this.effectTag = NoEffect;
  this.nextEffect = null;

  this.firstEffect = null;
  this.lastEffect = null;

  // 调度优先级相关
  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  // 指向该 fiber 在另一次更新时对应的 fiber
  this.alternate = null;
}
```
