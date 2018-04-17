### get
+ makeGetterFn(body)
    1. 返回创建的匿名函数 return new Function('scope', 'return'+body+';')
+ 简单路径 且 不包含[, makeGetterFN('scope'+exp)
+ 简单路径即: a.b 或 a[1] 或 a[b] 或 a['b'] 或 a["b"]
+ 否则用compileGetter(exp)构造get
    1. /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)\*'|"(?:[^"\\]|\\.)\*")|new |typeof |void /g
    2.  {key 或 ,key 或 字符串 或 new, typeof, void等的匹配
    3. replce匹配上面的格式的内容：save(str, isString) 
    4. saved = [], 存储匹配的结果, 第一个子集有捕获, 则将其中\n 替换成 \\n
    5. 替换成 saved的下标--> "i"; 如`"{\n a: '35',\n b: c}"` 被替换成 `""0" "1""2" c}"`
    6. 去除其中的空格
    7. /[^\w$\.](?:[A-Za-z_$][\w$]\*)/g 匹配 非点或非变量(c) + 变量
    8. ' '+exp 再根据上需的匹配进行 rewrite(raw), 除操作符外,后面为允许的关键字`path`, 刚将raw返回; 否则 如果后面部分`path`包含「"」,刚将双引号中的数字作为下标, 取出并替换为saved[i], 返回 `c + 'scope.' + path`
    9. 将之前替换的 "i", 再用其saved项匹配回来。
    10. 根据处理好的表达式makeGetterFn(exp)

> 对{key: 或 value 匹配项存入saved, 用saved下标代替, 再去除空格, 将表达式前面加一个空白符, 再为所有变量加上「scope.」,最后将下标替换成saved数组相应的值
+ comipleSetter(exp)
    1. parsePath(exp) 解析path
    2. 根据下面分类, 可知相应类型type
    > 1. ws: 空格符 
      2. ident: 字母_ $
      3. 本来的字符: [ ] . " ' 0 
      4. number: 1-9
      5. else
      6. eof: 字符等于undefined
    3. 动作push: 增加keys; append: 定义或更新key, 用newChar来更新; inc_sub_path_depth: append 然后更新深度subPathDepth[开始一个子路径]; push_sub_path: subPathDepth>0说明在子路径内, 更新mode = IN_SUB_PATH, append, 否则 将子路径key处理, 根据key值返回false 或执行 push
    4. pathStateMachine为数组, [{type: [0], type: [1, 0]}] type所对应的为[状态, 动作]
    5. path状态: 0 beforePath(默认), 1 inPath, 2 beforeIdent, 3 inIdent, 4 inSubPath, 5 inSingleQuote, 6 inDoubleQuote, 7 afterPath, 8 error
    6. 循环路径每个字符c, 取出字符对滴的type, 根据当前模式mode取出一组[不同type下的对应的模式与动作]typeMap, 再根据type取出相应的「新模式、动作」transition, 更新mode, 取出动作函数
    7. 如果是是对「'」或「"」进行转义的字符, 更新index 与 newChar, 如果error直接返回
    8. transition有动作时, 执行动作为false时, 直接返回
    9. 将keys返回
+ setPath(obj, path, val)
    1. path为string, 解析path
    2. 循环path, last为obj的副本, 
    3. 如果不是数组的最后一项 且 obj[key]不为对象, set(last, key, obj[key])
    4. 否则如果obj为数组obj.$set(key, val) 来更新, 如果key in obj, obj[key] = val; 否则set(obj, key, val)
    5. 返回true

`
    
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
`



