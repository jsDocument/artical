1. cross-env
   1. BABEL_ENV
   2. NODE_ENV
   3. BUILD_ENV
2. webpack --config
   1. --mode development 或 production
   2. analyzer
3. dll
4. lint eslint 'src/**/*.js'
5. package.json
   1. browserslint
   2. bin 创建页面或组件的脚手架

1. server
   1. loadEnv---dotenv 更新到 process.env
   2. 启动DevServer(端口、webpack配置、before, view, appMode单页面或多页面, proxy, authToken), App.start()
2. devServer---wds_config
   1. express, webpack, swing, https, borderParser, cors, progress-bar-webpack-plugin
   2. 加载webpack配置
   3. 设置https
   4. 中间件
      1. views模板设置
      2. 跨域
      3. 日志
      4. proxy
      5. bodyParser
      6. cookie-parse
      7. auth
      8. dev-middleware, hot-middleware
      9. lib, dist
      10. manifest
      11. render
3.  webpack
    1. entry
    2. output: publicPath, filename
    3. watchOptions
    4. resolve: modules, alias, extends 模块搜索原则
    5. module: 解析规则**** 与babel的配置
4. 服务端与客户端配置的区别
   1. 服务端渲染需要知道views，然后把整个html返回；客户端需要找到某个节点，把片断写进去(有事件时需要客户端渲染)---传出去统一处理???
   2. 客户端执行顺序----clientRender()，根据html上的数据，获得数据与模板名称，再获取route
   3. 服务端渲染----
      1. 获取模板接口数据后，根据接口取不同的模板，得到其html
      2. 本地：在devServer中根据path，调用该模块，渲染
   4. 现有编译流程---build根据webpack添加了热启动，为css文件添加版本号，本地服务


proxy中间件
1. （正向：间接访问服务器，隐匿了客户端信息；如访问google, 做缓存？对客户端访问授权，记录用户访问记录）
2. （反向：代理的是服务端，集群分布式部署的情况下，反向代理隐藏了服务器信息；如 内网安全，负载均衡）
