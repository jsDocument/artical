# process

提供了当前Node.js进程的控制与信息

## 提供的事件

+ beforeExit: 没有工作计划时, nodejs进程就会退出, 注册该事件进行异步回调
+ exit: Node.js的事件循环没有额外的工作了 或 process.exit()调用时触发
+ message:  由IPC通道生成, 子进程childProcess.send()发送一个消息时触发
+ disconnect: 由IPC通道生成, IPC通道关闭时触发
+ warning 与 process.emitWarning()
+ rejectionHandled:  每当一个Promise被拒绝(reject)和在一个Node.js事件循环之后被附加到一个错误处理程序上的时候
+ unhandledRejection:  每当Promise被拒绝并且该Promise在这次事件循环中没有错误处理程序时触发
+ uncaughtException:  一个未捕获的JavaScript异常被传递回事件循环的时候触发
+ 信号事件

## 提供的常用方法

+ cwd() 当前工作目录
+ nextTick(fn) 在下一个事件循环子周期内附加I/O事件触发之前执行
+ hrtime()
+ memoryUsage() 内存使用情况
+ exit(0)
+ abort()立即退出
+ kill(pid[, signal])
+ chdir() 改变进程现在的工作目录
+ cpuUsage() 当前进程的用户和系统的CPU使用时间
+ disconnect() 关闭父进程的IPC通道
+ send() 父进程发消息
+ hrtime()
+ uptime() 当前进程已运行的秒数



## 属性
+ arch 一个字符串，表示哪种操作系统CPU架构把Node.js文件编译成二进制
+ argv 包含命令行参数的数组
+ config
+ connected IPC通道被连接
+ env 当前用户的环境
+ execPath 进程的可执行文件的绝对路径
+ execArgv
+ exitCode 进程退出码
+ title 进程的标题
+ release
+ platform 进程运行的操作系统
+ stderr 连接到(fd2)的流
+ stdin  连接到(fd0)的流
+ stdout
    + write()
    + end()
    + isTTY判断repl模块和readline

> 关于gid, uid 级与用户的相关信息与操作，warning相关的属性不在这里列出
