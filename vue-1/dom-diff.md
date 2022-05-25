## VNode的作用

1. 在视图渲染之前，把写好的 template编译成 VNode 并缓存下来
2. 数据变化时，页面重新渲染，把数据变化后生成的 VNode 与钱一次的 VNode 进行对比，找出差异，对有差异的 VNode 对应到真实的 DOM 节点，就是需要渲染的节点
3. 根据有差异的 VNode 创建出真实的 DOM 并插入到视图，完成一次视图更新

什么是虚拟 DOM？用一个 JS 对象来描述一个 DOM节点， DOM-Diff 通过计算来减少 DOM 操作

- VNode 通过不同属性搭配，描述了机制类型的阶段
   1. 注释节点：text + isComment
   2. 文本节点：return new VNode(undefined, undefined, undefined, String(val))
   3. 元素节点
   4. 组件节点：componentOptions---props, componentInstance---Vue 实例
   5. 函数式组件节点：fnContext---Vue 实例，fnOptions---options
   6. 克隆节点----模板编译优化时使用

```javascript
export default class VNode {
  constructor (
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag                                /*当前节点的标签名*/
    this.data = data        /*当前节点对应的对象，包含了具体的一些数据信息，是一个VNodeData类型，可以参考VNodeData类型中的数据信息*/
    this.children = children  /*当前节点的子节点，是一个数组*/
    this.text = text     /*当前节点的文本*/
    this.elm = elm       /*当前虚拟节点对应的真实dom节点*/
    this.ns = undefined            /*当前节点的名字空间*/
    this.context = context          /*当前组件节点对应的Vue实例*/
    this.fnContext = undefined       /*函数式组件对应的Vue实例*/
    this.fnOptions = undefined
    this.fnScopeId = undefined
    this.key = data && data.key           /*节点的key属性，被当作节点的标志，用以优化*/
    this.componentOptions = componentOptions   /*组件的option选项*/
    this.componentInstance = undefined       /*当前节点对应的组件的实例*/
    this.parent = undefined           /*当前节点的父节点*/
    this.raw = false         /*简而言之就是是否为原生HTML或只是普通文本，innerHTML的时候为true，textContent的时候为false*/
    this.isStatic = false         /*静态节点标志*/
    this.isRootInsert = true      /*是否作为跟节点插入*/
    this.isComment = false             /*是否为注释节点*/
    this.isCloned = false           /*是否为克隆节点*/
    this.isOnce = false                /*是否有v-once指令*/
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }

  get child (): Component | void {
    return this.componentInstance
  }
}

// 创建克隆节点
export function cloneVNode (vnode: VNode): VNode {
  const cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.asyncMeta = vnode.asyncMeta
  cloned.isCloned = true
  return cloned
}
```

## patch 过程：以新 VNode为准，对比旧的 oldVNode

1. 创建节点：VNode 中有，而 oldVNode 中没有，就在 oldVNode 中创建
2. 删除节点：VNode 中没有，而 oldVNode 中有，就从 oldVNode 中删除
3. 更新节点：VNode 和 oldVNode中都有，以新 VNode为准，更新oldVNode
   1. 如果 VNode 和 oldVNode 均为静态节点，直接跳过无需处理
   2. 如果 VNode 是文本节点：
      1. 如果 oldVNode 也是文本节点，且与 VNode 不同，则更新 oldVNode 的文本和 VNode 的文本一样
      2. 如果oldVNode 不是文本节点，则直接调用setTextNode方法把它改成文本节点，并且文本内容跟VNode相同。
   3. 如果 VNode 是元素节点
      1. 该节点包含子节点
         1. oldVNode 也包含子节点，需要递归对比更新子节点
         2. oldVNode 不包含子节点
            - oldVNode 是空节点就把 VNode 里的子节点创建一份，更新到 oldVnode 的空节点里；
            - oldVNode 是文本节点就文本节点清空，把 VNode 里的子节点创建一份，更新到 oldVnode 的节点里；
      2. 该节点不包含子节点，又不是文本节点，即空节点，oldVNode的改节点直接清空

