## 输入流stdin、输出流stdout、错误流stderr

1. >重定向到哪里
2. 1标准输出，2标准错误 2>&1 & 标准错误也输出到标准输出中 [0,1,2,&]>/dev/null 输出到空设备，即不输出；最后一个&表示后台执行
3. cmd >file> 2>&1 标准输出被重定向到了file，将标准错误拷贝到了标准输出即同样被重定向到了file
4. cmd 2>&1 > file 标准错误拷贝了标准输出的行为，但此时标准输出还是输出到终端；> file时标准输出才被重定向到了file，但标准错误还是输出到终端
5. cmd <<EOF 将END作为最后输入 <<-EOF 删除前导制表符
6. eof

## 内置命令 cd, bread, exec

## echo, exit

## 元字符与控制运算符

|
&
;
(
)
<
>
||
&&
&
;
;;
|
(
)

## 环境变量

USER	登录用户的名称
UID	登录用户的用户 id 数字
HOME	用户的主目录
PWD	当前工作目录
SHELL	shell 的名称
$	运行的 bash shell（或其他）进程的进程 id（或 PID）
PPID	启动此进程的进程的进程 id（也就是父进程的 id）
?	上一个命令的退出代码
export

$$
env
set
unset
$-
history
history -d N | !!最近 | !N 第n个历史 | !-N 第n个命令之前的 | !# 当前命令 | !string string开头的最新命令 | !?string? 包含string的最新命令

## shell 内置命令

1. pstree 树装展示正在运行的进程
2. vmstat 监控linux系统性能数据的简易工具
3. bg 后台执行，fg %jobNumber 前台执行
4. jobs 所有后台进程
5. 暂停程序并放到后台 ctrl-Z，在一个命令的最后 + & 也可放到后台执行
6. nohup cmd 不挂断地运行命令
7. uname 当前用户
8. w 用户信息
9. sh -x xx.sh
10. let a=5+4 或 a++
11. exec 调用并执行指令的命令

## 变量
1. 在双引号内 "$var"
2. awk中使用外部变量 awk -v innerVar = $var 或 awk '{print v1,v2}' v1=$var v2=$var2 filename 即输入来自文件
2. awk中的内置变量 'innerVar'

## 编辑器

1. sed [options] ('定址 命令' 或 -f scriptFile / -e 'script') files   文本处理，当前处理行存储在临时缓冲区，完成后送到屏幕，接着处理下一行。用户文本编辑。

包含功能：查找打印、替换行/字符、插入、删除、读写、缓冲区与模板

- 定址
1. 指定行：3；2,5；$最后一行；
2. 指定内容，可与元字符一起用：/^str/,/endStr$/
3. 行数与内容组合：10,/str/
4. 命令位于：首位：s, w, r；末位：p, d, h, H；可gp

- 命令：
1. 插入：a\, i\
2. 替换：指定字符 s，选定行改为新的文本 c\
3. 内容到缓冲区：拷贝 h、追加 H
4. 获得缓冲区内容：并替代 g、追加 G 到当前模板
5. 删除行： d, 删除第一行D,
6. 下一个输入行：读取 n 用下一个命令处理, 追加 N 到模板后面 ？
7. 退出：q
8. 到脚本中带标记的地方、if分支、错误分支：b/t/T label 标记
9. 读、写、追加：r/w/W file 从file中行
10. ！所选行以外起作用
11. = 打印当前行号
12. \# 把注释扩展到下一换行符以前
13. 打印：p P(第一行)

- 替换标记
1. Ng 行内全面替换，从第N处开始匹配替换
2. x 互换模板与缓冲区中的文本
3. y 把一个字符翻译为另外的字符  与 s的区别？
4. \1 子串匹配标记
5. & 已匹配字符串标记
6. p 打印行

- 元字符集-----与正则类似
1. \(...\) 保存匹配的子串
2. & 保存搜索字符，用来替换其他字符
3. \<,\> 以...开头或结尾的单词的行

- 选项
1. e 进行多个sed命令
2. n 取消默认的输出

