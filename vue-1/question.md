+ nextTick 原理：
  + callbacks数组用来存储 nextTick
  + Promise.then、MutationObserve、setTimeout、setImmediate 等方式在 microtask（或是task）中创建一个事件
  + push到当前这一次事件循环的microtask队列末尾，因为微任务会在这次事件结束前执行
  + task则会push到task队列末尾，可能需要等待多次事件循环才后执行（取决于task队列的长度），等待时间较长。
  + 每次触发某个数据的 setter 方法后，对应的 Watcher 对象其实会被 push 进一个队列 queue 中，在下一个 tick 的时候将这个队列 queue 全部拿出来 run
+ v-if, v-show, v-html 的实现原理
  + v-if会调用addIfCondition方法，生成vnode的时候会忽略对应节点，render的时候就不会渲染；
  + v-show会生成vnode，render的时候也会渲染成真实节点，只是在render过程中会在节点的属性中修改show属性值，也就是常说的display；
  + v-html会先移除节点下的所有节点，调用html方法，通过addProp添加innerHTML属性，归根结底还是设置innerHTML为v-html的值
+ Vue 中的 computed 和 watch 的区别在哪里
  + watch 会生成一个watcher对象，在监视的属性每次变动时都会触发回调
  + computed则是生成一个惰性的watcher，只有在取值操作(getter触发)时收集依赖且计算值，当有依赖变动时仅将 dirty 置为 true，不做计算操作，当有取值操作时，根据自身标记 dirty 属性返回上一次计算结果/重新计算值
+ computed 的实现原理
