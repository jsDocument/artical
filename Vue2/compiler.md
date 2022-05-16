# compiler 分为三个阶段：生成AST、优化静态内容、生成render

> render方法比template更加底层，如果在创建时传入了render函数，模板编译这一步会跳过。

> 以下两步完成配置、更新options项、生成render函数

## 调用生成compile全局函数
1. src/platforms/web/compiler/index.js文件下定义了解析模板的配置，并调用createCompiler创建了compile和compileToFunctions；
    - expectHTML
    - modules(klass, style)
    - directives(v-model, v-html, v-text)
    - isPreTag(v-pre)
    - isUnaryTag(是否是单标签)
    - mustUseProp(需要使用props绑定的属性)
    - canbeLeftOpenTag(tr,td)
    - isReservedTag(html, svg)
    - getTagNamespace(svg, math)
    - staticKeys(staticClass, staticStyle)静态关键字


```javascript
// src/compiler/index.js调用createCompilerCreator并export createCompiler

export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})

export function createCompilerCreator (baseCompile: Function): Function {
  return function createCompiler (baseOptions: CompilerOptions) {
    function compile (
      template: string,
      options?: CompilerOptions
    ): CompiledResult {
      const finalOptions = Object.create(baseOptions)
      const errors = []
      const tips = []
      finalOptions.warn = (msg, tip) => {
        (tip ? tips : errors).push(msg)
      }

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules)
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          )
        }
        // copy other options
        for (const key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key]
          }
        }
      }

      const compiled = baseCompile(template, finalOptions)
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast))
      }
      compiled.errors = errors
      compiled.tips = tips
      return compiled
    }

    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

```

## 配置options并生成render方法
1. createCompiler(baseOptions), 定义了functionCompileCache来缓存之后的模板，compile主要完成options的更新，调用baseCompile方法
src/compiler/index.js
    - compile-->baseCompile
    - compileToFunctions-->compile

2. compileToFunctions 如果有则先从缓存中获取编译结果，否则进行compile来编译-->compiled，根据compiled.render再构造render函数，最终返回对象包含render函数(字符串)与staticRenderFns数组(字符串数组)

```javascript

// 利用了new Function，并搜集了错误。
function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err, code })
    return noop
  }
}


export function createCompileToFunctionFn (compile: Function): Function {
  const cache = Object.create(null)

  return function compileToFunctions (
    template: string,
    options?: CompilerOptions,
    vm?: Component
  ): CompiledFunctionResult {
    options = extend({}, options)
    const warn = options.warn || baseWarn
    delete options.warn

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1')
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          )
        }
      }
    }

    // check cache
    const key = options.delimiters
      ? String(options.delimiters) + template
      : template
    if (cache[key]) {
      return cache[key]
    }

    // compile
    const compiled = compile(template, options)

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn(
          `Error compiling template:\n\n${template}\n\n` +
          compiled.errors.map(e => `- ${e}`).join('\n') + '\n',
          vm
        )
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(msg => tip(msg, vm))
      }
    }

    // turn code into functions
    const res = {}
    const fnGenErrors = []
    res.render = createFunction(compiled.render, fnGenErrors)
    res.staticRenderFns = compiled.staticRenderFns.map(code => {
      return createFunction(code, fnGenErrors)
    })

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          `Failed to generate render function:\n\n` +
          fnGenErrors.map(({ err, code }) => `${err.toString()} in\n\n${code}\n`).join('\n'),
          vm
        )
      }
    }

    return (cache[key] = res)
  }
}


// 生成的render函数如下
render = function () {
    with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',[_v(_s(message))])])}
}

// 此定义与render调用中一一对应
Vue.prototype._o = markOnce
Vue.prototype._n = toNumber
Vue.prototype._s = _toString
Vue.prototype._l = renderList
Vue.prototype._t = renderSlot
Vue.prototype._q = looseEqual
Vue.prototype._i = looseIndexOf
Vue.prototype._m = renderStatic
Vue.prototype._f = resolveFilter
Vue.prototype._k = checkKeyCodes
Vue.prototype._b = bindObjectProps
Vue.prototype._v = createTextVNode
Vue.prototype._e = createEmptyVNode
Vue.prototype._u = resolveScopedSlots

// 静态内容的render
staticRenderFns = function () {
    with(this){return _c('p',[_v("这是"),_c('span',[_v("静态内容")])])}
}

```
## 生成AST--parse调用parseHTML

