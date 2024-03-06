<template>
  <div class="asset">

    <div class="headBg"></div>

    <div class="content">
      <!-- 头顶卡片 -->
      <div class="card">
        <div class="size26">总收益折合 LUX</div>
        <div class="size45 b500">0.00</div>
        <div class="rate">+0%</div>
        <div class="f-sb-c size24 mt50"><div>已产出</div><div>总产值</div></div>
        <van-progress
          :percentage="30"
          :show-pivot="false"
          :stroke-width="6"
          color="#36DCC5"
          track-color="#FFFFFF"
          style="border-radius: 8px; margin-top: 8px;"
        >
        </van-progress>
        <div class="f-sb-c size24 mt10"><div>0 USDT</div><div>0 USDT</div></div>
      </div>

      <div class="hashrate">
        <div class="">联合挖矿有效算力</div>
        <div class="color2">0T ></div>
      </div>

      <div class="balance">
        <div class="usdt">

        </div>
        <div class="lux">

        </div>
      </div>

      <div class="rate">
        <div class="left">

        </div>
        <div class="right">

        </div>
      </div>

      <div class="manageAward"></div>

      <div class="pointAward"></div>
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
    // background-image: url('@/assets/packageBg2.png');
    // background-size: 100% 100%;
    background: #184AFF;
    border-radius: 38px;
    color: #ffffff;
    .rate{
      width: 147px;
      height: 45px;
      border-radius: 23px;
      background-color: rgba($color: #FFFFFF, $alpha: .4);
      line-height: 45px;
      text-align: center;
    }
  }
  .hashrate{
    width: 678px;
    height: 116px;
    padding: 0 35px;
    box-sizing: border-box;
    margin-top: 24px;
    border-radius: 38px;
    background-color: #FFFFFF;
    font-size: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .balance{
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .usdt{
      width: 328px;
      height: 276px;
      background-color: #DEE6FF;
      border-radius: 38px;
    }
    .lux{
      width: 328px;
      height: 276px;
      background-color: #BCF1EA;
      border-radius: 38px;
    }
  }
  .rate{
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 328px;
      height: 156px;
      border-radius: 38px;
      background-color: #184AFF;
    }
    .right {
      width: 328px;
      height: 156px;
      border-radius: 38px;
      background-color: #FFFFFF;
    }
  }

  .manageAward{
    margin-top: 24px;
    width: 678px;
    height: 186px;
    background-color: #FFFFFF;
    border-radius: 38px;
  }

  .pointAward{
    margin-top: 24px;
    width: 678px;
    height: 186px;
    background-color: #FFFFFF;
    border-radius: 38px;
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
.size45{
  font-size: 45px;
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
.mt10 {
  margin-top: 10px;
}
.mt50 {
  margin-top: 50px;
}
</style>