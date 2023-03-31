<template>
    <div>
        <div>我是兄弟一号，我要传递信息给兄弟二号</div>
        <button @click="emit">点我</button>
    </div>
</template>

<script setup lang="ts">
import Bus from '../../Bus'
const emit = () => {
    Bus.emit('on-click', 111)
}
</script>

<style scoped></style>