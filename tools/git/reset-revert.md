
错误的拉取，需要恢复

```javascript
git reflog
git reset --hard hash
```

丢掉本地的 commit, 使本地分支与远程的一致

```javascript
git  status
git reset --hard origin/my-branch
```

需要提交到新分支，但错误的提交到了main分支

```javascript
git branch my-branch
git reset --hard HEAD^ // main 重置到前一个提交
git push
git checkout my-branch
```

把内容拿到新分支

提交内容应该属于不同分支，结果提交到一个分支了，把提交拿到当前分支

```javascript
git cherry-pick hash

```

