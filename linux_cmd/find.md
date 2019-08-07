# find  路径 选项  参数； 指定目录下查找文件

例：

1. find . -type f -name "*"|xargs grep "xxx" 文件内容包含



- 类型

1. 文件名： -name
2. 文件路径：-path
3. 正则：-regex "", -iregex
3. 类型：-type f 普通文件, l 符号连接, d 目录, c 字符设备, b 块设备, s 套接字, p Fifo; -fstype 系统类型下，-xtype检查符号连接
4. 深度：-maxdepth N, -depth, -mindepth N
5. 时间：访问atime, amin、修改mtime, mmin、变化ctime, cmin
: -7 七天内，7七天前，+7 超过7天前
6. 时间比较：anewer 存取，cnewer 更改，newer更改 [文件] 时间更接近于该文件，-used 更改后在指定的时间内曾被存取过
7. 日期：daystart  从本日开始计算时间
8. 尺寸：-empty 文件大小为0 或 空目录，-size b —— 块（512字节）, c —— 字节, w —— 字（2字节）, k —— 千字节, M —— 兆字节, G —— 吉字节
: + 10, -10, 10
9. 用户、组、权限：-perm 777, -perm -o=r， -user, -nouser, -group, -nogroup, -gid, -uid, -owner 拥有者
10. 链接：links N 符合指定的硬连接数目的文件或目录，follow 排除符号连接, -noleaf 至少存在两个硬链接
11. 跳过指定目录：-prune；如-path "./cc" -prune 跳过cc目录
12. 与其他命令结合：
  -exec chown tom {} \; 更改所有权为tom, {}用来匹配所有文件，然后被替换成相应的文件名
  -exec cat {}\;> /test.txt 拼接起来，写入到文件
  -exec cp {} old \; 移动到old目录
  -exec printf "File: %s\n" {} \; 以File: 文件名的形式打印出来
  -exec ./test.sh {} \; 执行脚本
  -ok rm {} \;
13. 设置返回值：-false, -true
14. 输出指定结果：-ls 查找为true时列出到标准输出， -fls [文件] 保存为指定的列表文件
15. 输出：-print, -fprint [文件], -print0 在同一行, -printf [格式] 可以指定输出格式
16. inum [inode] 编号
17. 文件系统：-mount, -xdev

: ! 取反运算
