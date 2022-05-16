#### init_data

##### $data

+ 旧数据中, 新数据不存在的属性, 删除该属性
+ 定义对象属特性, get取this.\_data, set更新this.\_data
+ 删除旧数据的监听的当前Vm
+ observe(新数据)
+ 通知订阅者更新 this.\_digest()

##### 初始化data

+ set(data, key, value)
+ 循环添加属性特性
+ 监听数据

##### props

+ compileProps(el, propOptions) 循环props, 定义其结构化的数据格式props

```js
{
    name属性名
    path name的驼峰式
    options
    mode
    raw 属性值的表达式
    value 表达式部分
    filters
    optimizedLiteral 常量且没有filter
    dynamic
    parentPath value表达式
}
```

+ makePropsLinkFn(props)
+ linker:
    1. vm.\_context存在, 进行directive绑定--\_bindDir
    2. 如果有coerce配置, 则对value进行该运算;
    3. 类型验证


##### 初始化computed

+ 定义其属性特性
+ get是个订阅者, lazy watcher, 执行获取watcher值与更新
+ set为用户定义或空函数

##### 初始化method

+ 循环为其添加上下文绑定

##### 初始化metas

+ 循环对其进行监听
