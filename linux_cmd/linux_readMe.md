# 守护进程折启动方法

## 前台任务：会独占命令行窗口，只有运行完了或手动终止，才能执行其他集合

## 后台任务：在命令的尾部加上`&`，启动进程就会成为后台任务，ctl+z再执行bg命令，让最近一个暂停的后台任务继续执行。特点：

- 继承当前 session （对话）的标准输出（stdout）和标准错误（stderr）。因此，后台任务的所有输出依然会同步地在命令行下显示。
- 不再继承当前 session 的标准输入（stdin）。你无法向这个任务输入指令了。如果它试图读取标准输入，就会暂停执行（halt）。
:注 本质区别是：是否继承标准输入


## SignUp

前台任务：退出过程

1. 用户准备退出 session
2. 系统向该 session 发出SIGHUP信号
3. session 将SIGHUP信号发给所有子进程
4. 子进程收到SIGHUP信号后，自动退出

后台任务：用户退出session后，后台任务是否还会继续执行？

1. shopt | grep huponexit
2. 执行上面的命令，就会看到huponexit参数的值。
3. 大多数Linux系统，这个参数默认关闭（off）。因此，session 退出的时候，不会把SIGHUP信号发给"后台任务"。所以，一般来说，"后台任务"不会随着 session 一起退出。

## disown 命令：将指定任务从后台任务列表之中移除，后台任务只要不在这个列表中，sission就不会向它发signUp信号

1. cmd &
2. disown
3. jobs查看进程

- disown 移出最近一个正在执行的后台任务
- disown -r 移出所有正在执行的后台任务
- disown -a 移出所有后台任务
- disown -h 不移出后台任务，但是让它们不会收到SIGHUP信号
- disown %2 / disown -h %2 根据jobId，移出指定的后台任务

## nohup命令 nohup cmd &

- 阻止SIGHUP信号发到这个进程。
- 关闭标准输入。该进程不再能够接收任何输入，即使运行在前台。
- 重定向标准输出和标准错误到文件nohup.out。

: 命令实际上将子进程与它所在折session分离了

## screen与Tmux 终端复用器：在同一个终端里管理多个session

1. screen 新建一个session
2. cmd
3. screen -r name/pid 切回指定session
4. screen -ls 列出所有session
5. screen -S name 指定名字

1. tmux
2. cmd
3. tmux attach 返回正在运行的session
4. tmux new -s name 新建
5. tmux attach -t name 切换
6. tmux list-session 列出所有
7. tmux detach 退出当前session
8. tmux kill-session -t name

## systemd 是一组命令，涉及系统管理的方方面面

### systemctl用于管理系统

- systemctl --version
- sudo systemctl reboot 重启系统
- sudo systemctl poweroff 关闭系统，切断电源
- sudo systemctl halt CPU停止工作
- sudo systemctl suspend 暂停系统
- sudo systemctl hibernate 让系统进入冬眠状态
- sudo systemctl hybrid-sleep 让系统进入交互式休眠状态
- sudo systemctl rescue 启动进入救援状态（单用户状态）

### systemd-analyze命令用于查看启动耗时

- systemd-analyze 查看启动耗时
- systemd-analyze blame 查看每个服务的启动耗时
- systemd-analyze critical-chain 显示瀑布状的启动过程流
- systemd-analyze critical-chain atd.service 显示指定服务的启动流

### hostnamectl命令用于查看当前主机的信息

- hostnamectl 显示当前主机的信息
- sudo hostnamectl set-hostname rhel7 设置主机名。

### localectl命令用于查看本地化设置

- localectl 查看本地化设置
- sudo localectl set-locale LANG=en_GB.utf8 设置本地化参数。
- sudo localectl set-keymap en_GB

### timedatectl命令用于查看当前时区设置

- timedatectl 查看当前时区设置
- timedatectl list-timezones 显示所有可用的时区

### 设置当前时区

- sudo timedatectl set-timezone America/New_York
- sudo timedatectl set-time YYYY-MM-DD
- sudo timedatectl set-time HH:MM:SS

### loginctl命令用于查看当前登录的用户

- loginctl list-sessions 列出当前session
- loginctl list-users 列出当前登录用户
- loginctl show-user ruanyf 列出显示指定用户的信息

## Unit：Systemd管理所有系统资源，不现的资源统称为unit

