### 疑问  偏函数，形成了闭包，闭包主要用的场合
1. Observer中创建的dep，在是简单数据时，是否无用？dep实例
2. 前面el更新为Fragment ？
3. 一层层解析Directive???
4. 解析Expression 的Path
5. plugin安装 ？？use
6. {} 或 Object.create(null) 再进行extend的区别
7. '__proto__' in {}
8. 进行了多少层的expression解析？ 多少层directive解析？text解析？
9. get过程中，dep处于什么状态？lazy的值从何处来？
10. factory是？
12. this.scope是什么时候取得的？
13. asStatement, 事件hook, attach, detached
14. extractContent ???  treimNode   mapNodeRange   compileTextNode



### Vue静态
1. parsers --> path, text, template, directive, expression
2. compiler
3. FragmentFactory
4. internalDirectives
5. set, delete, nextTick

### 双向绑定
+ vm<--ob-->dep<-->watcher<-->vm
+ defineReactive
1. observe(val)
2. 定义key的 enumerable, configurable, `get, set`

### 难点函数
+ nextTick-->创建新函数，更新cb到callback中, 没有执行队列中函数时, 整个队列加入执行队列。
+ debounce-->创建新函数，计时结束后调用func。

### 难点
+ 定义数据双向绑定Object.defineProperty(Vue.prototype, '$data', {get[this.\_data], set(newData)[this.setData]})
+ \_proxy, \_unproxy
+ observe
+ makeGatter

### 解析指令表达式
+ 解析Directive，=》dir{expression, filters}
1. lastFilterIndex 记录下次开始统计的位置
2. 管道符时 创建expression 或 更新filter
3. 循环结束没有expression, 则表示整个都是expression
4. lastFilterIndex 有值，从该位置向后都是filter, 更新

+ pushFilter
1. lastFilterIndex 到当前循环位置都为 filter
2. args的dynamic、value; filter{name, args}, 并push到dir.filters
3. 更新lastFilterIndex 为 当前位置+1


### 解析Template
1. 为fragment时，直接返回
2. 为string时, ID选择器, 取其DOM, 返回其内容的fragment
3. nodeType存在, 返回其内容的fragment

### 解析{{Text}}
1. 循环进行{{}} 匹配
2. 第一个字符为\*, {tag: true, value, html, oneTime}



### 总结


### 数据解构与绑定、监听过程
1. data, 设置其
2.
3. 挂载编译-->更新el, 更新属性-->是相应的指令(-->解构成表达式数据{{}}##)
1). A. 解析表达式进行函数调用(动态参数$get)  B.oneTime时 $eval, 执行$get 或 执行filters   c. 为token.value加""
2). $get, $set-->解析收到的exp-->定义其get与set-->get 根据表达式生成函数 --> set 解析成Path, 设置path


### 关系图



