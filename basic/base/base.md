## 常被问到的几个前端基础知识

1. 构造函数：主要用来`创建对象时，初始化对象`，即为对象成员变量赋值，常与 new 运算一起
2. undeclared 与 undefined 的区别
  前者是x is  not defined 与 后者的值为undefined
3. let 与 const 和 var 的区别

>1. var 存在变量提升，可重复声明，声明的变量可改变
>
>2. const 没有变量提升，不可重复声明，声明必须赋值，基本类型的值声明后不可改变，引用类型的属性值可改变
>
>3. let 没有变量提升，不可重复声明，声明的变量可改变


```javascript
for(var i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i);
    },0);
};
for(let i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i);
    },0);
};
for (var i = 0; i < 3; i++) {
    (function(i) {
    setTimeout(function () {
        console.log(i);
    }, 0, i)
    })(i)
};
```

4. var声明变量时，函数内部与外部同名变量，会存在暂时性死区

5. DOM 类型：1元素、2属性、3文本、8注释节点、9 文档节点、10 文档类型节点、11 文档片段节点、DTD 声明节点

6. 自定义 DOM 元素

```js
class CustomElementStart extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        // 内部结构
        const shadow = this.attachShadow({mode: 'open'});
        const text = document.createElement("span");
        text.textContent = 'Hi Custom Element!';
        text.style = 'color: red';
        shadow.append(text);
    }
}

customElements.define('custom-element-start', CustomElementStart)
```

7. JS的作用域与作用域链

>1. 全局作用域、函数作用域，作用域最大的作用是隔离变量
>
>2. 变量的取值在其所在的作用域中取值，而其当前作用域没有找到，而其向上级作用域查找所形成的过程，叫作用域链。

8. new 操作符创建实例对象的过程

>1. 创建一个空对象obj
>2. 继承构造函数的原型
>3. this 指向 obj，并调用构造函数
>4. 返回对象

9. 箭头函数和普通函数的区别：

>1. 不可作为构造函数
>2. 没有自己的 this
>3. 没有 arguments 对象
>4. 没有原型对象

10. Symbol 的应用场景

>1. 对象的属性 Symbol('xxx') 或 Symbol.for('xxx')，该属性不会被枚举出来，但可以用 Object.getOwnPropertySymbols(obj) 或 Reflect.ownKeys(boj)
>2. 代替常量
>3. 定义私有属性

11. 高阶函数：一个函数接收另个函数作为参数，不利于优化-----尾调用优化

12. 柯里化：把接收多个参数变成一个参数，返回一个新函数，接收剩余的参数，主要作用：

>1. 参数复用
>2. 延迟执行

13. compose 函数：多层箭头函数，中间的箭头函数只接收参数，没有实际的函数体

14. AMD---require.js「依赖前置，异步执行」，CMD----sea.js「按需加载，同步执行，依赖就近」

15. commonjs与 ES6 module，为什么 commonjs 不适合与浏览器 [more][https://www.cnblogs.com/unclekeith/p/-html]

>1. commonjs是拷贝输出，ES6 是引用输出
>2. commonjs是运行时加载，ES6 是编译时输出接口
>3. commonjs是单个值导向，ES6 可以多个值导出
>4. commonjs是动态预发可以写在函数体中，ES6 是静态语法只能卸载顶层
>5. commonjs this是当前模块，ES6 this 是 undefined
>6. 因为是运行时加载，那么还没有加载完成，后面的运行只能等待，但这对服务器来说不是问题，等待时间只是硬盘的读取时间，对浏览器却是大问题，所以浏览器只能采用异步加载。

16. async/await 解决的问题，原理，及错误检测；co 的实现

> 同步方式、执行异步任务，类似于 Promise 的微任务队列嵌套；多个异步操作，包装成一个 Promise

17. 箭头函数的this，没有自己的 this，访问的是外部上下文对象；用 call, apply, bind 可以实现传参，但不会改变 this, 也不会报错

18. 现代浏览器可以支持用 script 标签引入模块或者脚本，如果要`引入模块`，必须给 script 标签添加 `type=“module”`。如果引入脚本，则不需要 type。

>- script 标签如果`不加type=“module”`，默认认为我们加载的文件是脚本而非模块，如果我们在`脚本中写了 export`，就会抛错
>
>- 直接 import 一个模块，只是保证了这个模块代码被执行，引用它的模块是无法获得它的任何信息的。
>
>- 带 from 的 import 意思是引入模块中的一部分信息，可以把它们变成本地的变量
>
>- import x from "./a.js" 引入模块中导出的默认值。
>
>- import {a as x, modify} from "./a.js"; 引入模块中的变量。
>
>- import * as x from "./a.js" 把模块中所有的变量以类似对象属性的方式引入。
>
>- 导入与一般的赋值不同，导入后的变量只是改变了名字，它仍然与原来的变量是同一个。
>
>- export default 表示导出一个默认变量值，它可以用于 function 和 class。这里导出的变量是没有名称的，可以使用import x from "./a.js"这样的语法，在模块中引入。
>
>- export default 还支持一种语法，后面跟一个表达式----var a = {};export default a;这里的行为跟导出变量是不一致的，这里导出的是值，导出的就是普通变量 a 的值，以后 a 的变化与导出的值就无关了，修改变量 a，不会使得其他模块中引入的 default 值发生改变

1.  自动插入分号的规则：

>1. 要有换行符，且`下一个符号是不符合语法`的，那么就尝试插入分号。
>2. 有换行符，且语法中规定`此处不能有换行符`，那么就自动插入分号。
>3. 源代码结束处，`不能形成完整的脚本或者模块结构`，那么就自动插入分号

```javascript
// 接下来 void 关键字接在 1 之后是不合法的，这命中了我们的第一条规则，因此会在 void 前插入分号----规则 1
let a = 1
void function(a){
    console.log(a);
}(a);
//no LineTerminator here, 这里 a 的后面就要插入一个分号了。所以这段代码最终的结果，b 和 c 都变成了 2，而 a 还是 1。
var a = 1, b = 1, c = 1;
a
++
b
++
c
// IIFE
(function(a){
    console.log(a);
})()
(function(a){
    console.log(a);
})()
// return 和 1 被用注释分隔开了。根据 JavaScript 自动插入分号规则，带换行符的注释也被认为是有换行符，而恰好的是，return 也有[no LineTerminator here]规则的要求。所以这里会自动插入分号，f 执行的返回值是 undefined。
function f(){
    return/*
        This is a return value.
    */1;
}
f();
```
