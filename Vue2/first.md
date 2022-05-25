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

## 数据处理

1. Observer 为每个属性添加getter与setter；getter中把watcher添加到dep， 作数据收集；Setter中触发watcher的更新
2. watcher更新：fn为获取数据渲染模板，执行一遍历update为了在渲染过程中调用对象的getter建立两者之间的关系
3. Dep存一个Watcher数组subs；setter时会触发watcher的更新；



```javascript
// 渲染用到的方法
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
```

1. 构建Vue实例，初始化实例属性


## 问题
1. 不同的打包方式？只是导出的文件内容不一样？
2. 会不会也和模块的组织方式有关系？
3. mark, startTag, endTag(vue-pref-start:uid)的作用？性能统计？
4. \__patch__() 方法
5. 组件间传递事件
6. \_isComponent创建内部子组件 时才会为true
7. options.abstract用于判断是否是抽象组件，抽象组件比如keep-alive、transition等。
8. \_parentListeners是父组件中绑定在自定义标签上的事件

## sfc 处理单个.vue文件
1. parseComponent方法，传入content 与 options，返回SFCDescriptor
2. SFCDescriptor{template, script, styles[], customBlocks[] }
3. start(tag, attrs, unary, start, end)，depth
    - 处理成currentBlock{type: tag, content, start: end, attrs经过计算}，是否是特殊tag，特殊属性？，将currentBlock 更新到SFCDescriptor
    - !unary 时更新depth
4. end(tag, start, end)
    - depth == 1, 更新currentBlock.end 等于 start
    - 用deindent处理 conent.slice(currentBlock.start, currentBlock.end)，如果不是template需要padContent特殊处理
    - 将取出的内容更新到currentBlock.content, 再更新contentBlock为null
    - depth--
5. parseHTML(conent, {start, end})



```md
├── build    构建相关的文件，一般情况下我们不需要动
├── dist    构建后文件的输出目录
├── examples    存放一些使用Vue开发的应用案例
├── flow    类型声明，使用开源项目 [Flow](https://flowtype.org/)
├── package.json    不解释
├── test    包含所有测试文件
├── src    这个是我们最应该关注的目录，包含了源码
│   ├── platforms    包含了不同的构建或包的入口文件
│   │   ├──web
│   │   │   ├── compiler
│   │   │   │   ├──options.js    编译基础配置项设置: modules, directives, isPreTag方法, mustUseProp表单元素判断, canBeLeftOpenTag, isReservedTag, getTagNamespace, staticKeys
│   │   │   │   ├──modules    定义class, model, style待属性模块的{staticKeys, transformNode, getData}
│   │   │   │   ├──directives    html, model, text
│   │   │   ├── runtime
│   │   │   ├── server
│   │   │   ├── util
│   │   │   ├── entry-compiler.js    vue-template-compiler 包的入口文件 `compiler`
│   │   │   ├── entry-runtime-with-compiler.js    独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器 `runtime & compiler`
│   │   │   ├── entry-runtime.js    运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意 `runtime 用于webapck 和 browserify 的bundlers`
│   │   │   ├── entry-server-basic-renderer.js
│   │   │   ├── entry-server-render.js    vue-server-renderer 包的入口文件 `web server render`
│   │   ├──weex
│   │   │   ├── compiler
│   │   │   ├── runtime
│   │   │   ├── util
│   │   │   ├── entry-compiler.js
│   │   │   ├── entry-framework.js
│   │   │   ├── entry-runtime-factory.js
│   ├── compiler    编译器代码的存放目录，将 template 编译为 render 函数
│   │   ├── parser    存放将模板字符串转换成元素抽象语法树的代码
│   │   ├── directives    通用生成render函数之前需要处理的指令
│   │   ├── codegen    存放从抽象语法树(AST)生成render函数的代码
│   │   ├── optimizer.js    分析静态树，优化vdom渲染
│   ├── core    存放通用的，平台无关的代码
│   │   ├── observer    反应系统，包含数据观测的核心代码
│   │   ├── vdom    包含虚拟DOM创建(creation)和打补丁(patching)的代码
│   │   ├── instance    实例相关内容，包括实例方法，生命周期，事件等
│   │   ├── global-api    包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
│   │   ├── components    全局的组件，这里只有keep-alive
│   ├── server    包含服务端渲染(server-side rendering)的相关代码
│   ├── platforms    包含平台特有的相关代码
│   ├── sfc    包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包
│   ├── shared    shared 共享的工具方法

```

