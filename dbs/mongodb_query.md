### 多个条件『逻辑运算』
+ 或 {$or: [{A}, {B}]}   {$in: [A, B]}  {$nin: []}
+ 与 {A, B}
+ $and
+ $not  or取反
+ $nor

### 算术运算 或 段的统计运算
+ $mod

### 数组项查找
+ {key: {$elemMatch:{innerKey:condition}}}  符号条件的项
+ {questions:{$elemMatch:{limit_time:{$exists:true}}}}

### 综合
+ $expr
+ {"$where": ()=>{return this为文档}
+ $text
+ $jsonSchema

### 数组 更新
+ {$all: []}  匹配数据中多个元素
+ $size 数组长度
+ $push, 键不存在时会创建
+ $addToSet  组中添加一个元素，存在则不添加
+ $each [] 循环数组元素
+ $pop  尾部删除一具元素, 1/-1为首部元素
+ $pull  删除指定value元素
+ $elemMatch: {多个表达式}
+ 数组中的对象
1. {"key": {innerKey: value}}
2. {"key.innerKey": {condition}}
3. {"key.index.innerKey":{condition}}
4. {"key": {$elemMatch: {innerKey: {condition}}}}

### 配置
1. multi
2. upsert

### 字段更新
1. $currentDate: {key: {$type: "date"/"timestamp"}}
2. $inc
3. $min, $max
4. $mul:{key: 2} 每项乘以2
5. $rename
6. $set
7. $setOnInsert:{key: value} 设置默认值
8. $unset


### 数组更新
+ key.$.field
+ key.$ 第一个匹配项
+ key.$[] 所有元素
+ key.$[].field
+ key.$[identify]
+ $addToSet 向一个数组字段添加值，除非该数组已有该值
+ $pop, $pull, $push, $pushAll, $each, $position, $slice, $sort
+ {$push: {key: {$each: []}}}
+ $position 必须与$each一起使用, 决定push的起始位置

### 是否返回某个字段, {key: 0/1}
+ {key: {$slice: -1}} [0,1] 数组的最后一项元素
+ {"key.$": 1/0}  数组查询结果的第一项
+ "questions.$": 1  纯数组  ???
+ key.innerKey

### 单运算、过滤
+ {$regex: //, $options: "i" }    '(?i)a(?-i)cme' ???
+ $filter
+ $gt $lt $lte  $gte
+ $eq  $ne
+ $exists  $type 类型 【1双精度, 2字符串, 3对象, 4数组, 5二进制, 6未定义, 7ObjectId, 8布尔, 9日期, 10Null, 11正则, 12DBPointer, 13javascript, 14Symbol, 15javascript(有scope), 16长度为32的整数, 17时间戳, 18长度为64整数,19 Decimal128, -1 MinKey, 127 MaxKey】
+   不存在


### 其他方法
+ ObjectId(id).getTimestamp()


### 更新
+ {$set: {key: value}}  更新其中一个字段  unset 删除一个键
+ {$inc: {key: 3}}
+ {$currentDate: {field: true}}
+ 定义 {arrayFilters: ["element": {condition}]}  使用 {$set: {"key.$[element]": value} 对符合条件的所有数组元素
+ 定义 {arrayFilters: ["elem.grade": {condition}]}  使用 {$set: {"key.$[elem].innerKey": value} 对符合条件的数组对象元素

