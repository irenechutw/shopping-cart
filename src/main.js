import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Navbar from "./Navbar.vue";
import Carousel from "./Carousel.vue";
import Products from "./Products.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
