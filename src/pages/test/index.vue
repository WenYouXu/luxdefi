<template>
  <div class="home">
    lalala
    <van-button type="primary" @click="Changetheme('pink')">pink</van-button>
    <van-button type="primary" @click="Changetheme('blue')">blue</van-button>
  </div>
</template>

<script setup>
  import { themeColors } from '../../styles/theme'; // 引入主题配置文件
  const Changetheme = (theme)=>{
    console.log(theme);
    const selectedTheme = themeColors[theme];
    console.log(selectedTheme);
    for(const [property,value] of Object.entries(selectedTheme)) {
      document.documentElement.style.setProperty(property,value);
    }
  }
</script>

<style lang="scss" scoped>
.home {
  // color:var(--font-color) ;
  font-size: 30px;
}
</style>