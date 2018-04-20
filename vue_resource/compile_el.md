# 编译的整个过程与相关方法讲解

```js
Vue.prototype._compile = function (el) {
    var options = this.$options

    // 缓存原来的el
    var original = el

    // 把template转换成DOM并更新到el
    el = transclude(el, options)

    // 判断el为Fragment时, 更新相应的实例属性this._fragmentEnd = el.lastChild,
    // this._fragmentStart = el.firstChild, 如果是文本节点则把节点内容清空(text anchors)
    // this._fragment = el, 调用钩子beforeCompile
    this._initElement(el)

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
        return
    }

    // 编译根节点
    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options
    var rootLinker = compileRoot(el, options, contextOptions)

    // 编译并进行连接
    var contentLinkFn
    var ctor = this.constructor

    // component compilation can be cached
    // as long as it's not using inline-template

    // 如果有缓存, 从构造函数的linker属性上获取
    if (options._linkerCachable) {
        contentLinkFn = ctor.linker
        if (!contentLinkFn) {
        // 编译其他节点
        contentLinkFn = ctor.linker = compile(el, options)
        }
    }

    // 调用rootLinker
    var rootUnlinkFn = rootLinker(this, el, this._scope)
    // 调用contentLinker
    var contentUnlinkFn = contentLinkFn
        ? contentLinkFn(this, el)
        : compile(el, options)(this, el)

    // 定义unLinker
    this._unlinkFn = function () {
        rootUnlinkFn()
        contentUnlinkFn(true)
    }

    if (options.replace) {
        replace(original, el)
    }

    this._isCompiled = true
    this._callHook('compiled')
}
```

### 挂载更新处理options.el, 将toptions.template处理更新到el
+ transclude(el, options)
    1. options.\_containerAttrs 为el元素上的属性
    2. el为template时, 更新el = 解析__parseTemplate(el)__
    3. options参数存在
        + options.\_asComponent 且 !options.template, 添加options.template = '<slot></slot>'
        + options.template存在, 更新options.\_content = __extractContent(el)__, el = __transcludeTemplate(el, options)__
    4. el为文档片断时, 在el的前后加v-start与v-end的注释节点
    5. 返回el

+ transcludeTemplate(el, options)
    1. frag = parseTemplate(options.template, true)
    2. replacer = frag.firstChild, tag为replacer的tagName
    3. 如果options.replace为真
    4. frag多个子节点 或 replacer不是Element 或 tag为component 或 tag为定义的组件 或 tag为元素指令 或 replacer有is绑定属性 或 有v-for属性  或有 v-if属性, 直接返回frag; 否则更新options.\_replacerAttrs, 合并 replacer属性到el, 返回replacer
    5. 否则frag追加到el, 返回el。

+ parseTemplate(template, shouldClone, raw)
    1. template为文档片断时, 却空节点--trimeNode(template), shouldClone为真时, 返回template的复本, 否则返回template
    2. template为字符串时, !raw 且 为Id选择器时, 先从缓存中取frag
        + frag不存在时, 根据id选择器获取DOM节点node
        + node存在时, frag = __nodeToFragment(node)__, 再存入缓存
    3. frag = __stringToFragment(template, raw)__
    4. template.nodeType存在时, frag = __nodeToFragment(template)__
    5. 返回frag 或 shouldClone为真, 返回其副本

+ nodeToFragment(node)
    1. 判断为template标签且node.content为fragment, 去除node.content的空白节点并返回
    2. node为script, 返回 __stringToFragment(node.textContent)__
    3. cloneNode为node的副本, frag为新建的Fragment
    4. 循环cloneNode的第一个子元素, 将其追加到frag中
    5. 去除frag中空白节点并返回

+ stringToFragment(templateString, raw)
    1. raw存在时, templateString作为key取缓存, 否则templateString去除前后空白符后作为key取缓存
    2. 缓存不存在时, 创建文本片断frag, tagMatch为匹配templateString的标签, entityMatch为匹配实体字符
    3. !tagMatch 且 !entityMatch时, 将templateString创建文本节点, 追加到frag
    4. 创建div的元素--node
    5. 根据匹配到的tag, 如果需要补全, 则在其前后添加补全的标签, 如tr需要在前后被'<table><tbody>'与'</tbody></table>'补全;
    6. 将补全的html更新到node.innerHTML
    7. 递减补全的深度值, 更新node为node.lastChild
    8. 循环node.firstChild, 追加到frag
    9. !raw时, 去除frag的空白节点, 存入缓存并返回。

+ extractContent(el, asFragment)
    1. el为template标签且el.content为文本片断时, 更新el = el.content
    2. 如果el有子元素, 去除el空白节点, asFragment为真时, rawContent = 创建的fragment, 否则 rawContent = 创建的div
    3. 循环el的firstChild， 追加到rawContent
    4. 返回rawContent

+ trimNode(node)
    1. 循环node的firstChild, 子节点为空白文本节点或注释节点时, 删除该子节点
    2. 循环node的lastChild, 子节点为空白文本节点或注释节点时, 删除该子节点

+ cloneNode(node)  ???
