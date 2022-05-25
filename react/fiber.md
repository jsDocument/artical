### fiber 相关基础知识

1. Fiber 出现的原因 ?
   + javascript 执行引擎和渲染引擎在同一个线程，两者互斥；每帧开头包括样式计算、布局和绘制，屏幕刷新率 1s 60帧, 1000/60, js 执行与渲染的间隔是16.6ms，不让一帧的工作量超过16 ms
   + `因为 JavaScript 单线程的特点，每个同步任务不能耗时太长`，不然就会让程序不会对其他输入作出响应，React 的更新过程就是犯了这个禁忌，而 React Fiber 就是要改变现状。 而可以通过分片来破解 JavaScript 中同步操作时间过长的问题。
   + 把一个耗时长的任务分成很多小片，分片运行。
   + `React Fiber 把更新过程碎片化`，每执行完一段更新过程，就把控制权交还给 React 负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。
   + 维护每一个分片的数据结构，就是 Fiber。
   + 之前的 `stack reconciler` 处理大状态时由于`计算和组件树遍历`的消耗容易出现渲染线程挂起，进而页面掉帧，所以有 `Fiber reconciler` 所替代。

2. 哪些任务需要拆分？哪些任务不需要拆分？
   + `dom Diff` 过程中的任务可以进行拆分
   + `commit 阶段的工作（patch` 不可拆分

3. 如何进行 Fiber 拆分？
   + 实际上就是按虚拟 DOM 节点拆，因为 fiber tree 是根据 vDOM tree 构造出来的，树结构一模一样，只是节点携带的信息有差异。
4. 如何调度任务
   + 任务可以分为 2 部分：`工作循环` 与 `优先级机制`
   + 工作循环是基本的`任务调度机制`，工作循环中`每次处理一个任务`（工作单元），处理完毕有一次喘息的机会，此时通过 `shouldYield` 函数（idleDeadline.timeRemaining()）判读`时间是否用完`，用完则把时间还给主线程等待下次 `requestIdleCallback` 的唤起，否则继续执行任务。
   + 优先级机制用来处理`突发事件与优化次序`。 有如下策略：
     + 到 commit 阶段了，提高优先级
     + 高优任务做一半出错了，需要降低一下优先级
     + 抽空关注一下低优任务，别给饿死了
     + 如果对应 DOM 节点此刻不可见，给降到最低优先级
5. 如何中断/断点恢复
   + 中断：检查当前正在处理的工作单元，保存当前成果（firstEffect, lastEffect），修改 tag 标记一下，迅速收尾并再开一个 requestIdleCallback，下次有机会再做
   + 断点恢复：下次再处理到该工作单元时，看 tag 是被打断的任务，接着做未完成的部分或者重做 自然中断（时间耗尽），或优先级中断（高优任务中断），原理相同。
6. 如何收集任务结果
   + 每个节点更新结束时向上归并 effect list 来收集任务结果，reconciliation 结束后，根节点的 effect list 里记录了包括 DOM change 在内的所有 side effect。
   + requestIdleCallback 让开发者在主事件循环中执行后台或低优先级的任务,不会对动画和用户交互等关键事件产生影响。

7. fiber 是模拟了 JS 的调用栈实现的
   + Fiber 在 React 生成的 Virtual Dom 基础上增加的一层链表数据结构，把递归遍历转成循环遍历。配合 requestIdleCallback API , 实现任务拆分、中断与恢复。
   + JavaScript 用一个栈来管理执行上下文，这个栈中的每一项又包含一个链表。
   + 当函数调用时，会入栈一个新的执行上下文，函数调用结束时，执行上下文被出栈。

8. fiber 架构：
   + 循环条件：利用 requestIdeCallback 空闲时间递减.
   + 遍历过程：利用链表，找孩子找兄弟找父亲.
9. fiber 是什么
   + Fiber 是一种数据结构，深度优先遍历 虚拟 DOM 节点得到的的链表关系
   + 是一个工作单元，每个组件实例和每个DOM节点的 `抽象表示都是一个工作单元`
   + 是一个virtual stack frame，实现了自己的调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。
   + `Fiber 按照虚拟DOM拆分`，因为fiber tree是根据Virtual DOM tree 构建出来的，结构上是一样的，只是节点携带的信息不一样。

10. fiber 执行的大致过程：调度、调和、提交，
    + fiberRoot 保存全局调度信息，链表的起点
    + scheduler 选择优先级高的任务进入 reconciler
    + reconciler 计算变更内容
    + react-dom 把变更的内容渲染到页面上
    + DOM Diff 时 完成 Reconciliation（协调render）：生成Fiber树，得出需要更新的节点信息即找出所有变更(Effect)。这一步是一个渐进的过程，可以被打断。
    + Commit（提交）阶段：即需要处理的副作用，将需要更新的节点一次过批量更新，这个过程不能被打断。
    + 具体构建过程
      + `Fiber Reconciler在 Diff` 计算的时候，会`生成一棵 Fiber 树`，是根据Virtual DOM tree 构建出来的，增加了`额外信息`，本质上也是`一个链表`
      + `Fiber树在首次渲染的时候会一次生成`。在`后续需要Diff`的时候，会根据已有 Fiber 树和最新 Virtual DOM 的信息，`生成一棵新的树`，这颗新树`每生成一个新的节点`，都会将控制权交回给主线程，去检查有没有优先级更高的任务需要执行。如果没有，则继续构建树的过程
      + 在构造Fiber树的过程中，Fiber Reconciler 会将`需要更新的节点信息保存在 Effect List` 当中，在阶段二执行的时候，会批量更新相应的节点。