```javascript
// 入口
function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
// 解析template，生成AST
  const ast = parse(template.trim(), options)
// optimize(ast, options)主要是对ast进行优化，分析出静态不变的内容部分，增加了部分属性
  optimize(ast, options)
// 根据AST生成render函数和staticRenderFns数组
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

// 开始
export const onRE = /^@|^v-on:/
export const dirRE = /^v-|^@|^:/
export const forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/
export const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
const stripParensRE = /^\(|\)$/g

const argRE = /:(.*)$/
export const bindRE = /^:|^v-bind:/
const modifierRE = /\.[^.]+/g

export function parse (
  template: string,
  options: CompilerOptions
): ASTElement | void {
  warn = options.warn || baseWarn

  platformIsPreTag = options.isPreTag || no
  platformMustUseProp = options.mustUseProp || no
  platformGetTagNamespace = options.getTagNamespace || no

  // 指令组件的配置modules[{staticKeys, transformNode/preTransformNode, genData}]
  transforms = pluckModuleFunction(options.modules, 'transformNode')
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode')
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode')

  delimiters = options.delimiters

  const stack = []
  const preserveWhitespace = options.preserveWhitespace !== false
  let root
  let currentParent
  let inVPre = false
  let inPre = false
  let warned = false

  function warnOnce (msg) {
    if (!warned) {
      warned = true
      warn(msg)
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false
    }
    // apply post-transforms weex中的组件有该配置需要处理
    for (let i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options)
    }
  }

  parseHTML(template, {
    warn,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    // 更新element
    start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      const ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag)

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs)
      }

      // 处理成该格式的对象{ type: 1, tag, attrsList: attrs, attrsMap: makeAttrsMap(attrs), parent, children: [], ns}
      // 如element1 = {type: 1,tag: "div",attrsList: [{name: "id", value: "app"}],attrsMap: {id: "app"},parent: undefined,children: []}
      let element: ASTElement = createASTElement(tag, attrs, currentParent)
      if (ns) {
        element.ns = ns
      }

      // 是style或script 且不是服务端渲染[_isServer]
      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true
        process.env.NODE_ENV !== 'production' && warn(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          `<${tag}>` + ', as they will not be parsed.'
        )
      }

      // apply pre-transforms 执行指针的预处理，负责处理元素的动态type属性，if、for
      for (let i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element
      }

      // 判断是否为v-pre，判断元素是否有v-pre属性，如果是则从attrsList中删除该元素
      if (!inVPre) {
        processPre(element)
        if (element.pre) {
          inVPre = true
        }
      }

      // 判断是否为pre tag
      if (platformIsPreTag(element.tag)) {
        inPre = true
      }

      // 如果是pre，则将其attrsList处理成attrs[{name, value}] 或无属性el.plain = true
      if (inVPre) {
        processRawAttrs(element)
      } else if (!element.processed) {
        // structural directives 判断是否有v-for，进行res = parseFor(value)，将res更新到element上
        processFor(element)
        // element{if:value, else, elseif} 1. 添加条件addIfCondition：element.ifConditions[{exp: value, block: element}] 2.else = true, 3. elseif = value
        processIf(element)

        // 如果有v-once属性更新el.once = true
        processOnce(element)
        // stuff element{key, plain, ref, refInFor[是否有for属性]}
        // 如果tag是slot， element{slotName}
        // 否则如果 tag是template，取scope属性值，element{slotScope: scope || el.slot-scope}
        // 否则如果有slot-scope 属性则 element{slotScope: el.slot-scope}
        // 更新element{slotTarget} 即element的slot属性值 并更新element{attr[{slot: slotTarget}]}
        processElement(element, options)
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              `Cannot use <${el.tag}> as component root element because it may ` +
              'contain multiple nodes.'
            )
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            )
          }
        }
      }

      // tree management 检查root的属性，允许有if属性
      if (!root) {
        root = element
        checkRootConstraints(root)
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element)
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          })
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            `Component template should contain exactly one root element. ` +
            `If you are using v-if on multiple elements, ` +
            `use v-else-if to chain them instead.`
          )
        }
      }
      // 处理元素的else, elseif及slotScope属性，更新currentParent.scopeSlots[name] = element；更新currentParent.children与element.parent
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent)
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false
          const name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element
        } else {
          currentParent.children.push(element)
          element.parent = currentParent
        }
      }

      // 更新currentParent, stack 或 关闭pre 执行weex的postTransforms
      if (!unary) {
        currentParent = element
        stack.push(element)
      } else {
        closeElement(element)
      }
    },

    end () {
      // remove trailing whitespace
      // 处理stack中最后一个元素的最后一个子元素，如果是空白文本则删除该子元素，并取出该元素，结束该元素
      const element = stack[stack.length - 1]
      const lastNode = element.children[element.children.length - 1]
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop()
      }
      // pop stack
      stack.length -= 1
      currentParent = stack[stack.length - 1]
      closeElement(element)
    },

    chars (text: string) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            )
          } else if ((text = text.trim())) {
            warnOnce(
              `text "${text}" outside root element will be ignored.`
            )
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }

      // 如果是非style, script则进行decode及预留空白符处理
      const children = currentParent.children
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : ''
      // 有表达式或有文本
      if (text) {
        let res
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text
          })
        // 空文本
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text
          })
        }
      }
    },
    comment (text: string) {
      currentParent.children.push({
        type: 3,
        text,
        isComment: true
      })
    }
  })
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true
  }
}

function processRawAttrs (el) {
  const l = el.attrsList.length
  if (l) {
    const attrs = el.attrs = new Array(l)
    for (let i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true
  }
}

export function processElement (element: ASTElement, options: CompilerOptions) {
  processKey(element)

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length

  processRef(element)
  processSlot(element)
  processComponent(element)
  for (let i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element
  }
  processAttrs(element)
}

function processKey (el) {
  const exp = getBindingAttr(el, 'key')
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn(`<template> cannot be keyed. Place the key on real elements instead.`)
    }
    el.key = exp
  }
}

function processRef (el) {
  const ref = getBindingAttr(el, 'ref')
  if (ref) {
    el.ref = ref
    el.refInFor = checkInFor(el)
  }
}

export function processFor (el: ASTElement) {
  let exp
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    const res = parseFor(exp)
    if (res) {
      extend(el, res)
    } else if (process.env.NODE_ENV !== 'production') {
      warn(
        `Invalid v-for expression: ${exp}`
      )
    }
  }
}

type ForParseResult = {
  for: string;
  alias: string;
  iterator1?: string;
  iterator2?: string;
};

export function parseFor (exp: string): ?ForParseResult {
  const inMatch = exp.match(forAliasRE)
  if (!inMatch) return
  const res = {}
  res.for = inMatch[2].trim()
  const alias = inMatch[1].trim().replace(stripParensRE, '')
  const iteratorMatch = alias.match(forIteratorRE)
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '')
    res.iterator1 = iteratorMatch[1].trim()
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim()
    }
  } else {
    res.alias = alias
  }
  return res
}

function processIf (el) {
  const exp = getAndRemoveAttr(el, 'v-if')
  if (exp) {
    el.if = exp
    addIfCondition(el, {
      exp: exp,
      block: el
    })
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true
    }
    const elseif = getAndRemoveAttr(el, 'v-else-if')
    if (elseif) {
      el.elseif = elseif
    }
  }
}

function processIfConditions (el, parent) {
  const prev = findPrevElement(parent.children)
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    })
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      `v-${el.elseif ? ('else-if="' + el.elseif + '"') : 'else'} ` +
      `used on element <${el.tag}> without corresponding v-if.`
    )
  }
}

function findPrevElement (children: Array<any>): ASTElement | void {
  let i = children.length
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn(
          `text "${children[i].text.trim()}" between v-if and v-else(-if) ` +
          `will be ignored.`
        )
      }
      children.pop()
    }
  }
}

export function addIfCondition (el: ASTElement, condition: ASTIfCondition) {
  if (!el.ifConditions) {
    el.ifConditions = []
  }
  el.ifConditions.push(condition)
}

function processOnce (el) {
  const once = getAndRemoveAttr(el, 'v-once')
  if (once != null) {
    el.once = true
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name')
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn(
        `\`key\` does not work on <slot> because slots are abstract outlets ` +
        `and can possibly expand into multiple elements. ` +
        `Use the key on a wrapping element instead.`
      )
    }
  } else {
    let slotScope
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope')
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn(
          `the "scope" attribute for scoped slots have been deprecated and ` +
          `replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ` +
          `can also be used on plain elements in addition to <template> to ` +
          `denote scoped slots.`,
          true
        )
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope')
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
        warn(
          `Ambiguous combined usage of slot-scope and v-for on <${el.tag}> ` +
          `(v-for takes higher priority). Use a wrapper <template> for the ` +
          `scoped slot to make it clearer.`,
          true
        )
      }
      el.slotScope = slotScope
    }
    const slotTarget = getBindingAttr(el, 'slot')
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget)
      }
    }
  }
}

