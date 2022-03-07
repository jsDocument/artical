
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
