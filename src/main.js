import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import utils from './js/utils'
import { get, post } from './js/ajax'
import './js/mock'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'

Vue.prototype.axios = { get, post }
Vue.use(utils)
Vue.use(Antd) // 这个nprogress样式必须引入

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
