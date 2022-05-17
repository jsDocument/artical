https ssl握手验证的过程，ajax 与 axios继续

浏览器渲染详细流程
  浏览器处理每一帧的流程
Coverage(覆盖率)
网络请求的优先级
网页总资源信息
Network配置
浏览器渲染优化策略
关键渲染路径
强制同步布局问题
如何减少重排与重绘
静态文件优化策略
  图片格式
  图片优化
  HTML优化
  CSS优化
  JS优化
  字体优化
浏览器储存优化策略
  Cookie
  LocalStorage
  SessionStorage
  IndexDB
  其他优化策略
  使用PWA提高用户体验


#### 其他总结

1. 调用 Service Worker 的 fetch 事件响应
2. 查看 memory cache
3. 查看 disk cache。这里又细分：
    1. 如果有强制缓存且未失效，则使用强制缓存，不请求服务器。这时的状态码全部是 200
    2. 如果有强制缓存但已失效，使用对比缓存，比较后确定 304 还是 200
4. 发送网络请求，等待网络响应
5. 把响应内容存入 disk cache (如果 HTTP 头信息配置可以存的话)
6. 把响应内容 的引用 存入 memory cache (无视 HTTP 头信息的配置)
7. 把响应内容存入 Service Worker 的 Cache Storage (如果 Service Worker 的脚本调用了 cache.put())


2. axios让每个请求都带一个从 cookie中拿到的 key




#### 另用 cacheables 查看 HTTP 请求过程

+ 这个请求指的是 http 请求，当一个请求从客户端发出去之后，服务器端收到请求后，一个请求过程就结束了，这时就算是客户端abort这个请求，服务器端仍会做出完整的响应，只是这个响应客户端不会接收。所以实质上，后端还是处理了请求，但是前端不对该方法进行处理。
+ cacheables：优雅、支持不同缓存策略、没有依赖、体积小、适用xx、辅助函数来构建缓存 key
  + cache.cacheable(() => fetch("https://some-url.com/api"), "key");
  + delete, clear
  + keys
  + isCached
  + cacheables.key

```javascript
// 实例
const cache = new Cacheables({
  logTiming: true,
  log: true,
});
```
