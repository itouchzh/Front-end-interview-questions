<template>
    <div>
        <h1>我是孙子组件</h1>
        <div>孙子组件接收参数{{ count }}</div>
    </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue';
const count = inject<Ref<number>>('count', ref(1))
</script>

<style scoped></style>