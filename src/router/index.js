import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Payment from '../components/Payment.vue'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  ,
  {
    path: '/Payment',
    name: 'Payment',
    component: Payment
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
