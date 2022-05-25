### 文本解析


+ expression 提取出变量和非变量，变量用_s()包裹，再用+连接起来
+ tokens 是数组，也是文本中的变量和非变量，不一样的是把变量构造成{'@binding': xxx}

```js
// 默认以{{}}界定符
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g
// 特殊字符
const regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g

const buildRegex = cached(delimiters => {
  // 如果界定符是上面的特殊字符，进行转义，再创建正则表达式
  const open = delimiters[0].replace(regexEscapeRE, '\\$&')
  const close = delimiters[1].replace(regexEscapeRE, '\\$&')
  // 捕获文本表达式部分
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
})

type TextParseResult = {
  expression: string,
  tokens: Array<string | { '@binding': string }>
}

export function parseText (
  text: string,
  delimiters?: [string, string]
): TextParseResult | void {
  // 构建整个文本匹配的正则
  const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
  // 是静态文本则直接返回
  if (!tagRE.test(text)) {
    return
  }
  // tokens 与 rawTokens 内容一样，所做的处理不同
  const tokens = []
  const rawTokens = []
  // 上次紧挨着匹配子串的字符位置
  let lastIndex = tagRE.lastIndex = 0
  let match, index, tokenValue
  // 循环匹配所有动态文本部分
  while ((match = tagRE.exec(text))) {
    // 当前匹配的起始位置
    index = match.index
    // 将匹配到的新属性更新到栈内
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index))
      tokens.push(JSON.stringify(tokenValue))
    }
    // 取出中间变量
    const exp = parseFilters(match[1].trim())
    tokens.push(`_s(${exp})`)
    rawTokens.push({ '@binding': exp })
    // 更新 lastIndex
    lastIndex = index + match[0].length
  }
  // 剩余部分的文本
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex))
    tokens.push(JSON.stringify(tokenValue))
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

```


### 解析表达式

+ lastFilterIndex 新子表达式开始匹配的起始位置
+ 循环取出表达式的字符进行识别处理
+ prev存前面的字符，c 为当前字符：
+ 遇到 **'** 设置inSingle状态, **"** 设置inDouble状态, **`** 设置inTemplateString状态, **(** 增加paren的值, **)** 减少paren的值,  **[** 增加square的值,  **]** 减少square的值, **{** 增加 curly 的值, **}** 减少 curly 的值
+ 遇到 `\`，
+ 如果已经在 inSingle、inDouble、inTemplateString、inRegex 状态，且前一个字符不是转义字符，则该状态结束
+ | 运算，获取表达式 或 更新 filters 队列
+ 如果是多个表达式，需要对 filters 队列里的表达式组装成 expression

```js
const validDivisionCharRE = /[\w).+\-_$\]]/

export function parseFilters (exp: string): string {
  let inSingle = false
  let inDouble = false
  let inTemplateString = false
  let inRegex = false
  let curly = 0
  let square = 0
  let paren = 0
  let lastFilterIndex = 0
  let c, prev, i, expression, filters

  for (i = 0; i < exp.length; i++) {
    prev = c
    c = exp.charCodeAt(i)
    if (inSingle) {
      // ' 状态结束
      if (c === 0x27 && prev !== 0x5C) inSingle = false
    } else if (inDouble) {
      // " 状态结束
      if (c === 0x22 && prev !== 0x5C) inDouble = false
    } else if (inTemplateString) {
      // ` 状态结束
      if (c === 0x60 && prev !== 0x5C) inTemplateString = false
    } else if (inRegex) {
      // / 正则结束状态
      if (c === 0x2f && prev !== 0x5C) inRegex = false
    } else if (
      // | 字符，且不是在[],(),{}里面
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // 获取第一个表达式
        lastFilterIndex = i + 1
        expression = exp.slice(0, i).trim()
      } else {
        // 更新子表达式队列
        pushFilter()
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        let j = i - 1
        let p
        // find first non-whitespace prev char
        // 找到 / 前面的非空格的位置
        for (; j >= 0; j--) {
          p = exp.charAt(j)
          if (p !== ' ') break
        }
        // 如果前面没有其他字符 或者 p 不是正则中所包含的字符
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true
        }
      }
    }
  }
  // 只有一个表达式
  if (expression === undefined) {
    expression = exp.slice(0, i).trim()
  } else if (lastFilterIndex !== 0) {
    pushFilter()
  }

  function pushFilter () {
    // 前面有表达式，把 lasterFilterIndex~i 的表达是更新到 filters 队列
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
    lastFilterIndex = i + 1
  }
  if (filters) {
    for (i = 0; i < filters.length; i++) {
      // 组装成_f("[xxx]")(exp) 或 _f("name")(exp, args)
      expression = wrapFilter(expression, filters[i])
    }
  }

  return expression
}

function wrapFilter (exp: string, filter: string): string {
  const i = filter.indexOf('(')
  if (i < 0) {
    // _f: resolveFilter
    return `_f("${filter}")(${exp})`
  } else {
    const name = filter.slice(0, i)
    const args = filter.slice(i + 1)
    return `_f("${name}")(${exp}${args !== ')' ? ',' + args : args}`
  }
}
```
