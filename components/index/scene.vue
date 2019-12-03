<template>
  <div class="scene">
    <div class="scene-block" v-for="(item,index1) in sceneList" :key="index1">
      <div class="tab">
        <span>{{item.title}}</span>
        <span 
        :class="item.type" 
        v-for="(item,index2) in item.child" 
        :key="index2"
        @click="clickTab($event,index1,index2)">{{item.name}}</span>
      </div>
      <ul class="tab-content">
        <li v-for="(v,index) in item.child[curIndex].child" :key="index">
          <img :src="v.imgUrl" alt="">
          <p>{{v.name}}</p>
           <p>{{v.desc}}</p>
           <p>{{v.price}} <span>{{v.oldPrice}}</span></p>
        </li>
      
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      curType:'',        //默认显示第一个
      curIndex:'0',
      curIndex2:null,
      sceneList:[
        {
          title:'有格调',
          bgColor:'rgb(190, 164, 116);',
          child:[
            {
              name:"全部",
              type:'gdAll',
              child:[
                {
                  imgUrl:'//p1.meituan.net/msmerchant/913c7d2286d407e79a06bd77514b22df176709.jpg@368w_208h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  price:'318',
                  oldPeice:'398'
                },
                 {
                  imgUrl:'//p0.meituan.net/msmerchant/36cbbb3fe477d86bc7bf45714724b5f6405667.jpg@368w_208h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  price:'318',
                  oldPeice:'398'
                },
                 {
                  imgUrl:'//p1.meituan.net/msmerchant/42b9a65b88afab37efd7c2145c8cabda95091.jpg@368w_208h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  price:'318',
                  oldPeice:'398'
                }
              ]
            },
            {
              name:"约会聚餐",
              type:'date',
              child:[
                {
                  imgUrl:'//p1.meituan.net/msmerchant/4ef780fd49ccfe449354538fa9e2c7f27406674.jpg@368w_208h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p1.meituan.net/msmerchant/7776f22c9d6fd0413b7e52441b3f74557386836.jpg@368w_208h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p1.meituan.net/msmerchant/09369c7673606070434b0f1b30ba5fd092433.jpg@368w_208h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
              ]
            },
            {
              name:"丽人SPA",
              type:'spa',
              child:[
                {
                  imgUrl:'//p0.meituan.net/wedding/7f274360936a5233902be9afe5054eef4134276.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                  name:'大教堂',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p0.meituan.net/dpmerchantpic/eff3f19bde10e81a76cba12ed81edb66221107.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                  name:'大教堂',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p0.meituan.net/merchantpic/23361032b03b77963a0d909589e049f8202913.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                  name:'大教堂',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
              ]
            }
          ]
        },
         {
          title:'很优惠',
          bgColor:'rgb(190, 164, 116);',
          titleList:['全部','休闲','美食'],
          child:[
            {
              name:"全部",
              type:'yhAll',
              child:[
                {
                  imgUrl:'//p1.meituan.net/dpmerchantpic/99eba05e19624a5010b609df283932d9121284.jpg@watermark=0|213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  price:'318',
                  oldPeice:'398'
                },
                 {
                  imgUrl:'//p1.meituan.net/dpmerchantpic/d5fdc02472306ebd20e2a40600be9acc247728.jpg@213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  price:'318',
                  oldPeice:'398'
                },
                 {
                  imgUrl:'//p1.meituan.net/deal/201208/22/1_0822151022.jpg@213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  price:'318',
                  oldPeice:'398'
                }
              ]
            },
            {
              name:"休闲",
              type:'freedom',
              child:[
                {
                  imgUrl:'//p0.meituan.net/dpmerchantpic/5292ecc6037def9591d4cce3d9b7df42149977.jpg@213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p0.meituan.net/wedding/310567fa0ea9bb17af982ac290298846509939.jpg@213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p0.meituan.net/dpmerchantpic/4ef46ae04cd803c9ca6d3785641b761e350474.jpg@213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
              ]
            },
            {
              name:"美食",
              type:'foods',
              child:[
                {
                  imgUrl:'//p1.meituan.net/deal/90fba08ff0206d568f2384398003548a1232933.png@0_0_1080_810a|388h_640w_2e_90Q|213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p1.meituan.net/deal/fdef88fe1b8fdc324e6ce089827dfae383675.jpg@0_0_2484_1863a|388h_640w_2e_90Q|213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
                {
                  imgUrl:'//p0.meituan.net/deal/987a4afe4d7771e0a3c5bc8bd42fbeff111626.jpg@0_22_747_452a|388h_640w_2e_90Q|213w_120h_1e_1c',
                  name:'大教堂蛋糕 Kathedral（王府中环店）',
                  desc:"蛋糕2选1,约6寸，圆形",
                  peice:'318',
                  oldPeice:'398'
                },
              ]
            }
          ]
        },
      ]
    }
  },
  methods:{
   clickTab(e,index1,index2){
     console.log(this.curType)
     if(this.curType){
       alert(1)
     }
     console.log(e.target.className)
     this.curType = e.target.className;
     this.curIndex = index2;
     this.curIndex2 = index1;
     console.log(this.sceneList[this.curIndex2].child.filter(item=>item.type == this.curType))
   }
  },
  computed:{
    //过滤显示当前点击的tab-content
    curTabContentList:function(){
      return this.sceneList[this.curIndex2].child.filter(item=>item.type == this.curType)
    }
    
  }
}
</script>

<style scoped lang="scss">
  .scene {
    width: 100%;
    .scene-block{
      background: #fff;
      margin: 30px 0;
      .tab {
        height: 44px;
        span {
          display: inline-block;
          width: 100px;
        }
      }
      .tab-content {
        overflow: hidden;
        li {
          float: left;
          width: 33.3%;
        }
      }
    }
    
  }
</style>
