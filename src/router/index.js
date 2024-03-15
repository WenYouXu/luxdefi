import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layout/mainLayout.vue";
import Home from "@/pages/tabBarPages/home.vue";
import Output from "@/pages/tabBarPages/output.vue";
import Asset from "@/pages/tabBarPages/asset.vue";
import Order from "@/pages/tabBarPages/order.vue";
import Mine from "@/pages/tabBarPages/mine.vue";

import OrderDetail from "@/pages/orderDetail/index.vue";
import Setting from "@/pages/setting/index.vue";
import SetLangue from "@/pages/setting/langue.vue";
import Share from "@/pages/share/index.vue";
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
      },
      {
        path:"asset",
        component: Asset
      },
      {
        path:"order",
        component: Order
      },
      {
        path:"mine",
        component: Mine
      }
    ]
  },
  {
    path:"/orderDetail",
    component:OrderDetail
  },
  {
    path:"/setting",
    component:Setting
  },
  {
    path:"/langue",
    component:SetLangue
  },
  {
    path:"/share",
    component:Share
  },
  { path:"/test", component: Test }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;