const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  // baseUrl: '/',

  // where to output built files
  // outputDir: 'dist',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('components'))
      .set('styles', resolve('components/styles'))
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      config.entry = {
        'vue-uwp': './components/index.js'
      }
      config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'vue-uwp',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
    } else {
      // mutate for development...
      config.entry = './example/main.js'
    }
  },

  // vue-loader options
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},

  // generate sourceMap for production build?
  productionSourceMap: undefined,

  // CSS related options
  css: {
    loaderOptions: {},
    modules: true
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: undefined,

  // split vendors using autoDLLPlugin?
  // can also be an explicit Array of dependencies to include in the DLL chunk.
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: (app) => {}
  },

  // options for 3rd party plugins
  pluginOptions: {
    // ...
  },

  assetsDir: undefined,
  runtimeCompiler: undefined
}
  
