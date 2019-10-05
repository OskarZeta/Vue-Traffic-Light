import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/red',
      name: 'red',
      component: () => import('./views/Red.vue')
    },
    {
      path: '/yellow',
      name: 'yellow',
      component: () => import('./views/Yellow.vue')
    },
    {
      path: '/green',
      name: 'green',
      component: () => import('./views/Green.vue')
    },
    {
      path: '*',
      redirect: {
        name: 'red'
      }
    }
  ]
})
