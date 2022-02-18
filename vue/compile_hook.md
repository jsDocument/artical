变量：

- currentParent
- InVPre
- InPre

钩子函数

- start
  - 命名空间, ns
  - svg bug
  - 创建createASTElement---element
  - 更新 element 的属性：ns, start, rawAttrsMap, forbiden, preTransform, pre
  - InVPrv：processPre, processRawAttrs
  - 处理 elment 的preTransforms, processFor, processIf, processOnce
  - checkRootConstraints
  - 非闭合标签，更新 currentParent = element，element 入栈 stack
  - 自闭合标签 closeElement----processElement
- end
  - 取出栈顶元素，去掉元素尾部的空白节点
  - 出栈并更新 currentParent = element，closeElement----processElement
- comment
  - 直接定义child:ASTText
  - 更新到 currentParent.children 队列
- chars
  - 没有 currentParent，警告外层要有元素
  - 如果IE 下，且是 textarea 且 placeholder = text 不处理
  - 处理 text 兼容性的内容
    - script, style 之外，预设元素内容进行 decode
    - 各种空白符处理，处理预设的 ‘ ’
  - 根据 text 解析，并得出结果 child
    - 解析 Text 中的表达式----parseText，解析出 expression, tokens
    - 判断为纯文本
    - 更新到 currentParent.children

- processElement
  - 处理 processRef, processSlot, processComponent, processAttrs----parseText
