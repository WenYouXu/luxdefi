<template>
  <div class="order">

    <div class="headBg"></div>

    <div class="content">
      <div class="size50 b500">节点</div>
      <van-progress
        :percentage="50"
        :show-pivot="false"
        :stroke-width="7"
        color="#184AFF"
        track-color="#DEE6FF"
        style="border-radius: 8px; margin-top: 8px;width: 16vw;transform: rotate(-180deg);"
      >
      </van-progress>

      <div class="total">
        <div class="right">
          <div class="black b500 ">预购节点总价值</div>
          <span class="color2 size58 bold ml10">≈ 40000</span><span class="ml10">USDT</span>
        </div>
      </div>

      <div class="selection">
        <span>订单记录</span>
        <van-dropdown-menu style="width: 126px;display: inline-block;">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
const value1 = ref(0);
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
</script>

<style lang="scss" scoped>
.order {
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
  background: linear-gradient(180deg, #9FB4FF, #F5F7FA);
}
.content{
  position: relative;
  z-index: 1;
  padding-top: 20px;
  margin: 0px 34px;

  .total{
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right {
      width: 678px;
      height: 198px;
      padding: 26px 34px;
      box-sizing: border-box;
      border-radius: 38px;
      background-color: #FFFFFF;
      
    }
  }

}


.black {
  color: #000000;
}
.black2 {
  color: #3D3D3D;
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

.size35 {
  font-size: 35px;
}
.size50{
  font-size: 50px;
}
.size58{
  font-size: 58px;
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
.ml10{
  margin-left: 10px;
}
.ml36 {
  margin-left: 36px;
}
.ml42{
  margin-left: 42px;
}
.mt10 {
  margin-top: 10px;
}
.mt50 {
  margin-top: 50px;
}
</style>