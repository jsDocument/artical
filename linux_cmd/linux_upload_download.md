### curl
+ 代理  
  -A  设置用户代理发送给服务器   -anyauth 任何身份
  -p  HTTP代理
  -u  设置服务器的用户名和密码
  -U  设置代理用户名和密码
  -x  给定的端口上使用HTTP代理 
  -e  来源

  - E  证书和密码

+ 传输方式
   - B  使用ASCII
   - d HTTP POST方式传送数据
   - G  以Get方式来发送数据
- c  cookie
- b  cookie_file  url   使用cookie文件


- 抓取页面内容 -o
- 模拟表单  -c file cookie写入到这个文件  -D 保存头信息   -F  表单数据  url
- 伪造来源  -e   localhost   url
- 代理  -x  ip:port  -o  file  url
- 分断下载  -r  [0-100]
- 断点续传  -C
- 进度  -#   相反  -s

+ 下载文件  -O   
+ 上传   -T  file  ftp://user:pwd@ip:port/path
    -a  上传时附加到目标文件

### wget  下载

### rcp  【选项】【当前用户的主目录   rname@rhost:path】  scp   rsync
+ -r 递归
+ -x 加密
+ -D 指定远程服务器的端口号
+ -p  原属性


### ftp   sftp root@ip:/path    lftp
+ ftp  ip

+ 退出： bye 或 !
+ ？ 或 help
+ 断开并退出：quit
+ 断开：disconnect
+ 传送类型：ascii, binary--type
+ 远程电脑：cd, close, debug, delete/mdelete, dir/mdir, ls/mls,rmdir, rename, mkdir
+ 本地电脑：lcd
+ 远程电脑：user psw  account 指定用户
+ 跟踪：trace  status
+ 复制到远程：send  local  remote
+ 远程到本地：recv  remote local
+ 连接：open computer port


+ get [romote] [local] 远端传至本地 mget 多个远端
+ put local [remote] 传至远端  mput多个文件


### svn



### tar
+ -zxvf file

### bash面板快捷键
+ 最后  ctrl + e   最前面   ctrl + a
+ 单词前   alt + b   后  alt + f

+ /etc/hosts.allow  sshd: ip  重启服务
+ /etc/hosts.deny

### 安装命令包  yum install name

### chsh -s /bin/zsh