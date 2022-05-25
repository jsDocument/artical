
## mongoDB命令

#### 基本操作
db  当前数据库
use dbName  切换数据库
show dbs  所有数据库
show collections  所有表
db.addUser(name, password)
db.system.users.find()
db.auth(name, pwd)用户认证
db.removeUser(name)
show users


### 数据库基础信息查询
db.getName()
db.stats()
db.version()
地址：db.getMongo()
删除：db.dropDatabase()
克隆到当前数据库：db.cloneDatabase('127.0.0.1')
复制：db.copyDatabase('mydb', 'todb', 'ip')
修复：db.repairDatabase()

#### 表的基本查询与操作
db.col.count()
db.col.dataSize()
db.col.getDB()  所在数据库
db.col.stats()
db.col.totalSize()
db.col.storageSize()
db.col.renameCollection('name')
db.col.drop()

#### 索引查询与操作
db.col.getIndexes()
db.col.createIndex()
db.col.dropIndex(indexName)
ensureIndex({field: 1})  -1 升序创建索引


background: 后台
name:  索引名称
dropDups：创建唯一索引时删除重复数据
weights:  权重值
unique
sparse----稀疏, 对文档中不存在的字段数据不启用索引，不会查询出不包含对应字段的文档

### Schema与query 关联、查询
Schema定义--表2 ref: 'tableName'；此表为子表、外键，被关联的为主表
查询：表2.find().populate('外键field').exec()
[^ 子表关联主表查询]
[^ 当然也可以用主表关联子表查询，那就需要修改两张表的Schema了。 外键应该定义在主表中，而不是上面例子的子表中。]

### 索引基础知识
1、唯一索引 db.col.ensureIndex({field: 1/-1},opts), unique
2、dropDups删除重复
3、sparse 文档中不存在的字段数据不启用索引，在索引字段中不会查询出「不包含对应字段的文档」
[^ 索引占据一定的存储空间，故进行插入、更新、删除时需要对索引进行操作，所以对于集合进行读写操作少的，不建义使用]

### 查询条件
[^ and：{field: value, field: value}]
[^ or：{ "$or": {field: value, field: value} }]
[^ 值的限制：{field: {"$gt": value, "$lt": value}  }]
[^ 数组：{ field: "$all/in": [value] }  或 {field: [value]}]


{field: {$gt: value}}
{$set: {field: value}}

表达式规则：
多重条件or：{'$or', [{A} , {B}]}
多重条件and：('field', {条件:, 条件: })
特多：('field', {条件}, $or, [{field, field}])
({}, {'field': 1/0, ...})   指定(不)返回字段

更新多个id值的数据
{‘$addToSet’: {field: {'$each': [a, b]}}}

字段的限制:

$set   增加或修改一个字段, upsert, multi；部分更新操作符，更新set之后的数据，而不是覆盖之前的数据
$unset  删除一个字段
$inc    递增、递减  已有键的值
$push  数组
$addToSet  不重复的为数组里追加一些值配合$each

$pushAll
$pop
$popAll
$elemMatch


值的限制：
$lt      小于
$lte      小于等于
$gt      大于
$gte      大于等于
$ne     不等于
$not  /^T.*/  匹配正则表达式
$null
$all [ , ]
$in   是否在某一集合
$nin   与$in相反
$each: [ , ]
$size   数组长度
$slice   返回数组子集，支持前、后或者偏移；取哪些记录 10、-10、[1, 10]
$mod [ 5, 1] 取模5等于1的数据
$equals
$exists  true 键值是否存在
$type: 2
[Double-->1,String-->2,Object-->3,Array-->4,Binary data-->5,Undefined-->6,Object id-->7,Boolean-->8,Date-->9,Null-->10...]
<!-- 根据哪个字段排序 -->
$sort
$regex

多字段限制：
{A, B}
$or : [A,B]
$and : [ ,]
{A, $or: [B, C]}
$where  {"$where": function(){}}

$rename


