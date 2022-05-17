// 至少等待wait毫秒执行回调
// 默认是第一时间执行cb，{leading: false} 禁用首次执行
// {trailing: false}
// 返回throttled对象，可以取消
function throttle(cb, wait, options = {}){
  // now 执行时取当前时间
  // previous执行时存储第一个的now
  let timeout, previous = 0, context, args, result;
  let later = function(){
    previous = options.leading === false ? 0 : new Date();
    timeout = null;
    result = cb.apply(context, args);
    if(!timeout) context = args = null;
  }
  let throttled = function(){
    let now = new Date();
    // 第一次准备触发回调，且首次触发回调禁用
    if(!previous && options.leading === false) previous = now;
    // 还要等待的时间，如果首次触发则previous = 0, remaining的值？
    let remaining = wait - (now -previous);
    context = this;
    args = arguments;
    if(remaining <=0 || remaining > wait){
      // 不使用定时器，直接用时间判断的情况，执行回调
      if(timeout){
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = cb.apply(context, args);
      if(!timeout) context = args = null;
    } else if(!timeout && options.trailing !== false){
      // 最后一次
      timeout = setTimeout(later, remaining);
    }
  }
  throttled.cancel = function(){
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  }
  return throttled;
}

// 注意：throttled时 更新now与previous【previous未更新过, 且首次回调执行禁用时更新该值】，两种cb执行时更新previous，

// throttled = throttle(fn, 1000); 使用 $(window).on('scroll', throttled);
