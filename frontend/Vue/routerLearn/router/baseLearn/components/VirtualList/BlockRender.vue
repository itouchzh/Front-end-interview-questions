<template>
    <div>
        <h1>分片渲染</h1>
        <div class="list" v-for="(item, index) in listData" :key="index">{{ item }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const listData = ref([])
const totalData = ref([])
const start = ref(0)
const size = 20
const load = (() => {
    let tempList = totalData.value.slice(start.value, start.value + size)
    if (tempList && tempList.length > 0) {
        setTimeout(() => {
            listData.value = [...listData.value, ...tempList]
            start.value = start.value + size
            load()
        }, 500)
    }

})
onMounted(() => {
    for (let i = 0; i < 10; i++) {
        totalData.value.push(`这是第${i + 1}条数据`)
    }
    load()
})
</script>

<style scoped></style>