# Button

[[toc]]

## Basic

<ex-button />

```html
  <u-button>wix</u-button>
  <u-button size="medium">medium</u-button>
  <u-button size="large">large</u-button>
```

## Disabled

<u-button disabled size="medium">wix</u-button>

```html
<u-button disabled>disabled</u-button>
```

## Italic

<u-button italic size="medium">italic</u-button>

```html
<u-button disabled>Button</u-button>
```

## Configuration

### `click`
Default: `() => {}`

The action handler invoked once user clicks the button. Must be a JS function.

### `disabled`
Default: `false`

Determines whether the button should be in disabled mode or not.
