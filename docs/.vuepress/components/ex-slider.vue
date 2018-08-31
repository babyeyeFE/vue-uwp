<template>
  <div class="ex-slider">
    <u-slider v-model="val" max="50" min="20" step="1" />
    <u-slider disabled v-model="val2" />
  </div>
</template>

<script>
export default {
  name: 'ex-slider',
  data() {
    return {
      val: 0.5,
      val2: 0.6,
    }
  }
}
</script>
