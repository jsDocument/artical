# async/await的简单实现

+ async是Generator的一个语法糖, 自带执行器, 返回值是Promise对象
+ await 后面可以是Promise对象或原始类型的值(等于同步操作)
+ async可以看作是多个异步操作, 包装成一个Promise对象
+ async的返回值会成为then方法回调函数的参数, async函数内部抛出错误, 会导致Promise对象变为reject状态, 抛出的错误对象会被chatch方法回调函数接收走
+ 使用形式

```js
// 函数声明
async function foo() {}

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async () => {};
```

+ async函数返回的Promise对象, 必须等到内部所有await命令后面的Promsie对象执行完成, 才会发生状态改变, 除非遇到return语句或抛出错误

```js

```

+ async函数的实现原理: 将Generator函数与自执行器包装在一个函数里

```js
function makeAsync(args){
  // 传入generator函数
  return spawn(function* (){

  })
}
// 执行器 spawn
function spawn(genF){
  // 返回promise对象
  return new Promise(function(resolve, reject){
    // 生成遍历器对象
    const gen = genF()
    // 调用下一步
    function step(nextF){
      let next
      try{
        next = nextF()
      }catch(e ){
        return reject(e)
      }
      // 完成, 返回数据
      if(next.done){
        return resolve(next.value)
      }
      //
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v); });
      }, function(e) {
        step(function() { return gen.throw(e); });
      })
    }
    step(function(){ return gen.next(undefined) })
  })
}

```





## co模块的实现---流程管理


## Thunk函数

1. 将多参函数, 换成只接受一个回调函数作为参数的「单参数函数」

```js
  var Thunk = function(fileName){
    return function (callabak){
      return fs.readFile(fileName, callback);
    }
  }
```
thunkify的实现

```js
function thunkify(fn) {
  return function() {
    var args = new Array(arguments.length);
    var ctx = this;

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function (done) {
      var called;

      args.push(function () {
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};
```

## generator基础学习
1. 作用: 是Es6提供的一种异步解决方案, 返回一个遍历器对象; 即函数除了「状态机」, 还是一个「遍历器对象生成函数」
2. 语法:
```js
// 定义
function* gen(){
  let start = new Date();
  yield 'hello'
  yield 'world'
  return 'ending'
}
// 调用
g = gen(); // 该数并不执行, 只是返回了一个遍历器对象
g.next(); // 遇到第一个yield语句停止, 返回一个对象 {value: yield后的表达式值, done: false}
g.next(); // 执行第二个yield语句处, 返回一个对象 {value: yield后的表达式值, done: false}
g.next() // 返回一个对象 {value: return后的表达式值, done: true}
```
3. 特点
  + 每次遇到yield, 函数暂停执行, 下次再从该位置继续往后执行, 后面的表达式做为返回值; vcb即暂停标志

4. 可用于惰性求值, 暂缓函数执行的情况
5. yield在另一个表达式之中时, 必须加括号: 'hello' + (yield 2)
5. 循环中的使用
```js
const arr = [1,2,[4,5,[6,7]]]
const gen = function* (arr){
  let index = arr.length-1;
  while(index--){
    let item = arr[i]
    if(typeof item !== 'number'){
      yield* gen(item)
    }else{
      yield item
    }
  }
}
for(let f of gen(arr)){
  console.log(f)
}
```
6. next(param), next的参数会被当作上一个yield表达式的返回值; 所以可以在Generator函数运行的不同阶段, 从外部注入不同的值, 从而调整函数行为。
```js
function* test(){
  // 默认yield表达式没有返回值
  let step1 = yield 1;
  let step2 = yield 2;
}
let test1 = test();
test1.next() // 因为表示上一个yield的返回值, 所以第一个next传入参数是无效的
text1.next(4) // 作为yield表达式的返回值
text1.next(3)
```
可以从这个简单的例子看出其中的区别
```js
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }

```

## 与Iterator

+ 任意一个对象的Symbol.iterator方法, 等于该对象的「遍历器生成函数」,调用该函数会返回该对象的一个遍历器对象
+ Generator函数就是「遍历器生成函数」, 可以把Genterator函数赋值给「对象的Symbol.iterator属性」
```js
var myIterator = {}
myIterator[Symbol.iterator] = function*(){
  yield 1;
  yield 2;
  yield 3;
}
[...myIterator]
```
+ for...of 循环可以自动遍历Generator函数生成的Iterator对象, 不再需要调用next方法, 一旦next返回对象done为true, for...of循环会中止, 且不包含该返回对象。
```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;  //6 不包含在for...of循环之中
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```
斐波那契数列
```js
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}
```
+ 让对象支持for...of循环的办法：通过Generator函数加上对应的接口
```js
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}

// 或
// for (let [key, value] of objectEntries(jane)) {
//   console.log(`${key}: ${value}`);
// }
```

+ 其他扩展的实现
```js
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2
```

+ Generator.prototype.throw()
  1. 一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果此后还调用next方法，将返回一个value属性等于undefined、done属性等于true的对象，即 JavaScript 引擎认为这个 Generator 已经运行结束了。

```js
// 函数体外报错, 函数体内捕获, 如果函数体内没有try...catch, 错误也可以被外部的try...catch捕获
// 函数体内的错误, 也可以在函数体外捕获
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log(e);
  }
};

var i = g();
i.next();
i.throw(new Error('出错了！'));  // 会附带执行一次next方法
```

+ Generator.prototype.return()
  1. 返回给定的值, 并终结Generator函数, 即{value: 指定的值, done: true}, 无指定值时为undefined
  2. Generator与try...finally代码块结合时, return 方法会推迟到finally代码块执行完再执行

### 疑问
1. done状态表示已结束, 再调用next(param), 返回的value是什么? done状态会因为这个改变吗？
