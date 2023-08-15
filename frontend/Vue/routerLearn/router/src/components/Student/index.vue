<template>
    <div>
        <h1>Student组件</h1>
        <div>school Name : {{ name }}</div>
        <div>school age: {{ age }}</div>
        <el-input v-model="inputValue" placeholder="" clearable @input="handleChange"></el-input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    name?: string,
    age?: number,
}>()
const emit = defineEmits<{
    (e: 'onChange', val: any): void
}>()
const inputValue = ref<string>('')
const handleChange = (value) => {
    
    emit('onChange', value)
}
</script>