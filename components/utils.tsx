export default class utils {
  public static str(document?: any): string {
    return String(document || '')
  }

  public static dict(document?: any): any {
    return Object(document || {})
  }

  public static list(document?: any): any[] {
    return document instanceof Array ? document : []
  }

  public static empty(document: any): boolean {
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

  public static nonempty(document: any): boolean {
    return utils.empty(document) === false
  }

  public static firstUppercase(str: string): string {
    return utils.str(str).replace(/^[a-z]/i, char => char.toUpperCase())
  }

  public static forEach(
    document: any,
    fn: (e: any) => any,
    length: number = 0
  ): any[] {
    let buffers: any[] = []

    for (
      let i = 0, items = utils.list(document);
      i < (length || items.length);
      i++
    ) {
      buffers[i] = fn(items[i])
    }

    return buffers
  }

  public static cssBackgroundImage(uri: string): any {
    return utils.nonempty(uri) ? `url(${uri}` : null
  }

  public static vwidth(str: string, size: number = 0): number {
    for (let char of str.split('')) {
      size += char < 'A' || ('Z' < char && char.charCodeAt(0) < 128) ? 0.6 : 1
    }

    return size
  }
}
