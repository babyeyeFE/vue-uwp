<template>
  <div class="command-bar-root">
    <div class="command-bar-commands">
      <div @click="toggleContrlBar" v-show="conctrlBarVisible">
        <u-icon name="IncreaseIndentLegacy"></u-icon>
      </div>
      <span class="command-bar-commands" v-show="conctrlBarVisible">
        <div v-for="(obj, i) in commandList" :key="i" @click="obj.command">
          <u-icon :name="obj.icon"></u-icon>{{obj.name}}
        </div>
      </span>
      <div @click="toggleContrlBar" v-show="!conctrlBarVisible">
        <u-icon name="DecreaseIndentLegacy"></u-icon>
      </div>
    </div>
  </div>
</template>

<script>
import UIcon from '../icon/index.js'

export default {
  name: 'UCommandBar',
  components: {
    UIcon
  },
  data() {
    return {
      conctrlBarVisible: true
    }
  },
  props: {
    commandList: {
      default: [],
      type: Array
    }
    // conctrlBarVisible: {
    //   default: true,
    //   type: Boolean
    // }
  },
  methods: {
    toggleContrlBar() {
      this.conctrlBarVisible = !this.conctrlBarVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';

.command-bar-root {
  position: relative;
  display: flex;
  // padding: 0 0px 0 20px;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(23, 23, 23, 0.6);
  // background: rgba(255, 255, 255, 0.1);
  height: 48px;
  transition: all 0.125s ease-in-out;
}
.command-bar-commands {
  display: flex;
  align-items: flex-start;
  height: 100%;
  div {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    background: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 0 0 auto;
    height: 100%;
    padding: 0 10px;
    max-width: 120px;
    cursor: default;
    transition: all 0.25s;
    &:hover {
      background: rgb(0, 120, 215);
    }
    i {
      margin-right: 6px;
    }
  }
}
</style>