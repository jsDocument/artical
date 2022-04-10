1. 扩展运算符...
2. 剩余参数...
3. 解构赋值：对象、数组及默认值
4. 数组：forEach, map, filter, some, every, reduce((sum, item)=>{}, init), Array.flat, Array.flatMap
5. 对象属性名简写
6. Promise.all, Promise.race
7. Set与数组---has, size, delete---重复性需要额外注意：引用数据类型和 NaN
8. Map--+ set(key, value)也可以传入键值对数组集合[[key, value]]，key 不受类型限制；delete
9. ES7：includes, Math.pow(3,2)之 3**2
10. ES8：Object.values, Object.entries, async/await, promise.finally
    + await只能在async函数里使用
    + await后面最好接Promise，如果后面接的是普通函数则会直接执行
    + async函数返回的是一个Promise

```javascript
function fn (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

fn(3000).then(res => console.log(res))
fn(1000).then(res => console.log(res))
fn(2000).then(res => console.log(res))

// 改进
function fn (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

async function asyncFn () {
  // 排队
  const data1 = await fn(3000)
  console.log(data1) // 3秒后 3000毫秒后我成功啦！！！
  const data2 = await fn(1000)
  console.log(data2) // 再过1秒 1000毫秒后我成功啦！！！
  const data3 = await fn(2000)
  console.log(data3) // 再过2秒 2000毫秒后我成功啦！！！
}
// 再改进
function fn (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time}毫秒后我成功啦！！！`)
    }, time)
  })
}

async function asyncFn () {
  const arr = [fn(3000), fn(1000), fn(1000), fn(2000), fn(500)]
  for await (let x of arr) {
    console.log(x)
  }
}

