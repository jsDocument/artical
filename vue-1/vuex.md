+ 插件是怎么注入vue实例的？
+ vue-router 的 beforeEach 和 vue组件生命周期钩子之间的执行顺序？
+ 组件注册方式：全局注册和局部注册
  + 全局注册，通过 Vue.component ，然后通过 Vue.extend 将组件配置转换为组件的构造函数，记录到 this.options.components.comp 里
（1）创建一个唯一值的cid ，目的是创建一个包裹着子构造函数通过原型继承并且能够缓存它们
（2）保存Vue构造函数，从缓存中加载组件的构造函数
（3）给 Sub 初始化一个 VueComponent 构造函数，内部调用 _init() 初始化
（4）Sub 原型继承自 Vue ，然后cid自增并记录到 Sub.cid ，合并 options
（5）初始化子组件的 props computed , 将 extend mixin use 等静态方法继承到 Sub
（6）把组件构造函数保存到 Ctor.options.components.comp = Ctor
（7）最后把组件的构造函数缓存到 options._Ctor ，返回 Sub
+ vuex 的实现原理：
  + 可以通过 Vue.use(Vuex) 注册，所以要实现一个对象 Vuex，这个对象包含一个 install 方法
  + install 方法用于保存 Vue 构造函数，并往 Vue 原型上注册 $store 属性，_Vue.prototype.$store = this.$options.store
  + 然后实现一个 Vuex.Store 类，包含 state getters mutations actions 等属性和方法
  + 实现 state 属性的关键是设置它为响应式数据，this.state = _Vue.observable(state)
  + 实现 getters 的关键是 遍历用户的 getters，为每一个 key 设置 Object.defineProperty 设置 get 方法
  + 然后分别定义 commit 和 dispatch 方法
+ 简述响应式原理：
  + 调用顺序 initState() --> initData() --> observe() 。observe() 就是响应式的入口函数。
  + observe(value)判断 value 是否为对象，如果不是直接返回；
    + 判断 value 对象是否有 __ob__ 属性，如果有直接返回；
    + 如果没有，创建 observer 对象；返回 observer 对象；
  + Observer 类
    + 给value 对象定义不可枚举的 __ob__ 属性，记录当前的 observer 对象；对象的响应式处理，调用 walk 方法，遍历对象的每个属性，调用 defineReactive ；
    + 数组覆盖原生的 push/splice/unshift 方法
  + defineReactive：为每一个属性创建 dep 对象
    + 如果当前属性的值是对象，再调用 observe ；
    + 定义 getter ，收集依赖，返回属性的值；
    + 定义 setter ，保存新值，如果新值是对象，调用 observe
    + 派发更新(发送通知)，调用 dep.notify() ;
  + 依赖收集：getter-->dep(subs)-->watcher实例, watcher.get 更新 Dep.target属性的发生时机？
  + Watcher：dep.notify 在调用 watcher 对象的 update() 方法时，调用 queueWatcher() ，判断 watcher 是否被处理，如果没有的话添加到 queue 队列中，并调用 flushSchedulerQueue() : 触发 beforeUpdate 钩子，调用 watcher.run() , run() --> get() --> getter() --> updateComponent ，清空上一次的依赖，触发 actived 钩子，触发 updated 钩子。