- Service unit：系统服务
- Target unit：多个 Unit 构成的一个组
- Device Unit：硬件设备
- Mount Unit：文件系统的挂载点
- Automount Unit：自动挂载点
- Path Unit：文件或路径
- Scope Unit：不是由 Systemd 启动的外部进程
- Slice Unit：进程组
- Snapshot Unit：Systemd 快照，可以切回某个快照
- Socket Unit：进程间通信的 socket
- Swap Unit：swap 文件
- Timer Unit：定时器

### systemctl list-units命令可以查看当前系统的所有 Unit

- systemctl list-units 列出正在运行的 Unit
- systemctl list-units --all 列出所有Unit，包括没有找到配置文件的或者启动失败的
- systemctl list-units --all --state=inactive 列出所有没有运行的 Unit
- systemctl list-units --failed 列出所有加载失败的 Unit
- systemctl list-units --type=service 列出所有正在运行的、类型为 service 的 Unit

### systemctl status命令用于查看系统状态和单个 Unit 的状态

- systemctl status 显示系统状态
- sysystemctl status bluetooth.service 显示单个 Unit 的状态
- systemctl -H root@rhel7.example.com status httpd.service 显示远程主机的某个 Unit 的状态

### 三个查询状态

- systemctl is-active application.service 显示某个 Unit 是否正在运行
- systemctl is-failed application.service 显示某个 Unit 是否处于启动失败状态
- systemctl is-enabled application.service 显示某个 Unit 服务是否建立了启动链接

### Unit管理

- sudo systemctl start apache.service 立即启动一个服务
- sudo systemctl stop apache.service 立即停止一个服务
- sudo systemctl restart apache.service 重启一个服务
- sudo systemctl kill apache.service 杀死一个服务的所有子进程
- sudo systemctl reload apache.service 重新加载一个服务的配置文件
- sudo systemctl daemon-reload 重载所有修改过的配置文件
- systemctl show httpd.service 显示某个 Unit 的所有底层参数
- systemctl show -p CPUShares httpd.service 显示某个 Unit 的指定属性的值
- sudo systemctl set-property httpd.service CPUShares=500 设置某个 Unit 的指定属性

### Unit之间的依赖关系

- systemctl list-dependencies nginx.service
- systemctl list-dependencies --all nginx.service

### 配置文件：每个Unit都有一个配置文件，告诉Systemd怎么启动这个Unit，在/etc/systemd/system/读取配置文件符号链接指向/usr/lib/systemd/system

- systemctl enable 用于两个目录之间建立符号连接
- sudo systemctl disable clamd@scan.service 撤销符号链接

### 配置文件的状态

- systemctl list-unit-files 列出所有配置文件
- systemctl list-unit-files --type=service 列出指定类型的配置文件
- systemctl status bluetooth.service 是否正在运行
enabled：已建立启动链接
disabled：没建立启动链接
static：该配置文件没有[Install]部分（无法执行），只能作为其他配置文件的依赖
masked：该配置文件被禁止建立启动链接

### 配置文件修改需重新加载

- sudo systemctl daemon-reload
- sudo systemctl restart httpd.service

### 配置文件的格式 systemctl cat查看

### 配置文件的区块

[Unit]区块通常是配置文件的第一个区块，用来定义 Unit 的元数据，以及配置与其他 Unit 的关系。它的主要字段如下。

Description：简短描述
Documentation：文档地址
Requires：当前 Unit 依赖的其他 Unit，如果它们没有运行，当前 Unit 会启动失败
Wants：与当前 Unit 配合的其他 Unit，如果它们没有运行，当前 Unit 不会启动失败
BindsTo：与Requires类似，它指定的 Unit 如果退出，会导致当前 Unit 停止运行
Before：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之后启动
After：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之前启动
Conflicts：这里指定的 Unit 不能与当前 Unit 同时运行
Condition...：当前 Unit 运行必须满足的条件，否则不会运行
Assert...：当前 Unit 运行必须满足的条件，否则会报启动失败
[Install]通常是配置文件的最后一个区块，用来定义如何启动，以及是否开机启动。它的主要字段如下。

WantedBy：它的值是一个或多个 Target，当前 Unit 激活时（enable）符号链接会放入/etc/systemd/system目录下面以 Target 名 + .wants后缀构成的子目录中
RequiredBy：它的值是一个或多个 Target，当前 Unit 激活时，符号链接会放入/etc/systemd/system目录下面以 Target 名 + .required后缀构成的子目录中
Alias：当前 Unit 可用于启动的别名
Also：当前 Unit 激活（enable）时，会被同时激活的其他 Unit
[Service]区块用来 Service 的配置，只有 Service 类型的 Unit 才有这个区块。它的主要字段如下。

