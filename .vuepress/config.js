const LeetCode = require('./path/LeetCode');
const http = require('./path/basic_http');
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
    sidebar: 'auto',
    searchMaxSuggestions: 10,
    search: true
    // genSidebarConfig('技术文档'),
    // nav: [
    //   {text: 'Home', link: '/'}
    // ]
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
        '/node_basic/process',
        '/node_basic/child_process',
        '/node_basic/event',
        '/node_basic/stream',
        '/node_basic/net',
        '/node_basic/udp',
        '/node_basic/http'
      ]
    },
    {
      title: '算法',
      collapsable: true,
      children: [
        'LeetCode/offer_linkNode',
        'LeetCode/simple_listNode',
        'LeetCode/middle_listNode',
        'LeetCode/offer_array',
        'LeetCode/array_string',
        'LeetCode/array_rank',
        'LeetCode/offer_string',
        'LeetCode/array_plus',
        'LeetCode/string_simple',
        'LeetCode/string_middle',
        'LeetCode/string_hard',
        'LeetCode/common_sort_c++',
        'LeetCode/common_sort_js',
        'LeetCode/callStack',
        'LeetCode/string_search_str'
      ]
    },
    {
      title: '网络',
      collapsable: true,
      children: [
        'basic/http/cache_question',
        'basic/http/enter_url',
        'basic/http/http_ajax',
        'basic/http/http_code',
        'basic/http/http_field&cache',
        'basic/http/http_login_status',
        'basic/http/http_login_status',
        'basic/http/security',
        'basic/http/SSO',
        'basic/http/axios'
      ]
    },
    {
      title: 'ES6学习',
      children: [
        'es6/set&map',
        'es6/generator',
        'es6/promise',
        'es6/async'
      ]
    },
    {
      title: 'Vue源码学习',
      collapsable: false,
      children: [
        '/vue_resource/structure',
        '/vue_resource/start',
        '/vue_resource/options',
        '/vue_resource/init_data',
        '/vue_resource/events',
        '/vue_resource/compile_el',
        '/vue_resource/_compile_root',
        '/vue_resource/_compile_rest',
        '/vue_resource/directive_base',
        '/vue_resource/watch_observer',
        '/vue_resource/batcher',
        '/vue_resource/calculate',
        '/vue_resource/hook',
        '/vue_resource/transition',
        '/vue_resource/dom',
        '/vue_resource/fragmentFactory',
        '/vue_resource/directive_every',
        '/vue_resource/parse'
      ]
    },
  ]
}
