### 虚拟DOM, 封装过的事件机制
1. 构造DOM树, 进行对比, 变化 部分进行实际的DOM更新, 能够指处理虚拟DOM的刷新, 在一个事件循环内的两次数据变化会被合并

### 其他
1. 单向数据流
2. 只读数据
3. JSX
4. 

### 启发式算法：利用过去的经验，选择已经行之有效的方法，而不是系统地、以确定的步骤去寻求答案。
1. 采用一系列前提和假设
2. 不同的两个元素会产生不同的树
3. 可以使用key来表明不同的的渲染中哪些元素是相同的
4. React.createElement(type,attr,text), 如果树中同一位置的元素节点时，如果前后元素的类型不同时，不论该元素是组件 或DOM，这个节点为子元素的所有节点都会被销毁并重新构建
5. 卸载与重新安装，会造成状态的丢失。
6. 如果元素类型相同，为DOM时，只更新元素属性，如果是组件类型，也保持组件实例的不变，会更新组件实例的属性来匹配新元素，并在元素实例上调用componentWillReceiveProps()与componentWillUpdate()
7. 对于列表, 如果第一项为新增, 其他项不变, 采用插入, 性能极大提升, 关键为`key属性`
8. ReactDOM.render(element, container, [callback]) --> diff 将虚拟node节点映射到真实的DOM节点

function diff(dom, vnode, context, mountAll, parent, componentRoot) {

  // diffLevel为 0 时表示第一次进入diff函数
  if (!diffLevel++) {
    // 第一次执行diff，查看我们是否在diff SVG元素或者是元素在SVG内部
    isSvgMode = parent!=null && parent.ownerSVGElement!==undefined;

    // hydration 指示的是被diff的现存元素是否含有属性props的缓存
    // 属性props的缓存被存在dom节点的__preactattr_属性中
    hydrating = dom!=null && !(ATTR_KEY in dom);
  }

  let ret = idiff(dom, vnode, context, mountAll, componentRoot);

  // 如果父节点之前没有创建的这个子节点，则将子节点添加到父节点之后
  if (parent && ret.parentNode!==parent) parent.appendChild(ret);

  // diffLevel回减到0说明已经要结束diff的调用
  if (!--diffLevel) {
    hydrating = false;
    // 负责触发组件的componentDidMount生命周期函数
    if (!componentRoot) flushMounts();
  }

  return ret;
}
+ dom 当前vnode对应的之前未更新的真实dom
+ vnode为虚拟node节点, 递归结构
+ idiff返回虚拟dom对应创建的真实dom节点, 向父级元素有选择性添加所创建的dom节点

