### find [目录/文件]  (! 否定) [参数] [表达式]

+ inum  按inode号去查找，首先查看文件的inode --> stat file
+ samefile  查找 和某个文件相同的inode，不用查看文件的inode

### 配置

+ -exec cmd {} \; 括号来标记文件名在命令中的位置
+ -name
+ -iname
+ -path
+ -maxdepth/mindepth 2
+ -a/m/ctime 7
+ -size +2k/b/c/w/M/G
+ -delete 删除匹配
+ -perm 644
+ -user root


+ 使用：查找文件的硬链接, find 不会跨系统且具有相同inode号
+ find / -inum Number>dev/null
+ 符号链接，查找过滤源文件名  find -type l -exec ls -l {} \;

### ls

-i inode号
-l 长数据，包含信息更详细
-r 反向显示结果
-L 链接名
-S 按大小排序
-t 时间排序
-l 详细信息
-R 目录所有的子目录

`- 上一个工作目录`


`结构: 文件类型  权限  连接数  所有者文件 所属组  文件大小  最后修改时间  文件名`

`文件类型 所有者权限  所属组权限  其他人权限`  读  写   执行

### 目录操作  cd  pwd   basename 文件名   dirname  目录名

+ mkdir -mp  权限   递归
+ rmdir -p 上层为空，也删除

+ mv  -f  -i  -u
+ cp
-d 如果文件为链接文件，则复制的为链接文件而非本身
-l 创建硬连接
-s 符号链接 【快捷方式】有->标识
-p 连同文件属性
-u 更旧才更新

+ rm  -f 强制  -i 询问  -r 递归

### 文件内容 cat  tac  nl  more  less  head  tail od 二进制


