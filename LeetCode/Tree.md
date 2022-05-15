[根据前序、中序遍历生成二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/solution/)

解题思路：分治思想

1. 找到根节点，根据根节点在中序遍历中的位置，确定左子树与右子树
2. 再根据跟子节点，划分其左子节点与右子节点

[二叉树转为双向链表](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/solution/)



[94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    dfs(res, root);
    return res;
};
var dfs = function(res, node){
    if(!node) return res;
    dfs(res, node.left);
    res.push(node.val);
    dfs(res, node.right);
}
```

[100. 相同的树](https://leetcode.cn/problems/same-tree/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q){
        return true;
    }else if(!p || !q){
        return false;
    }else if(p.val !== q.val){
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

[101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/)

终止条件：

left 和 right 不等，或者 left 和 right 都为空
递归的比较 left，left 和 right.right，递归比较 left，right 和 right.left

递归过程：

判断两个指针当前节点值是否相等
判断 A 的右子树与 B 的左子树是否对称
判断 A 的左子树与 B 的右子树是否对称

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    return dfs(root.left, root.right)
};
var dfs = function(left, right){
    if(!left && !right){
        return true;
    }else if(!left || !right){
        return false;
    }else if(left.val !== right.val){
        return false;
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left);
}
```
