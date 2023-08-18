<script setup>
import OhHello from '../components/OhHello.vue'
import { reactive } from 'vue'
import axios from 'axios'
const loginData = reactive({
  account: '',
  password: ''
})
const login = () => {
  axios({
    method: 'post',
    url: 'http://127.0.0.1:9001/api/login',
    data: {
      account: loginData.account,
      password: loginData.password
    },
    headers: { 'Content-Type': 'application/json' }
  })
    .then(function (response) {
      //handle success
      console.log(response)
    })
    .catch(function (response) {
      //handle error
      console.log(response)
    })
}
</script>

<template>
  <div>home page</div>
  <OhHello />
  <label for="account">帳號：</label>
  <input type="text" id="account" v-model="loginData.account" />
  <label for="password">密碼：</label>
  <input type="text" id="password" v-model="loginData.password" />
  <button @click="login">登入</button>
</template>

<style lang="scss" scoped></style>
