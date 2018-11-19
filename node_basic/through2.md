# through2是对node原生transform的封装

Transform是全双工流，既可读又可写，两个缓冲区相互关联；Duplex的可读可写没有任何关联，是两个缓冲区和管道互补干扰。highWaterMark为阈值，超过阈值后将会停止读或写操作。

```javascript
let i = 0;
const readable = Readable({
  highWaterMark: 2,
  read: function () {
    var data = i < 26 ? String.fromCharCode(i++ + 97) : null;
    console.log('push', data);
    this.push(data);
  }
});

const transform = Transform({
  highWaterMark: 2,
  transform: function (buf, enc, next) {
    console.log('transform', buf.toString());
    next(null, buf);
  }
})

readable.pipe(transform);
```

由于阈值为2，所以只能push到f，这时readable缓存区已满，transform的读缓存区和写缓存区都已经满了(transform的两个缓存区阈值都为2)，即写缓存区写入b之后就满了，即e,f在readable缓存区中，c,d在transform的读缓存区中，a,b在transform的写缓存区中。增加一个流向即可解决问题。

```javascript
    readable.pipe(transform).pipe(process.stdout);
```

## through2暴露了3个API(through2, through2.obj, through2.ctro)

```javascript
DestroyableTransform.prototype.destroy = function(err) {
  if (this._destroyed) return
  this._destroyed = true
  
  var self = this
  process.nextTick(function() {
    if (err)
      self.emit('error', err)
    self.emit('close')
  })
}
```

streamObj.\_transform, streamObj.\_flush