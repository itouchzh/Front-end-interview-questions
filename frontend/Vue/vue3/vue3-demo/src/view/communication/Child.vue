<!-- <template>
    <div>
        <button @click="count++">{{ count }}</button>
        <div>父组件传过来的钱：{{ money }}</div>
        <button @click="getChildInfo(money)">给父组件传钱</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
    money: number,
    getChildInfo: (val: number) => void
}>()
let count = ref(0)
</script>

<style scoped></style> -->


<!-- <template>
    <div>
        <button @click="count++">{{ count }}</button>
        <div>父组件传过来的钱：{{ money }}</div>
        <button @click="emit('getChildInfo', money)">给父组件传钱</button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
defineProps<{
    money: number,
}>()
const emit = defineEmits()

let count = ref(0)
</script> -->

<!-- <template>
    <div>
        <input type="text" :value="money" @input="emit('update:money', (<HTMLInputElement>$event.target).value)" />
    </div>
</template>

<script setup lang="ts">

defineProps<{
    money: string
}>()

const emit = defineEmits(['update:money'])
</script>

<style scoped></style> -->

<template>
    <div>
        <input type="text" :value="money" @input="emit('update:money', (<HTMLInputElement>$event.target).value)" />
    </div>
</template>

<script setup lang="ts">

defineProps<{
    money: string
}>()

const emit = defineEmits(['update:money'])
</script>

<style scoped></style>