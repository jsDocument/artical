# 链表
1. 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

::: warning
输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL

解释:
- 向右旋转 1 步: 2->0->1->NULL
- 向右旋转 2 步: 1->2->0->NULL
- 向右旋转 3 步: 0->1->2->NULL
- 向右旋转 4 步: 2->0->1->NULL
:::

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

2. 给定一个链表，判断链表中是否有环。
    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

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

3. 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

说明：不允许修改给定的链表。

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

4. 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

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

5. 编写一个程序，找到两个单链表相交的起始节点。

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

6. 反转一个单链表。

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

7. 删除链表中等于给定值 val 的所有节点。

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

8. 请判断一个链表是否为回文链表。

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

9. 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

注：请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

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

10. 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

- get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
- addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
- addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
- addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index - 大于链表长度，则不会插入节点。
- deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。

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
    /** Initialize your data structure here. */
    MyLinkedList() {
        head = NULL;
        size = 0;
    }
    
    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
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
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    void addAtHead(int val) {
        LinkNode *p;
        p = (LinkNode *)malloc(sizeof(LinkNode));
        p->val = val;
        p->next = head;
        head = p;
        ++size;
    }
    
    /** Append a node of value val to the last element of the linked list. */
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
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
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
    
    /** Delete the index-th node in the linked list, if the index is valid. */
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

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
```

11. 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *cur = head, *prev = NULL, *temp = head;
        int len = 0, index;
        if(n==1 && temp->next == NULL){
            return NULL;
        }
        while(temp){
            // 删除最后一项
            len++;
            temp = temp->next;
            
        }
        index = len - n;
        cout<<n<<" "<<len<<endl;
        //  删除第一项
        if(len==n){
            return head->next;
        }
        while(cur && index>=0){
            if(index == 0){
                if(!prev){
                    prev = cur;
                    cur = cur->next;
                }
                prev->next = cur->next;
                prev = prev->next;
                if(prev){
                    cur = prev->next;
                }else{
                    cur = NULL;
                }
                break;
            }else{
                prev = cur;
                cur = cur->next;
                index--;
            }
        }
        return head;
    }
};
```

12. 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的

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

13. 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

::: warning
说明:

- 你的算法只能使用常数的额外空间。
- 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
:::

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