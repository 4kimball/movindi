import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Intro from '../views/Intro'
import Community from '../views/Community'
import Actors from '../views/Actors'
import Profile from '../views/Profile'
import Login from '../views/Login'
import SearchResult from '../views/SearchResult'
import CommunityReviewUpdate from '../views/CommunityReviewUpdate'

import CommunityFree from '../views/CommunityFree'
import CommunityJob from '../views/CommunityJob'
import CommunityReview from '../views/CommunityReview'
import CommunityReviewDetail from '../views/CommunityReviewDetail'
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
        path: 'review',
        name: 'CommunityReview',
        component: CommunityReview
      },
      {
        path: '/review/:article_id',
        name: 'CommunityReviewDetail',
        component: CommunityReviewDetail
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
        path: '/new/post',
        name: 'CommunityWrite',
        component: CommunityWrite
      },
      {
        path: '/new',
        name: 'CommunityReviewUpdate',
        component: CommunityReviewUpdate
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
  },
  {
    path: '/search/result',
    name: 'SearchResult',
    component: SearchResult
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