```bash
# '范围与操作/匹配/替换/标记'
# 格式如：'命令/匹配/替换/标记(对匹配到的第n个执行操作1/g/p/[w test1写入到文件])'  或 '元字符 命令'
# ! 的使用
# 使用数字方式寻址 (2/2,3/2,$)s
# 使用文本模式过滤器 sed '/abcd/s/origin/replace/' filename
# 组合命令 sed '2{s/a/A/  s/b/B/}' filename
# 删除行 (2/2,3/2,$)d  '/^content/d'
# 元字符集
# 多个表达式之间用;分隔

# 将book替换成books，也可以将定界符/ 改为其他字符，如: , |
sed 's/book/books' file
# 全部将book替换成books
sed -i 's/book/books/g' file
# 只打印执行的行
sed -n 's/book/books/p' file
# 定界符出现在内部时，需要进行转义，将/bin 替换成/usr/local/bin
sed 's/\/bin/\/usr\/local\/bin/g'
# 删除空白行  前面为查找，后面直接执行命令；未执行成功
sed '/^$/d' file
# 删除第2行
sed '2d' file
# 删除从第2到末尾行
sed '2,$d' file
# 删除最后一行
sed '$d' file
# ??? number在这里是关键字？
sed '/number 1/d' ./test
# 范围
sed '/1/,/3/d' file
# 删除以...开始的行 ？
sed '/^test/d' file
# 匹配每个单词，添加[]
sed 's/\w\+/[&]/g'

# 包含变量时，需要用双引号，$test是变量
sed "s/$test/HELLO"
# e 同一行执行多条命令
sed -e 'cmd' -e 'cmd'

# 执行结果后面会多一个%？
# 插入
sed '3i\
This is an appended line.' ./test

# 追加
sed '$a\
This is a new line of text.' ./test

# 修改行
sed '3c\
This a changed line of text.' ./test
sed '/number 1/c\
This a changed line of text.' ./test

# 将filename内容第一和第二行写入到file
sed '1,2w file' filename
# 读取file，显示在3行之后
sed '3r file' filename

# 复合命令
sed '1,20s/My$/You/gp' filename
# 查找与替换串之间的分隔符变成了#
sed 's#My#Your#g' datafile

# 1至20行内，字母小写转成大写，1替换成^，2替换成$
sed '1,20y/hrwang12/HRWANG^$/' datafile

# 组合命令，被匹配时，则移动到下一行，再进行替换
sed '/hrwang/{n;s/My/Your/;}' datafile
sed '/hrwang/{s/hrwang/HRWANG/;q;}' datafile

sed -e '/hrwang/h' -e '$G' datafile
sed -e '/hrwang/H' -e '$G' datafile
# 通过上面两条命令，你会发现h会把原来暂存缓冲区的内容清除，只保存最近一次执行h时保存进去的模式空间的内容。而H命令则把每次匹配hrwnag的行都追加保存在暂存缓冲区。

sed -e '/hrwang/H' -e '$g' datafile
sed -e '/hrwang/H' -e '$G' datafile
# 通过上面两条命令，你会发现g把暂存缓冲区中的内容替换掉了模式空间中当前行的内容，此处即替换了最后一行。而G命令则把暂存缓冲区的内容追加到了模式空间的当前行后。此处即追加到了末尾。


```


2. gawk -f bash.sh file  或 gwak '{print $1}' data

- $0 整行  $1 第一个数据字段
- F 正在读取使用其他分隔符的文本


```shell
BEGIN {

}
{

}
END {

}
```
3. awk 匹配和处理输入数据，用于数据分析生成报告；以空格为默认分隔符。awk '[pattern + action]' files 根据模式查找并执行相应的动作；1. 执行begin语句块；2. 从文件或标准输入读取一行，执行模式语句块，从第一行到最后重复执行该语句块，默认执行print；3. 读到末尾时，执行end语句块。

