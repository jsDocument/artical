###### db.runCommand, db.adminCommand
+ options (aggregate, pipeline, explain 布尔, allowDiskUse 布尔, cursor, maxTimeMS, bypassDocumentValidation, readConcern, collation, hint, comment)

`db.runCommand({
    aggregate: "collection"
    pipeline: [{
        {$project: {}},
        {$unwind: "$field"},
        {$group: {_id: "$field", var: {$sum: 1}}}
    }]
})`

等同

`db.collection.aggregate([
    {$project: {}},
    {$unwind: "$field"},
    {$group: {_id: "$field", var: {$sum: 1}}}
])`

#### 例：
db.qbanks.aggregate([{$group:{\_id:"$user_id", total_qbanks:{$sum:1}}}])
db.qbanks.aggregate([{$project:{week:{$week:"$update_time"}}}])
db.qbanks.aggregate([{$project:{total:{$size:"$questions"},\_id:0,result:{$eq:["$total","$total_question"]},total_question:1}}])
db.qbanks.update({$expr:{total:{$size:"$questions"}}},{total_question:"$total"},{multi:true})  将查找计算结果更新到文档，$addToField
查询结果再更新到某个字段


db.orders.insert([
  { "_id" : 1, "item" : "abc", "price" : 12, "ordered" : 2 },
  { "_id" : 2, "item" : "jkl", "price" : 20, "ordered" : 1 }
])


db.items.insert([
  { "_id" : 1, "item" : "abc", description: "product 1", "instock" : 120 },
  { "_id" : 2, "item" : "def", description: "product 2", "instock" : 80 },
  { "_id" : 3, "item" : "jkl", description: "product 3", "instock" : 60 }
])



db.orders.aggregate([
   {
      $lookup: {
         from: "items",
         localField: "item",    // field in the orders collection
         foreignField: "item",  // field in the items collection
         as: "fromItems"
      }
   },
   {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
   },
   { $project: { fromItems: 0 } }


   { "_id" : 1, "item" : "abc", "description" : "product 1", "instock" : 120, "price" : 12, "ordered" : 2 }
{ "_id" : 2, "item" : "jkl", "description" : "product 3", "instock" : 60, "price" : 20, "ordered" : 1 }
])







{
   $reduce: {
      input: [ 1, 2, 3, 4 ],
      initialValue: { sum: 5, product: 2 },
      in: {
         sum: { $add : ["$$value.sum", "$$this"] },
         product: { $multiply: [ "$$value.product", "$$this" ] }
      }
   }
}




{ "sum" : 15, "product" : 48 }