<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
const { isLogin } = storeToRefs(userStore)
const { logoutUser } = userStore
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="link_container">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/about">關於</RouterLink>
    </div>
    <div class="login_container">
      <RouterLink v-if="!isLogin" to="/login">登入</RouterLink>
      <button v-if="isLogin" @click="logoutUser">登出</button>
    </div>
  </div>
  <slot></slot>
</template>

<style lang="scss" scoped>
.link_container {
  a {
    @apply mr-4;
  }
}
.login_container {
  @apply mr-4;
}
</style>
