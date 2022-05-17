## 目录或文档

1. ls -t时间排序，-S大小排序，-F附加数据结构
2. nl 输出添加行号，会添加样式
3. chattr, lsattr 隐藏属性是否显示
4. mkdir, rmdir 目录创建与删了
5. cd 更改目录
6. mv, cp 移动与复制 -a 包含特性一起复制；-p 同属性一起复制；- i 询问是否覆盖；-u 有差异才复制
7. touch, rm 创建与删除
8. file 判断类型
9. ln 连结
10. sort [] filenames 将文件进行排序，并将排序结果输出 [-d 排序处理英文、数字、空格字符，-f小写视为大写，-i 040~176之间的ASCII，-b忽略每行开始出的空格 -c 检查是否已排序，-m几个排序好的文件合并，-n按数值大小排序， -o输出， -r 反序，-u忽略相同行，-t 指定栏位分隔符，-k 指定需要排序的栏位] 栏位是列，用: 或 “ ”分隔
11. uniq
12. cut filenames [-f 1/2,3指定显示的列, --complement 取反, -d 指定分隔符，-b字节，-c字符，-f定义字段 {N-, N-M,-M}范围]
13. past 多个文件按列进行合并 -d 间隔符
14. tr 对字符进行替换、压缩、删除 [-c 取代，-d 删除，-s 连续重复的字符以单个字符表示，-t] 如大写转成小写 '[:upper:]' '[:lower:]' 或 'A-Z0-9' 'a-z0-9'
15. awk 对文本和数据进行处理，是强大的编译工具，更多作为脚本来使用 [-F 指定分隔符, -v 设定用户亦是, -f 从脚本中读取awk命令, -f val设置内在限制]

  - 模式：正则、关系表达式、模式匹配表达式~和!~、begin, pattern, end
  - 操作：变量或数组、输出命令、内置函数、控制流语句
  - 内置变量：-v 将外部变量传递给awk
    $n 当前记录的第n个字段，比如n为1表示第一个字段，n为2表示第二个字段。
    $0 这个变量包含执行过程中当前行的文本内容。
    [N] argc 命令行`参数的数目`。
    [G] argind 命令行中当前`文件的位置`（从0开始算）。
    [N] argv 包含命令行`参数的数组`。
    [G] convfmt 数字转换格式（默认值为%.6g）。
    [P] environ 环境变量关联数组。
    [N] errno 最后一个`系统错误的描述`。
    [G] fieldWidths `字段宽度`列表（用空格键分隔）。
    [A] filename 当前输入`文件的名`。
    [P] FNR 同NR，但相对于当前文件。
    [A] FS 字段`分隔符`（默认是任何空格）。
    [G] ignoreCase 如果为真，则进行`忽略大小写`的匹配。
    [A] NF 表示字段数，在执行过程中对应于当前的`字段数`。
    [A] NR 表示记录数，在执行过程中对应于当前的`行号`。
    [A] OFMT 数字的`输出格式`（默认值是%.6g）。
    [A] OFS 输出`字段分隔符`（默认值是一个空格）。
    [A] ORS 输出`记录分隔符`（默认值是一个换行符）。
    [A] RS `记录分隔符`（默认是一个换行符）。
    [N] rStart 由match函数所匹配的字符串的`第一个位置`。
    [N] rLength 由match函数所匹配的字符串的`长度`。
    [N] subSep `数组下标分隔符`（默认值是34）。
    [:alnum:]：字母和数字
    [:alpha:]：字母
    [:cntrl:]：控制（非打印）字符
    [:digit:]：数字
    [:graph:]：图形字符
    [:lower:]：小写字母
    [:print:]：可打印字符
    [:punct:]：标点符号
    [:space:]：空白字符
    [:upper:]：大写字母
    [:xdigit:]：十六进制字符

