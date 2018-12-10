# 编译其他节点

## 根节点编译, 返回一个linker复合链接函数

```js
export function compileRoot (el, options, contextOptions) {
  var containerAttrs = options._containerAttrs
  var replacerAttrs = options._replacerAttrs
  var contextLinkFn, replacerLinkFn

  // 编译non-fragment的属性
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    // 组件属性编译
    if (options._asComponent) {
      // 2. container attributes 外层属性
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions)
      }
      if (replacerAttrs) {
        // 3. replacer attributes 替换元素属性
        replacerLinkFn = compileDirectives(replacerAttrs, options)
      }
    } else {
      // non-component, just compile as a normal element. 其他元素编译
      replacerLinkFn = compileDirectives(el.attributes, options)
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs
      .filter(function (attr) {
        // allow vue-loader/vueify scoped css attributes
        return attr.name.indexOf('_v-') < 0 &&
          // allow event listeners
          !onRE.test(attr.name) &&
          // allow slots
          attr.name !== 'slot'
      })
      .map(function (attr) {
        return '"' + attr.name + '"'
      })
    if (names.length) {
      var plural = names.length > 1
      warn(
        'Attribute' + (plural ? 's ' : ' ') + names.join(', ') +
        (plural ? ' are' : ' is') + ' ignored on component ' +
        '<' + options.el.tagName.toLowerCase() + '> because ' +
        'the component is a fragment instance: ' +
        'http://vuejs.org/guide/components.html#Fragment_Instance'
      )
    }
  }

  options._containerAttrs = options._replacerAttrs = null
  return function rootLinkFn (vm, el, scope) {
    // link context scope dirs
    var context = vm._context
    var contextDirs
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope)
      }, context)
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el)
    }, vm)

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
  }
}
```

```js
/**
  * Compile the directives on an element and return a linker.
  *
  * @param {Array|NamedNodeMap} attrs
  * @param {Object} options
  * @return {Function}
  */

function compileDirectives (attrs, options) {
  var i = attrs.length
  var dirs = []
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched
  while (i--) {
    attr = attrs[i]
    name = rawName = attr.name
    value = rawValue = attr.value
    // 解析 {{}}里面的内容 或 解析成[{value: value}]
    tokens = parseText(value)
    // reset arg
    arg = null
    // 解析限定
    modifiers = parseModifiers(name)
    // 去除限定后的属性名
    name = name.replace(modifierRE, '')

    // attribute interpolations 属性内插值
    if (tokens) {
      // 处理过后的表达式
      value = tokensToExp(tokens)
      // arg为属性名
      arg = name
      // 更新指令集
      pushDir('bind', publicDirectives.bind, tokens)
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class'
        })) {
          warn(
            'class="' + rawValue + '": Do not mix mustache interpolation ' +
            'and v-bind for "class" on the same element. Use one or the other.'
          )
        }
      }
    } else

    // special attribute: transition
    if (transitionRE.test(name)) {
    // 不包含v-bind 或 :transition 为常量值
      modifiers.literal = !bindRE.test(name)
      pushDir('transition', internalDirectives.transition)
    } else

    // event handlers 不包含v-on 或 @
    if (onRE.test(name)) {
      // arg为事件名
      arg = name.replace(onRE, '')
      pushDir('on', publicDirectives.on)
    } else

    // attribute bindings
    if (bindRE.test(name)) {
      // style或class动态属性, 或其他动态属性
      dirName = name.replace(bindRE, '')
      if (dirName === 'style' || dirName === 'class') {
        pushDir(dirName, internalDirectives[dirName])
      } else {
        arg = dirName
        pushDir('bind', publicDirectives.bind)
      }
    } else

    // 正常指令 /^v-([^:]+)(?:$|:(.*)$)/
    if ((matched = name.match(dirAttrRE))) {
      dirName = matched[1]
      arg = matched[2]

      // skip v-else (when used with v-show)
      if (dirName === 'else') {
        continue
      }
      // 获取指令的定义
      dirDef = resolveAsset(options, 'directives', dirName)

      if (process.env.NODE_ENV !== 'production') {
        assertAsset(dirDef, 'directive', dirName)
      }

      if (dirDef) {
        pushDir(dirName, dirDef)
      }
    }
  }


  // 更新directive
  function pushDir (dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens)
    // 对内插件进行过滤器解析
    var parsed = !hasOneTimeToken && parseDirective(value)
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    })
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs)
  }
}
// 根据指令集, 创建连接linker函数
function makeNodeLinkFn (directives) {
  return function nodeLinkFn (vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag)
    }
  }
}
```

## 解析后的表达式处理
1. 加双引号后返回
2. 加括号后返回
3. vm.$eval运算后加引号返回
4. 返回_applyFilters对表达式运算的字符串表达式

```js
// 将多个表达式处理后用+连接
export function tokensToExp (tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm)
    }).join('+')
  } else {
    return formatToken(tokens[0], vm, true)
  }
}

// token包含{{}}
// 且为oneTime时, 将表达式用vm.$eval运算再用双引号括号起来
// 否则 inlineFilters对表达式运算
// 否则对表达式用双引号括号起来
function formatToken (token, vm, single) {
  return token.tag
    ? token.oneTime && vm
      ? '"' + vm.$eval(token.value) + '"'
      : inlineFilters(token.value, single)
    : '"' + token.value + '"'
}

/**
  * For an attribute with multiple interpolation tags,
  * e.g. attr="some-{{thing | filter}}", in order to combine
  * the whole thing into a single watchable expression, we
  * have to inline those filters. This function does exactly
  * that. This is a bit hacky but it avoids heavy changes
  * to directive parser and watcher mechanism.
  *
  * @param {String} exp
  * @param {Boolean} single
  * @return {String}
  */

var filterRE = /[^|]\|[^|]/
function inlineFilters (exp, single) {
  // 不包含filter, 单个表达式时不加括号
  if (!filterRE.test(exp)) {
    return single
      ? exp
      : '(' + exp + ')'
  } else {
    // 解析表达式中的过滤器
    var dir = parseDirective(exp)
    // 不包含过滤器则加括号返回
    if (!dir.filters) {
      return '(' + exp + ')'
    } else {
    // 否则 返回字符表达式对_applyFilters的调用
      return 'this._applyFilters(' +
        dir.expression + // value
        ',null,' +       // oldValue (null for read)
        JSON.stringify(dir.filters) + // filter descriptors
        ',false)'        // write?
    }
  }
}
```
