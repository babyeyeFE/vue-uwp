const path = require('path')

module.exports = {
  title: "Vue UWP",
  description: "Vue Components that Implement Microsoft's UWP Design.",
  // dest: 'docs/dist',

  // evergreen: true,

  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    repo: 'babyeyeFE/vue-uwp',

    // sidebarDepth: 4,
    siderbar: [
      ['/', 'Introduction'],
      '/get-start',
      {
        title: 'Components',
        collapsible: false,
        children: [
          '/components/button'
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