import PhoneAPI from './../../PhoneAPI'

const state = {
  show: process.env.NODE_ENV !== 'production'
}

const getters = {
  show: ({ show }) => show
}

const actions = {
  setVisibility ({ commit }, show) {
    commit('SET_PHONE_VISIBILITY', show)
  },
  closePhone () {
    PhoneAPI.closePhone()
  }
}

const mutations = {
  SET_PHONE_VISIBILITY (state, show) {
    state.show = show
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
