<template>
<i :class="'u-icon-'+name"
></i>
</template>

<script>
export default {
  name: 'UIcon',
  props:{
    name: String
  },
  size: {
    type: String,
    default: 'small'
  },
  spin: {
    type: Boolean,
    default: false
  },
  color: {
    type: String
  },
  methods:{

  }
};
</script>
<style lang="scss">
@import '../styles/fonticon.scss';
</style>


