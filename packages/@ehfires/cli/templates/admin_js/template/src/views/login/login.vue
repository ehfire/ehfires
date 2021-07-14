<template>
  <div class="fireLogin">
    <div class="fireLogin_content">
      <div class="fireLogin_title">
        <img src="~@/assets/logo.png" alt="" />
      </div>
      <el-card shadow="never">
        <el-form status-icon ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="pass">
            <el-input placeholder="用户名" v-model="form.username">
              <template slot="prepend">
                <i class="el-icon-s-custom"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              placeholder="密码"
              v-model="form.password"
            >
              <template slot="prepend">
                <i class="el-icon-lock"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input placeholder="验证码" v-model="form.authcode">
              <template slot="append"> 12345 </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="fireLogin_btn" type="primary" @click="goLogin"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="fireLogin_footer">
      版权所有 © 2021
      <a href="https://www.anquan.info/" _blank>广州青莲网络科技有限公司</a>
      备案号：
      <a href="https://beian.miit.gov.cn/#/Integrated/index" _blank
        >粤ICP备11033900号</a
      >
    </div>
  </div>
</template>

<script>
import * as type from "@/stores/types";
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        authcode: "",
      },
    };
  },
  methods: {
    //登录
    goLogin() {
      this.$store.commit(type._ISLOGIN, true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/login.scss";
</style>
