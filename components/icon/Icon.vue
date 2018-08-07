<template>
  <img v-if="a" :id="id" :src="name" :class="cls" :style="style" @click="eventClick" />
  <span v-else :id="id" :src="name" :class="cls" :style="style" @click="eventClick"></span>
</template>

<script>
import VueUwp from '../VueUwp'
export default {
  name: 'VupIcon',
  props: {

  }
}
</script>

