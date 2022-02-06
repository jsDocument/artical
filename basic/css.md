## BFC 块级格式化上下文

BFC 特性下的元素和容器外部元素完全隔离，子元素的布局不会影响外部元素，反之亦然。

- css2.1引入的块渲染规则
- BFC 的块不会和浮动块重叠
- 计算 BFC 元素的高度时，会包括浮动元素
- 在一个 BFC 下的块 margin 会发生重叠，不在同一个则不会
- BFC元素是一个独立的容器，使得里面的元素和外部元素完全隔离开，互不影响。
- 触发 BFC 的属性
  - overflow的值为 auto, scroll, hidden
  - float 的值不为 none
  - display 的值为 table-cell, table-caption和 inline-block
  - position 的值为 absolute 和 fixed
- 应用场景
  - 清除浮动
  - 自适应布局

## 水平垂直居中

- 定宽高，使用 postion 与 margin负值 或 transfrom的translate 负值
- 定宽高，display:table-cell 配合 text-align:center, vertical-align: middle
- 不定宽高，使用 postion 与 transfrom的translate 百分比负值
- 不定宽高，display: flex, justify-content

## 隐藏比对

- display: none 让元素从渲染树消失，不会渲染，非继承属性，修改会造成回流操作，性能开销大，重排并重绘。
- opacity: 0 在渲染树上，只是内容不可见，可以点击，非继承属性，修改值是重建图层，性能较高。
- visibility: hidden 不能点击，是继承属性，可以通过修改子元素的属性让其可见，修改只会造成重绘，比回流操作性能高些

## 渲染树、DOM结构

## 行高、字体大小、vertical-align的关系
