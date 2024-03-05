<template>
  <div class="asset">

    <div class="headBg"></div>

    <div class="content">
      <!-- 头顶卡片 -->
      <div class="card">
        
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

</script>

<style lang="scss" scoped>
.asset {
  position: relative;
  margin-bottom: 250px;
}
.headBg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 212px;
  width: 750px;
  background: linear-gradient(180deg, #9FB4FF, #ffffff);
}
.content{
  position: relative;
  z-index: 1;
  padding-top: 20px;
  margin: 0px 34px;
  .card{
    padding: 36px;
    padding-top: 46px;
    box-sizing: border-box;
    width: 678px;
    height: 398px;
    background-image: url('@/assets/packageBg2.png');
    background-size: 100% 100%;
  }
}


.black {
  color: #000000;
}
.grey {
  color: #A5A5A5;
}
.color1 {
  color: #36DCC5;
}
.color2 {
  color: #184AFF;
}
.size24 {
  font-size: 24px;
}
.size26 {
  font-size: 26px;
}
.size32 {
  font-size: 32px;
}
.size35 {
  font-size: 35px;
}

.bold {
  font-weight: bold;
}
.b500 {
  font-weight: 500;
}
.center{
  text-align: center;
}

.mr10{
  margin-right: 10px;
}
.ml36 {
  margin-left: 36px;
}
.ml42{
  margin-left: 42px;
}
.mt20 {
  margin-top: 20px;
}
.mt26 {
  margin-top: 26px;
}
.mt50 {
  margin-top: 50px;
}
.mt70 {
  margin-top: 70px;
}
.mt36 {
  margin-top: 36px;
}
</style>