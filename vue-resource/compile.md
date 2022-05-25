### WebRuntime 情况下涉及模板编译部分

+ Vue 更新是为了生成 render 函数，然后生成虚拟 dom，映射到页面上。
+ render 方法比 template更加底层，如果在创建时传入了 render 函数，模板编译这一步会跳过。比如 weex 与 web 就不需要执行模板编译部分
+ compiler 分为三个阶段：生成AST、优化静态内容、生成render
+ 创建 compiler部分，分为 baseCompile 与 createCompiler 结合实现
+ 返回 compile 方法？

```js {5,7,9,26}
function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options) // 模板解析
  if (options.optimize !== false) {
    optimize(ast, options) // 标记是否为静态节点
  }
  const code = generate(ast, options) // 生成render
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}
// createCompiler
function createCompiler (baseOptions: CompilerOptions) {
  function compile (
    template: string,
    options?: CompilerOptions
  ): CompiledResult {
    // errors, tips处理
    // 更新options参数处理: warn,
    // modules, directives, tiptions 的合并，此处省略
    // 开始编译
    const compiled = baseCompile(template.trim(), finalOptions)
    if (process.env.NODE_ENV !== 'production') {
      detectErrors(compiled.ast, warn)
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
function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err, code })
    return noop
  }
}
function createCompileToFunctionFn (compile: Function): Function {
  const cache = Object.create(null)
  return function compileToFunctions (
    template: string,
    options?: CompilerOptions,
    vm?: Component
  ): CompiledFunctionResult {
    // 参数处理与警告处理，省略

    // 根据整个模板缓存，检查是否已经缓存了
    const key = options.delimiters
      ? String(options.delimiters) + template
      : template
    if (cache[key]) {
      return cache[key]
    }
    // 执行 compile
    const compiled = compile(template, options)
    // 检查复杂的 errors/tips，省略

    // turn code into functions
    const res = {}
    const fnGenErrors = []
    res.render = createFunction(compiled.render, fnGenErrors)
    res.staticRenderFns = compiled.staticRenderFns.map(code => {
      return createFunction(code, fnGenErrors)
    })
    // 检查生成函数的 errors，省略
    return (cache[key] = res)
  }
}
```

生成的结果如下

```js

render = function () {
  with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',[_v(_s(message))])])}
}
staticRenderFns = function () {
  with(this){return _c('p',[_v("这是"),_c('span',[_v("静态内容")])])}
}
```



#### 模板解析

+ 解析 HTML，parse为主线函数，包含parseHTML，再对具体的进行 ParseText 与 ParseText




```js
function parse (
  template: string,
  options: CompilerOptions
): ASTElement | void {
  // ...
  parseHTML(template, {
    // 其他options,
    start (tag, attrs, unary, start, end) {
      // 检查 namespace
      // handle IE svg bug
      // 创建 AST 节点
      let element: ASTElement = createASTElement(tag, attrs, currentParent)
      if (ns) {
        element.ns = ns
      }
      // AST 节点属性处理
      // 节点检查
      // apply pre-transforms
      // processPre
      // processRawAttrs
      // processFor(element)
      // processIf(element)
      // processOnce(element)
      // 是否设置为 root
      // 未闭合的标签，更新为 currentParent，并进栈
      if (!unary) {
        currentParent = element
        stack.push(element)
      } else {
        // 闭合标签
        closeElement(element)
      }
    },

    end (tag, start, end) {
      // 取出栈顶元素，进行标签闭合
      const element = stack[stack.length - 1]
      // pop stack
      stack.length -= 1
      currentParent = stack[stack.length - 1]
      closeElement(element)
    },

    chars (text: string, start: number, end: number) {
      // warn ...
      if (!currentParent) {
        return
      }
      const children = currentParent.children
      // text，如果是非style, script则进行 decode 及预留空白符处理
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text)
      } else if (!children.length) {
        text = ''
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          text = lineBreakRE.test(text) ? '' : ' '
        } else {
          text = ' '
        }
      } else {
        text = preserveWhitespace ? ' ' : ''
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // whitespaceRE = /[ \f\t\r\n]+/g 空白符统一处理
          text = text.replace(whitespaceRE, ' ')
        }
        let res
        let child: ?ASTNode
        // 进行文本解析
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text
          }
        // 静态文本
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text
          }
        }
        if (child) {
          if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
            child.start = start
            child.end = end
          }
          // 更新文本节点的信息
          children.push(child)
        }
      }
    },
    comment (text: string, start, end) {
      // 创建注释节点
      if (currentParent) {
        const child: ASTText = {
          type: 3,
          text,
          isComment: true
        }
        if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
          child.start = start
          child.end = end
        }
        currentParent.children.push(child)
      }
    }
  })
  return root
}
```

