<template>
  <div class="wrapper">
    <el-row>
      <!-- 菜单 -->
      <el-col :span="5">
        <emenu/>
      </el-col>
      <!-- banner -->
      <el-col :span="19">
        <banner/>
      </el-col>
    </el-row>
    <Scene />
   
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Emenu from '@/components/index/menu.vue'
import Banner from '@/components/index/banner.vue'
import Scene from '@/components/index/scene.vue'
export default {
  components: {
    Logo,
    Emenu,
    Banner,
    Scene
  },
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.el-row {
  width:100%;
  
}
</style>
