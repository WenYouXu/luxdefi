<template>
  <div class="orderDetail">
    <div class="pledge" v-if="page === 'pledge'">
      <div class="detailBg"></div>
      <div class="content">
        <div class="nav"> &lt;  质押下单</div>

        <div class="banTitle">尽享292%APY质押奖励</div>

        <div class="info">
          <div>支付信息</div>
          <div class="line"></div>
          <div class="item">
            <div>资产</div>
            <div class="f-c-c">
              <img src="@/assets/TCorn.png" alt="">
              <span>USDT</span>
            </div>
          </div>
          <div class="item">
            <div>确认购买数额</div>
            <div class="color1">1000USDT</div>
          </div>
        </div>

        <div class="submit">确认</div>
      </div>
    </div>
    <div class="point" v-if="page === 'point'">
      <div class="detailBg"></div>
      <div class="content">
        <div class="nav"> &lt;  节点下单</div>

        <div class="banTitle">尽享292%APY质押奖励</div>

        <div class="info">
          <div>支付信息</div>
          <div class="line"></div>
          <div class="item">
            <div>资产</div>
            <div class="f-c-c">
              <img src="@/assets/TCorn.png" alt="">
              <span>USDT</span>
            </div>
          </div>
          <div class="item">
            <div>确认购买数额</div>
            <div class="color1">1000USDT</div>
          </div>
        </div>

        <div class="submit">确认</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const page = ref('point')
  
</script>

<style lang="scss" scoped>
.orderDetail {
  position: relative;
}

.pledge {
  .detailBg{
    position: absolute;
    z-index: 0;
    height: 370px;
    width: 750px;
    background: url('@/assets/orderDetailBg.png');
    background-size: 100% 100%;
  }
  .content {
    width: 750px;
    position: relative;
    z-index: 1;
    padding: 0 36px;
    padding-top: 30px;
    box-sizing: border-box;
    color: #000000;
    .nav {
      font-weight: 500;
      font-size: 32px;
    }
    .banTitle{
      margin-top: 58px;
      font-size: 40px;
    text-align: center;
    font-weight: 600;
    }
    .info{
      width: 678px;
      height: 354px;
      background-color: #fff;
      margin-top: 42px;
      border-radius: 38px;
      padding: 40px 32px;
      box-sizing: border-box;
      font-size: 27px;
      font-weight: 500;
      .line {
        margin-top: 28px;
        border-bottom: 1px dashed #E8E8E8;
      }
      .item {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          margin-right: 12px;
          width: 54px;
          height: 54px;
        }
      }
    }
    .submit{
      margin: 0 auto;
      margin-top: 52px;
      width: 653px;
      height: 104px;
      line-height: 104px;
      color: #fff;
      background-color: #2ED8C1;
      text-align: center;
      border-radius: 52px;
      font-weight: 500;
    }
  }
}

.point {
  .detailBg{
    position: absolute;
    z-index: 0;
    height: 370px;
    width: 750px;
    background: url('@/assets/pointDetailBg.png');
    background-size: 100% 100%;
  }
  .content {
    width: 750px;
    position: relative;
    z-index: 1;
    padding: 0 36px;
    padding-top: 30px;
    box-sizing: border-box;
    color: #000000;
    .nav {
      font-weight: 500;
      font-size: 32px;
    }
    .banTitle{
      margin-top: 58px;
      font-size: 40px;
    text-align: center;
    font-weight: 600;
    }
    .info{
      width: 678px;
      height: 354px;
      background-color: #fff;
      margin-top: 42px;
      border-radius: 38px;
      padding: 40px 32px;
      box-sizing: border-box;
      font-size: 27px;
      font-weight: 500;
      .line {
        margin-top: 28px;
        border-bottom: 1px dashed #E8E8E8;
      }
      .item {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          margin-right: 12px;
          width: 54px;
          height: 54px;
        }
      }
    }
    .submit{
      margin: 0 auto;
      margin-top: 52px;
      width: 653px;
      height: 104px;
      line-height: 104px;
      color: #fff;
      background-color: #184AFF;
      text-align: center;
      border-radius: 52px;
      font-weight: 500;
    }
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
.size36 {
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