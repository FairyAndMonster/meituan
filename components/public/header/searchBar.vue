  <template>
  <el-row class="search-bar">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <a href="//bj.meituan.com"><img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团"></a>
      </div>
    </el-col>
    <el-col :span="16">
      <!-- <el-form ref="form" :model="form"> -->
        <div class="search-area">
          <el-input 
            type="text"
            v-model="inputContent"
            placeholder="请输入内容" 
            @focus="onFocusFn" 
            @blur="onBlurFn">
          </el-input>
          <!-- 点击输入框无输入内容时显示热门搜索 -->
          <dl class="onfocus-hot-search" v-show="isShowHotSearch">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotSearchList" :key="index">{{item}}</dd>
          </dl>
          <!-- 点击输入框有输入内容时显示搜索列表 -->
          <dl class="searlist" v-show="isShowSearchList">
            <dd v-for="(item,index) in searchList" :key="index">{{item}}</dd>
            
          </dl>
        </div>
        
        <el-button icon="el-icon-search" type="warning"></el-button>
        
        <!-- 热门搜索 -->
        <div class="hot-search">
          <span>北京欢乐谷</span>
          <span>八达岭长城</span>
          <span>香山公园</span>
          <span>天坛公园</span>
        </div>   
      <!-- </el-form> -->
      <!-- tab按钮 -->
      <ul class="tab-nav">
        <li>
          <nuxt-link to="">美团外卖</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">猫眼电影</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">美团酒店</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">民宿／公寓</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">商家入驻</nuxt-link>
        </li>
        <li>
          <nuxt-link to="">美团公益</nuxt-link>
        </li>
      </ul>
    </el-col>
    
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      //isShowHotSearch:false,
      //isSearchListShow:false,
      isFocus:false,
      inputContent:'',
      hotSearchList:['北京欢乐谷','香山公园'],
      searchList:['天安门','故宫']
    }
  },
  computed:{
    isShowHotSearch:function(){
      //聚焦并且没有输入内容
      return this.isFocus&&!this.inputContent
    },
    isShowSearchList:function(){
      //聚焦并且有输入内容
      return this.isFocus&&this.inputContent
    },
  },
  methods:{
    //点击搜索框鼠标聚焦事件
    onFocusFn(){
      //聚焦状态
      this.isFocus = true;
    },
    //搜索框失焦事件
    onBlurFn(){
      //失焦状态
      setTimeout(()=>{
        this.isFocus = false;
      },200)
      
    },

  }
}
</script>

<style lang="scss">
.search-bar {
  background: #fff;
  padding: 20px 140px;
}

  .search-area {
    width: 60%;
    display: inline-block;
    position: relative;
    .onfocus-hot-search,.searlist {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
      position: absolute;
      background: #fff;
      p {
        color: #999;
      }
    }
  }

.tab-nav {
  display: flex;
  padding: 20px 0 0px 0;
  li {
    flex:1;
    a {
      color: #222;
      font-weight: 700;
      font-size: 16px;
    }
  }
}
</style>
