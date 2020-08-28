import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import buoyPopup from "./../packages/index.js";

Vue.use(buoyPopup.buoyPopup);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
