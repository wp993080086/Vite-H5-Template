<script setup lang="ts">
import HelloWorld from '@/components/helloWorld.vue'
import Box from '@/components/layout/container'
import { storeToRefs } from 'pinia'
import appStore from '@/store'
import Loading from '@/utils/loading'
const { userInfo } = storeToRefs(appStore.userModule)

const t = () => {
  const text = '加载中'
  const obj = Loading.show(text)
  setTimeout(() => {
    obj.message = '加载完毕'
  }, 2000)
  setTimeout(() => {
    Loading.hide()
  }, 3000)
}
</script>

<template>
  <div class="home_box">
    <HelloWorld msg="Hello Vite" />
    <Box />
    <p @click="t">{{ userInfo.userName }}</p>
  </div>
</template>

<style></style>
