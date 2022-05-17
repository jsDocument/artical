## 部署 node 服务

1. 代码上传到git
2. 服务端git clone 检出
3. npm install
4. npm install pm2 -g
5. pm2 start index.js
6. pm2 以多核方式来部署，可以指定 CPU 的核数的实例
   1. fork
   2. cluster 自带负载均衡

## 如何监控 node 服务

+ heapdump/ cpu profile  分析内存与函数耗时、快照
+ 生产环境：alinode
+ 事件延迟（BFF）
+ CPU/Memory
  + 查看 pidstate 进程号，监控
  + iostate
  + 接口白名单
  + cgroup/CPU/Memory 限制使用量
  + 报警----middleware来做，超出负载几次?(alert-mananger)
+ node 日志
  + log4js--->API/HTTP/DB/Redis 存到磁盘，产线存到阿里云(sls)
  + winston--->API/Access/DB/Redis --->json--->上传到ES
  + SOL/time-->ES-->(requestId/traceId)  微服务
+ redis
  + 缓存
  + 热点数据/BFF
  + 缓存突然过期，分布式锁，保证？
  + 服务端限流(429)
    + 令牌桶，记录次数，超过一定次数，就拒绝
    + 漏筒


## 静态代码部署

## wayne

## k8s 做服务编排，容器集群管理系统，实现容器集群的自动化部署、自动扩缩容、维护等功能

监听信号---heapdump

CICD---删镜像、拉镜像、起服务

explain 分析数据查找，慢查询日志


## docker

+ 基础镜像

## 制作镜像

+ 创建项目文件夹并进入目录
+ git clone
+ npm init
+ npm i 安装依赖
+ 创建Dockerfile文件
+ docker build -t 构建镜像
+ docker run 测试
+ docker login 登录
+ docker push 推送

## Dockerfile 内容
