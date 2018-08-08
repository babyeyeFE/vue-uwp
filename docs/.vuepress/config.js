const path = require('path')
// const siderbarComponents = './sidebar.conf.json'.en
// import siderbarComponents from './sidebar.conf.json'
console.log(require('./sidebar.conf.json').en)

module.exports = {
  title: 'Vue UWP',
  head: [['link', { rel: 'icon', href: '/vue-uwp/favicon.ico' }]],
  description: "Vue Components that Implement Microsoft's UWP Design.",
  dest: 'docs/dist',
  base: '/vue-uwp/',
  // evergreen: true,

  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    repo: 'babyeyeFE/vue-uwp',

    sidebarDepth: 4,
    sidebar: [
      ['/', 'Introduction'],
      '/get-started',
      {
        title: 'Components',
        collapsible: false,
        children: [
          '/components/button',
          '/components/switch',
          '/components/slider',
          '/components/textBox',
          '/components/dialog',
          '/components/dropdown'
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../../components')
      }
    }
  }
}
