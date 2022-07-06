<script setup lang="ts">
import { toast, confirm, notify, alert } from '@/utils/toast'

const t = () => {
  toast('测试toast', { type: 'text' })
}

const a = () => {
  alert('测试alert', { title: '我是个标题' }).then(() => {
    toast('你点了确认', { type: 'success' })
  })
}

const c = () => {
  confirm('测试alert', { title: '我是个标题' })
    .then(() => {
      toast('你点了确认', { type: 'success' })
    })
    .catch(() => {
      toast('你点了确认', { type: 'fail' })
    })
}

const n = () => {
  notify('我是一个通知', {
    type: 'warning'
  })
}
</script>

<template>
  <h1>登录</h1>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success" @click="a">提示</van-button>
  <van-button type="default" @click="t">toast</van-button>
  <van-button type="warning" @click="c">确认</van-button>
  <van-button type="danger" @click="n">通知</van-button>
</template>

<style></style>
