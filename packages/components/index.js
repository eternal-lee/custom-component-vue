import buoypopup from './buoyPopup'
import cuspicker from './picker'

const components = { buoypopup, cuspicker }

const install = function(Vue) {
  if (install.installed) return false
  install.installed = true

  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      const component = components[key]
      Vue.component(component.name, component)
    }
  }
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
