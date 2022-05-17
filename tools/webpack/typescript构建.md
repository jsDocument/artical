# 项目构建

类型检查
1. 基本类型和引用类型(boolean, string, number, null, undefined, void没有返回值, number[], any, never没有值的类型 元组 枚举)
2. class中protected, private, public
3. 联合类型 type | type
4. 对象类型 interface P{name: String, age?: Number, [sex: Boolean]: any, readonly id: number, [index: number]: number}【可选，任意属性即key不定】 即P类型的接口；使用let s: P={name: 'aa', age: 24}，使用时属性需按照声明顺序
5. 泛型 a: Array\<Number> = [1,2]
6. 函数类型  function add(x: number = 2, y?: number, ...items: any[]):void{} 或 add:(x:number)=>number = function(x: number):number{} 支持重载
7. 类型断言 <类型>值 或 值 as 类型；类型不确定时：`<string>`a.length



## package.json中的typescript配置
- typings入口文件配置  inddex.d.ts
- files编译时需要编译的文件？
- tsconfig.json typescript编译配置设置，不配置则是默认配置

## mpVue 的index.d.ts
1. 在index.d.ts中引入Vue中的需的模块的.d.ts
2. 声明vue命名空间，里面定义了需要的Vue的相关模块，因为export = Vue，Vue必须是命名空间

## mpVue中构建rollup
1. 抛出配置项：{input, external, plugins, output, name}
2. vue给了不同情况下打包的entry-->input, output{dest-->dest, format, banner, name-->moduleName}, external, [{replace(weex), flow, buble, alias},plugins, env]

## Vue的index.d.ts
1. 将options.d.ts, plugin.d.ts与vue.d.ts及vnode.d.ts中定义的方法抛出。


## 泛型 支持多种类型的数据
1. 如mpvue中：ComponentOptions发`<V extends Vue> = Options.ComponentOptions<V>`
2. 使用 `ComponentOptions<V>(this)`
3. 使用 ComponentOptions(this) 进行的类型推论

## 类型
1. number
2. any 丢失一些信息，任何类型的都有可能被返回 function ident(arg: any): any{}
3. `function ident<T>(arg: T): T{}` 返回类型与传入参数类型是相同的。

## typescript 接口定义declare
1. module
2. namespace
3. interface
4. class
5. var
6. type

## 装饰器
1. 特殊类型的声明----类声明、方法、访问符、属性或参数@expression

## 类型检查
//@ts-nochedk 或 //@ts-check 或//@ts-ignore /** @type {Number} \*/

## 三斜线指令
1. 需要在文件顶端，上面只能出现注释
2. 是包含单个XML标签的单行注释，如///\<reference path=""\/\>
3. 是指编译过程中需要引入的额外的文件，使用--out时，可以做为调整输出内容顺序的一种方法
4. 对输入文件(files)按指定的顺序进行预处理，在文件被加入列表前，它包含的所有三斜线引用都要被处理，还有它们包含的目标。？


## Vue项目中加入typescript需要做的修改
1. 安装ts相关的依赖 typescript ts-loader  vue-class-component  vue-decorator-property @types文件依赖
2. webpack配置文件tsx加ts-loader，加上 options: {appendTsSuffixTo: [/\.vue$/]}配置
3. 习惯用 vue-class-component 的可能还要配置 vue-decorator-property 依赖??
4. vue文件中的声明语言为ts，class前加@Component
5. 添加声明模块.d.ts，declare module "*.vue"{import Vue..., export default Vue}
6. tsconfig.json文件配置

```javascript
{
  "compilerOptions": {
    // 与 Vue 的浏览器支持保持一致
    "target": "es5",
    // 这可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "es2015",
    "moduleResolution": "node"
    // 使用实验性的decorators特性
    "experimentalDecorators": true,
    "strictFunctionTypes": false,
    // 允许使用非ts文件
    "allowJs": true
  }
}
```