```shell
## 从文件或标准输入读取一行，然后执行pattern语句块，它逐行扫描文件
## begin与end语句块可选，parttern也是可选，没有则默认执行print，打印每一个读取到的行
## print中的双引号被当作拼接符使用的
awk "BEGIN {} pattern{} END{}"

VAR=10000
echo | awk -v VARIABLE=$VAR '{ print VARIABLE }'

## 或
var1="aaa"
var2="bbb"
echo | awk '{ print v1,v2 }' v1=$var1 v2=$var2

sort -nrk 1.2 -t: sort.txt # 第一栏位的第二个字符开始到最后一个字符为止 1.2,1.2只对第二个字符进行排序
paste employee.txt bonus.txt | awk '{print $1,$2,$3,$5}'|tr 'A-Z' 'a-z'|sort -k 2
```

## 执行表达式

1. expr [length/substr/index/quote] "" [2 5/e] 或者数学表达式

## 查看文本内容

1. cat -E结尾显示为$，-n行号，-v列出看不出来的特殊符号，-b空白行没有编号，-s遇到两个空白行时换为一个
2. more, less
3. head, tail

## 权限与所属

1. umask 预设权限
2. chmod 更新权限
3. chown 将权限赋给
4. chgrp 变更所属群组

## 查找

1. which cmd
2. whereis 数据库寻找特定档案
3. locate，使用之前先用updatedb更新数据库
4. find 时间：mtime +n/-n/n 几天之前，几天之内，n天之间一天内被修改的文件/newer file 比file更新的；权限、名称、属性：-perm mode/-mode全部包括/+mode包含任一 -size, -type, -name
5. grep [-c 统计查找字符的个数, -a binary以text文件白方式查找 -v 反向选择] [显示范围 -a 之后, -b 之前, -c前后] [-e 范本 -f范本文件 -l -L指定符合或不符合范本的文件名称] [-h -H是否标示该列所属的文件名称] [-r 递归] [-d查找的为目录] 范本 filenames
6. xargs 给其他命令传递参数的一个过滤器，是组合多个命令折一个工具，擅长将标准输入转换成命令行参数，能够处理管道或stdin并将其转换成特定命令的命令参数，也可将单行或多行输入转换成其他格式 [-n 3多行输出，-d自定义定界符，-I替换字符]
7. sed

## 进程

1. ps
2. kill
3. reboot
4. init 0 关机
5. init 6 重启
6. killall -i 交互；-e command name；-I 忽略大小写


- 1：SIGHUP，启动被终止的进程
- 2：SIGINT，相当于输入ctrl+c，中断一个程序的进行
- 9：SIGKILL，强制中断一个进程的进行
- 15：SIGTERM，以正常的结束进程方式来终止进程
- 17：SIGSTOP，相当于输入ctrl+z，暂停一个进程的进行

## 系统

1. dmesg 系统信息
2. df 硬盘空间
3. du 目录与子目录的硬盘空间
4. free 内存占用情况
5. top 动态查看系统内存、cpu、进程
6. hostname
7. type 指令的来源
8. shutdown [-r 重启 -h服务停滞后立即关机 -f快速重启] when [时间hh:mm 或 +m分钟后执行 now]
9. fdisk 所有存储设备
10. mount 挂载, umount 卸载
11. eject 弹出光盘
12. at [5pm + 3 days] [命令] 特定的时间执行某个程序或指令; 时间：15:30, 2 weeks, tomorrow
13. crontab 让使用者在固定时间或时间间隔执行程式
14. sleep
15. last 登录者信息
16. write user 传信息给其他使用者
17. uptime 现在时间、系统已运行时间、目前登录用户数、系统在过去1、5、15分钟内的平均负载

## 打包与解压

1. gzip 压缩
2. gunzip 解压
3. tar 压缩zcvf与解压zxvf -C 指定压缩或解压的目录；-x 打包或解压的功能；-j 通过bzip2；-z 通过gzip；-t 查看打包包含哪些文件；-c 新建打包文件；-v 过程


## 日历与时间

1. cal
2. time
3. date +%m%d%y

## 计算数字

1. wc
2. cut
3. paste
4. tr
5. sort, uniq, join, diff, patch

## 变量设定

1. my=v, echo $my
2. unset my
