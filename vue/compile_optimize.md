## 编译的大致流程

- $mount
  - 先尝试获取内部模板，获取不到在获取外部模板
  - 根据模板，获取生成的 render函数---compileToFunctions----{ compile, compileToFunctions }
  - createCompilerCreator(baseCompile)返回createCompiler{ast, render, staticRenderFns}
- 解析模板 parse---AST
  - Tag 分类：pre, mustUseProp, namespace, ReservedTag, component, transform、preTransform, postTransform, delimiters
  - parseHTML(游标、栈顶元素、<位置): 标签、属性---parseText、注释、DOctype、文本---parseText
    - 标签：非自闭合---入栈，自闭合 start 钩子，非自闭合---出栈执行 end 钩子-----key, ref, slot, component, closeElement, processElement 处理属性
    - 文本：chars 钩子----parseText
    - 注释：comment 钩子
  - parseText： 解析变量
  - parseFilter：解析变量中的表达式
- 优化 optimize ，并标识出静态节点、静态根节点
  - 循环标记node.ifConditions[i].block 与 node.children
  - type取值, 对应的AST节点类型
    1. 元素节点
    2. 包含变量的动态文本节点
    3. 不包含变量的纯文本节点
  - type 为 1 时，进一步判断
    - 使用了v-pre指令，那就断定它是静态节点
    - 没有使用v-pre指令，不能使用动态绑定语法，即标签上不能有v-、@、:开头的属性
    - 不能使用v-if、v-else、v-for指令
    - 不能是内置组件，即标签名不能是slot和component
    - 标签名必须是平台保留标签，即不能是组件
    - 当前节点的父节点不能是带有 v-for 的 template 标签
    - 节点的所有属性的 key 都必须是静态节点才有的 key，注：静态节点的key是有限的，它只能是type,tag,attrsList,attrsMap,plain,parent,children,attrs之一
- generate生成 code: {render, staticRenderFns}

- 静态根节点需满足：
  - 节点本身必须是静态节点
  - 必须拥有子节点 children
  - 子节点不能只是只有一个文本节点
  - 如果当前节点不是静态根节点，那就继续递归遍历它的子节点node.children和node.ifConditions
