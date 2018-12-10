# 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

示例 1:

nums1 = [1, 3]
nums2 = [2]

中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

中位数是 (2 + 3)/2 = 2.5

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let left = nums1.length-1, right = nums2.length-1, result = [], index = Math.floor((left + right)/2);
    for(let i=0, j=0; i < left; i++){
            console.log(nums1[i],nums2[j])
        while(j<=right){
            if(nums1[i] > nums2[j]){
                result.push(nums2[j]);
            }else{

                result.push(nums1[i])
            }
            j++;
            console.log(result)
        }
    }
    return (result[index] + result[index+1])/2
};
console.log(findMedianSortedArrays([1,3],[2]))

```
