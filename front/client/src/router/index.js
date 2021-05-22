import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Intro from '../views/Intro'
import Community from '../views/Community'
import Actors from '../views/Actors'
import Profile from '../views/Profile'
import Login from '../views/Login'

import CommunityFree from '../views/CommunityFree'
import CommunityJob from '../views/CommunityJob'
import CommunityReview from '../views/CommunityReview'
import CommunityWrite from '../views/CommunityWrite'
import Signup from '../views/Signup'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    children: [
      {
        path: '',
        name: 'CommunityReview',
        component: CommunityReview
      },
      {
        path: 'job',
        name: 'CommunityJob',
        component: CommunityJob
      },
      {
        path: 'free',
        name: 'CommunityFree',
        component: CommunityFree
      },
      {
        path: 'write',
        name: 'CommunityWrite',
        component: CommunityWrite
      },
    ]
  },
  {
    path: '/actors',
    name: 'Actors',
    component: Actors
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
