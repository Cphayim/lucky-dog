import '@/styles/lib/reset.css' // 1
import '@/styles/lib/animate.css' // 2
import '@/styles/lib/csshake.min.css' // 3
import '@/styles/common.scss' // 4

import Response from '@/scripts/response'
import Vue from 'vue'
import App from '@/App'
import axios from 'axios'
import router from '@/router'
import store from '@/store/store'

// Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
