<template>
    <div>
        <h1>Student组件</h1>
        <div>school Name : {{ name }}</div>
        <div>school age: {{ age }}</div>
        <el-input v-model="inputValue" placeholder="" clearable @input="handleChange"></el-input>
        <slot name="header" :text="text"></slot>
        <hr>
        <div>依赖注入传递{{ inJectName }}--{{ inJectValue }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
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

// 依赖注入
const { name: inJectName, value: inJectValue } = inject('provideInfo') as { name: string, value: any };

const text = ref("Hello World")
</script>