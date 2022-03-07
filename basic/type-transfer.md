# javascript的隐式转换

1. 原始基础类型：Undefined、 Null、 String、 Number、 Boolean、 Symbol、Object、bigInt
2. JS内置对象：Date, Array, Math, Number, Boolean, String, Array, RegExp, Function, Error。
3. 隐式中涉及的三种转换：

+ 对象转换为原始值 ，ToPrimitive(input, PreferredType)
  + PreferredType被标记为Number
   1. 如果输入值是原始值 ，则直接返回
   2. 否则如果输入的值是一个对象，则调用对象的valueOf()方法；如果valueof()返回的是一个原始值，则返回这个原始值。
   3. 否则调用对象toString()方法，如果返回的是一个原始值，则返回原始值；否则抛出TypeError异常
  + PreferredType被标记为String
   1. 如果输入值是原始值 ，则直接返回
   2. 否则调用对象的toString()方法；如果toString()返回的是一个原始值，则返回这个原始值。
   3. 否则输入的值是一个对象，则调用该对象的valueOf()，如果返回的是一个原始值，则返回原始值；否则抛出TypeError异常
  + 无参数PreferredType时
   1. 该对象为Date类型，则PreferredType被设置为String
   2. 否则PreferredType被设置为Number


+ 值转换为数字，ToNumber()

| 参数        | 结果           |
| ------------- |:-------------:|
| undefined      | NaN |
| null     | +0      |
| 布尔值 | true转换1，false转换为+0    |
| 数字      | 无须转换 |
| 字符串      | 有字符串解析为数字，例如：‘324’转换为324，‘qwer’转换为NaN |
| 对象(obj)      | 先进行 ToPrimitive(obj, Number)转换得到原始值，在进行ToNumber转换为数字 |

+ 值转换为字符串，ToString()

| 参数        | 结果           |
| ------------- |:-------------:|
| undefined      | 'undefined' |
| null     | 'null'      |
| 布尔值 | 转换为'true' 或 'false'   |
| 数字      | 数字转换字符串，比如：1.765转为'1.765' |
| 字符串      | 无须转换 |
| 对象(obj)      | 先进行 ToPrimitive(obj, String)转换得到原始值，在进行ToString转换为字符串 |

+ valueOf()与toString()是Object.prototype上的属性，故所有对象都拥有。
+ Number, Boolean, String这三种构造函数生成基础值的对象形式

```javascript
  let num = new Number('123');
  num.valueOf(); // 123
  var str = new String('12df');
  str.valueOf(); // '12df'

  var bool = new Boolean('fd');
  bool.valueOf(); // true
```

+ Date特殊对象

```javascript
var a = new Date();
a.valueOf(); // 1515143895500
```

+ 除此之外返回的都是this，即对象本身

```javascript
var a = new Array();
a.valueOf() === a; // true

var b = new Object({});
b.valueOf() === b; // true
```

+ toString()方法
  + Number、Boolean、String、Array、Date、RegExp、Function这几种构造函数生成的对象，通过toString转换后会变成相应的字符串的形式，因为这些构造函数上封装了自己的toString方法。如：


```javascript
Number.prototype.hasOwnProperty('toString'); // true
Boolean.prototype.hasOwnProperty('toString'); // true
String.prototype.hasOwnProperty('toString'); // true
Array.prototype.hasOwnProperty('toString'); // true
Date.prototype.hasOwnProperty('toString'); // true
RegExp.prototype.hasOwnProperty('toString'); // true
Function.prototype.hasOwnProperty('toString'); // true

var num = new Number('123sd');
num.toString(); // 'NaN'

var str = new String('12df');
str.toString(); // '12df'

var bool = new Boolean('fd');
bool.toString(); // 'true'

var arr = new Array(1,2);
arr.toString(); // '1,2'

var d = new Date();
d.toString(); // "Wed Oct 11 2017 08:00:00 GMT+0800 (中国标准时间)"

var func = function () {}
func.toString(); // "function () {}"
```

+ 除这些对象及其实例化对象之外，其他对象返回的都是该对象的类型，(有问题欢迎告知)，都是继承的Object.prototype.toString方法。

```javascript
var obj = new Object({});
obj.toString(); // "[object Object]"

Math.toString(); // "[object Math]"
```

::: warning
故：从valueOf()与toString()函数对对象的转换可知，对于ToPrimitive(input, preferredType)，preferredType没有设定时，除Date被设置为String类型外，其他会被设置为Number；

因为valueOf将Number、String、Boolean基础类型的对象类型转换为基础类型，Data转换为毫秒数，其他返回为对象本身；而toString会将所有对象转换为字符串，显然valueOf转换更合理些

因此先将`PreferredType`设置为Number类型，进行valueOf转换；而Date类型的对象，没有设定PreferredType时，默认设置为String

:::


+ 算术运算中的隐私转换
+ ({} + {}) = ?
  两个对象的值进行+运算符，肯定要先进行隐式转换为原始类型才能进行计算。
  1、进行ToPrimitive转换，由于没有指定`PreferredType`类型，{}会使默认值为Number，进行ToPrimitive(input, Number)运算。
  2、所以会执行`valueOf方法`，({}).valueOf(),返回的还是{}对象，不是原始值。
  3、继续执行`toString方法`，({}).toString(),返回"[object Object]"，是原始值。
  故得到最终的结果，"[object Object]" + "[object Object]" = "[object Object][object Object]"

