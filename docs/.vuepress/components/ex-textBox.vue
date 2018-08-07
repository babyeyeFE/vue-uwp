<template>
  <div class="ex-textBox">
    <vup-text-box placeholder="Please input" v-model="val" />
    <vup-text-box disabled v-model="val2" />
  </div>
</template>

<script>
export default {
  name: 'ex-textBox',
  data() {
    return {
      val: undefined,
      val2: 'Hello world',
    }
  }
}
</script>



