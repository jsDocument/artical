## 你该知道的类型基础与对象知识

#### 对象是 javascript 的基础

- 主要类型：string, number, boolean, null, undefined, Symbol, object, bigInt
- 简单基本类型：string, number, boolean, null, undefined, Symbol, bigInt
- 哪个能更准确的表示空：null, Object.create(null)---ø, {}

#### 函数是对象的一个子类型，是`一等公民`

- fun.call(基本类型)，原始类型会被转换成对应的对象像素----装箱
- 内置对象：String, Number, Boolean, Object, Function, Array, Date, RegExp, Error
- String, Number字面量进行一写实例方法的操作，会转换成对应的对象，再执行对应的方法
- Object, Array, Function, RegExp 无论是什么形式，都是对象，不是字面量

#### 对象的基本知识

- myObj = Object.Create(obj) 创建一个对象，并把对象的[[prototype]]关联到 obj 对象
- Object.assign 是浅复制，源属性的一些特性不会被复制
- 属性描述符 Object.defineProperty(obj, 'key', options)，用于创建或修改已有属性
  - writable：属性值是否可修改，直接修改属性值会报错
  - configurable：是否可以修改其属性描述符，是一个不可逆的操作；禁止删除该属性；bug：不可修改时，writable 可以从 true 修改为 false，但不可从 false 修改为 true
  - enumerable：for...in 是否可以访问到，也可以 obj.propertyIsEnumerable('key')判断
- 对象属性的不变性
  - 浅不变性：只影响目标对象与直接属性
  - 对象常量：writable: false, configurable: false
  - 禁止扩展：Object.preventExtensions(obj) 不可以增加新的属性
  - Object.seal()会在对象上调用 Object.preventExtensions，并将 configurable:false; 不能新增属性、更改配置、删除属性，可以修改现有属性的值
  - Object.freeze()，调用 Object.seal 并将 writable: false
- 访问描述符----getter, setter 隐藏函数
- 存在性
  - 属性是未定义？还是定义的特殊值？使用 in 判断，会检测直接属性与原型链；hasOwnProperty 只会检测直接属性，Object.getOwnPropertyName()获取所有直接属性，isPropertyOf()
  - 有的不会链接到 Object.property，如用 Object.create(null)创建的
  - -in [- - -，访问的是数组的属性，--2

#### 原型链基础与常见问题

- 隐式原型：所有的引用类型(函数、数组、对象)都有__proto__属性
- 显式原型：所有函数都有 prototype 属性
- 原型对象：拥有 prototype 属性的对象，是在`定义函数`时，被创建原型链直接的关系
- 原型链污染：直接为__proto__添加属性，常见于merge，clone等方法，使得黑客可以增、删、改原型链上的方法或属性，那么程序就可能会因原型链污染而受到DOS、越权等攻击。
- 漏洞的场景：
  - 对象克隆
  - 对象合并
  - 路径设置
- 属性设置与屏蔽：属性不是直接属性，而在原型链上，= 赋值会发生什么？
  - 属性存在其原型链上，但被标记为只读，那么会在对象上直接增加属性，即屏蔽原型链上的该属性
  - 属性存在其原型链上，但被标记为只读，赋值在严格模式下会报错 或 忽略该赋值语句，总之不会发生屏蔽
  - 属性存在其原型链上，属性是一个 setter，赋值会调用 setter
  - 如果想要发生屏蔽，就用 Object.defineProperty赋值
- 链顶端：Object.prototype
- toString, valueOf

#### 数组遍历基础知识

- every, some 中途返回与 break 类似
- for of 增加了迭代器对象 arr[Symbol.iterator]函数