Type：定义启动时的进程行为。它有以下几种值。
Type=simple：默认值，执行ExecStart指定的命令，启动主进程
Type=forking：以 fork 方式从父进程创建子进程，创建后父进程会立即退出
Type=oneshot：一次性进程，Systemd 会等当前服务退出，再继续往下执行
Type=dbus：当前服务通过D-Bus启动
Type=notify：当前服务启动完毕，会通知Systemd，再继续往下执行
Type=idle：若有其他任务执行完毕，当前服务才会运行
ExecStart：启动当前服务的命令
ExecStartPre：启动当前服务之前执行的命令
ExecStartPost：启动当前服务之后执行的命令
ExecReload：重启当前服务时执行的命令
ExecStop：停止当前服务时执行的命令
ExecStopPost：停止当其服务之后执行的命令
RestartSec：自动重启当前服务间隔的秒数
Restart：定义何种情况 Systemd 会自动重启当前服务，可能的值包括always（总是重启）、on-success、on-failure、on-abnormal、on-abort、on-watchdog
TimeoutSec：定义 Systemd 停止当前服务之前等待的秒数
Environment：指定环境变量

## Target 是一个unit组，包含许多相关的unit

- systemctl list-unit-files --type=target 查看当前系统的所有 Target
- systemctl list-dependencies multi-user.target 查看一个 Target 包含的所有 Unit
- systemctl get-default 查看启动时的默认 Target
- sudo systemctl set-default multi-user.target 设置启动时的默认 Target
- sudo systemctl isolate multi-user.target 切换 Target 时，默认不关闭前一个 Target 启动的进程， systemctl isolate 命令改变这种行为，关闭前一个 Target 里面所有不属于后一个 Target 的进程

: 与init进程的主要差别：1.默认在/etc/inittab文件设置，现在被target位置在/etc/systemd/system/default.target取代。 2. 启动脚本位置之前在/etc/init.d现在存放在/lib/systemd/system和/etc/systemd/system目录。3.配置文件的位置

## 日志管理journalctl，查看所有日志，配置文件在/etc/systemd/jourrnald.conf

- sudo journalctl 查看所有日志（默认情况下 ，只保存本次启动的日志）
- sudo journalctl -k 查看内核日志（不显示应用日志）
- 查看系统本次启动的日志
sudo journalctl -b
sudo journalctl -b -0
- sudo journalctl -b -1 查看上一次启动的日志（需更改设置）
- 查看指定时间的日志
sudo journalctl --since="2012-10-30 18:17:16"
sudo journalctl --since "20 min ago"
sudo journalctl --since yesterday
sudo journalctl --since "2015-01-10" --until "2015-01-11 03:00"
sudo journalctl --since 09:00 --until "1 hour ago"
- sudo journalctl -n 显示尾部的最新10行日志
- sudo journalctl -n 20 显示尾部指定行数的日志
- sudo journalctl -f 实时滚动显示最新日志
- sudo journalctl /usr/lib/systemd/systemd 查看指定服务的日志
- sudo journalctl _PID=1 查看指定进程的日志
- sudo journalctl /usr/bin/bash 查看某个路径的脚本的日志
- sudo journalctl _UID=33 --since today 查看指定用户的日志
- 查看某个 Unit 的日志
sudo journalctl -u nginx.service
sudo journalctl -u nginx.service --since today
- sudo journalctl -u nginx.service -f 实时滚动显示某个 Unit 的最新日志
- journalctl -u nginx.service -u php-fpm.service --since today 合并显示多个 Unit 的日志

### 查看指定优先级（及其以上级别）的日志，共有8级

- 0: emerg
- 1: alert
- 2: crit
- 3: err
- 4: warning
- 5: notice
- 6: info
- 7: debug
sudo journalctl -p err -b
- sudo journalctl --no-pager 日志默认分页输出，--no-pager 改为正常的标准输出
- sudo journalctl -b -u nginx.service -o json 以 JSON 格式（单行）输出
- sudo journalctl -b -u nginx.serviceqq -o json-pretty 以 JSON 格式（多行）输出，可读性更好
- sudo journalctl --disk-usage 显示日志占据的硬盘空间
- sudo journalctl --vacuum-size=1G 指定日志文件占据的最大空间
- sudo journalctl --vacuum-time=1years 指定日志文件保存多久
