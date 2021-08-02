import Vue from 'vue'
import Vuex from 'vuex'

import tablet from './modules/tablet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tablet
  },
  strict: true
})
