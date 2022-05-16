### ajax 请求与跨域相关知识点

#### ajax, fetch, axios 「关注分离」

+ ActiveXObject('Microsoft.XMLHTTP')
+ XMLHTTPRequest
  + open（method, url, boolean）启动一个请求
  + send(null/data)
  + xhr对象的事件 onreqdystatechange, progress, abort, error, load, timeout
    + xhr对象的属性readyState 0 未打开, 1已打开, 2已发送, 3正接收, 4完成
    + xhr状态 200
    + responseText, responseXML
    + statusText
    + 取消请求 abort()
+ ajax 基于 XML 开发的，增加了对 JSONP 的支持
  + post 默认的 contentType 格式为 'application/x-www-form-urlencoded;charset=UTF-8'
+ Axios 也是基于 XML 开发，不过是结合 promise 实现的，符合最新的 ES 规范
  + 执行多个并发请求 axios.all(request1, request2)
  + instance = axios.create(config) 或 axios.create() 对其修改默认配置 instance.defaults.timeout = 2500 或在请求时用参数的形式覆盖默认配置
  + 对 node 与浏览器分别做了适配、支持
  + 拦截请求和响应，myInterceptor = axios.interceptors.request.use()、axios.interceptors.response.use(then, catch); 移除：axios.interceptors.eject(myInterceptor) 或对实例添加拦截器：instance.interceptors.request.use()
  + 取消请求
  + 转换请求和响应数据，自动转换 JSON 数据
  + 客户端支持XSRF
+ **Fetch API**提供了一个 javascript 接口，用于访问 HTTP 管道部分，还提供了全局的 fetch()方法，返回一个 Promise 对象。是底层次的 API很容易被其他技术使用。已简单合理的方式来支持跨域。
  + fetch不支持同步请求
  + 只对网络请求报错，对 400、500都当做成功的请求，需要封装去处理。
  + 默认不会带 cookie, 不支持 abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
  + 没有办法原生检测请求的进度
  + Response 限制了响应内容的重复读取和转换，因为数据流只能读取一次

```javascript
// 请求参数
{
    body?: any;
    cache?: RequestCache;
    credentials?: RequestCredentials; // 设置了才会带 cookie
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    window?: any;
}
window.fetch(url)
    .then(response => {
        // 通过 response.ok 判断 fetch 请求是否成功
        // 请求结果是 response.body 是一个 ReadableStream
        if (response.ok) {
        //通过 response 原型上的 json 方法将 response.body 转换为 JS 对象，再返回出去
            return response.json();
        }
    }
).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})
```

## 跨域的的方式

+ postMessage
  + worker = new Worker(子线程jsPath) 主线程
  + worker.postMessage()
  + worker.onMessage
  + 子线程：onmessage = ()=>{ postMessage()}
+ Nginx 代理
+ webSocket---connect, message, disconnect
+ jsonp
+ CROS
  + Access-Control-Allow-Origin: 指定特定域名，跨域请求头就要带 Orign，否则没有；由于 CDN 缓存响应头Access-Control-Allow-Origin: xxx 已被缓存，另一个域请求就回出问题；此时需要 Vary:Origin 缓存不同的资源
  + Access-Control-Allow-Methods
  + Access-Control-Allow-Headers
  + Access-Control-Allow-Credentials
  + Access-Control-Expose-Headers
  + Access-Control-Max-Age
  + withCredentials
+ Options 请求：不是简单请求，就回发送 OPTIONS 请求，项目中常见的 `Content-Type: application/json` 及 Authorization: \<token\> 为典型的非简单请求，在发送请求时往往会带上 Options


proxy中间件

1. 正向：间接访问服务器，`隐匿了客户端信息`；如访问google, 做缓存？对客户端访问授权，记录用户访问记录
2. 反向：代理的是服务端，集群分布式部署的情况下，反向代理隐藏了服务器信息；如 内网安全，负载均衡
