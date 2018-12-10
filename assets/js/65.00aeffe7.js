(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{133:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"symbol-和-iterator-及-generator"}},[t._v("Symbol 和 Iterator 及 Generator")]),a("p",[t._v("在学习Generator与async函数之前，我们先来学一下相关的基础知识。")]),a("h3",{attrs:{id:"symbol"}},[t._v("Symbol")]),a("pre",[a("code",[t._v("为防止属性名冲突而引入的一种新的原始数据类型，表示独一无二的值。(undefine, null, Boolean, String, Number, Object)\nSymbol值通过Symbol函数生成。\nSymbol是原始类型，不是对象，所以不能添加对象，也不能使用new。\n")])]),a("ul",[a("li",[t._v("使用方法")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 参数是字符串，如果传入的是对象，用通过toString方法转成字符串")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("ul",[a("li",[t._v("Symbol不能与其他类型的值进行运算，但Symbol可以显式转为字符串 或布尔值。")]),a("li",[t._v("作为属性名时，不能使用"),a("code",[t._v(".")]),t._v("运算，因为点运算后面都是字符串，所以不会读取Symbol作为标识名。")]),a("li",[t._v("也可以用于定义一组常量，保证数据的不同。")]),a("li",[t._v("Symbol作为属性名，不会出现在"),a("code",[t._v("for...in")]),t._v("、"),a("code",[t._v("for...of")]),t._v("中，也不会被"),a("code",[t._v("Object.keys()")]),t._v("、"),a("code",[t._v("Object.getOwnPropertyNames()")]),t._v("、"),a("code",[t._v("JSON.stringify()")]),t._v("返回。但是也不是私有属性，还有一个"),a("code",[t._v("Object.getOwnPropertySymbols()")]),t._v("可以获得对象的所有Symbol属性名。")]),a("li",[t._v("Reflect.ownKeys() 可以获得所有类型的键名")]),a("li",[t._v("Symbol.for()接受一个字符串作为参数，然后搜索有没有以该参数为名称的Symbol值，如果有则返回，否则就创建；会被登记在全局环境中供搜索。")]),a("li",[t._v("Symbol.keyFor(s) 返回一个已登记的Symbol类型值的key。")]),a("li",[t._v("内部Symbol值\n"),a("ol",[a("li",[t._v("Symbol.hasInstance，如 a instanceof Array 实际调用的是[Symbol.hasInstance]")]),a("li",[a("code",[t._v("Symbol.isConcatSpreadable")]),t._v("属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。")]),a("li",[a("code",[t._v("Symbol.species")]),t._v(" 指向一个构造函数，创建衍生对象时，使用该属性")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 创建衍生对象时，使用这个属性返回的函数")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyArray")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Array")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("species"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Array"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//默认是")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// static get [Symbol.species]() {")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// return this;")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("对象的Symbol.match 指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。")]),a("li",[t._v("对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。")]),a("li",[t._v("对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。")]),a("li",[t._v("对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。")]),a("li",[t._v("对象的"),a("code",[t._v("Symbol.iterator")]),t._v("属性，指向该对象的默认遍历器方法。")]),a("li",[t._v("对象的"),a("code",[t._v("Symbol.toPrimitive")]),t._v("属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。")]),a("li",[t._v("对象的"),a("code",[t._v("Symbol.toStringTag")]),t._v("属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，"),a("strong",[t._v("它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。"),a("strong",[t._v("也就是说，这个属性")]),t._v("可以用来定制[object Object]或[object Array]中_object后面的那个字符串_")]),t._v("。")]),a("li",[t._v("对象的"),a("code",[t._v("Symbol.unscopables")]),t._v("属性，指向一个对象。该对象指定了"),a("code",[t._v("使用with关键字时，哪些属性会被with环境排除")]),t._v("。")])])])]),a("p",[t._v("ES6 新增"),a("code",[t._v("内置对象的Symbol.toStringTag属性")]),t._v("值如下。")]),a("pre",[a("code",[t._v("JSON[Symbol.toStringTag]：'JSON'\nMath[Symbol.toStringTag]：'Math'\nModule 对象M[Symbol.toStringTag]：'Module'\nArrayBuffer.prototype[Symbol.toStringTag]：'ArrayBuffer'\nDataView.prototype[Symbol.toStringTag]：'DataView'\nMap.prototype[Symbol.toStringTag]：'Map'\nPromise.prototype[Symbol.toStringTag]：'Promise'\nSet.prototype[Symbol.toStringTag]：'Set'\n%TypedArray%.prototype[Symbol.toStringTag]：'Uint8Array'等\nWeakMap.prototype[Symbol.toStringTag]：'WeakMap'\nWeakSet.prototype[Symbol.toStringTag]：'WeakSet'\n%MapIteratorPrototype%[Symbol.toStringTag]：'Map Iterator'\n%SetIteratorPrototype%[Symbol.toStringTag]：'Set Iterator'\n%StringIteratorPrototype%[Symbol.toStringTag]：'String Iterator'\nSymbol.prototype[Symbol.toStringTag]：'Symbol'\nGenerator.prototype[Symbol.toStringTag]：'Generator'\nGeneratorFunction.prototype[Symbol.toStringTag]：'GeneratorFunction'\n")])]),a("h3",{attrs:{id:"iterator"}},[t._v("Iterator")]),a("ul",[a("li",[a("p",[t._v("javascript原来表示集合的方式有 "),a("code",[t._v("Array")]),t._v(", "),a("code",[t._v("Object")]),t._v(", "),a("code",[t._v("Map")]),t._v(", "),a("code",[t._v("Set")]),t._v("；用户可以组合使用他们，这就需要一种统一的接口机制，来处理不同的数据结构。")])]),a("li",[a("p",[t._v("遍历器是一种机制，是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据只要布置Iterator接口，都可以完成遍历操作。")])]),a("li",[a("p",[t._v("Iterator的作用")]),a("ol",[a("li",[t._v("为各种数据提供统一的访问接口；")]),a("li",[t._v("全数据结构成员能够按某种次序排列；")]),a("li",[t._v("ES6创建了一种新的遍历命令 "),a("code",[t._v("for...of")])])])]),a("li",[a("p",[t._v("遍历过程")]),a("ol",[a("li",[t._v("创建指针对象，指向当前数据结构的起始位置；即遍历器对象本质上是一个指针对象。")]),a("li",[t._v("第1次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。---返回当前数据结构的成员信息{value, done}")]),a("li",[t._v("第2次调用指针对象的next方法，可以将指针指向数据结构的第二个成员。")]),a("li",[t._v("不断调用指针对象的next方法，走到指向数据结构的结束位置。")])])]),a("li",[a("p",[t._v("只要布置了Symbol.iterator就可以被for...of属性，即布置了遍历器接口，调用该接口就会返回一个遍历器对象")])])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" it "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("ul",[a("li",[a("p",[t._v("具备Iterator接口的数据如下：")]),a("ul",[a("li",[t._v("Array")]),a("li",[t._v("Map")]),a("li",[t._v("Set")]),a("li",[t._v("String")]),a("li",[t._v("TypedArray")]),a("li",[t._v("函数的 arguments 对象")]),a("li",[t._v("NodeList 对象")])])]),a("li",[a("p",[t._v("为对象布置Iterator接口，即布署一种线性处理；但其实可以直接用Map结构。")])])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// 判断处理并返回{value, done}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("ul",[a("li",[t._v("调用Iterator接口的场合：解构赋值、扩展运算符、yield* 、 for...of、Array.from()、Map(), Set(), WeakMap(), WeakSet(), Promise.all()、Promise.race()")])]),a("h3",{attrs:{id:"generator"}},[t._v("Generator")]),a("ul",[a("li",[t._v("基础理论")])]),a("ol",[a("li",[t._v("iterator是专门为迭代而设计的接口, 有"),a("code",[t._v("next")]),t._v("方法与返回包含"),a("code",[t._v("{value,done}")]),t._v("属性的对象, iterator内部有一个指向迭代位置的指针, 每次调用next方法, 自动移动指针并返回结果对象")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myIterable "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("myIterable"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// [1, 2, 3]")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 或 ")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iterator"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("generator返回一个遍历器对象，即包含状态机制的遍历器生成函数。特征：")]),a("ul",[a("li",[a("code",[t._v("function")]),t._v("与函数名之间的"),a("code",[t._v("*")]),t._v("号；")]),a("li",[t._v("函数体内用yield表达式")])])]),a("li",[a("p",[t._v("执行过程：")]),a("ul",[a("li",[t._v("调用Generator函数返回遍历器对象")]),a("li",[t._v("遍历器对象.next()使指移向下一个状态；即遇到yield表达式或return语句(或函数结束)为止。可以为next(params)方法添加参数；参数会作为上一个yield表达式的返回值；")]),a("li",[t._v("yield后面的表达式，只有当调用next方法时，内部指针指向该语句时才会执行，即"),a("code",[t._v("惰性求值")]),t._v("；")])])]),a("li",[a("p",[t._v("使用注意项")]),a("ul",[a("li",[t._v("yield必须出现在Generator函数中，否则会报错")]),a("li",[t._v("yield出现在另一个表达式中，必须放在小括号里面")]),a("li",[t._v("箭头函数不能做generator 且 generator不能跨函数")])])]),a("li",[a("p",[t._v("可以用Generator为对象添加"),a("code",[t._v("Symbol.iterator")]),t._v("属性，便利对象具有Iteraotor接口，即可被"),a("code",[t._v("...")]),t._v("运算符遍历。")])]),a("li",[a("p",[a("code",[t._v("for...of")]),t._v(" 一旦next()方法的返回对象done为true，for...of循环就会中止，且"),a("code",[t._v("不包含该返回对象")]),t._v("。")])]),a("li",[a("p",[t._v("实例方法"),a("code",[t._v("throw")]),t._v("，可以在函数体外抛出错误；然后在Generator函数体内捕获；但必须至少执行过一次next方法；如果没有执行过next方法，throw方法抛出在函数外部。throw方法捕获后自动执行一次next方法。")])])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("g")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("try")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("g")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    i"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    i"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'error'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 与全局的不要混淆 try{throw new Error('出错了');}catch(e){}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Generator函数体内抛出的错误，也可以被函数体外的"),a("code",[t._v("catch")]),t._v("捕获")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" it "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("try")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    it"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("42")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("一旦执行过程中抛出错误，且没有被内部捕获，就不再执行下去了。此后的"),a("code",[t._v("next")]),t._v("方法将返回{value:undefined, done: true}")]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("实例方法"),a("code",[t._v("return")]),t._v("，可以返回给定的值，并结束遍历；如果没有参数则返回的值为undefined。")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" it "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("如果正在执行try代码块，那么return方法会被推迟到finally代码块执行完再执行。")]),a("ol",{attrs:{start:"9"}},[a("li",[t._v("再Generator内部调用Generator函数，使用"),a("code",[t._v("yield*")]),t._v("，返回遍历器内部对象值；如果不使用yield*，而是使用yield返回的是Iterator遍历器对象；内部Generator函数无return语句时，等同于在generator内部使用了一个"),a("code",[t._v("for...of")]),t._v("循环；反之需要获取"),a("code",[t._v("var v = yield* iterator")]),t._v(" 来"),a("code",[t._v("return")]),t._v("语句的值")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"v: "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" v"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" it "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("ol",{attrs:{start:"10"}},[a("li",[t._v("作为对象属性的generator函数")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("fun")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);