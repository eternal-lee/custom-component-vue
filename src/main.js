/* eslint-disable no-console */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import buoyPopup from "./../packages/index.js";

Vue.use(buoyPopup.buoyPopup);
Vue.config.productionTip = false;

console.log(process.env);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
