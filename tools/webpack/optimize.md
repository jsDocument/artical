### webpack 对资源的优化，以达到对页面性能的优化

对文件的模块大小进行分析：webpack-plugin-analizyer，再结合静态加载体积、个数，加载速度，加载的合理规划，配合合理的缓存策略

1. 静态资源体积与个数：代码文件合理的合并
   + js 的代码 Tree Shaking：基于 ES6 模块的静态分析，移除的用不到的函数，从而减少体积，也可以对 JSON 进行优化
   + js 代码压缩 optimize->minimizer->[new terserPlugin({include: /\.min.js/})]
     + 去掉多余的空格、换行、注释
     + 变量名、函数名、属性名用更短的名字代替
     + 布尔运算会做变化----做了精简
     + 预编译的运算
   + css 的代码 Tree Shaking---purgecss-webpack-plugin
   + CSS 压缩 optimizeCSSAssetsPlugin, cssProcessor: cssnano
   + HTML 压缩
   + 合理的代码分包---split-Chunks, external, dll
   + 请求的 gzip压缩，br 压缩
   + 图片格式优化：webp, svg, base64
   + 图片裁剪---picture media

2. 加载的合理规划：

   + 路由懒加载
   + 懒加载：图片懒加载

3. 加载速度：

   + HTTP 缓存
   + CDN 加速
   + DNS 预解析
   + HTTP2 收敛域名
   + HTTP1.1 keep+alive 使用资源域名
   + 预加载 preload、预解析 prerender、prefetch
      + 详细参见下文 [关于 link 类型](#关于-link-类型)
   + 提高服务器带宽

4. 感官优化

   + 骨架屏
   + loading
   + 转场动画

5. 代码性能优化

   + js代码优化----多次 DOM 操作合并
   + css 代码优化----减少层级、减少重排、重绘---图片设置width, height，不使用 import
   + 减少 DOM 的深度
   + 不使用阻塞渲染的 Script
   + 接口优化
   + 提升容器的启动速度
      + 离线包方案

6. 接口方面优化
7. 渲染速度---ssr
8. 一般如何进行分包？分包原则？
   1. 一般文件体积大小不超过 20kb，按需加载页面的 chunk，文件加载并行数一般不超过 30，初始化加载页面并发请求数个数要求为30; 依据上面的情况配置提取模块方案
   2. webpack-runtime
   3. react库
   4. vender组件
   5. echarts
   6. page业务代码
   7. 用的的配置：
      1. splitChunk
      2. runtimeChunk


#### 优化构建过程与构建速度

1. 使用 speed-measure-webpack-plugin (opens new window)可评估每个 loader/plugin 的执行耗时。
2. 友好错误提示：friendly-errors-webpack-plugin
3. Swc-loader： swc(采用 rust 语言编写)-----负责 AST 转换的
4. noParse 配置不需要解析第三方依赖
5. 加快 webpack 打包速度：
   + thread-loader 开启多线程
   + 持久化缓存----cache:{type: filesystem}，将Module、Chunk、ModuleChunk 等信息序列化到磁盘中
   + 开启本地缓存babel-loader，hardSourceWebpackPlugin
   + DLLPlugin 提前打包、分包
   + external 配合 CDN 域名：html-webpack-extenals-plugin 不打入 bundle


+ 本地环境：cross-env
  + 需要更快的构建速度
  + 需要打印 debug 信息
  + 需要 live reload 或 hot reload 功能
  + 需要 sourcemap 方便定位问题

+ 生产环境：
  + 需要更小的包体积，代码压缩+tree-shaking
  + 需要进行代码分割
  + 需要压缩图片体积

#### 部分webpack配置

```javascript
module: {
  rules: [
    // ...
    {
      test: /\.(jpe?g|png|gif)$/i,
      type: 'asset',
      generator: {
        // 输出文件位置以及文件名
        // [ext] 自带 "." 这个与 url-loader 配置不同
        filename: "[name][hash:8][ext]"
      },
      parser: {
        dataUrlCondition: {
          maxSize: 50 * 1024 //超过50kb不转 base64
        }
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      type: 'asset',
      generator: {
        // 输出文件位置以及文件名
        filename: "[name][hash:8][ext]"
      },
      parser: {
        dataUrlCondition: {
          maxSize: 10 * 1024 // 超过100kb不转 base64
        }
      }
    },
    {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 启用缓存
              presets: [
                '@babel/preset-env'
              ],
            }
          }
        ]
      },
  ]
}
// ./babelrc.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // useBuiltIns: false 默认值，无视浏览器兼容配置，引入所有 polyfill
        // useBuiltIns: entry 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
        // useBuiltIns: usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
        module: false, // 开启 tree-shaking
        useBuiltIns: "entry",
        corejs: "3.9.1", // 是 core-js 版本号
        targets: {
          chrome: "58",
          ie: "11",
        },
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ]
};

optimization: {
  splitChunks: {
    cacheGroups: //配置提取模块方案
    chunks: 'async', // 有效值为 `all`，`async` 和 `initial`
    minSize: 20000, // 生成 chunk 的最小体积（≈ 20kb)
    minRemainingSize: 0, // 确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块
    minChunks: 1, // 拆分前必须共享模块的最小 chunks 数。
    maxAsyncRequests: 30, // 最大的按需(异步)加载次数
    maxInitialRequests: 30, // 打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件）
    enforceSizeThreshold: 50000,
    cacheGroups: { // 配置提取模块的方案
      defaultVendors: {
        test: /[\/]node_modules[\/]/,
        priority: -10,
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
},
```

