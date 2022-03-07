+ Fiber 出现的原因？
  + React 15 出现掉帧现象
  + React 占用大量时间计算，而一帧的时间是16.6ms，计算占用大量时间，而 js 又是单线程的，所以长时间不执行渲染
  + 特别是 DOM-diff 递归遍历对比，虽然进行的算法优化，但依然很耗性能
  + 不能中断执行，页面会等待递归执行完成才重新渲染
+ 解决方案？
  + 将运算切割为多个步骤，分批完成，完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间进行页面的渲染。等浏览器忙完之后，再继续之前未完成的任务。
  + 一个Fiber就是一个工作单元
+ fiberRoot 保存全局调度信息，链表的起点
+ Fiber 是什么？
  + 是一个工作单元
  + React核心概念就是：输入的数据，输出的是 UI 的描述信息
+ fiber 是一个virtual stack frame，实现了自己的调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。
  + requestIdleCallback
  + `Fiber 按照虚拟DOM拆分`，因为fiber tree是根据Virtual DOM tree 构建出来的，结构上是一样的，只是节点携带的信息不一样。
  + 每个组件实例和每个DOM节点的`抽象表示都是一个工作单元`，在工作循环中，每次处理一个fiber，处理完一个就会判断是否有高优先级的任务或者剩余时间是否充足，可以继续处理或者挂起或者完成工作循环。
  + Fiber 是一种数据结构，深度优先遍历得到的的链表关系
+ Fiber reconciliation的工作循环
  + 找到根节点优先级最高的`workInProgress tree`，取其待处理的节点（代表组件或DOM节点）
  + 检查当前节点是否需要更新，不需要的话，直接到4
  + 标记一下（打个tag），更新自己（组件更新props，context等，DOM节点记下DOM change），进行reconcileChildren并返回workInProgress.child
  + 不存在workInProgress.child,证明是叶子节点，向上收集effect
  + 把child或者sibling当做nextUnitWork,进入下一个工作循环。如果回到了workInProgress tree的根节点，则工作循环结束
  + 进入commit阶段
+ Fiber工作阶段phase
  + `diff render和reconciliation 主要是构建workInProgress tree`，其实是diff过程
  + complete diffProperties,`标记tag，收集effect`
  + commit 提交阶段,应用更新
+ 调度器（Scheduler）来进行任务分配
+ 双缓冲池技术(复用内部对象，节省内存分配、GC 的视觉开销)
  + FiberRoot底下的所有节点，都会在算法过程中，尝试创建自己的“镜像”。
  + workInProgress tree是reconcile过程中从fiber tree建立的当前进度快照，所有工作都是在这颗树上进行，用于计算更新，完成reconciliation过程。
  + 以fiber tree为主，workInProgress tree为辅
  + 双缓冲具体指的是workInProgress tree构造完毕，得到的就是新的fiber tree，然后喜新厌旧（把current指针指向workInProgress tree，丢掉旧的fiber tree）就好了
  + 在Fiber结构中增加一个alternate字段标识上一次渲染好的Fiber树，下次渲染时可复用
  + ~~每个fiber上都有个alternate属性，也指向一个fiber，创建workInProgress节点时优先取alternate，没有的话就创建一个?~~
  + ~~fiber与workInProgress互相持有引用，“喜新厌旧”之后，旧fiber就作为新fiber更新的预留空间，达到复用fiber实例的目的~~
+ Fiber的特点
  + 暂停工作，并在之后可以返回再次开始；
  + 可以为不同类型的工作设置优先级；
  + 复用之前已经完成的工作；
  + 中止已经不再需要的工作。
  + 增量渲染（把渲染任务拆分成块，匀到多帧）
  + 更新时能够暂停，终止，复用渲染任务
  + 给不同类型的更新赋予优先级
  + 并发方面新的基础能力

+ 优先级策略：紧急的事件允许插队
  + synchronous 与之前的Stack reconciler操作一样，同步执行；首屏（首次渲染）用，要求尽量快，不管会不会阻塞UI线程
  + task 在next tick之前执行----requestIdleCallback回调执行的；
  + animation 下一帧之前执行；通过requestAnimationFrame来调度，这样在下一帧就能立即开始动画过程
  + high 在不久的将来立即执行----requestIdleCallback回调执行的；
  + low 稍微延迟（100-200ms）执行也没关系----requestIdleCallback回调执行的；
  + offscreen 下一次render时或scroll时才执行----看不见的
+ 生命周期函数怎么执行？次序的保证？
+ 低优先级饿死现象----尽量复用已完成的操作（reusing work where it can）来缓解

如何实现Fiber架构下的组件渲染和副作用收集提交？

+ 执行的收集顺序类似于二叉树的先序遍历
+ 完成的收集顺序类似于二叉树的后序遍历



+ Virtual DOM 层，描述页面长什么样。
+ Reconciler 层，负责调用组件生命周期方法，进行 Diff 运算等。
+ Renderer 层，根据不同的平台，渲染出相应的页面

阶段一，生成Fiber树，得出需要更新的节点信息。这一步是一个渐进的过程，可以被打断。
阶段二，将需要更新的节点一次过批量更新，这个过程不能被打断。

+ 构建过程
  + Fiber Reconciler在 Diff 计算的时候，会生成一棵 Fiber 树，是根据Virtual DOM tree 构建出来的，增加了额外信息，本质上也是一个链表
  + Fiber树在首次渲染的时候会一次生成。在后续需要Diff的时候，会根据已有Fiber树和最新Virtual DOM的信息，生成一棵新的树，这颗新树每生成一个新的节点，都会将控制权交回给主线程，去检查有没有优先级更高的任务需要执行。如果没有，则继续构建树的过程
  + 在构造Fiber树的过程中，Fiber Reconciler会将需要更新的节点信息保存在Effect List当中，在阶段二执行的时候，会批量更新相应的节点。
+ Fiber 执行过程：每次渲染有两个阶段：
  + Reconciliation（协调render）阶段----Diff 阶段，找出所有变更(Effect)
  + Commit（提交）阶段----需要处理的副作用，一次性执行

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
