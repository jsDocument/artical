### Symbol 和 Iterator 及 Generator

在学习Generator与async函数之前，我们先来学一下相关的基础知识。

#### Symbol

为防止属性名冲突而引入的一种新的原始数据类型，表示独一无二的值。(undefine, null, Boolean, String, Number, Object)
Symbol值通过Symbol函数生成。
Symbol是原始类型，不是对象，所以不能添加对象，也不能使用new。


- 使用方法

```js
let s = Symbol();
typeof s;
s.toString();

// 参数是字符串，如果传入的是对象，用通过toString方法转成字符串
Symbol({a: 1})
```

- Symbol不能与其他类型的值进行运算，但Symbol可以显式转为字符串 或布尔值。
- 作为属性名时，不能使用`.`运算，因为点运算后面都是字符串，所以不会读取Symbol作为标识名。
- 也可以用于定义一组常量，保证数据的不同。
- Symbol作为属性名，不会出现在`for...in`、`for...of`中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。但是也不是私有属性，还有一个`Object.getOwnPropertySymbols()`可以获得对象的所有Symbol属性名。
- Reflect.ownKeys() 可以获得所有类型的键名
- Symbol.for()接受一个字符串作为参数，然后搜索有没有以该参数为名称的Symbol值，如果有则返回，否则就创建；会被登记在全局环境中供搜索。
- Symbol.keyFor(s) 返回一个已登记的Symbol类型值的key。
- 内部Symbol值
    1. Symbol.hasInstance，如 a instanceof Array 实际调用的是\[Symbol.hasInstance]
    2. `Symbol.isConcatSpreadable`属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
    3. `Symbol.species` 指向一个构造函数，创建衍生对象时，使用该属性

```js
// 创建衍生对象时，使用这个属性返回的函数
class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
    //默认是
    // static get [Symbol.species]() {
        // return this;
    // }
}

```
 1. 对象的Symbol.match 指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
 2. 对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
 3. 对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
 4. 对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
 5. 对象的`Symbol.iterator`属性，指向该对象的默认遍历器方法。
 6. 对象的`Symbol.toPrimitive`属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
 7.  对象的`Symbol.toStringTag`属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，**它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。**也就是说，这个属性**可以用来定制[object Object]或[object Array]中_object后面的那个字符串_**。
 8.  对象的`Symbol.unscopables`属性，指向一个对象。该对象指定了`使用with关键字时，哪些属性会被with环境排除`。

ES6 新增`内置对象的Symbol.toStringTag属性`值如下。

JSON[Symbol.toStringTag]：'JSON'
Math[Symbol.toStringTag]：'Math'
Module 对象M[Symbol.toStringTag]：'Module'
ArrayBuffer.prototype[Symbol.toStringTag]：'ArrayBuffer'
DataView.prototype[Symbol.toStringTag]：'DataView'
Map.prototype[Symbol.toStringTag]：'Map'
Promise.prototype[Symbol.toStringTag]：'Promise'
Set.prototype[Symbol.toStringTag]：'Set'
%TypedArray%.prototype[Symbol.toStringTag]：'Uint8Array'等
WeakMap.prototype[Symbol.toStringTag]：'WeakMap'
WeakSet.prototype[Symbol.toStringTag]：'WeakSet'
%MapIteratorPrototype%[Symbol.toStringTag]：'Map Iterator'
%SetIteratorPrototype%[Symbol.toStringTag]：'Set Iterator'
%StringIteratorPrototype%[Symbol.toStringTag]：'String Iterator'
Symbol.prototype[Symbol.toStringTag]：'Symbol'
Generator.prototype[Symbol.toStringTag]：'Generator'
GeneratorFunction.prototype[Symbol.toStringTag]：'GeneratorFunction'


### Iterator

- javascript原来表示集合的方式有 `Array`, `Object`, `Map`, `Set`；用户可以组合使用他们，这就需要一种统一的接口机制，来处理不同的数据结构。
- 遍历器是一种机制，是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据只要布置Iterator接口，都可以完成遍历操作。
- Iterator的作用
    1. 为各种数据提供统一的访问接口；
    2. 全数据结构成员能够按某种次序排列；
    3. ES6创建了一种新的遍历命令 `for...of`
- 遍历过程
    1. 创建指针对象，指向当前数据结构的起始位置；即遍历器对象本质上是一个指针对象。
    2. 第1次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。---返回当前数据结构的成员信息{value, done}
    3. 第2次调用指针对象的next方法，可以将指针指向数据结构的第二个成员。
    4. 不断调用指针对象的next方法，走到指向数据结构的结束位置。

