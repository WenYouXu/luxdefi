<template>
  <div class="setting">

    <div class="headBg"></div>

    <div class="content">
      <div class="nav" @click="back()"> &lt; 设置</div>

      <div class="settingUl">
        <div class="settingLi">
          <img src="@/assets/setaccount.png" alt="">
          <div>账户信息设置</div>
        </div>
        <div class="settingLi">
          <img src="@/assets/setpass.png" alt="">
          <div>修改登录密码</div>
        </div>
        <div class="settingLi" @click="jump('/langue')">
          <img src="@/assets/setlang.png" alt="">
          <div>更换语言</div>
        </div>
      </div>

      <div class="loginBtn">登录</div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const jump = (path) => {
  router.push(path)
}
const back = () => {
  router.back()
}

</script>

<style lang="scss" scoped>
.setting {
  position: relative;
  color: #000000;
  font-weight: 500;
  font-size: 27px;
}

.headBg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 212px;
  width: 750px;
  background: linear-gradient(180deg, #9FB4FF, #F5F7FA);
}

.content {
  position: relative;
  z-index: 1;
  padding-top: 20px;
  margin: 0px 34px;

  .settingUl {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .settingLi {
      margin-top: 20px;
      display: flex;
      align-items: center;
      width: 674px;
      height: 116px;
      background-color: #fff;
      border-radius: 30px;
      
      img {
        margin-left: 34px;
        margin-right: 14px;
        width: 50px;
        height: 50px;
      }
    }
  }

  .loginBtn{
    margin: 0 auto;
    margin-top: 242px;
    width: 652px;
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

.size45 {
  font-size: 45px;
}

.bold {
  font-weight: bold;
}

.b500 {
  font-weight: 500;
}

.center {
  text-align: center;
}

.mr10 {
  margin-right: 10px;
}

.ml10 {
  margin-left: 10px;
}

.ml36 {
  margin-left: 36px;
}

.ml42 {
  margin-left: 42px;
}

.mt10 {
  margin-top: 10px;
}

.mt50 {
  margin-top: 50px;
}</style>