# 模块简介

+ amd---典型代表require.js
+ cmd---典型代表sea.js
+ umd----兼容 cjs 与 amd 的模块
+ cjs--commonjs----nodejs----转换：skypack、 snowpack、vite
  + 值拷贝
  + 运行时加载
  + 所谓 exports 仅仅是 module.exports 的引用而已
+ esm---支持动态导入 m = await import("xxx"); m.default(xxx)，通过设置 type='module'来支持，但只支持 URL 路径
  + importMap，定义引入库路径对象，后面就可以支持只引入模块名无需写完整的 URL 了
  + 也可以导入 JSON 和 CSS
  + 预编译期间进行 treeShaking
  + 编译时加载
  + 值引用


CommonJS 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范 (例如: AMD)，用来对前端模块进行管理。自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。但目前浏览器对 ES6 Module 兼容还不太好，我们平时在 Webpack 中使用的 export 和 import，会经过 Babel 转换为 CommonJS 规范。在使用上的差别主要有：

CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJs 是单个值导出，ES6 Module可以导出多个
CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined
