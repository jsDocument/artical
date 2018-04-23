# generator基础
1. 作用: 是Es6提供的一种异步解决方案, 返回一个遍历器对象; 即函数除了「状态机」, 还是一个「遍历器对象生成函数」
2. 语法:
```js
// 定义
function* gen(){
  let start = new Date();
  yield 'hello'
  yield 'world'
  return 'ending'
}
// 调用
g = gen(); // 该数并不执行, 只是返回了一个遍历器对象
g.next(); // 遇到第一个yield语句停止, 返回一个对象 {value: yield后的表达式值, done: false}
g.next(); // 执行第二个yield语句处, 返回一个对象 {value: yield后的表达式值, done: false}
g.next() // 返回一个对象 {value: return后的表达式值, done: true}
```
3. 特点
  + 每次遇到yield, 函数暂停执行, 下次再从该位置继续往后执行, 后面的表达式做为返回值

4. 可用于惰性求值, 暂缓函数执行的情况
5. 循环中的使用
```js
const arr = [1,2,[4,5,[6,7]]]
const gen = function* (arr){
  let index = arr.length-1;
  while(index--){
    let item = arr[i]
    if(typeof item !== 'number'){
      yield* gen(item)
    }else{
      yield item
    }
  }
}
// 没有next()?
for(let f of gen(arr)){
  console.log(f)
}
```
