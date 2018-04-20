module.exports = {
  title: '技术文档',
  description: '偏重前端与node的技术文档',
  serviceWorker: true,
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
  },
  // base: '/',
  themeConfig: {
    sidebarDepth: 0,
    sidebar: genSidebarConfig('hsq'),
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'jsDocument/artical',
    // 当你的文档不是仓库的根目录时需要设置
    docsDir: 'docs',
    // 可选的, 默认是  master
    docsBranch: 'vuepress',
    // 默认是 true, 设置为 false 来禁用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '技术文档, 如果存在内容有误的情况, 请多多提出, 将在后面更正, 谢谢关注'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'docs'
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    '/',
    {
      title: 'vue',
      collapsable: false,
      children: [
        '/mini/',
        '/mini/rule',
        '/mini/wxapp',
        '/mini/aliapp',
      ]
    },
    {
      title: 'javascript',
      collapsable: false,
      children: [
        '/zt/',
        '/zt/share',
        '/zt/design',
        // '/zt/data',
        '/zt/rules',
      ]
    },
    {
      title: 'node',
      collapsable: false,
      children: [
        '/zt/',
        '/zt/share',
        '/zt/design',
        // '/zt/data',
        '/zt/rules',
      ]
    }
  ]
}
