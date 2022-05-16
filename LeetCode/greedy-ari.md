贪心算法：以局部做优 做到 整体最优，解题步骤

1. 将问题分为若干个子问题
2. 找到合适的贪心策略
3. 求解每个子集的最优解
4. 将局部最优解迭代成全局最优解


动态规划：斐波那契额数列、爬楼梯、背包问题、打家劫舍问题、股票问题、子序列问题

1. 状态转移：dp[i][j]表示的意思
2. 一维 dp[i] 的值和 i 表示的意思
3. 递推公式
4. dp 数组如何初始化
5. 遍历顺序

斐波那契数列：

1. dp[i]：第 i 个斐波那契数值为 dp[i]
2. 递推公式：dp[i] = dp[i-1] + dp[i-2]
3. dp 数组初始化：dp[0] = 1, dp[1] = 1
4. 变量顺序：从前往后
[剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2; i <= n; i++){
        dp[i] = (dp[i-1] + dp[i-2])%(10**9+7)
    }
    return dp[n];
};
```

[剑指 Offer II 093. 最长斐波那契数列](https://leetcode-cn.com/problems/Q91FMA/)
[70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
由前面的两种阶数的和，构成后一种阶数的种类
递归三部曲
回溯三部曲
