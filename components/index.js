import Button from './Button'
// import MessageBox from './messageBox'
// import Dialog from './dialog'

const components = [
  Button,
//   MessageBox,
//   Dialog
]

const install = (Vue = {}) => {
  components.map(component => Vue.component(component.name, component))

//   Vue.prototype.$alert = MessageBox.alert // eslint-disable-line no-param-reassign
}

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button,
//   MessageBox,
//   Dialog
}
