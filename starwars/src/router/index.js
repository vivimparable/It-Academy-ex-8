import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import paginaStarship from '../views/paginaStarship.vue'
import welcomePage from '../views/welcomePage.vue'
import login from '../views/loginPage.vue'
import register from '../views/registerPage.vue'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/paginaStarship/:id',
    name: 'paginaStarship',
    component: paginaStarship
  },{
    path:'/',
    name:'welcomePage',
    component:welcomePage
  },{
    path:'/login',
    name:'login',
    component:login
  },{
    path:'/register',
    name:'register',
    component:register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
