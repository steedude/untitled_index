<script setup>
import OhHello from '../components/OhHello.vue'
import { reactive } from 'vue'
import axios from 'axios'
const loginData = reactive({
  username: 'test2',
  password: '123456'
})
const login = () => {
  axios({
    method: 'post',
    url: 'http://127.0.0.1:9001/api/login',
    data: {
      username: loginData.username,
      password: loginData.password
    },
    headers: { 'Content-Type': 'application/json' }
  })
    .then(function (response) {
      console.log(response.data.resultMap.token)
    })
    .catch(function (response) {
      console.log(response)
    })
}
</script>

<template>
  <div>home page</div>
  <OhHello />
  <label for="username">帳號：</label>
  <input type="text" id="username" v-model="loginData.username" />
  <label for="password">密碼：</label>
  <input type="text" id="password" v-model="loginData.password" />
  <button @click="login">登入</button>
</template>

<style lang="scss" scoped></style>
