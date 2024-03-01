import { createApp } from 'vue'
import cn from "@/lang/cn.js";
import en from "@/lang/en.js";
import jp from "@/lang/jp.js";
import kr from "@/lang/kr.js";
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import { createI18n } from "vue-i18n";
import { require_ } from "@/utils/utils";

import 'vant/lib/index.css'
import './styles/main.scss'

const messages = {
  en,
  cn,
  jp,
  kr,
};
const language = (navigator.language || "zh-cn").toLocaleLowerCase(); // 这是获取浏览器的语言
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", language.split("-")[1]);
}

const i18n = createI18n({
  locale: localStorage.getItem("lang") || language.split("-")[1] || "cn", // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: "cn", // 设置备用语言
  legacy: false,
  messages,
});

const app = createApp(App);

app.config.globalProperties.$require_ = require_;
app.use(router)
app.use(i18n)
app.mount('#app')
