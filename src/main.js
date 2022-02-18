import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_GA_ID },
});

Vue.config.productionTip = false;

export const Bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
