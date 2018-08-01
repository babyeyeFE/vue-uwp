export default class utils {
  str(document) {
    return String(document || '')
  }

  dict(document) {
    return Object(document || {})
  }

  list(document) {
    return document instanceof Array ? document : []
  }

  empty(document) {
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

  nonempty(document) {
    return utils.empty(document) === false
  }

  firstUppercase(str) {
    return utils.str(str).replace(/^[a-z]/i, char => char.toUpperCase())
  }

  forEach(document, fn, length) {
    let buffers = []

    for (let i = 0, items = utils.list(document); i < (length || items.length); i++) {
            buffers[i] = fn(items[i])
    }

    return buffers
}

  cssBackgroundImage(uri) {
    return utils.nonempty(uri) ? `url(${uri}` : null
  }

  vwidth(str, size) {
    for (const char of str.split('')) {
      size += char < 'A' || (char > 'Z' && char.charCodeAt(0) < 128) ? 0.6 : 1
    }

    return size
  }
}
