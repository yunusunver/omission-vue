import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import Login from "./view/Login/Login.vue";
import Home from "./view/Home/Home.vue";
import CodeList from "./view/Code/CodeList.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      children: [{ path: "codelist", component: CodeList }],
    },
    { path: "/login", component: Login },
  ],
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount("#app");
