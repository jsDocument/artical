# git 配置基本命令

配置

~/.gitconfig里的[alias]可以配置别名

```javascript
[alias]
    a = add
    amend = commit --amend
    c = commit
    ca = commit --amend
    ci = commit -a
    co = checkout
    d = diff
    dc = diff --changed
    ds = diff --staged
    f = fetch
    loll = log --graph --decorate --pretty=oneline --abbrev-commit
    m = merge
    one = log --pretty=oneline
    outstanding = rebase -i @{u}
    s = status
    unpushed = log @{u}
    wc = whatchanged
    wip = rebase -i @{u}
    zap = fetch -p
```

缓存一个仓库的用户名和密码

```javascript
git config --global cendential.helper cache
git config --global cendential.helper 'cance --timeout=3600'
```

分支常用的功能:

1. 查看分支的合并与非合并情况 --merged  --no-merged
2. 删除本地分支 -d

- 远程仓库名/分支名
- 删除远程分支 git push origin :branch1


## 之前提交，忽略某些提交文件，之后不再提交

1. git update-index --assume-unchanged  file
2. git update-index --no-assume-unchanged  file
3. git rm --cached -r -n 将文件从暂存删除
4. git checkout \<tree-ish> \<files> 或 git checkout HEAD^ file 恢复到之前版本
5. git log --stat --diff-filter=D 文件在哪些被删除了
6. git reset HEAD file 把文件还原？

## 过程，及返回上一步

1. untracked 未跟踪 ---> add，可以开始跟踪
2. no stage 跟踪未暂存 ---> add，放入暂存区 相反：git rm file(--cached); git mv
3. commit
4. push
5. git diff file file 变化

