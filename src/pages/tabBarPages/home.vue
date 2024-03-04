<template>
  <div class="home">

    <div class="banner">
      <div class="bannerTop">
        <div class="f-jc-c">
          <div class="avatar"></div>
          <span class="name">Saber</span>
        </div>
        <img class="setting" src="../../assets/setting.png" alt="">
      </div>
      <div class="bannerBottom"></div>
    </div>

    <!-- 信息 -->
    <div class="info mt36">
      <span class="black size32 bold">信息</span>
      <div class="f-sb-c mt26">
        <div class="infoBox1">
          <img class="cornImg" src="@/assets/luxcorn.png" alt="">
          <div class="center mt70">
            <span class="size26 b500">LUX</span>
            <div class="rate">
              0.055(+0%)
            </div>
            <span class="size24">市值:$5.50</span>
            <div class="line"></div>
            <div class="exchange">
              <span>马上兑换</span>
              <img src="@/assets/luxcorn.png" alt="">
            </div>
          </div>
        </div>

        <div class="infoBox2">
          <div class="mt50 center size26 b500">当前奖励阶段</div>
          <div class="line"></div>
          <div class="current">
            <div>当前</div>
            <div>200,000 LUX</div>
          </div>
          <van-progress
            :percentage="30"
            :show-pivot="false"
            :stroke-width="6"
            color="#36DCC5"
            track-color="#184AFF"
            style="border-radius: 8px; margin-top: 8px;"
          >
          </van-progress>
          <div class="percent">
            <div class="color1 b500">30%</div>
            <div class="color2 b500">70%</div>
          </div>
        </div>
      </div>

      <div class="infoBox3">
        <div class="betweenItem">
          <div class="left">交易对</div>
          <div class="right"> <span class="bold">LUX</span>/USDT</div>
        </div>
        <div class="betweenItem">
          <div class="left">最新价</div>
          <div class="right"> <span class="bold">120.1</span></div>
        </div>
        <div class="f-sb-c mt26">
          <div class="chartLeft">
            <div>今日涨跌幅</div>
            <div class="chartNum">
              +10%
            </div>
          </div>
          <div id="myChart" style="width: 38vw;height: 18vw;"></div>
        </div>
          <table>
            <tr>
              <td>
                <div class="title">区块高度</div>
                <div class="num">1435260</div>
              </td>
              <td>
                <div class="title">最新区块时间</div>
                <div class="num">35秒前</div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="title">区块预计产量</div>
                <div class="num">1550</div>
              </td>
              <td>
                <div class="title">24h预计产量</div>
                <div class="num">1550</div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="title">全网总算力</div>
                <div class="num">1530</div>
              </td>
              <td>
                <div class="title">今日新增算力</div>
                <div class="num">538</div>
              </td>
            </tr>
        </table>
      </div>
    </div>

    <!-- 挖矿节点套产 -->
    <div class="package mt36">
      <span class="black size32 bold">挖矿节点套餐</span>
      <div class="pOne">
        <div class="pointNum">20/20</div>
        <div class="title">
          <img src="@/assets/luxcorn.png" alt="">
          <span class="size32 b500">顶尖节点</span>
        </div>
        <div class="ml42">
          <span class="size35 color1 bold mr10">30,000 USDT</span>
          <span class="grey size24">价格</span>
        </div>
        <div class="line"></div>
        <div class="tags">
          <span>1000T算力</span>
          <span class="ml42">5%业绩收益</span>
        </div>
        <div class="btn">立即购买</div>
      </div>
      <div class="pTwo">
        <div class="title">
          <img src="@/assets/luxcorn.png" alt="">
          <span class="size32 b500">全球节点</span>
        </div>
        <div class="ml42">
          <span class="size35 color2 bold mr10">30,000 USDT</span>
          <span class="grey size24">价格</span>
        </div>
        <div class="line"></div>
        <div class="tags">
          <span>5%业绩收益</span>
        </div>
        <div class="btn">立即购买</div>
      </div>
    </div>

    <!-- 质押池 -->
    <div class="pledge mt36">
      <span class="black size32 bold">质押池</span>
      <div class="content">
        <div class="title">
          <img src="@/assets/luxcorn.png" alt="">
          <span class="size26 b500">LUX协议</span>
        </div>
        <div class="num">
          <span class="grey">当前质押量</span>
          <span class="color2 b500">1,785,956.65236 USDT</span>
        </div>
        <div class="line"></div>
        <div class="data">
          <div class="dataItem">
            <div class="size24 black b500">100 USDT</div>
            <div class="size24 grey">最低</div>
          </div>
          <div class="dataItem">
            <div class="size24 color2 b500">4x</div>
            <div class="size24 grey">收益比例</div>
          </div>
          <div class="dataItem">
            <div class="size24 color2 b500">175.50%</div>
            <div class="size24 grey">年收益</div>
          </div>
        </div>
        <div class="btn">立即质押</div>
      </div>
    </div>
  </div>
