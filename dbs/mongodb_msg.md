### mongodump -h IP地址 --port -u -p -d 数据库  -o 存放的位置

### mongoexport -c 表名  -f 字段名 -q 条件 --csv -o 存放位置


## 服务
+ mongod --fork 守护进程【启动】
+ db.shutdownServer()  kill -15 pid【关闭】
+ db.adminCommand({shutdown : 1, force : true, timeoutSecs: 5})

+ service mongod stop
+ mongod

+ netstat -tulpn | grep :27017

### 游标
+ find()  查找返回的有匹配文档的游标，可以随意修改查询限制、跳跃、排序; 内部指针
+ cursor.hasNext()

## 帮助

+ db.help()   show dbs
+ use db
+ db.serverStatus()
+ db.stats()
+ db.dropDatabase()


+ db.mycol.help()     show collections
+ db.getCollectionNames()
+ db.mycol.drop()
+ 查找、移除remove、索引ensureIndex\getIndexes\dropIndex\reIndex、保存、统计count

+ help connect / admin / misc / mr

+ db.system.help()

## 锁
+ db.runCommand({fsync: 1, lock: 1})  对数据库上锁
+ db.currentOp() 当前锁状态
+ db.currentOp().inprog.forEach 批量停止
+ db.fsyncUnlock()  解锁
+ db.$cmd.sys.unlock.findOne()  解锁

## 备份
+ mongodump
+ mongodump -d db 备份指定数据库  -c col 指定集合

## 恢复
+ mongorestore --drop(恢复数据之前删除原来数据库数据) 将备份恢复到数据库，-d db  -c col

## 导入数据
+ mongoimport -d db -c col -type csv --headerline --drop < csvFile.csv [csv,tsv,json]
+ mongoimport --help

## 导出
+ mongoexport -d -c -q'{查询条件}' -f指定csv列名为a,b,c --csv > output.csv


## 远程连接
+ mongo -u user -p password address:port/db
+ mongo --help

## 集群---路由、分片、副本集、配置服务
+ mongos   是一个请求分发中心，负责把对应数据请求转发到对应shard服务器上
+ config server  存储所有数据库元信息(路由、分片)的配置，mongos本身没有存储，只是缓存在内存里
+ shard   数据库拆分，将其分散在不同机器上的过程（主节点、副节点、仲裁）
+ replica set  shard的备份


+ --configdb

## 集群搭建
+ 下载mongodb, 每台机器上mongodb下建目录 conf, mongos/log, config/log与data, shard1~3/log与data
+ 配置环境变量   source file
+ 添加配置文件
+ 启动三台服务器
+ 登录任意一台服务器，初始化配置副本集
+ 配置分片副本集，
+ 分别登录三台服务器，初始化配置副本集
+ 配置路由服务mongos
+ 启用分片
+ 测试
+ 启动
+ 关闭

## 用户
+ db.addUser("user","password",true)


## 分片
+ sh.enableSharding("bbs") 分片启动
+ sh.shardCollection("db.col", {"user":1}) 集合分片启动
+ sh.status()  查看分片
+ sh.stopBalancer()
+ sh.getBalancerState()
+ sh.setBalancerState(true)

+ mongos  --configdb  --config server  --shard
--logpath
--fork
--port
--upgrade
--nojournal

## 服务
+ 关闭服务  db.shutdownServer()   kill ID   mongod --shutdown
+ 登录  mongo
+ 开启服务 mongod -f config
+ mongod --dbpath=  logpath=  --logappend  --port=   --repair  --auth
+ 查看 ps -ef | grep mongo
