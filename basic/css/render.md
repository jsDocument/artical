# 页面加载及渲染过程

::: tip
关键路径渲染：
浏览器接收到服务器返回的HTML、CSS和JavaScript字节数据并对其进行解析和转变成像素的渲染过程被称为关键渲染路径。通过优化关键渲染路径即可以缩短浏览器渲染页面的时间。
:::

- 浏览器先构建出DOM(Document Object Model文档对象模型)树与CSSDOM树

    DOM是HTML和XML文档的编程接口，提供了对文档的结构化表示，并定义了一种可以使程序对该结构进行访问的方式；
    CSSOM树全称为Cascading Style Sheets Object Model层叠样式表对象模型，它与DOM树的含义相差不大，只不过它是CSS的对象集合。



## 构建DOM树与CSSDOM树----渲染树

将HTML字节解析为DOM树的过程

- 编码：将原始字节数据转换为文件指定的编码字符。
- 令牌化：根据HTML规范将字符转换成各种令牌；每个信息都有特殊的含义与规则。
- 生成对象：每个令牌会被转换成定义了属性和规则的对象。
- 构建完毕： DOM树构建完成，整个对象集合就像是一棵树形结构。

    遇到link标签时，浏览器会请求获得标签中的css文件，得到css数据后，会将其构建成CSSDOM树
    将DOM树与CSSDOM树结合在一起，成为渲染树；(从DOM根节点遍历每个可见节点，找到其适配的CSS样式规则并应用，渲染树构建完成)

- 计算每个节点在容器几个礼拜确切大小与位置，即布局(css用盒子模型来表示元素之间的距离)；从根节点遍历，确定每个节点对象在页面上的确切大小与位置，输出的是一个例子模型。
- 布局完成后，会进行Paint Setup与Paint事件，开始将渲染树进行绘制；绘制时间与CSS样式复杂度成正比

## 阻塞渲染的情况
1. link
2. script 会暂停构建DOM，将控制权移交给javascript引擎，这时引擎会开始执行javascript脚本，直接执行结束才会从中断的地方再继续。如果javascript还操作了CSSDOM而CSSDOM还没有下载与构建，浏览器甚至会延迟脚本执行和构建DOM，下到完成CSSDOM的构建。


## 减少渲染阻塞
1. 为css添加媒体查询，可以让css资源不在首次加载中阻塞渲染，即先不构建CSSDOM树
2. script的async不会在引用位置执行, defer延迟执行。


## 其他优化方案
1. 加载部分HTML，后续再通过AJAX请求获得
2. 代码压缩
3. HTTP缓存，ETage是传递令牌(对内容进行Hash后得到的一个指纹)，对资源进行检查，把ETag一起发送到服务器，服务器会根据当前资源核对令牌，未变化则返回304
4. Cache-Control 定义了缓存策略，定义什么条件下可以缓存响应及缓存时间
    - no-cache 必须先与服务器确定返回的响应是否发生了变化，然后才能使用该响应来满足后续对同一网址的请求。
    - no-store 禁止浏览器及所有中间缓存存储任何版本的返回响应
    - public&private 标记public，private是响应只为单个用户缓存，因此不允许中间缓存(CDN)进行缓存
    - max-age 缓存最长时间

## 资源预加载
_Pre-fetching 提示浏览器预先加载用户之后可能使用到的资源的方法_
使用dns-prefetch来提前进行DNS解析，之后便可以快速的访问另一个主机名。

```html
<link rel="dns-prefetch" href="other.hostname.com">
```

prefetch可以预先下载资源，不过其优先级是最低的
```html
<link rel="prefetch"  href="/some_other_resource.jpeg">
```

Chrome允许使用subresource属性指定优先级最高的下载资源
```html
<link rel="subresource"  href="/some_other_resource.js">
```

prerender可以预先渲染好页面并隐藏起来，之后打开这个页面会跳过渲染阶段直接呈现在用户面前
```html
<link rel="prerender"  href="//domain.com/next_page.html">
```

## 页面加载事件
1. window.load 当前页面加载完成，包括资源
2. body.load html文档加载 时触发
3. onreadystatechange
3. DOMContentLoaded DOM树解析好并等待js执行完成才执行


