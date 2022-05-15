[56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/)

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let len = intervals.length;
    let i = 0;
    let result = [];
    while(i < len){
        if(!intervals[i+1]){
            result.push(intervals[i]);
            break;
        }else if(intervals[i][1] < intervals[i+1][0] || intervals[i][0] > intervals[i+1][1]){
            result.push(intervals[i]);
            i++;
            continue;
        }else{
            result.push([Math.min(intervals[i][0], intervals[i+1][0]), Math.max(intervals[i][1], intervals[i+1][1])])
            i += 2;
        }
    }
    return result;
};
```
