# bash 题目

### 给定一个文件 file.txt，转置它的内容。你可以假设每行列数相同，并且每个字段由 ' ' 分隔.

```bash
awk -F ' ' 'print $0' ./test.txt
```
