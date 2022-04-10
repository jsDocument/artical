[环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

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
    bool hasCycle(ListNode *head) {
        int i=0;
        ListNode *fast = head, *slow = head;
        if(head != NULL && head->next == head){
             return true;
        }
        while(head != NULL && fast != NULL){
            slow = slow->next;
            if(fast->next != NULL){
                fast = fast->next->next;
            }else{
                return false;
            }
            if(slow==head) return true;
            if(fast==head) return true;
            if(slow == fast) return true;
        }
        return false;
    }
};
```

[相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

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
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if(headA==NULL || headB==NULL) return NULL;
        int i = 0, j = 0, k = 0;
        ListNode *a = headA, *b = headB;
        while(a != NULL || b != NULL){
            if(a != NULL){
                a = a->next;
                ++i;
            }
            if(b != NULL){
                b = b->next;
                ++j;
            }
        }
        int dis = abs(i - j);
        ListNode *find = i>j ? headA : headB;
        ListNode *short_one = i>j ? headB : headA;
        while(find != short_one && find != NULL && short_one != NULL){
            find = find->next;
            if(dis > k){
                ++k;
            }else{
                short_one = short_one->next;
            }
        }
        if(find == short_one){
            return find;
        }else{
            return NULL;
        }
    }
};

```

[移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)

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
    ListNode* removeElements(ListNode* head, int val) {
        ListNode *cur;
        while(head != NULL && head->val == val){
            head = head->next;
        }
        if(head == NULL) return NULL;
        cur = head;
        while(cur->next != NULL){
            if(val == cur->next->val){
                cur->next = cur->next->next;
            }else{
                cur = cur->next;
            }
        }
        return head;

    }
};
```

[回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)

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
    ListNode* findMid(ListNode* head){
        ListNode *p = head, *mid = head;
        while(p && p->next){
            mid = mid->next;
            p = p->next->next;
        }
        return mid;
    }
    ListNode* reserveList(ListNode* head){
        ListNode *prev = NULL, *temp = NULL;
        while(head){
            // 暂存next结点
            temp = head->next;
            // 更新当前结点的next指向
            head->next = prev;
            // 更新上一结点
            prev = head;
            // 更新当前结点
            head = temp;
        }
        return prev;
    }
public:
    int isPalindrome(ListNode* head) {
        if(!head || !head->next) return true;
        else if(head && head->next && head->val == head->next->val && !head->next->next) return true;
        else if(head && head->next && !head->next->next) return false;
        ListNode *mid = findMid(head);
        cout<<mid->val<<endl;
        mid = reserveList(mid);
        ListNode *before = head, *after = mid;
        while(before && after && before->val == after->val){
            before = before->next;
            after = after->next;
        }
        return after == NULL;
    }
};
```

[删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

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
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        node->next = node->next->next;
    }
};
```

[反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

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
 * @return {ListNode}
 */
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
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *prev = NULL, *cur = head, *next=NULL;
        while(cur != NULL){
            next = cur->next;
            cur->next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
};
```

[链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

```C++
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let fast = head;
  let slow = head;
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
```


