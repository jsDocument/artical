# 用户权限相关

## chown [选项] [用户:组 文件] 修改文件所有者

### chgrp  修改文件所属用户组

### chmod 【选项】【权限模式 文件】变更文件或目录权限

- 添加+/删除-/设定=哪种权限 4/r  2/w  1/x
- 为哪些人添加权限： u   g   o a
- -R 递归
- -h 符号连接文件修改

: 无r不能通过Ls查看这个目录的内容，无w不能在这个目录创建新文件，无x不能通过cd进入这个目录

### 隐藏属性  chattr设置,  lsattr查看

### 默认权限  umask

### 判断是否有权限  -x path

### setcap getcap  libcap  权限

## 用户查看及简单操作

- finger 系统用户
- who 目前谁在线
- whoami 当前帐户
- exit 退出
- useradd 添加账号 -d建立与用户名同名目录为主目录， -m自动建立目录，-g指定组名称
- passwd 设置用户密码
- userdel 删除用户 -r 删除用户同时删除主目录
- su userName切换用户 -dir 同时切换到用户所在目录

## 群组查看与简单操作

- cat /etc/group 或 groupmod + 三次table
- groupadd 添加  groupdel
- usermod -g 组 用户名  修改用户所在组， -g制定用户默认用户组，-G配合-a添加其他组
- 查看用户在哪些组
- 普通用户添加sudo权限  sudo userrmod -a -G adm userName, sudo userrmod -a -G sudo userName
