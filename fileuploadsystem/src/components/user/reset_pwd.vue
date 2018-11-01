<template>
  <div class="login-wrap">
    <el-col :span="6" :offset="14">
      <div class="login-model">
        <h2 class="login-h2">找回密码</h2>
        <el-form :model="form">
          <el-form-item prop="用户名">
            <el-input v-model="form.username" type="text" placeholder="请输入邮箱/手机号" maxlength="100" minlength="6" auto-complete="off" prefix-icon="fa-user-o"></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="12">
                <el-input v-model="form.code" type="text" placeholder="验证码" maxlength="6" prefix-icon="fa-envelope"></el-input>
              </el-col>
              <el-col :span="11" :offset="1">
                <el-button type="default">发送验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item prop="密码">
            <el-input v-model="form.pwd" type="password" placeholder="请输入新密码" maxlength="12" minlength="7" auto-complete="off" prefix-icon="fa-lock"></el-input>
          </el-form-item>
           <el-form-item prop="密码">
            <el-input v-model="form.repeatPwd" type="password" placeholder="请确认新密码" maxlength="12" minlength="7" auto-complete="off" prefix-icon="fa-lock"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="wdb100" @click.prevent="handleLogin">登录</el-button>
          </el-form-item>
          <el-row>
            <router-link to="/login">返回登录</router-link>
          </el-row>
        </el-form>
      </div>
    </el-col>
  </div>
</template>

<script>
import API from '../../api/api_user'

export default {
  data () {
    return {
      form: {
        username: '',
        code: '',
        pwd: '',
        repeatPwd: ''
      }
    }
  },
  components: {

  },
  methods: {
    handleLogin () {
      let that = this
      // 检验输入框的值
      that.validate((validBool) => {
        if (validBool) {
          // ajax提交
          API.resetPwd({
            username: that.form.username,
            pwd: that.form.pwd,
            repeatPwd: that.form.repeatPwd,
            code: that.form.code
          }).then((result) => {
            console.log(result)
          })
        }
      })
    },
    // 检验输入框的值
    validate (callback) {
      let that = this
      let isValidate = true
      if (!(that.form.username && that.form.pwd && that.form.repeatPwd && that.form.code)) {
        isValidate = false
      }
      callback && callback(isValidate)
    }
  }
}
</script>

<style scoped>
.login-wrap{
  background: #fff;
}
.login-model {
  position: relative;
  top: 150px;
  padding: 0 30px 30px 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  box-shadow: 2px 2px 6px #ddd;
}
.login-h2{
  padding: 10px 0;
  text-align: center;
}
</style>