function processComponent (el) {
  let binding
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true
  }
}

function processAttrs (el) {
  const list = el.attrsList
  let i, l, name, rawName, value, modifiers, isProp
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name
    value = list[i].value
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true
      // modifiers
      modifiers = parseModifiers(name)
      if (modifiers) {
        name = name.replace(modifierRE, '')
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '')
        value = parseFilters(value)
        isProp = false
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true
            name = camelize(name)
            if (name === 'innerHtml') name = 'innerHTML'
          }
          if (modifiers.camel) {
            name = camelize(name)
          }
          if (modifiers.sync) {
            addHandler(
              el,
              `update:${camelize(name)}`,
              genAssignmentCode(value, `$event`)
            )
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value)
        } else {
          addAttr(el, name, value)
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '')
        addHandler(el, name, value, modifiers, false, warn)
      } else { // normal directives
        name = name.replace(dirRE, '')
        // parse arg
        const argMatch = name.match(argRE)
        const arg = argMatch && argMatch[1]
        if (arg) {
          name = name.slice(0, -(arg.length + 1))
        }
        addDirective(el, name, rawName, value, arg, modifiers)
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value)
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        const res = parseText(value, delimiters)
        if (res) {
          warn(
            `${name}="${value}": ` +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          )
        }
      }
      addAttr(el, name, JSON.stringify(value))
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true')
      }
    }
  }
}

