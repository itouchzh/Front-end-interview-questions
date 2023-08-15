<template>
    <div>
        <h1>School组件</h1>
        <hr>
        <Student :name="schoolName" :age="1952" @onChange="handleGetValue" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Student from '../Student/index.vue'
const schoolName = ref<string>("沈阳东北")
const handleGetValue = (val: any) => {
    console.log("getValue",val)
}
</script>

<style scoped></style>