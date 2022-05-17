### netstat 网络联机状态

### ps -aux


### who   whomai


### shutdown

### top 当前进程

### 流量  iftop


### ulimit 进程打开的文件数
+ -a
+ sysctl -a  | grep "files"


### service(s)  启动、停止、重新启动、关闭系统服务
+ [list  run   start  stop  restart  cleanup]
+ --status-all

### 用户
+ /etc/passwd
+ /etc/shadow
+ /etc/group
+ /etc/gshadow

### killall
+ -e  长名称精确匹配
+ -l  忽略大小写
+ -p  杀死进程所属的进程组
+ -q  没有进程被杀死，则不输出任何信息
+ -r  正则匹配杀死进程名称
+ -s  指定的进程号
+ -u  杀死指定用户的进程


`命令查找：`

`ssl通讯链路的附加层，可以包含很多协议`
`ssh是加密的shell，最初用来替代telnet`
`OpenSSL是C语言库，对SSL协议的实现`
`OpenSSH是对SSH协议的实现`

### sshd是openssh软件套什中的服务守护进程



### openssh


### ssh
