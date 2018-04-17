### parseText(text) 解析{{expression}}的字符串表达式
1. tagRE = /\{\{\{(.+?)\}\}\} \| \{\{(.+?)\}\}/
2. lastIndex = tagRE.lastIndex = 0
3. 循环match = tagRE.exec(text), 
    + index = match.index 开始匹配到的位置
    + index > lastIndex时, 更新token [{value: text.slice(lastIndex, index)}]; lastIndex为上一轮匹配结束的位置
    + 更新tokens[{tag: true, value为match[1或2], html, oneTime其中value包含\*时}]
    + 更新lastIndex = index + match[0].length, 更新结束位置
4. lastIndex < text.length时, 更新tokens[{value: text.slice(lastIndex)}]匹配上次匹配结束到最后内容
5. 缓存token并返回

### parseDirective


### parseExpression

