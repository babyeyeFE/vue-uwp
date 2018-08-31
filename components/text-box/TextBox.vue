<template>
  <input
    :class="`text-box${ disabled ? ' disabled' : ''}`"
    :value="value"
    :disabled="disabled"
    type="text"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: 'UTextBox',
  props: {
    value: {
      type: String || undefined,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value.toString())
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../styles/variable.scss';
  .text-box {
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid rgba(255,255,255,0.2);
    outline: none;
    padding: 2px 4px;
    color: #fff;
    transition: all 0.3s;
  }
  .text-box:hover {
    border-color: rgba(255,255,255,0.4)
  }
  .text-box:active,
  .text-box:focus {
    background-color: #fff;
    color: #000;
    border-color: $themeColorBlue;
  }
  .text-box.disabled {
    background: rgba(255,255,255,0.2);
  }
  .text-box.disabled:active,
  .text-box.disabled:focus {
    color: #aaa;
    border-color: rgba(255,255,255,0.2);
  }
</style>
