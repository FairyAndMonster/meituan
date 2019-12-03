<template>
  <div class="m-login">
    <a href=""><img src="../static/img/mt.png" alt=""></a>
    <article>
      <div>
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
      </div>
      <div>
        <!-- <p>
          <span>账号登录</span>
          <span v-if="!loginWay">手机动态码登录 <i class="el-icon-user-solid"></i></span>
          <span v-if="loginWay">普通方式登录 <i class="el-icon-mobile-phone"></i></span>
        </p> -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
          </el-form-item>
         
          <el-form-item>
            <el-button type="warning" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </article>
  </div>
</template>

<script>
import cryptoJS from 'crypto-js'
export default {
  layout:'blank',
  data(){
    return{
      loginWay:false,
      ruleForm:{
        name:'',
        pwd:''
      },
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
           pwd: [
            { required: true, message: '请输入登录密码', trigger: 'blur' }
          ],
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //发送请求
          this.$axios.post('/users/signin',{
            username:window.encodeURIComponent(this.ruleForm.name),
            password:cryptoJS.MD5(this.ruleForm.pwd).toString()
          })
          .then(({status,data})=>{
            if(status === 200){
              if(data.code === 0){
                //跳转到首页
                location.href = '/'
              }else{
                this.$message(`${data.msg}`);
              }
            }else{
              this.$message('服务器错误');
            }
            console.log(data)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.m-login {
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  article{
    overflow: hidden;
    &>div:first-child{
      float: left;
    }
    &>div:last-child{
      width: 50%;
      float: right;
      .el-input,.el-button{
        width: 270px;
      }
    }
  }
}
</style>
