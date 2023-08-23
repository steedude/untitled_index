<script setup>
import OhHello from '../components/OhHello.vue'
import { ref } from 'vue'
import axios from 'axios'
const myToken = ref(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGNhMGNhZjUyOThhZmVlMDc5ZGUzOSIsImlhdCI6MTY5Mjc2MDcxN30.FqOqdsLJAP3AcM6Zap_wLVK4MDOZjm5NlPZ3meKihdk'
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
