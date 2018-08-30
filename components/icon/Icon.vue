<template>
<i :class="'icon u-icon-'+name"></i>
</template>

<script>
export default {
  name: 'UIcon',
  prop:{
    name: String
  }
};
</script>
<style lang="scss" scoped>
.icon{
  font-family: mdl2
}
</style>

