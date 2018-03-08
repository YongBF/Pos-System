import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Favorite from '@/components/page/Favorite'
import Me from '@/components/page/Me'
import Feedback from '@/components/page/Feedback'
import Cart from '@/components/page/Cart'
import Member from '@/components/page/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },{
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },{
      path: '/cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/member',
      name: 'Member',
      component: Member
    },{
      path: '/me',
      name: 'Me',
      component: Me
    },{
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    }
  ]
})
