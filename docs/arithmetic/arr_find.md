# 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]




```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(Array.isArray(nums) && nums.length>1 && typeof target === 'number'){
        let want = [], len = nums.length, half = target/2;
        if(len===2){
            return nums[0] + nums[1] === target ? [0,1] : false;
        }else{
            for(let i=0; i<len; i++){
                if(nums[i]>target){
                    nums.splice(i,1);
                }else if(nums[i]<half){
                    nums.splice(i,1);
                    want.push(target-nums[i]);
                }
            }
            let wantL = want.length, numsL = nums.length;
            for(let i=0; i<)
        }

    }
};
```