function checkInFor (el: ASTElement): boolean {
  let parent = el
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent
  }
  return false
}

function parseModifiers (name: string): Object | void {
  const match = name.match(modifierRE)
  if (match) {
    const ret = {}
    match.forEach(m => { ret[m.slice(1)] = true })
    return ret
  }
}

function makeAttrsMap (attrs: Array<Object>): Object {
  const map = {}
  for (let i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn('duplicate attribute: ' + attrs[i].name)
    }
    map[attrs[i].name] = attrs[i].value
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el): boolean {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el): boolean {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

const ieNSBug = /^xmlns:NS\d+/
const ieNSPrefix = /^NS\d+:/

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  const res = []
  for (let i = 0; i < attrs.length; i++) {
    const attr = attrs[i]
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '')
      res.push(attr)
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  let _el = el
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn(
        `<${el.tag} v-model="${value}">: ` +
        `You are binding v-model directly to a v-for iteration alias. ` +
        `This will not be able to modify the v-for source array because ` +
        `writing to the alias is like modifying a function local variable. ` +
        `Consider using an array of objects and use v-model on an object property instead.`
      )
    }
    _el = _el.parent
  }
}
// src/compiler/parser/index.js
```



## 对上面代码的语言讲解
1. createASTElement(tag, attrs, parent) 创建AST元素；返回{type: 1, tag, attrsList, attrsMap, parent, childern}
2. parse(template, options)
    - options{isPreTag, mustUseProp, getTagNamespace, delimiters, preserveWhitespace, modules{transformNode, preTransformNode, postTransformNode}}
    - parseHTML(template, {options, start: Fn, end: Fn})；options{expectHTML, isUnaryTag, canBeLeftOpenTag, shouldDecodeNewlines, shouldDecodeNewlinesForHref, comments}
    - start(tag, attrs, unary)，inVPre是`v-pre`， inPre`options传入的方法判断是否是v-pretag`；
    功能实现：元素预处理校验，if处理，更新element与currentParent 及 stack 并关闭元素
        - 对element---preTransforms[i](element, options)创建的AST元素， processPre存在时，进行处理processPre(element); 如果element.pre则inVPre = true;
        - platformIsPreTag(element.tag)时，inPre = true
        - inVPre时processRawAttrs，否则!element.processed时，processFor，processIf，processOnce，processElement
        - processRawAttrs(el)：处理v-pre上的属性[{name, value}]，!el.pre---el.plain = true
        - root不存在时，取element, 并检查root 不可是 slot与 template 及 v-for属性；否则stack不存在时，root.if 且存在element.elseif 或element.else时，对element进行slot...检查，为root添加if条件----addIfCondition
        - 其他。。。。
    - end() 循环关闭元素
    - chars(text)
    - comment(text)


## parseHTML(html, options)

```javascript

