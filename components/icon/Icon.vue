<template>
<i :class="[
      'u-icon-'+name
    ]"
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
    type: Boolean
  },
  color: {
    type: String
  },
  data(){
    return{
      colorsss: 'red'
    }
  },
  computed:{
    iconColor(){
      switch(this.color){
        default: return 'red'
      }
    },
    spinning(){
      return spin? 'is-spin' : ''
    }
  },
  methods:{

  }
};
</script>
<style lang="scss">
@import '../styles/fonticon.scss';
</style>


