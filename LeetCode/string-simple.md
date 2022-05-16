### 字符串初级系列[13 14 20 58 67 819]

[罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let len = s.length, result = 0, left, right;
    if(len==1){
        left = s.charAt(len-1);
        result = map[left];
        console.log(result)
    }else{
        while(--len>=0){
            left = s.charAt(len-1);
            right = s.charAt(len);
            if((left=='I' && (right=='V' || right=='X')) || (left=='X' && (right=='L' || right=='C')) || (left=='C' && (right=='D' || right=='M'))){
                result += (map[right]-map[left]);
                --len;
            }else{
                result += map[right];
            }
        }
    }
    return result;
};
```

[最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let first, len = strs.length, result = '';
    if(len<1){
        return ""
    }else if(len==1){
        return strs[0];
    }else{
        first = strs[0];
        let strLen = first.length, i=-1, ch, otherCh, exit = false;
        while(++i<strLen){
            ch = first.charAt(i);
            for(let j = 1; j<len; j++){
                otherCh = strs[j].charAt(i);
                if(otherCh != ch){
                    exit = true;
                    break;
                }else if(otherCh == ch && j == len-1){
                    result += ch;
                }
            }
            if(exit) break;
        }
        return result;
    }
}
```

[有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length%2 !== 0 || s.length === 0){
      return false;
  }
  let result = true;
  let enter_stack = [];
  for(let i=0; i<s.length; i++){
    switch(s[i]){
      case '{':
        enter_stack.push('}');
        continue;
      case '[':
        enter_stack.push(']');
        continue;
      case '(':
        enter_stack.push(')');
        continue;
    }
    if(s[i]===enter_stack.pop()){
      continue;
    }else{
      result = false;
      break;
    }
  }
  return enter_stack.length>0 ? false : result;
};
```

[最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let temp = s.trimRight().split(/\s+/);
    let len = temp.length;
    return temp[len-1].length;
};
```

[二进制求和](https://leetcode-cn.com/problems/add-binary/)

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var getEveryB = function(a, b, carry){
    let temp = a + b + carry;
    // a 或 b 已取完成，且carry为0时
    let result;
    if(temp === '111'){
        result = '11';
    }else if(temp === '011' || temp === '101' || temp === '110'){
        result = '10';
    }else if(temp === '010' || temp === '100' || temp === '001'){
        result = '01'
    }else{
        result = '00'
    }
    return result;
}
var addBinary = function(a, b) {
    let lenA = a.length-1, lenB = b.length-1;
    let result ="", temp;
    let carry="0", letterA, letterB;
    while(lenA>=0 || lenB>=0 || carry !== '0'){
        letterA = lenA < 0 ? '0' : letterA = a.substr(lenA--, 1);
        letterB = lenB < 0 ? '0' : b.substr(lenB--, 1);
        temp = getEveryB(letterA, letterB, carry);
        carry = temp.substr(0,1);
        result = temp.substr(1,1)+result;
    }
    return result;
};
```

[机器人能否返回原点](https://leetcode-cn.com/problems/robot-return-to-origin/)

```javascript
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let tempL = moves.match(/L+/g)
    let L = tempL && tempL.join('').length || 0;
    let tempR = moves.match(/R+/g)
    let R = tempR && tempR.join('').length || 0;
    let tempU = moves.match(/U+/g)
    let U = tempU && tempU.join('').length || 0;
    let tempD = moves.match(/D+/g)
    let D = tempD && tempD.join('').length || 0;
    if(L===R && U===D) return true;
    return false;
};
```

[最常见的单词](https://leetcode-cn.com/problems/most-common-word/)

```javascript
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let bannedWord = banned.join(",").replace(/\,/g, "([^a-zA-Z])|");
  let removeOtherChar = new RegExp(`[^a-zA-Z\\s]`,"g");
  let removeBannedWord = new RegExp(`${bannedWord}`,"g");
  let arr = paragraph.toLowerCase().replace(removeBannedWord, "$1").replace(removeOtherChar," ").replace(/^\s+|\s+$/g,"").split(/\s+/);
  if(banned.length<=0 && !(/[^a-zA-Z]+/.test(paragraph))) return paragraph.toLowerCase();
  if(banned.length<=0 || arr.length === 1) return arr[0];
  arr = arr.sort();
  let map, count = 1, maxCount = 1, result, len = arr.length;
  for(let i=0; i<len; i++){
      if(arr[i] === arr[i+1] || i===(len-1)){
          if(i === len-1 && arr[i-1] === arr[i]){
              if(count > maxCount){
                  maxCount = count;
                  result = arr[i];
              }
          }else{
            ++count;
          }
        }else{
          if(count > maxCount){
              maxCount = count;
              result = arr[i];
          }
          count = 1;
      }
  }
  return result;

};
```

1. 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = Math.pow(2,31)-1;
    let min = Math.pow(-2,31);
    let result;
    if(typeof x === 'number' && x !== NaN){
        let str = (x + '').split(''), len = str.length - 1, i = 0, temp;
        if(x<0) i=1;
        while(i<len){
            temp = str[i];
            str[i] = str[len];
            str[len] = temp;
            i++;
            len--;
        }
        result = parseInt(str.join(''));
        return result > max || result < min ? 0 : result;
    }else{
        return 0;
    }
};
```

