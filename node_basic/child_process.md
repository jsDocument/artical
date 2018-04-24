# 子进程

## 创建子进程
1. child_process.exec(command[,options][, callback])
2. child_process.execFile(file[, args][, options][, callback])
1. child_process.spawn(command[, args][, callback])
3. child_process.fork(modulePath[, args][,options][, callback])


### child_process允许异步执行外部应用程序, 并得到结果。

+ execFile 把输出结果「存入缓存」, 执行时不需要通过命令解析器
1. cp.execFile('commandName',[param],(err, stdout, stderr)=>{})
2. __查找命令路径要找的到, 要有执行权限, 是否能在该平台执行__
3. 例:

+ spawn 通过「流输出」, 执行时不需要通过命令解析器
1. one = cp.spawn('commandName', [param])
2. one.on('error', cb) one.stdout.pipe(process.stdout)
3. one.stderr.pipe(process.stderr)
4. 可以进行串联调用, 上一个命令的输出, 作为这个的输入 cat.stdout.pipe(sort.stdin)  sort.stdout.pipe(uniq.stdin)
5. __分离一个与父进程一样级别的子进程, 即成为一个进程组的头; 父进程终结, 子进程也会继续执行走到它自己终结__
6. cp.spawn('commandName', [], __{detached: true}__)
7. 父进程终结, 子进程继续执行; 如果不强制结束下在运行的node程序, 父进程会一直保持活跃状态, 走到子进程结束; 因为子进程的I/O和父进程是相连接的; 此时添加配置项「stdio」
8. stdio定义了一个子进程的I/O具体连接到一个具体的地方, 可以是字符串或数组。数组的每个索引位置都对应一个特定的子进程的文件描述器所指向的I/O。{stdio: ['pipe','pipe','pipe']}, 连接了父进程和子进程。
9. 其他值: 'ignore', outFd, errFd[是某个打开的文件], 父进程与子进程之间的I/O中断了
10. 父进程会有一个对子进程的内部引用, 子进程没有终结, 引用没有被移除, 父进程就不会终结; child.unref()告诉Node不要将子进程的引用进行计数。

+ exec 方便、跨平台, 在命令解析器中执行命令
1. cp.exec('cat file | sort | uniq', (err, stdout, stderr)=>{})
2. `是因为用了命令解析器才不安全？代码注入？`

+ 独立可执行的Node程序脚本, myapp param param1, 将其包装成一个跨平台的可执行文件
1. windows上, 需要制作一个批处理文件来调用Node程序 hello.bat
2. @echo off 不要将正在执行的命令在显示屏上显示出来
3. node "hello.js" %* 需要接收的参数
4. 调用 hello tom
5. 用子进程的方式运行.bat可执行文件 cp.execFile('hello.bat', ['billy'])
6. unix 平台, hello.js头部添加  #!/usr/bin/env node, 再为文件添加执行权限  chmod +x hello.js;

+ web worker 使任务脱离了主线程, 通过一种内置父进程与子进程间流通信来处理问题---fork大批量的任务压力分解到一个独立的进程中, 事件轮询仍然能保持顺畅
1. 操作一个独立的node进程, I/O共享
2. 在父进程和子进程和子进程中间创建一个IPC通信通道，独立的模块中运行一个Node模块
3. 共享文件描述器？
4. Node为其他的Node程序间通信提供一种更好的方式 stdio: [0, 1, 2, 'ipc'], 所有的输入输出都是继承自父进程的; 不会有child.stdin...
5. 和spawn一样默认的I/O配置, 需要添加{slient: true}的配置
6. fork方法会开放一个IPC通道，让Node进程间进程消息传送; 子进程会有process.on('message')与process.send()来接收与发送消息; 父进程这边child.on('message')和child.send()
7. 断开 child.disconnect();
8. cp.fork('./child') 再添加接收与发送消息;
9. fork并管理一个工作池，池中拥有随时待命的可工作的进程。
10. 一个子节点仍是一个V8新实例，预计耗费30毫秒的启动时间和10MB的内存。故我们需要维护一个工作池，池中放了一些可以长时间运行的进程。
11. 根据CPU数量来fork尽可能多的工作进程
12. 确保一个新的工作任务可以拿到一个可用的进程, 而不是一个正在使用的进程。
13. 当没有工作进程空闲时，维护一个工作队列，当有工作进程时，再排队处理。
14. 按需fork进程。

+ execFileSync 同步执行一个命令
+ spawnSync 同步
