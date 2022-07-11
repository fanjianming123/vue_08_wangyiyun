import Vue from 'vue'
import App from './App.vue'
//全局引入
// import Vant from 'vant';
// import 'vant/lib/index.css';

import '@/assets/mobile/flexible'
import '@/assets/styles//reset.css'

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Search ,
  Tag,
  Toast
} from 'vant'

import router from '@/router'
// Vue.use(Vant);

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Tag)
Vue.use(Toast)

Vue.config.productionTip = false

import { getRecommendedListApi } from '@/apis'
async function fn() {
  try {
    const res = await getRecommendedListApi()
    console.log(res)
    // console.log(aa);
  } catch (e) {
    console.log('出错误了')
  }
}
fn()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
