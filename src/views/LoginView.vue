<script setup>
import { reactive, onMounted } from 'vue'
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
const handleCredentialResponse = (response) => {
  console.log('Encoded JWT ID token: ' + response.credential)
}

onMounted(() => {
  window.google.accounts.id.initialize({
    client_id: '462578570380-j2ed57fpoqdc19jbilsh44h1ha22e0id.apps.googleusercontent.com',
    callback: handleCredentialResponse
  })
  window.google.accounts.id.renderButton(document.getElementById('buttonDiv'), { locale: 'fr' })
  window.google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
    theme: 'outline',
    size: 'large',
    width: 200
  })
})
</script>

<template>
  <div>
    <div>登入</div>
    <label for="username">帳號：</label>
    <input type="text" id="username" v-model="loginData.username" />
    <label for="password">密碼：</label>
    <input type="text" id="password" v-model="loginData.password" />
    <button @click="login">登入</button>
  </div>
  <div id="buttonDiv"></div>
</template>

<style lang="scss" scoped></style>
