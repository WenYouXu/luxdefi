<template>
  <div class="charge">
    <div class="headBg"></div>

    <div class="content">
      <div class="nav b500" @click="goBack()"> &lt; 存入</div>
      <div class="inner">
        <div class="b500">网络</div>
        <div class="netUl">
          <div class="netLi">
            <img src="@/assets/english.png" alt="">
            <span>LUX</span>
          </div>
        </div>
        <div class="b500 mt40">地址</div>
        <div class="qrCode">

        </div>
        <div class="qrAddress">
          <div class="string">0xba8h8273hd328h2783rh23rg32urg3uy231g</div>
          <img src="@/assets/copy_blue.png" alt="">
        </div>
        <div class="download">下载二维码</div>
      </div>
      <div class="tips">
        <div class="b500">提醒</div>
        <div class="tip">为了你的资产安全，请勿往除KC地址以外的其他地址
  充值，避免永久丢失资产。</div>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.charge {
  font-size: 27px;
  color: #000000;
  position: relative;
  .headBg {
    position: absolute;
    top: 100;
    left: 0;
    z-index: 0;
    height: 212px;
    width: 750px;
    background: linear-gradient(180deg, #DEE4FA, #F5F7FA);
  }
  .content {
    position: relative;
    z-index: 1;
    padding: 32px 40px;
    width: 750px;
    box-sizing: border-box;
    .nav {
      font-size: 32px;
    }
    .inner {
      position: relative;
      margin: 0 auto;
      margin-top: 32px;
      .netUl {
        margin-top: 20px;
        display: flex;
        .netLi {
          width: 194px;
          height: 112px;
          background-color: #FFFFFF;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            margin-right: 14px;
            width: 46px;
            height: 46px;
            border-radius: 50%;
          }
        }
      }
      .qrCode{
        margin: 0 auto;
        margin-top: 40px;
        width: 346px;
        height: 346px;
        border-radius: 25px;
        background-color: #FFFFFF;
      }
      .qrAddress{
        margin: 0 auto;
        margin-top: 30px;
        height: 114px;
        width: 652px;
        background-color: #FFFFFF;
        border-radius: 20px;
        padding: 0 28px;
        box-sizing: border-box;
        line-height: 114px;
        display: flex;
        align-items: center;
        .string {
          white-space: normal;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        img {
          width: 48px;
          height: 48px;
        }
      }
      .download {
        width: 652px;
        height: 104px;
        line-height: 104px;
        text-align: center;
        background: #184AFF;
        color: #FFFFFF;
        border-radius: 52px;
        margin: 0 auto;
        margin-top: 38px;
        font-weight: 500;
      }
    }
    .tips {
      margin-top: 76px;
      .tip {
        margin-top: 16px;
        color: #A5A5A5;
      }
    }
  }
}

.b500 {
  font-weight: 500;
}

.mt40 {
  margin-top: 40px;
}
</style>