// import VueUwp from './VueUwp'

import Button from './Button'
import Switch from './Switch'
import Slider from './Slider'
import TextBox from './TextBox'


const components = [
  Button,
  Switch,
  Slider,
  TextBox
]

const install = (Vue = {}) => {
  components.map(component => Vue.component(component.name, component))
}

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Button,
  Switch,
  Slider,
  TextBox
}