### 链式查询方法
where
equals(value)
in([list])
limit(Number)
sort('')     -1降序
select('')
exec()
skip(N)
count([true]) 多少条记录
explain()  索引查询分析
hint({fild: 1/-1}) 强制使用一个指定的索引
mapReduce(fn--map(emit(key, value)), fn--reduce(key, values)=>(return reduceFn), opts)

lean: true 或lean()

query().cursor().on~~~
或
cursor = query().cursor()
cursor.on('data', (doc)=>{})
cursor.on('close', (doc)=>{})
cursor.next((err, doc)=>{})


#### 数据操作
db.col.insert()  mongoose不存在则插入
db.col.save(opts, safe, validate, fn(err, product, numAffected))不存在插入，存在更新
db.col.update(condition, edit, upsert, onlyOne)
 upsert 无匹配则插入，存在则更新，只修改一条数据

onlyOne 只更新一条数据
db.col.save(opts, safe, validate, fn(err, product, numAffected))不存在插入，存在更新

db.col.remove(query,{justOne})
db.col.update(query, update, opts)

Model.create(data, fn)
model.field = value
model.save()   传入的文档替换已有文档

> insert() 或 save() 方法都可以向collection里插入数据，两者区别：
  + 如果不指定 _id 字段，save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据。
  + 使用save函数，如果原来的对象不存在，那他们都可以向collection里插入数据，如果已经存在，save会调用update更新里面的记录，而insert则会忽略操作
  + insert可以一次性插入一个列表，而不用遍历，效率高， save则需要遍历列表，一个个插入。


modle实例的方法


###mongoose的方法

读取 Model.find(条件, 指定返回的键) / findOne / findById / findByName(条件, 字段, options, fn)

更新  Model.update(query, updates, opts, fn) / findOneAndUpdate / findByIdAndUpdate
multi, safe, upsert, runValidators, setDefaultsOnInsert--$setOnInsert, strict, overwrite

删除 Model.remove / findOneAndRemove / findByIdAndRemove

新增：kk = new Model(data)  kk.save();  Model.create(data, fn)

Model.insertMany([],fn)

findAndModify({query: {}, update: {}, new: true})
选项：query, update, remove, new , sort排序，field， upsert(与new一起使用)
----------
mongoose对于结构的声明是有严格顺序要求的
子文档是父文档的一具属性，新增父时，子文档会被先加入进去
---------
Schema配置
type----Schema.Types.Mixed, Schema.Types.ObjectId, [String] [[Number]]

default
min
max
lowercase
uppercase
trim
match----RegExp
enum----创建是否为给定的数值组
required  非空
select
validate----fn
get----fn
set----fn
alias  别名


索引
index
unique
sparse----稀疏, 可以没有

虚拟属性
schema.virtual(username.full).get(fn return)


-----------
创建Schema时的配置项
safe
strict   严格，存入时会自动验证
capped   上限设置{size:, max}
versionKey
shareKey   分布式才用
autoIndex

-------------
ensureIndex({field: 1, field1: 1}, {options}) 创建
dropindex(‘indexName’) 删除
db.col.getIndexes() 读取
getLastError查看创建是否成功
覆盖索引：indexOnly
唯一：unique
复合：多个键即可
稀疏：sparse

autoIndex
---------


### new Schema(数据模型, opts)  定义数据结构
> opts：{safe:{j:1,w:2,wtimeout:10000}}

Schema.add()


### Model的方法
+ find(condition, returnField, cb)
+ findById
+ findByIdAndUpdate
+ remove
+ update(condition, doc[, opts][, cb])
+ *insert

> .save() 和 query.exec()，返回 Promises/A+; query虽然不是promise但有.then()方法
  支持如此使用mongoose.Promise = global.Promise  ES6 Promise


### Model实例的方法
保存数据
+ instance = new Model(data);  instance.save(cb)
+ Model.create(data, cb)

### 条件函数

### 查找条件运用




数组：
field.2   下标

$type   指定类型对应的数值


查询没有callback时，返回query, 没有执行预编译查询语句，返回的为自己；query.select('')   query.exec(fn) 执行查询
--------
删除
remove  只删除数据
drop  返回 true或 false,为true表示删除掉了，会删除整个表，包括表结构

--------
query.pretty()  格式化数据


