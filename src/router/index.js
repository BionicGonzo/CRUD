import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Consultar from '../components/Consultar.vue'
import Eliminar from '../components/Eliminar.vue'
import Actualizar from '../components/Actualizar.vue'
import FormActualizarView from '../views/FormActualizarView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/consultar',
    name: 'consultar',
    component: Consultar
  },
  {
    path: '/eliminar',
    name: 'eliminar',
    component: Eliminar
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: Actualizar
  },
  {
    path: '/formactualizar/:id',
    name: 'formactualizar',
    component: FormActualizarView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
