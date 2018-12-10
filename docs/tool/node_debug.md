# node debug的几种情况
- node http服务调试
    1. node --inspce file 再打开浏览器
    2. 打开chrome://inspect界面进行调试，或者通过地址栏的node开发者工具标志进入，即在Sources面板可以进行debug
- node任务
    1. node --inspect-brk=9229 file 指定在第一行设置断点，即一开始就处理暂停状态，调试端口为 9229
    2. 另一种办法：node file；node -e 'process.\_debugProcess(PID)'；-e指定一个字符串作为代码运行，进行与调试工具建立连接
    3. 或 kill -SIGUSR1 PID 向进程发送信号，可以建立调试连接
- 支持 --inspect-brk参数，则直接使用；否则用老版 node --inspect --debug-brk file，但目前已废弃。