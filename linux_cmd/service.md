1. 配置 ssh user:password@ip 命令登录 或 用下面的方式登录
   - 快速登录：配置客户端 ssh-config，配置成功用： ssh host名称即可
   - 免密登录：配置 public key
   - 禁用密码：配置服务器 ssh-config
   - 保持连接：控制 ssh 不被断开
2. ssh/ssh-config 和 .ssh/config文件配置
   - Host name, HostName ip, User, ServerAliveInterval 60 超时断开
   - 免密需要本地: id_rsa.pub 复制到 远程服务器的 authorized_keys，cat ~/.ssh/id_rsa.pub
   - ssh-keygen生成对称加密中的公钥与私钥：ssh-keygen -t rsa -C "shanyue"
   - ssh -T host 测试联通性
   - 禁用密码登录：/etc/ssh/sshd_config文件的配置PasswordAuthentication no

```bash
# 在本地环境进行操作

# 提示你输入密码，成功之后可以直接 ssh 登录，无需密码

$ ssh-copy-id shanyue

# 登陆成功，无需密码

$ ssh shanyue
```



## 前言

html, nginx, docker
内置模块：('node:http')

npx serve . 资源服务化？或 nginx?
serve -s build
script 中配置{start: 'serve .'}命令

1. 管理诸多网站，通过 nginx 进行路由转发至不同的服务，这也就是反向代理（对访问者来说是盲盒，具体怎么转发不关心）
2. 部署方式：可以用 npm start方式，但此处需要消耗较大的内存及CPU等性能

## docker/docker-compose

- 选择一个基础镜像
- Dockerfile 配置
  - FROM 基础镜像
  - WORKDIR 工作目录，RUN/CMD命令都在改目录下执行
  - ADD . 目录 把宿主的代码添加到镜像中
  - RUN yarn 安装依赖
  - EXPOSE 3000
  - CMD 启动 node 服务
- 通过 Dockerfile 构建镜像(Image)
- 通过镜像运行容器
  - docker 常用命令
    - docker build -t name:$(git rev-parse --short HEAD) 「-f, -t」构建
    - docker images 列出所有镜像
    - docker run --rm -p 3000容:3000宿 name「--rm 停止运行时，自动删除容器，将容器中的 3000端口映射到宿主机的 3000 端口」
    - docker ps 查看所有容器
    - docker run -it --rm -p 3000:80 nginx:alpine  在本地 3000 端口访问 nginx 页面
  - docker-compose.yaml 实现同样的效果
    - docker-compose images
    - docker-compose up --build 启动容器前构建镜像
    - docker-compose -f learn-nginx.docker-compose.yaml up learn-nginx 指定运行的
    - docker-compose up --build --force-recreate step 都构建都运行？
  - 构建时间优化
    - ADD package.json yarn.lock /code/----package.json/yarn.lock 事先置于镜像中
  - 构建体积优化
    - FROM node:14-alpine as builder
    - FROM nginx:alpine 更小体积的基础镜像
    - COPY --from=builder code/build /usr/share/nginx/html

```yaml
version: "3"
services:
  simple:
    build:
      context: .
      dockerfile: simple.Dockerfile
    ports:
      - 4000:80


version: "3"
services:
  learn-nginx:
    image: nginx:alpine
    ports:
      - 4000:80
    volumes:
      - nginx.conf:/etc/nginx/conf.d/default.conf
      - .:/usr/share/nginx/html
```

## nginx

- 进入 nignx 的环境中
  - docker run -it --rm nginx:alpine sh
  - docker run -it --rm -p 3000:80 nginx:alpine 访问 nginx 的默认页面
  - 查看容器中nginx配置 cat /etc/nginx/conf.d/default.conf
  - exit 可退出容器环境
