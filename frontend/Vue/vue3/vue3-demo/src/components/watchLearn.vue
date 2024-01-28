<!-- watch -->
<template>
    <div>
        <!-- <button @click="count++">{{ count }}</button> -->
        <button @click="changeName">{{ students.name }}</button>
    </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue';

// ref 监听普通值
// const count = ref(0)
// watch(count, (newValue, oldValue) => {
//     console.log(newValue, oldValue)
// })

// ref 监听复杂对象
// const students = ref({
//     name: 'paul'
// })
// watch(() => students.value, (newValue, oldValue) => {
//     console.log(newValue, oldValue)
// },{deep:true})
// function changeName() {
//     students.value.name = 'jack'
// }

// 监听reactive, 使用() => 
const students = reactive({
    name: 'paul'
})
watch([() => students.name], (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
function changeName() {
    students.name = 'jack'
}
</script>

<style scoped></style>