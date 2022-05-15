```js
const config = {}
const adapterConfig = {
  adapter: axiosAdapter,

}
// axios.CancelToken().source 生成token 与 cancel 方法
const axiosConfig = [...adapterConfig, ...config];
const request = axios.create(axiosConfig);
const axiosAdapter = function(config){

}
// 取消重复请求
// 统一参数处理
// function generateReqKey(config) {
//   const { method, url, params, data } = config;
//   return [method, url, JSON.stringify(params), JSON.stringify(data)].join("&");
// }
// const pendingRequest = new Map();
// function addPendingRequest(config) {
//   const requestKey = generateReqKey(config);
//   config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
//     if (!pendingRequest.has(requestKey)) {
//        pendingRequest.set(requestKey, cancel);
//     }
//   });
// }
// function removePendingRequest(config) {
//   const requestKey = generateReqKey(config);
//   if (pendingRequest.has(requestKey)) {
//     const cancelToken = pendingRequest.get(requestKey);
//     cancelToken(requestKey);
//     pendingRequest.delete(requestKey);
//   }
// }
// function clearPending() {
//   for (const [requestKey, cancelToken] of pendingRequest) {
//     cancelToken(requestKey)
//   }
//   pendingRequest.clear()
// }
axios.interceptors.request.use((config)=>{

},(error)=>{

})
axios.interceptors.response.use((response)=>{

},(error)=>{

})
export request;
```
