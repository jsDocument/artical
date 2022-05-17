Box-sizing 变换盒模型

重排：影响了原始的几何信息
重绘：把节点转换成屏幕上的实际像素（渲染树 + DOM树）

引起重排的因素：

+ 页面首次渲染（无法避免且开销最大的一次）
+ 浏览器窗口大小发生改变（resize事件）
+ 元素尺寸或位置发生改变（边距、宽高、边框等）
+ 元素内容变化（文字数量或图片大小等等）
+ 元素字体大小变化（font-size）
+ 添加或者删除「可见」的DOM元素
+ 激活CSS伪类（例如：:hover）
+ 查询某些属性或调用某些方法：查询关于尺寸 和 计算样式结果 getComputedStyle(), getBoundingClientRect()

引起css 加速属性：transform, opacity, filters, Will-change

如何减少 重排 和 重绘

+ 集中改变样式
+ 批量 dom 操作
+ 使用脱离文档流的方式：absolute，fixed
+ 开启 GPU 加速，如css 属性 transform 、will-change 等，因为它不会触发重排或重绘，transform 使浏览器为元素创建⼀个 GPU 图层，这使得动画元素在一个独立的层中进行渲染
+ 节流：滚动时每300ms进行一次计算判断是否滚动到底部的逻辑
+ webWork：通过 onmessage 和 postMessage 接口进行通信，计算后返回？
+ 事件委托


## BFC 块级格式化上下文

BFC 用于决定块级盒的布局及浮动相互影响范围的一个区域

BFC 特性下的元素和容器外部元素完全隔离，子元素的布局不会影响外部元素，反之亦然。用于实现多栏布局

特性：

+ 块级元素会在垂直方向一个接一个的排列，和文档流的排列方式一致。
+ 在 BFC 中上下相邻的两个容器的 margin  会重叠，创建新的 BFC 可以避免外边距重叠。
+ 计算 BFC 的高度时，需要计算浮动元素的高度。
+ BFC 区域不会与浮动的容器发生重叠。
+ BFC 是独立的容器，容器内部元素不会影响外部元素。
+ 每个元素的左 margin  值和容器的左 border  相接触。

+ css2.1引入的块渲染规则
+ BFC 的块不会和浮动块重叠
+ 计算 BFC 元素的高度时，会包括浮动元素
+ 在一个 BFC 下的块 margin 会发生重叠，不在同一个则不会
+ BFC元素是一个独立的容器，使得里面的元素和外部元素完全隔离开，互不影响。
+ 触发 BFC 的属性
  + overflow的值为 auto, scroll, hidden
  + float 的值不为 none
  + display 的值为 table-cell, table-caption和 inline-block
  + position 的值为 absolute 和 fixed
+ 应用场景
  + 清除浮动
  + 自适应布局

另：

+ IFC 内联格式上下文：line box(线框)高度由行内元素的视觉高度计算而来(不受垂直方向的 padding、margin影响)，行内 box 左右紧贴，IFC 和 line box(线框) 之间
+ GFC 网格布局格式化上下文：元素将获得一个独立的渲染区域，容器、行、列、项
+ FFC 自适应格式上下文：会生成自适应容器


## 水平垂直居中

+ 定宽高，使用 postion 与 margin负值 或 transfrom的translate 负值
+ 定宽高，display:table-cell 配合 text-align:center, vertical-align: middle
+ 不定宽高，使用 postion 与 transfrom的translate 百分比负值
+ 不定宽高，display: flex, justify-content

## 隐藏比对

+ display: none 让元素从渲染树消失，不会渲染，非继承属性，修改会造成回流操作，性能开销大，重排并重绘。
+ opacity: 0 在渲染树上，只是内容不可见，可以点击，非继承属性，修改值是重建图层，性能较高。
+ visibility: hidden 不能点击，是继承属性，可以通过修改子元素的属性让其可见，修改只会造成重绘，比回流操作性能高些

## 渲染树、DOM结构

## 行高、字体大小、vertical-align的关系


## 多行溢出处理

+ text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*! autoprefixer:off /
  -webkit-box-orient: vertical; /
  autoprefixer:on */
+ content: "..." 再使用绝对定位
