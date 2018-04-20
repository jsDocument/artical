## Blob  一段二进制数据

- new Blob(实际数据的数组, {type: MIME})
- blob.slice(startByte, endByte)

## file DOM

- value-->fakeURL/filename
- files-->FileList
- lastModified
- name
- lastModifiedDate
- webkitRelativePath
- size

## File 以文件形式存在的二进制数据

## FileList  File对象的网页表单接口

## FileReader  负责二进制数据读入内存，异步方式读取

1. 方法
  - FileReader(Blob, File)
  - FileReader.readAsBinaryString(Blob | File)   结果为二进制字符串
  - FileReader.readAsText(Blob | File)  文本字符串
  - FileReader.readAsDataURL(Blob | File)   基于base64编码的data-uri对象
  - FileReader.readAsArrayBuffer(Blob | File)  ArrayBuffer对象
2. 事件回调
  - onabort
  - onerror
  - onload
  - onloadend
  - onloadstart
  - onprogress
3. reader属性
- result
- refs
- readystate

## URL  对二进制数据生成URL

- URL.createObjectURL(blob)
- URL.revokeObjectURL(img.src)  清除释放

form  enctype="multipart/form-data"  把文件传到本机的temp目录
-----------
co-busbody  解析multipart请求体
koa-cors
koa-multer

----------
form + iframe 实现异步上传
将form的target指向iframe，选择完文件，提交子页面的form，这时iframe跳转，父页面没有刷新

---------
FormData + xhr.send()
.append(‘key’, params[key])  Blob或String

.append(fileName, fileObj)
---------
drop, dragover, drag leave
event.dataTransfer.files

---------
进度
xhr.onreadystatechange
xhr.readyState = 4  loaded

xhr.upload.onprogress-->e
e.lengthComputable,  e.loaded, e.total
------------
file切割：
File.prototype.mozSlice
webkitSlice
slice(file, start, end)

FileReader---load事件  progress
result 预览地址
readAsDataUrl----base64编码串
readAsArrayBuffer
readAsBinaryString

-----------
************
XMLHttpRequest  2.0新增的传送数据类型：
DOMString:  UTF-16, 即普通字符串
Document：类似XML
FormData(FormElement)：send方法提交，可以上传二进制文件，类似于serialize(); 键值对？
Blob：(二进制大文件)只读原始数据的类文件对象，有slice方法切出另一个Blob，canvas对象的toBlob方法，与window.URL；可以append ArrayBuffer数据
new Blob([ , ], {type: })

File：基于Blob
ArrayBuffer：二进制数据的原始缓冲区？作为数据源提前pgtygc内存中，不可改变的二进制数据，本身不可读写；-----类型化数组或DataView来解释原始缓冲区。

类型化数组：get-    set-
Int8Array, Uint8Array, Int16Array, Uint16Array, Int16Array, Uint16Array, Float32Array, Float64Array

(new Uint8Array([1, 2, 3])).buffer


使用：b = new ArrayBuffer(8)
v1 = new Int32Array(b)
v1 = new Int32Array(b, 2, 2)  索引   长度


new DataView(buffer, offset, length)

对WebGL  Canvas
----------
Uint8Array
window.atob
Blob




类型化数组----与显卡之间的大量、实时数据交换！
针对内存进行操作。


bf.byteLength  占据内存长度
byteOffset   从底层ArrayBuffer对象的哪个字节开始

分配内存
bf = new ArrayBuffer(40)
bf.slice(0, 10)  拷贝生成一个新的ArrayBuffer



类型化数组：get-    set-
Int8Array  1字节
Uint8Array  1字节
Int16Array  2字节
Uint16Array  2字节
Int32Array  4字节
Uint32Array  4字节
Float32Array  4字节
Float64Array  8字节

Int8Array.BYTES_PER_ELEMENT   占的字节数

v1 = new Int32Array(bf)
v2 = new Unit32Array(bf，2)
v3 = new Unit16Array(bf，2，2)
同一对象上，可以根据不同的数据类型，建立多个视图，重叠的，任何一个视图对内存个性，另外两个视图都会反应出来

v1.set(v2, 2)

v3.subarray(2, 3)再建立一个视图



2、直接生成  new Float64Array(8)

3、普通数组转为视图数组
typedArray = new Unit8Array([1, 2, 3,4])

视图转为数组  Array.from(typedArray)
