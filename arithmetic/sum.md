# 找出n数之和等于一个给定的target


1. 两数之和---采用hash的方式，相同的值的处理？用处理过的别名？
2. 三数之和

```js
// 判断有效数字  /^(?:-|\+?)(?:\d+|\d*\.?\d+|\d+\.?\d*)(?:e(?:\-?|\+?)\d+)?$/
function threeSumClosest(nums, target)
{
    int min_gap = 65535;
    int result;
    // 排序
    sort(nums.begin(), nums.end());

    for(int i = 0; i < nums.size() - 2; i++)   // 0
    {
        int k = nums.size() - 1;  // last
        int j = i + 1;  // 1

        while(j < k)
        {
            int sum = nums[i] + nums[j] + nums[k];
            int gap =  abs(sum - target);

            if(gap < min_gap)  // 最小误差？
            {
                result = sum;
                min_gap = gap;
            }

            if(sum < target)
            {
                j++;
            }
            else
            {
                k--;
            }

        }//while
    }//for

    return result;
}
```

3. 四数之和
  1. 先排序
  2. i-->1, j-->2, k-->3, l-->last

```js
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let count = 0, sum = 0, result = [];
    if(Array.isArray(nums) && nums.length > 4 && typeof target === 'number'){
        let len = nums.length - 1, temp, left, right, diff;
        for(let i=0; i<len-3; i++){
            for(let j=i+1; j<len-2; j++){
                left = j + 1; // k
                right = len - 1; //l
                diff = target - nums[i] - nums[j];
                while(left<right){
                    if(nums[left] + nums[right]===diff){
                        temp.push(nums[i], nums[j], nums[left], nums[right]);
                        result.push(temp);
                        left++;
                        while(left<len && nums[left] == nums[left-1]) left++;  //这里处理的意义
                        right--;
                        while(right>left && nums[right] == nums[right+1]) right--;   //这里处理的意义
                    }else if(nums[left]+nums[right]<diff){
                        left++;
                    }else{
                        right--;
                    }
                }
                while (j < len - 3 && nums[j] == nums[j + 1]) {
                    j++;   //这里处理的意义
                }
            }
            while (i < len - 4 && nums[i] == nums[i + 1]) {
                i++;   //这里处理的意义
            }
        }
    }
    return result;
};
console.log(fourSum([1, 0, -1, 0, -2, 2],0))
```js

```js
function fourSum(nums,target)
{
    let result = [];
    if(nums.size() < 4)
        return result;

    sort(nums.begin(), nums.end());

    for(int i = 0; i < nums.size() - 3; i++)
    {
        if(i > 0 && nums[i] == nums[i-1])
                continue;

        for(int j = i + 1; j < nums.size() - 2; j++)
        {
            if(j > 1 && nums[j] == nums[j - 1])
                continue;

            int l = j + 1;
            int k = nums.size() - 1;

            while(l < k)
            {
                int sum = nums[i] + nums[j] + nums[l] + nums[k];
                if(sum < target)
                {
                    l++;
                }
                else if(sum > target)
                {
                    k--;
                }
                else
                {
                    tmp = [];
                    tmp.push_back(nums[i]);
                    tmp.push_back(nums[j]);
                    tmp.push_back(nums[l]);
                    tmp.push_back(nums[k]);

                    result.push_back(tmp);
                    l++;
                    k--;

                    while(nums[l]==nums[l-1]&&nums[k]==nums[k+1]&&l<k)  // 这么写的意义？
                        l++;
                }
            }//while

        }//for
    }//for
}
```
