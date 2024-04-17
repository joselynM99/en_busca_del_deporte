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
  // Verificar si la ruta a la que se está intentando acceder no existe en las rutas definidas
  if (!to.matched.length) {
    // Redirigir a la página de inicio o a una página de error personalizada
    next({ name: 'Inicio' }); // Cambia 'Inicio' por el nombre de tu ruta de inicio
  } else {
    // Si la ruta existe, continuar con la navegación normalmente
    next();
  }
});

export default router;
