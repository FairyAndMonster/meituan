<template>
  <el-row class="top-bar">
    <el-col :span="8">
      <div class="grid-content bg-purple">
      <Geo/>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light"><User/></div>
      </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><Nav/></div>
    </el-col>
</el-row>
</template>

<script>
import Geo from './geo'
import User from './user'
import Nav from './nav'
export default {
  components:{
    Geo,
    User,
    Nav
  }
}
</script>

<style lang="scss">
  .top-bar {
    height: 40px;
    line-height: 40px;
  }
</style>
