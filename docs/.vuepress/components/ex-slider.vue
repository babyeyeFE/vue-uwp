<template>
  <div class="ex-slider">
    <vup-slider v-model="val" :min="20" :max="50" :step="1" />
    <vup-slider disabled v-model="val2" />
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
