# javascript 基础知识

1. undeclared 与 undefined 的区别
   1. x is  not defined 与 undefined
2. let & const 与 var 的区别
   1. var 存在变量提升，可重复声明，声明的变量可改变
   2. const 没有变量提升，不可重复声明，声明必须赋值，基本类型的值声明后不可改变，引用类型的属性值可改变
   3. let 没有变量提升，不可重复声明，声明的变量可改变

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

3. 暂时性死区
4. 获取 DOM的方法，操作 DOM的方法
5. DOM 类型：1元素、2属性、3文本、8注释节点、9 文档节点、10 文档类型节点、11 文档片段节点、DTD 声明节点
6. JS的作用域与作用域链
   1. 全局作用域、函数作用域，作用域最大的作用是隔离变量
   2. 变量的取值在其所在的作用域中取值，而其当前作用域没有找到，而其向上级作用域查找所形成的过程，叫作用域链。可看如下例题：
7. new 操作符创建实例对象的过程
   3. 创建一个空对象obj
   4. 继承构造函数的原型
   5. this 指向 obj，并调用构造函数
   6. 返回对象
8. 箭头函数和普通函数的区别：
   7. 不可作为构造函数
   8. 没有自己的 this
   9. 没有 arguments 对象
   10. 没有原型对象
9. 对象属性：原型上的、继承的、
   11. 枚举出的是
10. Symbol 的应用场景
    1. 对象的属性 Symbol('xxx') 或 Symbol.for('xxx')，该属性不会被枚举出来，但可以用 Object.getOwnPropertySymbols(obj) 或 Reflect.ownKeys(boj)
    2. 代替常量
    3. 定义私有属性
11. 高阶函数：一个函数接收另个函数作为参数，不利于优化-----尾调用优化
12. 柯里化：把接收多个参数变成一个参数，返回一个新函数，接收剩余的参数
    1. 参数复用
    2. 延迟执行
13. compose 函数：多层箭头函数，中间的箭头函数只接收参数，没有实际的函数体
14. AMD---require.js「依赖前置，异步执行」，CMD----sea.js「按需加载，同步执行，依赖就近」
15. commonjs与 ES6 module，为什么 commonjs 不适合与浏览器 [more][https://www.cnblogs.com/unclekeith/p/7679503.html]
    1. commonjs是拷贝输出，ES6 是引用输出
    2. commonjs是运行时加载，ES6 是编译时输出接口
    3. commonjs是单个值导向，ES6 可以多个值导出
    4. commonjs是动态预发可以写在函数体中，ES6 是静态语法只能卸载顶层
    5. commonjs this是当前模块，ES6 this 是 undefined
    6. 因为是运行时加载，那么还没有加载完成，后面的运行只能等待，但这对服务器来说不是问题，等待时间只是硬盘的读取时间，对浏览器却是大问题，所以浏览器只能采用异步加载。
16. 宏任务、微任务与EventLoop
17. async/await 解决的问题，原理，及错误检测；co 的实现
    1. 同步方式、执行异步任务，类似于 Promise 的微任务队列嵌套；多个异步操作，包装成一个 Promise
