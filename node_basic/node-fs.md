### 支持的编码格式：utf8, ucs2, ascii, binary, base64, hex

### new Intl.Collator(['zh-Hans-CN'])

### 查看是否支持这个语言  Intl.Collator.supportedLocalesOf(array|string)

1、打开 或 创建文件
open(path, flag, perm, fn)
close(fd, fn)
2、写入
write(fd, buffer, offset, length, position, fn)
fd文件描述
buffer, Buffer对象数据，大小为8的倍数，效率高

writeFile(path, data, opts, fn)
opts: encoding,  flag

appendFile(path, data, fn)


3、读
read(fd, buffer, offset, length, position, fn)
readFile(path, opts, fn)  读文件


4、保存
rename(old, new, fn)



5、存在
exists(path, fn)
rename(oldPath, new, fn(err){})



注：读取与写入有1、先open再读写，需调用close;适合多次写入或读取
2、读写一次性，内部自动调用close.




6、截断 ftruncate(fd / path, len, fn)  删除文件内容


7、链接 link(path, newPath, fn)


8、更改查看与更新时间
utimes(path, atime, mtime, fn)
futimes(fd, atime, mtime, fn)

9、watchFile(filename, opts, fn(curStat, preStat))
unwatchFile(filename)






r
r+   读取与写入
w    写入，不存在创建, 写入方式会删除旧有数据
w+

a     追加，不存在创建
a+   追加和读取


rs+   同步
rs

wx    独占
wx+

ax

ax+

----------------------------------
mkdir('a/b/v', 0755)    循环创建，存在会报错
rmdir   有子目录，会报错
readdir(dir, fn(err, files){})
stat(file / path, fn(err, stats))   文件或目录的具体信息
read = createReadStream(path)---data, end, error, readable事件
createWriteStream(path)---write, end方法  finish事件

会插入到新文件的最前面：
read.push()
write.write()

read.pipe(write)
read.on('data', fn(chunk){
 chunk.write()
})


stats.isFile()
stats.isDirectory()
stat = fs.statSync(url)  可以判断是文件或目录


unlink(url)  删除文件

------------------------------
__filename  正在执行的文件
__dirname  正在执行的目录
process


--------------------------
+ fs.stat(path, fn)
+ fs.lstat()
+ fs.fstat()
返回
stats.isFile()
stats.isDirectory()
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isSymbolicLink() (only valid with fs.lstat())
stats.isFIFO()
stats.isSocket()


app.use(express.static('dir'))
资源放在多个目录，用中间件，访问资源时，中间件会根据目录添加的顺序查找所需的文件；
app.use('/static', express.static('dir'))
通过一个虚拟目录，指定一个挂载路径，通过/static来访问dir目录下面的文件
