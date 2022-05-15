
暂存与提交

```javascript
git commit --amend // 把暂存内容添加到上次的提交
git add --patch filename //暂存一个新文件的一部分？或 -p 交互模式，-s 分割提交
git add -N filename // 添加新文件，-e 手动选择需要添加的行
git diff --cached
```


查看提交记录

```javascript
git show
git log -n1 -p
git reflog // 回到以前的某个状态
git reset --soft HEAD^ //回到之前的 commit
```

修改提交记录

```javascript
git commit --amend --only -m 'xxx'  // 未推送，已提交，修改提交信息
git commit --amend --author 'xxx' //修改提交里的用户名和邮箱
```

修改提交数据

```javascript
git checkout HEAD^ filename //从提交里移除一个文件
git add -A
git commit --amend
```



重置与暂存

```javascript

// 丢弃未暂存的内容
git checkout -p
// 重置
git reset --hard HEAD^ //会丢弃修改, HEAD~4
git reset filename
// 或
git checkout -f // 丢弃未暂存的内容
// 或 保留下来的内容
git stash -p
git reset -- hard
git stash pop
```

关于撤销操作

```javascript
// 已经推送到远程，可以用下面方法撤销，但会不可逆的改变历史，也会搞乱已经从该仓库拉取了的历史
git reset HEAD^ --hard
git push -f [remote] [branch]
// 未推送到远程
git reset --soft HEAD@{1}
// 已推送，安全的方式：会创建一个新的提交，用于撤销前一个提交的所有变化
git revert SHAofBadCommit
git push -f
```

跟踪文件

```javascript
git mv --force fileName newName
git rm --cached filename //从 git 中删除，但保留该文件
```
