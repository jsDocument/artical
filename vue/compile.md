#

- 借助于抽象语法树 AST，从字符串中提取出元素的标签、属性、变量插值等有效信息。
- 解析成 AST 后，可以对其进行各种操作处理了，处理后的 AST用来生成 render 函数
- 流程：
  - 模板解析：将模板用正则解析成 AST----parser
  - 优化阶段：遍历 AST，找出静态节点，并打上标记-----optimizer
  - 代码生成阶段：将 AST 转换成渲染函数------codegen

```javascript
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    // 优化阶段：遍历AST，找出其中的静态节点，并打上标记；
    optimize(ast, options)
  }
  // 代码生成阶段：将AST转换成渲染函数；
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns // 静态渲染函数
  }
})
```

## 模板解析

1. parse(template, options)
   1. parseHTMl(template, {})，其中的 4 个钩子函数把提取出的内容生成对应成 AST
      1. parseText(text/value, delimiters)
      2. parseFilters(value)

```javascript
export function parse(template, options) {
  parseHTML(template, {
    warn,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start (tag, attrs, unary, start) {}
    end (tag, start, end) {}
    chars (text: string, start: number, end: number) {}
    comment (text: string, start, end) {}
  })
  return root
}

export const unicodeLetters = 'a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD'

// 命名规则
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeLetters}]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const doctype = /^<!DOCTYPE [^>]+>/i
// #7298: escape - to avoid being pased as HTML comment when inlined in page
const comment = /^<!\--/
const conditionalComment = /^<!\[/
const reCache = {}
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
export const isPlainTextElement = makeMap('script,style,textarea', true)

export function parseHTML (html, options) {
  const stack = [] // 维护 AST 节点层级的栈
  const expectHTML = options.expectHTML
  const isUnaryTag = options.isUnaryTag || no
  const canBeLeftOpenTag = options.canBeLeftOpenTag || no
  let index = 0 // 解析游标
  let last, // 剩余未解析的模板字符串
    lastTag // 位于栈顶 stack 的元素
  while (html) {
    // 剩余未处理的模板
    last = html
    // 栈顶没有元素 或 栈顶的 parse 的内容不是在纯文本标签里 (script,style,textarea)
    if (!lastTag || !isPlainTextElement(lastTag)) {
      let textEnd = html.indexOf('<')
      // '<'在第一个位置，处理一下 5 类情况
      if (textEnd === 0) {
        // 注释的情况
        if (comment.test(html)) {
          const commentEnd = html.indexOf('-->')

          if (commentEnd >= 0) {
            // 如果需要保留注释，则把注释截取出来传给options.comment，创建注释类型的AST节点
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3)
            }
            // 若不保留注释，则将游标移动到'-->'之后，继续向后解析
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

        // Doctype:
        const doctypeMatch = html.match(doctype)
        if (doctypeMatch) {
          advance(doctypeMatch[0].length)
          continue
        }

        // 标签结束:
        const endTagMatch = html.match(endTag)
        if (endTagMatch) {
          const curIndex = index
          advance(endTagMatch[0].length)
          parseEndTag(endTagMatch[1], curIndex, index)
          continue
        }

        // 标签开始:
        // 忽略第一个空行
        const isIgnoreNewlineTag = makeMap('pre,textarea', true)
        const shouldIgnoreFirstNewline = (tag, html) => tag && isIgnoreNewlineTag(tag) && html[0] === '\n'
        const startTagMatch = parseStartTag()
        if (startTagMatch) {
          handleStartTag(startTagMatch)
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1)
          }
          continue
        }
      }

      let text, rest, next
      // '<'不在第一个位置，文本开头
      if (textEnd >= 0) {
        // '<'以后的内容赋值到 rest，前面的纯文本无需处理
        rest = html.slice(textEnd)
        // '<'之后的内容去匹配 endTag, startTagOpen, comment, conditionalComment，没有匹配上，把'<'当做普通的文本内容
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          // 匹配下一个'<'，没有则结束循环
          next = rest.indexOf('<', 1)
          if (next < 0) break
          // 匹配下一个'<'，有则更新 textEnd 位置与 rest 的内容，继续循环
          textEnd += next
          rest = html.slice(textEnd)
        }
        // 截取出纯文本的内容
        text = html.substring(0, textEnd)
      }
      // 整个模板字符串都是纯文本
      if (textEnd < 0) {
        text = html
      }
      // 更新 html 与 index
      if (text) {
        advance(text.length)
      }
      // 把截取处理的 text 转化成 textAST
      if (options.chars && text) {
        options.chars(text, index - text.length, index)
      }
    } else {
      let endTagLength = 0
      const stackedTag = lastTag.toLowerCase()
      const reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'))
      // 对模板的里栈顶标签对应的结束标签
      const rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length
        // parse 的内容不是在纯文本标签里 (script,style,textarea)
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          // 把注释的文本内容取出
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')
        }
        // 跳过 pre, textarea 的空行
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1)
        }
        if (options.chars) {
          options.chars(text)
        }
        return ''
      })
      index += html.length - rest.length
      html = rest
      parseEndTag(stackedTag, index - endTagLength, index)
    }
    // 整个模板作为文本对待
    if (html === last) {
      options.chars && options.chars(html)
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(`Mal-formatted tag at end of template: "${html}"`, { start: index + html.length })
      }
      break
    }
  }

  // Clean up any remaining tags
  // html字符串中的标签格式有误时会跳出while循环，此时就会执行这行代码，这行代码是调用parseEndTag函数并不传递任何参数，前面我们说过如果parseEndTag函数不传递任何参数是用于处理栈中剩余未处理的标签。这是因为如果不传递任何函数，此时parseEndTag函数里的pos就为0，那么pos>=0就会恒成立，那么就会逐个警告缺少闭合标签，并调用 options.end将其闭合。
  parseEndTag()

  function advance (n) {
    index += n
    html = html.substring(n)
  }
  // 1. 起始位置可能有空格
  // 2. (非空格、引号、尖括号、反斜线、等号)-----属性名
  // 3. (等号)与前后空格
  // 4. 双引号(非引号)"+ 或 单引号(非d单引号)'+ 或 (非空格、引号、尖括号、等号)+
  // (?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+))
  const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
  const startTagOpen = new RegExp(`^<${qnameCapture}`)
  const startTagClose = /^\s*(\/?)>/

  function parseStartTag () {
    const start = html.match(startTagOpen)
    if (start) {
      const match = {
        tagName: start[1],
        attrs: [],
        start: index
      }
      advance(start[0].length)
      let end, attr
      // 解析标签开始{tagName, attrs: [{start, end, ['xx=yy',xx,=,"yy"]}], start}
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        attr.start = index
        advance(attr[0].length)
        attr.end = index
        match.attrs.push(attr)
      }
      if (end) {
        // 是否是自闭合标签
        match.unarySlash = end[1]
        advance(end[0].length)
        match.end = index
        return match
      }
    }
  }

  function handleStartTag (match) {
    const tagName = match.tagName
    const unarySlash = match.unarySlash
    // TODO
    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag)
      }
      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag(tagName)
      }
    }

    const unary = isUnaryTag(tagName) || !!unarySlash

    const l = match.attrs.length
    const attrs = new Array(l)
    for (let i = 0; i < l; i++) {
      const args = match.attrs[i]
      // 属性值做兼容处理
      const value = args[3] || args[4] || args[5] || ''
      // 需要对 a 标签的 href 制表符或换行符做兼容处理
      const shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines
      // 将处理结果存入与 match.attrs 长度一致的数组里
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      }
      if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length
        attrs[i].end = args.end
      }
    }
    // 非自闭合标签，就推入栈中
    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end })
      lastTag = tagName
    }
    // 自闭合标签，调用 start 钩子来创建 AST节点
    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end)
    }
  }
  const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
  function parseEndTag (tagName, start, end) {
    let pos, lowerCasedTagName
    // 做剩余标签清理时，使用当前 index
    if (start == null) start = index
    if (end == null) end = index

    // 从栈顶位置从后向前遍历栈，寻找 tagName 所在位置 pos
    // TODO
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase()
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0
    }
    // TODO
    if (pos >= 0) {
      // Close all the open elements, up the stack
      // 从栈顶位置向前遍历，如果stack 中发现存在索引大于 pos 的元素，该元素一定是确实闭合标签
      for (let i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          // 因为在正常情况下，stack栈的栈顶元素应该和当前的结束标签tagName 匹配，也就是说正常的pos应该是栈顶位置，后面不应该再有元素，如果后面还有元素，那么后面的元素就都缺少闭合标签
          options.warn(
            `tag <${stack[i].tag}> has no matching end tag.`,
            { start: stack[i].start }
          )
        }
        // 还会调用 options.end(stack[i].tag, start, end)立即将其闭合，这是为了保证解析结果的正确性。
        if (options.end) {
          options.end(stack[i].tag, start, end)
        }
      }

      // Remove the open elements from the stack
      // 最后把pos位置以后的元素都从stack栈中弹出，以及把lastTag更新为栈顶元素
      stack.length = pos
      lastTag = pos && stack[pos - 1].tag
    } else if (lowerCasedTagName === 'br') {
      // 创建<br>AST节点
      if (options.start) {
        options.start(tagName, [], true, start, end)
      }
    } else if (lowerCasedTagName === 'p') {
      // 对于</p>浏览器则自动将其补全为<p></p>，所以Vue为了与浏览器对这两个标签的行为保持一致，故对这两个便签单独判断处理
      if (options.start) {
        options.start(tagName, [], false, start, end)
      }
      if (options.end) {
        options.end(tagName, start, end)
      }
    }
  }
}

```

