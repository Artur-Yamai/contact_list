import Vue from 'vue'
import VueRouter from 'vue-router'

import vLoginPage from '../components/v-login-page'
import vMain from '../components/v-main'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'login-page',
      component: vLoginPage
    },
    {
      path: '/main',
      name: 'main',
      component: vMain
    },

    {
      path: '*',
      redirect: { name: 'login-page' }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
