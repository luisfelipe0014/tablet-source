<template>
  <div style="height: 100vh; width: 100vw;" @contextmenu="closePhone">
    <div v-if="show === true" @contextmenu.stop>
      <div class="tablet_wrapper">
        <div id="app" class="tablet_screen">
          <Nav />
          <div class="container">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import './PhoneBaseStyle.scss'
import { mapGetters, mapActions } from 'vuex'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  },
  data: function () {
    return {
      soundCall: null
    }
  },
  methods: {
    ...mapActions(['loadConfig', 'rejectCall']),
    closePhone () {
      this.$phoneAPI.closePhone()
    }
  },
  computed: {
    ...mapGetters(['show'])
  },
  mounted () {
    window.addEventListener('message', (event) => {
      if (event.data.keyUp !== undefined) {
        this.$bus.$emit('keyUp' + event.data.keyUp)
      }
    })
    window.addEventListener('keyup', (event) => {
      const keyValid = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Backspace', 'Enter']
      if (keyValid.indexOf(event.key) !== -1) {
        this.$bus.$emit('keyUp' + event.key)
      }
      if (event.key === 'Escape') {
        this.$phoneAPI.closePhone()
      }
    })
  }
}
</script>
