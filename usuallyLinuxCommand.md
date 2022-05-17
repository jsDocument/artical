# 常用linux 命令

## 端口
1. lsof -i:80
2. netstat -lnp |grep 80

## 进程
1. ps aux | grep 'nginx'
2. pstree

## 服务
1. brew services list
2. brew services cleanup 清楚忆卸载应用的无用配置
3. brew info nginx 查看包信息
4. launchctl load加载/卸载
