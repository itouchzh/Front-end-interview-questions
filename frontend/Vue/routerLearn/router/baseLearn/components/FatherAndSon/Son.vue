<template>
    <div>
        <h1>我是子组件</h1>
        <div>接收父组件传递的参数{{ data }}</div>
        <button @click="sendToFather">子传递父</button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    data: number
}>()
// const emit = defineEmits(['on-click'])
// const sendToFather = () => {
//     emit('on-click', 1, 2, 3)
// }
// ts方式
const emit = defineEmits<{
    (e: 'on-click', data: number)
}>()
const sendToFather = () => {
    emit('on-click', 111)
}
</script>

<style scoped></style>