
## 基础

1. 安装 webpack, webpack-cli; webpack4 支持 0 配置打包
2. 运行 npx webpack
3. webpack 配置
   1. 基本：mode, entry, output, cache
   2. loader: webpack默认只支持 JS 与 JSON, module-->rules[{test, use, type: 'asset', noParse}]
      1. babel-loader----@babel/core, @babel/preset-env, @babel/preset-flow, @babel/preset-react, @babel/preset-typescript
         1. @babel/plugin-proposal-decorators
         2. @babel/plugin-proposal-class-properties
      2. cache-loader
      3. thread-loader
      4. postcss-loader
      5. sass-loader
      6. (file-loader 字体、图片引入的问题，copy 到指定目录)已内置
      7. (url-loader 图片小于 limit 时，转成 base64；大于 limit 时，依然使用 file-loader 进行拷贝)已内置，type:'javascript/auto'
      8. img-loader 图片压缩
   3. asset
      1. resource: 分割出来的单独文件，并导出 url
      2. inline: 资源导出为 dataUrl 的形式
      3. source: 资源导出为源码
      4.
   4. plugin: 贯穿 webpack 打包的生命周期，执行不同的任务
      1. html-webpack-plugin
      2. clean-webpack-plugin
      3. postcss-preset-env---postcss.config.js
      4. mini-css-extract-plugin 分离样式---filename
      5. optimize-css-assets-webpack-plugin 压缩
      6. purgecss-webpack-plugin 单独提取 css, 并清除用不到的
      7. webpack-bundle-analyzer
      8. ~~terser-webpack-plugin~~
      9. optimization.splitChunks
         1. cacheGroups 配置提取模块的方案
      10. prefetch, preload
   5. devServer
      1. static: 直接去对应静态目录读取文件，不需要移动到 dist，再读取
      2. compress
      3. port
      4. open: 自动打卡浏览器
   6. mode----eval-cheap-module-source-map
      1. inline dataUrl 形式引入 sourceMap
      2. eval ...形式执行代码，dataUrl...
      3. cheap 定位到行信息
      4. module 展示代码中的错误位置
   7. hash, chunkhash, contenthash
   8. resolve: alias,
      1. extensions: [...] 保留默认配置
   9. externals: 「从输出的 bundle 中排除依赖」

Scope Hoisting----减少体积

+ 如何优化？通过什么实现？
  + 分包---条件：体积大小 20kb，按需加载 chunk---并行数 30，初始化加载页面并发请求数----30; 配置提取模块方案
  + 压缩、缓存
  + 裁剪、格式
  + 预加载、按需加载
  + prefetch: 浏览器空闲时进行资源拉取
  + preload: 提前加载后面要用到的资源

+ 提高构建速度
  + noParse 不需要解析第三方依赖

```javascript
import( /* webpackPrefetch: true */ './desc').then(({ default: element }) => {
    console.log(element)
    document.body.appendChild(element)
  })

  import(/* webpackPreload: true */ 'ChartingLibrary');
```

+ 本地环境：cross-env
  + 需要更快的构建速度
  + 需要打印 debug 信息
  + 需要 live reload 或 hot reload 功能
  + 需要 sourcemap 方便定位问题

+ 生产环境：
  + 需要更小的包体积，代码压缩+tree-shaking
  + 需要进行代码分割
  + 需要压缩图片体积

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

## 进阶

## 深入
