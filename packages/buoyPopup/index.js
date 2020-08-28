import buoyPopup from "./index.vue";

buoyPopup.install = Vue => {
  return Vue.component(buoyPopup.name, buoyPopup);
};

export default buoyPopup;
