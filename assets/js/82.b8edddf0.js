(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{255:function(v,_,i){"use strict";i.r(_);var l=i(0),e=Object(l.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("div",{staticClass:"content"},[i("h2",{attrs:{id:"前端安全"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前端安全"}},[v._v("#")]),v._v(" 前端安全")]),v._v(" "),i("ol",[i("li",[i("p",[i("code",[v._v("跨站点请求伪造")]),v._v("（CSRF）：指攻击者可以在用户不知情的情况下，"),i("code",[v._v("窃用其身份在对应的网站进行操作")]),v._v("；")]),v._v(" "),i("ol",[i("li",[v._v("出现的条件：")])]),v._v(" "),i("ul",[i("li",[v._v("攻击者诱导受害者进入第三方网站，在第三方网站中"),i("code",[v._v("向被攻击网站发送跨站请求")]),v._v("。利用受害者在被攻击网站已经获取的身份凭证，达到冒充用户对被攻击的网站执行某项操作的目的。")]),v._v(" "),i("li",[v._v("利用浏览器在发送 HTTP 请求时会自动带上 Cookie 的原理，冒用受害者身份请求。")]),v._v(" "),i("li",[v._v("攻击一般发生在第三方网站上，攻击者只能“冒用”受害者的身份凭证，并不能获取。")]),v._v(" "),i("li",[v._v("跨站请求有多种方式，常见的有图片 URL、超链接、Form 提交等。")])]),v._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[v._v("解决方案：")])]),v._v(" "),i("ul",[i("li",[v._v("使用 CSRF Token 验证用户身份\n"),i("ul",[i("li",[v._v("CSRF Token：")]),v._v(" "),i("li",[v._v("原理：服务端生成 CSRF Token （通常存储在 Session 中），用户提交请求时携带上 Token，服务端验证 Token 是否有效。")]),v._v(" "),i("li",[v._v("优点：能比较有效的防御 CSRF （前提是没有 XSS 漏洞泄露 Token）。")]),v._v(" "),i("li",[v._v("缺点：大型网站中 Session 存储会增加服务器压力，且若使用分布式集群还需要一个公共存储空间存储 Token，否则可能用户请求到不同服务器上导致用户凭证失效；有一定的工作量。")])])]),v._v(" "),i("li",[v._v("双重 Cookie 验证：URL 参数与 Header 头都带上 Cookie 数据\n"),i("ul",[i("li",[v._v("设置 Cookie 的 SameSite 属性可以用来限制第三方 Cookie 的使用，可选值：Strict、Lax、None")]),v._v(" "),i("li",[v._v("Strict：完全禁止第三方 Cookie。")]),v._v(" "),i("li",[v._v("Lax：只允许链接、预加载请求和 GET 表单的场景下发送第三方 Cookie。")]),v._v(" "),i("li",[v._v("None：关闭 SameSite 属性。")])])]),v._v(" "),i("li",[v._v("设置白名单，仅允许安全域名请求")]),v._v(" "),i("li",[v._v("增加验证码验证")])])]),v._v(" "),i("li",[i("p",[v._v("跨站脚本 XSS，一种代码注入，所以需要对"),i("code",[v._v("用户输入做验证")]),v._v("，利用网站的漏洞将代码注入到其他用户浏览器的攻击方式")]),v._v(" "),i("ol",[i("li",[v._v("常见的类型有：\n"),i("ul",[i("li",[v._v("持久型: 攻击者将注入型脚本提交至被攻击网站数据库中，当其他用户浏览器请求数据时，注入脚本从服务器返回并执行。(服务器未经转义存储了恶意代码)")]),v._v(" "),i("li",[v._v("非持久型: 攻击者通过在 URL 插入恶意代码，其他用户访问该恶意链接时，服务端在 URL 取出恶意代码后拼接至 HTML 中返回给用户浏览器。")]),v._v(" "),i("li",[v._v("DOM型：攻击者通过在 URL 插入恶意代码，客户端脚本取出 URL 中的恶意代码并执行。")])])]),v._v(" "),i("li",[v._v("常见解决方案：\n"),i("ul",[i("li",[v._v("对于外部传入的内容进行充分转义。")]),v._v(" "),i("li",[v._v("开启 CSP（Content Security Policy，内容安全策略），规定客户端哪些外部资源可以加载和执行，降低 XSS 风险。")]),v._v(" "),i("li",[v._v("设置 Cookie httpOnly 属性，禁止 JavaScript 读取 Cookie 防止被窃取。")])])])])]),v._v(" "),i("li",[i("p",[v._v("HTTPS 中间人攻击：指攻击者"),i("code",[v._v("与通讯的两端分别创建独立的联系")]),v._v("，在通讯中充当一个中间人角色对数据进行监听、拦截甚至篡改，是一种通过各种技术手段入侵两台设备通信的网络攻击方法")]),v._v(" "),i("ol",[i("li",[v._v("分为两个阶段：拦截和解密\n"),i("ul",[i("li",[v._v("攻击者需要用户数据在到达目标设备前拦截并通过攻击者的网络；分为主动攻击和被动攻击")]),v._v(" "),i("li",[v._v("被动攻击常见的有：向公众提供免费的恶意 WIFI，一旦有受害者连接了该热点，攻击者就能完全了解其所有的在线数据交换。")])])]),v._v(" "),i("li",[v._v("常见的主动攻击有两种：\n"),i("ul",[i("li",[v._v("ARP 欺骗： 攻击者利用 ARP 的漏洞，通过"),i("code",[v._v("冒充网关或其他主机")]),v._v("，使得到达网关或其他主机的流量"),i("code",[v._v("通过攻击者主机进行转发")]),v._v("。")]),v._v(" "),i("li",[v._v("DNS 欺骗： 攻击者"),i("code",[v._v("冒充域名服务器")]),v._v("，将受害者查询的 IP 地址"),i("code",[v._v("转发到攻击者的 IP 地址")]),v._v("。")])])]),v._v(" "),i("li",[v._v("解密​: 拦截后，若连接是使用 HTTPS 协议即传递的数据用了 SSL / TLS 加密，这时还需要其他手段去解密用户数据。\n"),i("ul",[i("li",[v._v("攻击者在 TLS 握手期间"),i("code",[v._v("拦截到服务器返回的公钥后")]),v._v("，"),i("code",[v._v("将服务器的公钥替换成自己的公钥并返回给客户端")]),v._v("，这样攻击者就能用自己的私钥去解密用户数据，也可以用服务器公钥解密服务器数据。")]),v._v(" "),i("li",[v._v("因为是伪造的证书，所以客户端在校验证书过程中"),i("code",[v._v("会提示证书错误")]),v._v("，若用户仍选择继续操作，此时"),i("code",[v._v("中间人便能获取与服务端的通信数据")]),v._v("。")]),v._v(" "),i("li",[v._v("SSL 剥离：攻击者拦截到用户到服务器的请求后，攻击者继续和服务器保持 HTTPS 连接，并与用户降级为不安全的 HTTP 连接。服务器可以通过开启 "),i("code",[v._v("HSTS（HTTP Strict Transport Security）策略")]),v._v("，告知浏览器必须使用 HTTPS 连接。但是有个缺点是用户首次访问时因还未收到 HSTS 响应头而不受保护。")])])]),v._v(" "),i("li",[v._v("对于开发者来说：支持 HTTPS，开启 HSTS 策略")]),v._v(" "),i("li",[v._v("对于用户来说：尽可能使用 HTTPS 链接，避免连接不知名的 WiFi 热点，不忽略不安全的浏览器通知，公共网络不进行涉及敏感信息的交互，用可信的第三方 CA 厂商，不下载来源不明的证书。")])])]),v._v(" "),i("li",[i("p",[v._v("https 安全验证的过程？")])])]),v._v(" "),i("ul",[i("li",[v._v("https 与 http 相比\n"),i("ul",[i("li",[v._v("https 需要 ca 证书")]),v._v(" "),i("li",[v._v("https 具有更安全的 ssl加密传输协议")]),v._v(" "),i("li",[v._v("身份认证的网络的网络协议")])])]),v._v(" "),i("li",[v._v("CA 证书认证机构，让 CA 颁布具有"),i("code",[v._v("认证过的公钥")]),v._v("，才能解决公钥的信任问题。\n"),i("ul",[i("li",[v._v("存在一个数字签名的认证问题。因为私钥是自己的，公钥是谁都可以发布，所以必须发布经过认证的公钥，才能解决公钥的信任问题。")])])]),v._v(" "),i("li",[v._v("加密请求的过程？1(证书、公钥)，2(生成随机数)，3(对称加密传输数据)")])])])}],!1,null,null,null);_.default=e.exports}}]);