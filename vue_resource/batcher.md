# 管理watcher队列

## watcher 更新运行队列
+ queue  内部watcher队列
+ userQueue  用户watcher队列
+ has watcher与队列位置的map
+ internalQueueDepleted  内部队列
+ circular
+ waiting 等待状态

```js
export function pushWatcher (watcher) {
  var id = watcher.id
  if (has[id] == null) {
    // 内部队列队列是空的 且些watcher为内部的, 则立即执行
    if (internalQueueDepleted && !watcher.user) {
      watcher.run()
      return
    }
    // 更新watcher到队列
    var q = watcher.user ? userQueue : queue
    // 存储watcher.id与队列位置的map
    has[id] = q.length
    q.push(watcher)
    // 排队执行
    if (!waiting) {
      waiting = true
      nextTick(flushBatcherQueue)
    }
  }
}

/**
  * Flush both queues and run the watchers.
  */
function flushBatcherQueue () {
  // 排队执行
  runBatcherQueue(queue)
  // 执行完成, 内部队列状态为空
  internalQueueDepleted = true
  // 排队执行用户watcher队列
  runBatcherQueue(userQueue)
  // 触发flush事件
  /* istanbul ignore if */
  if (devtools) {
    devtools.emit('flush')
  }
  // 重置队列与状态
  resetBatcherState()
}

/**
  * 执行队列中的watcher
  *
  * @param {Array} queue
  */

function runBatcherQueue (queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i]
    var id = watcher.id
    // watcher.id的值置空
    has[id] = null
    // 执行run
    watcher.run()
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1
      if (circular[id] > config._maxUpdateCount) {
        queue.splice(has[id], 1)
        warn(
          'You may have an infinite update loop for watcher ' +
          'with expression: ' + watcher.expression
        )
      }
    }
  }
}

/**
  * 重置队列与状态
  */

function resetBatcherState () {
  queue = []
  userQueue = []
  has = {}
  circular = {}
  waiting = internalQueueDepleted = false
}
```
