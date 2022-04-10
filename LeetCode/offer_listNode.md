奇偶链表：[https://leetcode-cn.com/problems/odd-even-linked-list/]
实现思路：

+ oddH奇数头节点与oddT奇数尾节点初始指向第一个节点
+ evenH偶数头节点、evenT偶数尾节点初始指向第二个节点
+ 初始节点 p 指向第三个节点，通过一个移动指针 p，控制整个链表的遍历，改变 oddT.next, evenT.next 的指向来创建奇偶链表，再移动 oddT, evenT指针，p 每次移动两个节点
+ 最后奇偶链表合并返回

```javascript
var oddEvenList = function(head) {
    let oddH = oddT = head;
    if(!head || !head.next) return head;
    let evenH = evenT = head.next;
    let p = head.next && head.next.next;
    while(p){
        oddT.next = p;
        evenT.next = p.next;
        oddT = oddT.next;
        evenT = evenT.next;
        p = p.next && p.next.next;
    }
    oddT.next = evenH;
    return oddH;
};
```

[从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

```javascript
var reversePrint = function(head) {
    let arr = convertArray(head);
    let len = arr.length;
    let ret = []
    for(let i=len-1; i>=0; i--){
        ret.push(arr[i]);
    }
    function convertArray(head){
        let arr = [];
        while(head){
            arr.push(head.val);
            head = head.next;
        }
        return arr;
    }
    return ret;
};
```

[合并两个排序的链表](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

[与21 题相同](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }else if(!l2){
        return l1;
    }
    let temp = head = new ListNode();
    while(l1 && l2){
        if(l1.val < l2.val){
            temp.next = l1;
            l1 = l1.next;
        }else{
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    temp.next = !l1 ? l2 : l1;
    return head.next;
};
```

```C++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        if(!l1 && !l2) return NULL;
        else if(l1 && !l2) return l1;
        else if(!l1 && l2) return l2;
        ListNode *p = l1, *l3 = NULL, *q = l2, *newHead = NULL;
        if(p && q){
            if(p->val<=q->val){
                l3 = p;
                newHead = p;
                p = p->next;
            }else{
                l3 = q;
                newHead = q;
                q = q->next;
            }
        }
        while(p && q){
            if(p->val<=q->val){
                l3->next = p;
                p = p->next;
            }else{
                l3->next = q;
                q = q->next;
            }
            l3 = l3->next;
        }
        if(p != NULL) l3->next = p;
        if(q != NULL) l3->next = q;
        return newHead;
    }
};
```

[链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

```C++
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let fast = head;
  let slow = head;
  while(fast && k>0){
    fast = fast.next;
    k--;
  }
  while(fast){
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
```

[反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/)

```javascript
// 反转 双指针，cur 是插入一个空节点，p 指向当前节点
var reverseList = function(head) {
  let p = head;
  let cur = new ListNode(0);
  let next;
  if (!p || !p.next) return p;
  while (p){
      next = p && p.next;
      p.next = cur
      cur = p;
      p = next;
  }
  return cur;
};
// 反转解法二，对第一个节点做特殊处理
var reverseList = function(head) {
  let prev = head;
  if (!prev || !prev.next) return prev
  let next;
  let cur = prev.next;
  while (prev){
    next = cur && cur.next;
    if(cur){
      cur.next = prev;
      if(prev == head){
        prev.next = null;
      }
    }else{
      break;
    }
    prev = cur;
    cur = next;
  }
  return prev;
};
```

```C++
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null, cur = head, next = null;
  while(cur){
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
```

[删除链表的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if(!head){
    return;
  }
  let n = head;
  let prev = null;
  while(n != null){
    if(n.val == val){
      if(prev && n.next){
        prev.next = n.next;
      }else if(!n.next){
        prev.next = null;
      }else{
        head = head.next;
      }
      break;
    }else{
      prev = n;
      n = n.next;
    }
  }
  return head;
};
```

[回文链表](https://leetcode-cn.com/problems/aMhZSa/)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head, fast = head;
  if(head && !head.next) return true;
  if(head && head.next && head.val === head.next.val && !head.next.next) return true;
  if(!head || !head.next || !head.next.next) return false;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  if(fast) slow = slow.next;
  let next = null, prev = null, cur = slow;
  while(cur){
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  while(prev && head){
    if(prev.val !== head.val){
      return false;
    }else{
      prev = prev.next;
      head = head.next;
    }
  }
  return true;
};
```
