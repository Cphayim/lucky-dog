import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import PlayPage from '@/pages/PlayPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/play',
      name: 'play',
      component: PlayPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
