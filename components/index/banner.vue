<template>
  <div class="banner">
    <div class="banner-top">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="freedom">
        <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
      </div>
      <!-- 登录注册 -->
      <div class="login">
        <div class="avator">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          <p>HI!你好</p>
        </div>
          <div><el-button size="medium" round>注册</el-button></div>
          
          <div><el-button size="medium" round>立即登录</el-button></div>
      </div>
      <div></div>
    </div>
    <div class="banner-bottom">
      <div></div>
      <div></div>
      <div></div>
      
      <div>
        <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
        <p>美团App手机版</p>
        <p><i>一元起</i>吃喝玩乐</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgs:[
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  .banner-top {
    margin-bottom: 10px;
    overflow: hidden;
    div.freedom {
      float: left;
      margin: 0 10px;
      img {
        width: 150px;
        height: 240px;
      }
    }
    .el-carousel{
      width: 550px;
      height: 240px;
      float: left;
      overflow: hidden;
      img {
        width: 550px;
        height: 240px;
      }
    }
  }
  .banner-bottom {
    margin-top: 10px;
    height: 165px;
    div {
      float: left;
      height: 165px;
    }
    div:first-child{
      width: 270px;
      background: url('http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png') no-repeat;
      background-size: 100%;
    }
    div:nth-child(2){
      width: 270px;
      background: url('http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg') no-repeat;
      background-size: 100%;
      margin: 0 10px;
    }
    div:nth-child(3){
      width: 150px;
      background: url('http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg') no-repeat;
      background-size: 100%;
      margin-right: 10px;
    }
    div:last-child{
      background: #fff;
      text-align: center;
      padding: 0 64px;
      border: 1px solid #ccc;
      img {
        width: 95px;
        height: 95px;
      }
    }
  }
  .login {
    background: #fff;
    border: 1px solid #ccc;
    width: 228px;
    float: left;
    text-align: center;
    .avator img{
      border-radius: 50%;
      margin: 10px 0;
    }
    .el-button {
      width:97px;
      margin: 5px 0;
    }
  }
}
</style>
