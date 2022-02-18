+ 拦截请求 axiosInstance.interceptors.request.use()
+ 拦截请求 axiosInstance.interceptors.response.use()
axios API
请求配置
响应模式
配置默认值
拦截器
处理错误
消除

axios.create会将实例绑定到Axios.prototype.request，所以axios也是一个与 相同的函数Axios.prototype.request。
axios.create
axios.Cancel
CancelToken
isCancel
axios.all
spread


+ Content-type
  + application/x-www-form-urlencoded，data应该是 URL/URI 编码的
  + application/json，data应该是 JSON 格式
  + text/plain
+ response-type
  + stream
  + blob
  + document
  + arraybuffer 或 buffer
  + json
  + text
+ TransformRequest, TransformResponse
