1. webpack 的编译流程
   1. 初始化配置参数----结合 webpack.config.js 和默认参数，merge 出最终参数。
   2. 开始编译，初始化一个 Compiler 对象，加载所以配置的插件，执行对象的 run 方法
   3. 确定入口文件
   4. 编译模块：根据入口、配置的 Loader 对模块进行翻译，在递归对依赖的模块进行翻译
   5. 经过 Loader 的翻译，得到了每个模块的翻译结果与它们之间的依赖关系
   6. 输出资源，根据入口和模块之间的依赖关系，组装Chunk，把 Chunk转换成一个单独的文件加入到输出列表
   7. 输出完成：确定好输出内容，根据输出路径把内容写入到文件系统

1. 实例化 compiler 对象
   - 初始化 NodeEnvironmentPlugin(让compiler具体文件读写能力)
   - 挂载所有 plugins 插件至 compiler 对象身上
   - 挂载所有 webpack 内置的插件（入口）
2. compiler.run
3. compile方法做的事情
4. 完成模块编译操作



5. webpack 的编写结果和执行过程
6. webpack 的编译原理
7. webpack 插件
8. webpack hook 节点
