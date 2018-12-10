# mergeOption的初始化与合并规则

## 初始化options中的一些对象, 并把mixins和extend合并起来, 添加到实例的this.$options

```js
/**
  * 处理类的options与当前options的合并
  * @param  {[type]} parent 类的options
  * @param  {[type]} child  当前options
  * @param  {[type]} vm     当前实例
  * @return {[type]}        返回合并过后的options
  */
export function mergeOptions (parent, child, vm) {
  guardComponents(child)
  guardProps(child)
  var options = {}
  var key

  // 对子实例的mixins进行合并, 递归调用mergeOptions, 并把mixins的内容递归处理到parent中
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm)
    }
  }
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  /**
    * 为多态函数, 根据key的不同，parent与child的合并方法也不同
    * @param  {[type]} key [description]
    * @return {[type]}     [description]
    */
  function mergeField (key) {
    var strat = strats[key] || defaultStrat
    // 执行相应的策略函数得到最终的options
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}




/**
  * 确保组件已经初始化
  *
  */
function guardComponents (options) {
  if (options.components) {
    var components = options.components =
      guardArrayAssets(options.components)
    var def
    var ids = Object.keys(components)
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i]
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn(
          'Do not use built-in or reserved HTML elements as component ' +
          'id: ' + key
        )
        continue
      }
      def = components[key]
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def)
      }
    }
  }
}
/**
  * 确保options.props能够序列化成基础对象的格式
  */

function guardProps (options) {
  var props = options.props
  var i, val
  if (isArray(props)) {
    options.props = {}
    i = props.length
    while (i--) {
      val = props[i]
      if (typeof val === 'string') {
        options.props[val] = null
      } else if (val.name) {
        options.props[val.name] = val
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props)
    i = keys.length
    while (i--) {
      val = props[keys[i]]
      if (typeof val === 'function') {
        props[keys[i]] = { type: val }
      }
    }
  }
}

/**
  * 确保数组项的options的name或id存在，可以转成key-value的形式
  */
function guardArrayAssets (assets) {
  if (isArray(assets)) {
    var res = {}
    var i = assets.length
    var asset
    while (i--) {
      asset = assets[i]
      var id = typeof asset === 'function'
        ? ((asset.options && asset.options.name) || asset.id)
        : (asset.name || asset.id)
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn(
          'Array-syntax assets must provide a "name" or "id" field.'
        )
      } else {
        res[id] = asset
      }
    }
    return res
  }
  return assets
}
// 创建strats对象并添加到config上
var strats = config.optionMergeStrategies = Object.create(null)


function mergeData (to, from) {
  var key, toVal, fromVal
  for (key in from) {
    toVal = to[key]
    fromVal = from[key]
    if (!hasOwn(to, key)) {
      set(to, key, fromVal)
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal)
    }
  }
  return to
}
/**
  *
  */
strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.'
      )
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

/**
  * 声明对参数el的处理策略
  */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn(
      'The "el" option should be a function ' +
      'that returns a per-instance value in component ' +
      'definitions.'
    )
    return
  }
  var ret = childVal || parentVal
  // 组件声明时如果传入el参数, 必须为function, 是为了避免此组件与所有实例指向同一个元素
  return vm && typeof ret === 'function'
    ? ret.call(vm)
    : ret
}

/**
  * 声明参数中周期钩子的绑定的处理策略, 处理成数组
  */

strats.init =
strats.created =
strats.ready =
strats.attached =
strats.detached =
strats.beforeCompile =
strats.compiled =
strats.beforeDestroy =
strats.destroyed =
strats.activate = function (parentVal, childVal) {
  return childVal
    ? parentVal
    // 父与当前实例的钩子函数都存在时，将当前实例添加到父实例的钩子数组的后面
      ? parentVal.concat(childVal)
      : isArray(childVal)
    // 以数组形式返回当前实例钩子函数
        ? childVal
        : [childVal]
    // 返回父实例的钩子函数
    : parentVal
}

/**
  * 以覆盖的形式合并父实例的与当前实例的组件、指令、元素指令、过滤器、转换、partial的原型属性
  */

function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal)
  return childVal
    ? extend(res, guardArrayAssets(childVal))
    : res
}

/**
  * ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial']
  */
config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets
})

/**
  * Events & Watchers.将父实例的与子实例的相应属性合并到数组
  */

strats.watch =
strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal
  if (!parentVal) return childVal
  var ret = {}
  extend(ret, parentVal)
  for (var key in childVal) {
    var parent = ret[key]
    var child = childVal[key]
    if (parent && !isArray(parent)) {
      parent = [parent]
    }
    ret[key] = parent
    // 将当前实例的添加到父实例的数组的后面
      ? parent.concat(child)
      : [child]
  }
  return ret
}

/**
  * 子覆盖父的策略
  */

strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal
  if (!parentVal) return childVal
  var ret = Object.create(null)
  extend(ret, parentVal)
  extend(ret, childVal)
  return ret
}

/**
  * 默认的处理策略
  */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
}

```
