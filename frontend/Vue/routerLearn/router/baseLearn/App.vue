<template>
  <!-- <Father></Father>
  <hr>
  <Bro2></Bro2>
  <Bro1 />
  <hr>
  <tsx></tsx>
  <hr> -->
  <router-link to="/home"><el-button type="primary" class="btn">Home页面</el-button></router-link>
  <router-link to="/virturalList" ><el-button type="primary" class="btn">虚拟列表</el-button></router-link>
  <router-link to="/blockrender"><el-button type="primary" class="btn">分片渲染</el-button></router-link>
  <router-view></router-view>
</template>
<script setup lang="ts">
import Father from './components/FatherAndGrandSon/Father.vue';
import Bro2 from './components/Brothers/Bro2.vue';
import Bro1 from './components/Brothers/Bro1.vue';
import tsx from './App'
import VirturalList from './components/VirtualList/VirturalList.vue';

</script>


<style scoped>
button{
  margin-right: 20px;
}
</style>
