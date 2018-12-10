
1. resolveConstructorOptions 合并构造器及构造器父级上的options
2. mergeOptions(parent, child, vm)
    - checkComponents(child)
    - normalizeProps(child)
    - normalizeDirectives(child)
    - child.extends存在，则child.extends是函数mergeOptions(parent, child.extends.options, vm) 或 mergeOptions(parent, child.extends, vm)
    - child.mixins，其项mixin是Vue实例，则parent = mergeOptions(parent, mixin, vm)
    - 循环parent，进行mergeField(key)
    - 循环child，如果parent中不包含该属性，mergeField(key);
    - mergeField(key)：取出对应处理方法strat = strats[key] 且更新到options[key] = strat(parent[key], child[key], vm, key)

3. optionMergeStrategies手动控制合并策略
    - \_assetTypes就是components、directives、filters，这三个的合并策略都一样，这里我们都返回了parentVal的一个子对象。
    ```javascript
        function mergeAssets (parentVal: ?Object, childVal: ?Object): Object {
          const res = Object.create(parentVal || null)
          return childVal
            ? extend(res, childVal)
            : res
        }

        config._assetTypes.forEach(function (type) {
          strats[type + 's'] = mergeAssets
        })
    ```

    ```javascript
        function mergeData (to: Object, from: ?Object): Object {
          if (!from) return to
          let key, toVal, fromVal
          const keys = Object.keys(from)
          for (let i = 0; i < keys.length; i++) {
            key = keys[i]
            toVal = to[key]
            fromVal = from[key]
            if (!hasOwn(to, key)) {
              set(to, key, fromVal)
            } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
              mergeData(toVal, fromVal)
            }
          }
          return to
        }

        strats.data = function (
          parentVal: any,
          childVal: any,
          vm?: Component
        ): ?Function {
          if (!vm) {
            if (!childVal) {
              return parentVal
            }
            if (typeof childVal !== 'function') {
              process.env.NODE_ENV !== 'production' && warn(
                'The "data" option should be a function ' +
                'that returns a per-instance value in component ' +
                'definitions.',
                vm
              )
              return parentVal
            }
            if (!parentVal) {
              return childVal
            }
            return function mergedDataFn () {
              return mergeData(
                childVal.call(this),
                parentVal.call(this)
              )
            }
          } else if (parentVal || childVal) {
            return function mergedInstanceDataFn () {
              // instance merge
              const instanceData = typeof childVal === 'function'
                ? childVal.call(vm)
                : childVal
              const defaultData = typeof parentVal === 'function'
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
    ```