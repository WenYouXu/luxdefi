<template>
  <div class="charge">
    <div class="headBg"></div>

    <div class="content">
      <div class="nav b500" @click="back()"> &lt; 提取</div>
      <div class="inner">
        <div class="b500 mt40">提取地址</div>
        <div class="qrAddress">
          <div class="string">0xba8h8273hd328h2783rh23rg32urg3uy231g</div>
          <img src="@/assets/copy_blue.png" alt="">
        </div>

        <div class="b500 mt40">链名称</div>
        <div class="qrAddress">
          <img class="tick" src="@/assets/tick_blue.png" alt="">
          <div class="string">ERC20</div>
        </div>

        <div class="b500 mt40">提取数量</div>
        <div class="amount">
          <input placeholder="请输入数量" type="text">
          <div class="unit">USDT</div>
        </div>
        <div class="f-sb-c mt20 grey">
          <div>可用数量:0 USDT</div>
          <div>提现手续费： 2%</div>
        </div>

        <div class="confirm">确认提取</div>
        <div class="record">提取记录</div>
      </div>
    </div>

    
  </div>
</template>

<script>
  export default {
    
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
      .qrAddress{
        margin: 0 auto;
        margin-top: 20px;
        height: 110px;
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
        .tick {
          width: 44px;
          height: 44px;
          margin-right: 14px;
        }
      }
      .amount {
        margin: 0 auto;
        margin-top: 20px;
        height: 110px;
        width: 652px;
        background-color: #FFFFFF;
        border-radius: 20px;
        padding: 0 28px;
        box-sizing: border-box;
        line-height: 114px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          height: 90px;
          border: none;
        }
        .unit {
          color: #184AFF;
          font-weight: 600;
        }
      }
      .confirm {
        width: 652px;
        height: 104px;
        line-height: 104px;
        text-align: center;
        background: #184AFF;
        color: #FFFFFF;
        border-radius: 52px;
        margin: 0 auto;
        margin-top: 105px;
        font-weight: 500;
      }
      .record {
        width: 652px;
        height: 104px;
        line-height: 104px;
        text-align: center;
        color: #666666;
        margin: 0 auto;
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

.grey {
  color: #767676;
}

.b500 {
  font-weight: 500;
}

.mt40 {
  margin-top: 44px;
}
.mt20 {
  margin-top: 20px;
}
</style>