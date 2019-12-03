<template>
  <div class="m-register">
    <header>
      <a href="">
       <img src="../static/img/mt.png" alt=""> 
      </a>
      <span>已有美团账号？<el-button size="mini" type="warning">登录</el-button></span>
    </header>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="昵称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
        <el-button style="display:block"  ref="emailRule" @click="getCode" v-if="!isShowBtn">免费获取邮箱验证码</el-button>
        <el-button style="display:block" disabled @click="getCode" v-if="isShowBtn">{{'重新获取'+count}}</el-button>
        
      </el-form-item>
       <el-form-item label="短信验证码" prop="code">
        <el-input v-model="ruleForm.code"></el-input>
      </el-form-item>
       <el-form-item label="创建密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" @input="changeInt(ruleForm.pwd)"></el-input>
        <div> 

          <div class="test" v-show="isShowTest1">
            <span class="testInner" :class="{widthActive:isShowTest1,active:isShowTest3}" v-show="isShowTest1">弱</span>  
          </div> 
          <div class="test" v-show="isShowTest2">
            <span class="testInner" :class="{widthActive:isShowTest2,active:isShowTest3}" v-show="isShowTest2">中</span>  
          </div> 
          <div class="test" v-show="isShowTest3">
            <span class="testInner" :class="{widthActive:isShowTest3,active:isShowTest3}" v-show="isShowTest3">强</span>  
          </div> 
        </div>
      </el-form-item>
       <el-form-item label="确认密码" prop="ensurePwd">
        <el-input type="password" v-model="ruleForm.ensurePwd"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">同意以下协议并注册</el-button>
      </el-form-item>
      <div style="padding-left: 120px;">
        <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        <a class="f1" href="https://rules-center.meituan.com/rules-detail/2" target="_blank">《美团网隐私协议》</a>
      </div>
    </el-form>
  </div>
</template>

<script>
import CryptoJs from 'crypto-js'
export default {
  layout:'blank',
  data(){
    //邮箱验证
    var validateEmail = (rule, value, callback) => {
      let emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
      if (value === '') {
        callback(new Error('邮箱账号不能为空'));
      } else {
        if (this.ruleForm.email !== '') {
          if(!emailReg.test(this.ruleForm.email)){
            callback(new Error('输入的邮箱账号格式有误'));
          }
          //this.$refs.ruleForm.validateField('ensurePwd');
        }
        callback();
      }
      
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.ensurePwd !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isShowTest1:false,  //弱
      isShowTest2:false,  //中
      isShowTest3:false,  //强
      isShowBtn:false,    
      count:0,
      ruleForm:{
        name:'',
        email:'',
        code:'',
        pwd:'',
        ensurePwd:''
      },
      rules: {
          name: [
            { required:true, message: '请输入昵称',trigger: 'blur' }
          ],
          email: [
            { validator:validateEmail, trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入短信验证码', trigger: 'blur' }
          ],
          pwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          ensurePwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
         
        }
    }
  },
  methods:{
    
    changeInt(msg){
      let test1 = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){6,12}$/;  //  弱：纯数字，纯字母，纯特殊字符
      let test2 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;  //中：字母+数字，字母+特殊字符，数字+特殊字符
      let test3 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;  //强：字母+数字+特殊字符
      if(test1.test(msg)){
        this.isShowTest1 = true;
      }else {
        this.isShowTest1 = false;
      }
      if(test2.test(msg)){
        this.isShowTest2 = true;
      }else {
        this.isShowTest2 = false;
      }
      if(test3.test(msg)){
        this.isShowTest3 = true;
      }else {
        this.isShowTest3 = false;
      }
     
      console.log(test1.test(msg))
    },
    //点击获取验证码
    getCode(){
      let namePass;
      let emailPass;
      //检查昵称
      this.$refs.ruleForm.validateField('name',(valid)=>{
        namePass = valid;
      })
      //检查邮箱
      this.$refs.ruleForm.validateField('email',(valid)=>{
        emailPass = valid;
      })
      //昵称和邮箱都通过校验
      if(!namePass&&!emailPass){
        //发送请求验证码
          this.$axios.post('/users/verify',{
            username:encodeURIComponent(this.ruleForm.name),
            email:this.ruleForm.email
          })
          .then((data)=>{
            console.log(data)
            if(data.status === 200){
              if(data.data.code === 0){
               this.isShowBtn = true;
                //如果没有启动倒计时
                if(!this.count){
                  //启动倒计时
                  this.count = 60;
                  this.timeId = setInterval(()=>{
                    this.count--;
                    //this.count == 0;
                    if(this.count<=0){
                      //清除定时器
                      clearInterval(this.timeId)
                      this.isShowBtn = false;
                    }       
                  },1000)
                }
            }else{
              this.$message(`${data.data.msg}`);
              }
            }
            
          })
         
      }
    
      
    },
    //点击注册
    onSubmit(formName){
    this.$refs[formName].validate((valid) => {
      if (valid) {
        //发送请求
        this.$axios.post('/users/signup',{
          username:window.encodeURIComponent(this.ruleForm.name),
          password:CryptoJs.MD5(this.ruleForm.pwd).toString(),
          email:this.ruleForm.email,
          code:this.ruleForm.code
        })
        .then(({status,data})=>{
          console.log(data)
          if(status===200){
            if(data.code===0){
              //跳转到登录页
            //location.href('/login')
            this.$message('注册成功！');
            location.href = '/login'
            }else {
              this.error = data.msg
              this.$message(`${data.msg}`);
            }   
          }else{
            this.$message(`服务器出错，出错码是${status}`);
          }
          //清空error信息
          setTimeout(()=>{
            this.error = ''
          },1500)
        },(err)=>{
          
        })
      } else {
        console.log('error submit!!');
        return false;
      }
    });

  }, 
   
  },

}
</script>

<style lang="scss" scoped>
.m-register {
  height: 100%;
  header {
    height: 74px;
    line-height: 74px;
    overflow: hidden;
    border-bottom: 3px solid #ccc;
    a {
     float: left;
     margin-left: 40px;
    }
    span {
      float: right;
      margin-right: 40px;
    }
  }
  .el-form {
    width: 600px;
    padding: 20px 10px;
    .el-input {
      width: 248px;
    }
    .test {
      display: inline-block;
      width: 85px;
      height: 20px;
      .testInner {
        display: inline-block;
        background: orange;
        line-height: 21px;
        text-align: center;
        color: #fff;
      }
    }
    .active {
      background: green;
    }
    .widthActive {
      animation: move 1s linear forwards;
    }
    @keyframes move {
      0%{
        width: 0;
      }
      100%{
        width: 100%;
      }
    }
    .el-form-item__error {
     top: 8px!important;
     left: 250px!important;
    }
  }
}
</style>
