<template>
  <div class="output">
    <div class="banner">
      <div class="tabs">
        <div class="tabItem" :class="{ 'activeTab' : activeIndex === 0 }" @click="activeIndex = 0">USDT</div>
        <div class="tabItem" :class="{ 'activeTab' : activeIndex === 1 }" @click="activeIndex = 1">LUX</div>
      </div>
    </div>
    <div class="tips">
      <img src="@/assets/tips.png" alt="">
      <span>请选择支付币种</span>
    </div>
    <div class="list">
      <div class="listUl">
        <div class="listLi">
          <div>
            <div class="title">奖励产值 300 USDT</div>
            <div class="subtitle">
              奖励 <span class="color1">1.5倍</span> 算力产值
            </div>
          </div>
          <div class="liRight">
            200USDT
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const list = ref([]);
  const loading = ref(false);
  const finished = ref(false);
  const activeIndex = ref(0);

  console.log('???');
  // setTimeout(() => {
  //   for (let i = 0; i < 10; i++) {
  //     list.value.push(list.value.length + 1);
  //   }

  //   // 加载状态结束
  //   loading.value = false;

  //   // 数据全部加载完成
  //   if (list.value.length >= 40) {
  //     finished.value = true;
  //   }
  // }, 1000);

</script>

<style lang="scss" scoped>
.output {
  margin-bottom: 250px;
}
.banner{
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 430px;
  width: 750px;
  background-image: url('@/assets/outputBg.png');
  background-size: 100% 100%;
  // padding: 0 38px;
  // box-sizing: border-box;
  .tabs {
    position: relative;
    top: 20px;
    margin: 0 auto;
    width: 422px;
    height: 82px;
    padding: 0 4px;
    display: flex;
    align-items: center;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.28); 
    .tabItem {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 202px;
      height: 72px;
      border-radius: 35px;
      font-weight: 500;
      color: #939393;
    }
    .activeTab {
      background: #2ED8C1;
      color: #ffffff;
      transition: background-color 0.5s ease; 
    }
  }
}
.tips{
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 38px;
  margin-top: 140px;
  font-size: 26px;
  font-weight: 500;
  img {
    width: 33px;
    height: 33px;
    margin-right: 10px;
  }
}
.list {
  position: relative;
  z-index: 2;
  padding: 0px 38px;
  margin: 0 auto;
  .listUl {
    display: flex;
    flex-direction: column;
    align-items: center;
    .listLi {
      height: 170px;
      width: 670px;
      margin-top: 20px;
      background-color: #fff;
      border-radius: 30px;
      padding: 30px 40px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 30px;
        font-weight: 600;
        color: #000000;
      }
      .subtitle {
        font-size: 27px;
      }
      .liRight{
        height: 86px;
        width: 216px;
        background-color: #2ED8C1;
        color: #fff;
        font-size: 27px;
        font-weight: 500;
        line-height: 86px;
        border-radius: 52px;
        text-align: center;
      }
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
</style>