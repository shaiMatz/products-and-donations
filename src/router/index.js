import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Payment from '../components/Payment.vue'
import en from '../views/HomeView.vue'
import he from '../views/HomeView.vue'
const routes = [
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/en',
    name: 'en',
    component: en
  },
  {
    path: '/he',
    name: 'he',
    component: he
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
