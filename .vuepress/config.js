module.exports = {
  dest: 'dist',
  title: '技术文档',
  description: '前端知识学习轨迹',
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2]},
  },
  base: '/',
  plugin: [
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // 这是 VuePress 默认主题使用这个插件的方式
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
    ['vuepress-plugin-nprogress']
  ],
  themeConfig: {
    sidebarDepth: 0,
    nextLinks: true,
    prevLinks: true,
    lastUpdated: true,
    sidebar: genSidebarConfig('技术文档'),
    searchMaxSuggestions: 10,
    search: true,
    nav: [
      {text: 'jvascript 系列', items: [
        {text: 'jvascript 基础系列', link: '/basic/base/base'},
        {text: 'es6 系列', link: '/basic/es6/set-map'},
        {text: 'javascript 高阶专题系列', link: '/basic/regexp'},
        {text: 'http 系列知识', link: '/basic/http/cache-question'},
      ]},
      // {text: 'css 兼容系列', link: '/css/'},
      {text: 'leetCode系列', link: '/LeetCode/array-dt'},
      {text: '工具系列', link: '/tools/webpack/webpack-config'},
      {text: 'node基础系列', link: '/node-program/node-basic/readline'}
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
  return {
    '/basic/base/base': [
      '/basic/base/base',
      '/basic/base/browser',
      '/basic/base/data-type',
      '/basic/base/type-transfer',
      '/basic/base/zone',
      '/basic/base/winter',
      '/basic/base/mouse-event',
      '/basic/base/module'
    ],
    '/basic/es6/set-map': [
      '/basic/es6/set-map',
      '/basic/es6/generator',
      '/basic/es6/promise',
      '/basic/es6/async',
    ],
    '/basic/regexp': [
      '/basic/regexp',
      '/basic/javascript/promise/SUMMARY',
      '/basic/promotion-user-sensitive'
    ],
    '/basic/http/cache-question': [
      '/basic/http/cache-question',
      '/basic/http/enter-url',
      '/basic/http/http-ajax',
      '/basic/http/http-code',
      '/basic/http/http-cache',
      '/basic/http/http-login-status',
      '/basic/http/security',
      '/basic/http/SSO',
      '/basic/http/axios',
      '/basic/http/http2',
    ],
    '/LeetCode/array-dt': [
      {
        title: 'leetCode系列',
        children: [
          {
            title: '链表系列',
            children: [
              '/LeetCode/offer-listNode',
              '/LeetCode/simple-listNode',
              '/LeetCode/middle-listNode',
            ]
          },
          {
            title: '数组系列',
            children: [
              '/LeetCode/offer-array',
              '/LeetCode/array-string',
              '/LeetCode/offer-string',
              '/LeetCode/array-plus',
            ]
          },
          {
            title: '排序相关',
            children: [
              '/LeetCode/common-sort-c++',
              '/LeetCode/common-sort-js',
            ]
          },
          {
            title: '回溯相关',
            children: [
              '/LeetCode/array-rotate',
              '/LeetCode/array-shudu',
            ]
          },
          {
            title: '动态规划',
            children: [
              '/LeetCode/array-dt',
            ]
          },
          {
            title: '字符串系列',
            children: [
              '/LeetCode/string-simple',
              '/LeetCode/string-middle',
              '/LeetCode/string-hard',
              '/LeetCode/string-search-str',
            ]
          },
          {
            title: '树系列',
            children: [
              '/LeetCode/tree',
            ]
          },
          '/LeetCode/callStack',
          '/LeetCode/array-trangle'
        ]
      }
    ],
    '/vue-resource/structure': [
      '/vue-resource/structure',
      '/vue-resource/start',
      'vue-resource/options',
      'vue-resource/init-data',
      'vue-resource/events',
      'vue-resource/compile-el',
      'vue-resource/_compile-root',
      'vue-resource/_compile-rest',
      'vue-resource/directive-base',
      'vue-resource/watch-observer',
      'vue-resource/batcher',
      'vue-resource/calculate',
      'vue-resource/hook',
      'vue-resource/transition',
      'vue-resource/dom',
      'vue-resource/fragmentFactory',
      'vue-resource/directive-every',
      '/parse'
    ],
    '/react/structure': [
      'structure',
      'event'
    ],
    '/tools/webpack/webpack-config': [
      {
        title: 'webpack 篇',
        children: [
          '/tools/webpack/webpack-config',
          '/tools/webpack/webpack-step',
          '/tools/webpack/webpack-hot',
          '/tools/webpack/optimize',
          '/tools/webpack/SUMMARY'
        ]
      },
      {
        title: 'git 篇',
        children: [
          '/tools/git/config',
          '/tools/git/staging',
          '/tools/git/branch-tag',
          '/tools/git/stash',
          '/tools/git/push'
        ]
      }
    ],
    '/node-program/node-basic/readline': [
      '/node-program/node-basic/readline',
      '/node-program/node-basic/child-process',
      '/node-program/node-basic/event',
      '/node-program/node-basic/stream',
      '/node-program/node-basic/net',
      '/node-program/node-basic/udp',
      '/node-program/node-basic/http'
    ]
  }
}
