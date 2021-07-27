import Vue from 'vue'
import Vuex from 'vuex'

import phone from './modules/phone'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    phone
  },
  strict: true
})
