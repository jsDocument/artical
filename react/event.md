### react 事件的相关功能实现

1. 为什么要自定义事件机制？
   1. 抹平不同浏览器的差异，实现更好的跨平台。
   2. 与内部的「优先级机制」绑定，方便事件统一管理和事务机制。
   3. 避免垃圾回收，React 引入`事件池`，在事件池中获取或释放事件对象，避免`频繁地去创建和销毁`。

#### 核心模块

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

#### 要点

1. se = new SyntheticEvent() 包装合成事件
2. fiberNode.memoizedProps 保存对应事件回调
3. collectPaths 是遍历 fiber与 fiber.return 链表，根据 fiber.tag 类型更新paths[{type: callback}]
4. 捕获阶段，从后向前遍历 paths，执行并传入合成事件，如果 se._stopPropagation 这中断接下来的变量
5. !se._stopPropagation


+ React 合成事件：声明了事件保存的位置，但是事件有没有被真正的注册
  + 优点：抹平了浏览器事件的差异、提供了统一的事件处理机制、通过事件委托提高性能
  + 过程：
    + 对应虚拟节点创建 fiber 节点，当这个fiber节点进入render阶段的complete阶段时，定义的事件 prop 会被识别，对事件进行处理
    + React事件：原生事件的 map，定义了什么阶段执行

+ 我们写的事件是绑定在dom上么，如果不是绑定在哪里？
  + 绑定到 root 节点上，统一管理
  + 真实的 dom 的事件回调被替换成了 noop
  + 按需绑定到 root，发现了 onClick 事件再去绑定 document click 事件
  + 真正的回调存在了 fiber 节点的属性上，即判断是HostComponent(dom元素)类型的fiber，通过 diffProperties 单独处理-->处理事件监听(冒泡处理？捕获处理？scroll事件，focus 事件 ，blur)
  + listener = dispatchEvent.bind( null, topLevelType, eventSystemFlags, targetContainer)统一的监听器，事件触发执行的函数
    + 根据事件源找真正的 dom，根据 dom 找对应的 fiber 对象(targetInst?)，然后进入 legacy 模式的事件处理系统
    + 怎么找 fiber 对象？真实 dom 在初始化是用一个随机 key(__reactInternalInstance$') 指向 fiber，而 fiber.stateNode 指向当前 dom
    + legacy 模式的事件处理系统与批量更新
      + handerClick里面触发setState，那么就能读取到 isBatchingEventUpdates = true这就是React的合成事件为什么具有批量更新的功能了。


#### 其他问题

1. 为什么我们的事件不能绑定给组件？
2. 为什么我们的事件手动绑定this(不是箭头函数的情况)
3. 为什么不能用 return false 来阻止事件的默认行为？
4. react怎么通过dom元素，找到与之对应的 fiber对象的？
5. onClick是在冒泡阶段绑定的？ 那么onClickCapture就是在事件捕获阶段绑定的吗？
6. 事件池---extractEvents 形成事件对象event 和 事件处理函数队列
   1. handleTopLevel：就是执行事件处理插件(SimpleEventPlugin)中的处理函数extractEvent
   2. namesToPlugins 事件模块插件的映射
   3. plugins
   4. registrationNameModules(记录了React合成的事件-对应的事件插件的关系)
     SimpleEventPlugin,
     EnterLeaveEventPlugin,
     ChangeEventPlugin,
     SelectEventPlugin,
     BeforeInputEventPlugin，构建初始化React合成事件和原生事件的对应关系，合成事件和对应的事件处理插件关系
