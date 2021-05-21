import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Intro from '../views/Intro'
import Community from '../views/Community'
import Actors from '../views/Actors'
import Profile from '../views/Profile'

import CommunityFree from '../views/CommunityFree'
import CommunityJob from '../views/CommunityJob'
import CommunityReview from '../views/CommunityReview'
import CommunityWrite from '../views/CommunityWrite'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
