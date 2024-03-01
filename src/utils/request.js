import axios from "axios";
import { useRouter } from "vue-router";

const service = axios.create({
  baseURL: "/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("baccaratAccessToken");
    const lang = localStorage.getItem("lang") || "cn";

    config.headers = {
      ...config.headers,
      "Game-Auth": `Bearer ${token}`,
      lang,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const { data } = response;

    if (data.code == 0) {
      return Promise.resolve(data.data);
    }else {
      return Promise.reject(data);
    }
  },
  (erro) => {
    console.log(erro);
    if (erro.config.url == "/app/heartbeat") return;
    return Promise.reject(erro);
  }
);

export default service;
