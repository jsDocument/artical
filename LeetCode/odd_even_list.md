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
