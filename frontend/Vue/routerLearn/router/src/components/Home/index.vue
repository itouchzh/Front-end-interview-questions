<template>
    <div>
        <h1>Home</h1>
        <div>{{ countStore.count }}</div>
        <div>{{ countStore.doubleCount }}</div>
        <hr>
        <button @click="addOne"> add one</button>
        <button @click="countStore.increment">第二种方法添加</button>
        <hr>
        <div>{{ count }}</div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../store/count'
import { storeToRefs } from 'pinia';
const countStore = useCounterStore()
// count拆开表示
const { count } = storeToRefs(countStore)
// 增加值
function addOne() {
    // countStore.count++
    countStore.$patch({
        count: 100
    })
}
// 改变值


// 监听
countStore.$subscribe((mutation, state) => {
    console.log(mutation, state)
})

</script>

<style scoped></style>