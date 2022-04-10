# 数组和系列

[最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValue = function(a, b){
    return Math.max(a,b);
}
var maxSubArray = function(nums) {
    let preSum = sum = nums[0];
    if(nums.length===1){
        return sum;
    }
    for(let i=1,len=nums.length; i<len; i++){
        preSum = maxValue(preSum+nums[i], nums[i]);
        if(preSum >= sum){
            sum = preSum;
        }
    }
    return sum;
};


```

[两数之和](https://leetcode-cn.com/problems/two-sum/)

实现思路：使用 map实现

```javascript
var twoSum = function(nums, target) {
    let map = new Map();
    let len = nums.length;
    let x;
    for(let i = 0; i<len; i++){
        x = target - nums[i];
        if(map.has(x)){
            return [map.get(x), i];
        }else{
            map.set(nums[i], i);
        }
    }
};
```


[三数之和](https://leetcode-cn.com/problems/3sum/)

实现思路：使用从前往后遍历，配合前后双指针寻找后面的两个数

```javascript
var threeSum = function(nums) {
    let len = nums.length;
    let ret = [];
    let x;
    let set = new Set(nums);
    nums.sort((a,b)=>a-b);
    if(len < 3 || nums[0]>0 || (set.size === 1 && !set.has(0))) return ret;
    if(set.size === 1 && set.has(0)){
        ret.push([0,0,0]);
        return ret;
    }
    console.log(nums);
    for(let i = 0; i < len - 2 && nums[i] <= 0; i++){
        // console.log(i, i> 0 && nums[i] === nums[i-1]);
        if(i> 0 && nums[i] === nums[i-1]){
            continue;
        }
        left = i+1;
        right = len - 1;
        while(left < right){
            x = nums[i] + nums[left] + nums[right];
            // console.log(i, left, right)
            if(x === 0){
                ret.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] === nums[left + 1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }
                left++;
                right--;
            }else if(x < 0){
                left++;
            }else if(x > 0){
                right--;
            }
        }
    }
    return ret;
};
```

[四数之和](https://leetcode-cn.com/problems/4sum/)

```javascript
var fourSum = function(nums, target) {
    let len = nums.length;
    let ret = [];
    let left, right
    let x;
    let set = new Set(nums);
    if(len < 4) return ret;
    if(set.size === 1 && len === 4){
        if((nums[0]*4) === target){
            return [nums];
        }else{
            return ret;
        }
    }else if(len === 4 && (nums[0] + nums[1] + nums[2] + nums[3]) === target){
        return [nums];
    }
    nums.sort((a, b)=> a-b);
    for(let i=0; i < len - 3; i++){
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }
        for(let j=i+1; j<len-2; j++){
            if(j>(i+1) && nums[j]===nums[j-1]){
                continue;
            }
            left = j+1;
            right = len - 1;
            while(left < right){
                x = nums[i] + nums[j] + nums[left] + nums[right];
                if(x === target){
                    ret.push([nums[i], nums[j], nums[left], nums[right]])
                     while(left < right && nums[left] === nums[left+1]){
                        left++;
                    }
                    while(left < right && nums[right] === nums[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                }else if(x < target){
                    left++;
                }else if(x > target){
                    right--;
                }

            }
        }
    }
    return ret;
};
```
