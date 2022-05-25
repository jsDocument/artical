# mongoodb

## mongodb 默认数据

1. local 库：副本集的元数据
2. admin 库：用户和角色信息

  + system.users
  + system.roles


## mongod 进行数据库设置

+ mongoDB服务

1. 启动 net start MongoDB  / brew services start mongodb
2. 关闭 net stop MongoDB   / brew services stop mongodb 或 db.shutdownServer()
3. 移除 mongod --remove


+ 设置并启动命令

1. 命令设置
2. 配置文件设置
  + 文件地址：/Users/mengyue/yue/Downloads/mongdb_data/mongodb.conf
  + 启动并查看进程：mongod --config & netstat -nltp|grep 接口
  + mongod --config & mongo 或 mongod --config ./mongodb.conf & mongo -u 'admin' -p 'xiaohan'
+ 查看mongod设置




## mongo 连接数据库并打开shell窗口

+ 某用户登录连接 mongo -u 'name' -p 'pwd'

+ 常用参数

1. nodb 不连接数据库，进入sell命令行
2. ssl ssl连接
3. shell 执行shell文件


## 用户管理与查看

+ MongoDB是没有默认管理员账号，所以要先添加管理员账号，再开启权限认证。
+ 切换到admin数据库，添加的账号才是管理员账号。
+ 用户只能在用户所在数据库登录，包括管理员账号。
+ 管理员可以管理所有数据库，但是不能直接管理其他数据库，要先在admin数据库认证后才可以。

1. 进入admin 创建用户

```js
db.createUser({
  user: 'name',
  pwd: '',
  roles: [{role: "userAdminAnyDatabase", db: "admin"}]
})

// 超级用户：
db.createUser({user: 'root', pwd: 'xiaohan', roles: ['root']})
db.createUser({
  user:"user001",
  pwd:"123456",
  customData:{
    name:'jim',
    email:'jim@qq.com',
    age:18,
  },
  roles:[
    {role:"readWrite",db:"db001"},
    {role:"readWrite",db:"db002"},
    'read'// 对其他数据库有只读权限，对db001、db002是读写权限
  ]
})
```

1. 开启权限验证
  mongo --auth 或 配置文件里添加 auth=true
3. db.auth('name','pwd') 验证权限是否生效


1. show users 或 db.runCommand({usersInfo:"userName"}) 或 db.system.users.find() 或 db.getUsers() 查看所有用户
2. db.addUserr('name','pwd', true) 只读
3. db.auth('name','pwd') 更改登录用户
4. db.removeUser('name')
5. db.runCommand({connectionStatus: 1}) 显示已认证用户
6. db.changeUserPassword('name', 'pwd') 或 db.runCommand({updateUser: 'name', pwd: '', customData: {}}) 修改用户名或密码
7. db.dropUser('name') 删除

+ 角色
  1. 数据库用户角色：read、readWrite；
  2. 数据库管理角色：dbAdmin、dbOwner、userAdmin;
  3. 集群管理角色：clusterAdmin、clusterManager、4. clusterMonitor、hostManage；
  4. 备份恢复角色：backup、restore；
  5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
  6. 超级用户角色：root
  7. 内部角色：__system

+ 权限
  1. Read：允许用户读取指定数据库
  2. readWrite：允许用户读写指定数据库
  3. dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
  4. userAdmin：允许用户向system.users集合写入，可以在指定数据库里创建、删除和管理用户
  5. clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
  6. readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
  7. readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
  8. userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
  9. dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
  10. root：只在admin数据库中可用。超级账号，超级权限

## 数据库

1. show dbs;
2. use dbName 创建并切换，更多设置如何完成？
3. db.getName()
4. db.stats()
5. db.getMongo() 链接机器地址
6. db.repairDatabase()
7. db.copyDatabase('dbName','toDbName', 'ip')
8. db.cloneDatabase('ip')
9. db.dropDatabase()

## 集合

1. show.collections
2. db.createCollection('colName', {limit})
3. db.getCollection('colName')
4. db.getCollectionNames();
5. db.col.find()
6. db.col.distinct('name') 去掉聚合中重复的数据
7. 如何添加字段、限制与验证
8. 修改集合名称
9. db.collectionName.drop() 删除集合
10. db.collectionName.remove() 移除集合中的所有文档
11. db.printCollectionStats()

## 条件关键字


1. 比较运算：$lt 小于  $lte    $gt    $gte    $ne不等于
2. $in 在集合内   $nin
3. 布尔运算：$or, {"$or": []}     $not   $and
4. $mod
5. $null
6. $size (key: {"$size": 3})
7. $all (key: {"$all": []})
8. $slice  (key: {"$slice": n})  返回指定集合的个数，10：前10条，-10：后10条
9. $where {"$where": function(){}}  "this.age>18"
10. $exists {key: {$exists: true}}
11. $type {key: {$type: 2}}
12. 正则 {key: /reg/}

## 操作关键字

1. $set 修改或创建指定的文档[集]
2. $unset 移除指定文档属性，赋值为1, -1没有限制，都可将其删除-----不是字段，只是一个值
3. $inc 自增/减
4. $push 创建或更新数组结构
5. $push 与 $each 批量更新 {"$push": {"key": {"$each": []}}}
6. $addToSet 更新但不重复添加，只对数组操作
7. $pop {"$pop": {key: 1}} 1从末尾删除，-1从头部删除
8. $pull 删除数组指定元素 {"$pull": {"key": "value"}} 批量删除？
9. 复合数据访问：key.subKey
10. 数组字段访问：$elemMatch  数组字段中匹配其中某个元素， key.$.subKey 数组项下的field，key.$数组项
11. 日期：new Date(2010,11,31)


## 查询

