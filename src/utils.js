export default class utils {
  static str(document) {
    return String(document || '')
  }

  static dict(document) {
    return Object(document || {})
  }

  static list(document) {
    return document instanceof Array ? document : []
  }

  static empty(document) {
    if (document === null) {
      return true
    }

    switch (typeof document) {
      case 'undefined':
        return true

      case 'boolean':
        return document === false

      case 'number':
        return document === 0

      case 'string':
        return document.length === 0

      case 'function':
        return true
    }

    if (document instanceof Array) {
      return document.length === 0
    }

    return Object.keys(document).length === 0
  }

  static nonempty(document) {
    return utils.empty(document) === false
  }

  static firstUppercase(str) {
    return utils.str(str).replace(/^[a-z]/i, char => char.toUpperCase())
  }

  static forEach(document, fn, length) {
    let buffers = []

    for (let i = 0, items = utils.list(document); i < (length || items.length); i++) {
            buffers[i] = fn(items[i])
    }

    return buffers
}

  static cssBackgroundImage(uri) {
    return utils.nonempty(uri) ? `url(${uri}` : null
  }

  static vwidth(str, size) {
    for (const char of str.split('')) {
      size += char < 'A' || (char > 'Z' && char.charCodeAt(0) < 128) ? 0.6 : 1
    }

    return size
  }
}
