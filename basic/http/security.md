## 前端安全

1. `跨站点请求伪造`（CSRF）：指攻击者可以在用户不知情的情况下，`窃用其身份在对应的网站进行操作`；
   1. 出现的条件：
     + 攻击者诱导受害者进入第三方网站，在第三方网站中`向被攻击网站发送跨站请求`。利用受害者在被攻击网站已经获取的身份凭证，达到冒充用户对被攻击的网站执行某项操作的目的。
     + 利用浏览器在发送 HTTP 请求时会自动带上 Cookie 的原理，冒用受害者身份请求。
     + 攻击一般发生在第三方网站上，攻击者只能“冒用”受害者的身份凭证，并不能获取。
     + 跨站请求有多种方式，常见的有图片 URL、超链接、Form 提交等。
   2. 解决方案：
     + 使用 CSRF Token 验证用户身份
       + CSRF Token：
       + 原理：服务端生成 CSRF Token （通常存储在 Session 中），用户提交请求时携带上 Token，服务端验证 Token 是否有效。
       + 优点：能比较有效的防御 CSRF （前提是没有 XSS 漏洞泄露 Token）。
       + 缺点：大型网站中 Session 存储会增加服务器压力，且若使用分布式集群还需要一个公共存储空间存储 Token，否则可能用户请求到不同服务器上导致用户凭证失效；有一定的工作量。
     + 双重 Cookie 验证：URL 参数与 Header 头都带上 Cookie 数据
       + 设置 Cookie 的 SameSite 属性可以用来限制第三方 Cookie 的使用，可选值：Strict、Lax、None
       + Strict：完全禁止第三方 Cookie。
       + Lax：只允许链接、预加载请求和 GET 表单的场景下发送第三方 Cookie。
       + None：关闭 SameSite 属性。
     + 设置白名单，仅允许安全域名请求
     + 增加验证码验证
2. 跨站脚本 XSS，一种代码注入，所以需要对`用户输入做验证`，利用网站的漏洞将代码注入到其他用户浏览器的攻击方式
   1. 常见的类型有：
      + 持久型: 攻击者将注入型脚本提交至被攻击网站数据库中，当其他用户浏览器请求数据时，注入脚本从服务器返回并执行。(服务器未经转义存储了恶意代码)
      + 非持久型: 攻击者通过在 URL 插入恶意代码，其他用户访问该恶意链接时，服务端在 URL 取出恶意代码后拼接至 HTML 中返回给用户浏览器。
      + DOM型：攻击者通过在 URL 插入恶意代码，客户端脚本取出 URL 中的恶意代码并执行。
   2. 常见解决方案：
      + 对于外部传入的内容进行充分转义。
      + 开启 CSP（Content Security Policy，内容安全策略），规定客户端哪些外部资源可以加载和执行，降低 XSS 风险。
      + 设置 Cookie httpOnly 属性，禁止 JavaScript 读取 Cookie 防止被窃取。


3. HTTPS 中间人攻击：指攻击者`与通讯的两端分别创建独立的联系`，在通讯中充当一个中间人角色对数据进行监听、拦截甚至篡改，是一种通过各种技术手段入侵两台设备通信的网络攻击方法
   1. 分为两个阶段：拦截和解密
      + 攻击者需要用户数据在到达目标设备前拦截并通过攻击者的网络；分为主动攻击和被动攻击
      + 被动攻击常见的有：向公众提供免费的恶意 WIFI，一旦有受害者连接了该热点，攻击者就能完全了解其所有的在线数据交换。
   2. 常见的主动攻击有两种：
      + ARP 欺骗： 攻击者利用 ARP 的漏洞，通过`冒充网关或其他主机`，使得到达网关或其他主机的流量`通过攻击者主机进行转发`。
      + DNS 欺骗： 攻击者`冒充域名服务器`，将受害者查询的 IP 地址`转发到攻击者的 IP 地址`。
   3. 解密​: 拦截后，若连接是使用 HTTPS 协议即传递的数据用了 SSL / TLS 加密，这时还需要其他手段去解密用户数据。
      + 攻击者在 TLS 握手期间`拦截到服务器返回的公钥后`，`将服务器的公钥替换成自己的公钥并返回给客户端`，这样攻击者就能用自己的私钥去解密用户数据，也可以用服务器公钥解密服务器数据。
      + 因为是伪造的证书，所以客户端在校验证书过程中`会提示证书错误`，若用户仍选择继续操作，此时`中间人便能获取与服务端的通信数据`。
      + SSL 剥离：攻击者拦截到用户到服务器的请求后，攻击者继续和服务器保持 HTTPS 连接，并与用户降级为不安全的 HTTP 连接。服务器可以通过开启 `HSTS（HTTP Strict Transport Security）策略`，告知浏览器必须使用 HTTPS 连接。但是有个缺点是用户首次访问时因还未收到 HSTS 响应头而不受保护。
   4. 对于开发者来说：支持 HTTPS，开启 HSTS 策略
   5. 对于用户来说：尽可能使用 HTTPS 链接，避免连接不知名的 WiFi 热点，不忽略不安全的浏览器通知，公共网络不进行涉及敏感信息的交互，用可信的第三方 CA 厂商，不下载来源不明的证书。

4. https 安全验证的过程？


+ https 与 http 相比
  + https 需要 ca 证书
  + https 具有更安全的 ssl加密传输协议
  + 身份认证的网络的网络协议
+ CA 证书认证机构，让 CA 颁布具有`认证过的公钥`，才能解决公钥的信任问题。
  + 存在一个数字签名的认证问题。因为私钥是自己的，公钥是谁都可以发布，所以必须发布经过认证的公钥，才能解决公钥的信任问题。
+ 加密请求的过程？1(证书、公钥)，2(生成随机数)，3(对称加密传输数据)

