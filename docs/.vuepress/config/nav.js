
module.exports = function genNavConfig(lang) {
  const t = require('../locales')(lang);
  return [
    {
      text: 'Node 学习',
      link: '/node_basic/',
    },
    {
      text: 'Vue 源码',
      link: '/vue_resource/',
    },
  ];
};