```javascript
// 代码中的nodeOps是Vue为了跨平台兼容性，对所有节点操作进行了封装
function createElm (vnode, parentElm, refElm) {
  const data = vnode.data
  const children = vnode.children
  const tag = vnode.tag
  if (isDef(tag)) {
    vnode.elm = nodeOps.createElement(tag, vnode)   // 创建元素节点
    createChildren(vnode, children, insertedVnodeQueue) // 创建元素节点的子节点
    insert(parentElm, vnode.elm, refElm)       // 插入到DOM中
  } else if (isTrue(vnode.isComment)) {
    vnode.elm = nodeOps.createComment(vnode.text)  // 创建注释节点
    insert(parentElm, vnode.elm, refElm)           // 插入到DOM中
  } else {
    vnode.elm = nodeOps.createTextNode(vnode.text)  // 创建文本节点
    insert(parentElm, vnode.elm, refElm)           // 插入到DOM中
  }
}
function removeNode (el) {
  const parent = nodeOps.parentNode(el)  // 获取父节点
  if (isDef(parent)) {
    nodeOps.removeChild(parent, el)  // 调用父节点的removeChild方法
  }
}

// 更新节点
function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
  // vnode与oldVnode是否完全一样？若是，退出程序
  if (oldVnode === vnode) {
    return
  }
  const elm = vnode.elm = oldVnode.elm

  // vnode与oldVnode是否都是静态节点？若是，退出程序
  if (isTrue(vnode.isStatic) &&
    isTrue(oldVnode.isStatic) &&
    vnode.key === oldVnode.key &&
    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
  ) {
    return
  }

  const oldCh = oldVnode.children
  const ch = vnode.children
  // vnode有text属性？若没有：
  if (isUndef(vnode.text)) {
    // vnode的子节点与oldVnode的子节点是否都存在？
    if (isDef(oldCh) && isDef(ch)) {
      // 若都存在，判断子节点是否相同，不同则更新子节点
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
    }
    // 若只有vnode的子节点存在
    else if (isDef(ch)) {
      /**
       * 判断oldVnode是否有文本？
       * 若没有，则把vnode的子节点添加到真实DOM中
       * 若有，则清空Dom中的文本，再把vnode的子节点添加到真实DOM中
       */
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
    }
    // 若只有oldnode的子节点存在
    else if (isDef(oldCh)) {
      // 清空DOM中的子节点
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    }
    // 若vnode和oldnode都没有子节点，但是oldnode中有文本
    else if (isDef(oldVnode.text)) {
      // 清空oldnode文本
      nodeOps.setTextContent(elm, '')
    }
    // 上面两个判断一句话概括就是，如果vnode中既没有text，也没有子节点，那么对应的oldnode中有什么就清空什么
  }
  // 若有，vnode的text属性与oldVnode的text属性是否相同？
  else if (oldVnode.text !== vnode.text) {
    // 若不相同：则用vnode的text替换真实DOM的文本
    nodeOps.setTextContent(elm, vnode.text)
  }
}

```

## 更新子节点----updateChildren

1. 新的VNode 子节点数组为 newChildren，oldVNode 子节点数组为 oldChildren，把 oldChildren 与 newChildren 进行循环对比，外层循环 newChildren，内层循环 oldChildren，找 oldChildren 里是否有与 newChildren 对应的子节点
   1. 创建子节点：没找到，之前没有该节点，就创建子节点
   2. 删除子节点：循环完毕， oldChildren还有未处理的子节点，移除
   3. 移动子节点：有相同的子节点，但位置不同，那以newChildren里子节点的位置为基准，调整oldChildren里该节点的位置，使之与在newChildren里的位置相同
   4. 更新节点：如果newChildren里面的某个子节点在oldChildren里找到了与之相同的子节点，并且所处的位置也相同，那么就更新oldChildren里该节点，使之与newChildren里的该节点相同
2. 创建子节点后插入位置是所有未处理节点之前
3. 移动子节点：所有未处理节点之前就是要移动到的目标位置

```javascript
for (let i = 0; i < newChildren.length; i++) {
  const newChild = newChildren[i];
  for (let j = 0; j < oldChildren.length; j++) {
    const oldChild = oldChildren[j];
    if (newChild === oldChild) {
      if (isUndef(idxInOld)) {    // 如果在oldChildren里找不到当前循环的newChildren里的子节点
          // 新增节点并插入到合适位置
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
      } else {
          // 如果在oldChildren里找到了当前循环的newChildren里的子节点
          vnodeToMove = oldCh[idxInOld]
          // 如果两个节点相同
          if (sameVnode(vnodeToMove, newStartVnode)) {
              // 调用patchVnode更新节点
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)
              oldCh[idxInOld] = undefined
              // canmove表示是否需要移动节点，如果为true表示需要移动，则移动节点，如果为false则不用移动
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
          }
      }
    }
  }
}
```

## 优化

