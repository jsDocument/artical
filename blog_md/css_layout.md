### Flex 父
+ main axis, cross axis
+ flex-direction 主轴方向  row | row-reverse | column | column-reverse
+ flex-wrap  是否换行  nowrap | wrap | wrap-reverse
+ flex-flow  是上面两种的
+ justify-content  定义了项目在主轴上的对齐方式  flex-start | flex-end | center | space-between | space-around
+ align-items   定义项目在交叉轴上如何对齐 flex-start | flex-end | center | baseline | stretch
+ align-content  多根轴线的对齐方式  flex-start | flex-end | center | space-between | space-around | stretch

### 子
+ order
+ flex-grow   剩余空间，放大 , 默认0 不放大, 1 很过分, 2 比其他项多一倍
+ flex-shrink   不够时，缩小, 默认 1 缩小, 0 不缩小
+ flex-basis  分配多余空间之前，项目占据的主轴空间, 默认为auto, 即项目本来大小
+ flex
+ align-self  auto | flex-start | flex-end | center | baseline | stretch

### grid
+ 单位：rem, em, vh, vmin, vw
+ 注意：column, float, clear, vertical-align对网格无效果
+ display: grid  inline-grid  subgrid 网格容器

### 容器
+ grid-template-rows  grid-template-columns 显示设置一个风格的行和列  [line-name] 1fr [line-name]  2fr [line-name] 3fr [line-name]  % rem
1. px, rem, em, 1fr【份数】, %
2. 计算: 3rem  25%  1fr  2fr; 1fr = (网格宽度 - 3rem - 网格宽度 * 25%)/3
3. repeat(3, 1fr) 重复创建风格轨道  repeat(3, name 2fr name)  可以给网格分配相同的名称, 会自动添加对应的数字
4. minmax(auto, 50%)  创建风格轨道的最大或最小尺寸, auto为基于内容的尺寸拉伸或挤压
5. 例: grid-template-rows: repeat(3, 1fr);    grid-template-rows: 30px repeat(3, 1fr) 30px;  中间为三列通过repeat来创建的
6. 网格线命名: gird-template-rows: [row-1-start] 1fr;
7. 例: repeat(3, 20px [col-start]) 5%;

+ grid-template-area 配合 grid-area 显式定义网格区域
1. name, .表示一个空的网格单元, none没有网格区域被定义

+ grid-column-gap  grid-row-gap  行列之间的间距   grid-gap


### 网格项
+ 网格线代表线的开始、结束，两者之间就是风格行或列；网格的网格线从1开始，每条网格线逐步增加1.
+ 网格项目跨度只有一行或一列, 下面属性不是必需的: 类似于合并小网格, 从第几条线到第几条线
1. grid-row-start  grid-row-end -->grid-row
2. grid-column-start  grid-column-end -->grid-column: 3/4  网格线号来定位风格项目

4. grid-row: 2/span 3 合并多少个列或行, 从第二条线合并3个行
5. 可以使用网格线来合并网格

+ grid-auto-rows  grid-auto-columns 隐式网格
+ grid-auto-row  grid-auto-flow 网格流向 row column
+ 隐式网格线命名: 名称-start和-end也创建了一个隐式网格区域名称
+ grid-area: inner  || 2/3/4/5  定义网格区域名字
1. grid-row-start  grid-column-start
2. grid-row-end grid-column-end

+ 层级 与 堆栈  z-index

+ justify-items 和 justify-self 内容沿行轴对齐, 内容在网格中的位置
+ align-items 和 align-self  内容沿列轴对齐
1. auto, normal, start, end, center, stretch, baseline, first baseline, last baseline


+ justify-content  align-content 非弹性单位，总网格大小有可能小于网格容器，垂直于网格线对齐; 让网格填充容器的方式。
1. [normal,] start, end, center, stretch, space-around, space-between, space-evenly, [baseline, first baseline, last baseline]


### text-transform


### calc(expression)

### clip: rect(0px, 150px, 150px, 75px)  剪切绝对定位元素
1. 值表示最终剪裁可见区域的上、右、下、左边, 值都表示位置且相对于原始元素的左上角
2. 上距原始元素上边缘0, 右距离原始元素左边缘150, 下距离原始顶部的距离为150, 左距离原始元素左边元素为75.

### object-fit
+ fill  拉伸填满，不保证原来比例
+ contain   保持原来比例，在容器内
+ cover   保持原有比例，但比容器大，高度或宽度至少有一个和容器一致
+ none   保持原有尺寸，同时替换内容原始尺寸大小
+ scale-down   相当于node和contain

### background-size
+ cover

### text-size-adjust
### font-smoothing
### background-attachment
+ fixed
