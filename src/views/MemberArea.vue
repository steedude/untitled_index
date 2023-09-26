<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
const { username, updated } = storeToRefs(userStore)
</script>

<template>
  <div>帳號：</div>
  <div>{{ username }}</div>
  <div>最後更新：</div>
  <div>{{ updated }}</div>
</template>

<style lang="scss" scoped></style>
