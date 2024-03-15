<template>
  <div class="mine">

    <div class="mineBg"></div>
    <div class="content">
      <div class="cardBg">
        <div class="top">
          <div class="left">
            <img src="@/assets/defaultAvatar.png" alt="">
            <div>
              <div class="size32">Saber</div>
              <div class="size24">tleiger@gmail.com</div>
            </div>
          </div>
          <div class="right">
            <img @click="jump('/langue')" src="@/assets/night.png" alt="">
            <img @click="jump('/setting')" src="@/assets/setting.png" alt="">
          </div>
        </div>
        <div class="bottom">
          邀请码:WKMJ65L
          <img src="@/assets/copy.png" alt="">
        </div>
      </div>
      
      <div class="dataBlock">
        <div class="top">
          <div class="activation">未激活</div>
          <div>加速  <span class="color2 size32 b500">0%</span></div>
        </div>
        <div class="line"></div>
        <div class="bottom">
          <div>
            <div class="size32 b500">0%</div>
            <div>管理奖励</div>
          </div>
          <div> 
            <div class="size32 b500">0%</div>
            <div>平级奖励</div>
          </div>
        </div>
      </div>

      <div class="lastLevel">
        上级用户钱包: <span class="color2">0x2160e6b08xl566h</span> 
      </div>

      <div class="share">
        <div class="top">
          <div>直推人数</div>
          <div>0 <span class="color2">></span></div>
        </div>
        <div class="line"></div>
        <div class="bottom">
          <div>
            <div class="size32 bold">邀请好友加入LUX Defi</div>
            <div class="color2 b500">与好友一起共享财富盛宴</div>
            <div class="shareBtn">邀请好友</div>
          </div>
          <img src="@/assets/shareBg.png" alt="">
        </div>
      </div>
      <!-- <div class="container">
        <div class="sliderbar">
          <p>sliderbar</p>
        </div>
        <div class="main">
          <p>maintain</p>
          <p>maintain</p>
          <p>maintain</p>
        </div>
        
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const jump = (path) => {
  router.push({path})
}
  
</script>

<style lang="scss" scoped>
.mine {
  position: relative;
}
.mineBg{
  position: absolute;
  z-index: 0;
  height: 360px;
  width: 750px;
  background: url('@/assets/mineBg.png');
  background-size: 100% 100%;
}
.content {
  margin: 0 36px;
}
.cardBg {
  position: relative;
  // left: 38px;
  top: 36px;
  margin: 0 auto;
  height: 249px;
  width: 674px;
  background: url('@/assets/mineCardBg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 26px 30px;
  box-sizing: border-box;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      color: white;
      line-height: 36px;
      img {
        margin-right: 20px;
        width: 76px;
        height: 76px;
      }
    }
    .right {
      img {
        width: 44px;
        height: 44px;
        margin-left: 22px;
      }
    }
  }
  .bottom{
    margin-top: 52px;
    color: #FFFFFF;
    width: 314px;
    height: 60px;
    background-color: #184AFF;
    border-radius: 30px;
    line-height: 60px;
    font-size: 27px;
    text-align: center;
    img {
      margin-left: 20px;
      width: 22px;
      height: 22px;
    }
  }
  
}
.dataBlock {
  position: relative;
  z-index: 2;
  margin-top: 60px;
  height: 290px;
  padding: 30px 34px;
  box-sizing: border-box;
  border-radius: 38px;
  background: linear-gradient(180deg, #D1DBFF 0%, #FFFFFF 30%);
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    font-size: 27px;
    margin-bottom: 28px;
    .activation{
      width: 226px;
      height: 68px;
      border-radius: 96px;
      border: 1px solid #777777;
      line-height: 68px;
      text-align: center;
      color: #7F7F7F;
      font-weight: 500;
    }
  }
  .line {
    border-bottom: 1px dashed #E8E8E8;
  }
  .bottom {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-size: 27px;
  }
}

.lastLevel {
  margin-top: 24px;
  height: 104px;
  padding: 0px 32px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  border-radius: 30px;
  line-height: 104px;
  font-size: 27px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.share{
  margin-top: 24px;
  height: 418px;
  
  background: linear-gradient( 180deg, #FFFFFF 0%, #D1DBFF 100%);
  border-radius: 30px;
  font-size: 27px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 32px 32px 32px;
    box-sizing: border-box;
  }
  .line {
    border-bottom: 1px dashed #E8E8E8;
  }
  .bottom {
    padding: 0px 0px 16px 32px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .shareBtn {
      margin-top: 25px;
      width: 228px;
      height: 86px;
      background: linear-gradient( 316deg, #184AFF 0%, #6D8BF8 100%);
      border-radius: 96px 96px 96px 96px;
      line-height: 86px;
      text-align: center;
      color: #FFFFFF;
      font-weight: 500;
    }

    img {
      width: 305px;
      height: 288px;
    }
  }
  
}

.container {
  background-color: pink;
  overflow: hidden;
  .sliderbar {
    float: left;
    width: 100px;
    background-color: yellow;
  }
  .main {
    margin-left: 120px;
    background-color: #184AFF;
    
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