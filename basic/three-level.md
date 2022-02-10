- Blob 二进制类型的大对象，size, type
- File 基于 Blob，来自
  - <input/> 上返回的 FileList 对象
  - 拖放操作产生的 DataTransfer 对象
  - FileReader, URL.createObjectURL(), XMLHttpRequest.send()都可以处理以上两种类型数据，Blob.slice
- 大文件并发上传
  - 获取上传文件、生成 MD5 值
- 大文件并发下载

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
