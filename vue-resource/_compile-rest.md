#### 编译根节点

##### compile(el, options, partial) 编译其他节点, 返回一个可重用的复合链接递归函数

```js
export function compile (el, options, partial) {
  // 不作为组件 或 部分编译
  var nodeLinkFn = partial || !options._asComponent
    ? compileNode(el, options)
    : null
  // 对其他节点进行编译
  var childLinkFn =
    !(nodeLinkFn && nodeLinkFn.terminal) &&
    el.tagName !== 'SCRIPT' &&
    el.hasChildNodes()
      ? compileNodeList(el.childNodes, options)
      : null

    // linker复合链接递归函数
  return function compositeLinkFn (vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes)
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer () {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag)
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag)
    }, vm)
    return makeUnlinkFn(vm, dirs)
  }
}

// 根据节点类型判断是进行element或textNode编译
function compileNode (node, options) {
  var type = node.nodeType
  if (type === 1 && node.tagName !== 'SCRIPT') {
    return compileElement(node, options)
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options)
  } else {
    return null
  }
}

//
function compileElement (el, options) {
  // 预处理textarea, 解析其vlaue, 进行动态value绑定
  if (el.tagName === 'TEXTAREA') {
    var tokens = parseText(el.value)
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens))
      el.value = ''
    }
  }
  var linkFn
  var hasAttrs = el.hasAttributes()
  // 判断是 (for & if)指令, 并创建terminal指令linker, makeTerminalNodeLinkFn(el, dirName, value, options)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, options)
  }
  // 普通的element指令, slot时定义_nameSlot, makeTerminalNodeLinkFn(el, tag, '', options, def)
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options)
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options)
  }
  // normal directives 其他指令
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(el.attributes, options)
  }
  return linkFn
}

function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
  // 解析表达式
  var parsed = parseDirective(value)
  var descriptor = {
    name: dirName,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    // either an element directive, or if/for
    def: def || publicDirectives[dirName]
  }
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    // v-ref: 的动态属性名
    descriptor.ref = findRef(el)
  }
  var fn = function terminalNodeLinkFn (vm, el, host, scope, frag) {
    // 进行双向绑定
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null)
    }
    vm._bindDir(descriptor, el, host, scope, frag)
  }
  fn.terminal = true
  return fn
}

function checkComponent (el, options) {
  var component = checkComponentAttr(el, options)
  if (component) {
    var ref = findRef(el)
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    }
    var componentLinkFn = function (vm, el, host, scope, frag) {
      // 进行双向绑定
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null)
      }
      vm._bindDir(descriptor, el, host, scope, frag)
    }
    componentLinkFn.terminal = true
    return componentLinkFn
  }
}

// 添加skip属性, 创建节点 或 文本指令预处理
function compileTextNode (node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText
  }
  // 解析节点的文本内容
  var tokens = parseText(node.wholeText)
  if (!tokens) {
    return null
  }

  // 循环其兄弟节点, 为其添加_skip属性
  var next = node.nextSibling
  while (next && next.nodeType === 3) {
    next._skip = true
    next = next.nextSibling
  }

  var frag = document.createDocumentFragment()
  var el, token
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i]
    el = token.tag
      ? processTextToken(token, options)
      : document.createTextNode(token.value)
    frag.appendChild(el)
  }
  return makeTextNodeLinkFn(tokens, frag, options)
}

function makeTextNodeLinkFn (tokens, frag) {
  return function textNodeLinkFn (vm, el, host, scope) {
    var fragClone = frag.cloneNode(true)
    var childNodes = toArray(fragClone.childNodes)
    var token, value, node
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i]
      value = token.value
      if (token.tag) {
        node = childNodes[i]
        // 无指令
        if (token.oneTime) {
          // 计算值
          value = (scope || vm).$eval(value)
          if (token.html) {
            // 编译html, 用其副本替换node
            replace(node, parseTemplate(value, true))
          } else {
            //
            node.data = value
          }
        } else {
          // 指令创建、更新指令集、绑定
          vm._bindDir(token.descriptor, node, host, scope)
        }
      }
    }
    // 副本替换el
    replace(el, fragClone)
  }
}

// 根据插值解析结果, 定义编译指令时所需要的数据, text或html指令
function processTextToken (token, options) {
  var el
  if (token.oneTime) {
    el = document.createTextNode(token.value)
  } else {
    if (token.html) {
      el = document.createComment('v-html')
      setTokenType('html')
    } else {
      el = document.createTextNode(' ')
      setTokenType('text')
    }
  }
  function setTokenType (type) {
    if (token.descriptor) return
    var parsed = parseDirective(token.value)
    token.descriptor = {
      name: type,
      def: publicDirectives[type],
      expression: parsed.expression,
      filters: parsed.filters
    }
  }
  return el
}

function skip () {}
skip.terminal = true
```
