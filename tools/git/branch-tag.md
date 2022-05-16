
### 分支与tag

```javascript
git tag -d <tagName>
//恢复已删除的标签
git fsck --unreachable | grep tag
git update-ref refs/tags/<tagName> <hash>
```

创建分支

```javascript
git checkout -b <branchName>
// 或
git branch <branchName>
git checkout <branchName>
```
