import buoyPopup from "./buoyPopup/index.js";

const components = { buoyPopup };

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
