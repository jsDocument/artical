# Buffer

### Buffer 代表一个二进制缓冲区
+ 类似一个数组, 有下标、有长度、有剪切复制等操作, 但Buffer的大小在被创建时确定, 无法调整。
+ Buffer处理的是节点, 两位十六进制, 因此整数范围为0~255
+ Buffer用来处理文件I/O或网络I/O传输的二进制数据, 字符串用来呈现, 传输用Buffer速度会快很多, 但操作字符串比Buffer快很多。
+ Buffer和字符串可以互转, 还可以设置字符集编码

### Buffer内存分配与性能优化
+ Buffer是典型的javascript与c++ 结合的模块, 与性能有关的c++来实现, javascript负责衔接和提供接口
+ Buffer所占的内存不是V8分配的, 是独立于V8堆内存之外的内存, 通过c++层面实现内存申请、javascript负责分配内存

### 常用方法
+ Buffer.alloc(size) 请求一个Buffer内存时, 会以8KB为界限来判断分配的是大对象还是小对象, 小对象存入剩余内存池, 不够再分配一个8KB的内存池; 大对象直接采用c++层面申请的内存, 因些申请一个大内存池比申请多个小内存池要快很多。

+ Buffer.from()
+ Buffer.allocUnsafe
+ Buffer.byteLength()
+ Buffer.compare()
+ Buffer.concat()
+ Buffer.isBuffer()
+ Buffer.isEncoding()


### 实例属性方法
+ toString('encode')

### 编码类型：Buffer.isEncoding(encoding)判断是否为编码
1. utf8，多字节编码的Unicode字符，大多数文档和网页采用这种编码格式
2. ascii，8bit编码，一个字符占1个字节
3. utf16le，小端编码的unicode字符
4. utf16be，大端编码的unicode
5. ucs2，unicode编码，每个字符占两个字节
6. base64，Base-64字符串编码
7. hex，每个字节编码为两个十六进制字符


### Buffer也是Uint8Array实例


### 读数据
- buf[index]
- buf.readIntXXX，buf.readUintXXX
- JSON.stringify(buf)会自动调用buf.toJSON()方法

### 写数据
- buf.write(string[, offset][, length][, encoding])
[^ 其他方法：writeUInt8、writeUInt16LE、writeUInt16BE、writeUInt31LE、writeUInt32BE、writeInt8、writeInt16LE、writeInt32LE]


### 创建new Buffer(buffer/size/array/str[,encoding])
[^ 分配的缓冲区，是未初始化的，那块内存里，可能是脏的]


