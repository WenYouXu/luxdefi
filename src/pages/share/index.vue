<template>
  <div class="share">
    <div class="headBg"></div>
    <div class="content">
      <div class="nav" @click="back()"> &lt; 我的直推</div>
      <div class="search">
        <img src="@/assets/search.png" alt="">
        <input type="text">
        <div class="btn">搜索</div>
      </div>

      <div class="myData">
        <span class="b500">superman</span>
        <div class="line"></div>
        <div class="dataItem">
          <div>个人理财质押</div>
          <div>0 USDT</div>
        </div>
        <div class="dataItem">
          <div>复利协议业绩</div>
          <div>0 USDT</div>
        </div>
        <div class="dataItem">
          <div>LUX复利业绩</div>
          <div>0 USDT</div>
        </div>
        <div class="dataItem">
          <div>总社区业绩</div>
          <div>0 USDT</div>
        </div>
        <div class="checkBtn">查看业绩</div>
      </div>

      <div class="myShare">
        <div class="top">
          <div>我的推荐用户</div>
          <div class="color2">3 人</div>
        </div>
        <div class="line"></div>
        <div class="dataItem">
          <div class="b500">0x2160e6b08xl566h</div>
          <div>2024-02-06 14:57</div>
        </div>
        <div class="dataItem">
          <div class="b500">0x2160e6b08xl566h</div>
          <div>2024-02-06 14:57</div>
        </div>
        <div class="dataItem">
          <div class="b500">0x2160e6b08xl566h</div>
          <div>2024-02-06 14:57</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.share {
  position: relative;
}
.headBg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 360px;
  width: 750px;
  background: linear-gradient(180deg, #2252FF, #456dfd05);
}
.content {
  position: relative;
  z-index: 1;
  padding-top: 32px;
  margin: 0px 34px;
  .nav{
    color: #fff;
    font-size: 32px;
    font-weight: 500;
  }
  .search{
    margin: 0 auto;
    margin-top: 52px;
    width: 678px;
    height: 88px;
    background-color: #fff;
    border-radius: 55px;
    display: flex;
    align-items: center;
    img {
      margin-left: 44px; 
      margin-right: 10px;
      width: 34px;
      height: 34px;
    }
    input {
      flex: 1; /* 自动撑开宽度 */
      border: none;
    }
    .btn {
      margin-right: 6px;
      width: 166px;
      height: 74px;
      border-radius: 46px;
      line-height: 74px;
      text-align: center;
      font-size: 30px;
      background: #184AFF;
      color: #fff;
    }
  }

  .myData {
    margin-top: 24px;
    width: 674px;
    height: 500px;
    padding: 25px 28px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 30px;
    font-size: 27px;
    .line {
      margin-top: 32px;
      border-bottom: 1px dashed #E8E8E8;
    }
    .dataItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
    }
    .checkBtn {
      margin: 0 auto;
      margin-top: 38px;
      width: 612px;
      height: 96px;
      line-height: 96px;
      text-align: center;
      color: #FFFFFF;
      font-size: 27px;
      font-weight: 500;
      background-color: #184AFF;
      border-radius: 96px;
    }
  }

  .myShare{
    margin-top: 24px;
    width: 674px;
    // height: 500px;
    padding: 25px 28px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 30px;
    font-size: 27px;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
    }
    .line {
      margin-top: 32px;
      border-bottom: 1px dashed #E8E8E8;
    }
    .dataItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      font-size: 24px;
    }
  }
}
.b500 {
  font-weight: 500;
}
.color2{
  color: #184AFF;
}
</style>