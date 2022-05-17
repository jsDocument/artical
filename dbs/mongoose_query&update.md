### 导读：
+ `query`
+ `queryStream`
+ `document`
+ `aggregate`
+ `model`

+ `promise`
+ `utils`
+ `browser`

+ `virtualtype`
+ `collection`
+ `schematype`
+ `types`
+ `schema`

+ `coursor`--QueryCursor, AggregentionCursor
+ `collection`
+ `error`




### Query([options], [model], [conditions], [collection]),




### query相关查找操作符
##### 比较
+  $eq,
+  $gt,
+  $gte,
+  $in,    在数组当中
+  $nin,   不在数组当中
+  $lt,
+  $lte,
+  $ne,

##### 逻辑操作
+  $and,
+  $not,
+  $nor,   文档中所有失败的匹配？？？？
+  $or,

##### 元素
+  $exists,
+  $type,  使用：{$text: {$seatch: , $language: , $caseSensitive: true, $diacriticSensitive: true}}


##### 表达式
+  $expr,      使用aggregate表达式 
+  $jsonSchema,  有很多查找属性，验证不匹配的JSON Schema
+  $mod,   {$mod: [4, 0]}  除4求余为0
+  $regex,
+  $text,     文本查找{$search, $language, $caseSensitive, $diacriticSensitive}
+  $where,

##### 地理位置
+  $geoIntersects,
+  $geoWithin,
+  $near,
+  $near,
+  $nearSphere,


#####  数组
+  $all,    匹配数组包含所有元素
+  $elemMatch,    
+  $size,  取数组中的一个项，下标，  返回长度为2的数组

##### 字节
+  $bitsAllClear,
+  $bitsAllSet,
+  $bitsAnySet,


##### 注释
+  $comment,



##### Project操作
+  $,   数组中匹配的第一个元素
+  $elemMatch,   数组中的字段 
+  $meta,
+  $slice   5, -5, [-10, 5]  限制返回数组长度


## 更新数据
+ $set

## 处理查找条件
+ $where(fn) / query.where('field', 'value').gt(21)
+ $regex / query.regex(field, reg) / where().regex(reg)
+ query.or(array)
+ query.nor(array)
+ gt, lt, gte, lte----{field: {$gt: 21}}  

## 筛选查找结果
+ .equals(val)
+ $ne

+ read()
+ slaveOk() 

## 查找结果处理Document


## 常用
+ skip
+ limit
+ sort('field -field1'), ({field: 'asc', field: -1/1})
+ stream().pipe(res) 流  stream的事件data, error, close
+ match {$match: {cond: val}}





### 更新数据 (更新或创建字段并更新值) update方法中使用的
+ $set 用特殊值替换字段值，或创建一个新字段, {$set: {整条数据}}  或 {$set: {"field.sub": val}}  数组：{$set: {"arr.1": val}}
+ `$currentDate 设置一个字段以当前时间 或 时间戳  {$currentDate: {field: true / {$types: "timestamp"/"date"}}}`
+ $inc 递增或递减 {$inc: {field: -2, field: 1}}
+ $min  与现有数据比较，更新的数据如果小，则替换现有数据，操作日期比较好用。
+ $max
+ $mul   更新或创建值为0, 与现有值相乘的结果,  相乘
    - NumberLong(0), NumberInt(0)
+ $rename  换一个名字，类似于执行了$unset 与 $set
+ $setOnInsert  插入新数据起作用，更新不起作用， upsert:true
+ $unset   {$unset: {field: ""}}


### 更新数组
+ $  标识一个数组中的对象属性更新 修改第一个匹配的项 "field.$" ？ {$set: {"field.$.field": val}}, 与查找语句$elemMatch相似, 多个属性时用h$elemMatch
+ {$set: {field.$[]: val}} 更新数组所有元素值为val, 必须超过一个且为内嵌数组
  {$inc: {"field.$[]": 10}}  field的数组元素为简单类型，都增加10
+ {$set: {field.$[<identifier>]: value}, {arrayFilters: [<identifier>:<condition>]}} 更新内嵌型数组
    {$inc: { "field.$[].sub.$[var]": val}}, {arrayFilters: [{"var": {$equal: 10}}], multi: true}  var表示sub的所有值
    {$set: {"field.$[var]": val}, {...}  }
    {$set: {"field.$[var].sub": val}, {arrayFilters: [{ "var.sub1" : <condition> }]}  }
+ $addToSet  向数组添加一个数据，除非数据已存在,  {$addToSet: {field: [val, val]}} 向字段添加了一个数组
+ $each 循环添加  {$addToSet: {$each: [val, val, val]}} 其中有某个项为与数据库数据相同，只加不存在的数据  `单表达式`
+ $pop  移除第一个-1或最后一个1
+ $pull  移除数组中一个值或符合条件的所有值  {$pull: {field: {$in: []}, field: val}}   因为已经是访问每个项了，故不用$elemMatch作为每件，更复杂的数据可以用
+ $pullAll  移除所有匹配的数组项  {$pullAll: [list]}
+ $push   字段不是数组，失败，如果值是一个数组，将作为数组的一个元素追加到整个数组，可以与$each一起追加多项
+ $position 指定数组下标 {$push: {field: {$each: [],  $position: 3} }} -1代表last之前, 如果大于或等于数组长度, 从数组开始处,  与$each结合使用
+ $slice  修改时必须与$each结合使用, 0 正 负 值
+ $sort 1 / -1  修改时必须与$each结合使用, 修改元素，但不是文档   {$push: {field: {$each: [], $sort: {sub: -1}, $slice: 3 }} 根据sub修改field的排序, 只保留前三项元素
}
 
+ $bit  位运算 {$bit: {field: {and: 5}}}

`project, a read operation`


