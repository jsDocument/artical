# vue目录结构导读

* compiler 编译部分实现
* directives 内部实现的指令
* filters  过滤器
* fragment 每个指令里单独编译时使用一个工厂进行编译时用到
* instance
  * api
    * global
    * data $get, $set表达式的的值; $delete 删除this.\_data的一个属性; $watch对一个表达式订阅监听; $eval获取表达式的值\[如果有filters, 再进行过滤\]; $interpolate 解析一个插值并对其进行求解表达式的值--&gt;$eval; $log 去除其getter与setter
    * dom $nextTick加入执行队列; $appendTo
  * internal
    * \_init 初始化一系列实例属性及整个流程控制
    * events 初始化系统事件
    * lifecycle 编译开始、创建指令、销毁
    * state 初始化数据、props、computed、method等相关
    * misc 执行filters
  * Vue.js 初始化Vue构造函数与其内部方法及API, 调用Vue构造函数即其\_init
* observer 监听
  * dep 管理订阅者
  * array 提供一些公共方法
  * index Observer类与方法
* parsers  解析
* transition  Transition的实现, 提供给transition指令
* util  公共方法
* batcher.js  watcher 更新队列
* cache.js  缓存
* config.js  配置
* directive.js  指令
* watcher.js  订阅者
* index.js 这是我开始学习的起始位置, 导出Vue构造方法, 开发环境触发init事件。


![流程 text](./vue.png "title")
