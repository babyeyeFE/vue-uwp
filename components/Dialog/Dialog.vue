<template>
  <transition name="fade">
    <div class="dialog-shadow" v-if="visible" @click="handleClose">
      <div v-show="visible" class="dialog-content" @click="stopPropagation">
        <div class="dialog-inner">
          <slot>
            <h5 class="dialog-title">{{title}}</h5>
            <p class="dialog-message">{{message}}</p>
          </slot>
        </div>
        <div class="dialog-footer">
          <slot name="footer">
            <u-button v-if="confirmButton" size="medium-flex-full" @click="handleConfirm">{{confirmText || 'Confirm'}}</u-button>
            <u-button v-if="closeButton" size="medium-flex-full" @click="handleClose">{{closeText || 'Close'}}</u-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'UDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    confirmButton: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: ''
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String,
      default: ''
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    message: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
      this.onClose()
    },
    handleConfirm() {
      this.$emit('update:visible', false)
      this.onConfirm()
    },
    stopPropagation(e) {
      e.stopPropagation()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-active .dialog-content, .fade-leave-active .dialog-content {
  transition: transform .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter .dialog-content, .fade-leave-to .dialog-content {
  transform: scale(0,0)
}
.dialog-shadow {
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
}
.dialog-content {
  width: 80%;
  max-width: 720px;
  border: 1px solid rgba(255,255,255,0.4);
  min-height: 220px;
  max-height: 640px;
  transition: all 1s;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.dialog-inner,
.dialog-footer {
  padding: 15px;
}
.dialog-footer {
  display: flex;
}
.dialog-content:hover {
  border-color: $themeColorBlue;
}
.dialog-title {
  margin: 0;
  font-size: 18px;
  font-weight: normal;
}
.dialog-message {
  margin: 0;
}
</style>
