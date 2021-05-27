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
import AwardMovie from '../views/AwardMovie'
import TodayMovie from '../views/TodayMovie'
import UpcomingMovie from '../views/UpcomingMovie'
import MovieDetail from '../views/MovieDetail'
import CommunityFree from '../views/CommunityFree'
import CommunityJob from '../views/CommunityJob'
import CommunityReview from '../views/CommunityReview'
import CommunityReviewDetail from '../views/CommunityReviewDetail'
import CommunityReviewDetail2 from '../views/CommunityReviewDetail2'
import CommunityWrite from '../views/CommunityWrite'
import Signup from '../views/Signup'
import ProfileActor from '../views/ProfileActor'
import ProfileMovie from '../views/ProfileMovie'
import ProfileArticle from '../views/ProfileArticle'
import ProfileScrap from '../views/ProfileScrap'
import CommunityReviewUpdate2 from '../views/CommunityReviewUpdate2'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/award/movie',
        name: 'AwardMovie',
        component: AwardMovie
      },
      {
        path:'/today/movie',
        name: 'TodayMovie',
        component: TodayMovie
      },
      {
        path: '/upcoming/movie',
        name: 'UpcomingMovie',
        component: UpcomingMovie
      },
    ]
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
        path: '/community/review',
        name: 'CommunityReview',
        component: CommunityReview
      },
      {
        path: '/community/casting',
        name: 'CommunityJob',
        component: CommunityJob
      },
      {
        path: '/community/free',
        name: 'CommunityFree',
        component: CommunityFree
      },
      {
        path: '/community/new/post',
        name: 'CommunityWrite',
        component: CommunityWrite
      },
      {
        path: '/community/new',
        name: 'CommunityReviewUpdate',
        component: CommunityReviewUpdate
      },
      {
        path: '/community/detail/post',
        name: 'CommunityReviewDetail',
        component: CommunityReviewDetail
      },
    ]
  },
  {
    path: '/community/profile/post',
    name: 'CommunityReviewDetail2',
    component: CommunityReviewDetail2
  },
  {
    path: '/community/profile/post/again',
    name: 'CommunityReviewUpdate2',
    component: CommunityReviewUpdate2
  },
  {
    path: '/actors',
    name: 'Actors',
    component: Actors
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    children: [
      {
        path: '/profile/cheer/actors',
        name: 'ProfileActor',
        component: ProfileActor
      },
      {
        path: '/profile/favor/movies',
        name: 'ProfileMovie',
        component: ProfileMovie
      },
      {
        path: '/profile/my/article',
        name: 'ProfileArticle',
        component: ProfileArticle,
      },
      {
        path: '/profile/scrap/article',
        name: 'ProfileScrap',
        component: ProfileScrap,
      },
    ]
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
  },
  {
    path: '/movie/detail',
    name: 'MovieDetail',
    component: MovieDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  const authPaths = ['Login', 'Signup']
  if (accessToken) {
    if (authPaths.includes(to.name)) {

      next({ name: 'Intro' })
    } else {
      next()
    }
  } else {

    if (authPaths.includes(to.name)) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
})

export default router