### 新知识
+ 正则全局匹配 \/[^\s'"]+|'[^']\*'|"[^"]\*"/g, 匹配filter, 中间用 |
+ /^v-([^:]+)(?:$|:(.\*)$)/
+ RE.lastIndex, exec匹配到的开始位置 match.index
+ ident
+ path  
+ save
+ 循环用while(i--)
+ 循环子节点--trimNode, node.firstChild, node.lastChild; !node.
+ 克隆节点--cloneNode(true) 属性、特性attr、自定义属性 与 事件[IE复制所有，而其他只复制前两项];  子节点
+ 浅复制, 修改其DOM或复制的DOM的自定义属性, 另一个的自定义属性也跟着改变。
+ 复制的节点的嵌套模板元素的innerHTML不存在？循环为其每个Template节点, 替换成template复本
+ textarea复制节点的placeholder 成了其value，修复其值



### 事件  
+ shouldPropagate【判断事件的来源，回调的不存在或回调的返回值】与 emit
1. event参数为string类型 或 该事件的cbs不存在
2. event参数为string类型 且cbs中有cb.\_fromParent属性 则该变量为false
3. 循环cbs执行,并把第二个及后面参数传递给该cb, 该回调的返回值为true 且 不存在cb.\_fromParent，则该变量为true.
4. 返回该变量
+ this.\_events队列---this.\_events{event:[fn]}
+ 添加on, 
+ 去除off, 
1. 有父实例，去除该实例的该事件的所有cb或更新count; 
2. 更新该事件的cb的count, 再更新该事件为null; 
3. 去除该事件中cbs中的一个fn。
+ broadcast【向子元素进行广播事件】
1. 将第一个参数处理成{name: event, source: this}的形式
2. 循环其children, 调用其emit, 如果返回值为true, 再调用其child的broadcast
3. 返回this
+ dispatch 【循环父实例，进行通知】
+ hook:为系统事件
+ modifyListenerCount方法：循环父实例，并更新父实例的该事件个数

### 初始化事件
+ registerComponent 【el上的事件属性, 事件绑定】更新handler.\_fromParent = true
+ registerCallbacks  【循环注册动作、回调】绑定注册事件，监听
+ register 函数为三种类型的参数，一种的处理vm[on/watch](event, handler/method, options), 一种自身register

### \_callHook




-ms-user-select： element, none, text, auto
contenteditable

throttle(func, wait, options)节流函数—>later函数执行func, return 定时器调用later或func

props—>Number/{type:, required, default, twoWay, validator, coerce转换}





v-refs与属性关联
组件，指令，Dom指令，filter, transition, partial实现?????
vm.$interpolate



compileDirectives——处理fragment

parseDirective

替换规则：
solt，单个将父标签所有内容，都放入子组件slot中
多个，按slot的name属性进行放置
子
<slot name=“aa”></slot>
<slot></slot>
父
<p slot=“aa”>内容</p>

var compiler = Object.freeze({
compile: compile,
compileAndLinkProps: compileAndLinkProps,
compileRoot: compileRoot,
transclude: transclude,
resolveSlots: resolveSlots
});


小插件：classname()
参数形式1, ‘one’, false, ’true’
// 判断
{
one : true,
two: false
}
// 前面选项，后面判断—》合并
([one, two],{one: false, three: true})

小插件：dom-align(sourceNode, targetNode, points:[’tl’,’tr’], offset:[10,20], targetOffset:[’30%’,’40%'])
小插件：css-animation




****
1、组件中动画部分
2、数学
3、ES6异步
4、nextTick
5、node插件
6、chrome插件
7、throttle与debounce——处理多个复杂函数，出现假死或卡顿——鼠标响应：只响应部分
throttle——连续的时间间隔，隔一定时间执行callback——浏览器窗口响应
时间内最多处理一次：节流
debounce——空闲时间间隔，callback后执行一段时间，再执行callback
停顿250S后开始处理：去抖

设计思想：
简单性与模块化是基石
分布式与容错性是生命

css中的行高：
基线
底线
顶线

行距、行高
内容区
行内框
行框
元素对行高



符号，公式，定理----生活



指数 y = a^x
对数 y = x^a       loga(x)
幂函数

约数/因数   能被整除
质数/素数   能被1和自身整除
最大公约数




通过网络进行分区挂载？ usr — unix software resource

指令—表达式
{{}}表达式


$data—>get与set—>_proxy, __ob__.removeVm(this), _digest()
prop
_meta??——defineReactive
methods---bind
data—runtimedata, _proxy, observe
computed—Object.defineProperty—makeComputedGetter—>创建watcher

_proxy—Object.defineProperty—>proxyGetter, proxySetter—>self._data
_digest—>watchers更新

makeComputedGetter—>返回computedGetter, wathcer.dirty—>watcher.evaluate(); Dep.target—>watcher.depend(); —>返回watcher.value


expression：
1、简单path，正常变量, 对象属性引用路径；
2、save: {或, 后属性或字符串或关键字替换成数组下标——匹配的部分放到数组中
3、ident：首字符为非正常变量或. 后为正常变量—》重写1、正常函数 2、匹配的从第二个字符起有“，进行restore; 3、第一个字符 + ‘scope.’ + 从第二个字符之后
restore—>双引号中数字

path—>$set设置数据
解析表达式
1、undefined   ——eof
2、[ ] . “ ‘ 0    ——
3、_ $ 字母    —— ident
4、空白符      —— ws
5、1-9          —— number
6、else

模式：
Before_path：变量或属性的开始
In_path：空白符   .  [  undefind(after_path)
Before_indent：空白符(模式不变)  变量首字符(ident)
In_ident：变量首字母，变量, 数字(模式不变) 空白符(In_path) .(属性开始前) [(子路径 )  undefine(after_path)
In_sub_path：’ ”(引号模式) [(下一级子路径) ] (回到上一路径, in_path) undefined 其他(模式不变)
In_single_quote：单引号后只有能——‘(子路径中)undefined  其他(还在单引号模式)
In_double_quote：这个同上

动作：
变量首字符，属性首字符：append
后续变量或属性：append
变量或属性后的空白 . [ eof：push
子路径1、’ “ ：append  2、[ 下一级子路径 Inc_sub_path_depth  3、] 回上线路径 push_sub_path 4、错误  5、其他append
引号内: append


实现：
字符分类
二维数组：不同字符(分类)后对应不同情况下一个值[模式, 动作]
一维数组：动作---实现



text——>{{}}—>value
directive——filter与expression

$eval完成(text, asStatement)：解析directive
1、$get取dir.expression上的值
2、再用_applyFilters执行dir.filters

3、_applyFilter直接执行结果

使用地方：
1、自定义指令表达式
2、API—>data($get与$set)
3、path—>getPath
4、watcher—>this.getter为res.get

文本节点：wholeText是整个文本内容

关系：
数据：this._data——proxy----get/set
lange---set方法：


Directive：编译是创建指令，_bind 创建watcher，监听解析出来的expression


watcher：computerGetter
	      创建Directive时，监听其expression
get, set—>解析表达式中的getter与setter
addDep—>管理deps,
Dep的addSub—>管理watchers

observe：
创建ob：1、def定义，创建this.dep，2、定义子项的defineReactive
ob = 属性有__ob__



dep




defineReactive：
1、取属性的getter与setter
2、重新定义其get与set

def：定义基本属性特性(value, enumerable, writable, configurable)




测试js

vue如何解析查找数据

组件, 指令, 元素指令, filters, transitions, partials

vue 数据部分
{
	更新ref
	初始化数据
	 {
			$data属性的set—>循环老数据进行_unproxy, 新数据进行_proxy, 移除vm, observe() _digest()
		props—>this._data, this._props, dirs;
		meta—> defineReactive(this, key, metas[key])
		methods—>bind()
		data—>$options.data, set,循环_data, _proxy observe(data, this),
		computed—>创建属性特性：get 1、创建watcher 2、返回方法：watcher.dirty—>watcher.evaluate() Dep.target—>watcher.depend() 返回watcher.value
		set为空或bind
	 }
	事件
	编译
}
数据监听
 {
	set(obj, key, val)
		1、obj有key属性赋值
		2、是vie实例对set(this._data, key, val)
		3、obj.__ob__不存在，直接更新obj[key]
		4、ob.convert(key,val)  ob.dep.notify() 循环ob.vms,对vm._proxy(key) vm._digest()  返回val

	del(obj, key)
		1、obj没有key属性赋值—返回；删除属性
		2、obj.__ob__不存在--返回
		4、ob.dep.notify() 循环ob.vms,对vm._unproxy(key) vm._digest()

	defineReactive(obj, key, val)
		1、创建dep
		2、取对象属性的getter与setter
		3、创建子监听childOb = observe(val)
		4、定义对象属性的特性, get：value=取getter运行结果或val, Dep.target存在: de.depend() 子监听childOb.dep.depned; 如果是数组, 循环value.__ob__.dep.depend(); 返回value。set：取value, 参数与value相同返回。调用setter更新或直接更新到val；子监听参数, deep.notify()

	def 定义属性特性

	_proxy(key) 定义this的属性特性, set和get都从this._data存取数据

	_digest循环_watchers进行更新.update(true)
 }

observe, watcher, dep关系
1、observe(value, vm): 定义value的__ob__指向this; this.vms; defineReactive
2、convert, 定义this.value的key与value的defineReactive
3、数组：重新定义数组方法，取ob = this.__ob__, ob.observeArray(参数) ob.dep.notify, 返回执行结果。$set与$remove——都进行了def


1、dep
Dep.target为当前watcher实例
subs为监听的watcher队列
depend为把当前watcher



自定义指令：directive 与 elementDirective
bind—初始一次
update—bind之后，以初始值为参数，调用第一次；绑定值变化时调用(val, oldVal)
unbind
params: 特性列表，自动提取绑定元素的这些特性
paramWatchers: 更新时的回调
deep: 当内部属性变化时，是否要update
twoWay: 允许Vue实例写回数据，this.set(value)
acceptStatement: 可以让自定义指令接受内联语句
terminal：指令会停止遍历这个元素的后代元素
priority: 权重

Vue.FragmentFactory编译partial

v-demo=‘{color: 1, text: 2}’


mixins：组件提供分布复用功能；把组件的公共功能放到这个对象中，如果有同名钩子，则将两个钩子放入数组，都调用且mixins在组件钩子之前调用；其他方法则以组件优先；

也可能过Vue.config.optionMergeStrategies添加函数
Vue.config.optionMergeStrategies.myOption = fn(toval, fromval)添加自己合并策略

Vue.config.optionMergeStrategies.methods为methods的合并策略


插件：插件名.install = function(vue, options){
	定义静态、原型方法
	资源
 }
全局使用：Vue.use(插件)





. [] 空白符
查检“”  ‘’ [  ]  .  数字——正确性，完整性



parseTemplate——对template标签



el是一个template ? 编译之后作el

mixin  组件与非组件的区别？

_scope与vm.context是什么时候更新的？
_scope, _context在指令内更新
host为slot里的this.vm?
slot有_scope

_bind—进行bind与更新
_bindDir—创建directive更新到vm._directives

el—如何有options，如果是组件应该有

_compile:

trasclude:
opionts._content存放el元素的子元素
el是template时，el为编译的frag
编译时，放入到frag, 后面返回replacer或frag追加到el

compileRoot: linker = compileDirectives(元素attr, options)—>pushDir(不同类型)

compile(el, options, partial)：linker = compileNode, compileNodeList 有terminal
compileNodeList—>compileNode, 或再次调用compileNodeList—>***linkFns(项，数组)—>
返回makeChildLinkFn—>返回childLinkFn—>nodeLinkFn，childrenLinkFn

compositeLinkFn???

1、compileElement 或compileTextNode
元素为textarea，处理其value—>tokens, 设置其:value为tokens的tokensToExp, 并将其value=‘’
linker = 有属性，查检是Terminal指令—>v-pre, v-else; (v-for, v-if)->makeTerminalNodeLinkFn
linker = 查检Element指令, 定义tag = _namedSlot—>makeTerminalNodeLinkFn
linker = 检查组件
linker = compileDirectives(el的属性)

compileTextNode
对node.wholeText进行parseText—>tokens
循环取node.nextSibling—>next，如果next.nodeType==3; next._skip = true
创建frag
循环tokens—>el = 如果token是{{}}—>processTextToken, 否则根据token.value创建文本节点
将el追加到frag
返回makeTextNodeLinkFn(tokens, frag)—》取frag复本的子元素，循环tokens，
有{{}}, 取子元素项，
	有oneTime—>value = $eval,
		有html—>编译value,替换子项
		否则node.data = value
	否则vm._bindDir
复本替换el

processTextToken(token, options)
创建并返回el—>注释节点html或空文本节点；
定义descriptor：{
	name: ‘html’/’text’
	expression: 解析token.value
	..
}

2、makeTerminalNodeLinkeFn
定义其descriptor, 返回fn = 有ref时，定义defineReactive, 进行vm._bindDir

3、checkComponent
定义其descriptor, 返回componentLinkFn = 有ref时，定义defineReactive, 进行vm._bindDir

compileDirectives处理属性：
attr.name ~~ attr.value
rawName: 原始属性名
rawValue: 原始属性表达式
tokens: 解析过的value，匹配其中{{}}；
modifiers: 限定数组
name: 去除限定后
value: 1、tokens执行结果—》未用到
arg: 1、name 2、name去除事件标志 3、正则匹配属性指令名后
dirName: 1、name去除bind标志 2、正则匹配属性指令名
literal

pushDIr，更新descriptor—》token进行parseExpression与tokentoExp的区别？dirs??返回根据dirs进行makeNodeLinkFn—>返回nodeLinkFn，进行vm._bindDir


处理得到：tokens
lastIndex,
exec去匹配，用其结果的index与上面的lastIndex
tokens:{
	value: 存{{}}之外的内容，与{{}}里的内容
	oneTime: {{}}里包含*，再更新value除去*
	tag: 包含{{}}
	html: 匹配到{{{}}}
}
更新lastIndex为index + match到内容的长度
后面没有匹配到的：从lastIndex结束，更新value

进一步编译tokens：
1、tokens长度大于1，循环将下面结果用”+”运算
有tag且是oneTime，用vm.$eval(token.value)
只是有tag, 用inlineFilters(token.value, single：token长为1)
其他：只是为token.value加双引号


2、转成字符串表达式：
没有过滤器且只有一个，直接exp
没有过滤器，加（exp）
有过滤器：解析directive—>dir; ***如果没有过滤器，加（exp）否则      '_applyFilers(dir.expression, null, JSON.stringify(dir.filters), false)’


这里的解析direcitve, 是从属性的{{}}中取的value—>
外面正则检查有filter***但是没有解析到filters？？？


3、执行filter
从$options中取filter，如果是可写的，filter.write否则filter.read/filter
可写-->args = [value, oldVal] 否则 [value]
可写—>offset = 2 否则1
循环filter.args—>arg, 如果arg是动态；args的第1或2位参数从this.$get(arg.value)取，否则为arg。
value = fn的执行结果
返回 value



指令查找过程：_assetTypes[type][id]
component, , directive—根据id查找，id是在哪里保存入队列的？



documentFragment是一个轻量级的document对象，所以具有appendChild与insertBefore方法
有children, firstElementChild, lastElementChild, childElementCount, content属性
find(), findAll(), querySelector, querySelectorAll, getElementById方法

是存入内存，而非DOM树，不会导致重新渲染

parentNode为Null, 插入的不是自己，而是子孙节点；有利于实现剪切，复制，粘贴操作与Range


创建的div元素有innerHTML属性, textContent，但11却没有
div可以重复操作，添加再移除也是归文档所有，可以继续操作，但11是一次性的，添加之后不能操作了
