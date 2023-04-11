<template>
    <div>
        {{ obj.name }}
    </div>
</template>

<script setup lang="ts">
import { reactive, shallowReactive, toRef, toRefs } from 'vue'
// reactive只能用于数组和对象，不能用于基础数据类型，
// shallowReactive的用法与shallowRef用法一致，更新后同样不会改变视图
const obj = reactive({
    name: 'paul',
    age: 23
})
const oriObj = {
    cat: 1
}
// toRef 将原始数据转换为响应式数据
const state = toRef(oriObj, 'cat')
// toRefs 批量转换
const stateToRefs = toRefs(oriObj)
// toRaw 将响应式对象转化为普通对象
</script>

<style scoped></style>