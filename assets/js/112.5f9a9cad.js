(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{302:function(s,n,t){"use strict";t.r(n);var e=t(6),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ol",[t("li",[s._v("配置 ssh user:password@ip 命令登录 或 用下面的方式登录\n"),t("ul",[t("li",[s._v("快速登录：配置客户端 ssh-config，配置成功用： ssh host名称即可")]),s._v(" "),t("li",[s._v("免密登录：配置 public key")]),s._v(" "),t("li",[s._v("禁用密码：配置服务器 ssh-config")]),s._v(" "),t("li",[s._v("保持连接：控制 ssh 不被断开")])])]),s._v(" "),t("li",[s._v("ssh/ssh-config 和 .ssh/config文件配置\n"),t("ul",[t("li",[s._v("Host name, HostName ip, User, ServerAliveInterval 60 超时断开")]),s._v(" "),t("li",[s._v("免密需要本地: id_rsa.pub 复制到 远程服务器的 authorized_keys，cat ~/.ssh/id_rsa.pub")]),s._v(" "),t("li",[s._v('ssh-keygen生成对称加密中的公钥与私钥：ssh-keygen -t rsa -C "shanyue"')]),s._v(" "),t("li",[s._v("ssh -T host 测试联通性")]),s._v(" "),t("li",[s._v("禁用密码登录：/etc/ssh/sshd_config文件的配置PasswordAuthentication no")])])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在本地环境进行操作")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示你输入密码，成功之后可以直接 ssh 登录，无需密码")]),s._v("\n\n$ ssh-copy-id shanyue\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登陆成功，无需密码")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" shanyue\n")])])]),t("h2",{attrs:{id:"前言"}},[s._v("前言")]),s._v(" "),t("p",[s._v("html, nginx, docker\n内置模块：('node:http')")]),s._v(" "),t("p",[s._v("npx serve . 资源服务化？或 nginx?\nserve -s build\nscript 中配置{start: 'serve .'}命令")]),s._v(" "),t("ol",[t("li",[s._v("管理诸多网站，通过 nginx 进行路由转发至不同的服务，这也就是反向代理（对访问者来说是盲盒，具体怎么转发不关心）")]),s._v(" "),t("li",[s._v("部署方式：可以用 npm start方式，但此处需要消耗较大的内存及CPU等性能")])]),s._v(" "),t("h2",{attrs:{id:"docker-docker-compose"}},[s._v("docker/docker-compose")]),s._v(" "),t("ul",[t("li",[s._v("选择一个基础镜像")]),s._v(" "),t("li",[s._v("Dockerfile 配置\n"),t("ul",[t("li",[s._v("FROM 基础镜像")]),s._v(" "),t("li",[s._v("WORKDIR 工作目录，RUN/CMD命令都在改目录下执行")]),s._v(" "),t("li",[s._v("ADD . 目录 把宿主的代码添加到镜像中")]),s._v(" "),t("li",[s._v("RUN yarn 安装依赖")]),s._v(" "),t("li",[s._v("EXPOSE 3000")]),s._v(" "),t("li",[s._v("CMD 启动 node 服务")])])]),s._v(" "),t("li",[s._v("通过 Dockerfile 构建镜像(Image)")]),s._v(" "),t("li",[s._v("通过镜像运行容器\n"),t("ul",[t("li",[s._v("docker 常用命令\n"),t("ul",[t("li",[s._v("docker build -t name:$(git rev-parse --short HEAD) 「-f, -t」构建")]),s._v(" "),t("li",[s._v("docker images 列出所有镜像")]),s._v(" "),t("li",[s._v("docker run --rm -p 3000容:3000宿 name「--rm 停止运行时，自动删除容器，将容器中的 3000端口映射到宿主机的 3000 端口」")]),s._v(" "),t("li",[s._v("docker ps 查看所有容器")]),s._v(" "),t("li",[s._v("docker run -it --rm -p 3000:80 nginx:alpine  在本地 3000 端口访问 nginx 页面")])])]),s._v(" "),t("li",[s._v("docker-compose.yaml 实现同样的效果\n"),t("ul",[t("li",[s._v("docker-compose images")]),s._v(" "),t("li",[s._v("docker-compose up --build 启动容器前构建镜像")]),s._v(" "),t("li",[s._v("docker-compose -f learn-nginx.docker-compose.yaml up learn-nginx 指定运行的")]),s._v(" "),t("li",[s._v("docker-compose up --build --force-recreate step 都构建都运行？")])])]),s._v(" "),t("li",[s._v("构建时间优化\n"),t("ul",[t("li",[s._v("ADD package.json yarn.lock /code/----package.json/yarn.lock 事先置于镜像中")])])]),s._v(" "),t("li",[s._v("构建体积优化\n"),t("ul",[t("li",[s._v("FROM node:14-alpine as builder")]),s._v(" "),t("li",[s._v("FROM nginx:alpine 更小体积的基础镜像")]),s._v(" "),t("li",[s._v("COPY --from=builder code/build /usr/share/nginx/html")])])])])])]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("simple")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dockerfile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" simple.Dockerfile\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 4000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("learn-nginx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 4000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" nginx.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/conf.d/default.conf\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/nginx/html\n")])])]),t("h2",{attrs:{id:"nginx"}},[s._v("nginx")]),s._v(" "),t("ul",[t("li",[s._v("进入 nignx 的环境中\n"),t("ul",[t("li",[s._v("docker run -it --rm nginx:alpine sh")]),s._v(" "),t("li",[s._v("docker run -it --rm -p 3000:80 nginx:alpine 访问 nginx 的默认页面")]),s._v(" "),t("li",[s._v("查看容器中nginx配置 cat /etc/nginx/conf.d/default.conf")]),s._v(" "),t("li",[s._v("exit 可退出容器环境")])])])])])}),[],!1,null,null,null);n.default=a.exports}}]);