# 基础

### 类型与对象原型

- 基本类型包括哪些?

string, number, boolean, null, undefined, symbol

- 引用类型的类型有哪些?
  1. 本地对象: Object, Function, Array, String, Boolean, Number, Date, Regexp, 各种错误(Error, EvalError, RangeError, RefrenceError, SyntaxError, TypeError, URIError)
  2. 内置对象: 独立于宿主环境的所有对象, Global(实际上根本不存在, 但不存在独立的函数, 如 isNaN(), 看起来都是函数, 实际上是Global的方法)与Math, window是相对于web浏览器的
  3. 常用内部对象: Object、Function、Array、String、Boolean、Number、Date、RegExp、Error、Math、Global，Set 、Map、Promise、Proxy
  3. 宿主对象: 宿主环境提供的对象, 所有BOM和DOM都是宿主对象
  4. 自定义对象

- 隐式类型转换, 最终被转换成数值类型进行比较, 但转换经历了哪些步骤?

- 对象与函数
  1. 除了可以直接用直接量来定义的对象, 其他都是通过「构造函数来创建对象的」, 故函数的地位非常重要
  2. 内部对象的构造函数已经封装好了, 直接new 创建即可, 创建做了以下4件事
    > 1. 创建空对象
      2. 用空对象调用构造函数, this指向正在创建的空对象, 按照构造函数的定义, 为空对象添加属性和方法
      3. 将新创建对象的__proto__属性指向构造函数的prototype对象。
      4. 将新创建对象的地址，保存到等号左边的变量中


- 为什么除了**null**与**undefined**, 其他类型的变量都可以当对象使用?

  1. 数字的字面值(literal)不能当作对象使用, 是因为javascript解析器的一个错误, toString()时出错了
  2. 有变通的方法可以让数字字面值看起来像对象, 如:
  > 2..toString() //两个点可以正常解析
    2 .toString() // .前面有空格
    (2).toString() // 2先被计算

- 对象字面量与构建函数创建的对象的区别?
  1. 对象字面量从Object.prototype继承



- symbol类型的特性有哪些? 有哪些内置定义?

- 类型检测有哪些bug需要注意, 通用的类型检测方法有哪些?
  1. typeof null时返回object, 是历史遗留bug

- undefined与null所表达的意义? 区别有哪些?
  1. null常用于一个引用的终结
  2. undefined类型有一个值undefined, 同时也定义了一个全局变量undefined, 值为undefined， 但变量值可以被覆盖

- 会返回undefined值的情况:
  1. 访问未修改的全局变量 undefined。
  2. 由于没有定义 return 表达式的函数隐式返回。
  3. return 表达式没有显式的返回任何内容。
  4. 访问不存在的属性。
  5. 函数参数没有被显式的传递值。
  6. 任何被设置为 undefined 值的变量。


- 原型继承与传统继承的差异
  1. 原型链继承, 会遍历原型链进行查找 , 一直查到顶点Object.prototype
  2. 所有实例都会共享原型属性,

- 判断一个属性为哪一种属性?
  1. for-in 循环所有属性, 包括原型属性
  2. obj.hasOwnProperty('key') 自定义属性
  3. 防止hasOwnProperty方法被重写的判断 ({}).hasProperty.call(obj, 'key')

- 原型
  1. 函数在创建的时候, 同时在内存中创建一个「空对象」, 函数的prototype指向这个空对象, 叫做函数的原型对象
  2. 每个原型对象都有一个constructor属性, 指向该函数
  3. a = {a:1}; b.prototype = a; 些时a的构造函数继承自父对象, Object.prototype, 它的构造函数为Object
  4. obj.__proto__指向父元素, 即所继承的父对象, 构造函数的prototype对象; 所有对象都有__proto__, 函数有prototype
  5. Object.prototype.\__proto__ = null, 且不允许更改, 初代对象, 继承自null; 函数, 继承于初代的对象;
  6. Function.prototype指向初代对象, constructor指向Function; Object.prototype指向初代对象, constructor指向Object

- 原型链
  1. function F(){} // 可以看作是同步进行了F.prototype = {}
  2. let a = new F() // 可以看作是a.\__proto__ = F.prototype

- 解析器在遇到缺少分号导致的解析错误时, 会自动在源代码中插入分号

- setTimeout, 因为其他代码的执行, 可能会阻塞些线程, 因此没办法保证函数在指定的时刻被调用
- setInterval, 堆调用; 当回调函数的执行被阻塞时, setInterval仍会发布更多的回调指令, 在很小的时间间隔下, 会导致回调函数被堆积起来, 可以用: 在回调函数内部使用setTimeout函数的方法
- setTimeout的参数使用字符串, 是使用了eval, 故该回调函数是在全局作用中执行的

### 函数

- 函数声明 与 函数赋值表达式, 区别在于前者会在执行前被解析, 故存在于当前上下文的任意地方，所以在可以在定义的前面调用。而赋值则是运行时执行, 因此不能在前面调用
- 命名函数的赋值表达式

```js
var foo = function bar() {
    bar(); // 正常运行
}
bar(); // 出错：ReferenceError
```

> bar 函数声明外是不可见的，这是因为我们已经把函数赋值给了 foo； 然而在 bar 内部依然可见。这是由于 JavaScript 的 命名处理 所致， 函数名在函数内总是可见的。

- this的工作原理
  1. 全局范围, 函数调用----指向全局对象
  2. 对象的属性方法调用, 指向当前对象
  3. new 构造函数调用, 指向新创建的对象
  4. 显式的设置this

- 闭包: 当前作用域总能够访问外部作用域中的变量, 函数拥有自己作用域的结构, 所以闭包依赖于函数。
  1. 在内部保持着对外部变量的引用
  2. 在循环中使用一个闭包, 常出现错误, 如:

```js
for(var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

因为匿名函数保持对外部i的引用, for循环结束时, i被修改成了10， 故会输出10十次

```js
for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);
        }, 1000);
    })(i);
}
```

将i作为参数, 传递给函数, 些时函数内有e, i的一个拷贝, e不会被循环改变

- arguments 不是一个数组, 因为不继承自Array.prototype， 实际是一个对象, 只是有length属性, 可以用for循环, 但不能用数组的相关方法, 使用需要先转化为数组
- Array.prototype.slice.call(arguments) 性能不好?
- arguments有getter与setter方法, 改变arguments对象的值, 会影响形参的值
- 对arguments对象的属性进行多次访问影响性能, 如arguments.callee, arguments.callee.caller
- 内联函数, 提升性能?
- 构造函数: 能过new 方式调用的函数, 默认返回新创建的对象, this指向样的对象, 新对象的prototype指向构造函数的prototype; 有return时会影响返回结果, 但仅限返回的是一个对象


### 作用域与命名空间

- 只支持函数作用域, 没有块级作用域, 也没有显式的命名空间定义
- 每次引用一个变量, javascript会向上遍历整个作用域, 直到找到这个变量为止, 如果到达全局作用还是未找到就变ReferenceError
- 在代码运行之前, var 表达式和funtion声明会被提到当前作用域顶部
- 变量查找顺序
  1. 当前作用域内是否有 var foo 的定义。
  2. 函数形式参数是否有使用 foo 名称的。
  3. 函数自身是否叫做 foo。
  4. 回溯到上一级作用域，然后从 #1 重新开始。
- 解决命名冲突----立即执行的匿名函数

### 数组

- 减小length属性会截断数组, 增大不会对数组产生影响
- 尽量少使用Array构造函数, 因为其参数有点模棱两可, 只有一个数字参数时, 表示数组的length属性,
