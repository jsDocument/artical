# 排序算法

## 插入排序

1. 直接插入

```c++
void insertSort(int *R, int n){
  int i, j, temp;
  for(i = 1; i<n; i++){
    if(R[i]<R[i-1]){
      temp = R[i];
      // 将temp插入到队列的i-1之前, 即之前排好序的队列中
      for(j = i-1; temp < R[j] && j>=0 ; j--){
        R[j+1] = R[j];
      }
      R[j+1] = temp;
    }
  }
}
```

2. 希尔排序即『缩小增量排序』，把数组R元素分成d1(增量)个组，所有下标距离为d1的倍数的元素，即[1],[1+d1],[1+2d1]...为一组，[2],[2+d1],[2+2d1]...为一组，在各组内进行插入排序。然后再取第二个增量d2(d2<d1)，重复上述分组与排序，走到所取增量等于1；把所有元素放入到一组中进行直接插入排序。(如何选择增量值：最后增量必须为1，尽量避免增量之间互为位数)

```c++
void shellInsert(int *R, int d, int n){
  int i, j, temp;
  for(i=d + 1; i <= n; i++){
    // i的值 小于 i-d的值时，开始进行该组的循环比较
    if(R[i]<R[i-d]){
      temp = R[i];
      j = i - d;
      // 一组当中第2个及其后元素的比较
      while(j>0 && temp<R[j]){
        R[j+d] = R[j];
        j = j-d;
      }
      R[j+d] = temp;
    }
  }
}
// 按增量序列d[0..t-1]对R进行希尔排序
void shellSort(int *R, int d[], int t, int n){

}
```


## 交换排序

1. 冒泡排序：依次将相邻元素进行比较和交换
2. 双向冒泡：交替改变扫描方向

```C++
// i的取值？
void DbubbleSort(int *R, int n){
  int noSwap = 1, temp;
  int i = 1, j;
  while(noSwap){
    noSwap = 0;
    for(j = n-i; j>= i; j--){  // 从后向前扫描 [n-i...i]
      if(R[j]<R[j-1]){
        temp = R[j];
        R[j] = R[j-1];
        R[j-1] = temp;
        noSwap = 1;
      }
    }
    for(j=i+1; j< n-i; j++){ // 从前向后扫描
      if(R[j]>R[j+1]){

      }
    }
    i = i+1;
  }
}
```

3. 快速排序：划分交换排序，是对冒泡排序的一种改进，冒泡是相邻节点的比较与交换，但该排序的比较和交换是从两端向中间进行。
- 无序区，较小无序区[low...i-1]和[i+1...high]
- 基准

```C++
void Partition(int *R, int low, int high){
  int i,j;
  i = low;
  j = high;
  temp = R[i];
  while(i<j){
    while(temp <= R[j]){
      j--;
    }
    if(i<j){
      R[i] = R[j];
      i++;
    }
    while(temp>=R[i]){
      i++;
    }
    if(i<j){
      R[j] = R[i];
      j--;
    }
  }
  R[i] = temp;
  return i;
}

void quickSort(int *R, int low, int high){
  int p;
  if(low < high){
    p = Partition(R, low, hight);
    quickSort(R, low, p-1);
    quickSort(R, p+1, high);
  }
}

```

## 选择排序

1. 直接选择：每次从待排序的无序区中选择最小/大的，与R[0],R[1]依次交换。

2. 堆排序：如何建堆是关键，父节点R[i/2]，左子节点[2i]，右子节点[2i+1]，找出子节点中较大的那个和父节点比较，如果大于父节点则进行交换，再继续将该子节点作为父节点，与其子节点再进行比较。

