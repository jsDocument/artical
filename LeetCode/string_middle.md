[无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s || typeof s !=='string' || s.length<1){
      return 0;
    }else if(!s || typeof s !=='string' || s.length===1){
        return 1;
    }
    let sub = s.charAt(0), len = s.length, i = 0, temp = {}, tempLen, max = 0, index;
    while(i++ <= len-1 ){
       if((index = sub.indexOf(s.charAt(i)))>-1){
           tempLen = sub.length;
           max = max < tempLen ? tempLen : max;
           temp[sub] = tempLen;
           sub = sub.substr(index+1);
           sub += s.charAt(i);

       }else{
           sub += s.charAt(i);
       }
    }
    return max;
};
```

[Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let tArr = [], mid = numRows - 2, step = numRows, len = s.length;
  if(numRows === 1) return s;
  s = s.replace(/\,/g, "#");
  for(let i = 0; i<numRows; i++){
    tArr[i] = [s.substr(i,1)];
  }
  while(step<len){
    for(let k = mid; k>0; k--){
      for(let j= numRows-1; j>=0; j--){
        if(j === k){
          tArr[j].push(s.substr(step, 1));
          step++;
        }else{
          tArr[j].push("");
        }
      }
    }
    for(let i = 0; i<numRows; i++){
      tArr[i].push(s.substr(step, 1));
      step++;
    }
  }
  return tArr.join("").replace(/\,/g,"").replace(/#/g, ",");
};
```

[字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/)

```javascript
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    let temp = /^(-\d|\+?\d)\d*(\.\d+)?/.exec(str),num;
    if(!!temp){
        num = parseFloat(temp[0])
        if(num<Math.pow(-2,31)){
            return Math.pow(-2,31);
        }else if(num>=Math.pow(2,31)){
            return Math.pow(2,31)-1;
        }else{
            return num;
        }
    }else{
        return 0;
    }
};
```

[简化路径](https://leetcode-cn.com/problems/simplify-path/)

```javascript
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let matchAll = /(?:\/?\.*?\w+\/?)|(?:\/?\.{2,}\/?)|(?:\/?\.\/?)/g;
    let matchIgnorePath = /^\/|\.\/?/;
    let matchPopPath = /\.{2}\/?/;
    let rightPath = /(\.*?\w+)\/?/;
    let endBackPath = /\.{2}$/;
    let ignoreEnd = /\.$/;
    let output = /\/?(\.{3,})/;
    let filePath;
    let redirectOutput = false;
    let result = [], match,subMath;
    let len = path.length;
    let subTemp;
    path = path.replace(/\/+/g, '/').replace(/\/$/,"");
    while(match=matchAll.exec(path)){
        if(subMath = rightPath.exec(match[0])){
            result.push(subMath[1]);
            continue;
        }else if(subMath = output.exec(match[0])){
            result.push(subMath[1]);
            continue;
        }else if(subMath = /\.{2}\/?/.exec(match[0])){
            if(result.length>0){
                result.pop();
            }else{
                continue;
            }
        }else if(subMath = matchIgnorePath.exec(match[0])){
            continue;
        }else if(!match[0]){
            break;
        }else if(endBackPath.exec(match[0])){
            result.pop();
            continue;
        }else if(ignoreEnd.exec(path)){
             continue;
         }
    }
    path = '/'+ result.join('/');
    return path;
};
```

[翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)

```javascript
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    return str.split(/\s+/).reverse().join(' ');
};
```
