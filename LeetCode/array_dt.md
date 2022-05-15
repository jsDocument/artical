转换为「0 - 1」背包问题

暴力解法：取 与 不取； 时间复杂度 2^n

1. dp数组二维，0~i 之间的物品任取放进容量为 j的背包里，
   1. 可优化为一维的「滚动数组：即把上层数组的计算拷贝到当前层来计算， 相当把一个矩阵压缩成一个一行的数据」
   2. dp[j] 容量为 j 的背包所能装的最大价值dp[j]
   3. 递推公式：dp[j] = max(dp[j], dp[j-weight[i]]+value[i])
   4. dp 数组初始化：初始化成一个最小的非负数
   5. 遍历顺序：先物品再背包，物品正序、背包倒序遍历，保证物品只被添加过一次
2. 确定递推公式：
   1. 不放物品 i：则 dp[i-1][j]
   2. 放物品 i：dp[i-1][j-weight[i]]+value[i]
   3. dp[i][j]=max(dp[i-1][j], dp[i-1][j-weight[i]]+value[i])，当前元素由左上方和正上方元素推导而来
3. 初始化数组：先初始化第一行和第一列，其他位置的初始值不做限制，都是需要推导而来，所以初始值不重要
4. 遍历顺序：物品，背包容量
5. 打印 dp 数组

[416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)

wight 的确定
物品
价值

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let target = nums.reduce((a,b)=>a + b, 0);
    if(target % 2 === 1) return false;
    const dp = Array(Math.floor(target / 2) + 1).fill(0);
    let len = nums.length;
    target = Math.floor(target / 2);
    for(let i = 0; i < len; i++){
        if(nums[i] > target) continue;
        for(let j = target; j >= nums[i]; j--){
            dp[j] = Math.max(dp[j], dp[j-nums[i]]+nums[i]);
        }
    }
    return dp[target] === target;
};

var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c, 0);
    if (sum % 2) return false;

    const target = sum / 2, set = new Set();
    for (const n of nums) {
        if (n > target) continue;
        if (target === n || set.has(target - n)) return true;
        for (const s of [...set]) if (n + s < target) set.add(n + s);
        set.add(n);
    }

    return false;
};
```

[474. 一和零]()

```js
// 递归化搜索
```

[698. 划分为k个相等的子集](https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((a,b)=> a+ b, 0);
    if(sum % k !== 0) return false;
    let target = Math.floor(sum / k);
    let dp = Array(target + 1).fill(0);
    let len = nums.length;
    for( let i = 0; i <= len; i++ ){
        for(let j = target; j >= nums[i]; j--){
            dp[j] = Math.max(dp[j], dp[j-nums[i]]+nums[i]);
        }
    }
    return dp[target] === target;
};
```

「0-1背包」，n 种物品，每种物品只有一个，每个物品都有其重量和价值
「完全背包」，n 种物品，每种物品有无限个
「多重背包」，n 种物品，每种物品个数各不相同
「分组背包」
「混合背包」
