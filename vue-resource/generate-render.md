### 生成 render 函数

+ genElement----分类生成 VNode 渲染函数的入口
+ genComment----生成渲染函数_e，即函数功能是createEmptyVNode 创建注释 VNode
+ genText----生成渲染函数_v，即函数功能是createTextVNode 创建文本 VNode
+ genNode----DOM 节点类型，或 注释 或 文本类型
+ genData----将元素属性组装成{dirs, key: el.key, ref: el.ref, refInFor: true, pre: true, tag: el.tag, 执行dataGenFns的结果 attrs: 处理attrs, domProps: 处理props, 事件处理, 原生事件处理, slot: el.slotTarget, 处理ScopedSlots， model: {value: el.model.value, callback: el.model.callback, expression: el.model.expression}, inlineTemplate 处理}，
  + 如果是动态 attrs，对数据为_b(data, el.tag, 动态属性处理)函数，再对其_b(), _g()
+ genProps
+ genHandlers
+ genFor
+ genOnce
+ genStatic----生成渲染函数_m(index, isInFor)，即函数renderStatic的功能是执行对应下标的staticRenderFns函数，并缓存结果，并为其加上静态节点的标志
+ genIf
+ genIfConditions
+ genInlineTemplate
+ genDirectives
+ genSlot
+ genScopedSlot
+ genScopedSlots
+ genComponent
+ genChildren
+ genProps
+ generateValue
+ staticRenderFns
+ altGen

```js
function generate (
  ast: ASTElement | void,
  options: CompilerOptions
): CodegenResult {
  const state = new CodegenState(options)
  // fix #11483, Root level <script> tags should not be rendered.
  const code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")'
  return {
    render: `with(this){return ${code}}`,
    staticRenderFns: state.staticRenderFns
  }
}

// 根据不同类型，做相应的处理
function genElement (el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }
  // 静态节点，更新 statte 的属性 staticRenderFns, pre，返回的 _m(index, isInFor)，
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  // once，分别处理 if, for---`_o(${genElement(el, state)},${state.onceId++},${key})`, static 三种情况
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  // for 处理成 '_l(exp, function(alias, iterator1, iterator2){ return (altGen || genElement)(el, state) })'
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  // If genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty), altGen 或 genOnce 或 genElement
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  // children
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  // slot
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // 组件 或 元素
    let code
    if (el.component) {
      code = genComponent(el.component, el, state)
    } else {
      let data
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state)
      }

      const children = el.inlineTemplate ? null : genChildren(el, state, true)
      code = `_c('${el.tag}'${
        data ? `,${data}` : '' // data
      }${
        children ? `,${children}` : '' // children
      })`
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code)
    }
    return code
  }
}

```

#### 执行 render 函数用到的辅助函数

```js
function installRenderHelpers (target: any) {
  target._o = markOnce // `__once__${index}${key ? `_${key}` : ``}`
  target._n = toNumber
  target._s = toString
  target._l = renderList //(val. render)
  target._t = renderSlot
  target._q = looseEqual
  target._i = looseIndexOf
  target._m = renderStatic // 创建静态VNode，根据 index 进行缓存，再为 VNode 根据 key `__static__${index}` 添加 VNode 信息；返回 tree
  target._f = resolveFilter
  target._k = checkKeyCodes
  target._b = bindObjectProps
  target._v = createTextVNode
  target._e = createEmptyVNode
  target._u = resolveScopedSlots
  target._g = bindObjectListeners
  target._d = bindDynamicKeys
  target._p = prependModifier
}
```