function idiff(dom, vnode, context, mountAll, componentRoot) {
  // block-1
  let out = dom, prevSvgMode = isSvgMode;

  // 空的node 渲染空的文本节点
  if (vnode==null || typeof vnode==='boolean') vnode = '';

  // String & Number 类型的节点 创建/更新 文本节点
  if (typeof vnode==='string' || typeof vnode==='number') {

    // 更新如果存在的原有文本节点
    // 这里如果节点值是文本类型，其父节点又是文本类型的节点，则直接更新
    if (dom && dom.splitText!==undefined && dom.parentNode && (!dom._component || componentRoot)) {
      if (dom.nodeValue!=vnode) {
        dom.nodeValue = vnode;
      }
    }
    else {
      // 不是文本节点，替换之前的节点，回收之前的节点
      out = document.createTextNode(vnode);
      if (dom) {
        if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
        recollectNodeTree(dom, true);
      }
    }

    out[ATTR_KEY] = true;
    return out;
  }

  // block-2
  // 如果是VNode代表的是一个组件，使用组件的diff
  let vnodeName = vnode.nodeName;
  if (typeof vnodeName==='function') {
    return buildComponentFromVNode(dom, vnode, context, mountAll);
  }

  // block-3  
  // 沿着树向下时记录记录存在的SVG命名空间
  isSvgMode = vnodeName==='svg' ? true : vnodeName==='foreignObject' ? false : isSvgMode;

  // 如果不是一个已经存在的元素或者类型有问题，则重新创建一个
  vnodeName = String(vnodeName);
  if (!dom || !isNamedNode(dom, vnodeName)) {
    out = createNode(vnodeName, isSvgMode);

    if (dom) {
      // 移动dom中的子元素到out中
      while (dom.firstChild) out.appendChild(dom.firstChild);

      // 如果之前的元素已经属于某一个DOM节点，则将其替换
      if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

      // 回收之前的dom元素(跳过非元素类型)
      recollectNodeTree(dom, true);
    }
  }

  // block-4
  let fc = out.firstChild,
    props = out[ATTR_KEY],
    vchildren = vnode.children;

  if (props==null) {
    props = out[ATTR_KEY] = {};
    for (let a=out.attributes, i=a.length; i--; ) props[a[i].name] = a[i].value;
  }

  // 优化: 对于元素只包含一个单一文本节点的优化路径
  if (!hydrating && vchildren && vchildren.length===1 && typeof vchildren[0]==='string' && fc!=null && fc.splitText!==undefined && fc.nextSibling==null) {
    if (fc.nodeValue!=vchildren[0]) {
      fc.nodeValue = vchildren[0];
    }
  }
  // 否则，如果有存在的子节点或者新的孩子节点，执行diff
  else if (vchildren && vchildren.length || fc!=null) {
    innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML!=null);
  }

  // 将props和atrributes从VNode中应用到DOM元素
  diffAttributes(out, vnode.attributes, props);

  // 恢复之前的SVG模式
  isSvgMode = prevSvgMode;

  return out;
}

function recollectNodeTree(node, unmountOnly) {
  let component = node.\_component;
  if (component) {
    // 如果该节点属于某个组件，卸载该组件(最终在这里递归),主要包括组件的回收和相依卸载生命周期的调用
    unmountComponent(component);
  }
  else {
    // 如果节点含有ref函数，则执行ref函数，参数为null(这里是React的规范，用于取消设置引用)
    // 确实在React如果设置了ref的话，在卸载的时候，也会被回调，得到的参数是null
    if (node[ATTR_KEY]!=null && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);

    if (unmountOnly===false || node[ATTR_KEY]==null) {
      //要做的无非是从父节点将该子节点删除
      removeNode(node);
    }

    //递归删除子节点
    removeChildren(node);
  }
}


export function removeChildren(node) {
  node = node.lastChild;
  while (node) {
    let next = node.previousSibling;
    recollectNodeTree(node, true);
    node = next;
  }
}

function removeNode(node) {
  let parentNode = node.parentNode;
  if (parentNode) parentNode.removeChild(node);
}







## React的component如何创建并渲染？
+ React本身返回一个React对象，有createElement方法

## React的事件系统用了享元模式？

## React.js文件
+ 将ReactIsomorphic合并到React对象

## addons

## isomorphic
+ ReactIsomorphic 定义整个React对象 Children, Component, (createElement, cloneElement, createFactory-->ReactElement),isValidElement, PropTypes, createClass, createMixin, DOM, version, __spread
- ReactElement-->element; createElement、cloneElement更新所有属性 createFactory
  - $$typeof = Symbol.for('react.element') || 0xeac7
  - type
  - key
  - ref
  - props
  - element._store.validated
  - _self
  - _source
- ReactComponent
  - props
  - context
  - refs
  - updater

+ class

## renderers
+ Reconcilers管理render、用户组件、状态、生命周期等跨平台的

## shared
+ assign
+ deprecated(fn, newModule, newPackage, ctx, fn) 警告


代码风格：Haste，每个文件只能引用 自己文件夹内部的；两个文件夹内部有公共的地方，要建一个shared目录来保存；引入了Flow来进行类型限制。
