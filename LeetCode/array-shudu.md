## 数独与回溯算法

[全排列](https://leetcode-cn.com/problems/permutations/)

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];
  let path = [];
  let used = [];
  var defs = () =>{
    // 到达路径底部-----更新
    if(nums.length === path.length){
      result.push(path.slice(0));
      return result;
    }
    // 遍历每一叉数
    for(let i=0; i<nums.length; i++){
      console.log(path, i);
      if(used[i]){
        continue;
      }
      used[i] = true;
      // 找到相应的路径
      path.push(nums[i]);
      // 每一叉数，递归寻找
      console.log('before digui',path, used);
      defs();
      // 用过的回退----减掉
      console.log('digui',path, i);
      used[i] = false;
      path.pop();
    }
  }
  defs();
  return result;
};
```

```javascript
var isValidSudoku = function (board) {
  let row = [];
  let col = [];
  let v = [];
  let idx;
  let num = 0b00;  // 用一个二进制的位标记一行、一列、一块出现的值
  for (let i = 0; i < 9; i++) {
    row[i] = row[i] === undefined ? 0 : row[i];
    for (let j = 0; j < 9; j++) {
      idx = Math.floor(Math.floor(i / 3) * 3 + j / 3);
      col[j] = col[j] === undefined ? 0 : col[j];
      v[idx] = v[idx] === undefined ? 0 : v[idx];
      num = 1 << (board[i][j] - 1);
      if (board[i][j] === '.') continue;
      console.log(board[i][j], idx);
      console.log(
        (num & row[i]) !== 0,
        (num & col[j]) !== 0,
        (v[idx] & num) !== 0
      );
      if ((num & row[i]) !== 0 || (num & col[j]) !== 0 || (v[idx] & num) !== 0)
        return false;
      row[i] |= num;
      col[j] |= num;
      v[idx] |= num;
    }
  }
  return true;
};
```

回溯：一般用于解决组合、切割字符串的方式、子集问题、排列、棋盘、数独问题

① 画出递归树，找到状态变量(回溯函数的参数)----start=0
② 根据题意，确立结束条件----path.length === len
③ 找准选择列表(与函数参数相关),
④ 判断是否需要剪枝----used[i]
⑤ 作出选择，递归调用，进入下一层
⑥ 撤销选择
[46 全排列](https://leetcode-cn.com/problems/permutations/)

```javascript
var permute = function (nums) {
  let path = [],
    res = [],
    len = nums.length,
    used = [];
  dfs(nums, path, res, len, used);
  return res;
};
var dfs = function (arr, path, res, len, used) {
  if (path.length === len) {
    res.push(path.slice(0));
    return;
  }
  for (let i = 0; i < len; i++) {
    if (!used[i]) {
      path.push(arr[i]);
      used[i] = true;
      dfs(arr, path, res, len, used);
      used[i] = false;
      path.pop();
    }
  }
};
```

① 画出递归树，找到状态变量(回溯函数的参数)----start=0
② 根据题意，确立结束条件----path.length === len
③ 找准选择列表(与函数参数相关),
④ 判断是否需要剪枝----used[i] 或 是重复元素
⑤ 作出选择，递归调用，进入下一层
⑥ 撤销选择
[47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

```javascript
var permuteUnique = function (nums) {
  let path = [],
    res = [],
    len = nums.length,
    used = [];
  nums.sort((a, b) => a - b);
  dfs(nums, path, res, len, used);
  return res;
};
var dfs = function (arr, path, res, len, used) {
  if (path.length === len) {
    res.push(path.slice(0));
    return;
  }
  for (let i = 0; i < len; i++) {
    if (used[i]) {
      continue;
    }
    // 相同的深度，相同的元素在前一个分支已经选择过了
    if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) {
      continue;
    }
    used[i] = true;
    path.push(arr[i]);
    dfs(arr, path, res, len, used);
    used[i] = false;
    path.pop();
  }
};
```

[77 组合](https://leetcode-cn.com/problems/combinations/)

```javascript
var result = [],
  path = [];
var backtracking = function (n, k, startIndex) {
  if (path.length === k) {
    result.push(path.slice(0));
    return;
  }
  for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i);
    backtracking(n, k, i + 1);
    path.pop();
  }
};
var combine = function (n, k) {
  backtracking(n, k, 1);
  return result;
};
```

[40. 组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)

```javascript
var result = [],
  path = [];