11. Fiber reconciliation的工作循环 过程？
    + 找到根节点优先级最高的`workInProgress tree`，取其待处理的节点（代表组件或DOM节点）
    + 检查当前节点是否需要更新，不需要的话，直接到4
    + 标记一下（打个tag），更新自己（组件更新props，context等，DOM节点记下DOM change），进行reconcileChildren并返回workInProgress.child
    + 不存在workInProgress.child,证明是叶子节点，向上收集effect
    + 把child或者sibling当做nextUnitWork,进入下一个工作循环。如果回到了workInProgress tree的根节点，则工作循环结束
    + 进入commit阶段
12. Fiber工作阶段phase
    + `diff render和reconciliation 主要是构建workInProgress tree`，其实是diff过程
    + complete diffProperties,`标记tag，收集effect`
    + commit 提交阶段,应用更新
    + 调度器（Scheduler）来负责进行任务分配
13. 双缓冲池技术(复用内部对象，节省内存分配、GC 的视觉开销)
    + FiberRoot底下的所有节点，都会在算法过程中，尝试创建自己的“镜像”。
    + workInProgress tree是reconcile过程中从fiber tree建立的当前进度快照，所有工作都是在这颗树上进行，用于计算更新，完成reconciliation过程。
    + 以fiber tree为主，workInProgress tree为辅
    + 双缓冲具体指的是workInProgress tree构造完毕，得到的就是新的fiber tree，然后喜新厌旧（把current指针指向workInProgress tree，丢掉旧的fiber tree）就好了
    + 在Fiber结构中增加一个alternate字段标识上一次渲染好的Fiber树，下次渲染时可复用
    + ~~每个fiber上都有个alternate属性，也指向一个fiber，创建workInProgress节点时优先取alternate，没有的话就创建一个?~~
    + ~~fiber与workInProgress互相持有引用，“喜新厌旧”之后，旧fiber就作为新fiber更新的预留空间，达到复用fiber实例的目的~~
14. Fiber的特点
    + 暂停工作，并在之后可以返回再次开始；
    + 可以为不同类型的工作设置优先级；
    + 复用之前已经完成的工作；
    + 中止已经不再需要的工作。
    + 增量渲染（把渲染任务拆分成块，匀到多帧）
    + 更新时能够暂停，终止，复用渲染任务
    + 给不同类型的更新赋予优先级
    + 并发方面新的基础能力
15. 优先级策略：紧急的事件允许插队
    + synchronous 与之前的Stack reconciler操作一样，同步执行；首屏（首次渲染）用，要求尽量快，不管会不会阻塞UI线程
    + task 在next tick之前执行----requestIdleCallback回调执行的；
    + animation 下一帧之前执行；通过requestAnimationFrame来调度，这样在下一帧就能立即开始动画过程
    + high 在不久的将来立即执行----requestIdleCallback回调执行的；
    + low 稍微延迟（100-200ms）执行也没关系----requestIdleCallback回调执行的；
    + offscreen 下一次render时或scroll时才执行----看不见的
16. 生命周期函数怎么执行？次序的保证？
17. 低优先级饿死现象----尽量复用已完成的操作（reusing work where it can）来缓解
18. 如何实现 Fiber 架构下的 组件渲染 和 副作用收集提交？
    + 执行的收集顺序类似于二叉树的先序遍历
    + 完成的收集顺序类似于二叉树的后序遍历
19. React 的 Virtual DOM、Reconciler、Renderer的任务划分
    + Virtual DOM 层，描述页面长什么样。
    + Reconciler 层，负责调用组件生命周期方法，进行 Diff 运算等。
    + Renderer 层，根据不同的平台，渲染出相应的页面



```javascript
// 主要 fiber 属性,
rootFiber.render()
{
  type: xx,
  tag: xx,
  key: xx,
  return: null, // 父亲
  sibling: null, //兄弟
  child: null, // 大儿子
  index: null
  effectTag: xx,
  nextEffect: xx,
  lastEffect: xx,
  firstEffect: xx
}
// expiration Time 优先级：0 noWork, 1 never, async 毫秒数越小，优先级越高
// synchronous，与之前的Stack Reconciler操作一样，同步执行
// task，在next tick之前执行
// animation，下一帧之前执行
// high，在不久的将来立即执行
// low，稍微延迟执行也没关系
// offscreen，下一次render时或scroll时才执行

// updateQueue
reconciler

```

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
