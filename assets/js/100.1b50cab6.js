(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{282:function(e,t,n){"use strict";n.r(t);var i=n(0),o=Object(i.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h6",{attrs:{id:"db-runcommand-db-admincommand"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#db-runcommand-db-admincommand"}},[e._v("#")]),e._v(" db.runCommand, db.adminCommand")]),e._v(" "),n("ul",[n("li",[e._v("options (aggregate, pipeline, explain 布尔, allowDiskUse 布尔, cursor, maxTimeMS, bypassDocumentValidation, readConcern, collation, hint, comment)")])]),e._v(" "),n("p",[n("code",[e._v('db.runCommand({ aggregate: "collection" pipeline: [{ {$project: {}}, {$unwind: "$field"}, {$group: {_id: "$field", var: {$sum: 1}}} }] })')])]),e._v(" "),n("p",[e._v("等同")]),e._v(" "),n("p",[n("code",[e._v('db.collection.aggregate([ {$project: {}}, {$unwind: "$field"}, {$group: {_id: "$field", var: {$sum: 1}}} ])')])]),e._v(" "),n("h4",{attrs:{id:"例："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例："}},[e._v("#")]),e._v(" 例：")]),e._v(" "),n("p",[e._v('db.qbanks.aggregate([{$group:{_id:"$user_id", total_qbanks:{$sum:1}}}])\ndb.qbanks.aggregate([{$project:{week:{$week:"$update_time"}}}])\ndb.qbanks.aggregate([{$project:{total:{$size:"$questions"},_id:0,result:{$eq:["$total","$total_question"]},total_question:1}}])\ndb.qbanks.update({$expr:{total:{$size:"$questions"}}},{total_question:"$total"},{multi:true})  将查找计算结果更新到文档，$addToField\n查询结果再更新到某个字段')]),e._v(" "),n("p",[e._v('db.orders.insert([\n{ "_id" : 1, "item" : "abc", "price" : 12, "ordered" : 2 },\n{ "_id" : 2, "item" : "jkl", "price" : 20, "ordered" : 1 }\n])')]),e._v(" "),n("p",[e._v('db.items.insert([\n{ "_id" : 1, "item" : "abc", description: "product 1", "instock" : 120 },\n{ "_id" : 2, "item" : "def", description: "product 2", "instock" : 80 },\n{ "_id" : 3, "item" : "jkl", description: "product 3", "instock" : 60 }\n])')]),e._v(" "),n("p",[e._v('db.orders.aggregate([\n{\n$lookup: {\nfrom: "items",\nlocalField: "item",    // field in the orders collection\nforeignField: "item",  // field in the items collection\nas: "fromItems"\n}\n},\n{\n$replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }\n},\n{ $project: { fromItems: 0 } }')]),e._v(" "),n("p",[e._v('{ "_id" : 1, "item" : "abc", "description" : "product 1", "instock" : 120, "price" : 12, "ordered" : 2 }\n{ "_id" : 2, "item" : "jkl", "description" : "product 3", "instock" : 60, "price" : 20, "ordered" : 1 }\n])')]),e._v(" "),n("p",[e._v('{\n$reduce: {\ninput: [ 1, 2, 3, 4 ],\ninitialValue: { sum: 5, product: 2 },\nin: {\nsum: { $add : ["$$value.sum", "$$this"] },\nproduct: { $multiply: [ "$$value.product", "$$this" ] }\n}\n}\n}')]),e._v(" "),n("p",[e._v('{ "sum" : 15, "product" : 48 }')])])}],!1,null,null,null);t.default=o.exports}}]);