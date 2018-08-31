<template>
  <div class="ex-switch">
    <u-switch v-model="val" /> Switch
    <u-switch disabled v-model="val2" /> Disabled Switch
  </div>
</template>

<script>
export default {
  name: 'ex-switch',
  data() {
    return {
      val: true,
      val2: false,
    }
  }
}
</script>



