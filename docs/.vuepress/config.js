const path = require('path')
// const siderbarComponents = './sidebar.conf.json'.en
// import siderbarComponents from './sidebar.conf.json'
console.log(require('./sidebar.conf.json').en)
import 

module.exports = {
  title: 'Vue UWP',
  description: "Vue Components that Implement Microsoft's UWP Design.",
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  dest: 'docs/dist',
  base: '/vue-uwp/',
  // evergreen: true,

  themeConfig: {
    logo: './logo.png',
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
          "/components/button",
          "/components/switch",
          "/components/slider",
          "/components/textBox",
          "/components/dialog",
          "/components/auto-suggest-box",
          "/components/icon"
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
