+ Blob 二进制类型的大对象，size, type，可将文件分割为字节范围
+ File 基于 Blob，来自
  + <input/> 上返回的 FileList 对象， dom.files[0] 来获取File(名称、大小、mimetype和对文件句柄的引用)
  + 拖放操作产生的 DataTransfer 对象
  + FileReader, URL.createObjectURL(), XMLHttpRequest.send()都可以处理以上两种类型数据，Blob.slice
  + FileReader 负责二进制数据读入内存，异步方式读取，读取客户端文件，读取完毕不会载入到缓存
    + readAsDataUrl----base64编码串
    + readAsArrayBuffer
    + readAsBinaryString
+ 大文件并发上传
  + 获取上传文件、生成 MD5 值
+ 大文件并发下载
+ base64 由字符、数字、+、/组成；URL Base64 将 `+` 替换为`_`，`/`替换为`-`

## FileReader 读取File或Blob

1. reader = new FileReader(); reader.readAsDataURL(file) 读取文件
2. reader.onload = function(e){} 渲染文件
3. 方法
   + FileReader(Blob, File)
   + FileReader.readAsBinaryString(Blob | File)   结果为二进制字符串
   + FileReader.readAsText(Blob | File)  文本字符串
   + FileReader.readAsDataURL(Blob | File)   基于base64编码的data-uri对象
   + FileReader.readAsArrayBuffer(Blob | File)  ArrayBuffer对象

4. 事件回调
   + onabort
   + onerror
   + onload
   + onloadend
   + onloadstart
   + onprogress

5. reader属性
   + result
   + refs
   + readystate

## URL scheme



## 上传文件

1. form_data = new FormData();
2. form_data.append('key', file)

+ new Blob(实际数据的数组, {type: MIME})
+ blob.slice(startByte, endByte)

## file DOM

+ value-->fakeURL/filename
+ files-->FileList
+ lastModified
+ name
+ lastModifiedDate
+ webkitRelativePath
+ size

## URL  对二进制数据生成URL

+ URL.createObjectURL(blob)
+ URL.revokeObjectURL(img.src)  清除释放


+ FormData()
  + form  enctype="multipart/form-data"  把文件传到本机的temp目录
  + form + iframe 实现异步上传，将form的target指向iframe，选择完文件，提交子页面的form，这时iframe跳转，父页面没有刷新
  + FormData + xhr.send()
  + .append(‘key’, params[key])  Blob或String
  + .append(fileName, fileObj)
+ node 端处理
  + co-busbody  解析multipart请求体
  + koa-cors
  + koa-multer
+ 拖拽 drop, dragover, drag leave----event.dataTransfer.files

ArrayBuffer：二进制数据的原始缓冲区？作为数据源提前pgtygc内存中，不可改变的二进制数据，本身不可读写；-----类型化数组或DataView来解释原始缓冲区。

类型化数组：get+    set-
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

bf.byteLength  占据内存长度
byteOffset   从底层ArrayBuffer对象的哪个字节开始

分配内存
bf = new ArrayBuffer(40)
bf.slice(0, 10)  拷贝生成一个新的ArrayBuffer



类型化数组：get+    set-
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


FileReader类，读取客户端文件，读取完毕不会载入到缓存
实例方法：
onabort
abort
onerror
onload
onloadend
onloadstart
onprogress
readyState
result
DONE: 2
EMPTY: 0
LOADING: 1
readAsBinaryString(File Object)
readAsDataURL(File Object)
readAsText(File Object)

此名之后，上面的result才会有值：
fileReader.readAsDataURL(uploadButton.files[0]);

File 是H5的对象，file input DOM在onchange事件上，有files属性，可以返回选中文件数组  Dom.files[0] 是File对象的实例；
File属性：lastModified，lastModifiedDate，name，type

File Error类：可以自己生成此类，用于错误提示，【类名.属性】可以直接使用
ABORT_ERR: 3
ENCODING_ERR: 5
INVALID_MODIFICATION_ERR: 9
INVALID_STATE_ERR: 7
NOT_FOUND_ERR: 1
NOT_READABLE_ERR: 4
NO_MODIFICATION_ALLOWED_ERR: 6
PATH_EXISTS_ERR: 12
QUOTA_EXCEEDED_ERR: 10
SECURITY_ERR: 2
SYNTAX_ERR: 8
TYPE_MISMATCH_ERR: 11

二进制数据Blob：为了存储方便，手动把数据转换为Blob，H5中
var myblob = new Blob([html, html], {“type”: “text\/xml”}); 两个可选参数，一个是数据，另一个是mine-type

