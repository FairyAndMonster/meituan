<template>
  <div>

    <!-- 已登录 -->
    <div v-if="user">
      欢迎您！{{user}} <nuxt-link to="/logout">退出</nuxt-link>
    </div>
    <!-- 未登录 -->
    <div v-else>
      <nuxt-link to="/login">立即登录</nuxt-link>
      <nuxt-link to="/register">注册</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isLogin:false,
      user:''
    }
  },
  async mounted(){
    //获取用户信息 
    let {status,data:{user}} = await this.$axios('/users/getUser')
    console.log(user)
    if(status === 200&&user){
      this.user = user
    }

  },
  methods:{
    //点击退出
    // logout(){
    //   alert(1)
    //   this.$axios.get('/users/exit')
    //   .then(res => {
    //     if(res.status === 200&&res.data.data.code === 0){
    //       this.user = ''
    //       location.href = '/'
    //     }
    //   })
    //   .catch(error => error)
    // }
  }
}
</script>

<style>

</style>
