### webpack 热更新

1. webpack-dev-server 实时重新加载
   1. 创建了 compiler 实例，创建自定义 Server实例，开启本地服务
   2. 创建 http 服务，并基于 http 服务创建了 websocket 服务，同时监听浏览器的接入
   3. 浏览器接入时，会向它发送 hash 值，从而实现服务端和浏览器间的双向通道
   4. 建立websocket连接时，服务端向浏览器发送hash和拉取代码的通知还不够，代码改变时，浏览器也可以接受到通知
   5. 所以对编译完成事件进行监听，对代码的变动进行监听，源码是通过webpackDevMiddleware库实现的，库中使用了compiler.watch对文件的修改进行了监听，并且通过memory-fs实现了将编译的产物存放到内存中
   6. 向浏览器插入客户端代码：浏览器想服务端获取补丁文件---那个chunk 发生了改版[main模块的 xxx模块]
   7. 首先是通过XMLHttpRequest的方式，利用上一次保存的hash值请求hot-update.json文件。这个描述文件的作用就是提供了修改的文件所在的chunkId。
   8. 然后通过JSONP的方式，利用hot-update.json返回的chunkId 及 上一次保存的hash 拼接文件名进而获取文件内容。
   9. 当hot-update.js文件加载好后，就会执行window.webpackHotUpdate，进而调用了hotApply。hotApply根据模块ID找到旧模块然后将它删除，然后执行父模块中注册的accept回调，从而实现模块内容的局部更新。
2. module.hot.accept
3. devServer: {hot: true}
