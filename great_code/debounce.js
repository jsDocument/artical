//
function debounce(cb, wait, immediate) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = cb.apply(context, args);
  };

  var debounced = restArguments(function(args) {
    if (timeout) clearTimeout(timeout);
    // 不存在timeout且立即执行，回调加入队列 并 立即执行回调
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      //
      timeout = _.delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});

function restArguments(func, startIndex){
  // 处理args
  return function(){
    return func.apply(this, args);
  }
}
