(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{117:function(e,r,a){"use strict";a.r(r);var t=a(0),l=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"blob-一段二进制数据"}},[e._v("Blob  一段二进制数据")]),a("ul",[a("li",[e._v("new Blob(实际数据的数组, {type: MIME})")]),a("li",[e._v("blob.slice(startByte, endByte)")])]),a("h2",{attrs:{id:"file-dom"}},[e._v("file DOM")]),a("ul",[a("li",[e._v("value--\x3efakeURL/filename")]),a("li",[e._v("files--\x3eFileList")]),a("li",[e._v("lastModified")]),a("li",[e._v("name")]),a("li",[e._v("lastModifiedDate")]),a("li",[e._v("webkitRelativePath")]),a("li",[e._v("size")])]),a("h2",{attrs:{id:"file-以文件形式存在的二进制数据"}},[e._v("File 以文件形式存在的二进制数据")]),a("h2",{attrs:{id:"filelist-file对象的网页表单接口"}},[e._v("FileList  File对象的网页表单接口")]),a("h2",{attrs:{id:"filereader-负责二进制数据读入内存，异步方式读取"}},[e._v("FileReader  负责二进制数据读入内存，异步方式读取")]),a("ol",[a("li",[e._v("方法")])]),a("ul",[a("li",[e._v("FileReader(Blob, File)")]),a("li",[e._v("FileReader.readAsBinaryString(Blob | File)   结果为二进制字符串")]),a("li",[e._v("FileReader.readAsText(Blob | File)  文本字符串")]),a("li",[e._v("FileReader.readAsDataURL(Blob | File)   基于base64编码的data-uri对象")]),a("li",[e._v("FileReader.readAsArrayBuffer(Blob | File)  ArrayBuffer对象")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("事件回调")])]),a("ul",[a("li",[e._v("onabort")]),a("li",[e._v("onerror")]),a("li",[e._v("onload")]),a("li",[e._v("onloadend")]),a("li",[e._v("onloadstart")]),a("li",[e._v("onprogress")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("reader属性")])]),a("ul",[a("li",[e._v("result")]),a("li",[e._v("refs")]),a("li",[e._v("readystate")])]),a("h2",{attrs:{id:"url-对二进制数据生成url"}},[e._v("URL  对二进制数据生成URL")]),a("ul",[a("li",[e._v("URL.createObjectURL(blob)")]),a("li",[e._v("URL.revokeObjectURL(img.src)  清除释放")])]),a("h2",{attrs:{id:"form-enctype-multipart-form-data-把文件传到本机的temp目录"}},[e._v('form  enctype="multipart/form-data"  把文件传到本机的temp目录')]),a("p",[e._v("co-busbody  解析multipart请求体\nkoa-cors\nkoa-multer")]),a("hr"),a("p",[e._v("form + iframe 实现异步上传\n将form的target指向iframe，选择完文件，提交子页面的form，这时iframe跳转，父页面没有刷新")]),a("hr"),a("p",[e._v("FormData + xhr.send()\n.append(‘key’, params[key])  Blob或String")]),a("h2",{attrs:{id:"append-filename-fileobj"}},[e._v(".append(fileName, fileObj)")]),a("p",[e._v("drop, dragover, drag leave\nevent.dataTransfer.files")]),a("hr"),a("p",[e._v("进度\nxhr.onreadystatechange\nxhr.readyState = 4  loaded")]),a("h2",{attrs:{id:"xhr-upload-onprogress-ee-lengthcomputable-e-loaded-e-total"}},[e._v("xhr.upload.onprogress--\x3ee\ne.lengthComputable,  e.loaded, e.total")]),a("p",[e._v("file切割：\nFile.prototype.mozSlice\nwebkitSlice\nslice(file, start, end)")]),a("p",[e._v("FileReader---load事件  progress\nresult 预览地址\nreadAsDataUrl----base64编码串\nreadAsArrayBuffer\nreadAsBinaryString")]),a("hr"),a("hr"),a("p",[e._v("XMLHttpRequest  2.0新增的传送数据类型：\nDOMString:  UTF-16, 即普通字符串\nDocument：类似XML\nFormData(FormElement)：send方法提交，可以上传二进制文件，类似于serialize(); 键值对？\nBlob：(二进制大文件)只读原始数据的类文件对象，有slice方法切出另一个Blob，canvas对象的toBlob方法，与window.URL；可以append ArrayBuffer数据\nnew Blob([ , ], {type: })")]),a("p",[e._v("File：基于Blob\nArrayBuffer：二进制数据的原始缓冲区？作为数据源提前pgtygc内存中，不可改变的二进制数据，本身不可读写；-----类型化数组或DataView来解释原始缓冲区。")]),a("p",[e._v("类型化数组：get-    set-\nInt8Array, Uint8Array, Int16Array, Uint16Array, Int16Array, Uint16Array, Float32Array, Float64Array")]),a("p",[e._v("(new Uint8Array([1, 2, 3])).buffer")]),a("p",[e._v("使用：b = new ArrayBuffer(8)\nv1 = new Int32Array(b)\nv1 = new Int32Array(b, 2, 2)  索引   长度")]),a("p",[e._v("new DataView(buffer, offset, length)")]),a("h2",{attrs:{id:"对webgl-canvas"}},[e._v("对WebGL  Canvas")]),a("p",[e._v("Uint8Array\nwindow.atob\nBlob")]),a("p",[e._v("类型化数组----与显卡之间的大量、实时数据交换！\n针对内存进行操作。")]),a("p",[e._v("bf.byteLength  占据内存长度\nbyteOffset   从底层ArrayBuffer对象的哪个字节开始")]),a("p",[e._v("分配内存\nbf = new ArrayBuffer(40)\nbf.slice(0, 10)  拷贝生成一个新的ArrayBuffer")]),a("p",[e._v("类型化数组：get-    set-\nInt8Array  1字节\nUint8Array  1字节\nInt16Array  2字节\nUint16Array  2字节\nInt32Array  4字节\nUint32Array  4字节\nFloat32Array  4字节\nFloat64Array  8字节")]),a("p",[e._v("Int8Array.BYTES_PER_ELEMENT   占的字节数")]),a("p",[e._v("v1 = new Int32Array(bf)\nv2 = new Unit32Array(bf，2)\nv3 = new Unit16Array(bf，2，2)\n同一对象上，可以根据不同的数据类型，建立多个视图，重叠的，任何一个视图对内存个性，另外两个视图都会反应出来")]),a("p",[e._v("v1.set(v2, 2)")]),a("p",[e._v("v3.subarray(2, 3)再建立一个视图")]),a("p",[e._v("2、直接生成  new Float64Array(8)")]),a("p",[e._v("3、普通数组转为视图数组\ntypedArray = new Unit8Array([1, 2, 3,4])")]),a("p",[e._v("视图转为数组  Array.from(typedArray)")])])}],!1,null,null,null);r.default=l.exports}}]);