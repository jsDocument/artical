(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{304:function(t,a,n){"use strict";n.r(a);var e=n(0),s=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"支持的编码格式：utf8-ucs2-ascii-binary-base64-hex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#支持的编码格式：utf8-ucs2-ascii-binary-base64-hex"}},[t._v("#")]),t._v(" 支持的编码格式：utf8, ucs2, ascii, binary, base64, hex")]),t._v(" "),n("h3",{attrs:{id:"new-intl-collator-zh-hans-cn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-intl-collator-zh-hans-cn"}},[t._v("#")]),t._v(" new Intl.Collator(['zh-Hans-CN'])")]),t._v(" "),n("h3",{attrs:{id:"查看是否支持这个语言-intl-collator-supportedlocalesof-array-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看是否支持这个语言-intl-collator-supportedlocalesof-array-string"}},[t._v("#")]),t._v(" 查看是否支持这个语言  Intl.Collator.supportedLocalesOf(array|string)")]),t._v(" "),n("p",[t._v("1、打开 或 创建文件\nopen(path, flag, perm, fn)\nclose(fd, fn)\n2、写入\nwrite(fd, buffer, offset, length, position, fn)\nfd文件描述\nbuffer, Buffer对象数据，大小为8的倍数，效率高")]),t._v(" "),n("p",[t._v("writeFile(path, data, opts, fn)\nopts: encoding,  flag")]),t._v(" "),n("p",[t._v("appendFile(path, data, fn)")]),t._v(" "),n("p",[t._v("3、读\nread(fd, buffer, offset, length, position, fn)\nreadFile(path, opts, fn)  读文件")]),t._v(" "),n("p",[t._v("4、保存\nrename(old, new, fn)")]),t._v(" "),n("p",[t._v("5、存在\nexists(path, fn)\nrename(oldPath, new, fn(err){})")]),t._v(" "),n("p",[t._v("注：读取与写入有1、先open再读写，需调用close;适合多次写入或读取\n2、读写一次性，内部自动调用close.")]),t._v(" "),n("p",[t._v("6、截断 ftruncate(fd / path, len, fn)  删除文件内容")]),t._v(" "),n("p",[t._v("7、链接 link(path, newPath, fn)")]),t._v(" "),n("p",[t._v("8、更改查看与更新时间\nutimes(path, atime, mtime, fn)\nfutimes(fd, atime, mtime, fn)")]),t._v(" "),n("p",[t._v("9、watchFile(filename, opts, fn(curStat, preStat))\nunwatchFile(filename)")]),t._v(" "),n("p",[t._v("r\nr+   读取与写入\nw    写入，不存在创建, 写入方式会删除旧有数据\nw+")]),t._v(" "),n("p",[t._v("a     追加，不存在创建\na+   追加和读取")]),t._v(" "),n("p",[t._v("rs+   同步\nrs")]),t._v(" "),n("p",[t._v("wx    独占\nwx+")]),t._v(" "),n("p",[t._v("ax")]),t._v(" "),n("p",[t._v("ax+")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("mkdir('a/b/v', 0755)    循环创建，存在会报错\nrmdir   有子目录，会报错\nreaddir(dir, fn(err, files){})\nstat(file / path, fn(err, stats))   文件或目录的具体信息\nread = createReadStream(path)---data, end, error, readable事件\ncreateWriteStream(path)---write, end方法  finish事件")]),t._v(" "),n("p",[t._v("会插入到新文件的最前面：\nread.push()\nwrite.write()")]),t._v(" "),n("p",[t._v("read.pipe(write)\nread.on('data', fn(chunk){\nchunk.write()\n})")]),t._v(" "),n("p",[t._v("stats.isFile()\nstats.isDirectory()\nstat = fs.statSync(url)  可以判断是文件或目录")]),t._v(" "),n("p",[t._v("unlink(url)  删除文件")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("__filename  正在执行的文件\n__dirname  正在执行的目录\nprocess")]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[t._v("fs.stat(path, fn)")]),t._v(" "),n("li",[t._v("fs.lstat()")]),t._v(" "),n("li",[t._v("fs.fstat()\n返回\nstats.isFile()\nstats.isDirectory()\nstats.isBlockDevice()\nstats.isCharacterDevice()\nstats.isSymbolicLink() (only valid with fs.lstat())\nstats.isFIFO()\nstats.isSocket()")])]),t._v(" "),n("p",[t._v("app.use(express.static('dir'))\n资源放在多个目录，用中间件，访问资源时，中间件会根据目录添加的顺序查找所需的文件；\napp.use('/static', express.static('dir'))\n通过一个虚拟目录，指定一个挂载路径，通过/static来访问dir目录下面的文件")])])}],!1,null,null,null);a.default=s.exports}}]);