+ 函数式编程：
  + 数据不可变： 它要求你所有的数据都是不可变的，这意味着如果你想修改一个对象，那你应该创建一个新的对象用来修改，而不是修改已有的对象。
  + 无状态： 主要是强调对于一个函数，不管你何时运行，它都应该像第一次运行一样，给定相同的输入，给出相同的输出，完全不依赖外部状态的变化。
  + 声明式编程 (Declarative Programming)
  + 惰性执行（Lazy Evaluation）
  + 没有副作用（No Side Effects）：在完成函数主要功能之外完成的其他副要功能
  + 纯函数的意义是什么：不依赖外部状态、没有副作用(不修改全局变量，不修改入参)
    + 便于测试和优化：纯函数对于相同的输入永远会返回相同的结果，因此我们可以轻松断言函数的执行结果
    + 可缓存性：因为相同的输入总是可以返回相同的输出，因此，我们可以提前缓存函数的执行结果
  + 柯里化：柯里化的意思是将一个多元函数，转换成一个依次调用的单元函数 f(a,b,c) → f(a)(b)(c)
  + 部分函数：f(a,b,c) → f(a)(b,c) / f(a,b)(c)
  + 函数组合：compose = (f, g) => x => f(g(x))





+ 二进制转 Base64---String.fromCharCode(...new Uint8Array(response.data))
  + 浏览器端：toBase64----btoa, decode----atob
  + node端：Buffer.from('123').toString('base64'), Buffer.from('MTIz', 'base64').toString()
+ 实现一个批量请求函数 multiRequest(urls, maxNum)
  + 要求如下：
  + 要求最大并发数 maxNum
  + 每当有一个请求返回，就留下一个空位，可以增加新的请求
  + 所有请求完成后，结果按照 urls 里面的顺序依次打出

+ 实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据，如：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}----str.split(/[\[\]]/g).filter(Boolean)

```javascript
let normalize = str => {
  let result = {}
  let c

  // 字符串转化为数组
  let arr = str.split(/[\[\]]/g).filter(Boolean)

  // 生成结构化数据
  arr.forEach((item, index) => {
    if(index != 0) {
      c.children = {}
      c.children.value = item
      c= c.children
    } else {
      result.value = item
      c= result
    }
  })

  return result
}
let str = '[abc[bcd[def]]]'
normalize(str)

const normalize = (str) => {
  var result = {}
  str.split(/[\[\]]/g).filter(Boolean).reduce((obj, item, index, a) => {
    obj.value = item
    if(index !== a.length -1) {
      return (obj.children = {})
    }
  }, result)
  return result
}

```




+ 实现一个 indexOf, 考虑起始参数为负或超出：if(start<0) start+=arr.length;  if(start>=arr.length) return -1;
+ splice 的实现
+ 数组
  + 多个数组的交集：解构，reduce + filter

```javascript
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [3, 6, 7];
const handle = (...arr) => {
  return arr.reduce((rst, ele, i) => {
    return rst.filter(item => ele.includes(item));
  });
}

handle(arr1, arr2, arr3);


// 二
var a = [1, 2, 3, 5]
var b = [2, 4, 5, 1]
var c = [1, 3, 5]
var intersect
function fn(...arg){
  intersect =  arg.reduce((total,next)=>{return total.filter(item=>next.includes(item))})
}
// 或
function fn2 (...arg){
  intersect = arg.reduce((total,next)=>{return [...total].filter(item=>new Set(next).has(item))})
}
fn(a,b,c)
console.log(intersect)
```


