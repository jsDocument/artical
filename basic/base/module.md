### 模块简介

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
