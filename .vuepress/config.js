module.exports = {
  title: '站点维护',
  description: '公司内站点维护、注意事项等',
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
    repo: 'webcoding/link',
    // 当你的文档不是仓库的根目录时需要设置
    docsDir: 'docs',
    // 可选的, 默认是  master
    docsBranch: 'vuepress',
    // 默认是 true, 设置为 false 来禁用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
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
      title: '小程序',
      collapsable: false,
      children: [
        '/mini/',
        '/mini/rule',
        '/mini/wxapp',
        '/mini/aliapp',
      ]
    },
    {
      title: '专题模板',
      collapsable: false,
      children: [
        '/zt/',
        '/zt/share',
        '/zt/design',
        // '/zt/data',
        '/zt/rules',
      ]
    },
    'hsq',
    'iqg',
    'mob',
    'stats',
    'www',
  ]
}
