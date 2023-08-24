<template>
    <div>
        <h1>School组件</h1>
        <hr>
        <Student :name="schoolName" :age="1952" @onChange="handleGetValue">
            <template #header="headerProps">
                {{ headerProps.text }}
            </template>

        </Student>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, provide } from 'vue';
import Student from '../Student/index.vue'
const schoolName = ref<string>("沈阳东北")
const handleGetValue = (val: any) => {
    console.log("getValue", val)
}

// 依赖注入传参
const provideInfo = reactive({
    name: 'provideInfoName',
    value: 'provideInfoValue'
})
provide('provideInfo', provideInfo)
</script>

<style scoped></style>