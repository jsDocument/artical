### 旋转二维数组

1. 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(Array.isArray(matrix) && matrix.length>=2){
        let len = matrix.length;
        let arr = [];
        for(let i=0; i<len; i++){
            let innerLen = matrix[i].length - 1, temp = [];
            for(let j=innerLen; j>=0; j--){
                temp.push(matrix[j][i])
            }
            arr.push(temp);
        }
        return arr;
    }
};

let aa = [ [ 15, 13, 2, 5 ],
  [ 14, 3, 4, 1 ],
  [ 12, 6, 8, 9 ],
  [ 16, 7, 10, 11 ] ];
console.log(rotate(aa))
// 循环：一次改变4个位置的元素内容；暂存i,j，len-1-i,j，len-1-i,len-1-i， i, len-1-i 依次更新到前一个位置；从四个角变换依次循环向内

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(Array.isArray(matrix) && matrix.length>=2){
        let len = matrix.length - 1, temp;
        for(let i=0; i<len; i++){
            for(let j=i; j<len-i; j++){
                console.log(matrix[i][j], matrix[len-j][i],matrix[len-i][len-j],matrix[j][len-i])
                temp = matrix[i][j];
                matrix[i][j] = matrix[len-j][i];
                matrix[len-j][i] = matrix[len-i][len-j];
                matrix[len-i][len-j] = matrix[j][len-i];
                matrix[j][len-i] = temp;
            }
        }
        return matrix;
    }
};


// 先改变对角线为轴翻转，再以x轴进行上下翻转即可 i,j与len-1-j,len-1-i， i,j与len-1-i,j

// 转置，每行数字翻转可得到结果：i,j与j,i；再Y轴对折交换

```
