# Button

[[toc]]

## Basic

<ex-button />

```html
  <vup-button>wix</vup-button>
  <vup-button size="medium">medium</vup-button>
  <vup-button size="large">large</vup-button>
  <vup-button plain size="medium">plain</vup-button>
  <vup-button round size="medium">round</vup-button>
```

## Disabled

<vup-button disabled size="medium">wix</vup-button>

```html
<vup-button disabled>disabled</vup-button>
```

## Italic

<vup-button italic size="medium">italic</vup-button>

```html
<vup-button disabled>Button</vup-button>
```

## Configuration

### `click`
Default: `() => {}`

The action handler invoked once user clicks the button. Must be a JS function.

### `disabled`
Default: `false`

Determines whether the button should be in disabled mode or not.
