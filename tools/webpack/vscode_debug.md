# 使用vscode进行node调试

- vscode内置的nodejs调试喝咖啡是通过`wire protocols`与`Nodejs`运行环境进行通信的，所支持的`wire protocols`是在运行时确定的。
    - 现在有两种wire protocols存在
    1. legacy, 原来的V8调试协议，可能在Nodejs v8.X中丢弃
    2. inspector, 新的V8检查协议
- 启动配置属性，启动类型为launch和attach(关联到一个已经运行的程序)中
    - protocol:使用的调试协议
    - port:使用的调试端口
    - address:使用的调试TCP / IP地址
    - restart:终止时重新启动会话(restart session on termination)
    - timeout:重新启动会话时，在这个毫秒数之后丢弃
    - stopOnEntry:程序启动时立即中断
    - localRoot:VScode的根目录
    - remoteRoot:Node的根目录
    - sourceMaps:开启source maps设置为true
- 只支持在launch中的配置属性
    - program:程序的绝对路径
    - cwd:启动程序在此目录中进行调试
    - runtimeExecutable:要使用的运行时可执行文件的绝对路径。默认是node,此处还可以指定为其他的可执行文件如：${workspaceRoot}/node_modules/.bin/electron 或者 直接写为 electron npm gulp


```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch-vai-babel-node",
      "runtimeExecutable": "npm",
      "runtimeArgs": [
        "run",
        "debug"
      ],
      "port":9229,
      "env": {
          "NODE_ENV": "develop"
      },
      "console": "internalConsole"

    }
  ]
}
```

## 属性
- type:配置类型
- request:请求配置类型。可以是“启动(launch)”或“附加(attach)”
- name:配置名称；在启动配置下拉菜单中显示
- program:程序的绝对路径。通过查看 package.json 和打开的文件猜测所生成的值。编辑此属性
- address:待调试进程的 TCP/IP 地址(仅限 Node.js >= 5.0)。默认值为 “localhost”
- port:调试要附加的端口。默认端口是 5858

## 变量
- ${workspaceRoot}:VSCode中打开文件夹的路径
- ${workspaceFolder} 当前打开的项目目录

## 其他配置
- url
- args
- outDir 编译后代码生成的目录

## 多个json任务配合


