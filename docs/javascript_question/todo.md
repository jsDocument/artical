## 异步遍历器
+ Iterator是一种数据遍历的协议, 只有该用遍历器对象的next方法, 会得到一个对象, 表示当前遍历指针所在的位置的信息; next方法返回的结构为{value, done}, 故next必须是同步的, 必须立刻有返回值, 如果是异步操作就不太合适, 解决方法是返回一个Thunk函数或Promise对象, 等待以后返回真正的值; 而done还是同步产生的
+ 遍历器的最大特点, 调用遍历器对象的next方法, 返回一个Promise对象。
+ 同步遍历器对象部署在Symbol.iterator属性上, 只要对象的Symbol.asyncIterator属性有值, 表示对它进行异步遍历。

```js
asyncIterator
  .next()
  .then(
    ({ value, done }) => /* ... */
  );
```

+ 异步Generator函数: 处理同步与异步操作时, 可以使用同一套接口
  1. gen返回一个异步Generator函数, 执行后返回一个Iterator对象, 调用next后, 返回一个Promise对象
  2. 异步Generator循环用for await...of
  3. yield* 可以跟一个异步遍历器

```js
async function* gen(){
  yield 'hello';
}
const g = gen();
g.next().then(x=>{ console.log(x) })
```

例子

```js
async function* readLines(path) {
  let file = await fileOpen(path);

  try {
    while (!file.EOF) {
      yield await file.readLine();
    }
  } finally {
    await file.close();
  }
}
```

```js
(async function () {
  for await (const line of readLines(filePath)) {
    console.log(line);
  }
})()
// 与
async function* prefixLines(asyncIterable) {
  for await (const line of asyncIterable) {
    yield '> ' + line;
  }
}

```



```js
// yield*
async function* gen1() {
  yield 'a';
  yield 'b';
  return 2;
}

async function* gen2() {
  // result 最终会等于 2
  const result = yield* gen1();
}

// for await...of循环会展开yield*
(async function () {
  for await (const x of gen2()) {
    console.log(x);
  }
})();
```