</template>

<script setup>
 import * as echarts from 'echarts'
import {onMounted } from 'vue'
onMounted(() => {
  let myChart = echarts.init(document.getElementById("myChart"));
  myChart.setOption({
    xAxis: {
      show:false,
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    series: [
      {
        data: [0, 100, 200, 300, 420, 410, 410,410,420,440,460],
        type: 'line',
        areaStyle: {},
        symbol: 'none', // 设置为 'none' 隐藏折点
        color:{ //面积颜色
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#36DCC5'
          }, {
              offset: 1, color: '#FFFFFF'
          }],
          global: false // 缺省为 false
        }
      }
    ],
    lineStyle: { //折线颜色
      color: '#184AFF' 
    },
    grid: { //图表距离画布的边边的留白区
      top:'4px',
      left:'12px',
      right:'0px',
      bottom:'12px'
    }
  })
})
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 250px;
}
.banner{
  height: 360px;
  width: 750px;
  background: linear-gradient(180deg, #184AFF, #ffffff);
  .avatar{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
  }
  .name{
    color: #fff;
    font-size: 30px;
    margin-left: 12px;
  }
  .bannerTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 45px;
    margin-right: 36px;
    margin-left: 36px;
    margin-bottom: 46px;
  }
  .bannerBottom{
    width: 678px;
    height: 190px;
    background-color: rgb(213, 176, 239);
    border-radius: 38px;
    margin: 0 auto;
  }
  .setting {
    width: 44px;
    height: 44px;
    display: block;
  }
}

.info {
  margin: 0 36px;
  .infoBox1 {
    position: relative;
    width: 328px;
    height: 302px;
    border-radius: 38px;
    background-color: #DEE6FF;
    display: flex;
    align-items: center;
    flex-direction: column;
    .cornImg{
      position: absolute;
      left: 50%;
      top: -10px;
      transform: translate(-50%);
      width: 72px;
      height: 72px;
      border: 6px solid #DEE6FF;
      border-radius: 50%;
    }
    .rate{
      width: 278px;
      height: 50px;
      background-color: #CFDAFB;
      border-radius: 14px;
      color: #184AFF;
      font-size: 26px;
      line-height: 50px;
      font-weight: 500;
    }
    .line{
      position: absolute;
      bottom: 78px;
      left: 0;
      width: 328px;
      height: 1px;
      background-color: #C1CDF2;
    }
    .exchange{
      color: #184AFF;
      font-size: 24px;
      margin-top: 26px;
      font-weight: 500;
      img{
        width: 7px;
        height: 14px;
        margin-left: 10px;
      }
    }
  }
  .infoBox2{
    width: 328px;
    height: 302px;
    border-radius: 38px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 0 28px;
    .line{
      width: 266px;
      height: 0;
      border-top: 1px dashed #E8E8E8;
      margin-top: 36px;
    }
    .current{
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666666;
      font-size: 24px;
    }
    .percent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
    }
  }
  .infoBox3{
    margin-top: 24px;
    width: 678px;
    height: 832px;
    border-radius: 38px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 28px;
    .betweenItem{
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        color: #A5A5A5;
        font-size: 24px;
      }
      .right {
        color: #000000;
        font-size: 26px;
      }
    }
    .chartLeft{
      color: #A5A5A5;
      font-size: 24px;
      .chartNum{
        margin-top: 28px;
        width: 158px;
        height: 50px;
        background: #2ED8C1;
        border-radius: 96px 96px 96px 96px;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 27px;
        line-height:50px;
        text-align: center;
      }
    }

    table {
      margin-top: 38px;
      width: 620px;
      border-collapse: collapse;
    }
    td {
      padding-left: 20px;
      border: 1px dashed #E8E8E8;
      font-size: 26px;
      .title {
        color: #A5A5A5;
      }
      .num {
        color: #184AFF;
        font-weight: 500;
        margin-top: 8px;
      }
    }
    tr{
      height: 158px;
    }
    tr:last-child td {
      border-bottom: none;
    }
    td:first-child {
      border-left: none;
    }
    td:last-child {
      border-right: none;
    }
  }
}

