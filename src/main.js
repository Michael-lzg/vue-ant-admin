import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import utils from './js/utils'
import { get, post } from './js/ajax'
import './js/mock'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.prototype.axios = { get, post }
Vue.use(utils)
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
