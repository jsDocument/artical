(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{150:function(e,i,f){"use strict";f.r(i);var r=f(0),t=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,i=e.$createElement,f=e._self._c||i;return f("div",{staticClass:"content"},[f("h1",{attrs:{id:"buffer"}},[e._v("Buffer")]),f("h3",{attrs:{id:"buffer-代表一个二进制缓冲区"}},[e._v("Buffer 代表一个二进制缓冲区")]),f("ul",[f("li",[e._v("类似一个数组, 有下标、有长度、有剪切复制等操作, 但Buffer的大小在被创建时确定, 无法调整。")]),f("li",[e._v("Buffer处理的是节点, 两位十六进制, 因此整数范围为0~255")]),f("li",[e._v("Buffer用来处理文件I/O或网络I/O传输的二进制数据, 字符串用来呈现, 传输用Buffer速度会快很多, 但操作字符串比Buffer快很多。")]),f("li",[e._v("Buffer和字符串可以互转, 还可以设置字符集编码")])]),f("h3",{attrs:{id:"buffer内存分配与性能优化"}},[e._v("Buffer内存分配与性能优化")]),f("ul",[f("li",[e._v("Buffer是典型的javascript与c++ 结合的模块, 与性能有关的c++来实现, javascript负责衔接和提供接口")]),f("li",[e._v("Buffer所占的内存不是V8分配的, 是独立于V8堆内存之外的内存, 通过c++层面实现内存申请、javascript负责分配内存")])]),f("h3",{attrs:{id:"常用方法"}},[e._v("常用方法")]),f("ul",[f("li",[f("p",[e._v("Buffer.alloc(size) 请求一个Buffer内存时, 会以8KB为界限来判断分配的是大对象还是小对象, 小对象存入剩余内存池, 不够再分配一个8KB的内存池; 大对象直接采用c++层面申请的内存, 因些申请一个大内存池比申请多个小内存池要快很多。")])]),f("li",[f("p",[e._v("Buffer.from()")])]),f("li",[f("p",[e._v("Buffer.allocUnsafe")])]),f("li",[f("p",[e._v("Buffer.byteLength()")])]),f("li",[f("p",[e._v("Buffer.compare()")])]),f("li",[f("p",[e._v("Buffer.concat()")])]),f("li",[f("p",[e._v("Buffer.isBuffer()")])]),f("li",[f("p",[e._v("Buffer.isEncoding()")])])]),f("h3",{attrs:{id:"实例属性方法"}},[e._v("实例属性方法")]),f("ul",[f("li",[e._v("toString('encode')")])]),f("h3",{attrs:{id:"编码类型：buffer-isencoding-encoding-判断是否为编码"}},[e._v("编码类型：Buffer.isEncoding(encoding)判断是否为编码")]),f("ol",[f("li",[e._v("utf8，多字节编码的Unicode字符，大多数文档和网页采用这种编码格式")]),f("li",[e._v("ascii，8bit编码，一个字符占1个字节")]),f("li",[e._v("utf16le，小端编码的unicode字符")]),f("li",[e._v("utf16be，大端编码的unicode")]),f("li",[e._v("ucs2，unicode编码，每个字符占两个字节")]),f("li",[e._v("base64，Base-64字符串编码")]),f("li",[e._v("hex，每个字节编码为两个十六进制字符")])]),f("h3",{attrs:{id:"buffer也是uint8array实例"}},[e._v("Buffer也是Uint8Array实例")]),f("h3",{attrs:{id:"读数据"}},[e._v("读数据")]),f("ul",[f("li",[e._v("buf[index]")]),f("li",[e._v("buf.readIntXXX，buf.readUintXXX")]),f("li",[e._v("JSON.stringify(buf)会自动调用buf.toJSON()方法")])]),f("h3",{attrs:{id:"写数据"}},[e._v("写数据")]),f("ul",[f("li",[e._v("buf.write(string[, offset][, length][, encoding])")])]),f("p",[e._v("其他方法：writeUInt8、writeUInt16LE、writeUInt16BE、writeUInt31LE、writeUInt32BE、writeInt8、writeInt16LE、writeInt32LE")]),f("h3",{attrs:{id:"创建new-buffer-buffer-size-array-str-encoding"}},[e._v("创建new Buffer(buffer/size/array/str[,encoding])")]),f("p",[e._v("[^ 分配的缓冲区，是未初始化的，那块内存里，可能是脏的]")])])}],!1,null,null,null);i.default=t.exports}}]);