# 表达式解析的相关实现

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
+ 循环表达式字符str
    1. 判断是否为| 且前后字符不为|,
        1. 如果dir.expression不存在, 则更新下次开始的位置lastFilterIndex = i+1, 更新dir.expression = str.slice(0, i)
        2. 否则更新filters为 lastFIlterIndex,i; lastFilterIndex = i + 1
+ 循环结束 dir.expression不存在, 则dir.expression = str.slice(0, i)
+ 否则如果lastFilterIndex != 0 , 将剩余字符更新为 filter

### parseExpression
+ 定义get
    1. 简单的路径表达式(包含变量 | [字符串] | [number] | new | typeof | void) 且不包含 [时, 直接为'scope.'+表达式构造匿名函数
    2. 对表达式(body)进行改造
        1. 对包含「{ 变量 :」 或 「, 变量:」或 字符串 或 new 或 typeof 或 void 匹配中包含\n的替换成\\n, 再存入到saved数组
        2. 将匹配项替换成 "i", i当前匹配项在saved的下标
        3. 去掉表达式中所有的空格
        4. body = ' ' + body
        5. 将 「非.特殊符 + 变量」的 包含下标的替换回saved数组项的内容 返回 特殊符 + 'scope.' + 变量
        6. 将表达式中的下标替换回saved数组当中的内容
    3. 再对改造过的表达式创建匿名函数

+ 定义set(exp)
    1. 解析exp到path
    2. 返回匿名函数(scope, val){ setPath(scope, path, value)}

### parsePath

+ comipleSetter(exp)
    1. 根据exp字符, 分为以下几种类型
    > 1. ws: 空格符
      2. ident: 字母_ $
      3. 本来的字符: [ ] . " ' 0
      4. number: 1-9
      5. else
      6. eof: 字符等于undefined
    2. 定义动作push: 增加keys; append: 定义或更新key, 用newChar来更新; inc_sub_path_depth: append 然后更新深度subPathDepth[开始一个子路径]; push_sub_path: subPathDepth>0说明在子路径内, 更新mode = IN_SUB_PATH, append, 否则 将子路径key处理, 根据key值返回false 或执行 push
    3. 定义不同模式下, 针对不同「类型」所对应的模式及动作: pathStateMachine为数组, [{type: [0], type: [1, 0]}] type所对应的为[状态, 动作]
    4. path状态: 0 beforePath(默认), 1 inPath, 2 beforeIdent, 3 inIdent, 4 inSubPath, 5 inSingleQuote, 6 inDoubleQuote, 7 afterPath, 8 error
    5. 循环路径每个字符c, 取出字符对滴的type, 根据当前模式mode取出一组[不同type下的对应的模式与动作]typeMap, 再根据type取出相应的「新模式、动作」transition, 更新mode, 取出动作函数
    6. 如果是是对「'」或「"」进行转义的字符, 更新index 与 newChar, 如果error直接返回
    7. transition有动作时, 执行动作为false时, 直接返回
    8. 将keys返回

+ setPath(obj, path, val)
    1. path为string, 解析path
    2. 循环path, last为obj的副本,
    3. 如果不是数组的最后一项 且 obj[key]不为对象, set(last, key, obj[key])
    4. 否则如果obj为数组obj.$set(key, val) 来更新, 如果key in obj, obj[key] = val; 否则set(obj, key, val)
    5. 返回true

```js

var pathStateMachine = []
// 模式下的模式或动作
pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
}

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
}

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
}

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
}

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
}

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
}

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
}
```
