<template>
    <div>
        <h1>我是父组件</h1>
        <Son :data=data @on-click="getInfoFromSon"></Son>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './Son.vue';
const data = ref(0)
const getInfoFromSon = (...args) => {
    console.log(args);

}
</script>

<style scoped></style>