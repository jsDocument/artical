1. 从浏览器地址栏输入url到请求返回发生了什么？url 解析，dns 系统查询 IP
2. url为啥要解析，dns查询规则是什么？
3. url编码的规则是什么呢？utf-8，中文的话用gb2312编码吗，还有就是万一浏览器不是你说的这样统一用utf-8，你怎么保证都是utf-8的编码?
4. encodeURIComponent比encodeURI有什么区别?
5. dns 系统如何查询 IP？host-->本地 dns 解析器缓存-->本地 dns 服务器缓存
6. html如何做dns优化
7. 建立 TCP 链接，三次握手
8. 从网卡把数据包传输出去到服务器发生了什么，提示我OSI参考模型
9. 浏览器缓存
10. from disk cache和from memory cache
11. 什么是启发式缓存吗，在什么条件下触发？
12. 解析 html
13. 页面渲染优化

```html
<meta http-equiv="x-dns-prefetch-control" content="on" />
<link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />
```


+ 性能指标: Lighthouse获取指标值
  + First Paint 首次绘制（FP）记录页面第一次绘制像素的时间
  + First contentful paint 首次内容绘制 (FCP)记录页面首次绘制文本、图片、非空白 Canvas 或 SVG 的时间
  + Largest contentful paint 最大内容绘制 (LCP) 记录视窗内最大的元素绘制的时间，比前两个指标更能体现一个页面的性能好坏程度---页面速度指标
  + Time to Interactive 可交互时间 (TTI)首次可交互时间
  + First input delay 首次输入延迟 (FID)记录在 FCP 和 TTI 之间用户首次与页面交互时响应的延迟----交互体验指标
  + Total blocking time 总阻塞时间 (TBT)记录在 FCP 到 TTI 之间所有长任务的阻塞时间总和。
  + Cumulative layout shift 累计位移偏移 (CLS)记录了页面上非预期的位移波动。-----稳定指标

+ 输入网址
  + 检查是否符合 URL 规则，根据规则加上协议，补全成完整的 URL
  + 回车后：浏览器会给当前页面执行一次 beforeunload，允许页面在退出之前做一些清理工作，比如询问是否要离开？表单是否要提交
+ 解析 URL
  + URL: 协议、主机、端口、路径、查询参数、锚点
+ 检查浏览器缓存
+ DNS 解析，DNS 预解析、减少页面卡顿，DNS 负载均衡
  + 会发送一个 UDP 的包给 DNS 域名解析服务器
  + 递归查询
  + 迭代查询
+ TCP/IP 连接
  + SYN(synchronous建立联机)
  + ACK(acknowledgement 确认)
  + PSH(push传送)
  + FIN(finish结束)
  + RST(reset重置)
  + URG(urgent紧急)
  + 三次握手
    + 一次：客户端请求建立联机 SYN=1 和 Seq = X 数据包
    + 二次：服务器收到请求后，想客户端发送 ACK = X + 1 和 SYN = 1, Seq = Y 到客户端
    + 三次：客户端收到后检查 ACK是否正确，SYN是否是 1正确，正确则在发送 ACK = Y + 1，seq; 服务端收到并确认 ACK 与 Seq 的值，则建立连接成功
+ http 请求
  + 连接建立之后，浏览器端会构建请求行、请求头等请求信息
  + http2: 二进制分帧效率高、多路复用，头部压缩，可以进行服务端推送
+ 服务器请求并返回 http 报文
+ 浏览器渲染页面:
  + DOM树：字节Bytes → 字符characters → 令牌Tokens → 节点Nodes → 对象模型DOM
  + CSSOM：CSS 对象模型
  + 布局树：合并 DOM 与 CSSOM = 渲染树，再技术每个对象的精准位置和大小，渲染树将像素渲染到屏幕上
  + 渲染：
    + 获取DOM后分割为多个图层
    + 对每个图层的`节点计算样式结果` （Recalculate style--样式重计算）
    + 为每个节点`生成图形和位置` （Layout--重排,回流）
    + 将每个节点`绘制填充到图层位图`中 （Paint--重绘）
    + 图层作为纹理上传至`GPU`
    + `组合`多个图层到页面上生成最终屏幕图像 （Composite Layers--图层重组）
  + 我们可以手动打开一个图层，通过添加transform: translateZ(0) 这样回流和重绘的代价就小了，效率就会大大提高。但是不要滥用这个属性，否则会大大增加内存消耗。—— 开启GPU加速。
  + 回流: 元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程
  + 引起回流：
    + 页面首次渲染
    + 浏览器窗口大小发生改变
    + 元素尺寸或位置发生改变
    + 元素内容变化（文字数量或图片大小等等）
    + 元素字体大小变化
    + 添加或者删除可见的DOM元素
    + 激活CSS伪类（例如：:hover）
    + 查询某些属性或调用某些方法
+ 断开连接
  + 四次挥手：刚开始初级 established 状态，加入客户端先发起关闭请求
  + 客户端 FIN=1 和 seq，客户端处于FIN_Wait状态
  + 服务端收到 FIN，发生 ACK = seq + 1，服务端处于FIN_Wait状态
  + 服务端也想断开，又发送 FIN 报文 和 seq，服务端处于 Last_ACK状态
  + 客户端发生 ACK 报文，过一阵子，以确保服务端收到报文后进入 CLOSED，服务端收到 ACK后就处于 CLOSED 了
+ CDN：内容分发网络（CDN）是一组分布在多个不同地理位置的 Web 服务器
+ 将 CSS 放在文件头部，JavaScript 文件放在底部
  + CSS 执行会阻塞渲染，阻止 JS 执行
  + JS 加载和执行会阻塞 HTML 解析，阻止 CSSOM 构建
+ 减少重绘、重排
  + 避免使用table布局;
  + 尽可能在DOM树的最末端改变class;
  + 避免设置多层内联样式;
  + 将动画效果应用到position属性为absolute或fixed的元素上;
  + 避免使用CSS表达式（例如：calc()）。
  + 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
  + 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
  + 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
  + 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
  + 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。


+ Url 输入到请求的步骤？
  + 解析协议、主机、端口号、路径等信息，并构造一个 HTTP 请求
  + DNS 域名解析
  + TCP连接
  + HTT 请求
  + 服务器处理请求并返回报文
  + 浏览器渲染页面
  + 端口 TCP 连接
+ DNS 域名解析：递归和迭代过程----根、顶、权威
  + 将报文转发到根 DNS 服务器
  + 根 DNS 服务器根据.com 前缀，返回给本地 DNS 服务器对应的顶级 DNS 服务器的 IP 地址列表
  + 本地 DNS 服务器向其中一台顶级 DNS 服务器发送查询报文
  + 该 DNS 服务器注意到 报文的 .com前缀，便向本地 DNS 服务器返回权威 DNS 服务器的 IP 地址
  + 本地 DNS 服务器又向其中一台权威服务器发送查询报文；
  + 主机 m.n.com 向本地 DNS 服务器 dns.n.com 发出的查询就是递归查询，而后继的三个查询是迭代查询----有的请求都是由本地 DNS 服务器发出，所有的响应都是直接返回给本地 DNS 服务器。
  + 有了缓存，大多数 DNS 查询都绕过了根 DNS 服务器，需要向根 DNS 服务器发起查询的请求很少。
