### 剑指字符串系列[Offer 53 58]

[0～n-1中缺失的数字](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums.length === 1){
        return nums[0] === 0 ? 1 : 0
    }
    for(i = 0; i < nums.length ; i++){
        if(i !== nums[i]) return i
    }
    return nums.length
};
```

[左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.substring(n)+s.substring(0,n)
};
```
