import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'reset-css'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
