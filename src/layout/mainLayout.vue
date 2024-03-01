<template>
  <div>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import foot from '@/components/foot.vue'
  
</script>

<style lang="scss" scoped>

</style>