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
.#{$themePrefix}button:hover, .#{$themePrefix}button:focus {
  border-style: solid;
  border-color: #fd9c27;
  background-color: rgba(	253, 156, 39, 0.7);
  outline: none;
}
.#{$themePrefix}btn-size-small {
  min-width: 60px;
  height: 32px;
  font-size: 14px;
  border-radius: 3px;
  box-sizing: border-box;
}
.#{$themePrefix}btn-size-medium {
  min-width: 96px;
  height: 40px;
  font-size: 22px;
  border-radius: 5px;
  box-sizing: border-box;
}
.#{$themePrefix}btn-size-large {
  min-width: 196px;
  height: 68px;
  font-size: 44px;
  border-radius: 5px;
  box-sizing: border-box;
}
.#{$themePrefix}btn-plain {
  background-color: rgba(250, 224, 193, 0.2);
  color: #fd9c27;
  border: 2px solid #fd9c27;
}
.#{$themePrefix}btn-plain:hover, .#{$themePrefix}btn-plain:focus {
  background-color: #fd9c27;
  color: #fff;
}
.#{$themePrefix}btn-italic {
  transform: skewX(-10deg);
}
.#{$themePrefix}btn-round {
  border-radius: 35px;
}
.#{$themePrefix}btn-disabled, .#{$themePrefix}btn-disabled:hover, .#{$themePrefix}btn-disabled:focus {
  cursor: not-allowed;
  border-color: #e6ebf5;
  color: #b7bbc2;
  background-color: #f3f4f5;
  border-color: #e7e8eb;
}
</style>
