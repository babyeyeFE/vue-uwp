<template>
<span :class="`container${disabled ? ' disabled' : ''}`">
  <input
    :value="value"
    :max="max"
    :min="min"
    :step="step"
    :disabled="disabled"
    type="range"
    @input="handleInput"
    class="vup-slider"
  />
  <span class="color-bar">
    <span class="inner-bar" :style="`width: ${left}`"></span>
  </span>
</span>
</template>
<script>
export default {
  name: 'VupSlider',
  props: {
    value: {
      type: String,
      default: "0"
    },
    max: {
      type: String,
      default: "1"
    },
    min: {
      type: String,
      default: "0"
    },
    step: {
      type: String,
      default: "0.1"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value.toString())
    }
  },
  computed: {
    left() {
      const { max, min, value } = this
      return `${(value - min) / (max - min) * 100}%`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';
.container {
  position: relative;
}
.vup-slider {
  -webkit-appearance: none;
  border-radius: 10px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0;
}
.vup-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: $themeColorBlue;
  height: 20px;
  width: 8px;
  border-radius: 10px;
  z-index: 2;
  position: relative;
}
.vup-slider::-webkit-slider-thumb:active,
.vup-slider::-webkit-slider-thumb:hover {
  background-color: #fff;
}
.vup-slider:focus {
  outline: none;
}
.color-bar {
  position: absolute;
  height: 2px;
  width: calc(100% - 8px);
  top: 70%;
  left: 0;
}
.inner-bar {
  background-color: $themeColorBlue;
  height: 2px;
  position: absolute;
  top: calc(70% - 1px);
  opacity: 0.6;
}
.disabled .vup-slider::-webkit-slider-thumb {
  background-color: #aaa;
}
.disabled .inner-bar {
  background: none;
}
</style>
