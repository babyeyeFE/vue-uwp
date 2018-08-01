import Vue from 'vue'
import utils from './utils'

import Button from './Button'

const components = [
  Button,
]

export class vueUwp extends Vue {
  constructor() { }

  themePrefix = 'vup-'

  cls(items, cls = '') {
    for (let i = 0; i < items.length; i++) {
      cls +=
        utils.nonempty(cls) && utils.nonempty(items[i])
          ? ` ${items[i]}`
          : items[i] || ''
    }
    return cls
  }

  isMobile() {
    return window.document.body.clientWidth < 768
  }
}
