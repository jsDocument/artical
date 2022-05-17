module.exports = {
  dest: 'dist',
  title: '黑盒子·技术积累',
  description: '前端知识学习轨迹',
  smoothScroll: true,
  markdown: {
    lineNumbers: true
  },
  base: '/',
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
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
    [
      'vuepress-plugin-container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ],
    ['vuepress-plugin-flowchart'],
    ['vuepress-plugin-nprogress']
  ],
  themeConfig: {
    nextLinks: true,
    prevLinks: true,
    sidebar: genSidebarConfig('技术文档'),
    nav: [
      {text: 'jvascript 系列', items: [
        {text: 'jvascript 基础系列', link: '/basic/base/'},
        {text: 'es6 系列', link: '/basic/es6/'},
        {text: 'javascript 高阶专题系列', link: '/basic/promise/'},
        {text: 'http 系列知识', link: '/basic/http/'},
      ]},
      {text: 'leetCode系列', link: '/LeetCode/'},
      {text: '工具系列', link: '/tools/'},
      {text: 'node基础系列', link: '/node-program/'},
      {text: 'vue 系列', link: '/vue-resource/'},
      {text: 'react 系列', link: '/react/'},
    ]
  }
}

function genSidebarConfig (title) {
  return {
    '/basic/base/': [
      '/basic/base/base',
      '/basic/base/browser',
      '/basic/base/data-type',
      '/basic/base/type-transfer',
      '/basic/base/zone',
      '/basic/base/winter',
      '/basic/base/mouse-event',
      '/basic/base/module'
    ],
    '/basic/es6/': [
      '/basic/es6/set-map',
      '/basic/es6/generator',
      '/basic/es6/promise',
      '/basic/es6/async',
    ],
    '/basic/promise/': [
      {
        title: 'promise 系列',
        children: [
          '/basic/promise/promise-order',
          '/basic/promise/cancel.promise',
          '/basic/promise/asyncPool',
          '/basic/promise/asyncPool2',
          '/basic/promise/upload-file',
          '/basic/promise/self-promise',
        ]
      },
      {
        title: '其他',
        children: [
          '/basic/promise/regexp',
        ]
      }
    ],
    '/basic/http/': [
      '/basic/http/enter-url',
      '/basic/http/cache-question',
      '/basic/http/http2',
      '/basic/http/http-basic',
      '/basic/http/http-code',
      '/basic/http/http-ajax',
      '/basic/http/axios',
      '/basic/http/http-login-status',
      '/basic/http/security',
      '/basic/http/SSO',
    ],
    '/LeetCode/': [
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
          '/LeetCode/common-sort',
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
        title: '字符串系列',
        children: [
          '/LeetCode/string-simple',
          '/LeetCode/string-middle',
          '/LeetCode/string-hard',
          '/LeetCode/string-search-str',
        ]
      },
      '/LeetCode/array-dt',
      '/LeetCode/tree',
      '/LeetCode/callStack',
      '/LeetCode/array-trangle'
    ],
    '/tools/': [
      {
        title: 'webpack 篇',
        children: [
          '/tools/webpack/webpack-config',
          '/tools/webpack/optimize',
          '/tools/webpack/webpack-hot',
          '/tools/webpack/webpack-step',
          '/tools/webpack/define-plugin'
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
    '/vue-resource/': [
      '/vue-resource/structure',
      '/vue-resource/start',
      '/vue-resource/init',
      '/vue-resource/observe',
      // 'vue-resource/options',
      // 'vue-resource/init-data',
      // 'vue-resource/events',
      // 'vue-resource/compile-el',
      // 'vue-resource/_compile-root',
      // 'vue-resource/_compile-rest',
      // 'vue-resource/directive-base',
      // 'vue-resource/watch-observer',
      // 'vue-resource/batcher',
      // 'vue-resource/calculate',
      // 'vue-resource/hook',
      // 'vue-resource/transition',
      // 'vue-resource/dom',
      // 'vue-resource/fragmentFactory',
      // 'vue-resource/directive-every',
      // '/parse'
    ],
    '/react/': [
      '/react/structure',
      '/react/event'
    ],
    '/node-program/': [
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
