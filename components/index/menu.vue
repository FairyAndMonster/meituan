<template>
  <div class="m-menu">
    <!-- 菜单列表 -->
    <dl class="left-menu">
      <dt>全部分类</dt>
      <dd 
        v-for="(item,index) in menuList" 
        :key="index" 
        :class="item.type"
        @mouseenter="menuEnter"
        @mouseleave="leaveMenu">
          {{item.name}}
          <i class="el-icon-arrow-right"></i>
        </dd>
    </dl>
    <!-- 菜单详情 -->
    <div 
      class="menu-detail" 
      v-for="(item,index) in menuDetailList" 
      :key="index"
      v-show="type"
      @mouseenter="menuDetailEnter"
      @mouseleave="leaveMenuDetail">
      <template v-for="v  in item.child">

          <h1>
            {{v.title}}
            <span style="float:right;">
              更多
              <i class="el-icon-d-arrow-right"></i>
            </span>

          </h1>
          <div>
            <span v-for="(s,idx) in v.kinds" :key="idx" style="margin:10px;">{{s}}</span>
          </div>

      </template> 
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menuList:[
        {
          type:'foods',
          name:'美食',
          child:[
            {
              title:'美食',
              kinds:['代金券','甜点饮品','火锅自助餐','小吃快餐','日韩料理']
            }
          ]
        },
         {
          type:'takeout',
          name:'外卖',
          child:[
            {
              title:'外卖',
              kinds:['美团外卖']
            }
          ]
        },
         {
          type:'hotel',
          name:'酒店HOT',
          child:[
            {
              title:'酒店星级',
              kinds:['经济型','舒适/三星','高档/四星']
            }
          ]
        },
        {
          type:'homestay',
          name:'榛果民宿',
          child:[
            {
              title:'外卖',
              kinds:['美团外卖']
            }
          ]
        },
         {
          type:'movie',
          name:'猫眼电影',
          child:[
            {
              title:'外卖',
              kinds:['美团外卖']
            }
          ]
        },
         {
          type:'tacket',
          name:'机票 / 火车票',
          child:[
            {
              title:'外卖',
              kinds:['美团外卖']
            }
          ]
        },
        {
          type:'entertainment',
          name:'休闲娱乐 / KTV',
          child:[
            {
              title:'外卖',
              kinds:['美团外卖']
            }
          ]
        },
         {
          type:'cosmetology',
          name:'丽人 / 美发 / 医学美容'
        },
         {
          type:'marry',
          name:'结婚 / 婚纱摄影 / 婚宴'
        },
         {
          type:'child',
          name:'亲子 / 儿童乐园 / 幼教宿'
        },
         {
          type:'motion',
          name:'运动健身 / 健身中心'
        },
         {
          type:'furniture',
          name:'家装 / 建材 / 家居'
        },
         {
          type:'study',
          name:'学习培训 / 音乐培训'
        },
         {
          type:'medical',
          name:'医疗健康 / 宠物 / 爱车'
        },
         {
          type:'bar',
          name:'酒吧 / 密室逃脱'
        },
      ],
      type:'',      //菜单名称
      isShowMenuDetail:false
    }
  },
  methods:{
    // 菜单鼠标进入事件
    menuEnter(e){
      //获取类名
      this.type = e.target.className;
      this.isShowMenuDetail = true;
    },
    //菜单鼠标离开事件,菜单详情隐藏
    leaveMenu(){
      let self = this;
      this.timer = setTimeout(function(){
       this.type = '';
      },150)
    },
    menuDetailEnter(){
      clearInterval(this.timer)  
    },
    leaveMenuDetail(){
      this.type = '';
    }
  },
  computed:{
    menuDetailList:function(){
      return this.menuList.filter(item=>item.type==this.type)
    }
  }
}
</script>

<style scoped lang="scss">
.m-menu {
  position: relative;
  
  .left-menu{
    width: 228px;
    background: #fff;
    text-align: center;
     dd{
      line-height: 27px;
      i {
        float: right;
      }
    }
  }
  .menu-detail {
    position: absolute;
    width: 400px;
    height: 416px;
    top: 0;
    left: 228px;
    z-index: 99999;
    background: #fff;
    padding: 20px;
    div {
      text-align: left;
    }
  }
}

</style>
