### partial
+ 有动态属性name及回调
+ bind: 创建注释节点替换this.el
+ 然后查找options中配置的partials, 存在则创建FragmentFpactory实例this.factory并调用vIF指令的insert
+ unbind时销毁thisfrag

### if
+ bind
    1. el = this.el,
    2. !el.\__vue__
        1. el的下一个兄弟元素「next」有v-else, 移除该节点
        2. 创建elseFactory = new FragmentFactory(this.vm, next)
        3. 创建v-if注释节点或空白符的文本节点-->this.anchor
        4. 用this.anchor替换this.el
    5. 否则this.invalid = true

+ update(value)
    1. this.invalid时直接返回
    2. value存在, !this.frag时执行this.insert() 否则执行this.remove()

+ remove
    1. 移除this.frag并this.frag.null
    2. this.elseFactory存在且!this.elseFrag时， 创建this.slseFrag, 并添加到this.anchor之前
    > this.elseFrag = this.elseFactory.create(this.\_host, this.\_scope, this.\_frag)
      this.elseFrag.before(this.anchor)

+ unbind() 销毁this.frag 与 this.elseFrag

+ insert
    1. 移除elseFrag 并将引用置为null
    2. 根据this.factory创建this.frag = this.factory.create(this.\_host, this.\_scoep, this.\_frag)
    3. 将this.ancor添加到this.frag之前


### slot
+ bind: 
    1. host = this.vm, raw = host.$options.\_content, slotName = this.params.name, context = host.\_context
    2. 如果slotName不存在, 则编译this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host)
    3. 否则根据slot="slotName" 在raw中查找该节点nodes, nodes存在则编译this.tryCompile(extractFragment(nodes, raw), context, host); 否则this.fallback()

+ fallback()
    1. this.compile(extractContent(this.el, true), this.vm)

+ tryCompile(content, context, host)
    1. content存在子元素调用 this.compile(content, context, host)
    2. 否则this.fallback()

+ compile(content, context, host) 创建else, Template DOM, 追加到content, 编译content, 替换this.el
    
`

    // 创建template元素, 并添加v-else属性, 将this.el的html添加到else元素上，并追加到content
    const elseBlock = document.createElement('template')
    elseBlock.setAttribute('v-else', '')
    elseBlock.innerHTML = this.el.innerHTML
    content.appendChild(elseBlock)
`
    1. this.el有子元素 且content有一个子节点, 且子节点类型为1, 且子节点有if属性, 创建else部分; 
    2. 更新scope为 host.\_scope 或 this.\_scope
    3. this.unlink = context.$compile(content, host, scope, this.\_frag)
    4. content存在则content替换this.el; 否则移除this.el

+ unbind() 执行this.unlink()

+ nameSlot为slot的扩展, 权重+1, 增加动态name参数

+ extractFragment(nodes, parent, main) 解析node, 将其副本追加到frag
    1. append(node)方法, 判断node为template标签 且 且没有if和for属性, node = parseTemplate(node); 将node的副本追加到frag
    2. 循环nodes项--node
    3. 如果main且!node.__v_selected时, append(node)
    4. 否则如果!main 且 node.parentNode等于parent, 更新node.__v_selected = true, append(node)
    5. 返回frag

+ $compile(el, host, scope, frag) 返回 compile(el, this.$options, true)(this, el, host, scoep, frag)
