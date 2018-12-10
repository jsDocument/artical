// 非热门 非常用 排序放在最后

module.exports = function genSidebarConfig(lang) {
  // const t = require('../locales')(lang);
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
        '/node_basic/http',
      ]
    },
    {
      title: 'Vue源码学习',
      children: [
        '/vue_resource/structure.md',
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
        '/vue_resource/parse',
      ]
    },
    {
      title: '前端常见问题',
      children: [
        '/javascript_question/regexp',
        '/javascript_question/http',
        '/javascript_question/event',
        '/javascript_question/others',
        '/javascript_question/promise',
        '/javascript_question/async&await',
        '/bite',
      ]
    },
    {
      title: '算法',
      children: [
        '/arithmetic/reg_match',
        '/arithmetic/search_str',
        '/算法/callStack',
        '/算法/sort'
      ]
    },
  ];
}
