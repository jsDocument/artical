# 关于硬件加速

## 各个角色在渲染过程中的作用

+ JavaScript：JavaScript 实现动画效果，DOM 元素操作等。
+ Style（计算样式）：确定每个 DOM 元素应该应用什么 CSS 规则。
+ Layout（布局）：计算每个 DOM 元素在最终屏幕上显示的大小和位置。由于 web 页面的元素布局是相对的，所以其中任意一个元素的位置发生变化，都会联动的引起其他元素发生变化，这个过程叫 reflow。
+ Paint（绘制）：在多个层上绘制 DOM 元素的的文字、颜色、图像、边框和阴影等。
+ Composite（渲染层合并）：按照合理的顺序合并图层然后显示到屏幕上。

> 硬件渲染 WebKit 会依据指定条件决定将那些 RenderLayer 对象组合在一起形成一个新层并缓存在 GPU，这些新层我们统称为合成层（Compositing Layer）。
这些合成层提升成独立的层，被独立出来之后，便不会再影响其他 dom 的布局。
如果发生 偏移、透明度等等变换 GPU 要做的只是把更新的合成层进行相应的变换并送入 Compositor 重新合成即可，利用这个优点我们可以把页面中一些布局经常变换的 dom 提升到独立的层。
> 一个页面是由多个图层最后形成一个完整的合成层才被渲染出来。

## 如何触发合成层

+ 根节点 document
+ HTML5 Video或者Canvas元素
+ 元素有一个 z-index 较低且包含一个复合层的兄弟元素
+ 3D 或透视变换(perspective，transform) CSS 属性 比如常用的 （设置translateZ()、backface-visibility为hidden）

> 如果有一个元素，它的兄弟元素在复合层中渲染，而这个兄弟元素的z-index比较小，那么这个元素（不管是不是应用了硬件加速样式）也会被放到复合层中。
> 使用 3D 硬件加速提升动画性能时，最好给元素增加一个 z-index 属性，人为干扰复合层的排序，可以有效减少 chrome 创建不必要的复合层，提升渲染性能，移动端优化效果尤为明显。

```css
/* 关键字值 */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform;        /* <custom-ident>示例 */
will-change: opacity;          /* <custom-ident>示例 */
will-change: left, top;        /* 两个<animateable-feature>示例 */

/* 全局值 */
will-change: inherit;
will-change: initial;
will-change: unset;
```

未完待续。。。
