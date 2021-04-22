import buoyPopup from './buoyPopup/index.js'
import customToast from './customToast/index.js'
import dialog from './plugins/dialog/index.js'
import plugins from './plugins/index'

const components = { buoyPopup }

const install = function(Vue) {
  Object.keys(components).map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export { customToast, dialog, buoyPopup, plugins }

export default {
  install,
  plugins,
  customToast,
  dialog,
  ...components
}
