### Set & Map

#### Set

用来生成set数据结构，通过add方法向Set结构加入成员，不会添加重复的值。

1. new Set()
2. new Set([])
3. [... new Set(array)]
4. set.size
5. set.add(value)
6. set.delete(value)
7. set.has(value)
8. clear()

::: warning
向Set加入值时，不会发生类型转换，内部判断两个值是否不同的算法叫`Same-value-zero equality`，类似于===运算，但NaN在===运算当中认为NaN不等于自身。
:::

    例：每封电子邮件都由一个本地名称和一个域名组成，以 @ 符号分隔。
    例如，在 alice@leetcode.com中， alice 是本地名称，而 leetcode.com 是域名。
    除了小写字母，这些电子邮件还可能包含 ',' 或 '+'。
    如果在电子邮件地址的本地名称部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名称中没有点的同一地址。例如，"alice.z@leetcode.com” 和 “alicez@leetcode.com” 会转发到同一电子邮件地址。 （请注意，此规则不适用于域名。）
    如果在本地名称中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件，例如 m.y+name@email.com 将转发到 my@email.com。 （同样，此规则不适用于域名。）
    可以同时使用这两个规则。
    给定电子邮件列表 emails，我们会向列表中的每个地址发送一封电子邮件。实际收到邮件的不同地址有多少？

```javascript
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const reg = /[^@]+/
    const reg1 = /\+[^@]*/;
    let temp;
    emails.forEach((item,i)=>{
        emails[i] = item.replace(reg, function(match, index, all){
            temp = all.substr(index, match.length);
            return match.replace(/\./g, '') + temp;
        }).replace(reg1, '');
    });
    emails = [...new Set(emails)]
    return emails.length;
};
```

Array.from(new Set(array)) 可以将Set结构转为数组

### Set的遍历操作，提供了4个实例方法

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

    遍历器对象相关，可以查阅；
    Set结构默认可遍历，它的默认遍历器生成函数是values方法；意味着可以直接用for...of遍历Set；扩展运算符(...)内部使用for...of
    而且数组的map和filter也间接使用了Set。

### WeakSet

与Set类似，也是不重复值的集合，但WeakSet的成员只能是对象，不能是其他类型的值；WeakSet中的对象都弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。


### Map

::: tip
JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

:::

实例的属性与方法

- size
- set(key, value)
- get(key)
- has(key)
- delete(key)
- clear

    Map遍历方法与Set的一样，其遍历顺序就是插入顺序，但Map的forEach方法接收第二个参数，用来绑定this.
    Map结构转为数组，比较快速的方法为(...)

```javascript

const m = new Map();
const t = {};
m.set(t, 'test');
m.get(t);
m.has(t);
m.delete(t);
m.has(t);

// 也可以是数组
const map = new Map([
  ['test1', 'new sub'],
  ['test2', 'new sup']
]);
```

任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数


```javascript
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
```
只有对同一个对象的引用 ，Map结构才将其视为同一个键。上面看似同一个键，但其实是两个值，内存地址是不一样的，所以无法读取该键。


### WeakMap

只接受对象作为键名(null除外)，用于生成键值对的集合。其特点与WeakSet一样。

注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
