如何判断 webview 是否加载完成？

+ webview.isLoading？
+ uninitialized : 还没开始加载
+ loading : 加载中
+ loaded : 加载完成
+ interactive : 结束渲染，用户已经可以与网页进行交互。但内嵌资源还在加载中
+ complete : 完全加载完成

+ JS 事件失效处理-----事件委托
+ webpack Plugin 原理
+ 先渲染 react 的一部分
  + suspense--fallback 和 React.lazy 懒加载组件 + import()
  + ErrorBoundary
  + COncurrent UI Patterns：当用户按下另一个按键时，React 不需要阻塞浏览器更新文本输入。相反，它可以让浏览器绘制输入的更新，然后 在内存中 渲染更新后的列表。当渲染完成后，React 更新 DOM，并且变化会反映在屏幕上。

如何实现错误上报？

+ unhandledrejection事件: 当Promise 被 reject 且没有 reject 处理器的时候
+ onerror：运行时错误
+ error：监听资源类错误

