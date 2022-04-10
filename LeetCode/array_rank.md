[全排列](https://leetcode-cn.com/problems/permutations/)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];
  let path = [];
  let used = [];
  var defs = () =>{
    // 到达路径底部-----更新
    if(nums.length === path.length){
      result.push(path.slice(0));
      return result;
    }
    // 遍历每一叉数
    for(let i=0; i<nums.length; i++){
      console.log(path, i);
      if(used[i]){
        continue;
      }
      used[i] = true;
      // 找到相应的路径
      path.push(nums[i]);
      // 每一叉数，递归寻找
      console.log('before digui',path, used);
      defs();
      // 用过的回退----减掉
      console.log('digui',path, i);
      used[i] = false;
      path.pop();
    }
  }
  defs();
  return result;
};
```
