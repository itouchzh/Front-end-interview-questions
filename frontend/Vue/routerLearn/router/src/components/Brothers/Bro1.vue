<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import Bus from '../../Bus'
Bus.on('on-click', (value) => {
    console.log(value);
})
</script>

<style scoped></style>