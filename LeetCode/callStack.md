### 递归调用栈及尾递归的优化

> 栈帧是指为一个函数调用单独分配的那部分栈空间。

- 当运行的程序从当前函数调用另外一个函数时，会建立一个新的栈帧，并进入这个栈帧，即当前帧。
- 而原来的函数也有对应的栈帧，即调用帧。
- 每个栈帧里都会有当前函数的局部变量
- 函数被调用时，会被加入到调用栈顶部，执行结束后，会从调用调用栈顶部移除，并将程序运行权利交给栈顶的栈帧。即`先进后出`的调用栈


试着画出该函数的调用栈

```js
function compileNodeList (nodeList, options) {
  var linkFns = []
  var nodeLinkFn, childLinkFn, node
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i]
    nodeLinkFn = compileNode(node, options)
    childLinkFn =
      !(nodeLinkFn && nodeLinkFn.terminal) &&
      node.tagName !== 'SCRIPT' &&
      node.hasChildNodes()
        ? compileNodeList(node.childNodes, options)
        : null
    linkFns.push(nodeLinkFn, childLinkFn)
  }
  return linkFns.length
    ? makeChildLinkFn(linkFns)
    : null
}
```

### 尾调用：即执行到最后一步将另一个函数调用并返回

- 函数A尾调用函数B，执行函数B时，不需要将执行权返回给A，因为之后不会再用到调用位置与函数A内部的变量，即没必要保留函数A的栈帧
- 直接用函数B的栈帧取代A的栈帧，但如果用到了外部函数的变量，则仍要保留函数A的栈帧，即典型的闭包
- 使用尾调用，调用栈的长度就会小很多，这样内存占用也会大大减少

### 尾递归

- 但目前V8引擎不给用，给出的解释是程序员可能意识不到自己可能写了死循环的尾递归，而且也不提示`stack overflow`
- 堆栈信息会在优化的过程中丢失，开发者调试困难


尾递归优化的实现方法

```js
function tailCallOptimize(f) {
  let value
  let active = false
  const accumulated = []
  return function accumulator() {
    accumulated.push(arguments)
    if (!active) {
      active = true
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift())
      }
      active = false
      return value
    }
  }
}

const f = tailCallOptimize(function(n, a = 0, b = 1) {
  if (n === 0) return a
  return f(n - 1, b, a + b)
})
f(5)
```
