(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{282:function(e,v,_){"use strict";_.r(v);var i=_(6),l=Object(i.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"mongoodb"}},[e._v("mongoodb")]),e._v(" "),_("h2",{attrs:{id:"mongodb-默认数据"}},[e._v("mongodb 默认数据")]),e._v(" "),_("ol",[_("li",[e._v("local 库：副本集的元数据")]),e._v(" "),_("li",[e._v("admin 库：用户和角色信息")])]),e._v(" "),_("ul",[_("li",[e._v("system.users")]),e._v(" "),_("li",[e._v("system.roles")])]),e._v(" "),_("h2",{attrs:{id:"mongod-进行数据库设置"}},[e._v("mongod 进行数据库设置")]),e._v(" "),_("ul",[_("li",[e._v("mongoDB服务")])]),e._v(" "),_("ol",[_("li",[e._v("启动 net start MongoDB  / brew services start mongodb")]),e._v(" "),_("li",[e._v("关闭 net stop MongoDB   / brew services stop mongodb 或 db.shutdownServer()")]),e._v(" "),_("li",[e._v("移除 mongod --remove")])]),e._v(" "),_("ul",[_("li",[e._v("设置并启动命令")])]),e._v(" "),_("ol",[_("li",[e._v("命令设置")]),e._v(" "),_("li",[e._v("配置文件设置")])]),e._v(" "),_("ul",[_("li",[e._v("文件地址：/Users/mengyue/yue/Downloads/mongdb_data/mongodb.conf")]),e._v(" "),_("li",[e._v("启动并查看进程：mongod --config & netstat -nltp|grep 接口")]),e._v(" "),_("li",[e._v("mongod --config & mongo 或 mongod --config ./mongodb.conf & mongo -u 'admin' -p 'xiaohan'")]),e._v(" "),_("li",[e._v("查看mongod设置")])]),e._v(" "),_("h2",{attrs:{id:"mongo-连接数据库并打开shell窗口"}},[e._v("mongo 连接数据库并打开shell窗口")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("某用户登录连接 mongo -u 'name' -p 'pwd'")])]),e._v(" "),_("li",[_("p",[e._v("常用参数")])])]),e._v(" "),_("ol",[_("li",[e._v("nodb 不连接数据库，进入sell命令行")]),e._v(" "),_("li",[e._v("ssl ssl连接")]),e._v(" "),_("li",[e._v("shell 执行shell文件")])]),e._v(" "),_("h2",{attrs:{id:"用户管理与查看"}},[e._v("用户管理与查看")]),e._v(" "),_("ul",[_("li",[e._v("MongoDB是没有默认管理员账号，所以要先添加管理员账号，再开启权限认证。")]),e._v(" "),_("li",[e._v("切换到admin数据库，添加的账号才是管理员账号。")]),e._v(" "),_("li",[e._v("用户只能在用户所在数据库登录，包括管理员账号。")]),e._v(" "),_("li",[e._v("管理员可以管理所有数据库，但是不能直接管理其他数据库，要先在admin数据库认证后才可以。")])]),e._v(" "),_("ol",[_("li",[e._v("进入admin 创建用户\ndb.createUser({\nuser: 'name',\npwd: '',\nroles: [{role: \"userAdminAnyDatabase\", db: \"admin\"}]\n})")])]),e._v(" "),_("p",[e._v("超级用户： db.createUser({user: 'root', pwd: 'xiaohan', roles: ['root']})\ndb.createUser({\nuser:\"user001\",\npwd:\"123456\",\ncustomData:{\nname:'jim',\nemail:'jim@qq.com',\nage:18,\n},\nroles:[\n{role:\"readWrite\",db:\"db001\"},\n{role:\"readWrite\",db:\"db002\"},\n'read'// 对其他数据库有只读权限，对db001、db002是读写权限\n]\n})")]),e._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[e._v("开启权限验证\nmongo --auth 或 配置文件里添加 auth=true")])]),e._v(" "),_("li",[_("p",[e._v("db.auth('name','pwd') 验证权限是否生效")])]),e._v(" "),_("li",[_("p",[e._v('show users 或 db.runCommand({usersInfo:"userName"}) 或 db.system.users.find() 或 db.getUsers() 查看所有用户')])]),e._v(" "),_("li",[_("p",[e._v("db.addUserr('name','pwd', true) 只读")])]),e._v(" "),_("li",[_("p",[e._v("db.auth('name','pwd') 更改登录用户")])]),e._v(" "),_("li",[_("p",[e._v("db.removeUser('name')")])]),e._v(" "),_("li",[_("p",[e._v("db.runCommand({connectionStatus: 1}) 显示已认证用户")])]),e._v(" "),_("li",[_("p",[e._v("db.changeUserPassword('name', 'pwd') 或 db.runCommand({updateUser: 'name', pwd: '', customData: {}}) 修改用户名或密码")])]),e._v(" "),_("li",[_("p",[e._v("db.dropUser('name') 删除")])])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("角色")]),e._v(" "),_("ol",[_("li",[e._v("数据库用户角色：read、readWrite；")]),e._v(" "),_("li",[e._v("数据库管理角色：dbAdmin、dbOwner、userAdmin;")]),e._v(" "),_("li",[e._v("集群管理角色：clusterAdmin、clusterManager、4. clusterMonitor、hostManage；")]),e._v(" "),_("li",[e._v("备份恢复角色：backup、restore；")]),e._v(" "),_("li",[e._v("所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase")]),e._v(" "),_("li",[e._v("超级用户角色：root")]),e._v(" "),_("li",[e._v("内部角色：__system")])])]),e._v(" "),_("li",[_("p",[e._v("权限")]),e._v(" "),_("ol",[_("li",[e._v("Read：允许用户读取指定数据库")]),e._v(" "),_("li",[e._v("readWrite：允许用户读写指定数据库")]),e._v(" "),_("li",[e._v("dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile")]),e._v(" "),_("li",[e._v("userAdmin：允许用户向system.users集合写入，可以在指定数据库里创建、删除和管理用户")]),e._v(" "),_("li",[e._v("clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。")]),e._v(" "),_("li",[e._v("readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限")]),e._v(" "),_("li",[e._v("readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限")]),e._v(" "),_("li",[e._v("userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限")]),e._v(" "),_("li",[e._v("dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。")]),e._v(" "),_("li",[e._v("root：只在admin数据库中可用。超级账号，超级权限")])])])]),e._v(" "),_("h2",{attrs:{id:"数据库"}},[e._v("数据库")]),e._v(" "),_("ol",[_("li",[e._v("show dbs;")]),e._v(" "),_("li",[e._v("use dbName 创建并切换，更多设置如何完成？")]),e._v(" "),_("li",[e._v("db.getName()")]),e._v(" "),_("li",[e._v("db.stats()")]),e._v(" "),_("li",[e._v("db.getMongo() 链接机器地址")]),e._v(" "),_("li",[e._v("db.repairDatabase()")]),e._v(" "),_("li",[e._v("db.copyDatabase('dbName','toDbName', 'ip')")]),e._v(" "),_("li",[e._v("db.cloneDatabase('ip')")]),e._v(" "),_("li",[e._v("db.dropDatabase()")])]),e._v(" "),_("h2",{attrs:{id:"集合"}},[e._v("集合")]),e._v(" "),_("ol",[_("li",[e._v("show.collections")]),e._v(" "),_("li",[e._v("db.createCollection('colName', {limit})")]),e._v(" "),_("li",[e._v("db.getCollection('colName')")]),e._v(" "),_("li",[e._v("db.getCollectionNames();")]),e._v(" "),_("li",[e._v("db.col.find()")]),e._v(" "),_("li",[e._v("db.col.distinct('name') 去掉聚合中重复的数据")]),e._v(" "),_("li",[e._v("如何添加字段、限制与验证")]),e._v(" "),_("li",[e._v("修改集合名称")]),e._v(" "),_("li",[e._v("db.collectionName.drop() 删除集合")]),e._v(" "),_("li",[e._v("db.collectionName.remove() 移除集合中的所有文档")]),e._v(" "),_("li",[e._v("db.printCollectionStats()")])]),e._v(" "),_("p",[e._v("Double1\t1\tdouble\nString\t2\tstring\nObject\t3\tobject\nArray\t4\tarray\nBinary data\t5\tbinData\nUndefined\t6\tundefined\t弃用\nObjectId\t7\tobjectId\nBoolean\t8\t“bool”\nDate\t9\t“date”\nNull\t10\t“null”\nRegular Expression\t11\t“regex”\nDBPointer\t12\t“dbPointer”\nJavaScript\t13\t“javascript”\nSymbol\t14\t“symbol”\nJavaScript(with scope)\t15\t“javascriptWithScope”\n32-bit integer\t16\t“int”\nTimestamp\t17\t“timestamp”\n64-bit integer\t18\t“long”\nMin key\t-1\t“minKey”\nMax key\t127\t“maxKey”")]),e._v(" "),_("h2",{attrs:{id:"条件关键字"}},[e._v("条件关键字")]),e._v(" "),_("ol",[_("li",[e._v("比较运算：$lt 小于  $lte    $gt    $gte    $ne不等于")]),e._v(" "),_("li",[e._v("$in 在集合内   $nin")]),e._v(" "),_("li",[e._v('布尔运算：$or, {"$or": []}     $not   $and')]),e._v(" "),_("li",[e._v("$mod")]),e._v(" "),_("li",[e._v("$null")]),e._v(" "),_("li",[e._v('$size (key: {"$size": 3})')]),e._v(" "),_("li",[e._v('$all (key: {"$all": []})')]),e._v(" "),_("li",[e._v('$slice  (key: {"$slice": n})  返回指定集合的个数，10：前10条，-10：后10条')]),e._v(" "),_("li",[e._v('$where {"$where": function(){}}  "this.age>18"')]),e._v(" "),_("li",[e._v("$exists {key: {$exists: true}}")]),e._v(" "),_("li",[e._v("$type {key: {$type: 2}}")]),e._v(" "),_("li",[e._v("正则 {key: /reg/}")])]),e._v(" "),_("h2",{attrs:{id:"操作关键字"}},[e._v("操作关键字")]),e._v(" "),_("ol",[_("li",[e._v("$set 修改或创建指定的文档[集]")]),e._v(" "),_("li",[e._v("$unset 移除指定文档属性，赋值为1, -1没有限制，都可将其删除-----不是字段，只是一个值")]),e._v(" "),_("li",[e._v("$inc 自增/减")]),e._v(" "),_("li",[e._v("$push 创建或更新数组结构")]),e._v(" "),_("li",[e._v('$push 与 $each 批量更新 {"$push": {"key": {"$each": []}}}')]),e._v(" "),_("li",[e._v("$addToSet 更新但不重复添加，只对数组操作")]),e._v(" "),_("li",[e._v('$pop {"$pop": {key: 1}} 1从末尾删除，-1从头部删除')]),e._v(" "),_("li",[e._v('$pull 删除数组指定元素 {"$pull": {"key": "value"}} 批量删除？')]),e._v(" "),_("li",[e._v("复合数据访问：key.subKey")]),e._v(" "),_("li",[e._v("数组字段访问：$elemMatch  数组字段中匹配其中某个元素， key.$.subKey 数组项下的field，key.$数组项")]),e._v(" "),_("li",[e._v("日期：new Date(2010,11,31)")])]),e._v(" "),_("h2",{attrs:{id:"查询"}},[e._v("查询")]),e._v(" "),_("ol",[_("li",[e._v('db.col.find("this.key > value",{key: 0/1, key: false/true 返回字段与否})')]),e._v(" "),_("li",[e._v("f = function(){ return this.key > value} db.col.find(f)")]),e._v(" "),_("li",[e._v("db.col.find({key: {$gt: value}})")]),e._v(" "),_("li",[e._v("db.col.find({key: /reg/})")])]),e._v(" "),_("h2",{attrs:{id:"更新"}},[e._v("更新")]),e._v(" "),_("p",[e._v("db.collectionName.insert() 批量插入\ndb.collectionName.update({条件},{需更字段操作},更新或创建, 是否多条更新)")]),e._v(" "),_("h2",{attrs:{id:"分组"}},[e._v("分组")]),e._v(" "),_("p",[e._v("db.col.group(\n{ cond: {}},\nkey: {},\ninitial: {},\nreduce: function(){},\nfinalize: function(){}\n)\ndb.col.count()\ndb.col.distinct()")]),e._v(" "),_("h2",{attrs:{id:"联表"}},[e._v("联表")]),e._v(" "),_("h2",{attrs:{id:"聚合-stage-当前stage计算结果会作为下一个stage的输入"}},[e._v("聚合 stage，当前stage计算结果会作为下一个stage的输入")]),e._v(" "),_("p",[e._v('db.col.aggregate([\n{\n$unwind: "$key"\n}, // 将数组拆解成多个document, 字段必须指定\n{\n$group: {"_id": "$key", outKey: "$key", outKey: {$sum: "$key", $addToSet: \'$key\'// 将每个分组的该字段，写到一个数组中}}\n},  // $key为引用字段，指定分组的字段，对分组再次分组 {$group: {outKey: "$outKey.key"}}\n{\n$match: {"key": {condition}}\n},\n{\n$sort: {key: 1}\n},\n{\n$project: {\noutKey: 0 / "$key"\noutKey: {\noutKey: \'$key\'\n}\n} //格式化结果，_id默认包含，0/false不包含，1/true包含，如果字段结果值与的确为false...，用$literal\n},\n{\n$redact: {\n$cond: {\nif: {\n$gt: [$size: {$setIntersection: ["$key": [] ]}, 0]\n},\nthen: "$$DESCEND",\nelse: "$$PRUNE"\n}\n}\n}, // 对结果进行裁剪\n{\n$out: '),_("collection",[e._v("\n} // 必须在最后，将计算结果定入到指定表，不存在的collection时，直接创建，存在则进行原子性替换(不改变原数据与索引)，出错时数据朱会改变\n],{\nexplain: true 查看各个阶段执行的计划\n})")])],1),e._v(" "),_("p",[e._v(": 可以将结果输出到collection 或 内存并返回cursor，但返回结果不得超过16M，索引只会在访问原始document时有效，是pipeline中间数据，如$group后的$sort无法使用索引，可以尽量将$match, $limit, $skip放在开端，$group, $unwind, $project, $out尽量放在后面")]),e._v(" "),_("ol",[_("li",[e._v("$$DESCEND 当前document级别的所有field，当前级别字段的内嵌文档会被继续检测")]),e._v(" "),_("li",[e._v("$$PRUNE  不包含当前文档或内嵌文档级别的所有字段，不再继续检测此级别折其他字段，即使这些字段的内嵌文档中持有不同的访问级别")]),e._v(" "),_("li",[e._v("$$KEEP 包含当前文档和内嵌文档级别的所有字段，不再继续检测此级别折其他字段，即使这些字段的内嵌文档中持有不同的访问级别")])]),e._v(" "),_("ul",[_("li",[e._v("$group: {_id: "),_("group",{key:""},[e._v(", "),_("field",[e._v("}")])],1)],1)]),e._v(" "),_("ol",[_("li",[e._v("$push")]),e._v(" "),_("li",[e._v("$addToSet 表达式值添加到一个集合中(无重复值)")]),e._v(" "),_("li",[e._v("$multiply")]),e._v(" "),_("li",[e._v("$sum, $avg")]),e._v(" "),_("li",[e._v("$max, $min")]),e._v(" "),_("li",[e._v("$last, $first")]),e._v(" "),_("li",[e._v("$geoNear 地理位置数据分析")]),e._v(" "),_("li",[e._v("$sample: {\nsize: N\n} // 数据采样，随机N条数据")]),e._v(" "),_("li",[e._v("$lookup: {\nfrom: 参与join的辅表,\nlocalField: 参与join匹配的本表字段\nforeignField: 参与join匹配的辅表字段\nas: 将辅表输出到些字段中\n}// 联表，当前表为主表，另一个作为辅表")])]),e._v(" "),_("ul",[_("li",[e._v("条件")])]),e._v(" "),_("ol",[_("li",[e._v("$cond: {\nif: boolean,\nthen: exp\nelse: exp\n}")]),e._v(" "),_("li",[e._v("$ifNull: {\nif: boolean,\nthen: exp\nelse: exp\n}}")])]),e._v(" "),_("ul",[_("li",[e._v("$redact")])]),e._v(" "),_("ol",[_("li",[e._v("$cond 三元表达式")]),e._v(" "),_("li",[e._v("$setIntersection 表示两个数组的交集中不同元素的个数")]),e._v(" "),_("li",[e._v("$$DESCEND")]),e._v(" "),_("li",[e._v("$$PRUNE")])]),e._v(" "),_("ul",[_("li",[e._v("自定义变量")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("$let: {vars: {outVar: exp }, in: {exp} }")])]),e._v(" "),_("li",[_("p",[e._v("$map: {input: exp, as: item, in: exp}  //数组进行迭代，返回一个新数组")])])]),e._v(" "),_("p",[e._v(": vars 临时变量，in 用来计算，访问vars变量需要用$$前缀，只能在此访问\n: input 需要计算的数组，as当前数组元素的别名，in 可以使用当前元素别名进行计算")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("$literal 只做字符串原样输出")])]),e._v(" "),_("li",[_("p",[e._v("集合操作， 多个数组比较")])])]),e._v(" "),_("ol",[_("li",[e._v("$setEquals")]),e._v(" "),_("li",[e._v("$setInterSection 多个数组的交集")]),e._v(" "),_("li",[e._v("$setUnion 并集")]),e._v(" "),_("li",[e._v("$setDifference 两个数组的差集")]),e._v(" "),_("li",[e._v("$setIsSubSet 第一个是否为第二个的子集")]),e._v(" "),_("li",[e._v("$anyElementsTrue 一个数组中有一个为true，即结果为true")]),e._v(" "),_("li",[e._v("$allElementsTrue")])]),e._v(" "),_("ul",[_("li",[e._v("数学计算")])]),e._v(" "),_("ol",[_("li",[e._v("$add")]),e._v(" "),_("li",[e._v("$subtract")]),e._v(" "),_("li",[e._v("$multiply")]),e._v(" "),_("li",[e._v("$divide")]),e._v(" "),_("li",[e._v("$mod")])]),e._v(" "),_("ul",[_("li",[e._v("字符串操作")])]),e._v(" "),_("ol",[_("li",[e._v("$concat: []")]),e._v(" "),_("li",[e._v("$substr: [input, start, length]")]),e._v(" "),_("li",[e._v("$toLower, $toUper")]),e._v(" "),_("li",[e._v("$strrcasecmp  比较")]),e._v(" "),_("li",[e._v("$size 大小")])]),e._v(" "),_("ul",[_("li",[e._v("日期")])]),e._v(" "),_("ol",[_("li",[e._v("$dayOfYear 此年的第几天")]),e._v(" "),_("li",[e._v("$dayOfMonth 本月第几天")]),e._v(" "),_("li",[e._v("$dayOfWeek 本周第几天，1表示周日")]),e._v(" "),_("li",[e._v("$year 当前年份")]),e._v(" "),_("li",[e._v("$week 当年第几周")]),e._v(" "),_("li",[e._v("$month")]),e._v(" "),_("li",[e._v("$hour")]),e._v(" "),_("li",[e._v("$minute")]),e._v(" "),_("li",[e._v("$second")]),e._v(" "),_("li",[e._v("$millisecond")]),e._v(" "),_("li",[e._v("$dateToString: {format: "),_("format",[e._v(', date: "$date"}')])],1)]),e._v(" "),_("p",[e._v(": %Y, %m, %d, %H, %M, %S, %L, %j年的第几天, %U 第几周, %w 当前周的第几天、")]),e._v(" "),_("ul",[_("li",[e._v('db.col.mapReduce(function(){ map函数, this当前文档， emit函数将数据传给reduce函数 }, function(key, values){ reduce函数，map的输出做为该函数输入}, {out: "保存到col"})')])]),e._v(" "),_("h2",{attrs:{id:"其他"}},[e._v("其他")]),e._v(" "),_("p",[e._v("db.runCommand({getLastError: 1}) 上一条执行结果")]),e._v(" "),_("h2",{attrs:{id:"索引"}},[e._v("索引")]),e._v(" "),_("p",[e._v("db.collectionName.ensureIndex({key: 1, key: -1}, {unique: true, dropDups: true})\ndb.collectionName.getIndexes()\ndb.collectionName.getIndexKeys()")]),e._v(" "),_("h2",{attrs:{id:"其他方法"}},[e._v("其他方法")]),e._v(" "),_("ol",[_("li",[e._v("sort({age: 1})")]),e._v(" "),_("li",[e._v("limit()")]),e._v(" "),_("li",[e._v("count()")]),e._v(" "),_("li",[e._v("distinct()")]),e._v(" "),_("li",[e._v("db.col.dataSize()")]),e._v(" "),_("li",[e._v("db.col.stats()")]),e._v(" "),_("li",[e._v("db.col.totalIndexSize()")]),e._v(" "),_("li",[e._v("skip()")])])])}),[],!1,null,null,null);v.default=l.exports}}]);