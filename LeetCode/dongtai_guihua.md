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
