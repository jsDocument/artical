# 数据存储结构

> 数据结构的操作实现，一般用template来实现，则不需要在写通用实现时，指定数据类型。

## 线性表：逻辑上相邻的元素在物理结构上也是相邻的

- 插入与删除运算需要进行大量移动
- 基本运算：置空 InitList(L), 求长度 ListLength(L), 获取第i个元素 GetNode(L, i), 按值查找 LocateNode(L, x), 插入 InsertList(L, i, x), 删除 DeleteList(L, i)
- 线性表的结构SeqList：

```c++
typedef sturct {
  DataTYpe data[ListSize];
  int Length;
}SeqList;
```

## 线性表的链式存储

- 单链表
  1. 创建：头插入即将新节点更新到链表的前面，head指针指向NULL, p指向新那的数据结点，p->next指向head，再更新head向后移动 head = p
  2. 创建：尾插入，head指向第一个节点，更新rear->next指向新的节点p，再将rear向后移动 rear = p，rear指向最后一个节点
  3. 查找：按序号查找与按值查找
  4. 插入：
  5. 删除

```C++
typedef struct node{
  DataType data;
  struct node *next;
}ListNode;
```

- 循环链表: 最一个节点的next指向head，而非NULL

- 双向链表

```C++
typedef struct dlnode{
  DataType data;
  struct dlnode *next, *prev;
}DListNode;
```
