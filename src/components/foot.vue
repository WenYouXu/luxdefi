<template>
  <div class="foot">
  <div class="item" v-for="(item, index) in items" :key="index" @click="changeActive(index)">
    <router-link :to="`/${item.path}`" :class="{ active: activeIndex === index }">
      <div>
        <img :src="$require_(`${item.img}`)" alt="">
        <p>{{ item.name }}</p>
      </div>
    </router-link>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
      { name: '首页',
        img: '../assets/tabbar/home_1.png',
        path:'home'
      },
      { name: '增加产值',
        img:'../assets/tabbar/output_0.png',
        path:'output'
      },
      { name: '资产',
        img:'../assets/tabbar/asset_0.png',
        path:'asset'
      },
      { name: '订单',
        img:'../assets/tabbar/order_0.png',
        path:'order'
      },
      { name: '我的',
        img:'../assets/tabbar/mine_0.png',
        path:'mine'
      }
    ]) 
const activeIndex = ref(0) ;

const changeActive = (actIndex) => {
    activeIndex.value = actIndex;
    
    // 被选中的项 
    let imgPath = items.value[actIndex].img;
    // 倒数第五个字符替换成1
    items.value[actIndex].img = `${imgPath.slice(0,-5)}1${imgPath.slice(-4)}`
    // 其它为0
    items.value.map((item,index) =>{
      if(index != actIndex) {
        items.value[index].img = `${item.img.slice(0,-5)}0${item.img.slice(-4)}`
      }
    })
  }
</script>

<style lang="scss" scoped>
.foot{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 750px;
  height: 160px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item{
  margin: 0 46px;
  img{
    width: 47px;
    height: 47px;
    margin-bottom: 4px;
  }
  p{
    font-size: 22px;
    margin: 0;
    white-space: nowrap;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #C1CAE0;
    font-size: 22px;
  }
  .active {
    color: #184AFF;
  }
}
</style>