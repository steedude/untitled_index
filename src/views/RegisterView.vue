<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const loginData = reactive({
  username: '',
  password: '123456',
  confirmPassword: '123456'
})
const register = () => {
  axios({
    method: 'post',
    url: `${import.meta.env.VITE_API_URL}/api/register`,
    data: {
      username: loginData.username,
      password: loginData.password,
      confirmPassword: loginData.confirmPassword
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
  <label for="username">註冊帳號：</label>
  <input type="text" id="username" v-model="loginData.username" />
  <label for="password">密碼：</label>
  <input type="text" id="password" v-model="loginData.password" />
  <label for="confirmPassword">確認密碼：</label>
  <input type="text" id="confirmPassword" v-model="loginData.confirmPassword" />
  <button @click="register">註冊</button>
</template>

<style lang="scss" scoped></style>
