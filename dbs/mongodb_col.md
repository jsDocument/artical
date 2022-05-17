## find({$query: {}, options})  或 find(query).\_addSpecial(option)  与 update方法
+ $comment 或 comment(comment)  添加备注
+ $explain: 1 或 explain()
+ $hint: {field: 1} 或 hint({field: 1})  查询优化用特殊索引
+ $maxScan: Number  查询时扫描特殊的数值
+ $max 或 max({field: value})  上限
+ $min
+ $maxTimeMS  或 maxTimeMS 时间上限限制
+ $orderby:{field: 1}  分类查询

### collection
`创建`
+  db.createCollection()
+  db.createView()

`删除`
+  db.collection.deleteOne,
+  db.collection.deleteMany,
+  db.collection.drop,
+  db.collection.remove,

`查找`
+  db.collection.find,
+  db.collection.findAndModify,
+  db.collection.findOne,
+  db.collection.findOneAndDelete,
+  db.collection.findOneAndReplace,
+  db.collection.findOneAndUpdate,
`更新`
+  db.collection.update,
+  db.collection.updateOne,
+  db.collection.updateMany,
+  db.collection.replaceOne,        在一个集合中替换了一个文档

`插入`
+  db.collection.insert,
+  db.collection.insertOne,
+  db.collection.insertMany,

`索引`
+  db.collection.reIndex,       重建一个集合中的所有存在的索引
+  db.collection.createIndex,
+  db.collection.createIndexes,
+  db.collection.dropIndex,
+  db.collection.dropIndexes,
+  db.collection.ensureIndex,
+  db.collection.createIndex,
+  db.collection.getIndexes,

`计算`
+  db.collection.aggregate,
+  db.collection.group,
+  db.collection.mapReduce,

`其他`
+  db.collection.explain,

+  db.collection.bulkWrite,       批量写入
+  db.collection.copyTo,          拷贝一个数据库的集合之间
+  db.collection.count,           文档个数

+  db.collection.dataSize,        集合的体积

+  db.collection.distinct,        一个指定字段不同值的数组文档




+  db.collection.getShardDistribution,       分片集群
+  db.collection.getShardVersion,


+  db.collection.isCapped,
+  db.collection.latencyStats,        一个集合的延迟统计



+  db.collection.renameCollection,        修改集合的名称
+  db.collection.save,

+  db.collection.stats,             集合的状态
+  db.collection.storageSize,       可用的存储空间，集合的体积
+  db.collection.totalSize,     集合分配的存储空间，集合的体积，包括文档和索引
+  db.collection.totalIndexSize,    记录所有索引集合体积

+  db.collection.watch,       监听
+  db.collection.validate,    验证



### Bulk 批量
+  Bulk,
+  db.collection.initializeOrderedBulkOp,
+  db.collection.initializeUnorderedBulkOp,
+  Bulk,
+  Bulk,
+  Bulk.execute,
+  Bulk.find,
+  Bulk.find.arrayFilters,
+  Bulk.find.collation,
+  Bulk.find.remove,
+  Bulk.find.removeOne,
+  Bulk.find.replaceOne,
+  Bulk.find.updateOne,
+  Bulk.find.update,
+  Bulk.find.upsert,
+  Bulk.getOperations,
+  Bulk,
+  Bulk.insert,
+  Bulk.tojson,
+  Bulk,
+  Bulk.toString,
+  Bulk.tojson,

