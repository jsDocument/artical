## application模块

+ init 默认配置
1. 挂载--请求、响应、引擎、设置
2. views
3. jsonp设置
4. router

+ use
1. lazyrouter 创建路由实例、
2. 循环fns, router.use(path, fn)
3. router.use(path, (req, res, next)=>{  })
4. fn.emit('mount', this)

+ route
1. lazyrouter
2. 返回this.\_router.route(path)

+ listen 创建服务并监听

+ render
1. 获取 View
2. 根据view引擎、默认引擎、root创建View实例
3. 存入缓存
4. view.render(...)

+ handle(req, res, callback)
1. 定义done 或 finnalhandler
2. 不存在this.\_router, done()
3. router.handle(req, res, done)

+ engine this.engines[extension] = fn 设置引擎

+ param
1. lazyrouter
2. 调用router.param(name, fn)

+ set
1. etab
2. query parser fn
3. trust proxy fn
4. 设置其属性'@@symbol:trust_proxy_default'的特性

`setPrototypeOf`

## router

+ 构造函数
1. 定义router函数-->调用router.handle
2. 初始化实例属性

+ param ????

+ handle
1. done
2. next

+ use(fn)
1. callbacks 参数
2. Layer实例, layer.route = void 0; this.stack.push(layer), 返回this

+ route(path)
1. 创建Route实例 route
2. Layer实例 layer.route = route; this.stack.push(layer); 返回route

## Route

+ 构造函数, 初始化相应实例属性

+ dispatch(req, res, done)
1. idx = 0; this.stack长度为0, 执行done()
2. req.route = this
3. 执行next()
4. next(err) 判断err为route, 则执行done(); err为router则执行done(err); 取出stack[idx++]相应的layer, !layer则done(err); 如果layer.method不等于 req.method则 next(err); 如果err, 则 layer.handle_err(); 否则 layer.handle_request()

+ 定义http请求方法
1. this.path<---> handle
2. 添加layer实例相应的method方法
3. this.methods[method] = true, layer更新到this.stack中

+ all 与上面方法实现类似

## layer

+ 构造函数  初始化实例属性
+ handle_err(error, req, res, next)
1. this.handle参数长度不等于4, next(error)
2. fn(error, req, res, next)

+ handle_request(req, res, next)
1. this.handle参数大于3, next()
2. this.handle(req, res, next)

## View

## middleware

+ init, (req, res, next)=>{ 返回函数, 进行属性合并与初始化, 并调用next()}
+ query, (options)=>{ 处理参数, 返回函数query(req, res, next)=>{ req.query=... next()}}


## methods

+ [ 'get', 'post', 'put', 'head', 'delete', 'options', 'trace', 'copy', 'lock', 'mkcol', 'move', 'purge', 'propfind', 'proppatch', 'unlock', 'report', 'mkactivity', 'checkout', 'merge', 'm-search', 'notify', 'subscribe', 'unsubscribe', 'patch', 'search', 'connect' ]


## express源码阅读收获

1. 路由handle--负责处理路由
    + 根据req.url获取请求路径, ids=0
    + next()方法: this.routes获取路由表{path, handle, method}[ids++]项
    + url路径与routes中某个相同且method也相同, 则执行handle(req, res)
2. 路由系统