const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const ncname = '[a-zA-Z_][\\w\\-\\.]*'
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
const doctype = /^<!DOCTYPE [^>]+>/i
// #7298: escape - to avoid being pased as HTML comment when inlined in page
const comment = /^<!\--/
const conditionalComment = /^<!\[/

// 正则捕获，$1，正常是未匹配为undefined
let IS_REGEX_CAPTURING_BROKEN = false
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === ''
})

export function parseHTML (html, options) {
    const stack = []
    const expectHTML = options.expectHTML
    const isUnaryTag = options.isUnaryTag || no
    const canBeLeftOpenTag = options.canBeLeftOpenTag || no
    let index = 0
    let last, lastTag
    while (html) {
        last = html
        // Make sure we're not in a plaintext content element like script/style
        // 无lastTag或非script, style, textarea且没有前一个标签
        if (!lastTag || !isPlainTextElement(lastTag)) {
          let textEnd = html.indexOf('<')
          // html注释文本，根据注释文本结束，更新剩下的html及index
          if (textEnd === 0) {
            // Comment:
            if (comment.test(html)) {
              const commentEnd = html.indexOf('-->')

              if (commentEnd >= 0) {
                if (options.shouldKeepComment) {
                  options.comment(html.substring(4, commentEnd))
                }
                advance(commentEnd + 3)
                continue
              }
            }

            // 条件注释
            if (conditionalComment.test(html)) {
              const conditionalEnd = html.indexOf(']>')

              if (conditionalEnd >= 0) {
                advance(conditionalEnd + 2)
                continue
              }
            }

            // 文档声明
            const doctypeMatch = html.match(doctype)
            if (doctypeMatch) {
              advance(doctypeMatch[0].length)
              continue
            }

            // 结束标签，更新html与index，再
            const endTagMatch = html.match(endTag)
            if (endTagMatch) {
              const curIndex = index
              advance(endTagMatch[0].length)
              parseEndTag(endTagMatch[1], curIndex, index)
              continue
            }

            // Start tag: 返回{tagName, unarySlash, attrs, start, end}
            const startTagMatch = parseStartTag()
            if (startTagMatch) {
              handleStartTag(startTagMatch)
              // 处理pre, textarea标签后的换行符，并更新html及index
              if (shouldIgnoreFirstNewline(lastTag, html)) {
                advance(1)
              }
              continue
            }
          }

          // 处理有<的文本
          // 开始处不是<，rest存从<开始向后的内容，如果rest非标签或注释更新textEnd，根据textEnd更新text存储文本内容，next为下个出现<的位置，再更新html及index
          let text, rest, next
          if (textEnd >= 0) {
            rest = html.slice(textEnd)
            while (
              !endTag.test(rest) &&
              !startTagOpen.test(rest) &&
              !comment.test(rest) &&
              !conditionalComment.test(rest)
            ) {
              // < in plain text, be forgiving and treat it as text
              // 根据下次出现<的位置next，更新textEnd及rest
              next = rest.indexOf('<', 1)
              if (next < 0) break
              textEnd += next
              rest = html.slice(textEnd)
            }
            text = html.substring(0, textEnd)
            advance(textEnd)
          }
          // 无<的文本
          if (textEnd < 0) {
            text = html
            html = ''
          }
          // 对text进行options.chars处理
          if (options.chars && text) {
            options.chars(text)
          }
        } else {
          // 根据lastTag创建正则表达式，并更新到reChache对象，如果非script, style，textarea且lastTag不为noscript
          let endTagLength = 0
          const stackedTag = lastTag.toLowerCase()
          const reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'))
          //
          const rest = html.replace(reStackedTag, function (all, text, endTag) {
            endTagLength = endTag.length

            // 非script, style，textarea且lastTag不为noscript，把注释外层去掉
            if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
              text = text
                .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')
            }
            // pre与textarea的\n处理
            if (shouldIgnoreFirstNewline(stackedTag, text)) {
              text = text.slice(1)
            }
            if (options.chars) {
              options.chars(text)
            }
            return ''
          })
          // 更新html与index
          index += html.length - rest.length
          html = rest
          parseEndTag(stackedTag, index - endTagLength, index)
        }

        if (html === last) {
            options.chars && options.chars(html)
            if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
                options.warn(`Mal-formatted tag at end of template: "${html}"`)
            }
            break
        }
    }
    // 从n开始截取，并更新记录index
    function advance (n) {
        index += n
        html = html.substring(n)
    }

    // 解析tag的属性、起始、结束位置、单标签
    function parseStartTag () {
        const start = html.match(startTagOpen)

        // 匹配标签名，并更新其html及index
        if (start) {
          const match = {
            tagName: start[1],
            attrs: [],
            start: index
          }
          advance(start[0].length)
          let end, attr
          // 匹配属性，且未匹配到结束标签，更新html及index，并将attr更新到match.attrs中
          while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
            advance(attr[0].length)
            match.attrs.push(attr)
          }

          // 是否是单标签，更新html及index，更新index到match.end
          if (end) {
            match.unarySlash = end[1]
            advance(end[0].length)
            match.end = index
            return match
          }
        }
    }
    // 外部HTML，元素属性结构化，并将非单标签更新到stack，执行options.start
    function handleStartTag (match) {
        const tagName = match.tagName
        const unarySlash = match.unarySlash

        if (expectHTML) {
          // 上一个标签p和外层标签为isNonPhrasingTag列表中的时，处理结束标签
          if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
            parseEndTag(lastTag)
          }
          // 上一个标签与当前标签一样，且是canBeLeftOpenTag列表中的标签时，处理结束标签
          if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
            parseEndTag(tagName)
          }
        }

        // 是单标签
        const unary = isUnaryTag(tagName) || !!unarySlash

        const l = match.attrs.length
        const attrs = new Array(l)
        for (let i = 0; i < l; i++) {
          const args = match.attrs[i]
          // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
          // 如 attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
          // $1属性名，未捕获的空白子项，$2是=，未捕获的引号，$3属性值，或$4单引号属性值，或$5 另一个属性，下面判断如果未捕获则删除该项
          if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
            if (args[3] === '') { delete args[3] }
            if (args[4] === '') { delete args[4] }
            if (args[5] === '') { delete args[5] }
          }
          const value = args[3] || args[4] || args[5] || ''
          // 将属性的字符实体转为其对应的符号
          const shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
            ? options.shouldDecodeNewlinesForHref
            : options.shouldDecodeNewlines
          attrs[i] = {
            name: args[1],
            value: decodeAttr(value, shouldDecodeNewlines)
          }
        }
        // 把非单标签更新到stack，更新tagName为lastTag
        if (!unary) {
          stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs })
          lastTag = tagName
        }

        // 执行options.start方法
        if (options.start) {
          options.start(tagName, attrs, unary, match.start, match.end)
        }
    }

    // 根据tagName从stack取元素并执行options.end方法，并更新stack.length及lastTag
    function parseEndTag (tagName, start, end) {
        let pos, lowerCasedTagName
        if (start == null) start = index
        if (end == null) end = index

        if (tagName) {
          lowerCasedTagName = tagName.toLowerCase()
        }

        // 取tagName其在stack中存的位置，并执行options.warn及options.end方法，并更新stack的长度为pos，lastTag更新为stack中下一个标签
        if (tagName) {
          for (pos = stack.length - 1; pos >= 0; pos--) {
            if (stack[pos].lowerCasedTag === lowerCasedTagName) {
              break
            }
          }
        } else {
          // If no tag name is provided, clean shop
          pos = 0
        }

        if (pos >= 0) {
          // Close all the open elements, up the stack
          for (let i = stack.length - 1; i >= pos; i--) {
            if (process.env.NODE_ENV !== 'production' &&
              (i > pos || !tagName) &&
              options.warn
            ) {
              options.warn(
                `tag <${stack[i].tag}> has no matching end tag.`
              )
            }
            if (options.end) {
              options.end(stack[i].tag, start, end)
            }
          }

          // Remove the open elements from the stack
          stack.length = pos
          lastTag = pos && stack[pos - 1].tag

        // br标签执行其options.start方法，p标签执行其options.start及options.end方法
        } else if (lowerCasedTagName === 'br') {
            if (options.start) {
                options.start(tagName, [], true, start, end)
            }
        } else if (lowerCasedTagName === 'p') {
            if (options.start) {
                options.start(tagName, [], false, start, end)
            }
            if (options.end) {
                options.end(tagName, start, end)
            }
        }
    }

}

