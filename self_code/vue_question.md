+ setState 是同步执行还是异步执行？
  + 在React的setState函数实现中，会根据一个变量 isBatchingUpdate 来判断是直接同步更新this.state还是放到队列中异步更新 。
  + React使用了事务的机制，React的每个生命周期和合成事件都处在一个大的事务当中。在事务的前置钩子中调用batchedUpdates方法修改isBatchingUpdates变量为true，在后置钩子中将变量置为false。
  + 原生绑定事件和setTimeout异步的函数没有进入到React的事务当中，或者当他们执行时，刚刚的事务已近结束了，后置钩子触发了，所以此时的setState会直接进入非批量更新模式，表现在我们看来成为了同步SetState。
  + performWork 和 performSyncWork
+ 聊聊 Redux 和 Vuex 的设计思想？
  + 共同点：全局state保存状态---->dispatch(action) ------>reducer(vuex里的mutation)----> 生成newState; 整个状态为同步操作；
  + 不同点：处理异步的不同，vuex里面多了一步commit操作，在action之后commit(mutation)之前处理异步，而redux里面则是通过中间件处理
+ computed 的原理：实质是一个惰性的watcher，在取值操作时根据自身标记 dirty属性返回上一次计算结果/重新计算值在创建时就进行一次取值操作，收集依赖变动的对象/属性(将自身压入dep中)在依赖的对象/属性变动时，仅将自身标记dirty致为true
+ Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。
+ 在 Vue 中，子组件为何不可以修改父组件传递的 Prop
  + 一个父组件下不只有你一个子组件。 同样，使用这份 prop 数据的也不只有你一个子组件。 如果每个子组件都能修改 prop 的话，将会导致修改数据的源头不止一处。
  + 所以我们需要将修改数据的源头统一为父组件，子组件像要改 prop 只能委托父组件帮它。从而保证数据修改源唯一
+ 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？Redux中为什么不能有副作用的操作?
  + Redux 的三大原则：
  + 单一数据源，也就是state
  + state 是只读，Redux并没有暴露出直接修改state的接口，必须通过action来触发修改
  + 使用纯函数来修改state，reducer必须是纯函数---纯函数既是统一输入就会统一输出，没有任何副作用；如果是异步则会引入额外的副作用，导致更改后的state不可预测；
+ 双向绑定流程：
  + Data通过observer转换成了getter/setter的形式来追踪变化。
  + 当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。
  + 当数据发生了变化时，会触发setter，从而向Dep中的依赖（即Watcher）发送通知。
  + Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等
+ var的话会直接在栈内存里`预分配内存空间`，let 与 const不会
+ for 循环没有任何额外的函数调用栈和上下文；
  + forEach函数签名实际上是 array.forEach(function(currentValue, index, arr), thisValue)，它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能
+ 非匿名自执行函数，函数名只读

```javascript
var b = 10;
(function b(){
    b = 20;
    console.log(b);
})();

var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()

var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)

var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x)
console.log(b.x)

// webSite引用地址的值copy给a了
function changeObjProperty(o) {
  // 改变对应地址内的对象属性值
  o.siteUrl = "http://www.baidu.com"
  // 变量a指向新的地址 以后的变动和旧地址无关
  o = new Object()
  o.siteUrl = "http://www.google.com"
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);


function Foo() {
  Foo.a = function() {
    console.log(1)
  }
  this.a = function() {
    console.log(2)
  }
}
Foo.prototype.a = function() {
  console.log(3)
}
Foo.a = function() {
  console.log(4)
}
Foo.a();
let obj = new Foo();
// 因为有直接方法 a ，不需要去访问原型链，所以使用的是构建方法里所定义的 this.a，
obj.a();
Foo.a();

// String('11') == new String('11').toString()
String('11') == new String('11');
String('11') === new String('11');


1 + "1"

2 * "2"

[1, 2] + [2, 1]

"a" + + "b"

// 1
function wait() {
  return new Promise(resolve =>
    setTimeout(resolve, 10 * 1000)
  )
}

async function main() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd();
}
main();
// 2
function wait() {
  return new Promise(resolve =>
    setTimeout(resolve, 10 * 1000)
  )
}

async function main() {
  console.time();
  await wait();
  await wait();
  await wait();
  console.timeEnd();
}
main();
```

