<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores'
import router from '../router'
const { registerUser } = useUserStore()

const registerData = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})

const register = async () => {
  try {
    await registerUser({
      username: registerData.username,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword
    })
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
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