// 将实体字符转为对应符号
const decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
}
const encodedAttr = /&(?:lt|gt|quot|amp);/g
const encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g

function decodeAttr (value, shouldDecodeNewlines) {
  const re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr
  return value.replace(re, match => decodingMap[match])
}

// pre, textarea中的换行符
const isIgnoreNewlineTag = makeMap('pre,textarea', true)
const shouldIgnoreFirstNewline = (tag, html) => tag && isIgnoreNewlineTag(tag) && html[0] === '\n'

```

## opitons.start(tag, attrs, unary, start, end), options.end(tag, start, end), options.chars(text)


- 处理的情况
前提处理：last暂存此轮未处理的htl；!lastTag && !isPlainTextElement(lastTag)；textEnd取html中`<`的下标；如果为0，处理1--5的情况；否则处理情况6，7
    1. 注释

    ```javascript
    // 注释开始
    /^<!\--/
    ```
        - 如果options.shouldKeepComment, 更新注释内容到options.comment中
        - 更新位置，注释结束符的index+3

    2. 条件注释
        - 有条件结束符的结束，更新位置，注释结束符的index+2

    ```javascript
        // 条件注释开始
        /^<!\[/
    ```

    3. 文档类型声明----/^<!DOCTYPE [^>]+>/i
        - 更新位置即文档类型声明的长度 index+=length

    4. 结束标签----/^<\/[字母_][\w\-\.][^>]\*>/
        - 将index暂存---curIndex
        - 更新index为结束标签的长度 index+=length
        - parseEndTag(结束标签, curIndex, index)
    5. 开始标签
        - parseStartTag()
        - handleStartTag()
        - shouldIgnoreFirstNewline()
        - 更新index += 1
    6. textEnd>=0
        - rest 存储html 的 textEnd之后的内容
        - 跳过这些不处理；循环rest 不是结束标签，不是标签的开始，不是注释，不是条件注释；更新next即下一个`<`的下标，index>=0时，更新到textEnd += next；根据html从textEnd更新rest
        - 从html更新text,(0---textEnd)
        - 更新index，即textEnd

    7. textEnd小于0， 更新text = html; html = '';
结束处理：options.chars存在且text时，对options.chars(text)


- advance(n) 更新下次开始位置及html的内容
- parseStartTag()
- handleStartTag()
- parseEndTag(tagName, start, end)
    - 查找stack中是否有该tagName
    - 没有该tagName, 进行options.end()处理，更新stack的长度与lastTag
    - 如果是br标签，则进行options.start();
    - 如果是p标签，则进行options.start(), options.end();

开始标签开始：/^<[字母_][\w\-\.]/
开始标签结束：

```javascript
/^\s*(\/?)>/
```

## text-parser

```javascript
const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g

const buildRegex = cached(delimiters => {
  const open = delimiters[0].replace(regexEscapeRE, '\\$&')
  const close = delimiters[1].replace(regexEscapeRE, '\\$&')
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
})

```


## filter-parser

```javascript
const validDivisionCharRE = /[\w).+\-_$\]]/
```







