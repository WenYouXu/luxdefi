<template>
  <div class="asset">

    <div class="headBg"></div>

    <div class="content">
      <!-- 头顶卡片 -->
      <div class="card">
        <div class="size26">总收益折合 LUX</div>
        <div class="size45 b500">0.00</div>
        <div class="rate1">+0%</div>
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
          <div class="size24 ">可用余额(USDT)</div>
          <div class="black2 size45 b500">0.00</div>
          <div class="btn">
            <div class="left">提币</div>
            <div class="right" @click="jump('/charge')">存入</div>
          </div>
        </div>
        <div class="lux">
          <div class="size24 ">可用余额(LUX)</div>
          <div class="black2 size45 b500">0.00</div>
          <div class="btn">
            <div class="left">提币</div>
            <div class="right">存入</div>
          </div>
        </div>
      </div>

      <div class="rate">
        <div class="left">
          <div class="node">Promotion node</div>
        </div>
        <div class="right">
          <div class="black size32 b500">LUX/USDT</div>
          <div class="color2 size35 bold ml10">≈ 0.0850</div>
        </div>
      </div>

      <div class="manageAward">
        <div class="top">
          <div>理财质押奖励</div>
          <div class="color2">></div>
        </div>
        <div class="bottom">
          <div>分红比例: <span class="color2 bold">0%</span></div>
          <div class="total">总收益: <span class="color2 bold">0</span></div>
        </div>
      </div>

      <div class="pointAward">
        <div class="top">
          <div>节点奖励</div>
          <div class="color2">></div>
        </div>
        <div class="bottom">
          <div>分红比例: <span class="color2 bold">0%</span></div>
          <div class="total">总收益: <span class="color2 bold">0</span></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const jump = (path) => {
  router.push({path})
}
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
  background: linear-gradient(180deg, #9FB4FF, #F5F7FA);
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
    .rate1{
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
      padding: 32px 25px;
      box-sizing: border-box;
      background-color: #DEE6FF;
      border-radius: 38px;
      .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 36px;
        font-weight: 500;
        .left {
          width: 130px;
          height: 68px;
          background-color: #184AFF;
          color: #FFFFFF;
          line-height: 68px;
          text-align: center;
          border-radius: 25px;
        }
        .right {
          width: 130px;
          height: 68px;
          border: 1px solid #184AFF;
          color: #184AFF;
          line-height: 68px;
          text-align: center;
          border-radius: 25px;
        }
      }
    }
    .lux{
      width: 328px;
      height: 276px;
      padding: 32px 25px;
      box-sizing: border-box;
      background-color: #BCF1EA;
      border-radius: 38px;
      .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 36px;
        font-weight: 500;
        .left {
          width: 130px;
          height: 68px;
          background-color: #2ED8C1;
          color: #FFFFFF;
          line-height: 68px;
          text-align: center;
          border-radius: 25px;
        }
        .right {
          width: 130px;
          height: 68px;
          border: 1px solid #2ED8C1;
          color: #2ED8C1;
          line-height: 68px;
          text-align: center;
          border-radius: 25px;
        }
      }
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
      padding-left: 26px;
      padding-top: 20px;
      box-sizing: border-box;
      border-radius: 38px;
      background-color: #184AFF;
      color: #ffffff;
      font-size: 30px;
      font-weight: 600;
      .node {
        max-width: 158px;
        line-height: 35px;
      }
    }
    .right {
      width: 328px;
      height: 156px;
      padding: 26px 34px;
      box-sizing: border-box;
      border-radius: 38px;
      background-color: #FFFFFF;
      
    }
  }

  .manageAward{
    margin-top: 24px;
    width: 678px;
    height: 186px;
    padding: 28px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 38px;
    color: #000000;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 27px;
      padding-bottom: 22px;
      border-bottom: 1px dashed #E8E8E8;
    }
    .bottom{
      margin-top: 26px;
      display: flex;
      align-items: center;
      font-size: 27px;
      .total{
        margin-left: 190px;
      }
    }
  }

  .pointAward{
    margin-top: 24px;
    width: 678px;
    height: 186px;
    padding: 28px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 38px;
    color: #000000;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 27px;
      padding-bottom: 22px;
      border-bottom: 1px dashed #E8E8E8;
    }
    .bottom{
      margin-top: 26px;
      display: flex;
      align-items: center;
      font-size: 27px;
      .total{
        margin-left: 190px;
      }
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