import Layout from "@/components/Layout.vue";
import { languages } from "@/plugins/i18n";
import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    beforeEnter(to, from, next) {
      next(store.state.locale);
    },
  },
  {
    path: "/:lang",
    component: Layout,
    beforeEnter(to, from, next) {
      let lang = to.params.lang;
      if (languages.includes(lang)) {
        if (store.state.locale !== lang) {
          store.dispatch("changeLocale", lang);
        }
        return next();
      }
      return next({ path: store.state.locale });
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
