import buoyPopup from './buoyPopup'

const components = { buoyPopup }

const install = (Vue, options) => {
  if (install.installed) return false
  install.installed = true
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      const component = components[key]
      Vue.component(component.name, component)
    }
  }
}

// 如果是直接引入的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install, ...components }
