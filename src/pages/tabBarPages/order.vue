<template>
  <div class="order">
    <div class="pointPage" v-if="page === 'point'">
      <div class="headBg"></div>
      <div class="bottomBg"></div>

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
          <van-dropdown-menu :overlay="false">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>

        <div class="list">
          <div class="listUl">
            <div class="listLi">
              <div>
                <div class="b500">顶尖节点-挖矿节点套餐</div>
                <div class="color2">30000USDT</div>
              </div>
              <div class="grey">2024-02-15 14:46</div>
            </div>
            <div class="listLi">
              <div>
                <div class="b500">顶尖节点-挖矿节点套餐</div>
                <div class="color2">30000USDT</div>
              </div>
              <div class="grey">2024-02-15 14:46</div>
            </div>
            <div class="listLi">
              <div>
                <div class="b500">顶尖节点-挖矿节点套餐</div>
                <div class="color2">30000USDT</div>
              </div>
              <div class="grey">2024-02-15 14:46</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="pledgePage" v-if="page === 'pledge'">
      <div class="headBg"></div>
      <div class="bottomBg"></div>

      <div class="content">
        <div class="size50 b500">理财质押</div>
        <van-progress
          :percentage="50"
          :show-pivot="false"
          :stroke-width="7"
          color="#2ED8C1"
          track-color="#DEE6FF"
          style="border-radius: 8px; margin-top: 8px;width: 16vw;"
        >
        </van-progress>

        <div class="total">
          <div class="right">
            <div class="black b500 ">质押理财订单总待释放</div>
            <span class="color1 size58 bold ml10">≈ 1500</span><span class="ml10">USDT</span>
          </div>
        </div>

        <div class="selection">
          <span>订单记录</span>
          <van-dropdown-menu :overlay="false">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>

        <div class="list">
          <div class="listUl">
            <div class="listLi">
              <div>
                <div class="b500">顶尖节点-挖矿节点套餐</div>
                <div class="color2">30000USDT</div>
              </div>
              <div class="grey">2024-02-15 14:46</div>
            </div>
            <div class="listLi">
              <div>
                <div class="b500">顶尖节点-挖矿节点套餐</div>
                <div class="color2">30000USDT</div>
              </div>
              <div class="grey">2024-02-15 14:46</div>
            </div>
            <div class="listLi">
              <div>
                <div class="b500">顶尖节点-挖矿节点套餐</div>
                <div class="color2">30000USDT</div>
              </div>
              <div class="grey">2024-02-15 14:46</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const page = ref('pledge');
const value1 = ref(0);
const option1 = [
  { text: '全部 ', value: 0 },
  { text: '新款商品 ', value: 1 },
  { text: '活动商品 ', value: 2 },
];
</script>

<style lang="scss" scoped>
.order {
  // position: relative;
  // margin-bottom: 250px;
}
.pointPage {
  min-height: 100vh;
  position: relative;
  .headBg{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    height: 212px;
    width: 750px;
    background: linear-gradient(180deg, #9FB4FF, #F5F7FA);
  }
  .bottomBg {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    height: 1049px;
    width: 750px;
    background: url('@/assets/pointBg.png') ;
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

    .selection {
      margin-top: 42px;
      font-weight: 500;
      :deep(.van-dropdown-menu) {
        min-width: 126px;
        display: inline-block;
        margin-left: 20px;
        .van-dropdown-item__content {
          max-width: 180px;
        }
        .van-dropdown-menu__bar{
          background-color: #184AFF;
          border-radius: 26px;
          padding-right: 26px;
          padding-left: 10px;
        }
        .van-popup{
          background: #FFFFFF;
          border-radius: 16px;
        }
        .van-dropdown-menu__title--active {
          color: #FFFFFF;
        }
        .van-dropdown-menu__title{
          color: #FFFFFF;
          font-size: 24px;
        }
        .van-dropdown-item__option--active {
          color: #000000;
          font-size: 24px;
          .van-dropdown-item__icon{
            color: #184AFF;
          }
        }
        .van-cell {
          font-size: 18px;
          white-space: normal;
        }
        .van-popup--top {
          left: 170px;
        }
        .van-dropdown-menu__title:after{
          // content: none ;
          top: 40%;
        }
      }

    }

    .list {
      height: 865px;
      margin-top: 38px;
      border-radius: 38px;
      background-color: #fff;
      .listUl {
        padding: 0px 38px;
        .listLi {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 38px 0px;
          border-bottom: 1px dashed #E8E8E8;
        }
      }
    }
  }
}

.pledgePage {
  position: relative;
  min-height: 100vh;
  .headBg{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    height: 212px;
    width: 750px;
    background: linear-gradient(180deg, #E1FFFB, #F5F7FA);
  }
  .bottomBg {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    height: 1049px;
    width: 750px;
    background: url('@/assets/pledgeBg.png') ;
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

    .selection {
      margin-top: 42px;
      font-weight: 500;
      :deep(.van-dropdown-menu) {
        min-width: 126px;
        display: inline-block;
        margin-left: 20px;
        .van-dropdown-item__content {
          max-width: 180px;
        }
        .van-dropdown-menu__bar{
          background-color: #2ED8C1;
          border-radius: 26px;
          padding-right: 26px;
          padding-left: 10px;
        }
        .van-popup{
          background: #FFFFFF;
          border-radius: 16px;
        }
        .van-dropdown-menu__title--active {
          color: #FFFFFF;
        }
        .van-dropdown-menu__title{
          color: #FFFFFF;
          font-size: 24px;
        }
        .van-dropdown-item__option--active {
          color: #000000;
          font-size: 24px;
          .van-dropdown-item__icon{
            color: #2ED8C1;
          }
        }
        .van-cell {
          font-size: 18px;
          white-space: normal;
        }
        .van-popup--top {
          left: 170px;
        }
        .van-dropdown-menu__title:after{
          // content: none ;
          top: 40%;
        }
      }

    }

    .list {
      height: 865px;
      margin-top: 38px;
      border-radius: 38px;
      background-color: #fff;
      .listUl {
        padding: 0px 38px;
        .listLi {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 38px 0px;
          border-bottom: 1px dashed #E8E8E8;
        }
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