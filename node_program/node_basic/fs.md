# fs

## fs大致包含的功能

+ 读取大文件：createReadStream, stream.on('data',cb), stream.on('end',cb),
+ open, read, close?
+ 修改文件名 rename
+ 修改文件权限 chmod
+ 修改文件所有者及组 chown
+ 文件状态stat
+ 创建硬连接 link, 删除 unink
+ 创建符号链接 symlink
+ 读取一个符号链接 readlink
+ 返回绝对路径 realpath
+ 目录 rmdir, mkdir, readdir
+ 关闭一个文件描述符 close
+ open  返回一个文件操作符
+ 写入数据到文件write, read
+ 同步磁盘中的文件数据 fsync
+ 设置文件的读取和修改时间  utimes
+ 截断或扩展文件到指定的长度 truncate
+ 监听 watch 文件变化
+ 判断是路径：stateInfo = fs.isStateSync(path); stateInfo.isDirectory()

Writable: 可以写入数据的流（例如，fs.createWriteStream()）。

Readable: 可以从中读取数据的流（例如，fs.createReadStream()）。

Duplex: Readable 和 Writable 的流（例如，net.Socket）。

Transform: 可以在写入和读取数据时修改或转换数据的 Duplex 流（例如，zlib.createDeflate()