- 只要布置了Symbol.iterator就可以被for...of属性，即布置了遍历器接口，调用该接口就会返回一个遍历器对象

```javascript
let arr = [1, 2, 3, 4];
let it = arr[Symbol.iterator]();
it.next();
it.next();
it.next();
it.next();
it.next();
```

- 具备Iterator接口的数据如下：
  - Array
  - Map
  - Set
  - String
  - TypedArray
  - 函数的 arguments 对象
  - NodeList 对象

- 为对象布置Iterator接口，即布署一种线性处理；但其实可以直接用Map结构。


```javascript
let obj = {
    [Symbol.iterator] = function(){
        return {
            next(){
                // 判断处理并返回{value, done}
            }
        }
    }
};
```

- 调用Iterator接口的场合：解构赋值、扩展运算符、yield* 、 for...of、Array.from()、Map(), Set(), WeakMap(), WeakSet(), Promise.all()、Promise.race()



### Generator

- 基础理论

1. iterator是专门为迭代而设计的接口, 有`next`方法与返回包含`{value,done}`属性的对象, iterator内部有一个指向迭代位置的指针, 每次调用next方法, 自动移动指针并返回结果对象

```javascript
    let myIterable = {
      [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
      }
    }
    [...myIterable] // [1, 2, 3]

    // 或
    let obj = {
      * [Symbol.iterator]() {
        yield 'hello';
        yield 'world';
      }
    };

```

2. generator返回一个遍历器对象，即包含状态机制的遍历器生成函数。特征：
   - `function`与函数名之间的`*`号；
   - 函数体内用yield表达式

3. 执行过程：
    - 调用Generator函数返回遍历器对象
    - 遍历器对象.next()使指移向下一个状态；即遇到yield表达式或return语句(或函数结束)为止。可以为next(params)方法添加参数；参数会作为上一个yield表达式的返回值；
    - yield后面的表达式，只有当调用next方法时，内部指针指向该语句时才会执行，即`惰性求值`；

4. 使用注意项
    - yield必须出现在Generator函数中，否则会报错
    - yield出现在另一个表达式中，必须放在小括号里面
    - 箭头函数不能做generator 且 generator不能跨函数

5. 可以用Generator为对象添加`Symbol.iterator`属性，便利对象具有Iteraotor接口，即可被`...`运算符遍历。
6. `for...of` 一旦next()方法的返回对象done为true，for...of循环就会中止，且`不包含该返回对象`。
7. 实例方法`throw`，可以在函数体外抛出错误；然后在Generator函数体内捕获；但必须至少执行过一次next方法；如果没有执行过next方法，throw方法抛出在函数外部。throw方法捕获后自动执行一次next方法。

```javascript
var g = function* (){
    try{
        yield;
    }catch(e){
        console.log(e);
    }
    var i = g();
    i.next();
    i.throw(new Error('error'));
    // 与全局的不要混淆 try{throw new Error('出错了');}catch(e){}
}
```

Generator函数体内抛出的错误，也可以被函数体外的`catch`捕获
```javascript
function *test(){
    var x = yield 3;
    var y = x.toLowerCase();
    yield y;
}
let it = test();
it.next();
try{
    it.next(42);
}catch(e){
    console.log(e);
}
```

一旦执行过程中抛出错误，且没有被内部捕获，就不再执行下去了。此后的`next`方法将返回{value:undefined, done: true}

8. 实例方法`return`，可以返回给定的值，并结束遍历；如果没有参数则返回的值为undefined。

```javascript
function *test(){
    var x = yield 3;
    var y = x.toLowerCase();
    yield y;
}
let it = test();
it.next();
it.return('test');
```
如果正在执行try代码块，那么return方法会被推迟到finally代码块执行完再执行。

9. 再Generator内部调用Generator函数，使用`yield*`，返回遍历器内部对象值；如果不使用yield\*，而是使用yield返回的是Iterator遍历器对象；内部Generator函数无return语句时，等同于在generator内部使用了一个`for...of`循环；反之需要获取`var v = yield* iterator` 来`return`语句的值

```javascript
function* foo() {
  yield 2;
  yield 3;
  return "foo";
}

function* bar() {
  yield 1;
  var v = yield* foo();
  console.log("v: " + v);
  yield 4;
}

var it = bar();

it.next()
it.next()
it.next()
it.next()
it.next()
```

10. 作为对象属性的generator函数
```javascript
    let obj = {
        *fun(){
            // ...
        }
    }
```







