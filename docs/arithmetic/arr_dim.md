# 给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.


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