1. 把 newChildern 里所有未处理的子节点的第一个节点 和 oldChildern 里的第一个子节点作对比，如果相同，直接更新节点操作
2. 如果不同，再把 newChildern 里所有未处理的子节点的最后一个子节点和oldChildern 里的所有未处理的最后一个子节点作对比，如果相同，直接更新节点操作
3. 如果不同，再把 newChildern 里所有未处理的子节点的`最后一个子节点` 和 oldChildern 里的所有未处理子节点的`第一个子节点`做对比，如果相同，直接更新节点操作，更新完后再将oldChildren数组里的该节点移动到与newChildren数组里节点相同的位置
4. 如果不同，再把newChildren数组里所有未处理子节点的`第一个子节点`和oldChildren数组里所有未处理子节点的`最后一个子节点`做比对，如果相同，那就直接进入更新节点的操作，更新完后再将oldChildren数组里的该节点移动到与newChildren数组里节点相同的位置；
5. 最后四种情况都试完如果还不同，那就按照之前循环的方式来查找节点。

- newChildren 未处理子节点的第一个节点------新前
- newChildren 未处理子节点的最后一个节点------新后
- oldChildren 未处理子节点的第一个节点------旧前
- oldChildren 未处理子节点的最后一个节点------旧后

比对顺序：

1. 新前-----旧前
2. 新后-----旧后
3. 新后-----旧前
4. 新前-----旧后

```javascript
// 循环更新子节点
function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
  let oldStartIdx = 0               // oldChildren开始索引
  let oldEndIdx = oldCh.length - 1   // oldChildren结束索引
  let oldStartVnode = oldCh[0]        // oldChildren中所有未处理节点中的第一个
  let oldEndVnode = oldCh[oldEndIdx]   // oldChildren中所有未处理节点中的最后一个

  let newStartIdx = 0               // newChildren开始索引
  let newEndIdx = newCh.length - 1   // newChildren结束索引
  let newStartVnode = newCh[0]        // newChildren中所有未处理节点中的第一个
  let newEndVnode = newCh[newEndIdx]  // newChildren中所有未处理节点中的最后一个

  let oldKeyToIdx, idxInOld, vnodeToMove, refElm

  // removeOnly is a special flag used only by <transition-group>
  // to ensure removed elements stay in correct relative positions
  // during leaving transitions
  const canMove = !removeOnly

  if (process.env.NODE_ENV !== 'production') {
    checkDuplicateKeys(newCh)
  }

  // 以"新前"、"新后"、"旧前"、"旧后"的方式开始比对节点
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx] // 如果oldStartVnode不存在，则直接跳过，比对下一个
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      // 如果新前与旧前节点相同，就把两个节点进行patch更新
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      // 如果新后与旧后节点相同，就把两个节点进行patch更新
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
      // 如果新后与旧前节点相同，先把两个节点进行patch更新，然后把旧前节点移动到oldChilren中所有未处理节点之后
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
      canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
      // 如果新前与旧后节点相同，先把两个节点进行patch更新，然后把旧后节点移动到oldChilren中所有未处理节点之前
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
      canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 如果不属于以上四种情况，就进行常规的循环比对patch
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
      // 如果在oldChildren里找不到当前循环的newChildren里的子节点
      if (isUndef(idxInOld)) { // New element
        // 新增节点并插入到合适位置
        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
      } else {
        // 如果在oldChildren里找到了当前循环的newChildren里的子节点
        vnodeToMove = oldCh[idxInOld]
        // 如果两个节点相同
        if (sameVnode(vnodeToMove, newStartVnode)) {
          // 调用patchVnode更新节点
          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)
          oldCh[idxInOld] = undefined
          // canmove表示是否需要移动节点，如果为true表示需要移动，则移动节点，如果为false则不用移动
          canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
        } else {
          // same key but different element. treat as new element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        }
      }
      newStartVnode = newCh[++newStartIdx]
    }
  }
  if (oldStartIdx > oldEndIdx) {
    /**
     * 如果oldChildren比newChildren先循环完毕，
     * 那么newChildren里面剩余的节点都是需要新增的节点，
     * 把[newStartIdx, newEndIdx]之间的所有节点都插入到DOM中
     */
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
  } else if (newStartIdx > newEndIdx) {
    /**
     * 如果newChildren比oldChildren先循环完毕，
     * 那么oldChildren里面剩余的节点都是需要删除的节点，
     * 把[oldStartIdx, oldEndIdx]之间的所有节点都删除
     */
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
  }
}
```
