# react 事件的相关功能实现

1. 抹平不同浏览器的差异
2. 与内部的「优先级机制」绑定
3. 考虑所以浏览器事件

## 核心模块

1. SyntheticEvent(合成事件)：对原生浏览器事件的一层封装，拥有和原生浏览器事件相同的 API，如：stopPropagation() 和 preventDefault()
2. 模拟实现的事件传播机制

```javascript
class SyntheticEvent {
  constructor(e) {
    this.nativeEvent = e;
  }
  stopPropagation() {
    this._stopPropagation = true;
    if (this.nativeEvent.stopPropagation) {
      this.nativeEvent.stopPropagation();
    }
  }
}
```

接收「原生事件对象」，返回一个包装对象。原生事件对象会保存在nativeEvent属性中。同时，实现了stopPropagation方法。

事件传播机制的实现步骤如下：

1. 在根节点绑定事件类型对应的事件回调，所有子孙节点触发该类事件最终都会~委托~给「根节点的事件回调」处理。
2. 「寻找」触发事件的DOM节点，找到其对应的FiberNode（即虚拟DOM节点）
3. 「收集」从当前FiberNode到根FiberNode之间所有注册的「该事件对应回调」
4. 「反向遍历并执行」一遍所有收集的回调（模拟捕获阶段的实现）
5. 「正向遍历并执行」一遍所有收集的回调（模拟冒泡阶段的实现）

addEvent---dispatchEvent「根节点的事件回调」-----「通过 DOM 节点找到对应的 FiberNode」----collectPaths「收集路径中该事件的所有回调函数」-----triggerEventFlow「捕获阶段的实现」-----triggerEventFlow「冒泡阶段的实现」

## 要点

1. se = new SyntheticEvent() 包装合成事件
2. fiberNode.memoizedProps 保存对应事件回调
3. collectPaths 是遍历 fiber与 fiber.return 链表，根据 fiber.tag 类型更新paths[{type: callback}]
4. 捕获阶段，从后向前遍历 paths，执行并传入合成事件，如果 se._stopPropagation 这中断接下来的变量
5. !se._stopPropagation
