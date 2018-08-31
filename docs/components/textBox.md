# TextBox

[[toc]]

## Basic and Disabled

<ex-textBox></ex-textBox>
```html
  <u-text-box placeholder="Please input" v-model="val" />
  <u-text-box disabled v-model="val2" />
```

## Configuration

### `value`
Default: `undefined`

The variable indicating the state of the text box.

### `disabled`
Default: `false`

Determines whether the button should be in disabled mode or not.

### `placeholder`
Default: `''`

The placeholder attribute provides hint information that describes the expected value of the input field.