var def = function (candidates, len, target, startIndex) {
  if (target === 0) {
    result.push(path.slice(0));
    return;
  }
  for (let i = startIndex; i < len; i++) {
    if (target < 0 || candidates[i] > target) break;
    if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
    path.push(candidates[i]);
    def(candidates, len, target - candidates[i], i + 1);
    path.pop();
  }
};
var combinationSum2 = function (candidates, target) {
  const len = candidates.length;
  candidates.sort((a, b) => a - b);
  def(candidates, len, target, 0);
  return result;
};
```

[131. 分割回文串](https://leetcode-cn.com/problems/palindrome-partitioning/)

```javascript
let result = [],
  path = [];
var defs = function (s, len, step) {
  for (let j = 0; j < len; j += step) {
    let temp = s.substr(j, step);
    if (temp === temp.split('').reverse().join('')) {
      path.push(temp);
    }
  }
};
var partition = function (s) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    defs(s, len, i + 1);
    path.length > 0 && result.push(path.slice(0));
    path = [];
  }
  return result;
};
```

[51. N 皇后](https://leetcode-cn.com/problems/n-queens/)

```javascript
var solveNQueens = function (n) {
  let result = [],
    path = [];
  let isValid = function (row, col, chessBoard) {
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === 'Q') {
        return false;
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  };
  function transformChessBoard(chessBoard) {
    let chessBoardBack = [];
    chessBoard.forEach((row) => {
      let rowStr = '';
      row.forEach((value) => {
        rowStr += value;
      });
      chessBoardBack.push(rowStr);
    });
    return chessBoardBack;
  }
  let defs = function (row, chessBoard) {
    console.log(row, chessBoard);
    if (row === n) {
      result.push(transformChessBoard(chessBoard));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard)) {
        chessBoard[row][col] = 'Q';
        defs(row + 1, chessBoard);
        chessBoard[row][col] = '.';
      }
    }
  };
  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'));
  defs(0, chessBoard);
  return result;
};
```

[37. 解数独](https://leetcode-cn.com/problems/sudoku-solver/)

```javascript
var solveSudoku = function (board) {
  let len = board.length;
  var backTracking = function (board) {
    for (let row = 0; row < len; row++) {
      for (let col = 0; col < len; col++) {
        if (board[row][col] !== '.') continue;
        for (let k = 1; k <= 9; k++) {
          if (isValid(row, col, '' + k, board)) {
            board[row][col] = '' + k;
            if (backTracking(board)) return true;
            board[row][col] = '.';
          }
        }
        return false;
        å;
      }
    }
    return true;
  };
  var isValid = function (row, col, val, board) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === val) {
        return false;
      }
    }
    for (let j = 0; j < 9; j++) {
      if (board[j][col] === val) {
        return false;
      }
    }
    let bRow = Math.floor(row / 3) * 3;
    let bCol = Math.floor(col / 3) * 3;
    for (let i = bRow; i < bRow + 3; i++) {
      for (let j = bCol; j < bCol + 3; j++) {
        if (board[i][j] === val) {
          return false;
        }
      }
    }
    return true;
  };
  backTracking(board);
  return board;
};
```

[78. 子集](https://leetcode-cn.com/problems/subsets/)

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var dfs = function(nums, len, path = [], res, start){
    res.push(path.slice(0));
    for(let i = start; i < len; i++){
        path.push(nums[i]);
        dfs(nums, len, path, res, i + 1);
        path.pop();
    }
}
var subsets = function(nums) {
    let len = nums.length;
    let path = [], res = []
    dfs(nums, len, path, res, 0);
    return res;
};
```

[90. 子集 II](https://leetcode-cn.com/problems/subsets-ii/)

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var dfs = function(nums, len, path, res, start){
    let used = [];
    res.push(path.slice(0));
    for(let i = start; i < len; i++){
        // 相同的深度，相同的元素在前一个分支已经选择过了
        if(i !== start && nums[i] === nums[i-1]) continue;
        path.push(nums[i]);
        dfs(nums, len, path, res, i+1);
        path.pop();
    }
}
var subsetsWithDup = function(nums) {
    let len = nums.length;
    let path = [], res = [];
    nums.sort((a,b)=>a-b);
    dfs(nums, len, path, res, 0);
    return res;
};
```