asyncFn()
```

+ Object.fromEntries, BigInt
+ Promise.allSettled
+ ?.可选判定，?? 空位合并运算符---undefined 和 null 为假值，|| 左边的值是假值，就回返回右边的数据
+ Promise.any 与 Promise.race 的区别
+ 数字分隔符_
+ ||= 和 &&=
+ 函数的 length，第一个具有默认值之前的参数个数，也不包括剩余参数

```javascript
// 预算结果
123['toString'].length + 123
```

+ MUL 函数，数的简单乘法
+ forEach如何跳出循环？try catch；里面 throw Error()
+ 深度优先、广度优先遍历的区别
  + 深度优先不需要记住所以节点？占用空间小
  + 深度优先有回溯操作，相对时间会长
  + 深度优先是堆栈形式，先进后出
  + 广度优先是队列形式，先进先出
+ 组件库怎么进行本地开发调试？
  + 本地测试 demo
  + lint-stage 连接项目测试
+ 组件库文档开发
  + elementUI 按规则写 md 调用md-loader将md文件转成相应的页面
  + Storybook 方案
+ 怎样才算是一个高标准的组件库?
+ 地址改变，拦截？
  + 利用观察者模式
  + 重写 history 方法，并添加 window.addHistoryListener 事件机制
+ vue-router 的实现原理？
+ Vue 中 template 模板编译的过程
+ 浏览器的渲染机制，浏览器是怎么解析和渲染html的？
（1）构建`DOM树`，将浏览器无法直接理解和使用的HTML，转换为浏览器能够理解的结构--DOM 树。
（2）构建`CSSOM`，把 CSS 转换为浏览器能理解的结构(styleSheets)，并转换样式表中的属性值，使其标准化，计算出 DOM 树中每个节点的具体样式（根据继承规则和层叠规则）。
（3）创建 `Layout 布局树`，确定DOM 元素的几何位置信息，遍历 DOM 树中的`所有可见节点`，加入到布局树（display：none不包含），并`计算布局树节点的坐标位置`。
（4）构建`图层树`，如果页面有复杂的效果，如常见的页面滚动，或者使用 z 轴排序等，为了更加方便地实现这些效果，渲染引擎还需要`为特定的节点生成专用的图层`，并生成一棵对应的图层树（LayerTree）。
（5）`Paint 图层绘制`，把一个图层的绘制拆分成很多小的`绘制指令`，然后再把这些`指令按照顺序组成一个待绘制列表`（联想自己画画）。
（6）tiles：`将图层转换成图块`。
（7）光栅化：通过进程实现图块转换成位图。
（8）display：浏览器进程拿到 DrawQuad 信息生成页面显示。
+ __proto__ 与 prototype 的区别?
  + instance 在一个对象上查其__proto__是否存在与另一个相等的
  + 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了"null"）以外
  + 所有的引用类型（数组、对象、函数），都有一个__proto__ （隐式原型）属性，属性值是一个普通的对象
  + 所有的函数，都有一个 prototype （显式原型）属性，属性值也是一个普通的对象
  + 所有的引用类型（数组、对象、函数），__proto__ 属性值指向它的构造函数的 prototype 属性值
  + 当试图得到一个对象（引用类型）的某个属性时，如果这个对象本身没有这个属性，那么会去它的 __proto__（即它的构造函数的 prototype）中寻找
+ ESModule 模块化是怎么解决循环引用的问题的?
+ sum 函数
  + 返回函数add用于收集参数
  + add.count 用 reduce 对收集的参数加法运算
+ findPath 找到对象上 value 对应的节点 key
  + Object.entries---flatObj，即转换成{path: value}
+ 栈内存
  + 存储原始数据`类型`
  + 按值`访问`
  + 存储的值`大小`固定
  + 由系统`自动分配`内存空间
  + 空间`小`，运行效率`高`
  + 先进后出，后进先出
+ 堆内存
  + 存储`引用`数据类型
  + 按`引用`地址访问
  + 存储的值`大小不定`，可动态调整
  + 由`代码进行指定分配`
  + 空间`大`，运行效率相对较`低`
  + `无序`存储，可根据引用直接获取
+ Proxy 相对于 Object.defineProperty 有哪些优点？
  + Proxy可以拦截属性的访问、赋值、删除等操作
  + 不需要初始化的时候遍历所有属性
  + 有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性。
  + 可以监听动态新增的属性
  + 可以监听删除的属性
  + 可以监听数组的索引和 length 属性
+ Proxy 的优点：
  + 可以* 监听数组变化
  + 可以劫持整个对象
  + 操作时不是对原对象操作,是 new Proxy 返回的一个新对象
  + 可以劫持的操作有 13 种
+ vue2 标记静态根节点,优化 diff 算法
+ vue3 标记和提升所有静态根节点,diff 的时候只比较动态节点内容
  + patch flag, 跳过静态节点, 直接对比动态节点, 缓存事件处理函数
  + Fragments 片段，模板中可以直接放文本内容或同级标签(升级 vetur 插件)
  + 静态节点提升到 render 函数外部，只在初始化时执行一次，再次render无需再次执行
  + vue3移除了一些不常用的api
  + ~~Patch flag，标记动态节点（记录节点内容、节点属性），diff时跳过静态根节点 只需关心动态节点内容~~
  + ~~缓存事件处理函数，减少了不必要的更新操作~~
+ Vue3.0编译方面的优化
  + 所有静态的节点都被提升到 render 方法之外.只会在应用启动的时候被创建一次,之后使用只需要应用提取的静态节点，随着每次的渲染被不停的复用
  + patch flag, 在动态标签末尾加上相应的标记,只能带 patchFlag 的节点才被认为是动态的元素,会被追踪属性的修改,能快速的找到动态节点,而不用逐个逐层遍历，提高了虚拟dom diff的性能。
  + 缓存事件处理函数cacheHandler,避免`每次触发都要重新生成全新的function`去更新之前的函数 tree shaking 通过摇树优化核心库体积,减少不必要的代码量
+ css position 都有哪些属性值【描述】 static, relative，absolute, fixed, sticky 注意：sticky 粘性定位要理解到位
+ for in、Object.keys、Object.getOwnPropertyNames 不同点
  + for in 主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性
  + Object.keys 返回一个数组，元素均为对象自有的可枚举属性
  + Object.getOwnPropertyNames 用于返回对象的自有属性，包括可枚举和不可枚举的
+ vue的组件化是如何实现的？
  + 一个 Vue 组件就是一个拥有预定义选项的一个 `Vue 实例`
  + 一个组件可以组成页面上一个功能完备的区域，组件可以包含脚本、样式、模板
  + 先创建父组件再创建子组件，先挂载子组件再挂载父组件
+ 组件注册方式：全局注册和局部注册？
  + 全局注册，通过 Vue.component ，然后通过 Vue.extend 将组件配置转换为组件的构造函数，记录到 this.options.components.comp 里
（1）创建一个唯一值的cid ，目的是创建一个包裹着子构造函数通过原型继承并且能够缓存它们
（2）保存Vue构造函数，从缓存中加载组件的构造函数
（3）给 Sub 初始化一个 VueComponent 构造函数，内部调用 _init() 初始化
（4）Sub 原型继承自 Vue ，然后cid自增并记录到 Sub.cid ，合并 options
（5）初始化子组件的 props computed , 将 extend mixin use 等静态方法继承到 Sub
（6）把组件构造函数保存到 Ctor.options.components.comp = Ctor
（7）最后把组件的构造函数缓存到 options._Ctor ，返回 Sub
+ 浏览器加载网页的主要步骤包括哪些？【描述】
（1）通过DNS进行域名解析得到域名映射的IP地址
（2）向此IP地址发起TCP的3次握手，取得连接
（3）建立TCP连接后发起http请求
（4）服务器响应http请求，浏览器得到html代码
（5）浏览器解析html代码，并请求html代码中的资源（如 js、css、图片等）
（6）浏览器对页面进行渲染，最终呈现给用户
+ 在 v-for 时写了 key ，将第二个元素和第三个元素交换了顺序，实际的 diff 算法怎样的
+ vue 中 computed 和 watch 的区别
  + computed 一般用于简化模板中变量的调用
  + watch 一般用于监听数据的变化，做一些逻辑处理或者异步处理，可以深度监听、立即执行
  + computed 和 watch 在源码里都是通过 Watcher 类创建出来的初始化时，先创建 computed 再创建 watch 。数据改变时，先执行 computed 再执行 watch
+ vue 中 beforeCreate 和 created 的区别
+ Vue3.0响应式实现原理
  + reactive：设置对象为响应式对象。接收一个参数，判断这参数是否是对象。不是对象则直接返回这个参数，不做响应式处理。创建拦截器handerler，设置get/set/deleteproperty。
  + get：
    + 收集依赖（track）；
    + 如果当前 key 的值是对象，则为当前 key 的对
    + 象创建拦截器 handler, 设置 get/set/deleteProperty；
    + 如果当前的 key 的值不是对象，则返回当前 key 的值。
  + set
    + 设置的新值和老值不相等时，更新为新值，并触发更新（trigger）。
    + deleteProperty 当前对象有这个 key 的时候，删除这个 key 并触发更新（trigger）。
  + effect：接收一个函数作为参数。作用是：访问响应式对象属性时去收集依赖
  + track：接收两个参数：target 和 key
    + 如果没有 activeEffect，则说明没有创建 effect 依赖
    + 如果有 activeEffect，则去判断 WeakMap 集合中是否有 target 属性
    + WeakMap 集合中没有 target 属性，则 set(target, (depsMap = new Map()))
    + WeakMap 集合中有 target 属性，则判断 target 属性的 map 值的 depsMap 中是否有 key 属性
    + depsMap 中没有 key 属性，则 set(key, (dep = new Set())) －depsMap 中有 key 属性，则添加这个 activeEffect
  + trigger：判断 WeakMap 中是否有 target 属性，WeakMap 中有 target 属性，则判断 target 属性的 map 值中是否有 key 属性，有的话循环触发收集的 effect()。

Tree-shaking 原理?
flex-grow 和 flex-shrink 代表什么含义?
  flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex 布局相关都有哪些属性？含义是什么？flex 属性对应哪几个属性?
由构造函数创建的实例对象，和构造函数本身，他们的原型链有什么区别？
事件循环，浏览器环境 和 Node 环境有什么不同吗？
项目中的权限管理？
长列表怎么优化？
2、虚拟列表，问细节，页面会不会闪和抖动，具体怎么实现虚拟列表
