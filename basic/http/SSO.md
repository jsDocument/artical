### 单点登录

+ 多个应用以下，用户只需要一次登录，就可以访问所以新人的应用系统
+ CAS是 SSO 的一种框架，包括：CAS Server 和 CAS Client
+ CAS Server完成对用户的认证工作，需要独立部署
+ CAS Client负责处理对客户端`受保护资源的访问请求`，需要`对请求放进行身份认证时`，重新定向到 CAS Server 进行认证。
+ 步骤：
  + 当用户首次访问新浪微博时，新浪微博识别到用户未登录，将请求重定向到`认证中心`，认证中心也识别到用户未登录，则将请求重定向到`登录页`。
  + 当用户已登录新浪微博访问新浪博客时，新浪博客识别到用户未登录，将请求重定向到`认证中心`，认证中心识别到用户已登录，`返回用户的身份`，此时用户无需登录即可使用新浪博客。
  + 只要多个系统使用同一套单点登录框架那么它们将是相互信任的。
+ 分类：同域SSO、同父域 SSO、跨域 SSO
  + 同父域 SSO：服务器在返回 cookie 时，需要把 cookie 的 domain 设置为父域的
  + 跨域 SSO：不同域时 cookie 无法共享，需要搭建 SSO 服务器
+ 要点：
  + /login，/logout 接口

#### 票据

1. TGT (Ticket Grangting Ticket) : TGT 是 CAS 为用户签发的登录票据，拥有了 TGT，用户就可以证明自己在 CAS 成功登录过。
2. TGT 封装了 Cookie 值以及此 Cookie 值对应的用户信息。
3. TGC(Ticket Granting Cookie) : CAS Server 生成 TGT 放入自己的 Session 中，而 TGC 就是这个 Session 的唯一标识（SessionId），以 Cookie 形式放到浏览器端。
4. ST(Service Ticket) : ST 是 CAS 为用户签发的访问某一 service 的票据。

::: tip
用户访问 service 时，service 发现用户没有 ST，则要求用户去 CAS 获取 ST。


#### 跨域 SSO（CAS）的实现过程

+ 用户未登录是的过程：
  + 由于用户没有携带服务器上登录的cookie，所以服务器重定向到 SSO 服务器的地址。
  + 由于用户没有携带在 SSO 服务器上登录的 TGC，所以 SSO 服务器判断用户未登录，给用户显示统一登录界面。
  + 登录成功后，SSO 服务器构建用户在 SSO 登录的 TGT，同时返回一个 http 重定向（包含 sso 服务器派发的 ST ）。
  + 重定向的 http response 中包含写 cookie。这个 cookie 代表用户在 SSO 中的登录状态，它的值是 TGC。
  + 浏览器重定向到要访问的页面。此时重定向的 url 中携带着 SSO 服务器生成的 ST。根据 ST，服务器向 SSO 服务器发送请求，SSO 服务器验证票据的有效性。验证成功后，服务器知道用户已经在 sso 登录了，于是服务器构建用户登录 session。
+ 用户已登录是的过程：
+ 由于用户没有携带服务器上登录的cookie，所以服务器重定向到 SSO 服务器，去询问用户在 SSO 中的登录状态。
+ 浏览器重定向到 SSO 服务器。由于已经向浏览器写入了携带 TGC 的 cookie，所以此时 SSO 服务器可以拿到，根据 TGC 去查找 TGT，如果找到，就判断用户已经在 sso 登录过了。
+ SSO 服务器返回一个重定向，重定向携带 ST。
+ 浏览器带 ST 重定向到服务器。
+ 服务器根据票据向 SSO 服务器发送请求，票据验证通过后，服务器知道用户已经在 sso 登录了，于是生成 session，向浏览器写入 cookie。
