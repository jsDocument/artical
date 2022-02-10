- MutationObserver----观察 DOM元素，检查到更改时触发回调-----Vue
  - config: childList, subtree, attributes, attributeFilter, charaterData

```javascript
const callback = (mutationsList, observer) => {}
const observer = new MutationObserver(callback)
observer.observe(targetNode, {attributes: true, childList: true, subtree: true})
observer.disconnect();
```

- DOMContentLoaded 文档解析完成 与 load 资源加载完成
   1. HTML 解析形成 DOM(文档对象模型)
   2. 再根据 CSS 解析生成 CSS 对象模型，再与 DOM 合并产生`渲染树`，在跟进这些节点进行布局；HTML和 CSS-->Render Tree-->Layout-->Paint。
   3. javascript 可以阻塞 DOM 的生成，CSS 对象模型生成后才会执行 javascript，但 DOMContentLoaded 不需要等待其他资源加载完成
   4. 同步脚本：HTML 会停止解析，先去加载脚本，然后执行，执行结束继续解析 HTML文档
   5. 异步脚本：
      1. defer：在后台加载脚本，文档解析过程不会中断，解析完成defer 脚本才会去执行，但脚本需要等待 CSSOM 构建完成，defer 脚本的执行顺序和定义是的顺序有关，defer 脚本执行完成，DOMContentLoaded事件触发
      2. async：在后台加载脚本，文档解析过程不会中断，脚本加载完成后，文档停止解析，脚本执行，执行结束后接着解析文档，HTML 解析完成，DOMContentLoaded 触发，不需要等待 async 脚本执行、样式表加载。
- getBoundingClentRect：返回元素大小与相对于视口的位置，用于实现懒加载和无限滚动
- IntersectionObserver：某个元素与视口的交叉状态，用于实现懒加载和无限滚动
  - option 包含：threshold 和 root，以下是option选项和IntersectionObserverEntry 的属性：
  - threshold：决定了什么时候触发回调，是一个数组[0, 0.25, 0.5, 0.75, 1]即交叉比例，目标元素分别在以上的比例时触发回调
  - root：目标元素所在的容器节点 DOM
  - time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
  - target：被观察的目标元素，是一个 DOM 节点对象
  - rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
  - boundingClientRect：目标元素的矩形区域的信息
  - intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
  - intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0

```javascript
// 接收两个参数 callback  option，callback 是进入视口或完全离开视口时触发，entries是 IntersectionObserverEntry 对象组
var io = new IntersectionObserver(entries=>{}, option);

// 开始观察(可观察多个元素)
io.observe(document.getElementById('example1'));
io.observe(document.getElementById('example2'));

// 停止观察某个元素
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

- it = createNodeIterator(DOM), it.nextNode()
- styles = getComputedStyle(DOM, PseudoElement伪类) 结合 styles.getPropertyValue('height')
- requestAnimationFrame // TODO
- requestIdleCallback // TODO
