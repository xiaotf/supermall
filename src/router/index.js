import Vue from 'vue'
import Router from 'vue-router'

// 路由无懒加载写法，正常
// import HelloWorld from '@/components/HelloWorld'
// import Hello from '@/components/Hello'
// import home from '@/components/home'

// 路由懒加载写法
const HelloWorld = () => import('@/components/HelloWorld')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')
const Hello = () => import('@/components/Hello')
const home = () => import('@/components/home')
const profile = () => import('@/components/profile')

import axios from 'axios'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/home/:userId',
      name: 'home',
      component: home,
      children:[
        {
          path: 'HomeNews',
          name:'HomeNews',
          component: HomeNews,
        },
        {
          path: 'HomeMessage',
          name:'HomeMessage',
          component: HomeMessage,
        }
      ]
    },

  ],
  
  mode:'history'
  // 导航守卫 位置不对
  // route.beforeEach((to,from,next) => {
  //   next()
  // })
})
