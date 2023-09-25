<script setup>
import { getTestData } from '@/apis/data'

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
  <div>關於我們</div>
  <button @click="getData">拿資料</button>
</template>

<style lang="scss" scoped></style>
