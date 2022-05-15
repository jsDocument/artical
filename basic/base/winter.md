
### 22条重学前端知识

1. 为什么有的编程规范要求用 void 0 代替 undefined？

>+ Undefined 类型表示未定义，任何变量在赋值前是 Undefined 类型、值为 undefined，
>+ 一般我们可以用全局变量 undefined（就是名为 undefined 的这个变量）来表达这个值，或者 void 运算来把任意一个表达式变成 undefined 值。
>+ JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 void 0 来获取 undefined 值。
>+ null 是 JavaScript 关键字，所以在任何代码中，你都可以放心用 null 关键字来获取 null 值。

2. 字符串有最大长度吗？0.1 + 0.2 不是等于 0.3 么？为什么 JavaScript 里不是这样的？

>+ 这是浮点运算的特点：浮点数运算的精度问题导致等式左右的结果并不是严格相等，而是相差了个微小的值
>+ 正确的比较方法是使用 JavaScript 提供的最小精度值：console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);

3. ES6 新加入的 Symbol 是个什么东西？

>+ 是一切非字符串的对象 key 的集合，在 ES6 规范中，整个对象系统被用 Symbol 重塑。
>+ Symbol 函数无法使用 new 来调用，但我们仍可以利用装箱机制来得到一个 Symbol 对象，我们可以利用一个函数的 call 方法来强迫产生装箱。var symbolObject = (function(){ return this; }).call(Symbol("a"));

4. 为什么给对象添加的方法能用在基本类型上？

>+ . 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。
>+ 对象是属性的集合，分为数据属性 和 访问器属性

5. Number类型注意点：

>+ JavaScript 中有 +0 和 -0，在加法类运算中它们没有区别，但是除法的场合则需要特别留意区分，“忘记检测除以 -0，而得到负无穷大”的情况经常会导致错误
>+ 而区分 +0 和 -0 的方式，正是检测 1/x 是 Infinity 还是 -Infinity。

6. String To Number

>+ 字符串到数字的类型转换，存在一个语法结构，类型转换支持十进制、二进制、八进制和十六进制
>+ JavaScript 支持的字符串语法还包括正负号科学计数法，可以使用大写或者小写的 e 来表示
>+ parseInt 和 parseFloat 并不使用这个转换，所以支持的语法跟这里不尽相同。
>   1. parseInt 只支持 16 进制前缀“0x”，而且会忽略非数字字符，也不支持科学计数法。
>   2. 建议传入 parseInt 的第二个参数
>   3. parseFloat 则直接把原字符串作为十进制来解析，它不会引入任何的其他进制。

7. Number To String

>+ Number 绝对值较大或者较小时，字符串表示则是使用科学计数法表示的

8. 装箱转换：正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类

>+ 应该尽量避免对基本类型做装箱转换。
>+ Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，它比 instanceof 更加准确。但需要注意的是，call 本身会产生装箱操作，所以需要配合 typeof 来区分基本类型还是对象类型。

9. 拆箱转换：规定了 ToPrimitive 函数，它是对象类型到基本类型的转换

>+ 对象到 String 和 Number 的转换都遵循“先拆箱再转换”的规则。通过拆箱转换，把对象变成基本类型，再从基本类型转换为对应的 String 或者 Number。
>+ 拆箱转换会尝试调用 valueOf 和 toString 来获得拆箱后的基本类型。如果 valueOf 和 toString 都不存在，或者没有返回基本类型，则会产生类型错误 TypeError。
>+ 到 String 的拆箱转换会优先调用 toString
>+ 在 ES6 之后，还允许对象通过显式指定 @@toPrimitive Symbol 来覆盖原有的行为。

10. 对象的特征：

