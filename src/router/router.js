import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../pages/Negocio/Inicio.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "InicioPag" */ "@/pages/InicioPag.vue"),
  },

  {
    path: "/carolina",
    name: "PagCarolina",
    component: () =>
      import(/* webpackChunkName: "PagCarolina" */ "@/pages/PagCarolina.vue"),
  },
  {
    path: "/bicentenario",
    name: "PagBicentenario",
    component: () =>
      import(/* webpackChunkName: "PagBicentenario" */ "@/pages/PagBicentenario.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  

   if (to.path === "/") {
    next();
   
  } else {
    next();
  }
});

export default router;
