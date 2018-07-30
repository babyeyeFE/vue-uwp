import { Vue, CreateElement, Props } from "vue-component-decorator"
import initBrowsers from "init-browsers"
import utils from "./utils"

export class vueuwp extends Vue {
  public static themePrefix: string = "vue-uwp-"
  public static useBadgeLimit: number = 99
  public static useSVGElement: boolean = true
  public static useTooltip: boolean = true
  public static useAutoLanguage: boolean = true

  @Props()
  public readonly props: { [name: string]: any }
  public render(h: CreateElement): any {}

  public innerComponents(): any[] {
    return (this.$options as any)._renderChildren || []
  }

  public redirect(uri: string, success?: any) {
    if (utils.str(uri).indexOf("http") === 0) {
      return (window.location.href = uri)
    }

    if (utils.nonempty(uri)) {
      return this.$router.push(uri, () => {
        if (typeof success === "function") {
          success()
        }
      })
    }
  }

  public static init(configures: any = {}) {
    initBrowsers(
      Object.assign(Object.assign({}, configures), {
        themePrefix: vueuwp.themePrefix,
        autoLanguage: vueuwp.useAutoLanguage
      })
    )
  }

  public static cls(items: string[], cls: string = ""): string {
    for (let i = 0; i < items.length; i++) {
      cls +=
        utils.nonempty(cls) && utils.nonempty(items[i])
          ? " " + items[i]
          : items[i] || ""
    }

    return cls
  }

  public static eventSafe(fn: any, ...args: any[]): Function {
    return (event: Event) => {
      if (typeof fn === "function") {
        fn(event, ...args)
      }
    }
  }

  public static isMobile(): boolean {
    return window.document.body.clientWidth < 768
  }
}
