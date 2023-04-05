<template>
    <div id="father">
        <!-- vue3 实现虚拟列表 -->
        <div id="box" @scroll="handleScroller" ref="boxRef">
            <!-- 空盒子 -->
            <div id="empty"></div>
            <!-- 数据 -->
            <div id="list" ref = "listRef">
                <div id="tableItem" v-for="(item, index) in listData" :key="index">
                    {{ item }}
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
const boxRef = ref<HTMLDivElement>()
const listRef = ref<HTMLDivElement>()
// 每一项的高度
const itemHeight = 24
// 视口高度
const containerHeight = 480
// 可以放的项数
const itemCount = Math.floor(containerHeight / itemHeight)
// 开始的条数
const start = ref(0)
// 空盒子高度
let emptyHeight = ref('')
// 数据
let tableData = ref([])
const listData = computed(() => {
    return tableData.value.slice(start.value, start.value + itemCount)
})
const handleScroller = (e) => {
    console.log(e.target.scrollTop);
    const scroll = boxRef.value.scrollTop
    console.log(scroll);
    start.value = Math.floor(scroll / itemHeight)
    // 把卷上去的元素平移回来，很重要！
    listRef.value.style.transform = `translateY(${scroll}px)`
}
onMounted(() => {
    for (let i = 0; i < 10000; i++) {
        tableData.value.push(`这是第${i + 1}条数据`)
    }
    // 空列表的高度
    emptyHeight.value = (tableData.value.length * itemHeight).toString() + 'px'
})
</script>
<style scoped >
#father{
    display: flex;
    justify-content: center;
}
#box {
    height: 500px;
    width: 200px;
    border: 2px solid red;
    overflow-y: scroll;
    position: relative;
    top: 0;
}
#empty {
    height: v-bind(emptyHeight);
}
#list {
    position: absolute;
    top: 0;
}
#tableItem {
    height: 24px;
}
</style>