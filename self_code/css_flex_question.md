+ 弹性盒子中 flex: 0 1 auto 表示什么意思
  + flex-grow 剩余空间索取即项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  + flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  + flex-basis 设置了宽度跟宽度走，没设置宽度跟内容实际宽度走，如果设置了width和flex-basis，那么flex-basis会覆盖width值。
+ container 为 600px，left---flex: 2 1 400px、right----flex: 1 2 500px ，求最终的left, right 的宽度宽度
  + 溢出：500+400-600 = 300
  + 总权重：500\*2+400*1 = 1400
  + 收缩r：300*2*500/1400, 收缩l：300*1*400/1400
  + 500-收缩r，400-收缩l
+ container 为 600px，left---flex: 1 2 300px、right----flex: 2 1 200px ，求最终的left, right 的宽度宽度
  + 剩余空间：600-300-200 = 100
  + 收缩比：按 3 等份，收缩 l：(1 / 3) \* 100, 收缩 r：(2 / 3) * 100
  + 300 + 收缩 l, 200 + 收缩 r

```HTML
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  /* 总宽度少了 300，压缩比例是 2 */
  /* left = leftWidth - overWidth * (leftWidth * leftShrink / ( leftWidth * leftShrink + rightWidth * rightShrink)) */
  .left {
    flex: 1 2 500px;
    background: red;
  }
  /* 总宽度少了 300，压缩比例是 1 */
  .right {
    flex: 2 1 400px;
    background: blue;
  }
</style>
```