#### 解析 HTML

+ stack: 存放非自闭合标签
+ isUnaryTag: 是否非自闭合标签
+ index: expectHTML 检测到的当前游标的位置
+ html：待检查的 html 部分
+ last: 当前被检测的 html 部分的剩余部分
+ rest: 暂存剩余包含注释或标签的未处理的 html
+ lastTag: 上一个未闭合标签
+ advance：负责移动游标
+ textEnd：< 开始的位置
+ 处理 HTML
  + 没有未闭合标签 或 未闭合标签不是plaintext(如：script/style)，textEnd = 0时，分为 5 种情况：
    1. 是注释标签，创建注释节点并移动游标
    2. 条件注释，移动游标
    3. doctype标签，移动游标
    4. 标签结束：new RegExp(`^<\\/${qnameCapture}[^>]*>`)
    5. 标签开始：完成匹配标签名、属性、开始与结束位置、是否是自闭合标签并更新游标；标签开始：new RegExp(`^<${qnameCapture}`)，与开始标签的结束 /^\s*(\/?)>/
       1. 处理属性： **/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/**
       2. 动态属性： **/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/**
       3. 标签命名规则： ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeRegExp.source}]*`
       4. 标签名匹配：qnameCapture = `((?:${ncname}\\:)?${ncname})`
    + 更新 textEnd 并取出对应的文本，更新文本子节点
  + 处理文本子节点
+ 处理所有还未闭合标签的逻辑

```js
function parseHTML (html, options) {
  const stack = []
  const expectHTML = options.expectHTML
  const isUnaryTag = options.isUnaryTag || no
  const canBeLeftOpenTag = options.canBeLeftOpenTag || no
  let index = 0
  let last, lastTag
  while (html) {
    last = html
    if (!lastTag || !isPlainTextElement(lastTag)) {
      let textEnd = html.indexOf('<')
      if (textEnd === 0) {
        // 注释标签
        if (comment.test(html)) { // /^<!\--/
          const commentEnd = html.indexOf('-->')
          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3)
            }
            advance(commentEnd + 3)
            continue
          }
        }
        if (conditionalComment.test(html)) { // /^<!\[/
          const conditionalEnd = html.indexOf(']>')

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2)
            continue
          }
        }
        const doctypeMatch = html.match(doctype) // /^<!DOCTYPE [^>]+>/i
        if (doctypeMatch) {
          advance(doctypeMatch[0].length)
          continue
        }
        const endTagMatch = html.match(endTag)
        if (endTagMatch) {
          const curIndex = index
          advance(endTagMatch[0].length)
          parseEndTag(endTagMatch[1], curIndex, index)
          continue
        }
        // Start tag:返回{tagName, unarySlash, attrs, start, end}
        const startTagMatch = parseStartTag() // 完成匹配标签名、属性、开始与结束位置、是否是自闭合标签
        if (startTagMatch) {
          // 处理元素属性，并创建 VNODE 节点
          handleStartTag(startTagMatch)
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1)
          }
          continue
        }
      }
      // 包含 <,不是结束标签、开始标签，也不是注释；next 指向下一个 < 的位置，更新textEnd的位置
      let text, rest, next
      if (textEnd >= 0) {
        rest = html.slice(textEnd)
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          next = rest.indexOf('<', 1)
          if (next < 0) break
          textEnd += next
          rest = html.slice(textEnd)
        }
        text = html.substring(0, textEnd)
      }
      if (textEnd < 0) {
        text = html
      }
      if (text) {
        advance(text.length)
      }
      // 创建文本子节点
      if (options.chars && text) {
        options.chars(text, index - text.length, index)
      }
    } else {
      let endTagLength = 0
      const stackedTag = lastTag.toLowerCase()
      // 获取 xxxxxx </stackedTag> 中的 text
      const reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'))
      const rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length
        // 获取其中的条件注释
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')
        }
        // 去掉textarea, pre的第一个\n
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1)
        }
        // 创建文本子节点
        if (options.chars) {
          options.chars(text)
        }
        return ''
      })
      // 更新 游标位置，更新下次需要检测的部分
      index += html.length - rest.length
      html = rest
      // 对具名tagName进行闭合
      parseEndTag(stackedTag, index - endTagLength, index)
    }

    if (html === last) {
      options.chars && options.chars(html)
      break
    }
  }

  // 对 stack 所有未闭合 tagName 进行元素闭合，并更新stack.length及lastTag
  parseEndTag()
}

```
