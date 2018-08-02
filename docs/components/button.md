# Button

[[toc]]

## Basic

<vup-button>Button</vup-button>

```html
<vup-button>Button</vup-button>
```

or

```html
<vup-button label="Button"></vup-button>
```

## Disabled

<vup-button disabled>Button</vup-button>

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

### `label`
Default: `'Button'`

The button's text

### `type`
Default: `button`

Similar to standard HTML's `button`, could be one of `button`, `submit` or `reset`.
