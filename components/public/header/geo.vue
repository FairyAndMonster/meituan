<template>
  <div>
    <i class="el-icon-location-outline"></i>{{$store.state.geo.curPosition}}
    <nuxt-link to="/city">切换城市</nuxt-link>
    <span>[门头沟区 大厂回族自治县 廊坊]</span>
    
  </div>
</template>

<script>

export default {
  data(){
    return{
      curPos:''

    }
  },
  mounted(){
    this.$store.dispatch('geo/getPosition')
  }
  // async mounted(){
  //   let res = await this.$axios.get('http://cp-tools.cn/geo/getPosition')
  //   console.log(res)
  // }
}
</script>

<style>

</style>
