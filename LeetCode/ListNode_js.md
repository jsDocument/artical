+ 链表相关的题目：
  + 两数相加，两个链表同位置的数相加，每位数字都是按照 逆序 的方式存储的；需注意进位，个位：p.val % 10, 十位：p.val / 10
  + 反转链表: K 个一组，反转链表
  + 合并链表
  + 相交链表
  + 删除倒数第 N 个节点
  + 交换相邻节点位置

交换节点、反转的要点：

```javascript
var addTwoNumbers = function(l1, l2) {
    let up = 0, val, val1, val2, head = l3 = new ListNode();
    while(l1?.val !== null || l2?.val !== null || up>0){
        if(!l1 && !l2 && up <=0){
            break;
        }else if(l1 || l2){
            l3.next = new ListNode()
        }
        val1 = l1 && l1.val !== null ? l1.val : 0;
        val2 = l2 && l2.val !== null ? l2.val : 0;
        val = val1 + val2 + up;
        console.log(val1, val2, up);
        up = Math.floor(val / 10);
        l3.val = val % 10;
        l3 = l3.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return head;
};
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
// 反转中间一段 head, left, right
// 按 k 个一反转
// 删除倒数第 N 个节点，p与 tailer 的节点间隔数为 n+1个，如果 n 等于链表长度，这 p 指针为移动
var removeNthFromEnd = function(head, n) {
    let counter = 0;
    let p = tailer = head;
    let next;
    if(head && !head.next && n >= 1) return null;
    while(tailer){
        counter++;
        if(n < (counter-1)){
            console.log(n, counter, p, tailer)
            p = p.next;
        }
        tailer = tailer.next
    }
    // p 指针未移动
    if(p === head && n === counter){
        head = head.next;
    }else{
        next = p.next && p.next.next || null;
        p.next = next;
    }
    return head;
};
```

+ 反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序；1->2->3->4->5->6->7->8->null; k = 3; 结果应该为 6->7->8，3->4->5，1->2

```javascript
function reverseList(_head, _k){
  while()
}
```
