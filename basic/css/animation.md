transition-property 要变换的属性；
transition-duration 变换的时长；
transition-timing-function 时间曲线；
transition-delay 延迟。

```javascript
// 在 keyframes 中定义了 transition 属性，以达到各段曲线都不同的效果
@keyframes mykf {
  from { top: 0; transition:top ease}
  50% { top: 30px;transition:top ease-in }
  75% { top: 10px;transition:top ease-out }
  to { top: 0; transition:top linear}
}
```

+ 三次贝塞尔曲线：贝塞尔曲线是一种插值曲线，它描述了两个点之间差值来形成连续的曲线形状的规则。
+ 一个量（可以是任何矢量或者标量）从一个值到变化到另一个值，如果我们希望它按照一定时间平滑地过渡，就必须要对它进行插值。最基本的情况，我们认为这个变化是按照时间均匀进行的，这个时候，我们称其为线性插值。而实际上，线性插值不大能满足我们的需要，因此数学上出现了很多其它的插值算法，其中贝塞尔插值法是非常典型的一种。它根据一些变换中的控制点来决定值与时间的关系。
+ 它最大的特点就是“平滑”。时间曲线平滑，意味着较少突兀的变化，这是一般动画设计所追求的
+ K 次贝塞尔插值算法需要 k+1 个控制点，最简单的一次贝塞尔插值就是线性插值，将时间表示为 0 到 1 的区间
+ 一次贝塞尔插值公式是：
+ “二次贝塞尔插值”有 3 个控制点，相当于对 P0 和 P1，P1 和 P2 分别做贝塞尔插值，再对结果做一次贝塞尔插值计算“三次贝塞尔插值”则是“两次‘二次贝塞尔插值’的结果，再做一次贝塞尔插值”：贝塞尔曲线的定义中带有一个参数 t，但是这个 t 并非真正的时间，实际上贝塞尔曲线的一个点 (x, y)，这里的 x 轴才代表时间。

```javascript

function generateCubicBezier (v, g, t){
    var a = v / g;
    var b = t + v / g;

    return [[(a / 3 + (a + b) / 3 - a) / (b - a), (a * a / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)],
        [(b / 3 + (a + b) / 3 - a) / (b - a), (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)]];
}

function createBall() {
  var ball = document.createElement("div");
  var t = Number(document.getElementById("t").value);
  var vx = Number(document.getElementById("vx").value);
  var vy = Number(document.getElementById("vy").value);
  var g = Number(document.getElementById("g").value);
  ball.className = "ball";
  document.body.appendChild(ball)
  ball.style.transition = `left linear ${t}s, top cubic-bezier(${generateCubicBezier(vy, g, t)}) ${t}s`;
  setTimeout(function(){
    ball.style.left = `${vx * t}px`;
    ball.style.top = `${vy * t + 0.5 * g * t * t}px`;
  }, 100);
  setTimeout(function(){ document.body.removeChild(ball); }, t * 1000);
}

```
