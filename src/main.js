import '@/styles/reset.css' // 1
import '@/styles/animate.css' // 2
import '@/styles/common.scss' // 2

import Response from '@/scripts/response'
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
