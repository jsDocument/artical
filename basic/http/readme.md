### 事关 H5 体验的

1. H5 是建立在 TCP 于 HTTP 上的服务，所以页面的秒开率对于前端究竟有多重要呢？请看一组数据：

+ 对于mbify而言，主页加载的速度每提高100ms，转化率就会增加1.11%，平均年收入就会增加380000美元；
+ Pinterest重建了他们的页面以实现性能，使感知等待时间减少了40％，从而将搜索引擎流量和注册量提高了15％；
+ 通过将平均页面加载时间减少850毫秒，COOK发现他们能够将转化率提高7％，将跳出率降低7％，并将每个页面的页面数量增加10％；
+ 用户对其的感知：
  + 当用户能够在 2 秒以内得到响应时，会感觉系统的响应很快；
  + 当用户在 2-5 秒之间得到响应时，会感觉系统的响应速度还可以；
  + 当用户在 5-8 秒以内得到响应时，会感觉系统的响应速度很慢，但是还可以接受；
  + 而当用户在超过 8 秒后仍然无法得到响应时，会感觉系统糟透了，或者认为系统已经失去响应，而选择离开这个 Web 站点，或者发起第二次请求。

2. 那优化指标都有哪些呢？怎么提高秒开率？

+ 以下是几个比较常用的Lighthouse指标：
  + First Paint 首次绘制（FP）记录页面第一次绘制像素的时间
  + `FCP（首次内容绘制 First contentful paint）`记录页面首次绘制文本、图片、非空白 Canvas 或 SVG 的时间
  + `LCP（最大内容绘制时间 Largest contentful paint）`记录视窗内最大的元素绘制的时间，比前两个指标更能体现一个页面的性能好坏程度---页面速度指标
  + FPS（每秒传输帧数）
  + `TTI（页面可交互时间 Time to Interactive）`首次可交互时间
  + FID（首次输入延迟 First input delay）FCP 和 TTI 之间用户首次与页面交互时响应的延迟----交互体验指标
  + TBT（总阻塞时间 Total blocking time） FCP 到 TTI 之间所有长任务的阻塞时间总和
  + CLS（累计位移偏移 Cumulative layout shift）页面上非预期的位移波动。-----稳定指标
  + HTTP 请求响应时间
  + DNS 解析时间
  + TCP 连接时间


3. 通过chrome performance devtool工具进行分析找出性能瓶颈，值存在window.performance.timing对象上

+ 重定向耗时 redirectStart, ~End
+ dns 查询耗时 domainLookupStart, ~End
+ 读取页面第一个字节的时间 responseStart, ~End
+ DNS 缓存时间 domainLookupStart, fetchStart
+ 卸载页面时间 unloadEventStart, ~End
+ TCP 链接耗时 connectStart, ~End
+ request 请求耗时 responseStart, ~End
+ 解析 DOM 树耗时 domComplete, domInteractive
+ `白屏时间` navigationStart - domInteractive
+ DOM Ready 时间 domContentLoadedEventEnd, fetchStart

+ navigationStart 加载页面的起始时间
+ fetchStart 开始查询缓存或开始获取资源的时间
+ secureConnectionStart ssl 握手时间
+ domLoading 还未开始解析(current document readiness 设置为 loading)
+ domInteractive 文档解析结束时间
+ domContentLoadedEventStart DOMContentLoaded 时间开始，还有对应的结束属性
+ domComplete(current document readiness 设置为 complete)
+ loadEventStart, loadEventEnd onload 时间

4. 页面从输入 url 地址的完整过程
  1.用户输入
  2.卸载原页面并重定向到新页面
  3.处理Service Worker
  4.网络请求------【HTTP Cache】、【DNS】、【TCP】、【Request】
  5.服务端响应
  6.浏览器渲染

5. 加载时优化

> 白屏时间：览器器从响应用户输入网址地址，到浏览器开始显示内容的时间
  影响因素：网络、服务器性能、前端页面结果设计

> 首屏时间：浏览器从响应用户输入网络地址，到首屏内容渲染完成的时间。
  影响因素：白屏时间，资源下载执行时间

5. 优化点

+ DNS预解析，浏览器访问DNS的时间就可以缩短：dns-prefetch
+ 合理使用preload、prefetch
+ 使用HTTP2
+ 减少HTTP请求数量
+ 减少http请求大小
+ 避免重定向
+ 使用域名分片
+ 可以使用服务器端渲染
+ 静态资源使用CDN
+ 资源缓存，不重复加载相同的资源
+ 可以使用资源预加载
+ 对不容易变动的数据，缓存到本地
+ 页面解析

6. 页面性能优化点

+ 减少重绘与重排
+ 避免页面卡顿
+ 长列表优化
+ 滚动事件性能优化
+ 使用 Web Workers
+ 写代码时的优化点：
  + 避免强制同步布局
  + 避免 JS 执行时间过长，并行计算可以放在service work里进行
  + Compisite 分层绘制
  + 对事件绑定性能优化Passive event listener
  + 动画性能优化