## 涉及到的函数

- 根据正则匹配内容的结束位置，更新模板匹配的位置 index 与 剩余未匹配的模板 html----advance(n)游标
  - 注释，是否更新到 AST
  - 条件注释，不需要钩子函数创建 AST，直接截掉即可
  - DOCTYPE，与条件解析

## 大致流程

1. 按模板从前往后分析
   1. 遇到非自闭合标签，入栈
   2. 遇到自闭合标签，直接转场 AST
   3. 注释节点，如果需要保留，创建 commentAST，条件注释节点不处理
   4. 遇到文本转成 TextAST
2. 代码分支逻辑：
   1. 还没有栈顶标签，或栈顶标签不是 TextArea, style, script
      1. `<`在开始位置
         1. 是注释，执行 comment 钩子，根据条件创建注释 AST，且根据注释结束位置，移动游标
         2. 条件注释，同上
         3. Doctype 同上
         4. 标签结束，移动游标，解析结束标签`parseEndTag`
         5. 标签开始，先parseStartTag，再处理开始标签`handleStartTag`，移动游标
      2. `<` 不在开始位置，忽略`<`前面的文本，直接更新 rest
         1. 判断`<`之后不是endTag、startTagOpen、comment、conditionalComment，把`<`当普通文本处理，继续寻找下一个'<',没有就结束循环
         2. 整个没有'<'，整个都是普通文本
         3. 更新游标位置，执行 chars 钩子
   2. 处理没有闭合的标签，根据栈顶标签，创建对应的正则，
      1. 匹配出标签结束之前的文本
         1. 注释<!\--([\s\S]*?)-->/g, <!\[CDATA\[([\s\S]*?)]]>/g，只留中间的文本内容
         2. 去掉 pre, textarea 里面的第一个\n
         3. 执行 chars 钩子，并返回 ‘’
      2. 更新游标、剩余模板并解析结束标签
      3. 整个模板是文本，执行 chars 钩子
   3. 处理仍然未被处理的结束标签
3. 解析结束标签parseEndTag，分为 3 种情况
   1. 有 tagName，找到 tagName 在stack栈里的位置 pos
      1. 在 stack 里面找，pos 之后是否存在该 tagName，存在证明没有闭合，警告，执行 end 钩子
   2. 有 tagName，更新 pos = 0，做清理用
   3. 如果是 br ，执行 start 钩子----createASTElement
   4. 如果是 p，执行 start 钩子----createASTElement，执行 end 钩子
4. 解析标签开始 parseStartTag，把数据更新到对象 match 上
   1. 正则`startTagOpen`匹配出 tag 的开始位置与tagName, 移动游标
   2. 循环匹配非`startTagClose` 并匹配出attribute，更新 attr.start，移动游标再更新 attr.end，更新到队列中
   3. startTagClose匹配成功，即自闭合标签，执行 end 钩子，更新游标，更新并返回 match
5. 处理开始标签 handleStartTag
   1. 解析属性，解析成 {attr:[name, value]}
   2. 不是自闭合标签，入栈
   3. 是自闭合标签，执行 start钩子，创建节点 AST