- \n为一条记录，默认空白符为一个数据域
- awk  -F ':' '{print $1 "\t" $7}'   分隔符可以不加引号，大括号中的语句可以是多个，以;分隔
- awk  -F ':' 'BEGIN {print ""} {print $1 "\t" $7} END{print}'  添加头尾
- 有条件、循环语句，还支持数组
- 内置变量
$n 当前记录的第n个字段，比如n为1表示第一个字段，n为2表示第二个字段。
$0 这个变量包含执行过程中当前行的文本内容。
[N] ARGC 命令行参数的数目。
[G] ARGIND 命令行中当前文件的位置（从0开始算）。
[N] ARGV 包含命令行参数的数组。
[G] CONVFMT 数字转换格式（默认值为%.6g）。
[P] ENVIRON 环境变量关联数组。
[N] ERRNO 最后一个系统错误的描述。
[G] FIELDWIDTHS 字段宽度列表（用空格键分隔）。
[A] FILENAME 当前输入文件的名。
[P] FNR 同NR，但相对于当前文件。
[A] FS 字段分隔符（默认是任何空格）。
[G] IGNORECASE 如果为真，则进行忽略大小写的匹配。
[A] NF 表示字段数，在执行过程中对应于当前的字段数。
[A] NR 表示记录数，在执行过程中对应于当前的行号。
[A] OFMT 数字的输出格式（默认值是%.6g）。
[A] OFS 输出字段分隔符（默认值是一个空格）。
[A] ORS 输出记录分隔符（默认值是一个换行符）。
[A] RS 记录分隔符（默认是一个换行符）。
[N] RSTART 由match函数所匹配的字符串的第一个位置。
[N] RLENGTH 由match函数所匹配的字符串的长度。
[N] SUBSEP 数组下标分隔符（默认值是34）。
- 数组定义 arr[1]=""; 或arr["str"]=""; 相关函数
- 语句：for(a in arr){}
- 内置函数、算术、赋值、逻辑、与正则(~/~! /正则/)、关系、其他($: 字符引用，空格：字符串连接，?: 条件表达式，in：数组中是否存在某键值)运算

```shell
awk [pattern + action] 'BEGIN{count=0; print "count is", count} {count++; print $0;} END {print "count is", count}'
```

4. grep [options] pattern [file...] 文本查找

- options
1. 正则：不支持 F；perl正则 P；扩展正则 E；基础正则 G
2. 匹配：整个文本行 x；整个单词 w
3. 显示匹配结果：只打印匹配的行数 c；列出匹配的文本及行号 n；只列出匹配的文本的文件名 l；不显示文件名前缀：h；只显示不匹配的行 v
4. 其他：忽略大小写 i；不显示错误信息 s；递归搜索 r；以退出码形式表示是否搜索成功，不输出匹配结果 q；匹配文本与文件头的偏移量 b
5. 多匹配模式：e 前后为逻辑与的关系，先匹配一个模式再将grep结果作为查询文件路径依次向后传递；前面必须添加-l，否则会将匹配成功的“文件内容”作为要查询的“文件名”向后传递
6. 匹配前后的几行：-5；之后几行：-A5；之前几行：-B5
7. 统计查找到的次数：c
8. 二进制文件：忽略二进制 I；二进制文件以文本文件搜寻：-a

5. xargs


## 命令执行方式
1. 管道方式
2. grep -i "mailx" `find /home/tyrone -type f -name "*.txt" -exec grep -l "hello world"  {} \;`
3. find /home/tyrone -name "*.txt" -exec grep -l "hello world" {} \; | xargs grep -i "mailx"

```shell
#!/bin/bash

let "t1 = ((a = 5 + 3, b = 7 - 1, c = 15 - 4))"
echo "t1 = $t1, a = $a, b = $b"

grep "hello world" -rl /home/tyrone | xargs grep -l "mailx" > /home/tyrone/result5.txt
cat result5.txt | while read line
  do cp ${line} ${line}.bak20150616
  sed -i "s/hello world/letitia/g" `grep "hello world" -rl ${line}`
done

```

## xargs 给其他命令传递参数的一个过滤器，将标准输入转换成命令行参数，通过该命令的换行和空白符，都会被处理空格符取代，即变成单行

1. n3 一行3个字符
2. -d 自定义定界符  echo "nameXnameXnameXname" | xargs -dX
3. -I 指定一个替换字符串{}，每一个参数命令都会被执行一次？即

## 信号 trap "rm -f $dir/work$$ dir2; exit" 1 2 收到信号时执行该命令；复位 trap 1 2;

1. sigHup---1，用户端连接结束时发出，登录时系统linux会分配给登录用户一个终端，包含前台进程和后台进程组，属于这个Session，用户退出登录时，前程组和后台会收到这个信号
2. sigInt---2，程序终止，用户输入ctrl+C时发出
3. sigQuit--3，与2类似
4. sigFpe---8，算术去处错误时
5. sigKill--9，用来立即终止程序的运行，信号不能被阻塞、处理和忽略。
6. sigAlrm--14，时钟定时信号
7. sigTerm--15，程序结束信号，信号可以被阻塞和处理，通常用来要求程序自己正常退出。
