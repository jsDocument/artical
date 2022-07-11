### root

1. 立即执行函数
2. 把 _ 挂到全局对象上，要适配多端环境，适配严格模式 ---- 判断 window, window.window 或 global, global.global
3. webWorker 无法访问 window 与 global，可以通过 window.self访问； self, self.self
4. node 的 vm 模块中，不存在window，也不存在global变量；this
5. 微信小程序 {}

```js
var root = (typeof self == 'object' && self.self == self && self) ||
           (typeof global == 'object' && global.global == global && global) ||
           this ||
           {};
```

### 函数对象-----支持类似面向对象的方式调用

```js
var _ = function() {}
root._ = _;


// 调用
_('123').resverse()
_.each([1,2,3], ()=>{})
_([1,2,3]).each(()=>{})
```

1. _ 不是一个字面量，而是一个函数


_.mixin：将 _上的方法复制到 _.prototype 上
_.functions：获得 _ 上的方法

```js
_.functions = function(obj) {
    var names = [];
    for (var key in obj) {
        if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
};

var ArrayProto = Array.prototype;
var push = ArrayProto.push;

_.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
        var func = _[name] = obj[name];
        _.prototype[name] = function() {
            var args = [this._wrapped];
            push.apply(args, arguments);
            return func.apply(_, args);
        };
    });
    return _;
};

_.mixin(_);
```

### 导出

```js
if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
        exports = module.exports = _;
    }
    exports._ = _;
} else {
    root._ = _;
}
```

在 nodejs 中，exports 是 module.exports 的一个引用，当你使用了 module.exports = function(){}，实际上覆盖了 module.exports，但是 exports 并未发生改变，为了避免后面再修改 exports 而导致不能正确输出，就写成这样，将两者保持统一。

```html
<div id="exports"></div>
```

 exports.nodeType 判断是加了上面的 HTML，就会生成一个 window.exports 全局变量
