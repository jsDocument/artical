## 添加索引
+  collection.ensureIndex({field: 1}),  Schema-->index: true, unique: true 唯一  AASchema.index({field: 1},{unique: true})

## 验证
+  定义在Schema上  require, max, min, (eunm, match, maxLength, minLength)  sex: {enum: {message: '`{PATH}`是`${VALUE}`'}}  还有{TYPE}  {MIN}  {MAX}, validate: {validator: fn, message: ''}
+  Schema.path('field').validate(fn, msg)
+  中间件 pre('save')
+  model / doc.validate(cb) / validateSync()
+  ValidatorError---- kind, path, value, message属性

## Doc  联表
+  doc.depopulate('集合')
+  query.populate(path).execPopulate()
+  Model.populate(docs, options, cb)

+  doc.populate(path, cb)
+  doc.populate({path 关联字段, match附加查询条件, select指定的字段[-field]不填充, model关联字段的model 默认使用Schema的ref, options 指定附加的其他查询选项,强排序、条数限制, cb})

## 联表查询 population  会将查询 到的值插入到对应的字段 中，即数据处理
+  Model.find().populate('field').exec(存储)
+  Model.find().populate('field','field1  field2 -field3').exec(存储)  指定返回和不返回的字段
+  populate({path: 'field', select: 返回字段, model: "", match: 匹配表达式, options: {limit: 5}})
+  参数可以是数组

+ path: 关联字段, 可以是字符串，多项
+ select  填充字段  "-field"
+ model    关联字段的model, 无则为Schema的ref
+ match    查询挺想你的
+ options   查询选项

+  `管道:`
+  $project 定义显示与不显示文档字段
+  $match  过滤数据
+  $redact  字段所处的document结构的级别， 与 $cond结合使用；$$DESCEND  当前document所有字段；$$PRUNE 相反；$$KEEP  两者
+  $limit,  $skip,
+  $unwind 将文档中某个数组类型字段分拆成多条，每条包含数组中的一个值，$group 集合中的文档分组,
+  $sort,
+  $geoNear 输出接近某一地理位置的有序文档
+  $sample  随机
+  $lookup 连接操作符，用于连接同一个数据 库中另一个集合，并获取指定的文档
+  $out  必须为最后一个阶段管道，将最后结果写入到指定的collection中
+  $indexStats  返回集合的每个索引使用情况
+  $count  返回的文档数量
+  `options`
+  allowDiskUse   每个阶段管道限制内存100M, 大于则写入临时文件
+  cursor   游标初始批大小, batchSize [方法：hasNext, next, toArray, forEach, map, objsLeftInBatch, itcount, pretty]


## Schema.Virtual  虚拟并不会存储到DB中，格式化和自定义组合属性
+ 如address: { city: {}, street: {}}  , 获取完整  Schema.virtual('address.full')  与 address.set('空白符分隔')


## 中间件(前置和后置钩子), 在Schema级别上指定的
+  文档中间件支持的文档方法：init, validate, save, remove
+  query支持的: count,  find,  findOneAndRemove,  findOneAndUpdate,  update
+  两种钩子---串行、并行  Schema.pre('save', (next)=>{})  串行   Schema.pre('save', true, (next, done)=>{})  并行
+  后置  schema.post('init', (doc)=>{})
+  插件的形式来扩展Schema, AASchema.plugin(fn, options) 或者全局  mongoose.plugin(plugins)


## db.runCommand({aggregate: "collection", pipeline: [aggregate配置]})



## 聚合函数计算  db.collection.aggregate([{$group: {\_id: '$field', var: {$sum: '$field'}}}]), \_id必须，作为分组的依据  `管道 或 筛选结果`  很多都用于$project 和 $group的配置   $field.key  数组对象
`管道`
+  $addFields,   添加新字段到存在的文档，不可以用此方法已存在的数组添加元素
+  $bucket,
+  $bucketAuto,
+  $collStats,
+  $count,   查询的结果的数量 [{$match},{$count: "var"}]  并将个数返回到var字段上,  与 $match结合使用
+  $currentOp,
+  $facet,
+  $geoNear,    返回一些坐标值，按距离指定点距离由近到远进行排序
+  $graphLookup,
+  $group,
+  $indexStats,
+  $limit,    限制
+  $listLocalSessions,
+  $listSessions,
+  $lookup,  即联表populate查询 {from: collection关联的集合名, localField需查找的字段, foreignField另一个集合需要关联的字段, as: var输出的字段 名}  使用as变量："$var"
+  $match,  {$match: {field: "val"}}   筛选匹配
+  $out,    创建一个新的collection或更新已有collection [{$out: "newCollection"}]
+  $project,   {$project: {field: 1/0}}   修改数据流中的文档结构
+  $redact,    取反？？？？
+  $replaceRoot,
+  $sample,   随机返回一条数据
+  $skip,    跳过
+  $sort,    排序
+  $sortByCount,
+  $unwind,     拆分数组
+  $currentOp


`$ 等于一个字段的路径`
`表达式 即计算`
+  $avg    非数字返回null,  {$avg:"$field"} 对field数组值进行相加再求平均，或$group中，相同组的数据相加再求平均
+  $abs,   {var: {$abs: value/field}}
+  $pow,    [n, n]
+  $sqrt,    求平方
+  $ln,    对数  Math.E
+  $log,    [number, base]  幂
+  $log10,
+  $multiply,   [a,b,...]
+  $add   {var: {$add: ["$field1", "$field2"/ Number/ Date]}}
+  $divide,    ["$field", N]
+  $mod,      [a,b]
+  $trunc,    取整
+  $ceil,   向上取整
+  $floor,   向下取整
+  $exp,   指数, null/NaN
+  $subtract,   相减，可以为数字和日期(milliseconds)  日期-Number-->日期


