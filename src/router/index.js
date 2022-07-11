//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
Vue.use(VueRouter)
const routes = [
  //配置路由规则
  //路由重定向
  {
    path: '/',
    redirect: '/layout/home',
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '/layout/home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: '/layout/search',
        component: Search,
        meta: {
          title: '搜索',
        },
      },
    ],
  },
]
const router = new VueRouter({
  routes,
})
export default router
