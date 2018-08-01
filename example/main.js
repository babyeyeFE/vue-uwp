import Vue from 'vue'
import App from './App.vue'
import VueUwp from '../components'

Vue.config.productionTip = false

Vue.use(VueUwp)

// import { Button } from '../components'

new Vue({
  render: h => h(App)
}).$mount('#app')