1. db.col.find("this.key > value",{key: 0/1, key: false/true 返回字段与否})
2. f = function(){ return this.key > value} db.col.find(f)
3. db.col.find({key: {$gt: value}})
4. db.col.find({key: /reg/})

## 更新
db.collectionName.insert() 批量插入
db.collectionName.update({条件},{需更字段操作},更新或创建, 是否多条更新)

## 分组

```js
db.col.group(
  { cond: {}},
  key: {},
  initial: {},
  reduce: function(){},
  finalize: function(){}
)
db.col.count()
db.col.distinct()
```

## 联表

## 聚合 stage，当前stage计算结果会作为下一个stage的输入

```js
db.col.aggregate([
  {
    $unwind: "$key"
  }, // 将数组拆解成多个document, 字段必须指定
  {
    $group: {"_id": "$key", outKey: "$key", outKey: {$sum: "$key", $addToSet: '$key'// 将每个分组的该字段，写到一个数组中}}
  },  // $key为引用字段，指定分组的字段，对分组再次分组 {$group: {outKey: "$outKey.key"}}
  {
    $match: {"key": {condition}}
  },
  {
    $sort: {key: 1}
  },
  {
    $project: {
      outKey: 0 / "$key"
      outKey: {
        outKey: '$key'
      }
    } //格式化结果，_id默认包含，0/false不包含，1/true包含，如果字段结果值与的确为false...，用$literal
  },
  {
    $redact: {
      $cond: {
        if: {
          $gt: [$size: {$setIntersection: ["$key": [] ]}, 0]
        },
        then: "$$DESCEND",
        else: "$$PRUNE"
      }
    }
  }, // 对结果进行裁剪
  {
    $out: +\<collection>
  } // 必须在最后，将计算结果定入到指定表，不存在的collection时，直接创建，存在则进行原子性替换(不改变原数据与索引)，出错时数据朱会改变
],{
  explain: true 查看各个阶段执行的计划
})
```

: 可以将结果输出到collection 或 内存并返回cursor，但返回结果不得超过16M，索引只会在访问原始document时有效，是pipeline中间数据，如$group后的$sort无法使用索引，可以尽量将$match, $limit, $skip放在开端，$group, $unwind, $project, $out尽量放在后面

1. $$DESCEND 当前document级别的所有field，当前级别字段的内嵌文档会被继续检测
2. $$PRUNE  不包含当前文档或内嵌文档级别的所有字段，不再继续检测此级别折其他字段，即使这些字段的内嵌文档中持有不同的访问级别
3. $$KEEP 包含当前文档和内嵌文档级别的所有字段，不再继续检测此级别折其他字段，即使这些字段的内嵌文档中持有不同的访问级别



+ $group: {_id: \<group key>, \<field>}

1. $push
2. $addToSet 表达式值添加到一个集合中(无重复值)
3. $multiply
4. $sum, $avg
5. $max, $min
6. $last, $first
7. $geoNear 地理位置数据分析
8. $sample: {
    size: N
  } // 数据采样，随机N条数据
9. $lookup: {
    from: 参与join的辅表,
    localField: 参与join匹配的本表字段
    foreignField: 参与join匹配的辅表字段
    as: 将辅表输出到些字段中
  }// 联表，当前表为主表，另一个作为辅表


+ 条件

```js
1. $cond: {
  if: boolean,
  then: exp
  else: exp
}
2. $ifNull: {
  if: boolean,
  then: exp
  else: exp
}}
```

+ $redact

1. $cond 三元表达式
2. $setIntersection 表示两个数组的交集中不同元素的个数
3. $$DESCEND
4. $$PRUNE

+ 自定义变量

1. $let: {vars: {outVar: exp }, in: {exp} }

2. $map: {input: exp, as: item, in: exp}  //数组进行迭代，返回一个新数组

: vars 临时变量，in 用来计算，访问vars变量需要用$$前缀，只能在此访问
: input 需要计算的数组，as当前数组元素的别名，in 可以使用当前元素别名进行计算


+ $literal 只做字符串原样输出

+ 集合操作， 多个数组比较

1. $setEquals
2. $setInterSection 多个数组的交集
3. $setUnion 并集
4. $setDifference 两个数组的差集
5. $setIsSubSet 第一个是否为第二个的子集
6. $anyElementsTrue 一个数组中有一个为true，即结果为true
7. $allElementsTrue

+ 数学计算

1. $add
2. $subtract
3. $multiply
4. $divide
5. $mod


+ 字符串操作

1. $concat: []
2. $substr: [input, start, length]
3. $toLower, $toUper
4. $strrcasecmp  比较
5. $size 大小

+ 日期

1. $dayOfYear 此年的第几天
2. $dayOfMonth 本月第几天
3. $dayOfWeek 本周第几天，1表示周日
4. $year 当前年份
5. $week 当年第几周
6. $month
7. $hour
8. $minute
9. $second
10. $millisecond
11. $dateToString: {format: \<format>, date: "$date"}

: %Y, %m, %d, %H, %M, %S, %L, %j年的第几天, %U 第几周, %w 当前周的第几天、

+ db.col.mapReduce(function(){ map函数, this当前文档， emit函数将数据传给reduce函数 }, function(key, values){ reduce函数，map的输出做为该函数输入}, {out: "保存到col"})



## 其他
db.runCommand({getLastError: 1}) 上一条执行结果


## 索引

db.collectionName.ensureIndex({key: 1, key: -1}, {unique: true, dropDups: true})
db.collectionName.getIndexes()
db.collectionName.getIndexKeys()

## 其他方法

1. sort({age: 1})
2. limit()
3. count()
4. distinct()
5. db.col.dataSize()
6. db.col.stats()
7. db.col.totalIndexSize()
8. skip()
