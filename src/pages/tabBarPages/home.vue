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

    <div class="info mt36 bold">
      <span class="black size32">信息</span>
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
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
}
.black {
  color: #000000;
}
.size32 {
  font-size: 32px;
}
.bold {
  font-weight: bold;
}
.ml36 {
  margin-left: 36px;
}
.mt36 {
  margin-top: 36px;
}
</style>