#  call 注意点

- 第一个参数为 null 或 undefined 时，this 指向全局对象 window，为原始值的值指向该原始值的自动封装对象
- 为避免函数名和上下文的属性冲突，使用 Symbol 类型作为唯一值

```javascript
// 构建了一个动态对象，在对象上调用函数
Function.prototype.myCall = function(context, ...args){
  let ctx = context || window;
  let func = Symbol();
  cxt[func] = this; //?
  args = args ? args : []
  //以对象调用形式调用func,此时this指向cxt 也就是传入的需要绑定的this指向
  const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
  delete cxt[func];
  return res;
}
```
