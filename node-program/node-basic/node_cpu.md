+ Node 定位 CUP 暴涨与内存泄漏
  + V8 自动的内存分配和释放，有一些引用不释放，通过启动参数解决解决---devTool+heapdump 或 mewatch
  + 当垃圾回收触发，未使用内存被释放后，内存增长还在持续，我们才能确定是发生了内存泄漏。
  + node 启动参数 --expose-gc 调用 global.gc()手动触发垃圾回收操作，process.memoryUsage().heapUsed 获取运行时占用的内存
  + 内存快照：比对堆栈信息---comparision, summary
  + 或者：devTool-->profiles-->load 加载之前生产快照；

+ node 内存占用是多少量级？如何知道某个进程消耗多少内存？
