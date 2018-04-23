# promise的一个简单实现

1. Promise构造函数接收一个回调函数
2. promise.then的返回值
  + 另一个promise对象
  + 一个同步值
  + throw一个异常
```js
Class MyPromise{
  constructor(executer){
    this.$state = 'pending'
    this.$chained = []
    try{
      executer(this.resolve, this.reject)
    }catch(err){
      this.reject(err);
    }
  }
  // 继续实现返回promise。。。
  resolve(res){
    if(this.$state !== 'pending') return
    this.$state = 'fulfilled'
    this.$internalValue = res
    // 如果是另一个promise, 则当前一直处于pending状态, 直到调用了另一个promise的resolve或reject方法
    if(res !== null && typeof res.then === 'function'){
      return res.then(this.resolve, this.reject)
    }
    // 不是promise对象, 则立即fulfilled
    for(let {onFulfilled} of this.chained){
      onFulfilled(res)
    }
    return res
  }
  reject(err){
    if(this.$state !== 'pending') return
    this.$state = 'rejected'
    this.$internalValue = err
    if(err !== null && typeof err.then === 'function'){
      return err.then(this.resolve, this.reject)
    }
    for(let {onRejected} of this.chained){
      onRejected(err)
    }
  }
  // 返回一个promise实例
  then(onFulfilled, onRejected){
    return new MyPromise((resolve, reject)=>{
      const _onFulfilled = res =>{
        try{
          resolve(onFulfilled(res))
        }catch(err){
          reject(err)
        }
      }
      const _onReejcted = err =>{
        try{
          resolve(onRejected(err))
        }catch(err){
          reject(err)
        }
      }
      if(this.$state==='fulfilled'){
        _onFulfilled(this.$internalValue)
      }else if(this.$state==='rejected'){
        _onRejected(this.$internalValue)
      }else{
        this.$chained.push({onFulfilled: _onFulfilled, onRejected: _onRejected})
      }
    })
  }
}

```
