import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueTimeago from './TimeAgo'
import TabletAPI from './TabletAPI'

import AutoFocus from './directives/autofocus'

Vue.use(VueTimeago)
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.prototype.$tabletAPI = TabletAPI

window.VueTimeago = VueTimeago
window.Vue = Vue
window.store = store

Vue.directive('autofocus', AutoFocus)

/* eslint-disable no-new */
window.APP = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
