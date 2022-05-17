```javascript
// 数据结构转换
const entries = [
    {
        "province": "浙江", "city": "杭州", "name": "西湖"
    }, {
        "province": "四川", "city": "成都", "name": "锦里"
    }, {
        "province": "四川", "city": "成都", "name": "方所"
    }, {
        "province": "四川", "city": "阿坝", "name": "九寨沟"
    }
];

const level = ["province", "city", "name"];

const  result = [
 {
  value:'浙江'，
  children:[
   {
    value:'杭州',
    children:[
     {
      value:'西湖'
     }
    ]
   }
  ]
 },
 {
  value:'四川'，
  children:[
   {
    value:'成都',
    children:[
     {
      value:'锦里'
     },
     {
      value:'方所'
     }
    ]
   },
   {
    value:'阿坝',
    children:[
     {
      value:'九寨沟'
     }
    ]
   }
  ]
 },
]
```
