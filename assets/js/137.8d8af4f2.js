(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{121:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"vue执行顺序"}},[t._v("Vue执行顺序")]),n("ol",[n("li",[t._v("定义Vue基础实例方法与静态方法\n"),n("ul",[n("li",[t._v("installRenderHelpers---Vue的属性FunctionalRenderContext的value方法的实例方法(data, props, children, contextVm, Ctor)『vdom相关』")]),n("li",[t._v("initMixin---定义实例方法__init[initInternalComponent, 合并实例属性, initProxy, initLifecycle, initEvents, initRender, callHook(vm, 'beforeCreate'), initInjections(vm), initState(vm), initProvide(vm), callHook(vm, 'created'), 挂载]")]),n("li",[t._v("stateMixin---定义实例属性$data, $props的get与set方法， 实例方法$set与$delete, $watch方法")]),n("li",[t._v("eventsMixin---定义实例方法$on, $once, $off, $emit")]),n("li",[t._v("lifecycleMixin---定义实例方法_updte, $forceUpdate, $destory")]),n("li",[t._v("renderMixin---定义实例方法$nextTice, _render")]),n("li",[t._v("initGlobalAPI---定义静态属性config的get与set方法，静态方法util[warn, extend, mergeOptions, defineReactive], set, delete, nextTice, options, _base, extend(Vue.options.components, builtInComponents), initUse(), initMixin$1(), initExtend(), initAssetRegisters()\n『use----定义Vue.use(plugin)方法』")]),n("li",[t._v("extend(Vue.options.directives, platformDirectives);")]),n("li",[t._v("extend(Vue.options.components, platformComponents);")])])])]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 渲染用到的方法")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_o "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" markOnce"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_n "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" toNumber"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_s "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" toString"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_l "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" renderList"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_t "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" renderSlot"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_q "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" looseEqual"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" looseIndexOf"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_m "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" renderStatic"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_f "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" resolveFilter"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_k "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" checkKeyCodes"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_b "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bindObjectProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_v "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" createTextVNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_e "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" createEmptyVNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_u "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" resolveScopedSlots"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_g "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bindObjectListeners"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("构建Vue实例，初始化实例属性")])]),n("h2",{attrs:{id:"vue骨架"}},[t._v("Vue骨架")]),n("ol",[n("li",[t._v("core/instance 定义Vue构造函数与初始化属性")]),n("li",[t._v("core/global-api 定义初始化Use, Minxin, Extend, AssetRegisters及Vue的一些静态方法：util, config, set, delete, nextTick, options")]),n("li",[t._v("core/components keep-alive")]),n("li",[t._v("core/util/env 服务器渲染 定义Vue属性 $isServer, $ssrContext 与 this.$vnode.$ssrContext")]),n("li",[t._v("core/vdoms/create-functional-component 定义Vue属性 FunctionalRenderContext")])]),n("h2",{attrs:{id:"vue实例方法"}},[t._v("Vue实例方法")]),n("ol",[n("li",[t._v("定义_init『initLifecycle, initEvents, initRender, callHook(beforeCreate), initInjections, initState, initProvide, callHook('created'), 挂载』\n"),n("ul",[n("li",[t._v("initLifecycle『$parent, $root, $children, $refs, _watcher, _inactive, _directInactive, _isMounted, _isDestroyed, _isBeginDestroyed』")]),n("li",[t._v("initEvents：定义vm.events, vm._hasHookEvent, updateListeners更新组件监听(vm.$options._parentListener)")]),n("li",[t._v("initRender：定义vm.『_vnode=options._parentVnode, _staticTrees, $slots, $scopedSlots, _c, $createElement, 定义$attrs与$listeners的defineReactive』")]),n("li",[t._v("callHook时，更新Dep.target了？执行回调，触发事件，再次更新Dep.target")]),n("li",[t._v("初始化inject？？")]),n("li")])]),n("li",[t._v("初始化状态『』")]),n("li",[t._v("事件方法初始化『$on, $once, $off, $emit』更新或移除vm._events[event] = [fn]")]),n("li",[t._v("lifecycle初始化『_update, $forceUpdate, $destroy』")]),n("li",[t._v("renderMixin『installRenderHelpers(), $nextTick, _render』")])]),n("h2",{attrs:{id:"vue全局api定义"}},[t._v("Vue全局API定义")]),n("ol",[n("li",[t._v("Vue.use：this._installedPlugins[], 安装是plugin.install.apply(plugin, [this,args]) 或 plugin.apply(null, [this, args]); 并将plugin更新到installedPlugins")]),n("li",[t._v("Vue.mixin(mixin)：合并mix到this.options")]),n("li",[t._v("Vue.extend(extendOptions)：定义Super = this, SuperId = Super.cid; Sub, Sub.prototype是根据Super.protype创建; Sub.prototype.contructor，Sub.cid++，Sub.options是Super.options与extendOptions；再initProps(Sub)及initComputed(Sub), Sub.extend, Sub.mixin, Sub.use, Sub[Tyep], Sub['super'], Sub.options.components[name], Sub.superOptions, SUb.extendOptions, Sub.sealedOptions; 更新extendOptions._Ctor[SuperId] = Sub\n"),n("ul",[n("li",[t._v("initProps(Sub)--\x3e对props进行proxy(Sub.prototype, "),n("code",[t._v("_props")]),t._v(", key)")]),n("li",[t._v("initComputed(Sub)--\x3e对computed进行defineComputed(Sub.prototype, key, computed[key])")])])]),n("li",[t._v("循环定义Vue.component, Vue.directive, Vue.filter(id, definition)的方法；compoment且definition是纯对象，时加definition.name, 再添加到this.options._base上；是directive且definition是function，定义bind及update的方法为definition；并将其更新到this.options")])]),n("h2",{attrs:{id:"入口"}},[t._v("入口")]),n("ol",[n("li",[t._v("/src/entries/web-runtime.js：扩展了Vue.options.directives（model和show）和Vue.options.components（Transition和TransitionGroup)。在Vue.prototype上添加了__patch__(虚拟dom相关)和$mount（挂载元素）。")]),n("li",[t._v("/src/entries/web-runtime-with-compiler.js：定义了一个方法Vue.prototype.$mount 及 将compileToFunctions挂在到Vue.compile上")])]),n("h2",{attrs:{id:"问题"}},[t._v("问题")]),n("ol",[n("li",[t._v("不同的打包方式？只是导出的文件内容不一样？")]),n("li",[t._v("会不会也和模块的组织方式有关系？")]),n("li",[t._v("mark, startTag, endTag(vue-pref-start:uid)的作用？性能统计？")]),n("li",[t._v("_"),n("em",[t._v("patch")]),t._v("_() 方法")]),n("li",[t._v("组件间传递事件")]),n("li",[t._v("_isComponent创建内部子组件 时才会为true")]),n("li",[t._v("options.abstract用于判断是否是抽象组件，抽象组件比如keep-alive、transition等。")]),n("li",[t._v("_parentListeners是父组件中绑定在自定义标签上的事件")])]),n("h2",{attrs:{id:"代码中还是有flow作代码静态检查"}},[t._v("代码中还是有flow作代码静态检查")]),n("ol",[n("li",[t._v("/* @flow */")])]),n("h2",{attrs:{id:"sfc-处理单个-vue文件"}},[t._v("sfc 处理单个.vue文件")]),n("ol",[n("li",[t._v("parseComponent方法，传入content 与 options，返回SFCDescriptor")]),n("li",[t._v("SFCDescriptor{template, script, styles[], customBlocks[] }")]),n("li",[t._v("start(tag, attrs, unary, start, end)，depth\n"),n("ul",[n("li",[t._v("处理成currentBlock{type: tag, content, start: end, attrs经过计算}，是否是特殊tag，特殊属性？，将currentBlock 更新到SFCDescriptor")]),n("li",[t._v("!unary 时更新depth")])])]),n("li",[t._v("end(tag, start, end)\n"),n("ul",[n("li",[t._v("depth == 1, 更新currentBlock.end 等于 start")]),n("li",[t._v("用deindent处理 conent.slice(currentBlock.start, currentBlock.end)，如果不是template需要padContent特殊处理")]),n("li",[t._v("将取出的内容更新到currentBlock.content, 再更新contentBlock为null")]),n("li",[t._v("depth--")])])]),n("li",[t._v("parseHTML(conent, {start, end})")])]),n("h2",{attrs:{id:"vue2项目规划"}},[t._v("Vue2项目规划")]),n("p",[t._v("├── build --------------------------------- 构建相关的文件，一般情况下我们不需要动\n├── dist ---------------------------------- 构建后文件的输出目录\n├── examples ------------------------------ 存放一些使用Vue开发的应用案例\n├── flow ---------------------------------- 类型声明，使用开源项目 "),n("a",{attrs:{href:"https://flowtype.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow")]),t._v("\n├── package.json -------------------------- 不解释\n├── test ---------------------------------- 包含所有测试文件\n├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码\n│   ├── platforms ------------------------- 包含了不同的构建或包的入口文件\n│   │   ├──web\n│   │   │   ├── compiler\n│   │   │   │   ├──options.js ------------- 编译基础配置项设置: modules, directives, isPreTag方法, mustUseProp表单元素判断, canBeLeftOpenTag, isReservedTag, getTagNamespace, staticKeys\n│   │   │   │   ├──modules ---------------- 定义class, model, style待属性模块的{staticKeys, transformNode, getData}\n│   │   │   │   ├──directives ------------- html, model, text\n│   │   │   ├── runtime\n│   │   │   ├── server\n│   │   │   ├── util\n│   │   │   ├── entry-compiler.js --------------- vue-template-compiler 包的入口文件 "),n("code",[t._v("compiler")]),t._v("\n│   │   │   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器 "),n("code",[t._v("runtime & compiler")]),t._v("\n│   │   │   ├── entry-runtime.js ---------------- 运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 "),n("code",[t._v("template")]),t._v(" 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意 "),n("code",[t._v("runtime 用于webapck 和 browserify 的bundlers")]),t._v("\n│   │   │   ├── entry-server-basic-renderer.js\n│   │   │   ├── entry-server-render.js ---------- vue-server-renderer 包的入口文件 "),n("code",[t._v("web server render")]),t._v("\n│   │   ├──weex\n│   │   │   ├── compiler\n│   │   │   ├── runtime\n│   │   │   ├── util\n│   │   │   ├── entry-compiler.js\n│   │   │   ├── entry-framework.js\n│   │   │   ├── entry-runtime-factory.js\n│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数\n│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码\n│   │   ├── directives -------------------- 通用生成render函数之前需要处理的指令\n│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码\n│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染\n│   ├── core ------------------------------ 存放通用的，平台无关的代码\n│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码\n│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码\n│   │   ├── instance ---------------------- 实例相关内容，包括实例方法，生命周期，事件等\n│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码\n│   │   ├── components -------------------- 全局的组件，这里只有keep-alive\n│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码\n│   ├── platforms ------------------------- 包含平台特有的相关代码\n│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包\n│   ├── shared ---------------------------- shared 共享的工具方法")])])}],!1,null,null,null);e.default=i.exports}}]);