`数组`
+  $size  返回数组长度
+  $arrayElemAt,   返回数组当中指定下标的元素 [array, index]
+  $arrayToObject   将数组长度为2[a,b]的转换为 {"k": a, "v":b}形式的对象， {a:b}
+  $objectToArray,   将{a:b} 转换为 [{"k": a,"v":b}]
+  $allElementsTrue,    [array]  数组项中所有转为布尔都为true时，返回true
+  $anyElementTrue,
+  $indexOfArray,   [array, search value, start, end]
+  $concatArrays,   数组进行合并，单次
+  $isArray,  [expression]  expression是否为数组

+  $map,   {result:{$map: {input: "数组$field", as, in    }  }}
+  $push,   {表达式}  将表达式结果以数组返回   ******
+  $in,      [less, array express] 前者是否在后者中

+  $range,   [start, end, step]  返回从开始到结束循环到的数字数组

+  $reduce,   {input: array, initialValue: exp初始累积值, in: exp} 每个元素上应用表达式，$$this代表input的元素, $$value代表初始值
+  $reverseArray,   单层反转数组

+  $setDifference,   [Array--A, Array--B]  返回B与A不同的元素的集合，A为空时，返回B, B为空时返回空

+  $setEquals,    [A, B, ...] 比较B中的元素，A中都有
+  $setIntersection,    [A, B, ...] 返回B中的元素，A中也有的元素, A或B为空时，返回空
+  $setIsSubset,   [A,B]  判断A是B的子元素
+  $setUnion,      [A,B,...]   取所有组中的元素，合并并去重

+  $slice,   [array, position/省略时为0, n]  position大于数组长度，返回空数组, 为负时，从结尾处开始，绝对值大于数组长度时，从数组开始处开始
+  $split,   [string, delimiter]

+  $type


`组聚合操作符`
+  $addToSet,   返回一个唯一值的数组，只能用在$group中  [{$group: {id:{}, var: {$addToSet: "$field"}}}]
+  $first   集合中第一个数据, 在$group中时，应该使用$sort
+  $last
+  $min,
+  $max,   返回$group 一组中 或 数组中中最大
+  $sum   {var: {$sum: "$field" / number}}  字段的和  返回组合中所有值的合



`逻辑`
+  $and,  [a,b,c]
+  $not,   [a]
+  $or,





`字符串`
+  $concat,  ["$field","str"]  相连接，一个为null，则返回null
+  $indexOfBytes,   与数组查找类似  Number, -1, null
+  $indexOfCP,    与上面类似  Number, -1, Error, null
+  $strcasecmp,  字符串比较 [str, str1]  str大于str1---1, 0, -1
+  $substr,      [str, start, length+\<-1为结束处>]
+  $substrBytes,  [str, index, count]   按字节截取，如果取的不是完整字符，则报错
+  $substrCP,      [str, index非负, count非负]  按字符截取字符串
+  $toLower,
+  $toUpper,


+  $strLenBytes,    字符串的字节数
+  $strLenCP,      字符串长度



`搜索`
+  $text    {$text: {$seatch: , $language: , $caseSensitive: true, $diacriticSensitive: true}}
+  $meta,  "textScore"   ????



`日期`
+  $dateFromParts,    转为date格式
+  $dateToParts,   将日期转为一个年、月、日、时、分、秒的格式
+  $dateFromString,  {dateString: "$date", timezone: ''}  转为统一date格式
+  $dateToString,      {format:"%Y-%m-%d", date,timezone}

+  $dayOfMonth,    1~31日，对格式有要求, 可以用new Date("")函数
+  $month,   月   1~12

+  $dayOfWeek,    1~7   星期几
+  $isoDayOfWeek,  1~7
+  $isoWeek,     1~53
+  $week,    返回一个日期的星期   {var: {$week: field}}  `需变量`

+  $dayOfYear,     1~366
+  $isoWeekYear,    日期中的年
+  $year,   返回一个日期中的年   `需变量`   年
+  $hour,     时  0~23
+  $minute,    分
+  $second,    秒
+  $millisecond,   0~999


`条件`
+  $cond,  {if: {}, then: {}, else: {}}  或 $cond: [{},"",""]
+  $ifNull,    ["$field","替换的表达式"]
+  $filter,  {input: [], as: "var"变量代表input的每个元素, cond: 引用 "$$var" 为普通判断表达式}







`比较`
+  $eq,
+  $ne,   [a,b]
+  $gt,    大于
+  $gte,
+  $lt,
+  $lte,    {$eq:  [0, 5]} ???  {$eq: [{field 运算}, 80]}  运算结果等于80
+  $cmp,    比较两个值返回一个整数结果



`变量`
+  $let,   {result:{$let: {   {vars: {var1: exp,...}, in: 表达式处理}   }   }}   使用变量：$$var1
+  $literal,    {expression}  原样返回它的表达式



`对象`
+  $mergeObjects,  [obj, obj1] 合并多个对象为一个, 同样的Key, 合并时取最后一项的值


















`操作数`
+  $stdDevPop,
+  $stdDevSamp,



+  $switch,    {$switch:{ branches: [{case: {..., then: "express"}}...], default: "expression"}}


+  $type,    返回类型 `需变量`

+  $zip     将多个数组合并   `需变量` {$zip: {inputs:[a,b,c], useLongestLength: true, default: []}}  inputs为多个数组  *****

