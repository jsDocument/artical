# compiler

## index.js
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


## html-parser(html, options)  循环html
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


## filter-parser