>+ 对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。-----内存地址不同
>+ 对象有状态：对象具有状态，同一对象可能处于不同状态之下。
>+ 对象具有行为：即对象的状态，可能因为它的行为产生变迁。
>+ JavaScript 中对象独有的特色是：对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力。
>+ 为了提高抽象能力，JavaScript 的属性被设计成比别的语言更加复杂的形式，它提供了数据属性和访问器属性（getter/setter）两类。
>+ JavaScript 用一组特征（attribute）来描述属性（property）。
>+ getOwnPropertyDescriptor, defineProperty
>+ 实际上 JavaScript 对象的运行时是一个“属性的集合”，属性以字符串或者 Symbol 为 key，以数据属性特征值或者访问器属性特征值为 value。
>+ JavaScript 对象的具体设计：具有高度动态性的属性集合。

11. 运行时的原型系统：类的实现是基于原型运行时系统的模拟，对象一定要基于类吗？基于原型系统

>+ "基于原型”的编程看起来更为提倡程序员去关注一系列对象实例的行为，而后才去关心如何将这些对象，划分到最近的`使用方式相似的原型对象`，而不是将它们分成类。
>+ 逻辑上 JavaScript 认为每个类是有共同原型的一组对象，类中定义的方法和属性则会被写在原型对象之上。
>+ 基于原型的面向对象系统通过“复制”的方式来创建新对象，还允许复制一个空对象。这实际上就是创建一个全新的对象。
>+ class仅仅是运行时的一个字符串属性。
>+ “基于类”的编程提倡使用一个关注分类和类之间关系开发模型。在这类语言中，总是先有类，再从类去实例化一个对象。类与类之间又可能会形成继承、组合等关系。类又往往与语言的类型系统整合，形成一定编译时的能力。
>+ 添加了 new， this使其更像 java，但其缺乏继承
>+ 复制操作：一个是并不真的去复制一个原型对象，而是使得新对象持有一个原型的引用；
>+ ES6 提供了更加方便操作原型的方法：Object.create 根据指定的原型创建新对象，原型可以是 null；Object.getPrototypeOf 获得一个对象的原型；Object.setPrototypeOf 设置一个对象的原型。

12. new 操作

>+ 以构造器的 prototype 属性为原型，创建新对象；
>+ 将 this 和调用参数传给构造器，执行；
>+ 如果构造器返回的是对象，则返回，否则返回第一步创建的对象。

13. 我们大致可以认为，它们[[construct]]的执行过程如下：

>+ 以 Object.prototype 为原型创建一个新对象；
>+ 以新对象为 this，执行函数的[[call]]；
>+ 如果[[call]]的返回值是对象，那么，返回这个对象，否则返回第一步创建的新对象。

14. 用对象来模拟函数与构造器：函数对象与构造器对象

>+ 函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对象。
>+ 用 function 关键字创建的函数必定同时是函数和构造器。不过，它们表现出来的行为效果却并不相同。
>+ 对于宿主和内置对象来说，它们实现[[call]]（作为函数被调用）和[[construct]]（作为构造器被调用）不总是一致的。
>   1. 比如内置对象 Date 在作为构造器调用时产生新的对象，作为函数时，则产生字符串；
>   2. 而浏览器宿主环境中，提供的 Image 构造器，则根本不允许被作为函数调用。
>   3. 基本类型（String、Number、Boolean），它们的构造器被当作函数调用，则产生类型转换的效果。
>   4. => 语法创建的函数仅仅是函数，它们无法被当作构造器使用

15. 宿主对象：document, window, Image

16. Engine---一个 JavaScript 引擎会常驻于内存中，它等待着我们（宿主）把 JavaScript 代码或者函数传递给它执行。

>+ JavaScript 引入了 Promise，这样，不需要浏览器的安排，JavaScript 引擎本身也可以发起任务了。
>+ 我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务。
>+ JavaScript 引擎等待宿主环境分配宏观任务，在操作系统中，通常等待的行为都是一个事件循环，所以在 Node 术语中，也会把这个部分称为事件循环。
>+ 宏观任务的队列就相当于事件循环。
>+ JavaScript 的 Promise 还会产生异步代码，JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列
>+ Promise 永远在队列尾部添加微观任务。setTimeout 等宿主 API，则会添加宏观任务。
>+ Promise 是 JavaScript 语言提供的一种标准化的异步管理方式，思想是：需要进行 io、等待或者其它异步操作的函数，不返回真实结果，而返回一个“承诺”，函数的调用方可以在合适的时机，选择等待这个承诺兑现

