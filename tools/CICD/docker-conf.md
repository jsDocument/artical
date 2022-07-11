### docker 常用配置项

1. FROM 依赖的基础镜像
2. FROM as `ys`
3. COPY source dest
4. WORKDIR  /workspace  镜像在容器中的目录
5. COPY --from `ys`  /workspace/build  /usr/share/nginx/html
6. RUN  export xxx=xxx && cd xxx && cmd
7. ADD file /workspace/ 添加文件到镜像容器目录中
8. CMD ["./xxx"]

+ docker -t

#### docker-compose 常用配置项

```yaml
version: '3'

services:

  mysql:
    image: mysql:5.6.41
    environment:
      MYSQL_ROOT_PASSWORD: "root"
    networks:
    - default
    expose:
    - "3306"
    ports:
    - "3306:3306"
# 或

 wayne-backend:
    image: 360cloud/wayne-backend:latest
    command: /opt/wayne/backend
    environment:
      GOPATH: "/go"
    volumes:
    - ./conf/app.conf:/opt/wayne/conf/app.conf
    depends_on:
    - mysql
    restart: always
    networks:
    - default
    ports:
    - "8080:8080"

# 或
version: "3"
services:
  route:
    build:
      context: .
      dockerfile: router.Dockerfile
    ports:
      - 3000:80

```

+ docker-compose up -d [serviceName] 启动所有 或对应服务





构建资源的优化:

使用 terser 压缩 Javascript 资源

使用 cssnano 压缩 CSS 资源

使用 sharp/CDN 压缩 Image 资源或转化为 Webp

使用 webpack 将小图片转化为 DataURI

使用 webpack 进行更精细的分包，避免一行代码的改动使大量文件的缓存失效

网络性能的优化:

HTTP2，HTTP2多路复用、头部压缩功能提升网络性能

OSCP Stapling，减少浏览器端的 OSCP 查询(可验证证书合法性)

TLS v1.3，TLS 握手时间从 2RTT 优化到了 1RTT，并可 0-RTT Resumption

HSTS，无需301跳转，直接使用 HTTPS，但更重要的是安全性能

Brotli，相对 gzip 更高性能的压缩算法
