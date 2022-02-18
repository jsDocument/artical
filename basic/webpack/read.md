
## 模块

1. amd---require.js
2. cmd---sea.js
3. umd----兼容 cjs 与 amd 的模块
4. cjs--commonjs----nodejs----转换：skypack、 snowpack、vite
   1. 值拷贝
   2. 运行时加载
   3. 所谓 exports 仅仅是 module.exports 的引用而已
5. esm---支持动态导入 m = await import("xxx"); m.default(xxx)，通过设置 type='module'来支持，但只支持 URL 路径
   1. importMap，定义引入库路径对象，后面就可以支持只引入模块名无需写完整的 URL 了
   2. 也可以导入 JSON 和 CSS
   3. 预编译期间进行 treeShaking
   4. 编译时加载
   5. 值引用

## webpack

+ 提高构建速度：使用 speed-measure-webpack-plugin (opens new window)可评估每个 loader/plugin 的执行耗时。
  + 更快的 loader: swc(采用 rust 语言编写)-----负责 AST 转换的
  + 持久化缓存----cache:{type: filesystem}，将Module、Chunk、ModuleChunk 等信息序列化到磁盘中
  + JS 文件配置了 eslint、typescript、babel 等 loader，他将有可能执行五次编译，被五次解析为 AST
    + acorn: 用以依赖分析，解析为 acorn 的 AST
    + eslint-parser: 用以 lint，解析为 espree 的 AST
    + typescript: 用以 ts，解析为 typescript 的 AST
    + babel: 用以转化为低版本，解析为 @babel/parser 的 AST
    + terser: 用以压缩混淆，解析为 acorn 的 AST
    + thread-loader: 多进程loder，之前的 happypack
+ runtime
  1. __webpack_modules__维护所有模块数组
     1. 将入口模块解析为 AST，根据 AST 深度优先搜索所以模块，并构建出这个模块数组
     2. 每个模块都由一个包裹函数 (module, module.exports, __webpack_require__) 对模块进行包裹构成
  2. __webpack_require__(moduleId) 手动加载一个模块，对已经加载过的模块进行缓存，未加载过的模块，通过 id 定位到__webpack_modules__中的包裹函数
  3. __webpack_require__(0): 运行第一个模块，即运行入口模块
+ code spliting 如何动态加载 chunk的
  + import() 动态加载模块
  + __webpack_require__.e: 加载 chunk。该函数将使用 document.createElement('script') 异步加载 chunk 并封装为 Promise。
  + self["webpackChunk"].push: JSONP cllaback，收集 modules 至 __webpack_modules__，并将 __webpack_require__.e 的 Promise 进行 resolve。
+ 打包体积优化
  + 分析 webpack-analizyer-plugin?
  + js 压缩 minify----目前前端工程化中使用 terser (opens new window)和 swc (opens new window)进行 JS 代码压缩
    + 去掉多余的空格、换行、注释
    + 变量名、函数名、属性名用更短的名字代替
    + 布尔运算会做变化----做了精简
    + 预编译的运算
  + Tree shaking 基于 ES6 模块的静态分析，移除的用不到的函数，从而减少体积
    + Tree shaking 也可以对 JSON 进行优化
+ polyfill: corejs
  + 包含了所有 ES6+ 的 polyfill，并集成在 babel 等编译工具之中
  + @babel/preset-env，@babel/polyfill 对高级功能支持进行配置
  + 对polyfill的体积控制


+ webpack 各项配置与实现原理

+ 本地代码检查
  + eslint编辑时检查 或 prettier
  + pre-commit时检查通过才可提交-----huskey, lint-stage
  + git hooks 常用的: precommit, prepush，
  + husky原理
    + 在~/.git/hooks目录，是一些可执行文件
    + 可以自定义脚本的位置，git config 'core.hooksPath' .husky
    + 在~/.husky 目录下手动创建 hook 脚本
  + gitHooks配置，yorkie fork 的 husky
  + lint-staged 变动部分检查，对暂存文件列表运行脚本


+ CI 持续集成
  + 借助 git hooks对当前代码在构建服务器中进行自动构建、测试及部署
    + 实现自动化语法检查、测试，如果没有通过无法进行代码合并
    + 检查 `npm 库`、`构建镜像容器`的风险----synk, audit
    + 对当前分支代码构建`独立镜像`并`生成独立的分支环境地址`进行测试
    + 合并到主分支，自动构建镜像并部署到生成环境
+ CD 持续部署----免费 CICD 服务github actions
  + jenkens----发布流程
  + docker----容器，镜像-----Dockerfile
  + walle----可视化发布平台
  + k8s----管理 docker 容器

+ eslint，对代码不仅有风格的校验，更有可读性、安全性、健壮性的校验。
  + rules
  + plugin
  + extends

+ webpack 基础

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
