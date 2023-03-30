<template>
  <h1>Hello Router!</h1>
  <br>
  <!-- 第一种跳转 -->
  <router-link to="/" style="margin-right: 50px;">Home页面</router-link>
  <router-link to="/about">About页面</router-link>
  <!-- 第二种 -->
  <router-link :to="{ name: 'About' }">About页面命名跳转</router-link>
  <!-- 无历史模式 -->
  <router-link to="/about" replace>无历史模式</router-link>
  <br>
  <hr>
  <button @click="goHome('/')">Home页面</button>
  <button @click="goAbout('/about')">About页面</button>
  <hr>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
// 编程式导航
const router = useRouter()
const goHome = (url) => {
  router.push({
    path: url
  })
}
const goAbout = (url) => {
  router.push({
    path: url
  })
  // 无历史模式
  // router.replace(url)
  // 前进1
  // router.go(1)
  // 后退
  // router.back()
}
</script>



<style scoped></style>
