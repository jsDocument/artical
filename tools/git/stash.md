### stash

暂存工作目录下所有改动

```javascript
git stash
```

-u 来排除一下文件

```javascript
git stash -u
```

暂存指定文件

```javascript
git stash push filename1 filename2
```

暂存时记录消息

```javascript
git stash save <message>
// 或
git stash push -m <message>
```

暂存记录与使用

```javascript
git stash list
git stash apply "stash@{n}" // 栈中的位置
// 或升级标记
git stash apply "stash@{2.hours.ago}"
```

暂存时保留未暂存内容

```javascript
git stash create
git stash store -m 'message'
```
