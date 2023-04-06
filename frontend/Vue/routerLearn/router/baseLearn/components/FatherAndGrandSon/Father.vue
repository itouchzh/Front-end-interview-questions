<template>
    <div>
        <h1>我是父组件</h1>
        <Son></Son>
        <GroundSon></GroundSon>
    </div>
</template>

<script setup lang="ts">
import Son from './Son.vue';
import GroundSon from './GroundSon.vue';
import { ref, provide } from 'vue'
let count = ref<number>(0)
// 父组件提供数据
provide('count', count)
</script>

<style scoped></style>