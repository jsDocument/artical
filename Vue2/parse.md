## vue模板解析

## 前情提要：
1. Vue分为运行时版本：从init开始, 类型、环境检查、Virtual DOM、Globals MessageChannel、初始化数据方法、初始化调用方法。
2. 编译版本：从执行createCompiler开始，有template + render, 在引入.vue文件时，提供vue-loader来预处理，在浏览器端只引入运行时的即可。
3. 完整版
4. UMD
5. CommonJS
6. ES Module

## 编译版本配置
- expectHTML
- directives
- isPreTag
- isUnaryTag
- mustUseProp
- canBeLeftOpenTag
- isReservedTag
- getTagNamespace
- staticKeys

## createCompiler提供了方法：
  1. compileToFunctions
  2. compile

## 提供的方法在哪个地方使用

## createCompiler(baseOptions)的定义所涉及
1. 通过执行createCompilerCreator(baseCompile)的返回结果
2. createCompilerCreator返回函数createCompiler，createCompiler(baseOptions)实现了如下功能：
  - 定义compile(template, options)函数，实现如下功能：
    1. 对options参数与baseOptions合并 到 finalOptions
    2. compiled = baseCompile(template, finalOptions)
    3. 定义compiled.errors及compiled.tips
    4. 返回compiled
  - 返回{compile, compileToFunctions: createCompileToFunctionFn(compile)} ---------
3. baseCompile实现了如下功能：将template处理成语法树，再处理成code的过程
  - ast = parse(template.trim(), options)
  - optimize(ast, options)
  - code = generate(ast, options)
  - return {ast, render: code.render, staticRenderFns: code.staticRnderFns}

## compileToFunctions(template, options, vm)实现的功能：
1. 根据template为key取缓存，无则编译，有则返回
2. compiled = compile(template, options)
3. 缓存并返回res{render = createFunction(compiled.render, fnGenErrors), staticRenderFns: compiled.staticRenderFns循环执行createFunction}

## createFunction(code, errors)函数
1. 在try中return new Function(code)， catch到error则更新error并返回空函数

## parse
1. parseHTML(template, {start, end, chars, comment, expectHTML....})  返回root

## parseHTML(template, options)
1. 变量：stack[]: 未结束循环的标签队列, index: 待循环的html下标, last, lastTag
2. 用到的正则：
  - 命名要求：ncname = '[a-zA-Z][\\w\\-\\.]*'
  - 包含命名空间的标签命名规则：qnameCapture = `((?:${ncname}\\:)?${ncname})`
  - 标签开始：startTagOpen = new RegExp(`^<${qnameCapture}`)
  - 单标签结束：startTagClose = /^\s*(\/?)>/
  - 标签结束：endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
3. 局部函数：
  - advance(n) 更新index 与 未循环的html; 功能：更新起始位置及待匹配内容
  - parseStartTag
    1. 根据正则匹配标签名，并定义 match{tagName, attrs, start}
    2. advance更新
    3. 循环用正则匹配html, 1. end非单标签结束 2. 取属性attr并更新到match.attrs
    4. 如果end，则更新 __match.unarySlash__, advance更新，match.end = index
  - parseEndTag(tagName, start, end) 对当前标签 及 其内标签进行结束操作 或 一些特殊标签的开始与结束处理
    1. start, end默认取index
    2. 查stack中是否有tagName，有则取出其下标 pos, 无tagName则 pos = 0
    3. 如果pos存在，将pos下标及之后的标签options.end(stack[i].tag, start, end)
      - 更新stack.length = pos, lastTag = stack[pos-1].tag
    4. 如果tag为br, options.start(tagName, [], true, start, end)
    5. 如果tag为p, options.start(tagName, [], false, start, end); options.end(tagName, start, end)

  - handleStartTag(match) 特殊标签结束 及 属性数据的格式化 并 将 节点更新到stack----标签的结构化队列
    1. lastTag = p, tagName是块级: parseEndTag(lastTag)
    2. tagName特殊标签: parseEndTag(tagName)
    3. 将属性处理成[{name, value}]形式
    4. 非单标签时，将{tag, lowerCasedTag, attrs}更新到stack
    5. 执行options.start(tagName, attrs, unary, match.start, match.end)
