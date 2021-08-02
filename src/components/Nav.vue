<template>
  <nav class="tablet-sidebar">
    <div class="sidebar-logo"><img src="../assets/logo.png" style="width: 25px; heigth: 25px;"><p>Alpha Store</p></div>
    <!-- <div class="sidebar-brand-wrapper" v-if="police">Policia Militar</div> -->
    <ul class="nav" v-if="police">
      <div class="title-text">Policia Militar</div>
      <li class="nav-item">
        <router-link tag="li" class="nav-link" class-active="active" to="/police/dashboard" exact>
          <span class="menu-icon"><i class="fas fa-chart-line"></i></span>
          <span class="menu-title">Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link tag="li" class="nav-link" class-active="active" to="/police/boletim" exact>
          <span class="menu-icon"><i class="fas fa-clipboard-list"></i></span>
          <span class="menu-title">Boletim de Ocorrência</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link tag="li" class="nav-link" class-active="active" to="/police/penal" exact>
          <span class="menu-icon"><i class="fad fa-gavel"></i></span>
          <span class="menu-title">Codigo Penal</span>
        </router-link>
      </li>
    </ul>
    <ul class="nav" v-if="admin">
      <div class="title-text">Administração</div>
      <li class="nav-item">
        <router-link tag="li" class="nav-link" class-active="active" to="/admin/dashboard" exact>
          <span class="menu-icon"><i class="fas fa-chart-line"></i></span>
          <span class="menu-title">Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link tag="li" class="nav-link" class-active="active" to="/admin/usuarios" exact>
          <span class="menu-icon"><i class="fas fa-clipboard-list"></i></span>
          <span class="menu-title">Usuarios</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link tag="li" class="nav-link" class-active="active" to="/admin/pesquisa" exact>
          <span class="menu-icon"><i class="fad fa-gavel"></i></span>
          <span class="menu-title">Pesquisa</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link tag="li" class="nav-link" class-active="active" to="/admin/economia" exact>
          <span class="menu-icon"><i class="fas fa-tachometer-alt-fast"></i></span>
          <span class="menu-title">Economia</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['police', 'admin']),
    style () {
      return {
        police: this.police,
        admin: this.admin,
        color: '#FFF'
      }
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>
<style scoped>
.tablet-sidebar{
  padding: 0;
  margin: auto;
  border-radius: 8px;
  height: 96%;
  width: 185px;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  padding-right: 0;
  transition: all .25s ease;
}

.tablet-sidebar {
  margin-left: 13px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 17%);
}

.sidebar-brand-wrapper{
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

.sidebar-logo {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 10px auto -5px auto;
  height: 38px;
}

.sidebar-logo p {
  font-family: "Montserrat SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  color: #7E72F2;
}

.nav {
  padding: 10px 10px !important;
}

.nav {
  list-style: none;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

.title-text {
  font-family: "Montserrat Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 36px;
  color: #999999;
}

.nav-item {
  list-style-type: none;
  display: block;
}

nav li:hover {
  background: #ECECEC;
  border-radius: 4px;
  /* position: relative; */
}

nav li.router-link-active,
nav li.router-link-exact-active {
  background: linear-gradient(224.53deg, #9E94FF 0%, #7E72F2 99.2%);
  box-shadow: -1px 1px 8px rgba(126, 114, 242, 0.578726);
  border-radius: 4px;
  /* position: relative; */
}

nav li:hover .menu-title,
nav li.router-link-active .menu-title,
nav li.router-link-exact-active .menu-title {
  color: #000;
}

.nav .nav-item .nav-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  white-space: nowrap;
  color: #000;
  cursor: pointer;
  text-decoration: auto;
  margin: 5px 0;
  transition: all 0.45s ease;
}

.nav-link {
  display: block;
  padding: 10px 10px;
}

.nav .nav-item .nav-link .menu-icon {
  margin-right: 0.75rem;
  font-size: .8125rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #606060;
}

/* .nav .nav-item .nav-link .menu-title {
  display: inline-block;
  font-family: "Montserrat Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;
  vertical-align: middle;
  transition: all 0.45s ease;
  white-space: break-spaces;
} */

.nav .nav-item .nav-link .menu-title {
  display: inline-block;
  font-family: "Montserrat Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;
  vertical-align: middle;
  transition: all 0.45s ease;
  white-space: break-spaces;
  position: absolute;
  left: 55px;
  width: 116px;
}

</style>
