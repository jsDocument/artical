## 简说Vue的执行过程

## 编译中Node节点的处理

VNODE所包含的信息：
```javascript
{
tag: string | void;
  data: VNodeData | void;
  children: ?Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  fnScopeId: ?string; // functional scope id support
}
```
实现了创建空节点，文件节点，节点复本的方法

patch.js
1. sameNove(a, b) 包含key, tag, isComent, data已定义, sameInputType(a, b) 或 a.isAsyncPlaceholder为true, a.asyncFactory === b.asyncFactory, b.asyncFactory.error未定义

2. sameInputType(a, b) a与b的data, attrs已定义且里面包含type；


## lifecycleMixin 定义了_update方法实现
1. prevVnode __patch__()更新vm.$el
2. $forceUpdate是调用wm._watcher.update()
3. $destory：钩子beforeDestroy、移除节点、销毁vm._watcher、vm._data__ob__.vmCount更新、vm.__patch__(vm._vnode, null)、钩子destoryed、vm.$off()、vm.$el.__vue__ = null、vm.$vnode.parent = null
4. mountComponent：钩子beforeMounted、updateComponent方法：vm._update(vm._render, hydrating) 或vm._update(vnode, hydrating)、new Watcher(vm, updateComponent, noop, {before(){钩子beforeUpdate}}, true)






1. vm.\_vnode
2. __patch__ 与 \_update 及 \_render 分别实现的功能
3. vm.\_inactive, vm.\_directInactive的作用

指令定义包含：(create, update, destory)
Ref指令：根据vnode.data.ref获取key；vnode.context指向vm，获取其$refs；进行移除 或 更新vm.$refs[key]中的值

全局变量：activeInstance = vm 或 null，\_update时会更新为vm




- init: vnodecomponentInstance，A: prepatch(vnode, vnode) B: child = vnode.componentInstance = createComponentInstanceForVnode( vnode, activeInstance), child.$mount(hydrating ? vnode.elm : undefined, hydrating)

## 编译过程
1. Vue更新是为了生成render函数，然后生成虚拟dom，映射到页面上。

## 数据处理
1. Observer 为每个属性添加getter与setter；getter中把watcher添加到dep， 作数据收集；Setter中触发watcher的更新
2. watcher更新：fn为获取数据渲染模板，执行一遍历update为了在渲染过程中调用对象的getter建立两者之间的关系
3. Dep存一个Watcher数组subs；setter时会触发watcher的更新；
