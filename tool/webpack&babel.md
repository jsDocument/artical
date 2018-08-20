### webpack执行过程
1. 执行./node_models/.bin/webpack下的shell脚本, 合并执行脚本参数与配置参数
2. optimist分析参数并以键值对的形式把参数保存在optimist.argv中
3. 将各个配置拷贝到options对象中, 根据optiimist.argv配置加载相应的插件
4. webpack的实际入口是Compiler中的run方法, run一量执行后, 就开始编译和构建流程了, 几个比较重要的事件节点
    + compile 开始编译
    + make 从入口点分析模块及其依赖的模块，创建这些模块对象
    + build-module 构建模块
    + after-compile 完成构建
    + seal 封装构建结果
    + emit 把各个chunk输出到结果文件
    + after-emit 完成输出
5. compiler.run会触发compile, 构建出Compilation对象, 该对象负责组织整个打包过程, 包含每个构建环节及输出环节所对应的方法


### babel
+ polyfill
+ runtime
+ stage
+ preset-env

### 概念
+ entry: 一个可执行模块 或 库的入口文件
+ chunk: 多个文件组成一个代码块
+ loader: 文件转换器
+ plugin: 在webpack构造生命周期的节点上加入扩展hook, 为webpack扩展功能


### webpack优势与缺点
+ 适用于SPA与模块化

### 编译的大致流程
+ 解析webpack参数配置, 合并从shell传入及配置文件的配置, 生成最后的配置结果。
+ 注册所有配置的插件, 让插件监听webpack构建生命周期的事件节点, 以做出对应的反应。
+ 从entry开始解析文件构建AST语法树, 找出每个文件的依赖文件, 递归下去
+ 在递归文件的过程中, 根据文件类型和loader配置找出合适的loader对文件进行转换
+ 递归完成后得到每个文件的最终结果, 根据entry配置生成代码块chunk
+ 输出所有chunk到文件系统

### 优化
+ 缓存: 代码分割


### webpack插件
+ compiler 存放着webpack配置, 代表着从启动到关闭的生命周期
+ compilation 监听文件变化自动编译机制, 代表一次编译; 代表模块资源、编译生成的资源、变化的文件等
+ webpack会广播出许多事件, plugin可以监听这些事件, 在合适的时机通过webpack提供的API, 改变输出结果
+ 通过Tapable来管理编译的这条线

`

    class BasicPlugin{
        constructor(options){}
        apply(compiler){
            // 监听事件, 回调
            compiler.plugin('compilation', function(compilation){
                // compilation也提供了很多事件回调
            })
        }
    }
`

+ 可以广播出新事件, 让新的插件监听
+ 改变compiler或compilation会景致后面的插件
+ 有些事件是异步的, 这些异步事件会附带两个参数
