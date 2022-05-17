## 杨辉三角

[118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1) return [[1]]
    let ret = [[1],[1,1]];
    for(let i=2; i<numRows; i++){
        let j = 1;
        let temp = [1];
        while(j<=i){
            if(j === i){
                temp.push(1);
            }else{
                temp.push(ret[i-1][j-1] + ret[i-1][j])
            }
            console.log(j);
            j++;
        }
        ret.push(temp);
    }
    return ret;
};
```
