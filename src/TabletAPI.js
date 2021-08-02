import store from '@/store'
import Vue from 'vue'

const BASE_URL = 'https://tablet/'

/* eslint-disable camelcase */
class TabletAPI {
  constructor () {
    window.addEventListener('message', (event) => {
      const eventType = event.data.event
      if (eventType !== undefined && typeof this['on' + eventType] === 'function') {
        this['on' + eventType](event.data)
      } else if (event.data.show !== undefined) {
        store.commit('SET_TABLET_VISIBILITY', event.data.show)
      }
    })
  }

  async post (method, data) {
    const ndata = data === undefined ? '{}' : JSON.stringify(data)
    const response = await window.jQuery.post(BASE_URL + method, ndata)
    return JSON.parse(response)
  }

  async log (...data) {
    if (process.env.NODE_ENV === 'production') {
      return this.post('log', data)
    } else {
      return console.log(...data)
    }
  }

  sendGenericError (data) {
    this.log(`Sending Error: ${data}`)
    Vue.notify({
      title: 'Error',
      message: data,
      backgroundColor: '#e0245e80'
    })
  }

  // === Autre
  async closeTablet () {
    return this.post('closeTablet')
  }

  onupdatePolice (data) {
    store.commit('SET_POLICE', data.police)
  }

  onupdateAdmin (data) {
    store.commit('SET_ADMIN', data.admin)
  }

}

const instance = new TabletAPI()

export default instance
