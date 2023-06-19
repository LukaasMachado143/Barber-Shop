import { createRouter, createWebHistory } from 'vue-router'

//Views

// Login
import loginMain from '@/views/login/login-main.vue'
const routes = [
  {
    path: '/login',
    name: 'login-main',
    component: loginMain
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
