<template>
  <h1>Hello Router!</h1>
  <br>
  <Father></Father>
  <hr>
  <Bro2></Bro2>
  <Bro1 />
  <hr>
  <tsx></tsx>
</template>
<script setup lang="ts">
import Father from './components/FatherAndGrandSon/Father.vue';
import Bro2 from './components/Brothers/Bro2.vue';
import Bro1 from './components/Brothers/Bro1.vue';
import tsx from './App'

// import Father from './'
</script>


<style scoped></style>
