<template>
  <div class="output">
    <div class="banner">
      <div class="topGap"></div>
      <div class="tabs">
        <div class="tabItem" :class="{ 'activeTab' : activeIndex === 0 }" @click="activeIndex = 0">USDT</div>
        <div class="tabItem" :class="{ 'activeTab' : activeIndex === 1 }" @click="activeIndex = 1">LUX</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const activeIndex = ref(0);
</script>

<style lang="scss" scoped>
.output {
  margin-bottom: 250px;
  .topGap{
    height: 56px;
  }
}
.banner{
  height: 430px;
  width: 750px;
  background-image: url('@/assets/outputBg.png');
  background-size: 100% 100%;
}
  .tabs {
    margin: 0 auto;
    // margin-top: 20px;
    width: 422px;
    height: 82px;
    padding: 0 4px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 40px;
    opacity: 0.28;
    .tabItem {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 202px;
      height: 72px;
      border-radius: 35px;
    }
    .activeTab {
      background: #2ED8C1;
      transition: background-color 0.5s ease; 
    }
  }
</style>