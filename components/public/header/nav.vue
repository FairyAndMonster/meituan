<template>
  <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-submenu index="2">
      <template slot="title">我的美团</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">手机pp</template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu> -->
  <div class="m-nav">
    <ul class="nav">
      <li class="nav-item" @mouseleave="hideitemMenu1">
        <nuxt-link to="" @mouseenter.native="showitemMenu1">我的美团</nuxt-link>
        <dl class="item-menu" v-show="isItemMenuShow1">
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
        </li>
      <li class="nav-item">
        <nuxt-link to="">手机App</nuxt-link> 
        </li>
      <li class="nav-item" @mouseleave="hideitemMenu2">
        <nuxt-link to="" @mouseenter.native="showitemMenu2">商家中心</nuxt-link>
        <dl class="item-menu" v-show="isItemMenuShow2">
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
        </li>
      <li class="nav-item" @mouseleave="hideitemMenu3">
        <nuxt-link to="" @mouseenter.native="showitemMenu3">美团规则</nuxt-link>
        <dl class="item-menu" v-show="isItemMenuShow3">
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
      </li>
      <li class="nav-item" @mouseleave="hideitemMenu4">
        <nuxt-link to="" @mouseenter.native="showitemMenu4">网站导航</nuxt-link>
        <el-row v-show="isItemMenuShow4" class="item-menu" :gutter="20">
          <el-col :span="8">
            <dl>
              <dt>酒店旅游</dt>

              <dd>国际机票</dd>
              <dd>火车票</dd>
              <dd>榛果民宿</dd>
              <dd>经济型酒店</dd>
              <dd>主题酒店</dd>
              <dd>商务酒店</dd>
              <dd>豪华酒店</dd>
              <dd>公客栈寓</dd>
              <dd>青年旅社</dd>
              <dd>度假酒店</dd>
              <dd>别墅</dd>           
            </dl>
          </el-col>
          <el-col :span="4">
            <dl>
              <dt>吃美食</dt>
              <dd>烤鱼</dd>
              <dd>特色小吃</dd>
              <dd>烧烤</dd>
              <dd>自助餐</dd>
              <dd>火锅</dd>           
            </dl>
          </el-col>
          <el-col :span="4">
            <dl>
              <dt>看电影</dt>
              <dd>热映电影</dd>
              <dd>热门影院</dd>
              <dd>热映电影口碑榜</dd>
              <dd>最受期待电影</dd>
              <dd>国内票房榜</dd>
              <dd>北美票房榜</dd>
              <dd>电影排行榜</dd>          
            </dl>
          </el-col>
          <el-col :span="8">
            <dl>
              <dt>手机应用</dt>
              <dd>
                <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                  <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app">
                </a>
              </dd>
              <dd>
                <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                  <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app">
                </a>
              </dd>
              <dd>
                <a href="https://phoenix.meituan.com/app/" target="_blank">
                  <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" title="榛果app" alt="榛果app">
                </a>
              </dd>
              <dd>
                <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                  <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"> 
                </a>
              </dd>
              <dd>
                <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                  <img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app">
                </a>
              </dd>          
            </dl>
          </el-col>
        </el-row>   
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isItemMenuShow1:false,
      isItemMenuShow2:false,
      isItemMenuShow3:false,
      isItemMenuShow4:false,
    }
  },
  methods:{
    //菜单的显示与隐藏
    showitemMenu1(){
      this.isItemMenuShow1 = true
    },
    hideitemMenu1(){
      this.isItemMenuShow1 = false
    },
    showitemMenu2(){
      this.isItemMenuShow2 = true
    },
    hideitemMenu2(){
      this.isItemMenuShow2 = false
    },
    showitemMenu3(){
      this.isItemMenuShow3 = true
    },
    hideitemMenu3(){
      this.isItemMenuShow3 = false
    },
    showitemMenu4(){
      this.isItemMenuShow4 = true
    },
    hideitemMenu4(){
      this.isItemMenuShow4 = false
    },
  }
}
</script>

<style lang="scss">
$f16:16px;
.m-nav {
  .nav {
    display: flex;
    li.nav-item {
      flex: 1;
      font-size: $f16;
    }
    li.nav-item .item-menu {
      position: absolute;
      z-index: 999;
      background: #fff;
      padding: 10px;
    }
    li.nav-item:last-child .item-menu {
      width: 1100px;
      padding: 30px 36px 36px 47px;
      left: 0;
      dl {
        text-align: center;
        overflow: hidden;
      }
      dl dd {
        float: left;
        margin:0 10px;
        img {
          width:60Ppx;
          height: 60px;
        }
      }
    }
    
    
  }
}
</style>
