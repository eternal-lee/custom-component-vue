/* eslint-disable no-console */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import customComponent from "./../packages/index.js";
console.log(customComponent);
Vue.use(customComponent.buoyPopup);
Vue.use(customComponent.customToast);
Vue.config.productionTip = false;

console.log(process.env);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
