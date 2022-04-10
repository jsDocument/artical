[两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

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
```

[删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

```javascript
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

[两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

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
    ListNode* swapPairs(ListNode* head) {
        if(!head || !head->next) return head;
        ListNode *odd = head, *newHead = head->next, *even = newHead, *next = NULL, *temp = NULL;
        while(even){
            temp = even->next;
            if(temp && temp->next){
                next = temp->next;
            }else if(temp && !temp->next){
                next = temp;
            }else{
                next = NULL;
            }
            if(odd){
                even->next = odd;
                odd->next = next;
                odd = temp;
            }
            if(odd && odd->next){
                even = odd->next;
            }else{
                even = NULL;
            }
        }
        return newHead;
    }
};
```

[旋转链表](https://leetcode-cn.com/problems/rotate-list/)

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
    ListNode* rotateRight(ListNode* head, int k) {
        if(!head || !head->next || k<=0) return head;
        ListNode *last = head, *c = head, *prev = NULL, *p = head;
            int len=1;
        while(c && c->next){
            c = c->next;
            ++len;
        }
        k %= len;
        cout<<len<<endl;
        while(k>0){
            while(last && last->next){
                if(!last->next->next){
                    prev = last;
                }
                last = last->next;
            }
            last->next = p;
            p = last;
            prev->next = NULL;
            --k;
        }
        return last;
    }
};
```

[有序链表转换二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)

```C++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* sortedListToBST(ListNode* head) {
        return sortChild(head, NULL);
    }
private:
    TreeNode* sortChild(ListNode* head, ListNode *tail){
        if(head == tail){
            return NULL;
        }
        if(head->next == tail){
            TreeNode *root = new TreeNode(head->val);
            return root;
        }
        ListNode *fast = head, *slow = head;
        while(fast != tail && fast->next != tail){
            slow = slow->next;
            fast = fast->next->next;
        }
        TreeNode *root = new TreeNode(slow->val);
        root->left = sortChild(head, slow);
        root->right = sortChild(slow->next, tail);
        return root;
    }
};
```

[环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/submissions/)

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
    ListNode *detectCycle(ListNode *head) {
        ListNode *fast = head, *slow = head;
        if(head != NULL){
            if(head == head->next) return head;
            while(fast != NULL && fast->next != NULL){
                slow = slow->next;
                fast = fast->next->next;
                if(slow == fast){
                    ListNode *p = head;
                    while(p != slow){
                        p = p->next;
                        slow = slow->next;
                    }
                    return p;
                }
            }
        }
        return NULL;
    }
};
```


[奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list/)

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
    ListNode* oddEvenList(ListNode* head) {
        if(!head) return NULL;
        else if(!head->next) return head;
        ListNode *odd = head, *even = head->next, *temp = head->next;
        while(odd != NULL && even !=NULL  && odd->next !=NULL){
            odd->next = even->next;
            if(odd->next){
                odd = odd->next;
            }
            if(even && odd){
                even->next = odd->next;
                even = even->next;
            }
        }
        odd->next = temp;
        return head;
    }
};
```

[设计链表](https://leetcode-cn.com/problems/design-linked-list/)

```C++
typedef struct node{
    struct node *prev;
    struct node *next;
    int val;
}LinkNode;

class MyLinkedList {
    protected:
    LinkNode *head;
    int size;
public:
    MyLinkedList() {
        head = NULL;
        size = 0;
    }

    int get(int index) {
        int i = 1;
        LinkNode *p = head;
        if(index<0 || head == NULL || index>size-1) return -1;
        if(index == 0){
            return head->val;
        }else{
            while(i<=index && p->next != NULL){
                p = p->next;
                ++i;
            }
            return p->val;
        }
    }
    void addAtHead(int val) {
        LinkNode *p;
        p = (LinkNode *)malloc(sizeof(LinkNode));
        p->val = val;
        p->next = head;
        head = p;
        ++size;
    }
    void addAtTail(int val) {
        LinkNode *p = head;
        LinkNode *s;
        s = (LinkNode *)malloc(sizeof(LinkNode));
        while(p->next != NULL){
            p = p->next;
        }
        s->val = val;
        s->next = NULL;
        p->next = s;
        ++size;
    }
    void addAtIndex(int index, int val) {
        if(index>size) return;
        if(index == 0 || size == 0){
            addAtHead(val);
        }else if(index == size){
            addAtTail(val);
        }else{
            int i = 1;
            LinkNode *p = head;
            LinkNode *s;
            s = (LinkNode *)malloc(sizeof(LinkNode));
            s->val = val;
            while(index <size && i<index && p->next != NULL){
                p = p->next;
                ++i;
            }
            s->next = p->next;
            p->next = s;
            ++size;
        }
    }

    void deleteAtIndex(int index) {
        if(index == 0){
            head = head->next;
            --size;
        }else if(index<size){
            int i = 1;
            LinkNode *p = head;
            while(p->next != NULL && i<index){
                p = p->next;
                ++i;
            }
            p->next = p->next->next;
            --size;
        }
    }
};

```
