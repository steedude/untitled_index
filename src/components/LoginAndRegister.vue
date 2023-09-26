<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores'
import router from '../router'
const { loginUser, registerUser } = useUserStore()

const loginData = reactive({
  username: 'test2',
  password: '123456'
})
const registerData = reactive({
  username: '',
  password: '123456',
  confirmPassword: '123456'
})

const login = async () => {
  try {
    await loginUser({ username: loginData.username, password: loginData.password })
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}

const register = async () => {
  try {
    await registerUser({
      username: registerData.username,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword
    })
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>登入</div>
  <label for="username">帳號：</label>
  <input type="text" id="username" v-model="loginData.username" />
  <label for="password">密碼：</label>
  <input type="text" id="password" v-model="loginData.password" />
  <button @click="login">登入</button>
  <div>註冊</div>
  <label for="username">註冊帳號：</label>
  <input type="text" id="username" v-model="registerData.username" />
  <label for="password">密碼：</label>
  <input type="text" id="password" v-model="registerData.password" />
  <label for="confirmPassword">確認密碼：</label>
  <input type="text" id="confirmPassword" v-model="registerData.confirmPassword" />
  <button @click="register">註冊</button>
</template>

<style lang="scss" scoped></style>
