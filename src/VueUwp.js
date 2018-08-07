import Vue from 'vue'
import utils from './utils'

export class vueUwp extends Vue {
  constructor() { }

  static themePrefix = 'vup-'

  static cls(items, cls = '') {
    for (let i = 0; i < items.length; i++) {
      cls +=
        utils.nonempty(cls) && utils.nonempty(items[i])
          ? ` ${items[i]}`
          : items[i] || ''
    }
    return cls
  }

  static isMobile() {
    return window.document.body.clientWidth < 768
  }
}
