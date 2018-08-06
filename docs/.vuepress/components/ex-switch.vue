<template>
  <div class="ex-switch">
    <vup-switch v-model="val" /> Switch
    <vup-switch disabled v-model="val2" /> Disabled Switch
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



