<template>
  <div class="switch-continner">
    <input class="switch-box" type="checkbox"  @input="handleInput" ref="input">
    <div :class="{
      switch: true,
      selected: value,
      disabled: disabled
    }" @click="handleClick"></div>
  </div>
</template>
<script>
export default {
  name: 'VupSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', !this.value)
    },
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.$refs.input.click()
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../styles/variable.scss';
  .switch-continner {
    position: relative;
    width: 50px;
    height: 20px;
    display: inline-block;
    font-size: 0;
    vertical-align: middle;
    top: -4px;
    opacity: 0.8;
  }
  .switch-box {
    display: none;
  }
  .switch {
    left: 0;
    width: 40px;
    height: 15px;
    border: 2px solid #fff;
    border-radius: 15px;
    padding: 2px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    transition: all 0.3s;
  }
  .switch::before {
    content: '';
    position: relative;
    width: 15px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    transition: all 0.3s;
  }
  .switch.selected::before{
    transform: translateX(24px);
  }
  .switch.selected {
    background-color: $themeColorBlue;
    border-color: $themeColorBlue;
  }
  .switch.disabled {
    background-color: #aaa;
    border-color: #aaa;
    cursor: not-allowed;
  }
  .switch.disabled::before{
    background-color: #eee;
  }
</style>
