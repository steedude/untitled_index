<script setup>
import { ref } from 'vue'
import { getTestData } from '@/apis/data'
const myToken = ref(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTg0YjAxYzhmMDNhMzM0NTU5ZTM3MCIsImlhdCI6MTY5Mjk0NjA0NX0.zq10tGJCoeQa83YciTfB6QfPw0qnbaAjmPWONGa1Q2U'
)
const getData = async () => {
  try {
    const res = await getTestData()
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>測試拿資料</div>
  <label for="token">token:</label>
  <textarea id="token" rows="6" cols="40" v-model="myToken"></textarea>
  <button @click="getData">拿資料</button>
</template>

<style lang="scss" scoped></style>
