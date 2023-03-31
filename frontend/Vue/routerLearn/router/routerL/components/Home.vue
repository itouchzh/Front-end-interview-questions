<template>
    <div>
        <h1>Home</h1>
        <button @click="goAbout()">点我跳转到About</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter()
const obj = { name: 'paul', age: 23 }
const goAbout = () => {
    // 使用query传参
    // router.push({
    //     path: '/about',
    //     query: obj
    // })

}
</script>

<style scoped></style>