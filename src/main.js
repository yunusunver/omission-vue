import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import router from "../src/router/index";


Vue.config.productionTip = false;

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount("#app");
