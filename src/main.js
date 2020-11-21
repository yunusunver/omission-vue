import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import router from "../src/router/index";


Vue.config.productionTip = false;

import Vuelidate from 'vuelidate'
import i18n from './i18n'
Vue.use(Vuelidate)

new Vue({
  vuetify,
  render: (h) => h(App),
  i18n,
  router
}).$mount("#app");
