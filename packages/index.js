import buoyPopup from './buoyPopup/index.js'
import customToast from './customToast/index.js'

const components = { buoyPopup }

const install = function(Vue) {
  Object.keys(components).map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export { customToast, buoyPopup }

export default {
  install,
  customToast,
  ...components
}
