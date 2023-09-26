<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores'
import router from '../router'
const { loginUser } = useUserStore()

const loginData = reactive({
  username: 'test2',
  password: '123456'
})
const login = async () => {
  try {
    await loginUser({ username: loginData.username, password: loginData.password })
    router.push('/')
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
</template>

<style lang="scss" scoped></style>
