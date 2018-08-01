<template>
  <button class="vup-button" :class="btnClass" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'VupButton',
  props: {
    size: {
      type: String,
      default: 'small'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    italic: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      return {
        'vup-btn-disabled': this.disabled,
        ['vup-btn-size-' + this.size]: true,
        'vup-btn-plain': this.plain,
        'vup-btn-round': this.round,
        'vup-btn-italic': this.italic
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
@import 'styles/variable.scss';

.#{$themePrefix}button {
  background-color: $themeColorOrange;
  box-sizing: border-box;
  color: $themeColorWhite;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  text-shadow: none;
  text-decoration: none;
  /* border: none; */
  border: 2px solid $themeColorOrange;
  font-family: $themeFontFamilySansserif;
  font-weight: 400;
  cursor: pointer;
  padding: 0 15px;
}
</style>
