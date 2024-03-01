import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layout/mainLayout.vue";
import Home from "@/pages/tabBarPages/home.vue";
import Output from "@/pages/tabBarPages/output.vue";
import Test from "@/pages/test/index.vue";
const routes = [
  { path:"/", 
    component: Layout,
    children:[
      {
        path:"",
        redirect:"/home"
      },
      {
        path:"home",
        component: Home
      },
      {
        path:"output",
        component: Output
      }
    ]
  },
  { path:"/test", component: Test }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;