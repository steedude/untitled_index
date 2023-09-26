<script setup>
import { shallowRef } from 'vue'
import { RouterView } from 'vue-router'
import layouts from './layout/index'
import router from './router'

const layout = shallowRef()
router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || 'div'
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style lang="scss" scoped></style>
