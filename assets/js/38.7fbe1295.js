(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{228:function(e,t,n){"use strict";n.r(t);var s=n(6),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"vue执行顺序"}},[e._v("Vue执行顺序")]),e._v(" "),n("ol",[n("li",[e._v("定义Vue基础实例方法与静态方法\n"),n("ul",[n("li",[e._v("installRenderHelpers---Vue的属性FunctionalRenderContext的value方法的实例方法(data, props, children, contextVm, Ctor)『vdom相关』")]),e._v(" "),n("li",[e._v("initMixin---定义实例方法__init[initInternalComponent, 合并实例属性, initProxy, initLifecycle, initEvents, initRender, callHook(vm, 'beforeCreate'), initInjections(vm), initState(vm), initProvide(vm), callHook(vm, 'created'), 挂载]")]),e._v(" "),n("li",[e._v("stateMixin---定义实例属性$data, $props的get与set方法， 实例方法$set与$delete, $watch方法")]),e._v(" "),n("li",[e._v("eventsMixin---定义实例方法$on, $once, $off, $emit")]),e._v(" "),n("li",[e._v("lifecycleMixin---定义实例方法_updte, $forceUpdate, $destory")]),e._v(" "),n("li",[e._v("renderMixin---定义实例方法$nextTice, _render")]),e._v(" "),n("li",[e._v("initGlobalAPI---定义静态属性config的get与set方法，静态方法util[warn, extend, mergeOptions, defineReactive], set, delete, nextTice, options, _base, extend(Vue.options.components, builtInComponents), initUse(), initMixin$1(), initExtend(), initAssetRegisters()\n『use----定义Vue.use(plugin)方法』")]),e._v(" "),n("li",[e._v("extend(Vue.options.directives, platformDirectives);")]),e._v(" "),n("li",[e._v("extend(Vue.options.components, platformComponents);")])])])]),e._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 渲染用到的方法")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_o "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" markOnce"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_n "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" toNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_s "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" toString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_l "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" renderList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_t "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" renderSlot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_q "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" looseEqual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_i "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" looseIndexOf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_m "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" renderStatic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_f "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" resolveFilter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_k "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" checkKeyCodes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_b "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" bindObjectProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_v "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" createTextVNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_e "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" createEmptyVNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_u "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" resolveScopedSlots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_g "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" bindObjectListeners"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("构建Vue实例，初始化实例属性")])]),e._v(" "),n("h2",{attrs:{id:"vue骨架"}},[e._v("Vue骨架")]),e._v(" "),n("ol",[n("li",[e._v("core/instance 定义Vue构造函数与初始化属性")]),e._v(" "),n("li",[e._v("core/global-api 定义初始化Use, Minxin, Extend, AssetRegisters及Vue的一些静态方法：util, config, set, delete, nextTick, options")]),e._v(" "),n("li",[e._v("core/components keep-alive")]),e._v(" "),n("li",[e._v("core/util/env 服务器渲染 定义Vue属性 $isServer, $ssrContext 与 this.$vnode.$ssrContext")]),e._v(" "),n("li",[e._v("core/vdoms/create-functional-component 定义Vue属性 FunctionalRenderContext")])]),e._v(" "),n("h2",{attrs:{id:"vue实例方法"}},[e._v("Vue实例方法")]),e._v(" "),n("ol",[n("li",[e._v("定义_init『initLifecycle, initEvents, initRender, callHook(beforeCreate), initInjections, initState, initProvide, callHook('created'), 挂载』\n"),n("ul",[n("li",[e._v("initLifecycle『$parent, $root, $children, $refs, _watcher, _inactive, _directInactive, _isMounted, _isDestroyed, _isBeginDestroyed』")]),e._v(" "),n("li",[e._v("initEvents：定义vm.events, vm._hasHookEvent, updateListeners更新组件监听(vm.$options._parentListener)")]),e._v(" "),n("li",[e._v("initRender：定义vm.『_vnode=options._parentVnode, _staticTrees, $slots, $scopedSlots, _c, $createElement, 定义$attrs与$listeners的defineReactive』")]),e._v(" "),n("li",[e._v("callHook时，更新Dep.target了？执行回调，触发事件，再次更新Dep.target")]),e._v(" "),n("li",[e._v("初始化inject？？")]),e._v(" "),n("li")])]),e._v(" "),n("li",[e._v("初始化状态『』")]),e._v(" "),n("li",[e._v("事件方法初始化『$on, $once, $off, $emit』更新或移除vm._events[event] = [fn]")]),e._v(" "),n("li",[e._v("lifecycle初始化『_update, $forceUpdate, $destroy』")]),e._v(" "),n("li",[e._v("renderMixin『installRenderHelpers(), $nextTick, _render』")])]),e._v(" "),n("h2",{attrs:{id:"vue全局api定义"}},[e._v("Vue全局API定义")]),e._v(" "),n("ol",[n("li",[e._v("Vue.use：this._installedPlugins[], 安装是plugin.install.apply(plugin, [this,args]) 或 plugin.apply(null, [this, args]); 并将plugin更新到installedPlugins")]),e._v(" "),n("li",[e._v("Vue.mixin(mixin)：合并mix到this.options")]),e._v(" "),n("li",[e._v("Vue.extend(extendOptions)：定义Super = this, SuperId = Super.cid; Sub, Sub.prototype是根据Super.protype创建; Sub.prototype.contructor，Sub.cid++，Sub.options是Super.options与extendOptions；再initProps(Sub)及initComputed(Sub), Sub.extend, Sub.mixin, Sub.use, Sub[Tyep], Sub['super'], Sub.options.components[name], Sub.superOptions, SUb.extendOptions, Sub.sealedOptions; 更新extendOptions._Ctor[SuperId] = Sub\n"),n("ul",[n("li",[e._v("initProps(Sub)--\x3e对props进行proxy(Sub.prototype, "),n("code",[e._v("_props")]),e._v(", key)")]),e._v(" "),n("li",[e._v("initComputed(Sub)--\x3e对computed进行defineComputed(Sub.prototype, key, computed[key])")])])]),e._v(" "),n("li",[e._v("循环定义Vue.component, Vue.directive, Vue.filter(id, definition)的方法；compoment且definition是纯对象，时加definition.name, 再添加到this.options._base上；是directive且definition是function，定义bind及update的方法为definition；并将其更新到this.options")])]),e._v(" "),n("h2",{attrs:{id:"入口"}},[e._v("入口")]),e._v(" "),n("ol",[n("li",[e._v("/src/entries/web-runtime.js：扩展了Vue.options.directives（model和show）和Vue.options.components（Transition和TransitionGroup)。在Vue.prototype上添加了__patch__(虚拟dom相关)和$mount（挂载元素）。")]),e._v(" "),n("li",[e._v("/src/entries/web-runtime-with-compiler.js：定义了一个方法Vue.prototype.$mount 及 将compileToFunctions挂在到Vue.compile上")])]),e._v(" "),n("h2",{attrs:{id:"问题"}},[e._v("问题")]),e._v(" "),n("ol",[n("li",[e._v("不同的打包方式？只是导出的文件内容不一样？")]),e._v(" "),n("li",[e._v("会不会也和模块的组织方式有关系？")]),e._v(" "),n("li",[e._v("mark, startTag, endTag(vue-pref-start:uid)的作用？性能统计？")]),e._v(" "),n("li",[e._v("_"),n("em",[e._v("patch")]),e._v("_() 方法")]),e._v(" "),n("li",[e._v("组件间传递事件")]),e._v(" "),n("li",[e._v("_isComponent创建内部子组件 时才会为true")]),e._v(" "),n("li",[e._v("options.abstract用于判断是否是抽象组件，抽象组件比如keep-alive、transition等。")]),e._v(" "),n("li",[e._v("_parentListeners是父组件中绑定在自定义标签上的事件")])]),e._v(" "),n("h2",{attrs:{id:"代码中还是有flow作代码静态检查"}},[e._v("代码中还是有flow作代码静态检查")]),e._v(" "),n("ol",[n("li",[e._v("/* @flow */")])]),e._v(" "),n("h2",{attrs:{id:"sfc-处理单个-vue文件"}},[e._v("sfc 处理单个.vue文件")]),e._v(" "),n("ol",[n("li",[e._v("parseComponent方法，传入content 与 options，返回SFCDescriptor")]),e._v(" "),n("li",[e._v("SFCDescriptor{template, script, styles[], customBlocks[] }")]),e._v(" "),n("li",[e._v("start(tag, attrs, unary, start, end)，depth\n"),n("ul",[n("li",[e._v("处理成currentBlock{type: tag, content, start: end, attrs经过计算}，是否是特殊tag，特殊属性？，将currentBlock 更新到SFCDescriptor")]),e._v(" "),n("li",[e._v("!unary 时更新depth")])])]),e._v(" "),n("li",[e._v("end(tag, start, end)\n"),n("ul",[n("li",[e._v("depth == 1, 更新currentBlock.end 等于 start")]),e._v(" "),n("li",[e._v("用deindent处理 conent.slice(currentBlock.start, currentBlock.end)，如果不是template需要padContent特殊处理")]),e._v(" "),n("li",[e._v("将取出的内容更新到currentBlock.content, 再更新contentBlock为null")]),e._v(" "),n("li",[e._v("depth--")])])]),e._v(" "),n("li",[e._v("parseHTML(conent, {start, end})")])]),e._v(" "),n("h2",{attrs:{id:"vue2项目规划"}},[e._v("Vue2项目规划")]),e._v(" "),n("p",[e._v("├── build --------------------------------- 构建相关的文件，一般情况下我们不需要动\n├── dist ---------------------------------- 构建后文件的输出目录\n├── examples ------------------------------ 存放一些使用Vue开发的应用案例\n├── flow ---------------------------------- 类型声明，使用开源项目 "),n("a",{attrs:{href:"https://flowtype.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow"),n("OutboundLink")],1),e._v("\n├── package.json -------------------------- 不解释\n├── test ---------------------------------- 包含所有测试文件\n├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码\n│   ├── platforms ------------------------- 包含了不同的构建或包的入口文件\n│   │   ├──web\n│   │   │   ├── compiler\n│   │   │   │   ├──options.js ------------- 编译基础配置项设置: modules, directives, isPreTag方法, mustUseProp表单元素判断, canBeLeftOpenTag, isReservedTag, getTagNamespace, staticKeys\n│   │   │   │   ├──modules ---------------- 定义class, model, style待属性模块的{staticKeys, transformNode, getData}\n│   │   │   │   ├──directives ------------- html, model, text\n│   │   │   ├── runtime\n│   │   │   ├── server\n│   │   │   ├── util\n│   │   │   ├── entry-compiler.js --------------- vue-template-compiler 包的入口文件 "),n("code",[e._v("compiler")]),e._v("\n│   │   │   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，输出 dist/vue.js，它包含模板(template)到render函数的编译器 "),n("code",[e._v("runtime & compiler")]),e._v("\n│   │   │   ├── entry-runtime.js ---------------- 运行时构建的入口，输出 dist/vue.common.js 文件，不包含模板(template)到render函数的编译器，所以不支持 "),n("code",[e._v("template")]),e._v(" 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意 "),n("code",[e._v("runtime 用于webapck 和 browserify 的bundlers")]),e._v("\n│   │   │   ├── entry-server-basic-renderer.js\n│   │   │   ├── entry-server-render.js ---------- vue-server-renderer 包的入口文件 "),n("code",[e._v("web server render")]),e._v("\n│   │   ├──weex\n│   │   │   ├── compiler\n│   │   │   ├── runtime\n│   │   │   ├── util\n│   │   │   ├── entry-compiler.js\n│   │   │   ├── entry-framework.js\n│   │   │   ├── entry-runtime-factory.js\n│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数\n│   │   ├── parser ------------------------ 存放将模板字符串转换成元素抽象语法树的代码\n│   │   ├── directives -------------------- 通用生成render函数之前需要处理的指令\n│   │   ├── codegen ----------------------- 存放从抽象语法树(AST)生成render函数的代码\n│   │   ├── optimizer.js ------------------ 分析静态树，优化vdom渲染\n│   ├── core ------------------------------ 存放通用的，平台无关的代码\n│   │   ├── observer ---------------------- 反应系统，包含数据观测的核心代码\n│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码\n│   │   ├── instance ---------------------- 实例相关内容，包括实例方法，生命周期，事件等\n│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码\n│   │   ├── components -------------------- 全局的组件，这里只有keep-alive\n│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码\n│   ├── platforms ------------------------- 包含平台特有的相关代码\n│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包\n│   ├── shared ---------------------------- shared 共享的工具方法")])])}),[],!1,null,null,null);t.default=r.exports}}]);