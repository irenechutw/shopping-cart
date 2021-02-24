import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Carousel from "./Carousel.vue";
import Products from "./Products.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Carousel
    },
    {
      path: "/home",
      component: Carousel
    },
    {
      path: "/Products/:id?",
      component: Products
    },
    {
      path: "*",
      redirect: "/home"
    }
  ],
  mode: "history"
});
