# Slider

[[toc]]

## Basic and Disabled

<ex-slider></ex-slider>
```html
  <u-slider v-model="val" max="50" min="20" step="1" />
  <u-slider disabled v-model="val2" />
```

## Configuration

### `value`
Default: `"0"`

The variable indicating the state of the slider.

### `max`
Default: `"1"`

This attribute specifies the maximum value of the active duration. 

### `min`
Default: `"0"`

This attribute specifies the minimum value of the active duration.

### `step`
Default: `"0.1"`

The step attribute specifies the legal number interval of the input field.

### `disabled`
Default: `false`

Determines whether the button should be in disabled mode or not.