+ 2 * {} = ?
  1、首先*运算符只能对number类型进行运算，故第一步就是对{}进行`ToNumber`类型转换。
  2、由于{}是对象类型，故先进行原始类型转换，ToPrimitive(input, Number)运算。
  3、所以会执行`valueOf`方法，({}).valueOf(),返回的还是{}对象，不是原始值。
  4、继续执行toString方法，({}).toString(),返回"[object Object]"，是原始值。
  5、转换为原始值后再进行ToNumber运算，"[object Object]"就转换为NaN。
  故最终的结果为 `2 * NaN = NaN`


+ 比较运算隐式转换---不同类型的简单类型比较时，先想 Number 转，再向 String 类型
+ 比较运算 x==y, 其中 x 和 y 是值，返回 true 或者 false。这样的比较按如下方式进行：
  + 若 Type(x) 与 Type(y) 类型相同， 则
    1. 若 Type(x) 与 Type(y)为 Undefined， 返回 true。
    2. 若 Type(x) 与 Type(y)为 Null， 返回 true。
    3. 若 Type(x) 与 Type(y)为 Number， 则
        1. 若 x 为 NaN， 返回 false。
        2. 若 y 为 NaN， 返回 false。
        3. 若 x 与 y 为相等数值， 返回 true。
        4. 若 x 为 +0 且 y 为 −0， 返回 true。
        5. 若 x 为 −0 且 y 为 +0， 返回 true。
        6. 返回 false。
    4. 若 Type(x) 与 Type(y) 为 String, 则当 x 和 y 为完全相同的字符序列（长度相等且相同字符在相同位置）时返回 true。 否则， 返回 false。
    5. 若 Type(x) 与 Type(y) 为 Boolean, 当 x 和 y 为同为 true 或者同为 false 时返回 true。 否则， 返回 false。
    6. 当 x 和 y 为引用同一对象时返回 true。否则，返回 false。
  + 若 x 为 null 且 y 为 undefined， 返回 true。
  + 若 x 为 undefined 且 y 为 null， 返回 true。
  + 若 Type(x) 为 `Number` 且 Type(y) 为 `String`，返回比较 x == ToNumber(y) 的结果。
  + 若 Type(x) 为 `String` 且 Type(y) 为 `Number`，返回比较 ToNumber(x) == y 的结果。
  + 若 Type(x) 为 `Boolean`， 返回比较 ToNumber(x) == y 的结果。
  + 若 Type(y) 为 `Boolean`， 返回比较 x == ToNumber(y) 的结果。
  + 若 Type(x) 为 `String 或 Number`，且 Type(y) 为 `Object`，返回比较 x == ToPrimitive(y) 的结果。
  + 若 Type(x) 为 `Object` 且 Type(y) 为 `String 或 Number`， 返回比较 ToPrimitive(x) == y 的结果。
  + 返回 false。

::: tip

+ x、y类型相同时：
  1. Number类型时，NaN与NaN不相待
  2. 对象时，需要是引用同一个对象
+ 和类型不相同时：
  1. x,y 为null、undefined两者中一个则相等
  2. x、y为Number和String类型时，则转换为Number类型比较。
  3. 有Boolean类型时，Boolean转化为Number类型比较。
  4. 一个Object类型，一个String或Number类型，将Object类型进行原始转换后，按上面流程进行原始值比较。
:::

+ 重写 valueOf 与 toString 方法的例子

```javascript
var a = {
  valueOf: function () {
     return 1;
  },
  toString: function () {
     return '123'
  }
}
true == a // true;
```

+ 首先，x与y类型不同，x为boolean类型，则进行ToNumber转换为1,为number类型。
+ 接着，x为number，y为object类型，对y进行原始转换，ToPrimitive(a, ?),没有指定转换类型，默认number类型。
+ 而后，ToPrimitive(a, Number)首先调用valueOf方法，返回1，得到原始类型1。
+ 最后 1 == 1， 返回true。

+ [] == !{}
  + ! 运算符优先级高于==，故先进行！运算。
  + !{}运算结果为false，结果变成 [] == false比较。
  + 等式右边y = ToNumber(false) = 0。结果变成 [] == 0。
  + 比较变成ToPrimitive([]) == 0。
    + 按照上面规则进行原始值转换，[]会先调用valueOf函数，返回this。
    + 不是原始值，继续调用toString方法，x = [].toString() = ''。
  + 故结果为 '' == 0比较。
  + 等式左边x = ToNumber('') = 0。
  + 所以结果变为： 0 == 0，返回true，比较结束。

+ 题目：a == 1 && a == 2 && a == 3 成立
  + 对象类型转换步骤：
    + Object 与 Number，把 Object.valueOf() 和 Object.toString()转换为基本数字类型
    + 数组类型转换，通过 toString()-->Array.join()等于 shift 操作 取出第一个元素

```javascript
// 解一
var a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}
// 解二
var a = [1, 2, 3];
// 解三
var val = 0;
Object.defineProperty(window, 'a', { // 这里要window，这样的话下面才能直接使用a变量去 ==
    get: function () {
        return ++val;
    }
});
console.log(a == 1 && a == 2 && a == 3);
```

```javascript
// 试分析该段代码
const a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('hello world!');
}
```
