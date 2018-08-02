<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vup-button>wix</vup-button>
    <vup-button size="medium">wix</vup-button>
    <vup-button size="large">wix</vup-button>
    <vup-button plain size="medium">wix</vup-button>
    <vup-button round size="medium">wix</vup-button>
    <vup-button italic size="medium">wix</vup-button>
    <vup-button disabled size="medium">wix</vup-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>


<style lang="scss">
@import 'styles/index.scss';
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
</style>

