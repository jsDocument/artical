### 捕获
try{

}catch(err){
  return ''
}finally{
  此块会执行，且执行完成后，才会显示return内容
}

[^ catch语句结束执行之前，会先执行finally代码块；从catch转入finally的情况为遇到return语句与throw语句]
### 自定义错误，中断程序执行，抛出一人意外或错误
throw "exception"

### Error
new Error('message')
> 一旦执行，引擎会抛出一个错误对象, name属性, stack属性：查看错误发生时的堆栈
错误类型：
- SyntaxError 解析代码时语法错误
- ReferenceError 引用不存在的变量 或 将值分配给无法分配的对象
- RangeError  超出范围，数组长度为负、Number对象的方法参数超出范围、函数堆栈超出最大值
- TypeError
- URIError
- EvalError