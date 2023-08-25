<script setup>
import OhHello from '../components/OhHello.vue'
import { ref } from 'vue'
import axios from 'axios'
const myToken = ref(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTcwZDMyZTgyMzJhMTk5MThiYTBkNCIsImlhdCI6MTY5MjkzMjQ3MX0.5NiHtKyX4t3enCOD0JHTNYLsCoHTsqNXwmVTXm17GAo'
)
const getData = () => {
  axios({
    method: 'get',
    url: 'http://127.0.0.1:9001/api/test',
    headers: { Authorization: 'Bearer ' + myToken.value }
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (response) {
      console.log(response)
    })
}
</script>

<template>
  <div>home page</div>
  <OhHello />
  <label for="token">token:</label>
  <textarea id="token" rows="6" cols="40" v-model="myToken"></textarea>
  <button @click="getData">拿資料</button>
</template>

<style lang="scss" scoped></style>
