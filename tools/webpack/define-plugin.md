### loader 与 webpack 的区别

loader 与 plugin 的区别：loader 是转换器，plugin 是扩展器

#### 开发自己的 webpack 插件

1. 开发 Plugin 的思路：
   + plugin 是通过钩子机制实现的，可以在不同的事件节点上挂载不同的任务，就可以扩展一个插件
   + 插件必须是一个包含了 apply 方法的类
   + apply 方法接收一个 compiler 参数，包含了这次构建的所有配置信息，通过这个对象注册钩子函数通过 compiler.hooks.emit.tap 注册钩子函数（emit也可以为其他事件）
   + 钩子函数第一个参数为插件名称，第二个参数 compilation 为此次打包的上下文，根据 compilation.assets 就可以拿到此次打包的资源，做一些相应的逻辑处理


#### 开发自己的 loader

1. babel 的步骤：分词(根据最小有效语法单元，对字符串进行切割)--->词法分析(涉及到读取、暂存、回溯、暂存点销毁等操作)---->AST(语法分析)---->输出目标代码
