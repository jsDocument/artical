(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{175:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"项目构建"}},[t._v("项目构建")]),n("p",[t._v("类型检查")]),n("ol",[n("li",[t._v("基本类型和引用类型(boolean, string, number, null, undefined, void没有返回值, number[], any, never没有值的类型 元组 枚举)")]),n("li",[t._v("class中protected, private, public")]),n("li",[t._v("联合类型 type | type")]),n("li",[t._v("对象类型 interface P{name: String, age?: Number, [sex: Boolean]: any, readonly id: number, [index: number]: number}【可选，任意属性即key不定】 即P类型的接口；使用let s: P={name: 'aa', age: 24}，使用时属性需按照声明顺序")]),n("li",[t._v("泛型 a: Array<Number> = [1,2]")]),n("li",[t._v("函数类型  function add(x: number = 2, y?: number, ...items: any[]):void{} 或 add:(x:number)=>number = function(x: number):number{} 支持重载")]),n("li",[t._v("类型断言 <类型>值 或 值 as 类型；类型不确定时："),n("code",[t._v("<string>")]),t._v("a.length")])]),n("h2",{attrs:{id:"package-json中的typescript配置"}},[t._v("package.json中的typescript配置")]),n("ul",[n("li",[t._v("typings入口文件配置  inddex.d.ts")]),n("li",[t._v("files编译时需要编译的文件？")]),n("li",[t._v("tsconfig.json typescript编译配置设置，不配置则是默认配置")])]),n("h2",{attrs:{id:"mpvue-的index-d-ts"}},[t._v("mpVue 的index.d.ts")]),n("ol",[n("li",[t._v("在index.d.ts中引入Vue中的需的模块的.d.ts")]),n("li",[t._v("声明vue命名空间，里面定义了需要的Vue的相关模块，因为export = Vue，Vue必须是命名空间")])]),n("h2",{attrs:{id:"mpvue中构建rollup"}},[t._v("mpVue中构建rollup")]),n("ol",[n("li",[t._v("抛出配置项：{input, external, plugins, output, name}")]),n("li",[t._v("vue给了不同情况下打包的entry--\x3einput, output{dest--\x3edest, format, banner, name--\x3emoduleName}, external, [{replace(weex), flow, buble, alias},plugins, env]")])]),n("h2",{attrs:{id:"vue的index-d-ts"}},[t._v("Vue的index.d.ts")]),n("ol",[n("li",[t._v("将options.d.ts, plugin.d.ts与vue.d.ts及vnode.d.ts中定义的方法抛出。")])]),n("h2",{attrs:{id:"泛型-支持多种类型的数据"}},[t._v("泛型 支持多种类型的数据")]),n("ol",[n("li",[t._v("如mpvue中：ComponentOptions发"),n("code",[t._v("<V extends Vue> = Options.ComponentOptions<V>")])]),n("li",[t._v("使用 "),n("code",[t._v("ComponentOptions<V>(this)")])]),n("li",[t._v("使用 ComponentOptions(this) 进行的类型推论")])]),n("h2",{attrs:{id:"类型"}},[t._v("类型")]),n("ol",[n("li",[t._v("number")]),n("li",[t._v("any 丢失一些信息，任何类型的都有可能被返回 function ident(arg: any): any{}")]),n("li",[n("code",[t._v("function ident<T>(arg: T): T{}")]),t._v(" 返回类型与传入参数类型是相同的。")])]),n("h2",{attrs:{id:"typescript-接口定义declare"}},[t._v("typescript 接口定义declare")]),n("ol",[n("li",[t._v("module")]),n("li",[t._v("namespace")]),n("li",[t._v("interface")]),n("li",[t._v("class")]),n("li",[t._v("var")]),n("li",[t._v("type")])]),n("h2",{attrs:{id:"装饰器"}},[t._v("装饰器")]),n("ol",[n("li",[t._v("特殊类型的声明----类声明、方法、访问符、属性或参数@expression")])]),n("h2",{attrs:{id:"类型检查"}},[t._v("类型检查")]),n("p",[t._v("//@ts-nochedk 或 //@ts-check 或//@ts-ignore /** @type {Number} */")]),n("h2",{attrs:{id:"三斜线指令"}},[t._v("三斜线指令")]),n("ol",[n("li",[t._v("需要在文件顶端，上面只能出现注释")]),n("li",[t._v('是包含单个XML标签的单行注释，如///<reference path=""/>')]),n("li",[t._v("是指编译过程中需要引入的额外的文件，使用--out时，可以做为调整输出内容顺序的一种方法")]),n("li",[t._v("对输入文件(files)按指定的顺序进行预处理，在文件被加入列表前，它包含的所有三斜线引用都要被处理，还有它们包含的目标。？")])]),n("h2",{attrs:{id:"vue项目中加入typescript需要做的修改"}},[t._v("Vue项目中加入typescript需要做的修改")]),n("ol",[n("li",[t._v("安装ts相关的依赖 typescript ts-loader  vue-class-component  vue-decorator-property @types文件依赖")]),n("li",[t._v("webpack配置文件tsx加ts-loader，加上 options: {appendTsSuffixTo: [/.vue$/]}配置")]),n("li",[t._v("习惯用 vue-class-component 的可能还要配置 vue-decorator-property 依赖??")]),n("li",[t._v("vue文件中的声明语言为ts，class前加@Component")]),n("li",[t._v('添加声明模块.d.ts，declare module "*.vue"{import Vue..., export default Vue}')]),n("li",[t._v("tsconfig.json文件配置")])]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"compilerOptions"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 与 Vue 的浏览器支持保持一致")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"target"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"es5"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 这可以对 `this` 上的数据属性进行更严格的推断")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"strict"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"module"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"es2015"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"moduleResolution"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"node"')]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 使用实验性的decorators特性")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"experimentalDecorators"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"strictFunctionTypes"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 允许使用非ts文件")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"allowJs"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=a.exports}}]);