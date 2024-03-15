<template>
  <div class="langue">

    <div class="headBg"></div>

    <div class="content">
      <div class="nav" @click="back"> &lt; {{ $t('langue.changeLang') }}</div>

      <div class="settingUl">
        <div class="settingLi" @click="selectLanguage(item,index)" v-for="(item,index) in list" :key="item.index">
          <div class="left">
            <img :src="item.img" :alt="item.name">
            <div>{{ item.name }}</div>
          </div>
          <div class="btn" :class="{selected: activeIndex === index}"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useI18n } from "vue-i18n"; 

const router = useRouter()

const { locale } = useI18n();
const { t } = useI18n();
const activeIndex = ref(1)
const require_ = (url) => {
  return new URL(`${url}`, import.meta.url).href;
};

const list = ref([
  { name: 'English',
    value: 'en',
    img: require_('../../assets/english.png') ,
  },
  { name: '简体中文',
    value: 'cn',
    img: require_('../../assets/china.png'),
  },
  { name: '日本',
    value: 'jp',
    img: require_('../../assets/japan.png'),
  },
  { name: '한국어',
    value: 'kr',
    img: require_('../../assets/korea.png'),
  },
])



const selectLanguage = (item,index) => {
  activeIndex.value = index
  locale.value = item.value;
  localStorage.setItem("lang", item.value);
}

const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.langue {
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
      padding: 0 42px 0 34px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 674px;
      height: 116px;
      background-color: #fff;
      border-radius: 30px;
      .left {
        display: flex;
        align-items: center;

        img {
          margin-right: 14px;
          width: 50px;
          height: 50px;
        }
      }
      
      .btn {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 2px solid #D5D5D5;
      }

      .selected {
        background-color: #184AFF;
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