.package {
  margin: 0 36px;
  .pOne {
    position: relative;
    margin-top: 26px;
    width: 678px;
    height: 420px;
    background-image: url('@/assets/packageBg1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .title{
      padding-top: 48px;
      margin-left: 42px;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 6px;
      }
    }
    .pointNum {
      position: absolute;
      top: 10px;
      right: 18px;
      width: 136px;
      height: 50px;
      border-radius: 96px;
      background-color: #E2F6F4;
      color: #2ED8C1;
      line-height: 50px;
      text-align: center;
    }
    .line {
      margin: 0 auto;
      margin-top: 30px;
      border-top: 1px dashed #2ED8C1;
      width: 620px;
    }
    .tags {
      margin-top: 42px;
      color: #A5A5A5;
      font-size: 24px;
      margin-left: 42px;
    }
    .btn {
      margin: 0 auto;
      margin-top: 42px;
      width: 600px;
      height: 86px;
      background-color: #2ED8C1;
      color: #FFFFFF;
      border-radius: 96px;
      line-height: 86px;
      font-size: 27px;
      text-align: center;
      font-weight: 500;
    }
  }
  .pTwo {
    margin-top: 26px;
    width: 678px;
    height: 420px;
    background-image: url('@/assets/packageBg2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .title{
      padding-top: 48px;
      margin-left: 42px;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        margin-right: 6px;
      }
    }
    .line {
      margin: 0 auto;
      margin-top: 30px;
      border-top: 1px dashed #184AFF;
      width: 620px;
    }
    .tags {
      margin-top: 42px;
      color: #A5A5A5;
      font-size: 24px;
      margin-left: 42px;
    }
    .btn {
      margin: 0 auto;
      margin-top: 42px;
      width: 600px;
      height: 86px;
      background-color: #184AFF;
      color: #FFFFFF;
      border-radius: 96px;
      line-height: 86px;
      font-size: 27px;
      text-align: center;
      font-weight: 500;
    }
  }
  
}

.pledge{
  margin: 0 36px;
  .content {
    margin-top: 26px;
    padding: 26px;
    padding-top: 32px;
    box-sizing: border-box;
    width: 678px;
    height: 420px;
    background-image: url('@/assets/packageBg2.png');
    background-size: 100% 100%;
    
    .title {
      img {
        width: 22px;
        height: 28px;
        margin-right: 10px;
      }
    }
    .num{
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;
    }
    .line {
      margin: 0 auto;
      margin-top: 30px;
      border-top: 1px dashed #E8E8E8;
      width: 620px;
    }
    .data {
      margin-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .dataItem{
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
    .btn {
      margin: 0 auto;
      margin-top: 42px;
      width: 600px;
      height: 86px;
      background-color: #184AFF;
      color: #FFFFFF;
      border-radius: 96px;
      line-height: 86px;
      font-size: 27px;
      text-align: center;
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