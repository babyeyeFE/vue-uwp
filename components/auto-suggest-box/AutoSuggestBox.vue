<template>
  <div class="vup-auto-suggest-box">
    <input 
    :placeholder="placeholder"
    :value="iValue"
    :class="!this.ifsuggest? 'input':'inputing'"
    @keydown.enter.native="handleBlur"  
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"/>
    <div class="suggest" 
    v-show="ifsuggest" v-if="isLoading"
    >
      <div v-for="(item, index) in suggests" 
      :key="index" class="litem"
      @click="handleSelect(item)"
      >
        <div class="item">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import textBox from '../text-box/TextBox'
export default {
  name: 'VupAutoSuggestBox',
  components:{
    textBox
  },
  props: {
  placeholder: {
    type: String,
    default: 'Please input'
  },
  source:{
    type: Array,
    default: null
  }
  },
  computed:{
    suggests(){
      if(!this.iValue){
      return this.source.slice(0,5)
      } else {
        let temp= []
        this.query.forEach(keyword => {
          if (keyword){
          temp = temp.concat(this.source.filter(item => {return item.toLowerCase().indexOf(keyword.toLowerCase()) > -1}))
          }
        });
        // console.log(1)
        return [...new Set(temp)]
      }
    }
  },
  data(){
    return{
    iValue: '',
    query:[],
    ifsuggest: false,
    isLoading: true,
    }
  },
  methods:{
    handleBlur(){
      if(!this.iValue){
      this.ifsuggest = false
      }
    },
    handleInput(e) {
      this.$emit('input', e.target.value)
      this.iValue = e.target.value
      this.query = this.iValue.split(' ')
      // console.log(this.iValue, this.query)
    },
    handleFocus(){
      this.ifsuggest = true
    },
    handleSelect(item){
      this.iValue = item
      this.$emit('input',item)
      this.ifsuggest = false
    }
  }
}
</script>
<style lang="scss">
.vup-auto-suggest-box{
  .input{
    background-color: rgba(255, 255, 255, 0.66); 
    color: rgba(255, 255, 255, 0.872);
  }
  .inputing{
  background-color: rgb(255,255,255);      
  }
  .suggest{
    position: absolute;
    border: 2px solid rgba(255,255,255,0.2);
    background-color: rgba(87, 87, 87, 0.8);
    outline: none;
    width: 128px;
    .litem{
      margin: 1px 2px 3px;
    }
    .litem:hover{
      background-color: rgba(255,255,255,0.6);

    }
}
}
</style>