### Query 与 write常用方法
+ findAndModify({query, sort, remove, update, new, fields, upsert .....})
+ eval
+ deletes
+ insert
+ update
+ getMore
+ getLastError, getPrevError, resetError


#### 查询修改
+  $comment,
+  $explain,
+  $hint,
+  $maxScan,
+  $max,
+  $maxTimeMS,
+  $min,
+  $orderby,
+  $query,
+  $returnKey,
+  $showDiskLoc,
+  $natural,


+ Query#read(pref, [tags]),
+ Query#regex([path], val),
+ Query#remove([filter], [callback]),
+ Query#replaceOne([criteria], [doc], [options], [callback]),
+ Query#select(arg),
+ Query#selected(),
+ Query#selectedExclusively(),
+ Query#selectedInclusively(),
+ Query#setOptions(options),
+ Query#size([path], val),
+ Query#skip(val),
+ Query#slaveOk(v),
+ Query#slice([path], val),
+ Query#slice([path], [val]),
+ Query#snapshot(),
+ Query#sort(arg),
+ Query#stream([options]),
+ Query#tailable(bool, [opts], [opts.numberOfRetries], [opts.tailableRetryInterval]),
+ Query#then([resolve], [reject]),
+ Query#toConstructor(),
+ Query#update([criteria], [doc], [options], [options.multipleCastError], [callback]),
+ __Query#updateMany([criteria], [doc], [options], [callback]),
+ Query#updateOne([criteria], [doc], [options], [callback]),
+ Query#within(),
+ Query.\_ensurePath(method),
+ Query.\_fieldsForExec(),
+ Query.\_updateForExec(),
+ Query#use$geoWithin,








## 处理文档
+ remove(query,{
     justOne: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }, cb)
+ Model.update(conditions, doc, [optiions], cb)
+ update(query, update, options) ******
+ updateMany
+ updateOne

+ Query#\_applyPaths(),
+ Query#\_castFields(fields),
+ Query#\_count([callback]),
+ Query#\_find([callback]),
+ Query#\_findOne([callback]),
+ Query#\_optionsForExec(model),
+ Query#$where(js),
+ Query#all([path], val),   `{field: {$all: []}}更新 更新一条数组数据 或 多条数据,  {"field.sub":{$all: [val]}}`
+ Query#and(array),     `{$and: [{field: val}, {field: val}]}`
+ Query#batchSize(val),
+ Query#box(val, Upper),
+ Query#canMerge(conds),
+ Query#cast(model, [obj]),
+ Query#catch([reject]),
+ Query#center(),
+ Query#centerSphere([path], val),
+ Query#circle([path], area),
+ Query#collation(value),
+ Query#comment(val),
+ Query#count([criteria], [callback]),
+ Query#cursor([options]),
+ Query#deleteMany([filter], [callback]),
+ Query#deleteOne([filter], [callback]),
+ Query#distinct([field], [criteria], [callback]),
+ Query#elemMatch(path, criteria),   `数组里有对象元素的匹配，与all一起使用  field{$all: [{$elemMath: {subField: v}}]}`
+ Query#equals(val),
+ Query#error(err),
+ Query#exec([operation], [callback]),
+ Query#exists([path], val),        `单表达式`
+ Query#find([filter], [callback]),
+ Query#findOne([filter], [projection], [options], [callback]),
+ Query#findOneAndRemove([conditions], [options], [options.passRawResult], [options.strict], [callback]),
+ Query#findOneAndUpdate([query], [doc], [options], [options.passRawResult], [options.strict], [options.multipleCastError], [callback]),
+ Query#geometry(object),
+ Query#getQuery(),
+ Query#getUpdate(),
+ Query#gt([path], val),     `单表达式`
+ Query#gte([path], val),     `单表达式`
+ Query#hint(val),
+ Query#in([path], val),     `单表达式`
+ Query#intersects([arg]),
+ Query#lean(bool),
+ Query#limit(val),
+ Query#lt([path], val),     `单表达式`
+ Query#lte([path], val),     `单表达式`
+ Query#maxDistance([path], val),
+ Query#maxscan(),
+ Query#maxScan(val),
+ Query#merge(source),
+ Query#merge(source),
+ Query#mod([path], val),
+ Query#mongooseOptions(options),
+ Query#ne([path], val),    `单表达式`     `与equal相反, 可以与$数组操作结合`
+ Query#near([path], val),
+ Query#nearSphere(),
+ Query#nin([path], val),   `与in相反, 可以与$数组操作结合`
+ Query#nor(array),    `与$and用法相同, 结合使用 $and: [  $or: [{}], $or: [{}]  ]`
+ Query#or(array),     
+ Query#polygon([path], [coordinatePairs...]),
+ Query#populate(path, [select], [model], [match], [options]),


+ $not      `可以与$数组操作结合`



+ within({field: [], field: val})  ({field: [ [],  []   ]})  或  （[], [], []）
+ geoWithin


## 由stream()方法返回QueryStream的方法
+ destory(err)
+ pause()
+ pipe()
+ resume()
+ paused()
+ readable()


## Model
+ $where  where
+ cb中的doc.increment(), save()
+ model() 其他Model实例
+ remove()
+ save()
+ aggregate()
+ bulkWrite()
+ count()
+ create()
+ createIndex()
+ deleteMany()
+ deleteOne()
+ discriminator()
+ ensureIndexes()
+ find()
+ findOne()
+ findById()
+ findByIdAndRemove()
+ findOneAndRemove()
+ findByIdAndUpdate()
+ findOneAndUpdate()
+ distinct()
+ geoNear()
+ geoSearch()
+ hydrate()
+ init()
+ insertMany()
+ mapReduce()
+ populate()
+ remove()
+ replaceOne()
+ translateAliases()
+ update()
+ updateMany()
+ updateOne()