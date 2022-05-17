# ngingx服务器安装与配置

## 用途
1. 负载均衡：nginx_upstream_check_module-0.3.0.tar.gz  检查后端服务器状态，nginx-goodies-nginx-sticky-module-ng-bd312d586752.tar.gz后端做负载均衡解决session sticky问题
2. 缓存
3. ssl加密

## 下载安装与配置
1. 下载
2. 进入安装目录，编译时./configure --help以--without开头的都默认安装
    - --prefix=PATH ： 指定nginx的安装目录。默认 /usr/local/nginx。
    - --conf-path=PATH ： 设置nginx.conf配置文件的路径。nginx允许使用不同的配置文件启动，通过命令行中的-c选项。默认为prefix/conf/nginx.conf。
    - --user=name： 设置nginx工作进程的用户。安装完成后，可以随时在nginx.conf配置文件更改user指令。默认的用户名是nobody。--group=name类似
    - --with-pcre ： 设置PCRE库的源码路径，如果已通过yum方式安装，使用--with-pcre自动找到库文件。使用--with-pcre=PATH时，需要从PCRE网站下载pcre库的源码（版本4.4 - 8.30）并解压，剩下的就交给Nginx的./configure和make来完成。perl正则表达式使用在location指令和 ngx_http_rewrite_module模块中。
    - --with-zlib=PATH ： 指定 zlib（版本1.1.3 - 1.2.5）的源码解压目录。在默认就启用的网络传输压缩模块ngx_http_gzip_module时需要使用zlib 。
    - --with-http_ssl_module ： 使用https协议模块。默认情况下，该模块没有被构建。前提是openssl与openssl-devel已安装
    - --with-http_stub_status_module ： 用来监控 Nginx 的当前状态
    - --with-http_realip_module ： 通过这个模块允许我们改变客户端请求头中客户端IP地址值(例如X-Real-IP 或 X-Forwarded-For)，意义在于能够使得后台服务器记录原始客户端的IP地址
    - --add-module=PATH ： 添加第三方外部模块，如nginx-sticky-module-ng或缓存模块。每次添加新的模块都要重新编译（Tengine可以在新加入module时无需重新编译）
3. nginx.conf配置文件
    - main 全局设置，与具体业务无关的参数
    - server 主机设置，主要是虚拟主机域名、IP和端口，继承main
    - upstream 上游服务器设置(主要为反向代理、负载均衡相关配置)，一系列后端服务器，即不会继承指令也不会被继承，有自己特殊指令
    - location （URL配置特定位置后的设置），用于匹配网页位置，继承server
4. 能用指令
    1. main
        - user username pwd;
        - worker_processes n; 工作进程的个数，master进程是接收并分配请求给worker处理，可设置为cup核数也中auto。
        - worker_cpu_affinity；在高并发情况下，通过设置cpu粘性来降低由于多CPU核切换造成的寄存器等现场重建带来的性能损耗。
        - worker_rlimit_nofile；可以限制为操作系统最大的限制65535。
        - error_log path
        - pid path/nginx.pid
        - events {}：worker_connections每一个worker进程能并发处理的最大连接数；use epoll事件模型
        - http {}：sendfile on 开启高效文件传输模式，指定是否调用sendfile函数来传输文件；keepalive_timeout 连接超时时间；send_timeout响应客户端的超时时间；client_max_body_size 客户端请求的最大文件字节数；client_body_buffer_size 缓冲区代理缓冲用户端请求的最大字节数
        - server {}
        - location {}
            - root 服务器的默认网站根目录
            - index 路径下默认访问的文件名
            - proxy_pass 对应负载均衡
            - proxy_redirect
            - proxy_set_header Host $host;
            - proxy_set_header X-Real-IP $remote_addr;
            - proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            - allow ip
            - deny ip 允许或禁止某个ip
            - autoindex on 列出整个目录，autoindex_exact_size off 显示文件的确切大小，autoindex_localtime on显示文件时间为GMT时间。
        - http_proxy {}：proxy_connect_timeout代理跟后端服务器连接超时时间，proxy_read_timeout连接后与后端服务器两个成功的响应操作之间的超时时间，proxy_buffer_size从后端realserver读取并保存用户头信息的缓冲区大小，proxy_buffers，proxy_busy_buffers_size高负荷下缓冲大小



