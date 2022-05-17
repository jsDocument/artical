### transform中perspective方法   与  perspective属性？

### API
+ transform  转换[matrix(6个值), matrix3d(16个值), translate[3d, X,Y,Z], scale[3d, X,Y,Z], rotate[3d, X,Y,Z], skew[3d, X,Y,Z], perspective(n)]
+ transform-origin 改变被转换元素的位置, 默认50% 59% 0; X可以为: left, center,right,length, %; Y可以为:top, center, bottom, length, %; Z可以为： length
+ transform-style 被嵌套元素如何在3D空间中显示; flat, preserve-3d保留3D位置   preserve-3d
+ perspective  3D元素的透视效果，子元素会获得透视效果
+ perspective-origin 3D元素的底部位置   50%  50%，可能值与transform-origin相同
+ backface-visibility 元素不面对屏幕时是否可见, visible, hidden

+ transition 过渡   property1,property2 1s,1s, ease,ease
+ transition-property  过渡的css属性的名称 none, all, property【多个属性？】
+ transition-duration
+ transition-timing-function
+ transition-delay


+ animation [@keyframes, animation(除animation-play-state)、
+ animation-name: @keyframes定义的名字
+ animation-duration: ns
+ animation-timing-function: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)
+ animation-delay: ns
+ animation-iteration-count: n, infinite
+ animation-direction: normal, alternate
+ animation-play-state: paused, running
+ animation-fill-mode: none, forwards`动画完成后，保持在最后一个属性值`,backwards`在delay的一段时间内，动画之前，应该开始属性值`, both

### 提高渲染
+ background-attachment: fixed改为position: fixed；前面滚动要实时计算重绘
+ 伪元素  独立渲染
+ will-change 增强页面渲染性能

### will-change 加速
+ will-change: auto;
+ will-change: scroll-position;
+ will-change: contents;  内容要动画或变化了
+ will-change: transform;  属性或动画名称      
+ will-change: opacity;        
+ will-change: left, top;      


+ will-change: inherit;
+ will-change: initial;
+ will-change: unset;

### 事件
+ animationstart
+ animationiteration
+ animationend


### 例子及注意事项

webkitAnimationEnd    MSAnimationEnd  oanimationend  animationend  / start  /Iteration
'onorientationchange' in window;


-webkit-filter: hue-rotate()

@-webkit-keyframes name{
    
}
2、新属性：
webkit内核支持：
    background-clip: text  content-box  border-box  padding-box 背影被裁剪到 
    background-image: linear-gradient([92deg,] color, color);   与上面配合使用更佳
    background-blend-mode: normal multiply screen overlay darken lighten color-dodge saturation color luminosity  混合背影图片与渐变的显示模式
    backgorund-attachment: scroll  fixed  local  
    text-fill-color: transparent  覆盖所定义字体颜色
    text-stroke: 1px #000;
    box-reflect: below 1px(离文字的偏移量) linear-gradient(transparent, tarnsparent 50%, rgba(0,0,0.3));  倒影
    appearance: none显示外观样式
    box-sizing: 盒大小
    box-shadow
    caption
    border-collapse
    border-image/-outset /-repeat/ -slice/ -source/ -width
    clip
    column-count/-fill/-gap/-rule/-rule-color/-rule-style/-rule-width/columns
    -webkit-filter:blur(px)  brightneww(%)明度  contrast(%)对比度  drop-shadow(px,px,px,color)阴影  grayscale(%)灰度  hue-rotate()  invert(%)内容翻转  opacity(30%)  saturate(%)饱和度  sepia()  url()滤镜

    page-break-after/before/inside
    nav-down/index/left/right/up
    outline-color/offset/style/width
    list-style/-image/-position/-type
    empty-cells
    *counter-increment/counter-reset

    text-transform(老)   text-justify   text-shadow
    font-size-adjust/stretch/variant
    justify-content

3、table
    table-layout: fixed  auto  initial
    tab-size: number  length
4、inline-flex
    align-content
    align-items
    align-self
    all
    flex
    flex-basis/-direction/flow/grow/shrink/wrap
    







