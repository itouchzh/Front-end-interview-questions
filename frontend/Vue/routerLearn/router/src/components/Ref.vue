<template>
    <div>
        <div>{{ name }}</div>
        <el-button @click='handdleClick()'>判断</el-button>
        <hr>
        <div>{{ shallow.address }}</div>
        <el-button @click='changeName()'>判断</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef, Ref } from 'vue'
// ref 响应式
const name: Ref<string> = ref('paul')
// isRef 判断是否未ref对象
const handdleClick = () => {
    console.log(isRef(name))
}
// 创建跟踪自身value变化的ref，但是值改变后，无法响应式
const shallow = shallowRef({
    address: '辽宁',
    city:'沈阳'
})
const changeName = () => {
    shallow.value.address = '北京'
}

// triggerRef 强制更新页面




</script>

<style scoped></style>