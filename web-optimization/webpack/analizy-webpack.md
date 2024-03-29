```Javascript
// dist/index.xxxx.js
(function(modules) {
  // 已经加载过的模块
  var installedModules = {};

  // 模块加载函数
  function __webpack_require__(moduleId) {
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__(0);
})([
/* 0 module */
(function(module, exports, __webpack_require__) {
  ...
}),
/* 1 module */
(function(module, exports, __webpack_require__) {
  ...
}),
/* n module */
(function(module, exports, __webpack_require__) {
  ...
})]);
```

+ webpack 将所有`模块`包裹于一个函数中，并传入默认参数，将所有模块放入一个`数组`中，取名为 modules，并通过数组的下标来作为 moduleId。
+ 将 `modules` 传入一个自执行函数中，自执行函数中包含一个 `installedModules` 已经加载过的模块和一个模块加载函数，最后加载入口模块并返回。
+ `__webpack_require__` 模块加载，先判断 installedModules 是否已加载，加载过了就直接返回 `exports 数据`，没有加载过该模块就通过 `modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)` 执行模块并且将 module.exports 给返回。

index.js

```js
webpackJsonp([0], {
  "JkW7": (function(module, exports, __webpack_require__) {
    const test = __webpack_require__("zFrx");
    console.log(test);
  }),
  "zFrx": (function(module, exports) {
    const str = 'test is loaded';
    module.exports = str;
  })
}, ["JkW7"]);
```

+ `webpackJsonp` 这个函数，就是 manifest.js 应该定义了一个挂在 window 下的全局函数，index.js 往这个函数传入三个参数并调用。
+ 第一个参数 `chunkId`，第三参数 `executeModules` 入口文件
+ 第二个参数是模块化关键

manifest.js 内部是一个 `IIFE`

```js
(function(modules) {
  window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
    var moduleId, result;
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }
    if (executeModules) {
      for (i = 0; i < executeModules.length; i++) {
        result = __webpack_require__(executeModules[i]);
      }
    }
    return result;
  };
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      exports: {}
    };
    // 更新module.exports
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }
})([]);
```

+ window 上挂了一个名为 `webpackJsonp` 的函数，它接受的三个参数，分别名为 `chunkIds`, `moreModules`, `executeModules`
+ webpackJsonp 先是 for in 遍历了一次 moreModules,将 moreModules 内的所有方法都存在 modules， 也就是`自执行函数执行时传入的数组`。第三个参数存在，则加载该数组里的所有模块
+ `__webpack_require__` 负责模块加载
+ modules['zFrx'].exports, module 即 modules['zFrx']

+ `__webpack_require__` 的作用，就是根据这个 module 所 require 的东西，不断递归调用 `__webpack_require__`，`__webpack_require__`函数返回值后供 `require` 使用。当然，模块是不会重复加载的，因为 installedModules 记录着 module 调用后的 exports 的值，只要命中缓存，就返回对应的值而不会再次调用 module。webpack 打包后的文件，就是通过一个个`函数隔离 module` 的作用域，以达到不互相污染的目的


HRM

+ live reload 刷新之后会丢失之前的状态
+ HRM 不会刷新，而是对模块进行热替换

如何实现热更新？如何回答以下问题？

+ Chrome 开发者工具知道浏览器是通过 websocket 和 webpack-dev-server 进行通信
+ websocket 的 message 中并没有发现新模块代码? 打包后的新模块又是通过什么方式发送到浏览器端的呢？为什么新的模块不通过 websocket 随消息一起发送到浏览器端呢？
  + 主要因为功能块的解耦，各个模块各司其职，dev-server/client 只负责消息的传递而不负责新模块的获取，而这些工作应该有 HMR runtime 来完成，HMR runtime 才应该是获取新代码的地方。
  + 使用 webpack-hot-middleware 和 webpack 配合也可以完成模块热更新流程，在使用 webpack-hot-middleware 中有件有意思的事，它没有使用 websocket，而是使用的 EventSource。
+ 浏览器拿到最新的模块代码，HMR 又是怎么将老的模块替换成新的模块，在替换的过程中怎样处理模块之间的依赖关系？
+ 当模块的热替换过程中，如果替换模块失败，有什么回退机制吗？

