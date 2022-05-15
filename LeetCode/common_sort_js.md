### 排序算法

交换排序

+ 冒泡排序：从第一个到最后一个，相邻元素依次循环比较，j与j+1比较；内循环为len-1-i时结束；以下为改进该算法：
  1. 定义一个标志，该趟未进行一次交换，则排序结束。
  2. 改进：记录最后一次进行交换的位置，为下次i循环做准备
  3. 同时进行正向与反向比较，移位
+ 快速排序：left<--->right，以下为具体步骤：
  4. 取第一个为基数，从右边开始，找比基数小的数；从左边第二个找比基数大的数
  5. 最后将基数与最后一个位置进行交换，基数归位；最后一个位置变成了基数，原来的基数变为另一组的基数
  6. 再对上面分的两个区块进行比较排序


插入排序

1. 直接插入：从左到右，第一个元素为已排序元素，取下一个元素与其比较，根据大小存入相应位置；内层倒序循环已排好的序列，满足条件时移位。
2. 希尔排序：对插入排序的改进，缩小增量排序，

选择排序

+ 直接选择：循环0~n，选最小与0交换；1~n依次交换
+ 堆排序：i结点的父结点(i-1)/2，左右子节点：2*i+1 或 2*i+2；堆(是完全二叉树或近似完全二叉树)：父节点的键值总是大于或等于(小于或等于)任何一个子节点的键值；每个结点的左子树和右子树都是一个二叉树。一般用数组表示堆
  1. 将R1~Rn建成一个大根堆，堆为无序区(从len/2开始调整，直到第一个节点，找出节点与两个子节点，选出最大(最小)，再进行交换，再调用调整过的堆)
  2. R1与Rn交换，此时无序区：R1~Rn-1，有序区：Rn；满足R1~Rn-1 <= Rn的值。。。。
  3. 过程时间复杂度与堆的深度有关，是lgn操作

+ 归并排序：
  1. 使子序列有序，再使子序列段间有序，将已有序的子序合并成一个有序表。二路归并。
  2. i<=j, i&k, j&k; 其中一个有序表取完，则闭再将另一个有序表中剩余的元素复制到r中, 下标k到下标t的单元

+ 基数排序：

```js
// 冒泡, 如果j=i+1呢？
function buble(nums){
  let len = nums.length, i = 0, temp;
  for(; i < len; i++){
    for(let  j = 0; j < len - 1 - i; j++){
      if(nums[j]>nums[j+1]){
        temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }
  }
  return nums;
}

// 插入排序
function insert(nums){
  let len = nums.length, temp;
  for(let i=1; i<len; i++){
    // 与左边相比，遇到需要插入的元素
    if(nums[i]<nums[i-1]){
      temp = nums[i];
      // 找插入位置
      let j = i-1
      for(; j>=0 && temp <nums[j]; j--){
        // 位置向后移
        nums[j+1] = nums[j];
      }
      nums[j+1] = temp;
    }
  }
  return nums;
}

// 堆排序
function main(nums){
  let lastIndex = nums.length - 1;
  let startIndex = (lastIndex - 1)/2;
  let temp;
  // 最后一个节点的父节点开始
  for(let i = startIndex; i >=0; i--){
    swap(nums, lastIndex, i);
  }
  // 末位与头交换
  for(let i = lastIndex; i>0; i--){
    temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;
    swap(nums, i, 0);
  }
}
function swap(arr, size, index){

}
// 希尔排序

```

```js
// 快速
function quick(nums, left, right){
  let len = nums.length, base = nums[left], low = 1, t;
  left = left || 0;
  right = right || len-1;
  let high = right;

  while(low != high){
    while(base<=nums[high]){
      high--;
    }
    while(base>=nums[right]){
      low++;
    }
    if(low < high){
      t=nums[low];
      nums[low] = nums[high];
      nums[high] = t;
    }
  }
  // 基数的位置
  nums[left] = nums[low];
  nums[low] = base;
  quick(nums, left, low-1);
  quick(nums, low+1, len-1)
}
```
