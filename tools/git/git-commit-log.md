### 提交信息

+ 查看当前 HEAD 的最近一次提交

```bash
git show
# 或
git log -n1 -p
```

+ 修改提交信息


```bash
git commit --amend --only
# 或
git commit --amend --only -m 'xxxxxxx'
```

+ 修改提交(commit)里的用户名和邮箱

```bash
git commit --amend --author "New Authorname <authoremail@mydomain.com>"
```

+ 从一个提交(commit)里移除一个文件

```bash
git checkout HEAD^ myfile
git add -A
git commit --amend
```

+ 删除的最后一次提交，但如果已经推送到远程，会不可逆的改变你的历史，也会搞乱那些已经从该仓库拉取(pulled)了的人的历史

```bash
git reset HEAD^ --hard

# 或
git reset --soft HEAD@{1}
# 或 安全的做法，这创建一个新的提交(commit)用于撤消前一个提交的所有变化(changes)
git revert SHAofBadCommit

git push -f [remote] [branch]
```

+ `删除任意提交`，尽量以 rebase 交互方式进行删除

```bash
git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
git push -f [remote] [branch]
```

::: tip 注意
要避免强推，最好是创建和推(push)一个新的提交(commit)，而不是强推一个修正后的提交。后者会使那些与该分支或该分支的子分支工作的开发者，在源历史中产生冲突。
最好是创建和推(push)一个新的提交(commit)
:::

+ hard reset 后，如何找回提交内容

reflog 记录对分支顶端(the tip of a branch)的任何改变, 即使那个顶端没有被任何分支或标签引用。这只对本地分支起作用，且它只跟踪动作 (例如，不会跟踪一个没有被记录的文件的任何改变)。



```bash
# Git 发生每件事记录的日志
git reflog
# 找到那一次重置提交，再进行一次重置
git reset --hard SHAxxx
```

#### 暂存

+ 暂存新文件的一部分

```bash
git add --patch filename.x

# -p 交互模式，-N 新文件
```

+ 暂存内容变成未暂存

```bash
# 创建一个临时的commit来保存你已暂存的内容
git commit -m 'temp'
# 暂存未暂存的内容
git add .
# 将暂存内容进行 stash
git stash
# 重置最后一个 commit
git reset HEAD^
# 把 stash 的内容 pop 回来
git stash pop --index 0
```

+ 把未暂存的内容移动到另一个已存在的分支

```bash
git stash
git checkout my-branch
git stash pop
```

+ 丢弃本地未提交的变化

```bash
git reset --hard HEAD^
# two commits
git reset --hard HEAD^^
# four commits
git reset --hard HEAD~4
# 或
git chekout -f
```

+ 丢弃某些未暂存内容

```bash
git checkout -p

# 或
# stash 所要保留的内容
git stash -p
# 重置到上一次的提交
git reset --hard
# 再 stash pop
git stash pop

# 或
# stash 要删除的部分
git stash -p
git stash drop
```

+ 扔掉本地的提交(commit)，使分支与远程的保持一致(未 push)

```bash
git reset --hard origin/my-branch
```

+ 提交到了错误的分支，进行的修改

```bash
git reset --hard HEAD^
# 切到对的分支
git checkout -b my-branch
```




### 暂存与提交区别

```bash
git diff --cached
```
