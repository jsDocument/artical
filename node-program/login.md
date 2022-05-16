1. 客户端使用用户名、密码进行认证
2. 服务端生成有效时间较短的 Access Token（例如 10 分钟），和有效时间较长的 Refresh Token（例如 7 天）
3. 客户端访问需要认证的接口时，携带 Access Token
4. 如果 Access Token 没有过期，服务端鉴权后返回给客户端需要的数据
5. 如果携带 Access Token 访问需要认证的接口时鉴权失败（例如返回 401 错误），则客户端使用 Refresh Token 向刷新接口申请新的 Access Token
6. 如果 Refresh Token 没有过期，服务端向客户端下发新的 Access Token
7. 客户端使用新的 Access Token 访问需要认证的接口