1. webpack 在 watch模式下，文件系统中某个文件发生变式，根据配置文件重新打包，并将打包的结果通过 js 对象保存到内存中
2. webpack-dev-server 与 webpack 之间的接口交互；主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码`打包到内存`中(memory-fs)。
3. webpack-dev-server 对文件变化的一个监控，会监听这些配置文件夹中静态文件的变化，变化后会`通知浏览器端对应用进行 live reload`。注意，这儿是浏览器刷新
4. webpack-dev-server 代码的工作，通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态`信息告知浏览器端`，浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递的最主要信息还是新模块的 `hash` 值，后面的步骤根据这一 hash 值来进行模块热替换。
5. webpack-dev-server/client 端不做请求更新的代码，也不会执行热更模块操作
6. webpack/hot/dev-server端 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。
7. `HotModuleReplacement.runtime` 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 `json`，该 json 包含了所有`要更新的模块的 hash 值`，获取到更新列表后，该模块再次通过 `jsonp` 请求，获取到最新的模块代码
8. HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
9. 当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。

没有配置 HotModuleReplacementPlugin，设置devServer.hot 为 true 且 package.json中添加 script "start": "webpack-dev-server --hot --open"，会告诉 webpack 自动引入 HotModuleReplacementPlugin 插件

::: tip
关键的步骤还是 webpack-dev-server 调用 webpack api 监听 compile的 done 事件，当compile 完成后，webpack-dev-server通过 _sendStatus 方法将编译打包后的新模块 hash 值发送到浏览器端。
:::


没有在业务代码里面添加接收 websocket 消息的代码，也没有在 webpack.config.js 中的 entry 属性中添加新的入口文件，那么 bundle.js 中接收 websocket 消息的代码从哪来的呢？

1. webpack-dev-server 修改了webpack 配置中的 entry 属性，在里面添加了 webpack-dev-client 的代码，这样在最后的 bundle.js 文件中就会有接收 websocket 消息的代码了。
2. webpack-dev-server/client 当接收到 type 为 hash 消息后会将 hash 值暂存起来，当接收到 type 为 ok 的消息后对应用执行 reload 操作，在 reload 操作中，webpack-dev-server/client 会根据 hot 配置决定是刷新浏览器还是对代码进行热更新（HMR）
3. 首先将 hash 值暂存到 currentHash 变量，当接收到 `ok` 消息后，对 App 进行 reload。如果配置了模块热更新，就调用 `webpack/hot/emitter` 将最新 hash 值发送给 webpack，然后将`控制权交给 webpack 客户端代码`。如果没有配置模块热更新，就直接调用 location.reload 方法刷新页面。
4. 配合：webpack/hot/dev-server（以下简称 dev-server） 监听第三步 webpack-dev-server/client 发送的 webpackHotUpdate 消息
   1. 调用 webpack/lib/HotModuleReplacement.runtime （简称 HMR runtime）中的 `check` 方法，检测是否有新的更新，在 check 过程中会利用` webpack/lib/JsonpMainTemplate.runtime`（简称 jsonp runtime）中的两个方法 `hotDownloadUpdateChunk` 和 `hotDownloadManifest`
   2. `hotDownloadUpdateChunk`是通过 jsonp 请求最新的模块代码，然后将代码返回给 HMR runtime，HMR runtime 会根据返回的新模块代码做进一步处理，可能是刷新页面，也可能是对模块进行热更新。Hash 值对应的代码块。
   3. `hotDownloadManifest`是调用 AJAX 向服务端请求是否有更新的文件，如果有将发更新的文件列表返回浏览器端，返回最新的 Hash 值
   4. 模块热更新都是发生在HMR runtime 中的 hotApply 方法中，模块热替换主要分三个阶段，
      1. 第一个阶段是找出 outdatedModules 和 outdatedDependencies
      2. 第二个阶段从缓存中删除过期的模块和依赖
      3. 第三个阶段是将新的模块添加到 modules 中，当下次调用 __webpack_require__ (webpack 重写的 require 方法)方法的时候，就是获取到了新的模块代码了。
5. 业务代码，中调用 HMR 的 module.hot.accept 方法，添加模块更新后的处理函数，及时将 hello 方法的返回值插入到页面中。

[参考](https://zhuanlan.zhihu.com/p/30669007)



