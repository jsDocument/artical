## Vue执行顺序
1. 定义Vue基础实例方法与静态方法
    - installRenderHelpers---Vue的属性FunctionalRenderContext的value方法的实例方法(data, props, children, contextVm, Ctor)『vdom相关』
    - initMixin---定义实例方法__init[initInternalComponent, 合并实例属性, initProxy, initLifecycle, initEvents, initRender, callHook(vm, 'beforeCreate'), initInjections(vm), initState(vm), initProvide(vm), callHook(vm, 'created'), 挂载]
    - stateMixin---定义实例属性$data, $props的get与set方法， 实例方法$set与$delete, $watch方法
    - eventsMixin---定义实例方法$on, $once, $off, $emit
    - lifecycleMixin---定义实例方法_updte, $forceUpdate, $destory
    - renderMixin---定义实例方法$nextTice, \_render
    - initGlobalAPI---定义静态属性config的get与set方法，静态方法util[warn, extend, mergeOptions, defineReactive], set, delete, nextTice, options, \_base, extend(Vue.options.components, builtInComponents), initUse(), initMixin$1(), initExtend(), initAssetRegisters()
    『use----定义Vue.use(plugin)方法』
    - extend(Vue.options.directives, platformDirectives);
    - extend(Vue.options.components, platformComponents);


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

2. 构建Vue实例，初始化实例属性

## Vue骨架

1. core/instance 定义Vue构造函数与初始化属性
2. core/global-api 定义初始化Use, Minxin, Extend, AssetRegisters及Vue的一些静态方法：util, config, set, delete, nextTick, options
3. core/components keep-alive
4. core/util/env 服务器渲染 定义Vue属性 $isServer, $ssrContext 与 this.$vnode.$ssrContext
5. core/vdoms/create-functional-component 定义Vue属性 FunctionalRenderContext

## Vue实例方法
1. 定义_init『initLifecycle, initEvents, initRender, callHook(beforeCreate), initInjections, initState, initProvide, callHook('created'), 挂载』
    - initLifecycle『$parent, $root, $children, $refs, \_watcher, \_inactive, \_directInactive, \_isMounted, \_isDestroyed, \_isBeginDestroyed』
    - initEvents：定义vm.events, vm.\_hasHookEvent, updateListeners更新组件监听(vm.$options.\_parentListener)
    - initRender：定义vm.『\_vnode=options.\_parentVnode, \_staticTrees, $slots, $scopedSlots, \_c, $createElement, 定义$attrs与$listeners的defineReactive』
    - callHook时，更新Dep.target了？执行回调，触发事件，再次更新Dep.target
    - 初始化inject？？
    - 
2. 初始化状态『』
3. 事件方法初始化『$on, $once, $off, $emit』更新或移除vm.\_events[event] = [fn]
4. lifecycle初始化『\_update, $forceUpdate, $destroy』
5. renderMixin『installRenderHelpers(), $nextTick, \_render』

## Vue全局API定义
1. Vue.use：this.\_installedPlugins[], 安装是plugin.install.apply(plugin, [this,args]) 或 plugin.apply(null, [this, args]); 并将plugin更新到installedPlugins
2. Vue.mixin(mixin)：合并mix到this.options
3. Vue.extend(extendOptions)：定义Super = this, SuperId = Super.cid; Sub, Sub.prototype是根据Super.protype创建; Sub.prototype.contructor，Sub.cid++，Sub.options是Super.options与extendOptions；再initProps(Sub)及initComputed(Sub), Sub.extend, Sub.mixin, Sub.use, Sub[Tyep], Sub['super'], Sub.options.components[name], Sub.superOptions, SUb.extendOptions, Sub.sealedOptions; 更新extendOptions.\_Ctor[SuperId] = Sub
    - initProps(Sub)-->对props进行proxy(Sub.prototype, `_props`, key)
    - initComputed(Sub)-->对computed进行defineComputed(Sub.prototype, key, computed[key])
4. 循环定义Vue.component, Vue.directive, Vue.filter(id, definition)的方法；compoment且definition是纯对象，时加definition.name, 再添加到this.options.\_base上；是directive且definition是function，定义bind及update的方法为definition；并将其更新到this.options

## 入口
1. /src/entries/web-runtime.js：扩展了Vue.options.directives（model和show）和Vue.options.components（Transition和TransitionGroup)。在Vue.prototype上添加了__patch__(虚拟dom相关)和$mount（挂载元素）。
2. /src/entries/web-runtime-with-compiler.js：定义了一个方法Vue.prototype.$mount 及 将compileToFunctions挂在到Vue.compile上

## 问题
1. 不同的打包方式？只是导出的文件内容不一样？
2. 会不会也和模块的组织方式有关系？
3. mark, startTag, endTag(vue-pref-start:uid)的作用？性能统计？
4. \__patch__() 方法
5. 组件间传递事件
6. \_isComponent创建内部子组件 时才会为true
7. options.abstract用于判断是否是抽象组件，抽象组件比如keep-alive、transition等。
8. \_parentListeners是父组件中绑定在自定义标签上的事件

## 代码中还是有flow作代码静态检查
1. /* @flow \*/

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

## Vue2项目规划
├── build --------------------------------- 构建相关的文件，一般情况下我们不需要动
├── dist ---------------------------------- 构建后文件的输出目录
├── examples ------------------------------ 存放一些使用Vue开发的应用案例
├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)
├── package.json -------------------------- 不解释
├── test ---------------------------------- 包含所有测试文件
├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码
│   ├── platforms ------------------------- 包含了不同的构建或包的入口文件
│   │   ├──web
│   │   │   ├── compiler
│   │   │   │   ├──options.js ------------- 编译基础配置项设置: modules, directives, isPreTag方法, mustUseProp表单元素判断, canBeLeftOpenTag, isReservedTag, getTagNamespace, staticKeys
│   │   │   │   ├──modules ---------------- 定义class, model, style待属性模块的{staticKeys, transformNode, getData}
│   │   │   │   ├──directives ------------- html, model, text
│   │   │   ├── runtime
│   │   │   ├── server
│   │   │   ├── util
│   │   │   ├── entry-compiler.js --------------- vue-template-compiler 包的入口文件 `compiler`
│   │   │   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器 `runtime & compiler`
│   │   │   ├── entry-runtime.js ---------------- 运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意 `runtime 用于webapck 和 browserify 的bundlers`
│   │   │   ├── entry-server-basic-renderer.js
│   │   │   ├── entry-server-render.js ---------- vue-server-renderer 包的入口文件 `web server render`
│   │   ├──weex
│   │   │   ├── compiler
│   │   │   ├── runtime
│   │   │   ├── util
│   │   │   ├── entry-compiler.js
│   │   │   ├── entry-framework.js
│   │   │   ├── entry-runtime-factory.js
│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数
│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码
│   │   ├── directives -------------------- 通用生成render函数之前需要处理的指令
│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码
│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染
│   ├── core ------------------------------ 存放通用的，平台无关的代码
│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码
│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码
│   │   ├── instance ---------------------- 实例相关内容，包括实例方法，生命周期，事件等
│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码
│   │   ├── components -------------------- 全局的组件，这里只有keep-alive
│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码
│   ├── platforms ------------------------- 包含平台特有的相关代码
│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包
│   ├── shared ---------------------------- shared 共享的工具方法

