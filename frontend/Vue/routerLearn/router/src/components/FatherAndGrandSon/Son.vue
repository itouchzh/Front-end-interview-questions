<template>
    <div>
        <h1>我是儿子组件</h1>
        <hr>
        <div>儿子组件接收参数：{{ count }}</div>
    </div>
</template>

<script setup lang="ts">
import { inject, ref, reactive, Ref, watch, watchEffect } from 'vue';
const count = inject<Ref<number>>('count', ref(1))
watch(count, (oldValue, newValue) => {
    console.log(oldValue, newValue);
})
const number = reactive({
    name: 'paul',
    age: 23
})
// 返回一个stop函数停止监听
const stop = watchEffect(() => {
    // 可以在里面进行防抖
    const debouce = (fn, delay) => {
        let timer = null;
        return function () {
            clearInterval(timer)
            timer = setInterval(() => {
                fn.apply(this, arguments)
            }, delay)
        }
    }
}, {
    // flush?: 'pre' | 'post' | 'sync'; pre 组件更新前执行，sync强制效果始终同步触发，post组件更新后执行
    flush:'post'
})

</script>

<style scoped></style>