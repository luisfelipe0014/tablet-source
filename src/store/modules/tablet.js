import TabletAPI from '../../TabletAPI'

const state = {
  show: process.env.NODE_ENV !== 'production',
  police: process.env.NODE_ENV !== 'production',
  admin: process.env.NODE_ENV !== 'production'
}

const getters = {
  show: ({ show }) => show,
  police: ({ police }) => police,
  admin: ({ admin }) => admin
}

const actions = {
  setVisibility ({ commit }, show) {
    commit('SET_TABLET_VISIBILITY', show)
  },
  closeTablet () {
    TabletAPI.closeTablet()
  }
}

const mutations = {
  SET_TABLET_VISIBILITY (state, show) {
    state.show = show
  },
  SET_POLICE (state, police) {
    state.police = police
  },
  SET_ADMIN (state, admin) {
    state.admin = admin
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
