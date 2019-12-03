<template>
  <el-container class="m-container">
    <el-header style="padding:0;height:180px;">
       <my-header/>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import MyHeader from '~/components/public/header/index.vue'
export default {
  components:{
    MyHeader
  }
}
</script>

<style lang="scss" scoped>
html,body {
  background: #F8F8F8;
}
/* .m-container {
  width: 80%;
  margin: 0 auto;
} */
el-header {
  position: relative;
}
</style>