var blob = new Blob([“hello”]);
a.href = window.URL.createObjectURL(blob);
a.download = “hello.txt”;
a.textContent = “download hello"
body.append(a);

DataTransfer与DataTransferItemList：用于数据的交互，如拖拽上传、拖拽选择
事件：img外层：ondrop   ondragover(处理ev.preventDefault)
ondrop处理：1、阻止默认行为；2、data = ev.dataTransfer.getData(“Text”);

img：draggable属性为true  事件：ondragstart
ondrag处理ev.dataTransfer.setData(“Text”, ev.target.id)

例子：

```javascript
var uploadButton = document.getElementById('uploadFile');
    uploadButton.onchange = function(){
        var img = new Image();
        var fileReader = new FileReader();
            console.log(fileReader);
        fileReader.onload = function(evt){
            var img = new Image();
            img.src = fileReader.result;
            console.log(img.width);
            console.log(img.height);
        }
        fileReader.onloadstart = function(evt){

        }
        fileReader.onloadend = function(evt){

        }
        fileReader.onprogress = function(evt){

        }
        fileReader.onerror = function(evt){
        }
        fileReader.readAsDataURL(uploadButton.files[0]);
        // img.src = this.value;
        // var fso = new ActiveXObject("Scripting.FileSystemObject");
        // var file = fso.GetFile(this.value);
        // console.log(file.Attribute);
        // console.log(uploadButton.files[0]);
        // console.log(uploadButton.files[0] instanceOf File);
        img.onload = function(){

        }
    }

    function dropHandler(e)
    {
          e.stopPropagation();
          e.preventDefault();

        var files = e.dataTransfer.files;
         for(var i = 0, len = files.length; i < len; i++)
         {
            var f = files[i];
            console.log(f);
         }

   }

    function dragOverHandler(e)
    {
          e.stopPropagation();
          e.preventDefault();
          e.dataTransfer.dragEffect = 'copy'; //设置当拖拽到指定区域时，让文件可被复制
    }

    function dragStartHandler(e)
    {

    }

    var drag = document.getElementById('drag');
    drag.addEventListener('drop', dropHandler, false);
    drag.addEventListener('dragover', dragOverHandler, false);
    drag.addEventListener('dragover', dragStartHandler, false);
```

</body>
</html>


```javascript
// 上传
// MD5用的 SparkMD5
function calcFileMD5(file) {
  return new Promise((resolve, reject) => {
    let chunkSize = 2097152, // 2M
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader();

      fileReader.onload = (e) => {
        spark.append(e.target.result);
        currentChunk++;
        if (currentChunk < chunks) {
          loadNext();
        } else {
          resolve(spark.end());
        }
      };

      fileReader.onerror = (e) => {
        reject(fileReader.error);
        reader.abort();
      };

      function loadNext() {
        let start = currentChunk * chunkSize,
          end = start + chunkSize >= file.size ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(file.slice(start, end));
      }
      loadNext();
  });
}
// 并发控制？
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // 保存正在执行的异步任务
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret);
}
// 检查文件是否已经上传过了
function checkFileExist(url, name, md5) {
  return request.get(url, {
    params: {
      name,
      md5,
    },
  }).then((response) => response.data);
}
// 上传
function upload({
  url, file, fileMd5,
  fileSize, chunkSize, chunkIds,
  poolLimit = 1,
}) {
  const chunks = typeof chunkSize === "number" ? Math.ceil(fileSize / chunkSize) : 1;
  return asyncPool(poolLimit, [...new Array(chunks).keys()], (i) => {
    if (chunkIds.indexOf(i + "") !== -1) { // 已上传的分块直接跳过
      return Promise.resolve();
    }
    let start = i * chunkSize;
    let end = i + 1 == chunks ? fileSize : (i + 1) * chunkSize;
    const chunk = file.slice(start, end); // 对文件进行切割
    return uploadChunk({
      url,
      chunk,
      chunkIndex: i,
      fileMd5,
      fileName: file.name,
    });
  });
}
// 上传操作
function uploadChunk({ url, chunk, chunkIndex, fileMd5, fileName }) {
  let formData = new FormData();
  formData.set("file", chunk, fileMd5 + "-" + chunkIndex);
  formData.set("name", fileName);
  formData.set("timestamp", Date.now());
  return request.post(url, formData);
}
// 通知服务器执行分开合并
function concatFiles(url, name, md5) {
  return request.get(url, {
    params: {
      name,
      md5,
    },
  });
}
```
