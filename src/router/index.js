import Vue from 'vue'
import VueRouter from 'vue-router'
import DealDamege from '../views/DealDamege.vue'
import DealtDamege from '../views/DealtDamege.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dealdamege',
    name: 'dealdamege',
    component: DealDamege
  },
  {
    path: '/dealtdamege',
    name: 'dealtdamege',
    component: DealtDamege
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
