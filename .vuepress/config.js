module.exports = {
  dest: 'dist',
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
    sidebar: genSidebarConfig('技术文档'),
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'docs'
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    '/',
    {
      title: 'node学习',
      children: [
        '/node_basic/',
        '/node_basic/readline',
        '/node_basic/child_process',
        '/node_basic/event',
        '/node_basic/stream',
        '/node_basic/net',
        '/node_basic/udp',
        '/node_basic/http',
      ]
    },
    {
      title: 'Vue 源码学习',
      children: [
        '/vue_source/structure',
        '/vue_source/start',
        '/vue_source/options',
        '/vue_source/init_data',
        '/vue_source/events',
        '/vue_source/compile_el',
        '/vue_source/_compile_root',
        '/vue_source/_compile_rest',
        '/vue_source/directive_base',
        '/vue_source/watch_observer',
        '/vue_source/batcher',
        '/vue_source/calculate',
        '/vue_source/hook',
        '/vue_source/transition',
        '/vue_source/dom',
        '/vue_source/fragmentFactory',
        '/vue_source/directive_every',
        '/vue_source/parse',
      ]
    },
    {
      title: '前端常见问题',
      children: [
        '/javascript_question/regexp',
        '/javascript_question/http',
        '/javascript_question/event',
        '/javascript_question/others',
        '/bite',
      ]
    },
  ]
}