```C++
/**
* R  数组列表
* i  根节点位置
* n  列表长度
*** 下标为0不可用
**/
void shift(int *R, int i, int n){
  int j;
  int temp = R[i];
  j = i*2;
  while(j<=n){
    if(j<h && R[j]<R[j+1]){
      j++;  // 右子节点大，则取右子节点与父节点进行比较
    }
    if(temp>=R[j]){
      break;
    }
    R[i] = R[j];
    i = j;  // 选取子节点作为父节点进行再与其子节点进行比较
    j = 2*i;
  }
  R[i] = temp;
}
void heapSort(int *R, int n){
  int i, temp;
  //  建大根堆
  for(i = n/2; i>0; i--){
    shift(R, i, n);
  }
  // 堆排序，将第一个最大与最后一项交换，此时只有最一后项是有序区，其他项为无序区，因为无序区的7个关键字不为堆，需要调整其为堆
  for(i = n; i>1; i--){
    //  交换第一位与最后一位
    temp = R[1];
    R[1] = R[i];
    R[i] = temp;   // 将排序好的放到最后，有序区
    shift(R, 1, i-1);  // 不包含排好序的，堆排序；每次将建好堆的根节点放入到有序区
  }
}


```

## 归并排序
待排序看成n个长度为1的子元素，把子元素两两归并，有「n/2」个长度为2的有序组，再把「n/2」个有序组再两两归并，如此反复，直到归并得到一个长度为n的有序组为止，其为二路归并排序；可以用于对两个有序的序列进行合并。

- 长度为奇数，则最后一组子元素的长度可能小于。。，最后一个子元素无需和其他子元素归并
- 长度为偶数，则要对最后一对子元素中后一个子元素的区间上界为n？

```C++
// 对R[low...m] 和 R[m+1...high]归并为有序的 N[low...high]
void Merge(int *R, int *N, int low, int m, int high){
  int i, j, k;
  i = low;
  j = m+1;
  k = low;
  while(i<=m && j<=high){
    if(R[i]<R[j]){
      N[k++] = R[i++];
    }else{
      N[k++] = R[j++];
    }
    // 如果两个有序区长度不一样，将剩余项合并进来
    while(i<=m){
      N[k++] = R[i++];
    }
    while(j<=high){
      N[k++] = R[j++];
    }
  }
}

void mergePass(int *R, int *N, int len, int n){
  int i, j;
  // 将两组合并后，N更新了2*len的元素
  for(i = 1; i+2*len-1<n; i = i+2*len){
    merge(R, N, i, i+len-1, i+2*len-1);
  }
  // 尚有文件未合并
  if(i+len-1<n){
    merge(R, N, i, i+len-1, n);
  }else{ // 元素个数为奇数个，将剩余子元素复制到N中
    for(j = i; j<=n; j++){
      N[j] = R[j];
    }
  }
}

void mergeSort(int *R, int *N, int n){
  int len = 1;
  while(len<n){
    // len为合并的有序组长度
    mergePass(R, N, len, n)
    len = len *2;
  }
}

```

## 分配排序把

1. 箱排序：设置若干个箱子，依次扫描数组项，把等于k的记录全部装入到第k个箱子里，然后按序号依次将各非空箱子首尾连接起来。
- 循环序列，等于i的，存入到R[i]的链队列中，R[i].f，R[i].r

2. 基数排序：对箱排序的改进和推广，因箱排序只适用于取值范围较小的情况，否则所需箱子的数据太多，导致存储空间的浪费和计算时间的增长。需要对数组值进行分析，然后得出对箱排序结果的改进。

- 如取值为0~99，则值为两位整数，则先对其个位数对10进行求余进行箱排序
- 在排序的基础上再对其十位数除以10进行箱排序；这样只需要标号0~9的这10个箱子，进行二趟箱排序即可完成排序操作，而不需要对100个箱子进行一趟箱排序。

```C++
// 假设范围在10~999
void basicSort(int *R, int n){
  int i=0,j, one, two, three;

  for(; i<n; i++){
    for(j=0; j<3; j++){
      one = R[i]%10;
      two = parseInt((R[i]%100)/10);
      three = parseInt(R[i]/100);
    }

  }
}
```

