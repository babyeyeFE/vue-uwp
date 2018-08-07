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
@import '../styles/variable.scss';

.#{$themePrefix}button {
  background-color: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  color: $themeColorWhite;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  text-shadow: none;
  text-decoration: none;
  /* border: none; */
  border: 2px solid rgba(255, 255, 255, 0);
  font-family: $themeFontFamilySansserif;
  font-weight: 400;
  cursor: pointer;
  vertical-align: middle;
  // border-radius: $themeBorderRadius;
}
.#{$themePrefix}button:hover {
  border-style: solid;
  border-color: rgba(255,255,255,0.4);
  // background-color: rgba(51, 151, 219, 0.7);
  outline: none;
}
.#{$themePrefix}button:focus {
  outline: none;
}
.#{$themePrefix}button:active {
  background-color: rgba(255, 255, 255, 0.4);
}
.#{$themePrefix}btn-size-small {
  font-size: 12px;
  box-sizing: border-box;
  padding: 2px 4px;
  margin: 4px;
}
.#{$themePrefix}btn-size-medium {
  font-size: 14px;
  box-sizing: border-box;
  padding: 4px 16px;
  margin: 4px;
}
.#{$themePrefix}btn-size-medium-flex-full {
  font-size: 14px;
  box-sizing: border-box;
  padding: 4px 16px;
  margin: 4px;
  flex-grow: 1;
}
.#{$themePrefix}btn-size-large {
  font-size: 32px;
  box-sizing: border-box;
  padding: 4px 16px;
  margin: 4px;
}
.#{$themePrefix}btn-italic {
  transform: skewX(-10deg);
}
.#{$themePrefix}btn-disabled, .#{$themePrefix}btn-disabled:hover, .#{$themePrefix}btn-disabled:focus {
  cursor: not-allowed;
  border-color: rgba(255,255,255,0);
  color: #fff;
  background-color: rgba(255,255,255,0.6);
}
</style>