17. 函数的执行过程

>+ 闭包---函数
>+ 作用域：规定了变量的查找 和 对变量的查找权限
>+ 作用域链：一层层向上查找...
>+ JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行，当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。
>+ 执行上下文----环境部分：
>   1. scope：作用域，也常常被叫做作用域链。
>   2. variable object：变量对象，用于存储变量的对象。
>   3. this value：this 值。

18. this----执行上下文

>+ 不同的调用方式，得到的 this 值也不同，由“调用它所使用的引用”决定
>+ 调用函数时使用的引用，决定了函数执行时刻的 this 值。
>+ 获取函数的表达式，它实际上返回的并非函数本身，而是一个 Reference 类型
>+ Reference 类型由两部分组成：一个对象和一个属性值；o.showThis 产生的 Reference 类型

19. 在 JavaScript 标准中，为函数规定了用来保存定义时上下文的私有属性[[Environment]]。当一个函数执行时，会创建一条新的执行环境记录，记录的外层词法环境（outer lexical environment）会被设置成函数的[[Environment]]。这个动作就是切换上下文了

20. JavaScript 用一个栈来管理执行上下文，这个栈中的每一项又包含一个链表，当函数调用时，会入栈一个新的执行上下文，函数调用结束时，执行上下文被出栈。

21. [[thisMode]] 私有属性有三个取值。

>+ lexical：表示从上下文中找 this，这对应了箭头函数。
>+ global：表示当 this 为 undefined 时，取全局对象，对应了普通函数。
>+ strict：当严格模式时使用，this 严格按照调用时传入的值，可能为 null 或者 undefined。

22. finally 与 return----JavaScript 语句执行的完成状态

>+ return 执行了，但是函数并没有立即返回，又执行了 finally 里面的内容
>+ finally 中的 return “覆盖”了 try 中的 return
>+ 因为 `finally 中的内容必须保证执行`，所以 try/catch 执行完毕，即使得到的结果是非 normal 型的完成记录，也必须要执行 finally。`而当 finally 执行也得到了非 normal 记录，则会使 finally 中的记录作为整个 try 结构的结果`。
>+ Completion Record 表示一个语句执行完之后的结果，它有三个字段：
>   1. [[type]] 表示完成的类型，有 break continue return throw 和 normal 几种类型；
>   2. [[value]] 表示语句的返回值，如果语句没有，则是 empty；
>   3. [[target]] 表示语句的目标，通常是一个 JavaScript 标签（标签在后文会有介绍）。
>   4. 普通语句执行后，会得到 [[type]] 为 normal 的 Completion Record，JavaScript 引擎遇到这样的 Completion Record，会继续执行下一条语句。这些语句中，只有表达式语句会产生 [[value]]，
>   5. 输入一个表达式，在控制台可以得到结果，但是在前面加上 var，就变成了 undefined，Chrome 控制台显示的正是语句的 Completion Record 的[[value]]。
>   6. 语句块----return 在其中起到控制作用
>   7. 控制语句---对内部起效果：if, switch, while, for, trye; 对外部起效果：break, continue, return, throw
>   8. 带标签的语句
>      1. 大部分时候，这个东西类似于注释，没有任何用处。唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环



```javascript
var a = 1;
foo();
// 在别处定义了foo：
var b = 2;
function foo(){ console.log(b); // 2 console.log(a); // error}

// 23
function foo(){
  try{ return 0; } catch(err) { } finally { console.log("a") }
}
console.log(foo());
function foo(){
  try{ return 0; } catch(err) { } finally { return 1; }
}
console.log(foo());
// 23-8
outer: while(true) {
  inner: while(true) {
    break outer;
  }
}
console.log("finished")
// 执行过程实际上主要在一个树形结构上进行， 树形结构的每一个节点执行后产生 Completion Record，根据语句的结构和 Completion Record，JavaScript 实现了各种分支和跳出逻辑
```
