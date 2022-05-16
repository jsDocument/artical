## 常见 HTTP 的无状态解决方案

+ Cookie, redis, JWT 解决 HTTP 的无状态
  + Session Cookie会话期---不含到期日期，存于内存
  + Persistent Cookie持久性----含到期日期，存于磁盘
  + 用于---会话状态管理、自定义设置、浏览器行为跟踪
+ session：代表着服务器和客户端一次会话的过程
  + Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。
+ JWT是开放的 JSON 格式 token 存储标准，它定义了一种安全、紧凑的方式来保存数据，通过签名的方式来校验 token 的合法性，主要支持的签名算法如 HMAC、RSA、ECDSA
  + 通常使用它来保存登录信息，相比传统的 session 方案，它的优点在于服务端无需维护登录态，不再需要依赖第三方存储（如 redis、memcached），所以说 JWT 是无状态的。
  + 但它也存在缺点。由于它只在客户端维护，因此服务端无法方便的清除登录态，相比传统的 session 方案，只需要将 session 清除即可。你可能会说，可以直接将这个 token 删除就算退出登录了。但实际上这只是一种假注销，若该用户再次拿到相同的 token 还是会被认为是登录的。
  + 2.1.2 数据结构---实际上JWT是由header（头部）、payload（负载）、signature（签名）这三个部分组成的，中间用.来分隔开，写成一行就是这个样子的：Header.Payload.Signature。

常见误区：Session 不是关闭浏览器就消失了。对 Session 来说，除非程序通知服务器删除一个 Session，否则服务器会在Session失效前一直保留。大多数情况下浏览器是不会在关闭网页之前通知服务器的，所以服务器根本不知道浏览器已经关闭。之所以会有这种错觉，是大部分 session 机制都使用会话 cookie 来保存 session id，而关闭浏览器后这个 session id 就消失了，再次连接服务器时也就无法找到原来的 session。如果服务器设置的 cookie 被保存在硬盘上，或者使用某种手段改写浏览器发出的 HTTP 请求头，把原来的 session id 发送给服务器，则再次打开浏览器仍然能够打开原来的 session。


## express-jwt 用来验证token，引用了jsonWebToken，jsonWebToken---生成token给客户端

+ accessToken
+ refreshToken

```javascript
app.use(expressJWT({
  secret: '加密KEY'
}).unless({
  path: [] // 除了该路径，其他都需要验证
}))

// 验证失败时
app.use(function(err, req, res, next){
  if(err.name === 'UnauthorizedError'){
    res.status('401').send('invalid token ...') // 过期 或 无效
  }
})

// 返回给客户端的
app.get('/getToken', (req, res)=>{
  res.json({
    result: 'ok',
    token: jwt.sign({
      name: '',
      data: ''
    }, privateKey ,{expiresIn: 60})
  })
})

// 访问每个接口时的验证，返回token res.send(req.user)

```

+ token身份验证过程
  1. 用户通过用户名、密码发送请求
  2. 程序验证
  3. 返回一个签名token给客户端
  4. 客户端存储token，用于每次发送请求
  5. 服务端验证token，返回数据

+ session验证的问题：
  1. 发送请求时，服务器需要创建一个记录来存储信息，内存开销不断增加
  2. 可扩展性：扩展机器时，不用担心状态丢失
  3. CORS 跨域资源共享
  4. CSRF 跨站请求依靠
