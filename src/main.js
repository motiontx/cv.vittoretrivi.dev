import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.config.productionTip = false;

export const Bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
