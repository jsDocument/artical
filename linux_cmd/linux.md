### 重定向  标准输入  输出1  错误2
+ 1>/dev/null
+ 1>> 追加
+ &>  两个都输出到文件   i>&j  把文件标识符i重新定向到j，&可以理解为取地址
+ 5>&1  把标识符5定向到标准输出
+ 标准输入  grep word 0<filename
+ exec 3<>filename  把文件打开，并指定文件标识符为3

+ n<&- 关闭输入文件标识符n
+ 0<&-或<&- 关闭标准输入stdin
+ n>&- 关闭输出文件标识符n
+ 1>&-或>&-关闭标准输出stdout



# _文件_

### 查找文件
+ which     在$PATH设置的目录里查找
+ whereis   查找二进制文件、源代码、man手册----where
+ (s)locate   是find -name的另一种写法，不搜索具体目录，而是搜索一个数据库，是系统自动创建这个数据库，且每天自动更新一次，locate查不到最新变动过的文件，可以用updatedb命令手动更新。

+ strings 对象文件或二进制文件中查找可打印的字符串
+ `find`




`比较`
+ diff  path/file  与当前文件以逐行的方式比较文件的异同
+ diff3  比较3个文件
+ cmp  file  file1

`看看内容`
+ tail 结尾 +20 file，行  -c 字符
+ head
+ less
+ more   -c -10 file
+ cut   显示(删除)行中指定部分
+ hexdump 二进制文件的十六进制编码  od  八、十六进制


`权限`
+ chmod 变更权限
+ chown 变更拥有者或所属群组
+ chgrp 变更群组

`变更属性`
+ lsattr 查看
+ chattr 改变
+ stat 文件的状态
+ file 探测文件类型

+ source 

### 编辑
+ touch 编辑


### 编辑器
+ nano / pico / emacs / jed / joe / ed / ex   终端编辑器
+ sed   处理缓冲区中的内容
+ vi / vim


### 备份与恢复
+ cpio
+ restore
+ dump


### 查看
+ cat  标准输出到设备上

###  文件信息
+ dirname path/file   仅显示与目录有关的部分
+ basename path/file   显示基本名称
+ pathchk  检查文件中不可移植的部分
+ rename  name1 name 文件名列表
+ ln  创建连接
+ nl  行号
+ unlink 删除指定的文件
+ dd 揿电掣 并进行转换和格式化处理
+ iconv 转换编译格式


### 目录
+ tree 树状目录  install
+ pwd
+ ls
+ mv
+ cd
+ dirs 目录记录
+ rmdir  mkdir  rm  popd删除目录栈中的记录
+ pushed  将目录加入命令堆叠中

### 复制 / 传输
+ ftp / tftp
+ scp / ncftp / rcp
+ cp


### 过滤
+ egrep  文件内查找指定字符串
+ fgrep  为文件搜索文字字符串
+ grep
+ bzgrep

### 统计 与 检查
+ spell


### 比较
+ comm



### 分割
+ csplit
+ split

### 特殊字符
+ col 过滤控制字符
+ tr 将字符进行替换压缩和删除
+ unexpand 空白符转换为制表符


### 合并
+ paste 按队列合并

### 输出
+ sort 排序并输出
+ fold 控制文件内容输出时据点的屏幕宽度
+ tee
+ printf
+ rev
+ fmt 优化处理并输出
+ tac  反序输出

### 压缩与解压
+ unzip
+ zip  gunzip  bzip2(bz2格式)  lha(lzh格式)   解压缩文件
+ gzip  压缩
+ gzexe   压缩可执行文件
+ bzgrep  搜索
+ comparess
+ uncompress 解压文件(.Z文件)  bzcat(bz2格式)

+ bzcmp 比较----压缩包中的文件
+ bzdiff

+ zcat  显示压缩包中的文件内容
+ unarj 解压  arj 创建和管理.arj压缩包
+ zfore



### 硬件 / 系统信息



### 环境变量  .bash_profile

+ 全局  /etc/profile 系统全局
+ 其他系统配置  /etc/bashrc
+ 用户自定义  ~/.bash_profile



