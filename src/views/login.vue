<template>
  <div class="loginPage">
    <div class="box">
      <div class="top">系统登录</div>
      <div class="name item">
        <a-icon type="user" />
        <input type="text" v-model="name">
      </div>
      <div class="item colRed">{{tsName}}</div>
      <div class="password item">
        <a-icon type="eye" />
        <input type="password" v-model="password">
      </div>
      <div class="item colRed">{{tsPassword}}</div>
      <div class="btn">
        <a-button type="primary" size="large" @click="toLogin">登录</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'ant-design-vue'
Vue.use(Button)
export default {
  data () {
    return {
      name: 'admin',
      password: 'aaa123',
      tsName: '',
      tsPassword: ''
    }
  },
  methods: {
    toLogin () {
      var a1 = this.util.isUser(this.name)
      var a2 = this.util.isPassword(this.password)
      if (a1 !== 1) {
        this.tsName = a1
        return
      }
      if (a2 !== 1) {
        this.tsPassword = a2
        return
      }
      this.$router.push({
        path: '/admin'
      })
      sessionStorage.setItem('isLogin', true)
    }
  }
}
</script>

<style scoped lang="less">
.loginPage {
  width: 100%;
  height: 100%;
  background-color: rgb(45, 58, 75);
  padding-top: 150px;
}
.box {
  width: 350px;
  padding: 30px;
  background-color: #ddd;
  margin: 0 auto;
  border-radius: 4px;
  .top {
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
  .item {
    height: 40px;
    line-height: 40px;
    background-color: #ddd;
    padding-left: 45px;
    position: relative;
    // margin-bottom: 30px;
    border-radius: 4px;
    > i {
      width: 45px;
      height: 40px;
      line-height: 40px;
      position: absolute;
      text-align: center;
      left: 3px;
      background-color: #f6f6f6;
      font-size: 22px;
      padding-top: 5px;
    }
    > input {
      height: 40px;
      background-color: #fff;
      width: 100%;
      text-indent: 1em;
    }
  }
}
.colRed {
  color: red;
}
.ant-btn{
  width: 290px !important;
}
</style>
