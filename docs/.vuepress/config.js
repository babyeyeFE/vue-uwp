const path = require('path')

module.exports = {
  title: "Vue UWP",
  description: "Vue Components that Implement Microsoft's UWP Design.",
  dest: 'docs/dist',

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
          '/components/textBox'
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