import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import NewAnnounce from 'components/newAnnounce'

import Bask from 'components/Bask'
import ShopCar from 'components/ShopCar'
import Mine from 'components/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/NewAnnounce',
      component: NewAnnounce
    },
    {
      path: '/Bask',
      component: Bask
    },
    {
      path: '/Mine',
      component: Mine
    },
    {
      path: '/ShopCar',
      component: ShopCar
    }
  ]
})
