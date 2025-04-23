import { createRouter ,createWebHistory} from "vue-router";
// import store from '@/store/index.js'
const routes = [
  {
    path: "/layoutUI",
    name: "layoutUI",
    meta:{
      keepAlive:false
    },
    component: () => import("../views/layoutUI.vue")
  },
  {
    path: "/iconUI",
    name: "iconUI",
    meta:{
      keepAlive:false
    },
    component: () => import("../views/iconUI.vue")
  },
  {
    path: "/colorUI",
    name: "colorUI",
    meta:{
      keepAlive:false
    },
    component: () => import("../views/colorUI.vue")
  },
  {
    path: "/buttonUI",
    name: "buttonUI",
    meta:{
      keepAlive:false
    },
    component: () => import("../views/buttonUI.vue")
  },
  {
    path: "/borderUI",
    name: "borderUI",
    meta:{
      keepAlive:false
    },
    component: () => import("../views/borderUI.vue")
  },
  {
    path: "/TypographyFont",
    name: "TypographyFont",
    meta:{
      keepAlive:false
    },
    component: () => import("../views/TypographyFont.vue")
  },
  {
    path: "/test-ui",
    name: "test-ui",
    meta:{
      keepAlive:false
    },
    component: () => import("../views/test-ui.vue")
  },
];

const router = createRouter({
  history: createWebHistory("/portal-ui"),
  routes,
});

// export 扩展后的路由对象
export default router;
