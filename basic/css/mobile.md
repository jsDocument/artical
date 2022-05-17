1. 点击穿透与延迟
   - 原因：iOS 中的 safari，为了实现双击缩放操作，在单击 300ms 之后，如果未进行第二次点击，则执行 click 单击操作。也就是说来判断用户行为是否为双击产生的。但是，在 App 中，无论是否需要双击缩放这种行为，click 单击都会产生 300ms 延迟。
   - 事件触发顺序: touchstart, touchmove, touchend, click。
   - <meta name="viewport" content="width=device-width">
   - <meta name="viewport" content="width=device-width, user-scalable=no">
   - <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, maximum-scale=3">
   - html {-ms-touch-action: manipulation; touch-action: manipulation; }
2. 适配 iPhoneX
   - meta 设置 viewport-fit=cover
   - 预定义变量：safe-area-inset-left, safe-area-inset-right, safe-area-inset-top, safe-area-inset-bottom,
   - constant() 和 env()
   - 结合 calc() 使用
   - @supports (bottom: constant(xxx)) or (bottom: env(xxx))隔离兼容样式
3. CSS 单位，1px, (1em, 1rem)相对于字体大小, (1vw, vh)相对于视窗大小
   - 监听屏幕视窗的宽度，通过一定比例换算赋值给 html 的 font-size，根字体大小会岁屏幕宽度变化
   - 将 px 通过函数转换为 rem，或编译时转换----postcss
   - 1px 相对单位，相对设备像素，当设计稿为 750，里面有 1px 的，实现时需要实现为0.5px
4. 1 物理像素，即不同分辨率上的比例处理
   - style={--dpr: devicePixelRatio} 设备像素比
   - transform: scale(0.5)
5. IOS 的 webview 中滑动不流畅：-webkit-overflow-scrolling: touch 手指移开会保持一段时间的滚动，auto 手指移开会立即停止
   - 并将外部元素的 overflow-y: hidden, 内容元素设置为 overflow-y: auto
6. IOS 上拉或下拉边界出现白色空白
   - 由于拖动触发 touchmove 事件，这个事件触发的对象是整个 webview 容器，容器自然被拖动
   - touchmove 事件的速度是可以实现定义的，取决于硬件性能和其他实现细节
   - preventDefault 方法，阻止同一触点上所有默认行为，比如滚动。
   - 监听事件禁止滑动
   - 滚动妥协填充空白，装饰成其他功能
7. input框输入键盘弹起回落问题
8. 输入框内阴影问题：input, textarea { border: 0; -webkit-appearance: none; }
9. PC 端通过 document.scrollTop和 document.scrollLeft 获取滚动条的值，IOS 和 Android 通过 window.scrollX 和 window.scrollY 获取
10. H5 唤起 APP: [https://suanmei.github.io/2018/08/23/h5_call_app/]
    - URL Scheme: [scheme:][//authority][path][?query][#fragment]
    - Intent
    - Universal Link
11. DSBridge 与 JSBridge
12. 电话号码
    - 关闭识别<meta name="format-detection" content="telephone=no" />
    - 开启电话功能<a href="tel:123456">123456</a>
    - 开启短信功能<a href="sms:123456">123456</a>
13. 有些地址的识别
    - 关闭识别<meta name="format-detection" content="email=no" />
    - 开始发送<a mailto:>mobile@gmail.com">mobile@gmail.com</a>
14. 指定 IOS 的 safari 顶端状态条的样式<meta name="apple-mobile-web-app-status-bar-style" content="black" />
