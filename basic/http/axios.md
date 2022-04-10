+ 浏览器创建 XMLHttpRequest
+ node http 请求

+ 支持：
  + Promise API, 拦截请求和响应、转换请求和响应数据、取消请求
  + 自动转换 json 数据、客户端支持防止 CSRF/XSRF攻击
  + 自动根据 data 数据类型设置 headers，如 Content-Type
  + 支持自定义转换请求和响应数据
+ 全局
  + axios.request(config) 最终http请求都是执行这个方法
  + axios(config) 和axios.request()等价
  + axios(url[, config]) axios(config)快捷方式
  + axios.[METHODS](url, config) axios(config)快捷方式
+ 自定义实例
  + axios.create(config) 自定义配置，创建实例instance。调用方式和axios方法一致
+ Axios.CancelToken(cancel=>{ cancel(url) })
+ Axios.AbortController()
+ 拦截器---对请求和响应的自定义处理【其实就相当于预处理函数，插入 chain 数组，送入 promise 按顺序执行】，
  + promise = Promise.resolve(config)
  + 如：[[interceptor.fulfilled, interceptor.rejected], [dispatchRequest, undefined], [interceptor.fulfilled, interceptor.rejected]]
  + promise = promise.then(chain.shift(), chain.shift()) return promise
  + 拦截请求 axiosInstance.interceptors.request.use()
  + 拦截请求 axiosInstance.interceptors.response.use()
+ adaptor 根据环境调用不同的 adaptor 发送请求
+ transformRequest请求转换：isFormData, isArrayBuffer, isBuffer, isStream, isFile, isBlob
  + isArrayBufferView---data.buffer
  + isURLSearchParams---'application/x-www-form-urlencoded;charset=utf-8', data.toString()
  + isObject---'application/json;charset=utf-8', JSON.stringify
+ transformResponse响应数据转换：parse
+ xsrfCookieName: 'XSRF-TOKEN',
+ xsrfHeaderName: 'X-XSRF-TOKEN',


请求并发控制，错误重试(config.__retryCount, config.retry)，取消请求、超时取消请求

+ 使用拦截器实现：
  + request---fulfilled
    + addPendingRequest(config)--config. cancelRequest --> 定义 config.cancelToken = 则根据 config 生成 requestKey，在 pendingRequest 中存在，取消; 否则直接取消(重复请求)
    + cacheReqInterceptor(config, axios)--缓存可用就取消请求
  + request---rejected Promise.reject
  + response---fulfilled
    + removePendingRequest(response)---根据 config 生成 requestKey，判断 pendingRequest 中有该请求，获取 cancelToken并执行取消，再删除 requestKey(重复请求)
    + cacheResInterceptor(response)--请求到数据，更新 localStorage
  + response---rejected
    + removePendingRequest
    + againRequest----延时处理把请求加入微任务
    + Axios.isCancel(error) 缓存处理方式


+ 取消重复请求： 完全相同的接口在上一个pending状态时，自动取消下一个请求
+ 请求失败自动重试： 接口请求后台异常时候，自动重新发起多次请求，直到达到所设次数
+ 请求接口数据缓存：接口在设定时间内不会向后台获取数据，而是直接拿本地缓存---localStorage
+ 超时取消：cancelToken

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
