import { Component, CreateElement, Props } from 'vue-component-decorator'
import { vueuwp } from '@/vue-uwp'
import { Badge } from './Badge'
import { Icon } from './Icon'
import { Tooltip } from './Tooltip'
import utils from '../utils'
import './Button.scss'

@Component
export class Button extends vueuwp {
  @Props()
  public readonly props: {
    id?: string // 組件ID 可空 默認值：空字符串
    className?: string // 附加樣式 可空 默認值：空字符串
    type?: string // 按鈕類型 可空 默認值：Default 可選值：Default | Primary | Secondary | Success | Danger | Warning | Info | Link
    size?: string // 按鈕尺寸 可空 默認值：Default 可選值：Default | Small | Large | Huge
    text?: string // 按鈕文本 可空 默認值：空字符串
    icon?: string // 按鈕圖標 可空 默認值：空字符串
    align?: string // 圖標對齊 可空 默認值：Default 可選值：Default | Top | Right | Bottom | Left | Center
    title?: string // 提示文本 可空 默認值：空字符串
    width?: string // 按鈕寬度 可空 默認值：空字符串
    block?: boolean // 100%寬度 可空 默認值：FALSE
    radius?: boolean // 圓角邊框 可空 默認值：FALSE
    circle?: boolean // 圓形按鈕 可空 默認值：FALSE
    outline?: boolean // 邊框樣式 可空 默認值：FALSE
    active?: boolean // 激活按钮 可空 默認值：FALSE
    disabled?: boolean // 禁用按钮 可空 默認值：FALSE
    responsive?: boolean // 響應模式 可空 默認值：FALSE
    background?: string // 背景圖片 可空 默認值：空字符串
    badge?: string | number // 按鈕徽章 可空 默認值：空字符串
    tooltip?: { text?: string; placement?: string } // 提示文本 可空 默認值：空值
    eventClick?: any // 單擊事件 可空 默認值：空值
  } = {
    id: null,
    className: null,
    type: 'Default',
    size: 'Default',
    text: null,
    icon: null,
    align: 'Default',
    title: null,
    width: null,
    block: false,
    radius: false,
    circle: false,
    outline: false,
    active: false,
    disabled: false,
    responsive: false,
    background: null,
    badge: null,
    tooltip: null,
    eventClick: null
  }

  public eventPreClick(event: Event) {
    if (
      utils.empty(this.$props.disabled) &&
      typeof this.$props.eventClick === 'function'
    ) {
      this.$props.eventClick(event)
    }
  }

  public render(h: CreateElement): any {
    let innerComponents = [this.$props.text]

    if (utils.nonempty(this.$props.icon)) {
      let iconComponent = (
        <Icon name={this.$props.icon} size="Small" circle={true} />
      )
      let textComponent = this.$props.text

      innerComponents =
        this.$props.align === 'Bottom' || this.$props.align === 'Right'
          ? [null, textComponent, iconComponent, null]
          : [null, iconComponent, textComponent, null]
    }

    if (utils.nonempty(this.$props.badge)) {
      let align = 'Top'

      if (
        utils.nonempty(this.$props.block) &&
        ['Top', 'Right', 'Bottom'].indexOf(this.$props.align) === -1
      ) {
        align = 'Center'
      }

      innerComponents[this.$props.align === 'Top' ? 0 : 3] = (
        <Badge text={this.$props.badge} align={align} />
      )
    }

    return (
      <Tooltip
        text={utils.dict(this.$props.tooltip).text}
        placement={utils.dict(this.$props.tooltip).placement}
      >
        <a
          id={this.$props.id}
          onClick={this.eventPreClick}
          style={{
            width: this.$props.width,
            backgroundImage: utils.cssBackgroundImage(this.$props.background)
          }}
          class={vueuwp.cls([
            'pure-button',
            vueuwp.themePrefix + 'button',
            [
              'Primary',
              'Secondary',
              'Success',
              'Danger',
              'Warning',
              'Info',
              'Link'
            ].indexOf(this.$props.type) !== -1
              ? vueuwp.themePrefix +
                'button-' +
                utils.str(this.$props.type).toLowerCase()
              : vueuwp.themePrefix + 'button-default',
            ['Small', 'Large', 'Huge'].indexOf(this.$props.size) !== -1
              ? vueuwp.themePrefix +
                'button-' +
                utils.str(this.$props.size).toLowerCase()
              : '',
            utils.nonempty(this.$props.icon)
              ? vueuwp.themePrefix + 'button-icon'
              : '',
            utils.nonempty(this.$props.icon) && utils.empty(this.$props.text)
              ? vueuwp.themePrefix + 'button-icon-only'
              : '',
            ['Left', 'Top', 'Right', 'Bottom', 'Center'].indexOf(
              this.$props.align
            ) !== -1 && utils.nonempty(this.$props.text)
              ? vueuwp.themePrefix +
                'button-' +
                utils.str(this.$props.align).toLowerCase()
              : '',
            utils.nonempty(this.$props.block)
              ? vueuwp.themePrefix + 'button-block'
              : '',
            utils.nonempty(this.$props.radius) &&
            utils.empty(this.$props.circle)
              ? vueuwp.themePrefix + 'button-radius'
              : '',
            utils.nonempty(this.$props.circle) &&
            utils.empty(this.$props.radius)
              ? vueuwp.themePrefix + 'button-circle'
              : '',
            utils.nonempty(this.$props.outline)
              ? vueuwp.themePrefix + 'button-outline'
              : '',
            utils.nonempty(this.$props.active) &&
            utils.empty(this.$props.disabled)
              ? vueuwp.themePrefix + 'button-active'
              : '',
            utils.nonempty(this.$props.disabled) &&
            utils.empty(this.$props.active)
              ? vueuwp.themePrefix + 'button-disabled'
              : '',
            utils.nonempty(this.$props.background)
              ? vueuwp.themePrefix + 'button-background'
              : '',
            utils.nonempty(this.$props.responsive)
              ? vueuwp.themePrefix + 'button-responsive'
              : '',
            this.$props.className
          ])}
        >
          {innerComponents}
        </a>
      </Tooltip>
    )
  }
}

@Component
export class ButtonGroup extends vueuwp {
  @Props()
  public readonly props: {
    id?: string
    className?: string
  } = { id: null, className: null }

  public render(h: CreateElement): any {
    return (
      <div
        id={this.$props.id}
        class={vueuwp.cls([
          vueuwp.themePrefix + 'button-group',
          this.$props.className
        ])}
      >
        {this.innerComponents()}
      </div>
    )
  }
}
