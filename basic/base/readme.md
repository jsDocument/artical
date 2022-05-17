### 基础知识

1. JavaScript 语法的全局机制：预处理和指令序言
   + 预处理：会提前处理 var、函数声明、class、const 和 let 这些语句，以确定其中变量的意义
   + var 声明永远作用于脚本、模块和函数体这个级别，在预处理阶段，不关心赋值的部分，只管在当前作用域声明这个变量


```javascript
// 预处理 var
var a = 1;

function foo() {
    console.log(a);
    var a = 2;
}

foo();

// 场景二

var a = 1;

function foo() {
    console.log(a);
    if(false) {
        var a = 2;
    }
}

foo();
// 场景三  当执行到var a = 2时，作用域变成了 with 语句内，这时候的 a 被认为访问到了对象 o 的属性 a，所以最终执行的结果，我们得到了 2 和 undefined

var a = 1;

function foo() {
    var o= {a:3}
    with(o) {
        var a = 2;
    }
    console.log(o.a);
    console.log(a);
}

foo();
// 场景四

// 不用 IIFE 在循环内构造了作用域，函数体内的变量 i 没办法保存
for(var i = 0; i < 20; i ++) {
    void function(i){
        var div = document.createElement("div");
        div.innerHTML = i;
        div.onclick = function(){
            console.log(i);
        }
        document.body.appendChild(div);
    }(i);
}

```

2. 在全局（脚本、模块和函数体），function 声明表现跟 var 相似，不同之处在于，function 声明不但在作用域中加入变量，还会给它赋值。
   + function 声明出现在 if 等语句中的情况有点复杂，它仍然作用于脚本、模块和函数体级别，在预处理阶段，仍然会产生变量，它不再被提前赋值，function 在预处理阶段仍然发生了作用，在作用域中产生了变量，没有产生赋值，赋值行为发生在了执行阶段

```javascript
// 这里声明了函数 foo，在声明之前，我们用 console.log 打印函数 foo，我们可以发现，已经是函数 foo 的值了
console.log(foo);
function foo(){}


// 这段代码得到 undefined。如果没有函数声明，则会抛出错误
console.log(foo);
if(true) {
    function foo(){

    }
}
```

3. class 声明也是会被预处理的，它会在作用域中创建变量，并且要求访问它时抛出错误
   + class 的声明作用不会穿透 if 等语句结构，所以只有写在全局环境才会有声明作用

```javascript
var c = 1;
function foo(){
    console.log(c);
    class c {}
}
foo();
```

+ 指令序言："use strict"是 JavaScript 标准中规定的唯一一种指令序言，但是设计指令序言的目的是，留给 JavaScript 的引擎和实现者一些统一的表达方式，在静态扫描时指定 JavaScript 代码的一些特性。

```javascript
// [Symbol.iterator]: ()=>{} 自己定义？Generator 实现？异步实现？
function sleep(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,duration);
    })
}
async function* foo(){
    i = 0;
    while(true) {
        await sleep(1000);
        yield i++;
    }

}
for await(let e of foo())
    console.log(e);
```
