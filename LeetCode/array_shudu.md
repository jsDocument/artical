```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = [];
    let col = [];
    let v = [];
    let idx;
    let num = 0b00;
    for(let i=0; i<9; i++){
        row[i] = row[i] === undefined ? 0 : row[i];
        for(let j=0; j<9; j++){
            idx = Math.floor(Math.floor(i/3)*3 + j/3);
            col[j] = col[j] === undefined ? 0 : col[j];
            v[idx] = v[idx] === undefined ? 0 : v[idx];
            num = 1 << (board[i][j] - 1);
            if(board[i][j] === '.') continue;
            console.log(board[i][j],idx);
            console.log((num & row[i]) !== 0 , (num & col[j]) !== 0 , (v[idx] & num) !== 0)
            if((num & row[i]) !== 0 || (num & col[j]) !== 0 || (v[idx] & num) !== 0 ) return false;
            row[i] |= num;
            col[j] |= num;
            v[idx] |= num;
        }
    }
    return true;
};
```

[46 组合](https://leetcode-cn.com/problems/permutations/)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let path = [], res = [], len = nums.length, used=[];
    dfs(nums, path, res, len, used);
    return res;
};
var dfs = function(arr, path, res, len, used){
    if(path.length === len){
        res.push(path.slice(0));
        return;
    }
    for(let i = 0; i < len; i++){
        if(!used[i]){
            path.push(arr[i]);
            used[i] = true;
            dfs(arr, path, res, len, used);
            used[i] = false;
            path.pop();
        }
    }
}
```

[47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let path = [], res = [], len = nums.length, used=[];
    nums.sort((a,b)=>a-b);
    dfs(nums, path, res, len, used);
    return res;
};
var dfs = function(arr, path, res, len, used){
    if(path.length === len){
        res.push(path.slice(0));
        return;
    }
    for(let i = 0; i < len; i++){
        if(used[i]){
            continue;
        }
        if(i > 0 && arr[i] === arr[i-1] && !used[i-1]){
            continue;
        }
        used[i] = true;
        path.push(arr[i]);
        dfs(arr, path, res, len, used);
        used[i] = false;
        path.pop();
    }
}
```

[77组合](https://leetcode-cn.com/problems/combinations/)

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var result = [], path = [];
var backtracking = function(n, k, startIndex){
    if(path.length === k){
        result.push(path.slice(0));
        return;
    }
    for(let i = startIndex; i <= n - (k - path.length) + 1; i++){
        path.push(i);
        backtracking(n, k, i + 1);
        path.pop();
    }
}
var combine = function(n, k) {
    backtracking(n, k, 1);
    return result;
};
```
