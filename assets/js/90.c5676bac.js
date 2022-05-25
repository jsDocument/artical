(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{263:function(v,t,_){"use strict";_.r(t);var s=_(0),a=Object(s.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("div",{staticClass:"content"},[_("h3",{attrs:{id:"mongodump-h-ip地址-port-u-p-d-数据库-o-存放的位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodump-h-ip地址-port-u-p-d-数据库-o-存放的位置"}},[v._v("#")]),v._v(" mongodump -h IP地址 --port -u -p -d 数据库  -o 存放的位置")]),v._v(" "),_("h3",{attrs:{id:"mongoexport-c-表名-f-字段名-q-条件-csv-o-存放位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongoexport-c-表名-f-字段名-q-条件-csv-o-存放位置"}},[v._v("#")]),v._v(" mongoexport -c 表名  -f 字段名 -q 条件 --csv -o 存放位置")]),v._v(" "),_("h2",{attrs:{id:"服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[v._v("#")]),v._v(" 服务")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("mongod --fork 守护进程【启动】")])]),v._v(" "),_("li",[_("p",[v._v("db.shutdownServer()  kill -15 pid【关闭】")])]),v._v(" "),_("li",[_("p",[v._v("db.adminCommand({shutdown : 1, force : true, timeoutSecs: 5})")])]),v._v(" "),_("li",[_("p",[v._v("service mongod stop")])]),v._v(" "),_("li",[_("p",[v._v("mongod")])]),v._v(" "),_("li",[_("p",[v._v("netstat -tulpn | grep :27017")])])]),v._v(" "),_("h3",{attrs:{id:"游标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#游标"}},[v._v("#")]),v._v(" 游标")]),v._v(" "),_("ul",[_("li",[v._v("find()  查找返回的有匹配文档的游标，可以随意修改查询限制、跳跃、排序; 内部指针")]),v._v(" "),_("li",[v._v("cursor.hasNext()")])]),v._v(" "),_("h2",{attrs:{id:"帮助"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#帮助"}},[v._v("#")]),v._v(" 帮助")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("db.help()   show dbs")])]),v._v(" "),_("li",[_("p",[v._v("use db")])]),v._v(" "),_("li",[_("p",[v._v("db.serverStatus()")])]),v._v(" "),_("li",[_("p",[v._v("db.stats()")])]),v._v(" "),_("li",[_("p",[v._v("db.dropDatabase()")])]),v._v(" "),_("li",[_("p",[v._v("db.mycol.help()     show collections")])]),v._v(" "),_("li",[_("p",[v._v("db.getCollectionNames()")])]),v._v(" "),_("li",[_("p",[v._v("db.mycol.drop()")])]),v._v(" "),_("li",[_("p",[v._v("查找、移除remove、索引ensureIndex\\getIndexes\\dropIndex\\reIndex、保存、统计count")])]),v._v(" "),_("li",[_("p",[v._v("help connect / admin / misc / mr")])]),v._v(" "),_("li",[_("p",[v._v("db.system.help()")])])]),v._v(" "),_("h2",{attrs:{id:"锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[v._v("#")]),v._v(" 锁")]),v._v(" "),_("ul",[_("li",[v._v("db.runCommand({fsync: 1, lock: 1})  对数据库上锁")]),v._v(" "),_("li",[v._v("db.currentOp() 当前锁状态")]),v._v(" "),_("li",[v._v("db.currentOp().inprog.forEach 批量停止")]),v._v(" "),_("li",[v._v("db.fsyncUnlock()  解锁")]),v._v(" "),_("li",[v._v("db.$cmd.sys.unlock.findOne()  解锁")])]),v._v(" "),_("h2",{attrs:{id:"备份"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[v._v("#")]),v._v(" 备份")]),v._v(" "),_("ul",[_("li",[v._v("mongodump")]),v._v(" "),_("li",[v._v("mongodump -d db 备份指定数据库  -c col 指定集合")])]),v._v(" "),_("h2",{attrs:{id:"恢复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恢复"}},[v._v("#")]),v._v(" 恢复")]),v._v(" "),_("ul",[_("li",[v._v("mongorestore --drop(恢复数据之前删除原来数据库数据) 将备份恢复到数据库，-d db  -c col")])]),v._v(" "),_("h2",{attrs:{id:"导入数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[v._v("#")]),v._v(" 导入数据")]),v._v(" "),_("ul",[_("li",[v._v("mongoimport -d db -c col -type csv --headerline --drop +< csvFile.csv [csv,tsv,json]")]),v._v(" "),_("li",[v._v("mongoimport --help")])]),v._v(" "),_("h2",{attrs:{id:"导出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[v._v("#")]),v._v(" 导出")]),v._v(" "),_("ul",[_("li",[v._v("mongoexport -d -c -q'{查询条件}' -f指定csv列名为a,b,c --csv > output.csv")])]),v._v(" "),_("h2",{attrs:{id:"远程连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#远程连接"}},[v._v("#")]),v._v(" 远程连接")]),v._v(" "),_("ul",[_("li",[v._v("mongo -u user -p password address:port/db")]),v._v(" "),_("li",[v._v("mongo --help")])]),v._v(" "),_("h2",{attrs:{id:"集群-路由、分片、副本集、配置服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群-路由、分片、副本集、配置服务"}},[v._v("#")]),v._v(" 集群---路由、分片、副本集、配置服务")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("mongos   是一个请求分发中心，负责把对应数据请求转发到对应shard服务器上")])]),v._v(" "),_("li",[_("p",[v._v("config server  存储所有数据库元信息(路由、分片)的配置，mongos本身没有存储，只是缓存在内存里")])]),v._v(" "),_("li",[_("p",[v._v("shard   数据库拆分，将其分散在不同机器上的过程（主节点、副节点、仲裁）")])]),v._v(" "),_("li",[_("p",[v._v("replica set  shard的备份")])]),v._v(" "),_("li",[_("p",[v._v("--configdb")])])]),v._v(" "),_("h2",{attrs:{id:"集群搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群搭建"}},[v._v("#")]),v._v(" 集群搭建")]),v._v(" "),_("ul",[_("li",[v._v("下载mongodb, 每台机器上mongodb下建目录 conf, mongos/log, config/log与data, shard1~3/log与data")]),v._v(" "),_("li",[v._v("配置环境变量   source file")]),v._v(" "),_("li",[v._v("添加配置文件")]),v._v(" "),_("li",[v._v("启动三台服务器")]),v._v(" "),_("li",[v._v("登录任意一台服务器，初始化配置副本集")]),v._v(" "),_("li",[v._v("配置分片副本集，")]),v._v(" "),_("li",[v._v("分别登录三台服务器，初始化配置副本集")]),v._v(" "),_("li",[v._v("配置路由服务mongos")]),v._v(" "),_("li",[v._v("启用分片")]),v._v(" "),_("li",[v._v("测试")]),v._v(" "),_("li",[v._v("启动")]),v._v(" "),_("li",[v._v("关闭")])]),v._v(" "),_("h2",{attrs:{id:"用户"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[v._v("#")]),v._v(" 用户")]),v._v(" "),_("ul",[_("li",[v._v('db.addUser("user","password",true)')])]),v._v(" "),_("h2",{attrs:{id:"分片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分片"}},[v._v("#")]),v._v(" 分片")]),v._v(" "),_("ul",[_("li",[_("p",[v._v('sh.enableSharding("bbs") 分片启动')])]),v._v(" "),_("li",[_("p",[v._v('sh.shardCollection("db.col", {"user":1}) 集合分片启动')])]),v._v(" "),_("li",[_("p",[v._v("sh.status()  查看分片")])]),v._v(" "),_("li",[_("p",[v._v("sh.stopBalancer()")])]),v._v(" "),_("li",[_("p",[v._v("sh.getBalancerState()")])]),v._v(" "),_("li",[_("p",[v._v("sh.setBalancerState(true)")])]),v._v(" "),_("li",[_("p",[v._v("mongos  --configdb  --config server  --shard\n--logpath\n--fork\n--port\n--upgrade\n--nojournal")])])]),v._v(" "),_("h2",{attrs:{id:"服务-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务-2"}},[v._v("#")]),v._v(" 服务")]),v._v(" "),_("ul",[_("li",[v._v("关闭服务  db.shutdownServer()   kill ID   mongod --shutdown")]),v._v(" "),_("li",[v._v("登录  mongo")]),v._v(" "),_("li",[v._v("开启服务 mongod -f config")]),v._v(" "),_("li",[v._v("mongod --dbpath=  logpath=  --logappend  --port=   --repair  --auth")]),v._v(" "),_("li",[v._v("查看 ps -ef | grep mongo")])])])}],!1,null,null,null);t.default=a.exports}}]);