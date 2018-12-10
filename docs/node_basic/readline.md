# readline

### readline

+ interface类
    + 事件:
        1. close: 调用close方法且已撤回对input流和output流的控制; input流收到end事件;
        2. line: \n, \r时触发
        3. pause input流被暂停 或 收到SIGCONT事件
        4. resume,
        5. SIGCONT 进程回到后台后再使用fg(1p)返回前台时触发,
        6. SIGINT  ctrl + c时触该事件, 如果没有注册该事件, 则pause事件会触发
        7. SIGTSTP ctrl + z 一般会触发该事件, 如果 没有注册该事件进程会被送到后台, 当fg(1p)恢复时, pause和SIGCONT事件会被触发
    + 方法: close(), pause(), resume(), write(), prompt(), question(query, cb), setPrompt()
+ readline.createInterface(options)
+ readline.clearLine(stream, dir)
+ readline.clearScreen(stream)
+ readline.emitKeypressEvents(stream[, interface])
+ readline.cuusorTo(stream, x, y)
+ readline.moveCursor(stream, dx, dy)

```js
var readline = require('readline');
var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '请输入>'
    })
    rl.prompt();
    rl.question('学会使用了吗？', (answer)=>{
        console.log(answer);
        rl.close()
    })

const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('sample.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`文件的单行内容：${line}`);
});
```
