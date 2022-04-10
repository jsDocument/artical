# 剑指数组系列

[股票的最大利润](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/solution/)

解题思路：当前价格减轻最低点的价格与之前的利润比，取最大的；故需要更新记录最低点 和 最大利润

```javascript
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPoint = prices[0];
    let len = prices.length;
    for(let i=1; i<len; i++){
        if(prices[i]<=minPoint){
            minPoint = prices[i];
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - minPoint);
        }
    }
    return maxProfit;
};
```

[查找二维数组中的元素](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

实现思路：利用数组从左到右递增，从上到下递增的特性，从数组的右上角位置开始向两侧查找，类似于旋转 45 度的二叉树查找

```javascript
var findNumberIn2DArray = function(matrix, target) {
    let height = matrix.length;
    let i = matrix.length - 1, j = 0;
    while(i >= 0 && j < matrix[0].length){
        if(matrix[i][j] > target){
            i--;
        }else if(matrix[i][j] < target){
            j++;
        }else if(matrix[i][j] === target){
            return true;
        }
    }
    return false;
};
```

[矩阵中的路径](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/solution/)

```javascript

```
[矩阵中的路径](https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/)

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let len = word.length-1, s = word.charAt(0), i=0, arrLen = board.length-1, j=0, x, itemLen, next, result = false;
    while(i++<=len){
        for(;j<arrLen; j++){
            itemLen = Array.isArray(board[j]) && board[j].length-1;
            x = board[j].indexOf(s);
            if(x>-1 && i !== len){
                next = word.charAt(i+1);
                result = hasSibling(next, x, i, itemLen, arrLen, board);
            }
        }
    }
};

function hasSibling(ch, x, y, xlen, ylen, arr){
    let matched = false;
    let operate = ["[y][x-1]", "[y][x+1]", "[y-1][x]", "[y+1][x]"];
    let len = operate.length-1, cur;
    while(len){
        if((x===0 && operate[len].indexOf("x-1")>-1) || (x===xlen && operate[len].indexOf("x+1")>-1) || (y===0 && operate[len].indexOf("y-1")>-1) || (y===ylen && operate[len].indexOf("y+1")>-1)){
            len --;
            continue;
        }else{
            console.log(`${arr}`)
            cur = console.log(getEle(y,x,`${arr}${operate[len]}`).toString())
            len--;
            // matched = cur === ch && true;
            // if(match){
            //     break;
            // }else{
            //     continue;
            // }
        }
    }
    return matched;
}

function getEle(y, x, body){
    return new Function('y', 'x', 'return ' + body + ';')
}

var board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(board, "ABCCED"))

```


[数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

```javascript
var findRepeatNumber = function(nums) {
    nums = nums.sort()
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]) return nums[i]
    }
};
```

# 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

示例 1:

nums1 = [1, 3]
nums2 = [2]

中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

中位数是 (2 + 3)/2 = 2.5

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let left = nums1.length-1, right = nums2.length-1, result = [], index = Math.floor((left + right)/2);
    for(let i=0, j=0; i < left; i++){
            console.log(nums1[i],nums2[j])
        while(j<=right){
            if(nums1[i] > nums2[j]){
                result.push(nums2[j]);
            }else{

                result.push(nums1[i])
            }
            j++;
            console.log(result)
        }
    }
    return (result[index] + result[index+1])/2
};
console.log(findMedianSortedArrays([1,3],[2]))

```
