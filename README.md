# [vue-uwp](https://github.com/babyeyeFE/vue-uwp.git)

<p style="text-align: center"><img src="docs/.vuepress/public/logo.png" alt="VueUwp" width="200" /></p>

[![License](https://img.shields.io/github/license/babyeyeFE/vue-uwp.svg)](https://www.npmjs.com/package/vue-uwp)
[![Version](https://img.shields.io/npm/v/vue-uwp.svg)](https://www.npmjs.com/package/vue-uwp)
[![Downloads](https://img.shields.io/npm/dm/vue-uwp.svg)](https://www.npmjs.com/package/vue-uwp) 

[![Build Status](https://travis-ci.org/babyeyeFE/vue-uwp.svg?branch=master)](https://travis-ci.org/babyeyeFE/vue-uwp)


[Vue](https://vuejs.org) Components that Implement 
[Microsoft's UWP Design](https://developer.microsoft.com/en-us/windows/apps/design) 
[Fluent Design](https://www.microsoft.com/design/fluent/). 
[react-uwp](https://www.react-uwp.com/) 

## Installation
Vue-UWP is available as an [npm package](https://www.npmjs.org/package/vue-uwp).

Use NPM to get Vue-UWP components and core styling. All you need is node.js and gulp.

``` bash
npm install --save vue-uwp
```

For more details visit [Get Started](./docs/get-started.md) guide.

## Contributing
Develop in dev branch and commit your PR.

``` bash
# node build/bin/new.js [component-name] [component-chinese-name]
# node build/bin/build-entry.js
yarn new [component-name] [component-chinese-name]

# And then ...
${chineseName} 已添加到 components.json!
已新增 ${chineseName} components/${componentname}/index.js!
已新增 ${chineseName} components/${componentname}/${ComponentName}.vue!
已加入 ${chineseName} 文档 ${componentname}.md
已加入 ${chineseName} 测试用例 ${componentname}.spec.js
已加入 ${chineseName} 侧边栏 sidebar => nav.config.json

```
* ~~For now you need manually config your component page to the docs, add your path to /docs/.vuepress/config.js

## License

Vue-UWP is [MIT licensed](https://www.npmjs.org/package/vue-uwp).

[vue]: https://vuejs.org
[fluent]: https://fluent.microsoft.com/
[fluent-uwp]: https://developer.microsoft.com/en-us/windows/apps/design
[uwp]: https://developer.microsoft.com/en-us/windows/apps
[contributing-file]: https://github.com/arturmiz/vuent/blob/master/.github/CONTRIBUTING.md
[changelog-file]: https://github.com/arturmiz/vuent/blob/master/CHANGELOG.md