4. 函数主体：循环html
  1. 不存在未结束的标签 或 未结束的标签不是script, style, textarea
    - 取 textEnd = <的下标, 且等于0时
      1. 包含注释，获取注释结束的位置，如果要保留注释，更新到currentParent节点上，再advance
      2. 条件注释，advance
      3. 文档类型声明，advance
      4. 结束标签，advance, parseEndTag---对结束标签
      5. 标签开始，handleStartTag
    - textEnd >=0, 更新rest = html.slice(textEnd)----(文本中的<号)
      1. while 判断 rest不包含结束标签 且 不包含标签开始 且 不包含注释 且 不包含条件注释
        1. next = 取<在rest的位置, next<0 则结束循环；否则更新textEnd += next, 再根据textEnd更新rest
        2. text = html.substring(0, textEnd), advanced(textEnd)
    - textEnd < 0，text = html; html = ''; ----全部是文本
    - 对text进行文本结构化处理
  2. 否则
    1. rest = 正则匹配lastTag中的文本 及  结束标签 endTagLength为结束标签的长度
      - text中的注释 及 条件注释 外层去掉？
      - lastTag是pre 或 textarea时，text去掉前面的换行符
      - 对text进行文本结构化处理
      - return '';
    2. 更新index = html.length - rest.length, html = rest, parseEndTag(lastTag, index - endTagLength, index)
  3. 如果 html === rest, 结html进行文本结构化处理
  4. parseEndTag()



## options中的方法
- start(tag, attrs, unary)
  1. 创建ASTElement
  2. pre相关处理
  3. 处理For, If, Once, Element
  4. 不存在root，更新root = element，并完成相关检查；否则如果stack队列为空，做root.if 及 element.elseif 或 element.else检查 并为root添加IF条件
  5. 如果currentParent
    - 处理element.elseif 或 element.else
    - 或处理element.slotScope
    - 或 更新 currentParent.children.push(element); element.parent = currentParent
  6. 如果非单标签， currentParent = element, stack.push(element); 否则 closeElement(element)
- end
  1. 取element = stack最后一个元素，lastNode = element最一个子元素
  2. 为空的文本元素 且 !inPre, 则删除该元素；即尾空格
  3. 减少stack的长度，并更新currentParent = stack最后一个元素；即退栈
  4. closeElement(element) 关闭元素
- chars(text) 保存文本节点，如果有表达式，则对其进行结构化
  1. 检查IE的 textarea 的 placeholder === text bug, return;
  2. text解析结果，更新到currentParent.children[{type: 2, expression: res.expression, tokens: res.tokens, text}]
  3. 纯文本节点：currentParent.children[{type: 3, text}]
- comment(text) 保存注释
  1. 更新currentParent.children[{type: 3, text, isComment: true}]
- closeElement(element)
  1. 更新inVpre
  2. 更新inPre
  3. 执行postTransforms[i](element, options)

## module中所做的处理
- preTransformNode(el, options)----module: el为input的情况
  1. el.attrsMap['v-model'] 必须存在
  2. el有绑定type属性，获取其typeBinding
  3. if条件-->ifCondition，else-if条件-->elseIfCondition，是否有else属性-->hasElse
  4. 创建el的副本branch0
    - 处理For-->processFor(branch0)
    - 添加属性-->addRawAttr(branch0, 'type', 'checkbox')
    - 处理元素-->processElement(branch0, options)
    - if处理
  5. 创建el副本branch1
    - 获取然后移除branch1的v-for属性 --> getAndRemoveAttr(branch1, 'v-for', true)
    - 添加type属性 --> addRawAttr(branch1, 'type', 'radio')
    - 处理元素 --> processElement(branch1, options)
    - 添加if条件
  6. 创建el副本branch2
    - 获取然后移除branch2的v-for属性 --> getAndRemoveAttr(branch2, 'v-for', true)
    - 添加type属性 --> addRawAttr(branch2, ':type', typeBinding)
    - 处理元素 --> processElement(branch2, options)
    - 添加if条件
  7. 如果hasElse--> branch0.else = true; 否则有else-if属性，则branch0.elseif = elseIfCondition
  8. 返回 branch0

## 涉及的公共方法
- processFor(el)
  1. 获取并移除el的for属性--->exp
  2. 解析表达式--->res = parseFor(exp)
  3. 将解析结果更新到el
- parseFor(exp)
  - /([^]*?)\s+(?:in|of)\s+[^]*/--->([^]*?) 来获取变量，inMatch值，如['key in obj', 'key', 'obj']
  - res.for = match[2]
  - alias = 去掉match[1]的前后括号  /^\(|\)$/g
  - 获取match[1]中,号后最后一项 或 两项的变量 /,([^,\}\]]*)(?:,(^,\}\]*))?$/--->([^,\}\]]*) 来获取变量
  - res.alias为第一个变量，res.iteator1为后面的变量，如果存在第三个变量则更新到 res.iterator2
  - 返回res
- processIf(el)



路径path可能出现的符号
inVpre
inPre
