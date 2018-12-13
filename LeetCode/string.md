# String 相关的题目
1. 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。

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

2. 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

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

3. 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

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

4.  请你来实现一个 atoi 函数，使其能将字符串转换成整数。
    首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
    当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
    该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
    注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
    在任何情况下，若函数不能进行有效的转换时，请返回 0。
    说明：
    假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，qing返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

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

