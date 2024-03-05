<!-- <template>
    <div>
        <Child :money="money" :getChildInfo="getChildInfo" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue';

let money = ref(100)
function getChildInfo(val) {
    console.log("收到子组件的钱", val)
}
</script>

<style scoped></style> -->

<!-- <template>
    <div>
        <Child :money="money" @getChildInfo="getChildInfo" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue';

let money = ref(100)
function getChildInfo(val: number) {
    console.log("收到子组件的钱", val)
}
</script>

<style scoped></style> -->
<!-- <template>
    <div>
        <Child v-model:money="money" />
    </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

let money = ref('100')
</script>

<style scoped></style> -->

<template>
    <div>
        <Child v-model:money="money" />
    </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

let money = ref('100')
</script>

<style scoped></style>