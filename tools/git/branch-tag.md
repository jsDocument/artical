
### 分支与tag

#### tag

```bash
# 删除 tag
git tag -d <tagName>
git push <remote> :refs/tags/<tag_name>
# 恢复已删除的标签
# 找到无法访问的标签，记下这个标签(tag)的hash
git fsck --unreachable | grep tag
# 恢复
git update-ref refs/tags/<tagName> <hash>
```

#### 创建分支 与 删除

```bash
git checkout -b <branchName>
# 或
git branch <branchName>
git checkout <branchName>
# 删除本地分支
git push -D branchName
# 删除远程分支
git push origin --delete branchName
# 或
git push origin :branchName

# 从远程 daves 分支签出到本地的 daves，是 git checkout -b [branch] [remotename]/[branch] 的简写，得到了一个daves分支的本地拷贝
git checkout --brack origin/daves
# 删除分支的本地分支
git fetch -p
```

#### 把内容`拿到其他分支`

```bash
# 从 branch1 拿到当前分支
git checiout branch1 -- filename
git cherry-pick hash

```

#### 提交到同一个分支，但提交应该要分布在不同的分支里，`cherry-pick` 应用某次提交

```bash
# 查看提交记录
git log
# 记录
commit e3851e817c451cc36f2e6f3049db528415e3c114
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:27 2014 -0400

    Bug #21 - Added CSRF protection
commit 5ea51731d150f7ddc4a365437931cd8be3bf3131
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:12 2014 -0400

    Bug #14 - Fixed spacing on title

commit a13b85e984171c6e2a1729bb061994525f626d14
Author: Aki Rose <akirose@example.com>
Date:   Tue Jul 21 01:12:48 2014 -0400

    First commit
```

```bash
# 把分支重置到正确的提交，HEAD 指向 a13b85e
git reset --hard a13b85e
# 再对 bug #21 创建新的分支
git checkout -b 21
# 用 cherry-pick 把对bug #21的提交放入当前分支，即应用(apply)这个提交(commit)，仅仅这一个提交(commit)，直接在HEAD上面
git cherry-pick e3851e8
# 在对 Bug 14进行操作，记得切换分支
git checkout oriBranch
git checkout -b 14
git cherry-pick 5ea5173
```

#### 不小心删除了一个分支，如何找回该分支的文件

```bash
# 查看操作记录
git reflog
# 创建一个临时分支
git checkout -b my-branch-help
# 该分支存在时的记录即可
git reset --hard xxxx
```

#### merge 代码

+ 安全合并策略

```bash
# 合并但不自动提交
git merge --no-commit branchName
# 为特性分支(feature branch)的存在过留下证据
git merge --no-ff branchName
# 一个分支合并成一个提交
git merge --squash my-branch
```

+ 查看分支上所有提交是否都合并过了，做一次 diff

```bash
git log --graph --left-right --cherry-pick --oneline HEAD ^feature/120-on-scroll
# 分支之间不共享的提交(commit)的列表
git log --no-merges main ^feature/120-on-scroll
```

#### 组合提交，再推送

```bash
# 一次交互式的 rebase，且进行 reorder/fix/squash 都是安全的
git rebase -i @{u}
```

+ 存在冲突，需要解决

```bash
# 可视化的差异编辑器
git mergetool -t opendiff
# 再 add 变化了的文件
git add filename
# 继续rebase
git rebase --continue
# 如果冲突解决后，结果与提交前一样
git rebase --skip
# 也可以节省整个 rebase 过程
git rebase --abort
```

#### 撤销 rebase / merge

```bash
# 把原始的HEAD保存在一个叫ORIG_HEAD的变量里, 所以要把分支恢复到rebase/merge前的状态是很容易的。
git reset --hard ORIG_HEAD
# TODO
git reset --soft main
```

#### 如何不要把你的变化(changes)反映到远程分支上，安全使用 rebase 的方法

```bash
git checkout my-branch
# 相对 main 进行 rebase
git rebase -i main
git checkout main
git merge --ff-only my-branch
```

#### 交互式 rebase 命令，再编辑器里看到的内容

可以用里面的Commands替换上面的`pick`

+ 删除一个行来删除一个提交
+ 组合下面的两个，把对应行 pick 的位置，改成 `f`
+ 合适并重命名这些提交，对应行用的第一个位置用 `r`, `s` 替换

```bash
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
pick b729ad5 fixup
pick e3851e8 another fix

# Rebase 8074d12..b729ad5 onto 8074d12
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

