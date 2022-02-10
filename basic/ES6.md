1. 扩展运算符...
2. 剩余参数...
3. 解构赋值：对象、数组及默认值
4. 数组：forEach, map, filter, some, every, reduce((sum, item)=>{}, init), Array.flat, Array.flatMap
5. 对象属性名简写
6. Promise.all, Promise.race
7. Set与数组---has, size, delete---重复性需要额外注意：引用数据类型和 NaN
8. Map--- set(key, value)也可以传入键值对数组集合[[key, value]]，key 不受类型限制；delete
9. ES7：includes, Math.pow(3,2)之 3**2
10. ES8：Object.values, Object.entries, async/await, promise.finally
    - await只能在async函数里使用
    - await后面最好接Promise，如果后面接的是普通函数则会直接执行
    - async函数返回的是一个Promise
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

- Object.fromEntries, BigInt
- Promise.allSettled
- ?.可选判定，?? 空位合并运算符---undefined 和 null 为假值，|| 左边的值是假值，就回返回右边的数据
- Promise.any 与 Promise.race 的区别
- 数字分隔符_
- ||= 和 &&=
- a == 1 && a == 2 && a == 3 成立
  - 对象类型转换步骤：
    - Object 与 Number，把 Object.valueOf() 和 Object.toString()转换为基本数字类型
    - 数组类型转换，通过 toString()-->Array.join()等于 shift 操作 取出第一个元素

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

- 函数的 length，第一个具有默认值之前的参数个数，也不包括剩余参数

```javascript
// 预算结果
123['toString'].length + 123
```

- MUL 函数，数的简单乘法
- forEach如何跳出循环？try catch；里面 throw Error()
- 深度优先、广度优先遍历的区别
  - 深度优先不需要记住所以节点？占用空间小
  - 深度优先有回溯操作，相对时间会长
  - 深度优先是堆栈形式，先进后出
  - 广度优先是队列形式，先进先出

