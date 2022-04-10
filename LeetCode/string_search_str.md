# 正则查找子串

## 给定一个字符串，找出不含有重复字符的最长子串的长度

> 示例：
  给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
  给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
  给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。

我的答案

```js
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

```js
// 最长回文数
var longestPalindrome_bf = function(s) {
  if (!s) return '';
  var longest = s[0], str, i, j, k;
  var isPalindrom = function (left, right) {
    //   循环
    while (left < right && s[left] === s[right]) {
      left++;
      right--;
    }
    return left >= right;
  }
  for (i = 2; i <= s.length; i++) {
    for (j = 0; j < s.length; j++) {
        // k = i + j -1 (left, right 相差i-1的距离）
      k = i + len - 1;
      if (isPalindrom(j, k)) {
        str = s.slice(i, k + 1);
        if (longest.length < str.length) longest = str;
      }
    }
  }
  return longest;
}

// P[i][j] = s[i] === s[j] && P[i + 1][j - 1] ? true : false;
var longestPalindrome_dp = function(s) {
  var i, j, len;
  // isPalindrom[i][j] represent s[i..j] is a parlindrom string or not.
  var isPalindrom = new Array(s.length);
  for (i = 0; i < s.length; i++) {
    isPalindrom[i] = new Array(s.length).fill(false);
  }
  var maxLen = 1, longestBegin = 0;
  // initialize
  for (i = 0; i < s.length; i++) {
    isPalindrom[i][i] = true;
    if (i < s.length - 1 && s[i] === s[i + 1]) {
      isPalindrom[i][i + 1] = true;
      maxLen = 2;
      longestBegin = i;
    }
  }
  // compute
  for (len = 3; len <= s.length; len++) {
    for (i = 0; i < s.length; i++) {
      j = len + i - 1;
      if (s[i] === s[j] && isPalindrom[i + 1][j - 1]) {
        isPalindrom[i][j] = true;
        maxLen = len;
        longestBegin = i;
      }
    }
  }
  return s.slice(longestBegin, longestBegin + maxLen);
}

// 枚举轴心位置，进行扩展
var longestPalindrome_enum = function(s) {
  if (!s) return '';
  var longest = s[0];
  var expandAroundCenter = function (left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }
  for (var i = 0; i < s.length; i++) {
    // 奇数
    // ??
    var odd = expandAroundCenter(i, i);
    if (odd.length > longest.length) longest = odd;
    // 偶数
    // ??
    var even = expandAroundCenter(i, i + 1);
    if (longest.length < even.length) longest = even;
  }
  return longest;
}

// 插入特殊字符#, 回文半径P(以该字符为轴心的回文串对折后的长度), 奇数的轴心为原字符休中的字符, 偶数的轴心为#；故需计算P，
// 计算P就是以每个字符为轴心计算回文半径，即每个字符开始向两边搜索，右边会搜索到尚未遍历到的字符，故需记下最大能搜索到的右边界
// 坐标与P数组值的关系？？？？
function longestPalindrome_manmacher(s){
    s = '^#' + s.split('').join('#')+'#$';
    let len = s.length;
    let radius = new Array(len).fill(0);
    let id=0, centerIndex=0, maxRight=0, maxLen=0;
    for(let i=1; i<len-1; i++){
        // 默认回文半径，最右边界-右边 或 i的对称点的半径值
        //记j = 2 * id - i，也就是说 j 是 i 关于 id 的对称点
        // maxRight最小为上一轮的i(无半径值时), id为找到的中心
        // p[j]<maxRight-i，即s[j]为中心的子串包含在s[id]为中心的子串中？由于对称s[i]也包含在s[id]为中心的子串中
        // 否则s[j]为中心的子串，不一定完全包含在s[id]为中心的子串中，由于对称性可知，s[i]为中心的子串向右至少扩展到maxRight的位置
        radius[i] = maxRight > i ? Math.min(maxRight-i, radius[2*id-i]) : 0;
        // i为中心坐标，距中心坐标的右边和左边的字符相同时更新「当前数组项中」半径值
        while(s[i+1+radius[i]] && s[i-1-radius[i]] && s[i+1+radius[i]] === s[i-1-radius[i]]) radius[i]++;
        // 当前中心+半径超出最大右边界，更新最大右边界与id？？
        if(i+radius[i]>maxRight){
            id = i;
            maxRight = i + raidus[i];
        }
        // 最大回文长度小于半径时，更新最大回文长度及中心位置
        if(maxLen<radius[i]){
            maxLen = radius[i];
            centerIndex = i;
        }
    }
}
```
