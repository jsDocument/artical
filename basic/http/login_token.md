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
