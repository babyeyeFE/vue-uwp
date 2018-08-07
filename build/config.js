const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')
const saladConfig = require('./salad.config.json')

let externals = {}

Object.keys(Components).forEach((key) => {
  externals[`vue-uwp/components/${key}`] = `vue-uwp/lib/${key}`
})

externals = [
  Object.assign(
    {
      vue: 'vue'
    },
    externals
  ),
  nodeExternals()
]

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'element-ui': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/

exports.postcss = function (webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  }
  return [require('postcss-salad')(saladConfig)]
}
