import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/',
      name: 'paso1',
      component: () => import('../views/paso1.vue')
    },
    {
      path: '/formulario-guitarra2/:nombre/:apellido/:edad/:fecha',
      name: 'paso2',
      component: () => import('../views/paso2.vue')
    },
    {
      path: '/formulario-guitarra3',
      name: 'paso3',
      component: () => import('../views/paso3.vue')
    },
    {
      path: '/resultado',
      name: 'resultado',
      component: () => import('../views/resultadoView.vue')
    }
  ]
})

export default router
