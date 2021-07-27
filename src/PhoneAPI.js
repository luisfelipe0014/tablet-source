import store from '@/store'
import Vue from 'vue'

const BASE_URL = 'https://tablet/'

/* eslint-disable camelcase */
class PhoneAPI {
  constructor () {
    console.log(BASE_URL)
    window.addEventListener('message', (event) => {
      console.log(BASE_URL)
      const eventType = event.data.event
      if (eventType !== undefined && typeof this['on' + eventType] === 'function') {
        this['on' + eventType](event.data)
      } else if (event.data.show !== undefined) {
        console.log(BASE_URL)
        store.commit('SET_PHONE_VISIBILITY', event.data.show)
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
  async closePhone () {
    return this.post('closePhone')
  }

}

const instance = new PhoneAPI()

export default instance
