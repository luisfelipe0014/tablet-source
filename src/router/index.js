import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home')
const usersAD = () => import('@/views/admin/users')
const dashboardAD = () => import('@/views/admin/dashboard')

const dashboardPolice = () => import('@/views/police/dashboard')
const boletimPolice = () => import('@/views/police/boletim')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/police/dashboard',
      name: 'police.dashboard',
      component: dashboardPolice
    }, {
      path: '/police/boletim',
      name: 'police.boletim',
      component: boletimPolice
    }, {
      path: '/admin/usuarios',
      name: 'admin.usuarios',
      component: usersAD
    }, {
      path: '/admin/dashboard',
      name: 'admin.dashboard',
      component: dashboardAD
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
