## 前端安全

+ 跨站点请求伪造CSRF, axios让每个请求都带一个从 cookie中拿到的 key
  + SameSite Cookie 有哪些值，是如何预防 CSRF 攻击的
  + None: 任何情况下都会向第三方网站请求发送 Cookie，需要指定 Cookie 属性 Secure，即在 https 下发送
  + Lax: 只有导航到第三方网站的 Get 链接会发送 Cookie，跨域的图片、iframe、form 表单都不会发送 Cookie
  + Strict: 任何情况下都不会向第三方网站请求发送 Cookie
+ 跨站脚本 XSS，一种代码注入，对用户输入做验证
+ 点击劫持 如何避免自己网站被 iframe 嵌入非法网站？CSP指令 或 响应头加：X-Frame-Options
