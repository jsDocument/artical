### stash

+ 暂存所以改动

```bash
git stash
# -u 排除一下文件
git stash -u
```

+ stash 指定文件

```bash
git stash push filename1 filename2
```

+ 查看 stash 暂存记录

```bash
git stash list
```

+ stash 时添加 message 信息

```bash
git stash  save <message>
# 或
git stash  push -m <message>
# 或 先手动create一个stash commit
git stash create
git stash store -m "commit-message" CREATED_SHA1
```

+ 使用指定 stash

```bash
# 在栈中的位置
git stash  apply "stash@{n}"
# 或 时间标记
git stash  apply  "stash@{2.hours.ago}"
```
