(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{261:function(e,v,_){"use strict";_.r(v);var i=_(0),l=Object(i.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("h2",{attrs:{id:"添加索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#添加索引"}},[e._v("#")]),e._v(" 添加索引")]),e._v(" "),_("ul",[_("li",[e._v("collection.ensureIndex({field: 1}),  Schema--\x3eindex: true, unique: true 唯一  AASchema.index({field: 1},{unique: true})")])]),e._v(" "),_("h2",{attrs:{id:"验证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),_("ul",[_("li",[e._v("定义在Schema上  require, max, min, (eunm, match, maxLength, minLength)  sex: {enum: {message: '"),_("code",[e._v("{PATH}")]),e._v("是"),_("code",[e._v("${VALUE}")]),e._v("'}}  还有{TYPE}  {MIN}  {MAX}, validate: {validator: fn, message: ''}")]),e._v(" "),_("li",[e._v("Schema.path('field').validate(fn, msg)")]),e._v(" "),_("li",[e._v("中间件 pre('save')")]),e._v(" "),_("li",[e._v("model / doc.validate(cb) / validateSync()")]),e._v(" "),_("li",[e._v("ValidatorError---- kind, path, value, message属性")])]),e._v(" "),_("h2",{attrs:{id:"doc-联表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doc-联表"}},[e._v("#")]),e._v(" Doc  联表")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("doc.depopulate('集合')")])]),e._v(" "),_("li",[_("p",[e._v("query.populate(path).execPopulate()")])]),e._v(" "),_("li",[_("p",[e._v("Model.populate(docs, options, cb)")])]),e._v(" "),_("li",[_("p",[e._v("doc.populate(path, cb)")])]),e._v(" "),_("li",[_("p",[e._v("doc.populate({path 关联字段, match附加查询条件, select指定的字段[-field]不填充, model关联字段的model 默认使用Schema的ref, options 指定附加的其他查询选项,强排序、条数限制, cb})")])])]),e._v(" "),_("h2",{attrs:{id:"联表查询-population-会将查询-到的值插入到对应的字段-中，即数据处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#联表查询-population-会将查询-到的值插入到对应的字段-中，即数据处理"}},[e._v("#")]),e._v(" 联表查询 population  会将查询 到的值插入到对应的字段 中，即数据处理")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("Model.find().populate('field').exec(存储)")])]),e._v(" "),_("li",[_("p",[e._v("Model.find().populate('field','field1  field2 -field3').exec(存储)  指定返回和不返回的字段")])]),e._v(" "),_("li",[_("p",[e._v("populate({path: 'field', select: 返回字段, model: \"\", match: 匹配表达式, options: {limit: 5}})")])]),e._v(" "),_("li",[_("p",[e._v("参数可以是数组")])]),e._v(" "),_("li",[_("p",[e._v("path: 关联字段, 可以是字符串，多项")])]),e._v(" "),_("li",[_("p",[e._v('select  填充字段  "-field"')])]),e._v(" "),_("li",[_("p",[e._v("model    关联字段的model, 无则为Schema的ref")])]),e._v(" "),_("li",[_("p",[e._v("match    查询挺想你的")])]),e._v(" "),_("li",[_("p",[e._v("options   查询选项")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("管道:")])])]),e._v(" "),_("li",[_("p",[e._v("$project 定义显示与不显示文档字段")])]),e._v(" "),_("li",[_("p",[e._v("$match  过滤数据")])]),e._v(" "),_("li",[_("p",[e._v("$redact  字段所处的document结构的级别， 与 $cond结合使用；$$DESCEND  当前document所有字段；$$PRUNE 相反；$$KEEP  两者")])]),e._v(" "),_("li",[_("p",[e._v("$limit,  $skip,")])]),e._v(" "),_("li",[_("p",[e._v("$unwind 将文档中某个数组类型字段分拆成多条，每条包含数组中的一个值，$group 集合中的文档分组,")])]),e._v(" "),_("li",[_("p",[e._v("$sort,")])]),e._v(" "),_("li",[_("p",[e._v("$geoNear 输出接近某一地理位置的有序文档")])]),e._v(" "),_("li",[_("p",[e._v("$sample  随机")])]),e._v(" "),_("li",[_("p",[e._v("$lookup 连接操作符，用于连接同一个数据 库中另一个集合，并获取指定的文档")])]),e._v(" "),_("li",[_("p",[e._v("$out  必须为最后一个阶段管道，将最后结果写入到指定的collection中")])]),e._v(" "),_("li",[_("p",[e._v("$indexStats  返回集合的每个索引使用情况")])]),e._v(" "),_("li",[_("p",[e._v("$count  返回的文档数量")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("options")])])]),e._v(" "),_("li",[_("p",[e._v("allowDiskUse   每个阶段管道限制内存100M, 大于则写入临时文件")])]),e._v(" "),_("li",[_("p",[e._v("cursor   游标初始批大小, batchSize [方法：hasNext, next, toArray, forEach, map, objsLeftInBatch, itcount, pretty]")])])]),e._v(" "),_("h2",{attrs:{id:"schema-virtual-虚拟并不会存储到db中，格式化和自定义组合属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#schema-virtual-虚拟并不会存储到db中，格式化和自定义组合属性"}},[e._v("#")]),e._v(" Schema.Virtual  虚拟并不会存储到DB中，格式化和自定义组合属性")]),e._v(" "),_("ul",[_("li",[e._v("如address: { city: {}, street: {}}  , 获取完整  Schema.virtual('address.full')  与 address.set('空白符分隔')")])]),e._v(" "),_("h2",{attrs:{id:"中间件-前置和后置钩子-在schema级别上指定的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中间件-前置和后置钩子-在schema级别上指定的"}},[e._v("#")]),e._v(" 中间件(前置和后置钩子), 在Schema级别上指定的")]),e._v(" "),_("ul",[_("li",[e._v("文档中间件支持的文档方法：init, validate, save, remove")]),e._v(" "),_("li",[e._v("query支持的: count,  find,  findOneAndRemove,  findOneAndUpdate,  update")]),e._v(" "),_("li",[e._v("两种钩子---串行、并行  Schema.pre('save', (next)=>{})  串行   Schema.pre('save', true, (next, done)=>{})  并行")]),e._v(" "),_("li",[e._v("后置  schema.post('init', (doc)=>{})")]),e._v(" "),_("li",[e._v("插件的形式来扩展Schema, AASchema.plugin(fn, options) 或者全局  mongoose.plugin(plugins)")])]),e._v(" "),_("h2",{attrs:{id:"db-runcommand-aggregate-collection-pipeline-aggregate配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#db-runcommand-aggregate-collection-pipeline-aggregate配置"}},[e._v("#")]),e._v(' db.runCommand({aggregate: "collection", pipeline: [aggregate配置]})')]),e._v(" "),_("h2",{attrs:{id:"聚合函数计算-db-collection-aggregate-group-id-field-var-sum-field-id必须，作为分组的依据-管道-或-筛选结果-很多都用于-project-和-group的配置-field-key-数组对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数计算-db-collection-aggregate-group-id-field-var-sum-field-id必须，作为分组的依据-管道-或-筛选结果-很多都用于-project-和-group的配置-field-key-数组对象"}},[e._v("#")]),e._v(" 聚合函数计算  db.collection.aggregate([{$group: {_id: '$field', var: {$sum: '$field'}}}]), _id必须，作为分组的依据  "),_("code",[e._v("管道 或 筛选结果")]),e._v("  很多都用于$project 和 $group的配置   $field.key  数组对象")]),e._v(" "),_("p",[_("code",[e._v("管道")])]),e._v(" "),_("ul",[_("li",[e._v("$addFields,   添加新字段到存在的文档，不可以用此方法已存在的数组添加元素")]),e._v(" "),_("li",[e._v("$bucket,")]),e._v(" "),_("li",[e._v("$bucketAuto,")]),e._v(" "),_("li",[e._v("$collStats,")]),e._v(" "),_("li",[e._v('$count,   查询的结果的数量 [{$match},{$count: "var"}]  并将个数返回到var字段上,  与 $match结合使用')]),e._v(" "),_("li",[e._v("$currentOp,")]),e._v(" "),_("li",[e._v("$facet,")]),e._v(" "),_("li",[e._v("$geoNear,    返回一些坐标值，按距离指定点距离由近到远进行排序")]),e._v(" "),_("li",[e._v("$graphLookup,")]),e._v(" "),_("li",[e._v("$group,")]),e._v(" "),_("li",[e._v("$indexStats,")]),e._v(" "),_("li",[e._v("$limit,    限制")]),e._v(" "),_("li",[e._v("$listLocalSessions,")]),e._v(" "),_("li",[e._v("$listSessions,")]),e._v(" "),_("li",[e._v('$lookup,  即联表populate查询 {from: collection关联的集合名, localField需查找的字段, foreignField另一个集合需要关联的字段, as: var输出的字段 名}  使用as变量："$var"')]),e._v(" "),_("li",[e._v('$match,  {$match: {field: "val"}}   筛选匹配')]),e._v(" "),_("li",[e._v('$out,    创建一个新的collection或更新已有collection [{$out: "newCollection"}]')]),e._v(" "),_("li",[e._v("$project,   {$project: {field: 1/0}}   修改数据流中的文档结构")]),e._v(" "),_("li",[e._v("$redact,    取反？？？？")]),e._v(" "),_("li",[e._v("$replaceRoot,")]),e._v(" "),_("li",[e._v("$sample,   随机返回一条数据")]),e._v(" "),_("li",[e._v("$skip,    跳过")]),e._v(" "),_("li",[e._v("$sort,    排序")]),e._v(" "),_("li",[e._v("$sortByCount,")]),e._v(" "),_("li",[e._v("$unwind,     拆分数组")]),e._v(" "),_("li",[e._v("$currentOp")])]),e._v(" "),_("p",[_("code",[e._v("$ 等于一个字段的路径")]),e._v(" "),_("code",[e._v("表达式 即计算")])]),e._v(" "),_("ul",[_("li",[e._v('$avg    非数字返回null,  {$avg:"$field"} 对field数组值进行相加再求平均，或$group中，相同组的数据相加再求平均')]),e._v(" "),_("li",[e._v("$abs,   {var: {$abs: value/field}}")]),e._v(" "),_("li",[e._v("$pow,    [n, n]")]),e._v(" "),_("li",[e._v("$sqrt,    求平方")]),e._v(" "),_("li",[e._v("$ln,    对数  Math.E")]),e._v(" "),_("li",[e._v("$log,    [number, base]  幂")]),e._v(" "),_("li",[e._v("$log10,")]),e._v(" "),_("li",[e._v("$multiply,   [a,b,...]")]),e._v(" "),_("li",[e._v('$add   {var: {$add: ["$field1", "$field2"/ Number/ Date]}}')]),e._v(" "),_("li",[e._v('$divide,    ["$field", N]')]),e._v(" "),_("li",[e._v("$mod,      [a,b]")]),e._v(" "),_("li",[e._v("$trunc,    取整")]),e._v(" "),_("li",[e._v("$ceil,   向上取整")]),e._v(" "),_("li",[e._v("$floor,   向下取整")]),e._v(" "),_("li",[e._v("$exp,   指数, null/NaN")]),e._v(" "),_("li",[e._v("$subtract,   相减，可以为数字和日期(milliseconds)  日期-Number--\x3e日期")])]),e._v(" "),_("p",[_("code",[e._v("数组")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("$size  返回数组长度")])]),e._v(" "),_("li",[_("p",[e._v("$arrayElemAt,   返回数组当中指定下标的元素 [array, index]")])]),e._v(" "),_("li",[_("p",[e._v('$arrayToObject   将数组长度为2[a,b]的转换为 {"k": a, "v":b}形式的对象， {a:b}')])]),e._v(" "),_("li",[_("p",[e._v('$objectToArray,   将{a:b} 转换为 [{"k": a,"v":b}]')])]),e._v(" "),_("li",[_("p",[e._v("$allElementsTrue,    [array]  数组项中所有转为布尔都为true时，返回true")])]),e._v(" "),_("li",[_("p",[e._v("$anyElementTrue,")])]),e._v(" "),_("li",[_("p",[e._v("$indexOfArray,   [array, search value, start, end]")])]),e._v(" "),_("li",[_("p",[e._v("$concatArrays,   数组进行合并，单次")])]),e._v(" "),_("li",[_("p",[e._v("$isArray,  [expression]  expression是否为数组")])]),e._v(" "),_("li",[_("p",[e._v('$map,   {result:{$map: {input: "数组$field", as, in    }  }}')])]),e._v(" "),_("li",[_("p",[e._v("$push,   {表达式}  将表达式结果以数组返回   ******")])]),e._v(" "),_("li",[_("p",[e._v("$in,      [less, array express] 前者是否在后者中")])]),e._v(" "),_("li",[_("p",[e._v("$range,   [start, end, step]  返回从开始到结束循环到的数字数组")])]),e._v(" "),_("li",[_("p",[e._v("$reduce,   {input: array, initialValue: exp初始累积值, in: exp} 每个元素上应用表达式，$$this代表input的元素, $$value代表初始值")])]),e._v(" "),_("li",[_("p",[e._v("$reverseArray,   单层反转数组")])]),e._v(" "),_("li",[_("p",[e._v("$setDifference,   [Array--A, Array--B]  返回B与A不同的元素的集合，A为空时，返回B, B为空时返回空")])]),e._v(" "),_("li",[_("p",[e._v("$setEquals,    [A, B, ...] 比较B中的元素，A中都有")])]),e._v(" "),_("li",[_("p",[e._v("$setIntersection,    [A, B, ...] 返回B中的元素，A中也有的元素, A或B为空时，返回空")])]),e._v(" "),_("li",[_("p",[e._v("$setIsSubset,   [A,B]  判断A是B的子元素")])]),e._v(" "),_("li",[_("p",[e._v("$setUnion,      [A,B,...]   取所有组中的元素，合并并去重")])]),e._v(" "),_("li",[_("p",[e._v("$slice,   [array, position/省略时为0, n]  position大于数组长度，返回空数组, 为负时，从结尾处开始，绝对值大于数组长度时，从数组开始处开始")])]),e._v(" "),_("li",[_("p",[e._v("$split,   [string, delimiter]")])]),e._v(" "),_("li",[_("p",[e._v("$type")])])]),e._v(" "),_("p",[_("code",[e._v("组聚合操作符")])]),e._v(" "),_("ul",[_("li",[e._v('$addToSet,   返回一个唯一值的数组，只能用在$group中  [{$group: {id:{}, var: {$addToSet: "$field"}}}]')]),e._v(" "),_("li",[e._v("$first   集合中第一个数据, 在$group中时，应该使用$sort")]),e._v(" "),_("li",[e._v("$last")]),e._v(" "),_("li",[e._v("$min,")]),e._v(" "),_("li",[e._v("$max,   返回$group 一组中 或 数组中中最大")]),e._v(" "),_("li",[e._v('$sum   {var: {$sum: "$field" / number}}  字段的和  返回组合中所有值的合')])]),e._v(" "),_("p",[_("code",[e._v("逻辑")])]),e._v(" "),_("ul",[_("li",[e._v("$and,  [a,b,c]")]),e._v(" "),_("li",[e._v("$not,   [a]")]),e._v(" "),_("li",[e._v("$or,")])]),e._v(" "),_("p",[_("code",[e._v("字符串")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v('$concat,  ["$field","str"]  相连接，一个为null，则返回null')])]),e._v(" "),_("li",[_("p",[e._v("$indexOfBytes,   与数组查找类似  Number, -1, null")])]),e._v(" "),_("li",[_("p",[e._v("$indexOfCP,    与上面类似  Number, -1, Error, null")])]),e._v(" "),_("li",[_("p",[e._v("$strcasecmp,  字符串比较 [str, str1]  str大于str1---1, 0, -1")])]),e._v(" "),_("li",[_("p",[e._v("$substr,      [str, start, length+<-1为结束处>]")])]),e._v(" "),_("li",[_("p",[e._v("$substrBytes,  [str, index, count]   按字节截取，如果取的不是完整字符，则报错")])]),e._v(" "),_("li",[_("p",[e._v("$substrCP,      [str, index非负, count非负]  按字符截取字符串")])]),e._v(" "),_("li",[_("p",[e._v("$toLower,")])]),e._v(" "),_("li",[_("p",[e._v("$toUpper,")])]),e._v(" "),_("li",[_("p",[e._v("$strLenBytes,    字符串的字节数")])]),e._v(" "),_("li",[_("p",[e._v("$strLenCP,      字符串长度")])])]),e._v(" "),_("p",[_("code",[e._v("搜索")])]),e._v(" "),_("ul",[_("li",[e._v("$text    {$text: {$seatch: , $language: , $caseSensitive: true, $diacriticSensitive: true}}")]),e._v(" "),_("li",[e._v('$meta,  "textScore"   ????')])]),e._v(" "),_("p",[_("code",[e._v("日期")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("$dateFromParts,    转为date格式")])]),e._v(" "),_("li",[_("p",[e._v("$dateToParts,   将日期转为一个年、月、日、时、分、秒的格式")])]),e._v(" "),_("li",[_("p",[e._v("$dateFromString,  {dateString: \"$date\", timezone: ''}  转为统一date格式")])]),e._v(" "),_("li",[_("p",[e._v('$dateToString,      {format:"%Y-%m-%d", date,timezone}')])]),e._v(" "),_("li",[_("p",[e._v('$dayOfMonth,    1~31日，对格式有要求, 可以用new Date("")函数')])]),e._v(" "),_("li",[_("p",[e._v("$month,   月   1~12")])]),e._v(" "),_("li",[_("p",[e._v("$dayOfWeek,    1~7   星期几")])]),e._v(" "),_("li",[_("p",[e._v("$isoDayOfWeek,  1~7")])]),e._v(" "),_("li",[_("p",[e._v("$isoWeek,     1~53")])]),e._v(" "),_("li",[_("p",[e._v("$week,    返回一个日期的星期   {var: {$week: field}}  "),_("code",[e._v("需变量")])])]),e._v(" "),_("li",[_("p",[e._v("$dayOfYear,     1~366")])]),e._v(" "),_("li",[_("p",[e._v("$isoWeekYear,    日期中的年")])]),e._v(" "),_("li",[_("p",[e._v("$year,   返回一个日期中的年   "),_("code",[e._v("需变量")]),e._v("   年")])]),e._v(" "),_("li",[_("p",[e._v("$hour,     时  0~23")])]),e._v(" "),_("li",[_("p",[e._v("$minute,    分")])]),e._v(" "),_("li",[_("p",[e._v("$second,    秒")])]),e._v(" "),_("li",[_("p",[e._v("$millisecond,   0~999")])])]),e._v(" "),_("p",[_("code",[e._v("条件")])]),e._v(" "),_("ul",[_("li",[e._v('$cond,  {if: {}, then: {}, else: {}}  或 $cond: [{},"",""]')]),e._v(" "),_("li",[e._v('$ifNull,    ["$field","替换的表达式"]')]),e._v(" "),_("li",[e._v('$filter,  {input: [], as: "var"变量代表input的每个元素, cond: 引用 "$$var" 为普通判断表达式}')])]),e._v(" "),_("p",[_("code",[e._v("比较")])]),e._v(" "),_("ul",[_("li",[e._v("$eq,")]),e._v(" "),_("li",[e._v("$ne,   [a,b]")]),e._v(" "),_("li",[e._v("$gt,    大于")]),e._v(" "),_("li",[e._v("$gte,")]),e._v(" "),_("li",[e._v("$lt,")]),e._v(" "),_("li",[e._v("$lte,    {$eq:  [0, 5]} ???  {$eq: [{field 运算}, 80]}  运算结果等于80")]),e._v(" "),_("li",[e._v("$cmp,    比较两个值返回一个整数结果")])]),e._v(" "),_("p",[_("code",[e._v("变量")])]),e._v(" "),_("ul",[_("li",[e._v("$let,   {result:{$let: {   {vars: {var1: exp,...}, in: 表达式处理}   }   }}   使用变量：$$var1")]),e._v(" "),_("li",[e._v("$literal,    {expression}  原样返回它的表达式")])]),e._v(" "),_("p",[_("code",[e._v("对象")])]),e._v(" "),_("ul",[_("li",[e._v("$mergeObjects,  [obj, obj1] 合并多个对象为一个, 同样的Key, 合并时取最后一项的值")])]),e._v(" "),_("p",[_("code",[e._v("操作数")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("$stdDevPop,")])]),e._v(" "),_("li",[_("p",[e._v("$stdDevSamp,")])]),e._v(" "),_("li",[_("p",[e._v('$switch,    {$switch:{ branches: [{case: {..., then: "express"}}...], default: "expression"}}')])]),e._v(" "),_("li",[_("p",[e._v("$type,    返回类型 "),_("code",[e._v("需变量")])])]),e._v(" "),_("li",[_("p",[e._v("$zip     将多个数组合并   "),_("code",[e._v("需变量")]),e._v(" {$zip: {inputs:[a,b,c], useLongestLength: true, default: []}}  inputs为多个数组  *****")])])])])}],!1,null,null,null);v.default=l.exports}}]);