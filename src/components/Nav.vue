<template>
  <nav class="tablet-sidebar">
    <div class="sidebar-brand-wrapper">Policia Militar</div>
    <div class="navv">
      <div class="nav-ite"> 
        <a href="#" class="nav-link">
          <span class="menu-icon"><i class="fas fa-tachometer-alt-fast"></i></span>
          <span class="menu-title">Dashboard</span>
        </a> 
      </div>
      <div class="nav-ite"> 
        <a href="#" class="nav-link">
          <span class="menu-icon"><i class="fal fa-file-alt"></i></span>
          <span class="menu-title">Boletim Ocorren...</span>
        </a> 
      </div>
      <div class="nav-ite"> 
        <a href="#" class="nav-link">
          <span class="menu-icon"><i class="fad fa-gavel"></i></span>
          <span class="menu-title">Codigo Penal</span>
        </a> 
      </div>
      <div class="nav-ite"> 
        <a href="#" class="nav-link">
          <span class="menu-icon"><i class="fas fa-tachometer-alt-fast"></i></span>
          <span class="menu-title">dashboard</span>
        </a> 
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['themeColor']),
    style () {
      return {
        backgroundColor: this.backgroundColor || this.themeColor,
        color: this.color || '#FFF'
      }
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    showInfoBare: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String
    }
  }
}
</script>
<style scoped>
.tablet-sidebar{
  background: #191c20;
  padding: 0;
  height: 100%;
  width: 198px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  padding-right: 0;
  transition: all .25s ease;
}
.sidebar-brand-wrapper{
  background: #191c24;
  height: 51px;
  width: 197px;
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto';
  letter-spacing: 2px;
  display: grid;
  text-align: center;
  align-items: center;
}
.navv>.nav-ite>.nav-link.active {
  background: #0e0f12;
  position: relative;
}
.navv .nav-ite .nav-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  white-space: nowrap;
  color: #a3a3a3;
  transition-duration: .45s;
  transition-property: color;
  cursor: pointer;
  text-decoration: auto;
}

.nav-link {
  display: block;
  padding: .5rem 1rem;
}

.navv .nav-ite .nav-link .menu-icon {
  margin-right: 0.75rem;
  font-size: .8125rem;
  line-height: 1;
  background: #0d0d0d;
  width: 31px;
  height: 31px;
  border-radius: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.navv .nav-ite .nav-link .menu-title {
  display: inline-block;
  font-size: .9375rem;
  line-height: 1;
  vertical-align: middle;
}

</style>
