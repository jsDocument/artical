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
    toc: { includeLevel: [1, 2]},
  },
  // base: '/',
  themeConfig: {
    sidebarDepth: 0,
    nextLinks: true,
    prevLinks: true,
    lastUpdated: true,
    sidebar: genSidebarConfig('技术文档'),
    searchMaxSuggestions: 10,
    search: true,
    nav: [
      {text: 'jvascript 基础系列', items: [
        {text: '常被问到的几个前端基础知识', link: '/basic/base/base'},
        {text: '浏览器基础知识', link: '/basic/base/browser'},
        {text: '你该知道的类型基础与对象知识', link: '/basic/base/data-type'},
        {text: '数据类型隐式转换规律', link: '/basic/base/type-transfer'},
        {text: '作用域、闭包、作用域提升、执行上下文、垃圾回收', link: '/basic/base/zone'},
        {text: 'winter重学前端部分总结', link: '/basic/base/winter'},
        {text: '鼠标事件基础', link: '/basic/base/mouse-event'},
        {text: '模块简介', link: '/basic/base/module'}
      ]},
      {text: 'leetCode系列', items: [
        {text: '剑指 Offer 06 18 22 25 II27', link: '/LeetCode/offer_listNode'},
        {text: '链表 141 160 203 206 234 237 876', link: '/LeetCode/simple_listNode'},
        {text: '链表 2 19 24 61 109 142 328 707', link: '/LeetCode/middle_listNode'},
        {text: '剑指 Offer 03 04 12', link: '/LeetCode/offer_array'},
        {text: '数组 722 929', link: '/LeetCode/array_string'},
        {text: '数组 46', link: '/LeetCode/array_rank'},
        {text: '剑指 Offer 53 58', link: '/LeetCode/offer_string'},
        {text: '找数组之和系列', link: '/LeetCode/array_plus'},
        {text: '字符串初级 13 14 20 58 67 819', link: '/LeetCode/string_simple'},
        {text: '字符串中级 3 6 8 71 151', link: '/LeetCode/string_middle'},
        {text: '字符串高级 10 44 65 1106', link: '/LeetCode/string_hard'},
        {text: '常用排序C++', link: '/LeetCode/common_sort_c++'},
        {text: '常用排序JS', link: '/LeetCode/common_sort_js'},
        {text: '尾调用优化讲解', link: '/LeetCode/callStack'},
        {text: '子串搜索系列', link: '/LeetCode/string_search_str'}
      ]},
      {text: 'http 基础系列', items: [
        {text: 'cache 问题', link: '/basic/http/cache_question'},
        {text: '输入 URL 后发生了什么', link: '/basic/http/enter_url'},
        {text: 'ajax 请求与跨域相关知识点', link: '/basic/http/http_ajax'},
        {text: 'http 常用状态码', link: '/basic/http/http_code'},
        {text: 'http header 字段与缓存知识', link: '/basic/http/http_field&cache'},
        {text: 'HTTP 的无状态解决方案', link: '/basic/http/http_login_status'},
        {text: 'HTTP 请求过程及分类', link: '/basic/http/http_login_status'},
        {text: '前端安全', link: '/basic/http/security'},
        {text: '单点登录', link: '/basic/http/SSO'},
        {text: 'axios相关知识', link: '/basic/http/axios'},
      ]},
      {text: 'javascript 专题系列', items:[
        {text: '正则篇', link: '/basic/javascript/regexp/readme'},
        {text: '前端 promise 篇', link: '/basic/javascript/promise/SUMMARY'},
        {text: '前端性能优化', link: '/basic/javascript/promotion/base'}
      ]},
      {text: 'es6 系列', items:[
        {text: 'set&map', link: '/es6/set&map'},
        {text: 'generator', link: '/es6/generator'},
        {text: 'promise', link: '/es6/promise'},
        {text: 'async', link: '/es6/async',}
      ]},
      {text: '工具系列', items: [
        {text: 'webpack 篇', link: '/tools/webpack/SUMMARY'},
        {text: 'git 篇', link: '/tools/git/config'}
      ]},
      {text: 'node 基础系列', items: [
        {text: 'readline', link: '/node_program/node_basic/readline'},
        {text: '进程相关', link: '/node_program/node_basic/child_process'},
        {text: '事件', link: '/node_program/node_basic/event'},
        {text: '流', link: '/node_program/node_basic/stream'},
        {text: 'net', link: '/node_program/node_basic/net'},
        {text: 'udp', link: '/node_program/node_basic/udp'},
        {text: 'http', link: '/node_program/node_basic/http'}
      ]},
    ]
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
    {
      title: 'Vue 系列',
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
    {
      title: 'React 系列',
      collapsable: false,
      children: [
        'react/structure',
        'react/event'
      ]
    }
  ]
}