## 启动与关闭
1. 检查配置文件是否正确：nginx -t
2. 启动：nginx；sudo brew services start nginx
3. 关闭：nginx -s stop；sudo brew services stop nginx
4. 重启：nginx -s reload   [reload\reopen\stop\quit]
5. 指定配置文件并启动：nginx -c 'path'


## 作为系统服务管理
1. 下载nginx到/etc/init.d/，修改路径并赋予可执行权限
2. service nginx {start|stop|status|restart|reload|configtest}


## 不同平台下载、安装工具与命令
1. linux：yum install nginx
- 编译 make && make install
2. mac: brew search/install/uninstall/update/list

## 进程
1. echo PID > /var/run/nginx.pid
2. ps aux | grep nginx（user, PID, CPU, MEM, VSZ, RSS, TTY, STAT, START TIME, COMMAND,...）
    - STAT的值：
    R 运行    Runnable (on run queue)            正在运行或在运行队列中等待。
    S 睡眠    Sleeping                休眠中, 受阻, 在等待某个条件的形成或接受到信号。
    I 空闲    Idle
    Z 僵死    Zombie（a defunct process)        进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放。
    D 不可中断    Uninterruptible sleep (ususally IO)    收到信号不唤醒和不可运行, 进程必须等待直到有中断发生。
    T 终止    Terminate                进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行。
    P 等待交换页
    W 无驻留页    has no resident pages        没有足够的记忆体分页可分配。
    X 死掉的进程
    < 高优先级进程                    高优先序的进程
    N 低优先    级进程                    低优先序的进程
    L 内存锁页    Lock                有记忆体分页分配并缩在记忆体内
    s 进程的领导者（在它之下有子进程）；
    l 多进程的（使用 CLONE_THREAD, 类似 NPTL pthreads）
    + 位于后台的进程组

3. pkill -9 name
4. netstat 状态信息(参数：-c(持续列出)，-t(tcp)，-u(udp)，-s(统计表)，-n(直接显示ip)，-i(网络界面))  | grep ':80'
5. lsof -i


###javascript
user  www www;
worker_processes  2;

error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

pid        logs/nginx.pid;


events {
    use epoll;
    worker_connections  2048;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    # tcp_nopush     on;

    keepalive_timeout  65;

  # gzip压缩功能设置
    gzip on;
    gzip_min_length 1k;
    gzip_buffers    4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 6;
    gzip_types text/html text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
    gzip_vary on;

  # http_proxy 设置
    client_max_body_size   10m;
    client_body_buffer_size   128k;
    proxy_connect_timeout   75;
    proxy_send_timeout   75;
    proxy_read_timeout   75;
    proxy_buffer_size   4k;
    proxy_buffers   4 32k;
    proxy_busy_buffers_size   64k;
    proxy_temp_file_write_size  64k;
    proxy_temp_path   /usr/local/nginx/proxy_temp 1 2;

  # 设定负载均衡后台服务器列表
    upstream  backend  {
              #ip_hash;
              server   192.168.10.100:8080 max_fails=2 fail_timeout=30s ;
              server   192.168.10.101:8080 max_fails=2 fail_timeout=30s ;
    }

  # 很重要的虚拟主机配置
    server {
        listen       80;
        server_name  itoatest.example.com;
        root   /apps/oaapp;

        charset utf-8;
        access_log  logs/host.access.log  main;

        #对 / 所有做负载均衡+反向代理
        location / {
            root   /apps/oaapp;
            index  index.jsp index.html index.htm;

            proxy_pass        http://backend;
            proxy_redirect off;
            # 后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header  Host  $host;
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;

        }

        #静态文件，nginx自己处理，不去backend请求tomcat
        location  ~* /download/ {
            root /apps/oa/fs;

        }
        location ~ .*\.(gif|jpg|jpeg|bmp|png|ico|txt|js|css)$
        {
            root /apps/oaapp;
            expires      7d;
        }
        location /nginx_status {
            stub_status on;
            access_log off;
            allow 192.168.10.0/24;
            deny all;
        }

        location ~ ^/(WEB-INF)/ {
            deny all;
        }
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

  ## 其它虚拟主机，server 指令开始
}
###
