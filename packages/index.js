import buoyPopup from "./buoyPopup/index.js";
import customToast from "./customToast/index";

const components = { buoyPopup, customToast };

const install = function(Vue) {
  Object.keys(components).map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window != "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
