(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{349:function(n,t,e){"use strict";e.r(t);var r=e(6),s=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("DNS域名解析。\nTCP三次握手，建立接连。\n发送HTTP请求报文。\n服务器处理请求返回响应报文。\n浏览器解析渲染页面。\n四次挥手，断开连接。\nDNS 协议提供通过域名查找 IP地址，或逆向从 IP地址反查域名的服务。DNS 是一个网络服务器，我们的域名解析简单来说就是在 DNS 上记录一条信息记录。\nTCP 三次握手，四次挥手：握手挥手都是客户端发起，客户端结束。三次握手与四次挥手详解\n负载均衡：请求在进入到真正的应用服务器前，可能还会先经过负责负载均衡的机器，它的作用是将请求合理地分配到多个服务器上，转发HTTP请求；同时具备具备防攻击等功能。可分为DNS负载均衡，HTTP负载均衡，IP负载均衡，链路层负载均衡等。\nWeb Server：请求经过前面的负载均衡后，将进入到对应服务器上的 Web Server，比如 Apache、Tomcat\n反向代理是工作在 HTTP 上的，一般都是 Nginx。全国各地访问baidu.com就肯定要通过代理访问，不可能都访问百度的那台服务器。 （VPN正向代理，代理客户端）\n浏览器解析渲染过程：返回的html传递到浏览器后，如果有gzip会先解压，找出文件编码格式，外链资源的加载 html从上往下解析，遇到js，css停止解析渲染，直到js执行完成。解析HTML，构建DOM树 解析CSS，生成CSS规则树 合并DOM树和CSS规则，生成render树去渲染\n不会引起DOM树变化，页面布局变化，改变元素样式的行为叫重绘\n引起DOM树结构变化，页面布局变化的行为叫回流\nGUI渲染线程负责渲染浏览器界面HTML元素,当界面需要 重绘(Repaint) 或由于某种操作引发 回流(reflow) 时,该线程就会执行。在Javascript引擎运行脚本期间,GUI渲染线程都是处于挂起状态的,也就是说被”冻结”了. 直到JS程序执行完成，才会接着执行。因此如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。JavaScript是可操纵DOM的，如果在修改这些元素属性同时渲染界面，渲染前后元素数据可能不一致\nGPU绘制多进程的浏览器：主控进程，插件进程，GPU，tab页（浏览器内核）多线程的浏览器内核：每一个tab页面可以看作是浏览器内核进程，然后这个进程是多线程的。")])])}),[],!1,null,null,null);t.default=s.exports}}]);